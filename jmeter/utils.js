/**
 * Utility functions for performance testing
 */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

/**
 * Ensure results directory exists
 */
function ensureResultsDir(resultsPath) {
    if (!fs.existsSync(resultsPath)) {
        fs.mkdirSync(resultsPath, { recursive: true });
    }
}

/**
 * Display scenario header
 */
function displayScenarioHeader(scenarioName, config) {
    console.log('='.repeat(60));
    console.log(chalk.cyan.bold(`🚀 ${scenarioName.toUpperCase()}`));
    console.log('='.repeat(60));
    console.log(chalk.yellow('📊 Cấu hình:'));

    if (config.connections) {
        console.log(`   - Số lượng connections: ${config.connections}`);
    }
    if (config.amount) {
        console.log(`   - Tổng số requests: ${config.amount}`);
    }
    if (config.duration) {
        console.log(`   - Thời gian chạy: ${config.duration} giây`);
    }
    if (config.pipelining) {
        console.log(`   - Pipelining: ${config.pipelining}`);
    }
    if (config.targets) {
        console.log(`   - Target URLs:`);
        config.targets.forEach((target, idx) => {
            console.log(`     ${idx + 1}. ${target}`);
        });
    }
    console.log('='.repeat(60));
}

/**
 * Display test results
 */
function displayResults(result) {
    console.log('\n' + chalk.green.bold('📈 KẾT QUẢ KIỂM THỬ:'));
    console.log('-'.repeat(60));
    console.log(`✅ Tổng số requests: ${chalk.cyan(result.requests.total)}`);
    console.log(`⏱️  Response Time (Latency):`);
    console.log(`   - Trung bình: ${chalk.yellow(result.latency.mean.toFixed(2))} ms`);
    console.log(`   - Min: ${result.latency.min} ms`);
    console.log(`   - Max: ${result.latency.max} ms`);
    console.log(`   - P50: ${result.latency.p50} ms`);

    if (result.latency.p75) {
        console.log(`   - P75: ${result.latency.p75} ms`);
    }
    if (result.latency.p90) {
        console.log(`   - P90: ${result.latency.p90} ms`);
    }
    if (result.latency.p99) {
        console.log(`   - P99: ${result.latency.p99} ms`);
    }

    console.log(`📊 Throughput: ${chalk.magenta((result.throughput.mean / 1024).toFixed(2))} KB/s`);
    console.log(`🔄 Requests/sec: ${chalk.green(result.requests.mean.toFixed(2))}`);

    const errorRate = ((result.errors / result.requests.total) * 100).toFixed(2);
    const errorColor = result.errors > 0 ? chalk.red : chalk.green;
    console.log(`❌ Errors: ${errorColor(result.errors)}`);
    console.log(`⚠️  Timeouts: ${result.timeouts}`);
    console.log(`📉 Error Rate: ${errorColor(errorRate + '%')}`);

    if (result.duration) {
        console.log(`⏰ Thời gian chạy: ${result.duration} giây`);
    }
    console.log('-'.repeat(60));
}

/**
 * Save results to JSON file
 */
function saveResultsJSON(resultsDir, filename, result) {
    const resultFile = path.join(resultsDir, filename);
    fs.writeFileSync(resultFile, JSON.stringify(result, null, 2));
    console.log(chalk.blue(`💾 Kết quả JSON đã lưu: ${resultFile}`));
    return resultFile;
}

/**
 * Save results to CSV file
 */
function saveResultsCSV(resultsDir, filename, result) {
    const csvFile = path.join(resultsDir, filename);
    const csvContent = [
        'Metric,Value',
        `Total Requests,${result.requests.total}`,
        result.duration ? `Duration (s),${result.duration}` : null,
        `Mean Latency (ms),${result.latency.mean.toFixed(2)}`,
        `Min Latency (ms),${result.latency.min}`,
        `Max Latency (ms),${result.latency.max}`,
        `P50 Latency (ms),${result.latency.p50}`,
        result.latency.p75 ? `P75 Latency (ms),${result.latency.p75}` : null,
        result.latency.p90 ? `P90 Latency (ms),${result.latency.p90}` : null,
        result.latency.p99 ? `P99 Latency (ms),${result.latency.p99}` : null,
        `Throughput (bytes/sec),${result.throughput.mean.toFixed(2)}`,
        `Throughput (KB/sec),${(result.throughput.mean / 1024).toFixed(2)}`,
        `Requests/sec,${result.requests.mean.toFixed(2)}`,
        `Errors,${result.errors}`,
        `Timeouts,${result.timeouts}`,
        `Error Rate (%),${((result.errors / result.requests.total) * 100).toFixed(2)}`
    ].filter(Boolean).join('\n');

    fs.writeFileSync(csvFile, csvContent);
    console.log(chalk.blue(`📄 Kết quả CSV đã lưu: ${csvFile}`));
    return csvFile;
}

/**
 * Save all results (JSON + CSV)
 */
function saveResults(resultsDir, baseName, result) {
    saveResultsJSON(resultsDir, `${baseName}.json`, result);
    saveResultsCSV(resultsDir, `${baseName}.csv`, result);
}

/**
 * Create standard request with headers
 */
function createRequest(method, path, body = null) {
    const request = {
        method,
        path,
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'JMeter-JS-Performance-Test/1.0'
        }
    };

    if (body) {
        request.body = typeof body === 'string' ? body : JSON.stringify(body);
    }

    return request;
}

module.exports = {
    ensureResultsDir,
    displayScenarioHeader,
    displayResults,
    saveResultsJSON,
    saveResultsCSV,
    saveResults,
    createRequest
};
