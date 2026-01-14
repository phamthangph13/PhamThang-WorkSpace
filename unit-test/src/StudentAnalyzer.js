/**
 * Lớp StudentAnalyzer - Phân tích dữ liệu điểm số học sinh
 * 
 * Chức năng:
 * - Đếm số học sinh đạt loại Giỏi (điểm >= 8.0)
 * - Tính điểm trung bình của các điểm hợp lệ (0-10)
 */
class StudentAnalyzer {
    /**
     * Kiểm tra điểm có hợp lệ hay không (từ 0 đến 10)
     * @param {number} score - Điểm cần kiểm tra
     * @returns {boolean} - true nếu điểm hợp lệ, false nếu không
     */
    isValidScore(score) {
        return typeof score === 'number' && score >= 0 && score <= 10;
    }

    /**
     * Phân tích điểm số và trả về số lượng học sinh đạt loại Giỏi.
     * @param {number[]} scores - Danh sách điểm số từ 0 đến 10
     * @returns {number} - Số học sinh đạt loại Giỏi (>= 8.0)
     * 
     * Quy tắc:
     * - Bỏ qua điểm âm hoặc lớn hơn 10 (coi là dữ liệu sai)
     * - Nếu danh sách rỗng, trả về 0
     */
    countExcellentStudents(scores) {
        // Điều kiện 2: Nếu danh sách rỗng thì trả về 0
        if (!scores || scores.length === 0) {
            return 0;
        }

        let count = 0;

        // Vòng lặp 1: Duyệt qua danh sách điểm để lọc học sinh giỏi
        for (const score of scores) {
            // Điều kiện 1: Kiểm tra điểm hợp lệ (0 <= score <= 10)
            if (this.isValidScore(score)) {
                // Kiểm tra học sinh giỏi (điểm >= 8.0)
                if (score >= 8.0) {
                    count++;
                }
            }
        }

        return count;
    }

    /**
     * Tính điểm trung bình hợp lệ (từ 0 đến 10)
     * @param {number[]} scores - Danh sách điểm
     * @returns {number} - Điểm trung bình của các điểm hợp lệ
     * 
     * Quy tắc:
     * - Bỏ qua điểm âm hoặc lớn hơn 10
     * - Nếu không có điểm hợp lệ, trả về 0
     */
    calculateValidAverage(scores) {
        // Điều kiện 2: Nếu danh sách rỗng thì trả về 0
        if (!scores || scores.length === 0) {
            return 0;
        }

        let sum = 0;
        let validCount = 0;

        // Vòng lặp 2: Duyệt qua danh sách để tính trung bình hợp lệ
        for (const score of scores) {
            // Điều kiện 1: Kiểm tra điểm hợp lệ (0 <= score <= 10)
            if (this.isValidScore(score)) {
                sum += score;
                validCount++;
            }
        }

        // Tránh chia cho 0
        if (validCount === 0) {
            return 0;
        }

        // Làm tròn đến 2 chữ số thập phân
        return Math.round((sum / validCount) * 100) / 100;
    }
}

module.exports = StudentAnalyzer;
