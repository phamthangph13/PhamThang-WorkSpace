/**
 * Run All Performance Tests
 * Chạy tất cả 3 kịch bản kiểm thử tuần tự và tổng hợp kết quả
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

// Lưu trữ kết quả tất cả scenarios
const allResults = [];

// Hàm chạy một scenario
function runScenario(scenarioName, scenarioOptions, requests) {
    return new Promise((resolve, reject) => {
        console.log('\n' + '='.repeat(70));
        console.log(`🚀 ĐANG CHẠY: ${scenarioName}`);
        console.log('='.repeat(70));

        const instance = autocannon({
            ...scenarioOptions,
            requests: requests
        }, (err, result) => {
            if (err) {
                reject(err);
                return;
            }

            console.log(`\n✅ ${scenarioName} - HOÀN THÀNH`);
            console.log(`   Requests: ${result.requests.total} | Latency: ${result.latency.mean.toFixed(2)}ms | Errors: ${result.errors}`);

            resolve({
                name: scenarioName,
                result: result
            });
        });

        autocannon.track(instance, { renderProgressBar: true });
    });
}

// Chạy tất cả scenarios
async function runAllTests() {
    console.log('\n');
    console.log('╔══════════════════════════════════════════════════════════════════╗');
    console.log('║     🔥 JMETER-JS PERFORMANCE TESTING - CHẠY TẤT CẢ KỊCH BẢN 🔥    ║');
    console.log('╠══════════════════════════════════════════════════════════════════╣');
    console.log(`║  Target: ${config.baseUrl.padEnd(54)}║`);
    console.log(`║  Thời gian: ${new Date().toLocaleString('vi-VN').padEnd(51)}║`);
    console.log('╚══════════════════════════════════════════════════════════════════╝');

    const startTime = Date.now();

    try {
        // Scenario 1: Basic
        const result1 = await runScenario(
            'Scenario 1: Kịch bản cơ bản',
            {
                url: config.baseUrl,
                connections: config.scenarios.basic.connections,
                amount: config.scenarios.basic.amount,
                timeout: config.scenarios.basic.timeout,
                title: 'Scenario 1 - Basic Test'
            },
            [{
                method: 'GET',
                path: config.endpoints.posts,
                headers: { 'Content-Type': 'application/json' }
            }]
        );
        allResults.push(result1);

        // Đợi 3 giây giữa các tests
        console.log('\n⏳ Đợi 3 giây trước khi chạy scenario tiếp theo...\n');
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Scenario 2: Heavy Load
        const result2 = await runScenario(
            'Scenario 2: Kịch bản tải nặng',
            {
                url: config.baseUrl,
                connections: config.scenarios.heavyLoad.connections,
                duration: config.scenarios.heavyLoad.duration,
                timeout: config.scenarios.heavyLoad.timeout,
                title: 'Scenario 2 - Heavy Load Test'
            },
            [
                { method: 'GET', path: config.endpoints.posts, headers: { 'Content-Type': 'application/json' } },
                { method: 'GET', path: config.endpoints.users, headers: { 'Content-Type': 'application/json' } }
            ]
        );
        allResults.push(result2);

        // Đợi 3 giây
        console.log('\n⏳ Đợi 3 giây trước khi chạy scenario tiếp theo...\n');
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Scenario 3: Custom
        const result3 = await runScenario(
            'Scenario 3: Kịch bản tùy chỉnh',
            {
                url: config.baseUrl,
                connections: config.scenarios.custom.connections,
                duration: config.scenarios.custom.duration,
                timeout: config.scenarios.custom.timeout,
                title: 'Scenario 3 - Custom Test'
            },
            [
                {
                    method: 'POST',
                    path: config.endpoints.posts,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ title: 'Test', body: 'Test body', userId: 1 })
                },
                { method: 'GET', path: config.endpoints.comments, headers: { 'Content-Type': 'application/json' } },
                { method: 'GET', path: config.endpoints.todos, headers: { 'Content-Type': 'application/json' } }
            ]
        );
        allResults.push(result3);

        const endTime = Date.now();
        const totalTime = ((endTime - startTime) / 1000).toFixed(2);

        // Tổng hợp kết quả
        console.log('\n\n');
        console.log('╔══════════════════════════════════════════════════════════════════╗');
        console.log('║                    📊 TỔNG HỢP KẾT QUẢ                           ║');
        console.log('╚══════════════════════════════════════════════════════════════════╝');

        console.log('\n┌─────────────────────────────────────────────────────────────────────────────────────────────────┐');
        console.log('│ Scenario                        │ Requests │ Latency (ms) │ Throughput │ Errors │ Error Rate │');
        console.log('├─────────────────────────────────────────────────────────────────────────────────────────────────┤');

        allResults.forEach(({ name, result }) => {
            const shortName = name.substring(0, 30).padEnd(30);
            const requests = result.requests.total.toString().padStart(8);
            const latency = result.latency.mean.toFixed(2).padStart(12);
            const throughput = (result.throughput.mean / 1024).toFixed(2).padStart(8) + ' KB/s';
            const errors = result.errors.toString().padStart(6);
            const errorRate = ((result.errors / result.requests.total) * 100).toFixed(2).padStart(9) + '%';

            console.log(`│ ${shortName} │ ${requests} │ ${latency} │ ${throughput} │ ${errors} │ ${errorRate} │`);
        });

        console.log('└─────────────────────────────────────────────────────────────────────────────────────────────────┘');

        console.log(`\n⏱️  Tổng thời gian chạy: ${totalTime} giây`);

        // Lưu tổng hợp kết quả
        const summaryFile = path.join(resultsDir, 'all-results-summary.json');
        const summaryData = {
            timestamp: new Date().toISOString(),
            totalDuration: totalTime,
            targetUrl: config.baseUrl,
            scenarios: allResults.map(({ name, result }) => ({
                name,
                totalRequests: result.requests.total,
                meanLatency: result.latency.mean,
                minLatency: result.latency.min,
                maxLatency: result.latency.max,
                p50Latency: result.latency.p50,
                p99Latency: result.latency.p99,
                throughput: result.throughput.mean,
                requestsPerSec: result.requests.mean,
                errors: result.errors,
                timeouts: result.timeouts,
                errorRate: (result.errors / result.requests.total) * 100
            }))
        };

        fs.writeFileSync(summaryFile, JSON.stringify(summaryData, null, 2));
        console.log(`\n💾 Tổng hợp kết quả đã lưu: ${summaryFile}`);

        // Tạo CSV tổng hợp
        const csvSummary = path.join(resultsDir, 'all-results-summary.csv');
        const csvHeader = 'Scenario,Total Requests,Mean Latency (ms),Min Latency,Max Latency,P50,P99,Throughput (bytes/s),Requests/s,Errors,Error Rate (%)';
        const csvRows = allResults.map(({ name, result }) =>
            `"${name}",${result.requests.total},${result.latency.mean.toFixed(2)},${result.latency.min},${result.latency.max},${result.latency.p50},${result.latency.p99},${result.throughput.mean.toFixed(2)},${result.requests.mean.toFixed(2)},${result.errors},${((result.errors / result.requests.total) * 100).toFixed(2)}`
        );
        fs.writeFileSync(csvSummary, [csvHeader, ...csvRows].join('\n'));
        console.log(`📄 CSV tổng hợp đã lưu: ${csvSummary}`);

        console.log('\n✅ TẤT CẢ KỊCH BẢN ĐÃ HOÀN THÀNH!');

    } catch (error) {
        console.error('❌ Lỗi khi chạy tests:', error);
    }
}

// Chạy tests
runAllTests();
