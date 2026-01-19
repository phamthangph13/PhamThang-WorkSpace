/**
 * Scenario 1: Kịch bản cơ bản
 * - Số lượng người dùng (Threads): 10
 * - Số lần lặp (Loop Count): 5 lần
 * - Hành vi: Gửi yêu cầu HTTP GET đến trang chủ
 */

const autocannon = require('autocannon');
const config = require('./config');
const fs = require('fs');
const path = require('path');

// Đảm bảo thư mục results tồn tại
const resultsDir = path.join(__dirname, 'results');
if (!fs.existsSync(resultsDir)) {
    fs.mkdirSync(resultsDir, { recursive: true });
}

const scenarioConfig = config.scenarios.basic;

console.log('='.repeat(60));
console.log(`🚀 SCENARIO 1: ${scenarioConfig.name.toUpperCase()}`);
console.log('='.repeat(60));
console.log(`📊 Cấu hình:`);
console.log(`   - Số lượng người dùng (connections): ${scenarioConfig.connections}`);
console.log(`   - Tổng số requests: ${scenarioConfig.amount}`);
console.log(`   - Target URL: ${config.baseUrl}${config.endpoints.posts}`);
console.log('='.repeat(60));

const instance = autocannon({
    url: `${config.baseUrl}${config.endpoints.posts}`,
    connections: scenarioConfig.connections,
    amount: scenarioConfig.amount,
    timeout: scenarioConfig.timeout,
    title: 'Scenario 1 - Basic Test',

    // HTTP Request configuration
    requests: [
        {
            method: 'GET',
            path: config.endpoints.posts,
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'JMeter-JS-Performance-Test/1.0'
            }
        }
    ]
}, (err, result) => {
    if (err) {
        console.error('❌ Lỗi:', err);
        return;
    }

    // Hiển thị kết quả
    console.log('\n📈 KẾT QUẢ KIỂM THỬ:');
    console.log('-'.repeat(60));
    console.log(`✅ Tổng số requests: ${result.requests.total}`);
    console.log(`⏱️  Response Time (Latency):`);
    console.log(`   - Trung bình: ${result.latency.mean.toFixed(2)} ms`);
    console.log(`   - Min: ${result.latency.min} ms`);
    console.log(`   - Max: ${result.latency.max} ms`);
    console.log(`   - P50: ${result.latency.p50} ms`);
    console.log(`   - P99: ${result.latency.p99} ms`);
    console.log(`📊 Throughput: ${result.throughput.mean.toFixed(2)} bytes/sec`);
    console.log(`🔄 Requests/sec: ${result.requests.mean.toFixed(2)}`);
    console.log(`❌ Errors: ${result.errors}`);
    console.log(`⚠️  Timeouts: ${result.timeouts}`);
    console.log(`📉 Error Rate: ${((result.errors / result.requests.total) * 100).toFixed(2)}%`);
    console.log('-'.repeat(60));

    // Lưu kết quả ra file JSON
    const resultFile = path.join(resultsDir, 'scenario1-results.json');
    fs.writeFileSync(resultFile, JSON.stringify(result, null, 2));
    console.log(`💾 Kết quả đã lưu: ${resultFile}`);

    // Lưu kết quả ra file CSV
    const csvFile = path.join(resultsDir, 'scenario1-results.csv');
    const csvContent = [
        'Metric,Value',
        `Total Requests,${result.requests.total}`,
        `Mean Latency (ms),${result.latency.mean.toFixed(2)}`,
        `Min Latency (ms),${result.latency.min}`,
        `Max Latency (ms),${result.latency.max}`,
        `P50 Latency (ms),${result.latency.p50}`,
        `P99 Latency (ms),${result.latency.p99}`,
        `Throughput (bytes/sec),${result.throughput.mean.toFixed(2)}`,
        `Requests/sec,${result.requests.mean.toFixed(2)}`,
        `Errors,${result.errors}`,
        `Timeouts,${result.timeouts}`,
        `Error Rate (%),${((result.errors / result.requests.total) * 100).toFixed(2)}`
    ].join('\n');
    fs.writeFileSync(csvFile, csvContent);
    console.log(`📄 CSV đã lưu: ${csvFile}`);
});

// Hiển thị progress
autocannon.track(instance, { renderProgressBar: true });

module.exports = instance;
