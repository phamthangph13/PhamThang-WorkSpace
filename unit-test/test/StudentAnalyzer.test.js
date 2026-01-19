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

    // =====================================================
    // KIỂM THỬ LỚP TƯƠNG ĐƯƠNG (EQUIVALENCE CLASS TESTING)
    // =====================================================
    describe('Kiểm thử lớp tương đương (Equivalence Class Testing)', () => {

        // -------------------------------------------------
        // EQUIVALENCE CLASSES CHO isValidScore()
        // -------------------------------------------------
        describe('Equivalence Classes - isValidScore()', () => {
            describe('EC1: Điểm hợp lệ (0 ≤ score ≤ 10)', () => {
                test('Điểm ở giữa khoảng hợp lệ', () => {
                    expect(analyzer.isValidScore(5)).toBe(true);
                });

                test('Điểm thập phân trong khoảng hợp lệ', () => {
                    expect(analyzer.isValidScore(7.5)).toBe(true);
                    expect(analyzer.isValidScore(3.33)).toBe(true);
                });
            });

            describe('EC2: Điểm âm (score < 0)', () => {
                test('Điểm âm nhỏ', () => {
                    expect(analyzer.isValidScore(-1)).toBe(false);
                });

                test('Điểm âm lớn', () => {
                    expect(analyzer.isValidScore(-100)).toBe(false);
                });

                test('Điểm âm thập phân', () => {
                    expect(analyzer.isValidScore(-0.5)).toBe(false);
                });
            });

            describe('EC3: Điểm vượt quá (score > 10)', () => {
                test('Điểm vượt quá nhỏ', () => {
                    expect(analyzer.isValidScore(11)).toBe(false);
                });

                test('Điểm vượt quá lớn', () => {
                    expect(analyzer.isValidScore(100)).toBe(false);
                });

                test('Điểm vượt quá thập phân', () => {
                    expect(analyzer.isValidScore(10.5)).toBe(false);
                });
            });

            describe('EC4: Giá trị không phải số', () => {
                test('Chuỗi ký tự', () => {
                    expect(analyzer.isValidScore('abc')).toBe(false);
                    expect(analyzer.isValidScore('8.5')).toBe(false);
                });

                test('Giá trị null và undefined', () => {
                    expect(analyzer.isValidScore(null)).toBe(false);
                    expect(analyzer.isValidScore(undefined)).toBe(false);
                });

                test('Đối tượng và mảng', () => {
                    expect(analyzer.isValidScore({})).toBe(false);
                    expect(analyzer.isValidScore([])).toBe(false);
                });

                test('Boolean', () => {
                    expect(analyzer.isValidScore(true)).toBe(false);
                    expect(analyzer.isValidScore(false)).toBe(false);
                });

                test('NaN', () => {
                    expect(analyzer.isValidScore(NaN)).toBe(false);
                });
            });

            // Kiểm thử giá trị biên (Boundary Value Analysis)
            describe('Giá trị biên cho isValidScore()', () => {
                test('Biên dưới: 0 (hợp lệ)', () => {
                    expect(analyzer.isValidScore(0)).toBe(true);
                });

                test('Ngay dưới biên dưới: -0.01 (không hợp lệ)', () => {
                    expect(analyzer.isValidScore(-0.01)).toBe(false);
                });

                test('Biên trên: 10 (hợp lệ)', () => {
                    expect(analyzer.isValidScore(10)).toBe(true);
                });

                test('Ngay trên biên trên: 10.01 (không hợp lệ)', () => {
                    expect(analyzer.isValidScore(10.01)).toBe(false);
                });
            });
        });

        // -------------------------------------------------
        // EQUIVALENCE CLASSES CHO countExcellentStudents()
        // -------------------------------------------------
        describe('Equivalence Classes - countExcellentStudents()', () => {
            describe('EC1: Danh sách null/undefined', () => {
                test('Danh sách null', () => {
                    expect(analyzer.countExcellentStudents(null)).toBe(0);
                });

                test('Danh sách undefined', () => {
                    expect(analyzer.countExcellentStudents(undefined)).toBe(0);
                });
            });

            describe('EC2: Danh sách rỗng', () => {
                test('Mảng rỗng', () => {
                    expect(analyzer.countExcellentStudents([])).toBe(0);
                });
            });

            describe('EC3: Tất cả điểm không hợp lệ', () => {
                test('Tất cả điểm âm', () => {
                    expect(analyzer.countExcellentStudents([-5, -10, -1])).toBe(0);
                });

                test('Tất cả điểm vượt quá 10', () => {
                    expect(analyzer.countExcellentStudents([15, 20, 100])).toBe(0);
                });

                test('Hỗn hợp điểm không hợp lệ', () => {
                    expect(analyzer.countExcellentStudents([-5, 15, 100, -10])).toBe(0);
                });
            });

            describe('EC4: Tất cả điểm hợp lệ, không có học sinh giỏi', () => {
                test('Điểm từ 0-7.9', () => {
                    expect(analyzer.countExcellentStudents([5, 6, 7, 7.9])).toBe(0);
                });

                test('Toàn bộ điểm thấp', () => {
                    expect(analyzer.countExcellentStudents([0, 1, 2, 3, 4])).toBe(0);
                });
            });

            describe('EC5: Có điểm giỏi hợp lệ', () => {
                test('Một học sinh giỏi', () => {
                    expect(analyzer.countExcellentStudents([8.0])).toBe(1);
                });

                test('Nhiều học sinh giỏi', () => {
                    expect(analyzer.countExcellentStudents([8.0, 9.0, 10.0])).toBe(3);
                });

                test('Tất cả học sinh đều giỏi', () => {
                    expect(analyzer.countExcellentStudents([8.5, 9.0, 9.5, 10.0])).toBe(4);
                });
            });

            describe('EC6: Hỗn hợp hợp lệ/không hợp lệ', () => {
                test('Giỏi + không giỏi + không hợp lệ', () => {
                    const scores = [9.0, 7.0, -5, 8.5, 15, 6.0];
                    // 9.0 và 8.5 là giỏi, 7.0 và 6.0 hợp lệ nhưng không giỏi, -5 và 15 không hợp lệ
                    expect(analyzer.countExcellentStudents(scores)).toBe(2);
                });

                test('Chỉ có điểm không giỏi và không hợp lệ', () => {
                    const scores = [7.5, -1, 6.0, 11, 5.5];
                    expect(analyzer.countExcellentStudents(scores)).toBe(0);
                });
            });

            // Kiểm thử giá trị biên (Boundary Value Analysis)
            describe('Giá trị biên cho countExcellentStudents()', () => {
                test('B1 - Điểm 7.99 (ngay dưới ngưỡng giỏi)', () => {
                    expect(analyzer.countExcellentStudents([7.99])).toBe(0);
                });

                test('B2 - Điểm 8.0 (đúng ngưỡng giỏi)', () => {
                    expect(analyzer.countExcellentStudents([8.0])).toBe(1);
                });

                test('B3 - Điểm 8.01 (ngay trên ngưỡng giỏi)', () => {
                    expect(analyzer.countExcellentStudents([8.01])).toBe(1);
                });

                test('B4 - Điểm 0 (biên dưới hợp lệ)', () => {
                    expect(analyzer.countExcellentStudents([0])).toBe(0);
                });

                test('B5 - Điểm 10 (biên trên hợp lệ, giỏi)', () => {
                    expect(analyzer.countExcellentStudents([10])).toBe(1);
                });

                test('B6 - Điểm -0.01 (ngay dưới biên)', () => {
                    expect(analyzer.countExcellentStudents([-0.01])).toBe(0);
                });

                test('B7 - Điểm 10.01 (ngay trên biên)', () => {
                    expect(analyzer.countExcellentStudents([10.01])).toBe(0);
                });
            });
        });

        // -------------------------------------------------
        // EQUIVALENCE CLASSES CHO calculateValidAverage()
        // -------------------------------------------------
        describe('Equivalence Classes - calculateValidAverage()', () => {
            describe('EC1: Danh sách null/undefined', () => {
                test('Danh sách null', () => {
                    expect(analyzer.calculateValidAverage(null)).toBe(0);
                });

                test('Danh sách undefined', () => {
                    expect(analyzer.calculateValidAverage(undefined)).toBe(0);
                });
            });

            describe('EC2: Danh sách rỗng', () => {
                test('Mảng rỗng', () => {
                    expect(analyzer.calculateValidAverage([])).toBe(0);
                });
            });

            describe('EC3: Tất cả điểm không hợp lệ', () => {
                test('Tất cả điểm âm', () => {
                    expect(analyzer.calculateValidAverage([-5, -10, -1])).toBe(0);
                });

                test('Tất cả điểm vượt quá 10', () => {
                    expect(analyzer.calculateValidAverage([15, 20, 100])).toBe(0);
                });

                test('Hỗn hợp điểm không hợp lệ', () => {
                    expect(analyzer.calculateValidAverage([-5, 15, 100, -10])).toBe(0);
                });
            });

            describe('EC4: Tất cả điểm hợp lệ', () => {
                test('Điểm số nguyên', () => {
                    // (5 + 6 + 7 + 8) / 4 = 6.5
                    expect(analyzer.calculateValidAverage([5, 6, 7, 8])).toBe(6.5);
                });

                test('Điểm thập phân', () => {
                    // (5.5 + 6.5 + 7.5) / 3 = 6.5
                    expect(analyzer.calculateValidAverage([5.5, 6.5, 7.5])).toBe(6.5);
                });

                test('Điểm cao', () => {
                    // (8 + 9 + 10) / 3 = 9
                    expect(analyzer.calculateValidAverage([8, 9, 10])).toBe(9);
                });
            });

            describe('EC5: Hỗn hợp hợp lệ/không hợp lệ', () => {
                test('Có điểm âm xen kẽ', () => {
                    // Chỉ tính 5 + 7 = 12 / 2 = 6
                    expect(analyzer.calculateValidAverage([5, -5, 7])).toBe(6);
                });

                test('Có điểm vượt quá xen kẽ', () => {
                    // Chỉ tính 6 + 8 = 14 / 2 = 7
                    expect(analyzer.calculateValidAverage([6, 15, 8])).toBe(7);
                });

                test('Hỗn hợp nhiều loại', () => {
                    // Chỉ tính 5 + 7 + 9 = 21 / 3 = 7
                    expect(analyzer.calculateValidAverage([5, -3, 7, 15, 9, 100])).toBe(7);
                });
            });

            describe('EC6: Một phần tử hợp lệ', () => {
                test('Một điểm hợp lệ', () => {
                    expect(analyzer.calculateValidAverage([7.5])).toBe(7.5);
                });

                test('Một điểm hợp lệ giữa các điểm không hợp lệ', () => {
                    expect(analyzer.calculateValidAverage([-5, 8.0, 15])).toBe(8.0);
                });
            });

            describe('EC7: Điểm biên 0 và 10', () => {
                test('Chỉ có điểm 0', () => {
                    expect(analyzer.calculateValidAverage([0, 0, 0])).toBe(0);
                });

                test('Chỉ có điểm 10', () => {
                    expect(analyzer.calculateValidAverage([10, 10, 10])).toBe(10);
                });

                test('Cả điểm 0 và 10', () => {
                    // (0 + 10) / 2 = 5
                    expect(analyzer.calculateValidAverage([0, 10])).toBe(5);
                });
            });

            // Kiểm thử giá trị biên (Boundary Value Analysis)
            describe('Giá trị biên cho calculateValidAverage()', () => {
                test('Biên dưới: 0 (hợp lệ)', () => {
                    expect(analyzer.calculateValidAverage([0])).toBe(0);
                });

                test('Ngay dưới biên dưới: -0.01 (không hợp lệ)', () => {
                    expect(analyzer.calculateValidAverage([-0.01])).toBe(0);
                });

                test('Biên trên: 10 (hợp lệ)', () => {
                    expect(analyzer.calculateValidAverage([10])).toBe(10);
                });

                test('Ngay trên biên trên: 10.01 (không hợp lệ)', () => {
                    expect(analyzer.calculateValidAverage([10.01])).toBe(0);
                });

                test('Kết hợp giá trị biên', () => {
                    // (0 + 5 + 10) / 3 = 5
                    expect(analyzer.calculateValidAverage([0, 5, 10])).toBe(5);
                });
            });
        });
    });
});
