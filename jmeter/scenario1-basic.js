/**
 * Scenario 1: Kịch bản cơ bản (OPTIMIZED)
 * - Số lượng người dùng (Threads): 10
 * - Số lần lặp (Loop Count): 5 lần
 * - Hành vi: Gửi yêu cầu HTTP GET đến trang chủ
 * - Optimizations: Pipelining, connection reuse, better error handling
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

const scenarioConfig = config.scenarios.basic;

displayScenarioHeader(scenarioConfig.name, {
    connections: scenarioConfig.connections,
    amount: scenarioConfig.amount,
    pipelining: scenarioConfig.pipelining,
    targets: [`${config.baseUrl}${config.endpoints.posts}`]
});

const instance = autocannon({
    url: `${config.baseUrl}${config.endpoints.posts}`,
    connections: scenarioConfig.connections,
    amount: scenarioConfig.amount,
    timeout: scenarioConfig.timeout,
    pipelining: scenarioConfig.pipelining,
    title: 'Scenario 1 - Basic Test (Optimized)',

    // Optimizations
    reconnectRate: 0,           // Reuse connections
    bailout: scenarioConfig.amount * 0.1, // Stop if 10% errors

    // HTTP Request configuration
    requests: [
        createRequest('GET', config.endpoints.posts)
    ]
}, (err, result) => {
    if (err) {
        console.error('❌ Lỗi:', err);
        return;
    }

    displayResults(result);
    saveResults(resultsDir, 'scenario1-results', result);
});

// Hiển thị progress
autocannon.track(instance, { renderProgressBar: true });

module.exports = instance;
