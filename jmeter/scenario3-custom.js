/**
 * Scenario 3: Kịch bản tùy chỉnh
 * - Số lượng người dùng: 20
 * - Thời gian chạy: 60 giây
 * - Hành vi: Gửi yêu cầu HTTP POST (tạo resource mới) và GET 2 trang con khác nhau
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

const scenarioConfig = config.scenarios.custom;

console.log('='.repeat(60));
console.log(`🚀 SCENARIO 3: ${scenarioConfig.name.toUpperCase()}`);
console.log('='.repeat(60));
console.log(`📊 Cấu hình:`);
console.log(`   - Số lượng người dùng (connections): ${scenarioConfig.connections}`);
console.log(`   - Thời gian chạy: ${scenarioConfig.duration} giây`);
console.log(`   - Requests:`);
console.log(`     1. POST ${config.baseUrl}${config.endpoints.posts} (Tạo bài viết mới)`);
console.log(`     2. GET ${config.baseUrl}${config.endpoints.comments}`);
console.log(`     3. GET ${config.baseUrl}${config.endpoints.todos}`);
console.log('='.repeat(60));

const instance = autocannon({
    url: config.baseUrl,
    connections: scenarioConfig.connections,
    duration: scenarioConfig.duration,
    timeout: scenarioConfig.timeout,
    title: 'Scenario 3 - Custom Test with POST',

    // Kết hợp POST và GET requests
    requests: [
        {
            method: 'POST',
            path: config.endpoints.posts,
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'JMeter-JS-Performance-Test/1.0'
            },
            body: JSON.stringify({
                title: 'Performance Test Post',
                body: 'This is a test post created during performance testing',
                userId: 1
            })
        },
        {
            method: 'GET',
            path: config.endpoints.comments,
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'JMeter-JS-Performance-Test/1.0'
            }
        },
        {
            method: 'GET',
            path: config.endpoints.todos,
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'JMeter-JS-Performance-Test/1.0'
            }
        },
        {
            method: 'GET',
            path: config.endpoints.albums,
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
    console.log(`   - P75: ${result.latency.p75} ms`);
    console.log(`   - P90: ${result.latency.p90} ms`);
    console.log(`   - P99: ${result.latency.p99} ms`);
    console.log(`📊 Throughput: ${result.throughput.mean.toFixed(2)} bytes/sec`);
    console.log(`🔄 Requests/sec: ${result.requests.mean.toFixed(2)}`);
    console.log(`❌ Errors: ${result.errors}`);
    console.log(`⚠️  Timeouts: ${result.timeouts}`);
    console.log(`📉 Error Rate: ${((result.errors / result.requests.total) * 100).toFixed(2)}%`);
    console.log(`⏰ Thời gian chạy: ${result.duration} giây`);
    console.log('-'.repeat(60));

    // Phân tích chi tiết theo loại request
    console.log('\n📋 PHÂN TÍCH CHI TIẾT:');
    console.log('-'.repeat(60));
    console.log('Kịch bản này bao gồm:');
    console.log('  - POST /posts: Tạo bài viết mới');
    console.log('  - GET /comments: Lấy danh sách comments');
    console.log('  - GET /todos: Lấy danh sách todos');
    console.log('  - GET /albums: Lấy danh sách albums');
    console.log('-'.repeat(60));

    // Lưu kết quả ra file JSON
    const resultFile = path.join(resultsDir, 'scenario3-results.json');
    fs.writeFileSync(resultFile, JSON.stringify(result, null, 2));
    console.log(`💾 Kết quả đã lưu: ${resultFile}`);

    // Lưu kết quả ra file CSV
    const csvFile = path.join(resultsDir, 'scenario3-results.csv');
    const csvContent = [
        'Metric,Value',
        `Total Requests,${result.requests.total}`,
        `Duration (s),${result.duration}`,
        `Mean Latency (ms),${result.latency.mean.toFixed(2)}`,
        `Min Latency (ms),${result.latency.min}`,
        `Max Latency (ms),${result.latency.max}`,
        `P50 Latency (ms),${result.latency.p50}`,
        `P75 Latency (ms),${result.latency.p75}`,
        `P90 Latency (ms),${result.latency.p90}`,
        `P99 Latency (ms),${result.latency.p99}`,
        `Throughput (bytes/sec),${result.throughput.mean.toFixed(2)}`,
        `Requests/sec,${result.requests.mean.toFixed(2)}`,
        `Errors,${result.errors}`,
        `Timeouts,${result.timeouts}`,
        `Error Rate (%),${((result.errors / result.requests.total) * 100).toFixed(2)}`,
        `Request Types,POST + GET (mixed)`
    ].join('\n');
    fs.writeFileSync(csvFile, csvContent);
    console.log(`📄 CSV đã lưu: ${csvFile}`);
});

// Hiển thị progress
autocannon.track(instance, { renderProgressBar: true });

module.exports = instance;
