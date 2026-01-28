# CHỈ SỐ KIỂM THỬ (TEST METRICS)

## 1. Tỷ lệ thực thi kiểm thử (Test Execution Rate)
Đo lường tiến độ kiểm thử dựa trên số lượng test case đã chạy.

*   Công thức: `(Số TC đã chạy / Tổng số TC) * 100%`
*   Kết quả: `(47 / 47) * 100%` = **100%**
*   Đánh giá: Hoàn thành đúng tiến độ.

## 2. Tỷ lệ Pass/Fail (Pass/Fail Rate)
Đo lường chất lượng của bản build hiện tại.

*   Pass Rate: `(37 / 47) * 100%` = **78.7%**
*   Fail Rate: `(10 / 47) * 100%` = **21.3%**

## 3. Phân bố mức độ nghiêm trọng (Severity Distribution)
Đánh giá mức độ ảnh hưởng của các lỗi tìm thấy.

| Severity | Số lượng | Tỷ lệ (%) |
| :--- | :--- | :--- |
| **Critical** | 2 | 20% |
| **Major** | 4 | 40% |
| **Minor** | 4 | 40% |

*   **Biểu đồ sơ bộ:**
    *   Critical: ██ (20%)
    *   Major:    ████ (40%)
    *   Minor:    ████ (40%)

## 4. Mật độ lỗi theo Module (Defect Density per Module)
Xác định module nào chứa nhiều rủi ro nhất.

| Module | Số lượng Test Case | Số lượng Bug | Mật độ (Bug/TC) |
| :--- | :--- | :--- | :--- |
| **Auth** | 15 | 4 (Auth: 3 + Security: 1) | 26.6% |
| **Product & Cart** | 20 | 4 | 20% |
| **Checkout** | 12 | 2 | 16.6% |

*(Lưu ý: Số lượng bug được phân bổ giả định dựa trên danh sách Bug Report)*

## 5. Độ bao phủ yêu cầu (Requirement Coverage)
Đo lường mức độ kiểm thử so với yêu cầu đề ra.

*   Tổng số Requirement: 16
*   Số Requirement đã có Test Case map: 16
*   Coverage: **100%** (Đạt yêu cầu > 90%)
