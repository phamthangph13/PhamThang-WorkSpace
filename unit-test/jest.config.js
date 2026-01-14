module.exports = {
    // Thư mục chứa test files
    testMatch: ['**/test/**/*.test.js'],

    // Môi trường chạy test
    testEnvironment: 'node',

    // Hiển thị output chi tiết
    verbose: true,

    // Coverage configuration
    collectCoverageFrom: [
        'src/**/*.js',
        '!node_modules/**'
    ],

    // Coverage thresholds
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    }
};
