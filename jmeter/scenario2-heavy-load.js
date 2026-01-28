/**
 * Scenario 2: Kịch bản tải nặng (OPTIMIZED)
 * - Số lượng người dùng: 50
 * - Ramp-up Period: 30 giây
 * - Hành vi: Gửi yêu cầu HTTP GET đến trang chủ và 1 trang con
 * - Optimizations: Higher pipelining, connection reuse, better error handling
 */

const autocannon = require('autocannon');
const config = require('./config');
const path = require('path');
const {
    ensureResultsDir,
    displayScenarioHeader,
    displayResults,
    saveResults,
    createRequest
} = require('./utils');

const resultsDir = path.join(__dirname, 'results');
ensureResultsDir(resultsDir);

const scenarioConfig = config.scenarios.heavyLoad;

displayScenarioHeader(scenarioConfig.name, {
    connections: scenarioConfig.connections,
    duration: scenarioConfig.duration,
    pipelining: scenarioConfig.pipelining,
    targets: [
        `${config.baseUrl}${config.endpoints.posts}`,
        `${config.baseUrl}${config.endpoints.users}`,
        `${config.baseUrl}${config.endpoints.singlePost}`
    ]
});

const instance = autocannon({
    url: config.baseUrl,
    connections: scenarioConfig.connections,
    duration: scenarioConfig.duration,
    timeout: scenarioConfig.timeout,
    pipelining: scenarioConfig.pipelining,
    title: 'Scenario 2 - Heavy Load Test (Optimized)',

    // Optimizations
    reconnectRate: 0,
    bailout: 1000,  // Stop if 1000 errors

    // Gửi requests đến nhiều endpoints (trang chủ + trang con)
    requests: [
        createRequest('GET', config.endpoints.posts),
        createRequest('GET', config.endpoints.users),
        createRequest('GET', config.endpoints.singlePost)
    ]
}, (err, result) => {
    if (err) {
        console.error('❌ Lỗi:', err);
        return;
    }

    displayResults(result);
    saveResults(resultsDir, 'scenario2-results', result);
});

// Hiển thị progress
autocannon.track(instance, { renderProgressBar: true });

module.exports = instance;
