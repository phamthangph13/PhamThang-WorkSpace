const StudentAnalyzer = require('../src/StudentAnalyzer');

describe('StudentAnalyzer', () => {
    let analyzer;

    // Khởi tạo instance mới trước mỗi test
    beforeEach(() => {
        analyzer = new StudentAnalyzer();
    });

    // =====================================================
    // TEST CASES CHO countExcellentStudents()
    // =====================================================
    describe('countExcellentStudents', () => {

        // -------------------------------------------------
        // TRƯỜNG HỢP BÌNH THƯỜNG
        // -------------------------------------------------
        describe('Trường hợp bình thường', () => {
            test('Danh sách có nhiều điểm hợp lệ và không hợp lệ', () => {
                // 9.0 và 8.5 là điểm giỏi, 7.0 không phải, 11.0 và -1.0 không hợp lệ
                const scores = [9.0, 8.5, 7.0, 11.0, -1.0];
                expect(analyzer.countExcellentStudents(scores)).toBe(2);
            });

            test('Danh sách toàn bộ điểm hợp lệ', () => {
                const scores = [8.0, 9.5, 7.5, 6.0, 10.0];
                // 8.0, 9.5, 10.0 là điểm giỏi (>= 8.0)
                expect(analyzer.countExcellentStudents(scores)).toBe(3);
            });

            test('Danh sách không có học sinh giỏi', () => {
                const scores = [5.0, 6.5, 7.0, 7.9];
                expect(analyzer.countExcellentStudents(scores)).toBe(0);
            });

            test('Tất cả học sinh đều giỏi', () => {
                const scores = [8.0, 8.5, 9.0, 9.5, 10.0];
                expect(analyzer.countExcellentStudents(scores)).toBe(5);
            });
        });

        // -------------------------------------------------
        // TRƯỜNG HỢP BIÊN
        // -------------------------------------------------
        describe('Trường hợp biên', () => {
            test('Danh sách trống', () => {
                expect(analyzer.countExcellentStudents([])).toBe(0);
            });

            test('Danh sách null', () => {
                expect(analyzer.countExcellentStudents(null)).toBe(0);
            });

            test('Danh sách undefined', () => {
                expect(analyzer.countExcellentStudents(undefined)).toBe(0);
            });

            test('Danh sách chỉ chứa giá trị 0', () => {
                const scores = [0, 0, 0];
                expect(analyzer.countExcellentStudents(scores)).toBe(0);
            });

            test('Danh sách chỉ chứa giá trị 10', () => {
                const scores = [10, 10, 10];
                expect(analyzer.countExcellentStudents(scores)).toBe(3);
            });

            test('Điểm đúng bằng 8.0 (ranh giới học sinh giỏi)', () => {
                const scores = [8.0];
                expect(analyzer.countExcellentStudents(scores)).toBe(1);
            });

            test('Điểm ngay dưới 8.0', () => {
                const scores = [7.99];
                expect(analyzer.countExcellentStudents(scores)).toBe(0);
            });

            test('Danh sách có một phần tử', () => {
                expect(analyzer.countExcellentStudents([9.0])).toBe(1);
                expect(analyzer.countExcellentStudents([7.0])).toBe(0);
            });
        });

        // -------------------------------------------------
        // TRƯỜNG HỢP NGOẠI LỆ
        // -------------------------------------------------
        describe('Trường hợp ngoại lệ', () => {
            test('Có điểm < 0', () => {
                const scores = [9.0, -5.0, 8.5];
                // Bỏ qua -5.0, còn 9.0 và 8.5 là giỏi
                expect(analyzer.countExcellentStudents(scores)).toBe(2);
            });

            test('Có điểm > 10', () => {
                const scores = [15.0, 8.0, 9.0];
                // Bỏ qua 15.0, còn 8.0 và 9.0 là giỏi
                expect(analyzer.countExcellentStudents(scores)).toBe(2);
            });

            test('Tất cả điểm đều không hợp lệ', () => {
                const scores = [-1.0, 11.0, 100.0, -50.0];
                expect(analyzer.countExcellentStudents(scores)).toBe(0);
            });

            test('Điểm đúng bằng ranh giới 0 và 10', () => {
                const scores = [0, 10];
                // 0 hợp lệ nhưng không giỏi, 10 hợp lệ và giỏi
                expect(analyzer.countExcellentStudents(scores)).toBe(1);
            });
        });
    });

    // =====================================================
    // TEST CASES CHO calculateValidAverage()
    // =====================================================
    describe('calculateValidAverage', () => {

        // -------------------------------------------------
        // TRƯỜNG HỢP BÌNH THƯỜNG
        // -------------------------------------------------
        describe('Trường hợp bình thường', () => {
            test('Danh sách có nhiều điểm hợp lệ và không hợp lệ', () => {
                const scores = [9.0, 8.5, 7.0, 11.0, -1.0];
                // Chỉ tính 9.0 + 8.5 + 7.0 = 24.5 / 3 = 8.17 (làm tròn)
                expect(analyzer.calculateValidAverage(scores)).toBeCloseTo(8.17, 2);
            });

            test('Danh sách toàn bộ điểm hợp lệ', () => {
                const scores = [8.0, 9.0, 7.0, 6.0, 10.0];
                // (8 + 9 + 7 + 6 + 10) / 5 = 40 / 5 = 8.0
                expect(analyzer.calculateValidAverage(scores)).toBe(8.0);
            });

            test('Danh sách với các điểm thập phân', () => {
                const scores = [7.5, 8.25, 9.75];
                // (7.5 + 8.25 + 9.75) / 3 = 25.5 / 3 = 8.5
                expect(analyzer.calculateValidAverage(scores)).toBe(8.5);
            });
        });

        // -------------------------------------------------
        // TRƯỜNG HỢP BIÊN
        // -------------------------------------------------
        describe('Trường hợp biên', () => {
            test('Danh sách trống', () => {
                expect(analyzer.calculateValidAverage([])).toBe(0);
            });

            test('Danh sách null', () => {
                expect(analyzer.calculateValidAverage(null)).toBe(0);
            });

            test('Danh sách undefined', () => {
                expect(analyzer.calculateValidAverage(undefined)).toBe(0);
            });

            test('Danh sách chỉ chứa giá trị 0', () => {
                const scores = [0, 0, 0];
                expect(analyzer.calculateValidAverage(scores)).toBe(0);
            });

            test('Danh sách chỉ chứa giá trị 10', () => {
                const scores = [10, 10, 10];
                expect(analyzer.calculateValidAverage(scores)).toBe(10);
            });

            test('Danh sách có một phần tử', () => {
                expect(analyzer.calculateValidAverage([7.5])).toBe(7.5);
            });

            test('Điểm đúng bằng ranh giới 0 và 10', () => {
                const scores = [0, 10];
                // (0 + 10) / 2 = 5.0
                expect(analyzer.calculateValidAverage(scores)).toBe(5.0);
            });
        });

        // -------------------------------------------------
        // TRƯỜNG HỢP NGOẠI LỆ
        // -------------------------------------------------
        describe('Trường hợp ngoại lệ', () => {
            test('Có điểm < 0', () => {
                const scores = [6.0, -5.0, 8.0];
                // Bỏ qua -5.0, tính (6.0 + 8.0) / 2 = 7.0
                expect(analyzer.calculateValidAverage(scores)).toBe(7.0);
            });

            test('Có điểm > 10', () => {
                const scores = [15.0, 6.0, 8.0];
                // Bỏ qua 15.0, tính (6.0 + 8.0) / 2 = 7.0
                expect(analyzer.calculateValidAverage(scores)).toBe(7.0);
            });

            test('Tất cả điểm đều không hợp lệ', () => {
                const scores = [-1.0, 11.0, 100.0, -50.0];
                expect(analyzer.calculateValidAverage(scores)).toBe(0);
            });

            test('Hỗn hợp điểm hợp lệ và không hợp lệ', () => {
                const scores = [-1.0, 5.0, 11.0, 7.0, 100.0, 9.0];
                // Chỉ tính 5.0 + 7.0 + 9.0 = 21.0 / 3 = 7.0
                expect(analyzer.calculateValidAverage(scores)).toBe(7.0);
            });
        });
    });

    // =====================================================
    // TEST CASES CHO isValidScore() (Hàm phụ trợ)
    // =====================================================
    describe('isValidScore', () => {
        test('Điểm hợp lệ trong khoảng 0-10', () => {
            expect(analyzer.isValidScore(5)).toBe(true);
            expect(analyzer.isValidScore(0)).toBe(true);
            expect(analyzer.isValidScore(10)).toBe(true);
            expect(analyzer.isValidScore(7.5)).toBe(true);
        });

        test('Điểm không hợp lệ < 0', () => {
            expect(analyzer.isValidScore(-1)).toBe(false);
            expect(analyzer.isValidScore(-100)).toBe(false);
        });

        test('Điểm không hợp lệ > 10', () => {
            expect(analyzer.isValidScore(11)).toBe(false);
            expect(analyzer.isValidScore(100)).toBe(false);
        });

        test('Giá trị không phải số', () => {
            expect(analyzer.isValidScore('8')).toBe(false);
            expect(analyzer.isValidScore(null)).toBe(false);
            expect(analyzer.isValidScore(undefined)).toBe(false);
        });
    });
});
