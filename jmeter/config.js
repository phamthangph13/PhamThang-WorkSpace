/**
 * Configuration file for performance testing
 * Target: JSONPlaceholder - Free fake API for testing
 */

const config = {
    // Base URL của website được kiểm thử
    baseUrl: 'https://jsonplaceholder.typicode.com',

    // Các endpoints để kiểm thử
    endpoints: {
        home: '/',
        posts: '/posts',
        comments: '/comments',
        users: '/users',
        albums: '/albums',
        photos: '/photos',
        todos: '/todos',
        // Endpoint cụ thể
        singlePost: '/posts/1',
        singleUser: '/users/1',
        postComments: '/posts/1/comments'
    },

    // Cấu hình cho từng kịch bản
    scenarios: {
        // Scenario 1: Kịch bản cơ bản
        basic: {
            name: 'Kịch bản cơ bản',
            connections: 10,      // Số lượng người dùng (threads)
            amount: 50,           // Tổng số requests (10 users x 5 loops)
            timeout: 10,          // Timeout (giây)
            pipelining: 1         // HTTP pipelining (tăng lên để tối ưu)
        },

        // Scenario 2: Kịch bản tải nặng
        heavyLoad: {
            name: 'Kịch bản tải nặng',
            connections: 50,      // Số lượng người dùng
            duration: 30,         // Thời gian chạy (giây) - Ramp-up period
            timeout: 10,
            pipelining: 10        // Nhiều requests song song hơn
        },

        // Scenario 3: Kịch bản tùy chỉnh
        custom: {
            name: 'Kịch bản tùy chỉnh',
            connections: 20,      // Số lượng người dùng
            duration: 60,         // Thời gian chạy (giây)
            timeout: 10,
            pipelining: 5         // Cân bằng giữa performance và resource
        }
    },

    // Performance optimization settings
    performance: {
        // Connection pooling
        maxConnections: 100,
        // Warmup requests before actual testing
        warmupRequests: 10,
        // Delay between scenarios (ms)
        scenarioDelay: 3000
    },

    // Output directory cho kết quả
    outputDir: './results'
};

module.exports = config;
