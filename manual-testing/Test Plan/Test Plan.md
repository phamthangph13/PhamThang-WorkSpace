# KẾ HOẠCH KIỂM THỬ (TEST PLAN)

## 1. Giới thiệu (Introduction)
Tài liệu này mô tả kế hoạch kiểm thử cho hệ thống Website bán hàng online (E-commerce). Mục tiêu là đảm bảo chất lượng của các tính năng cốt lõi bao gồm Xác thực người dùng, Quản lý sản phẩm & giỏ hàng, và Thanh toán. Tài liệu này xác định phạm vi, phương pháp, tài nguyên và lịch trình cho quá trình kiểm thử thủ công (manual testing).

## 2. Phạm vi kiểm thử (Scope)

### Trong phạm vi (In-scope)
Hệ thống sẽ được kiểm thử các phân hệ (modules) sau:
*   **Module 1 – Xác thực người dùng (Authentication):** Đăng ký, Đăng nhập, Quên mật khẩu, Đăng xuất.
*   **Module 2 – Sản phẩm & Giỏ hàng (Product & Cart):** Tìm kiếm, Lọc sản phẩm, Xem chi tiết, Thêm vào giỏ, Cập nhật số lượng, Xoá sản phẩm.
*   **Module 3 – Thanh toán (Checkout):** Nhập thông tin giao hàng, Chọn phương thức thanh toán, Đặt hàng, Xem lịch sử đơn hàng.

### Ngoài phạm vi (Out-of-scope)
*   Kiểm thử hiệu năng (Performance Testing).
*   Kiểm thử tự động (Automation Testing).
*   Kiểm thử bảo mật chuyên sâu (Penetration Testing).
*   Các tính năng quản trị (Admin panel).

## 3. Phương pháp kiểm thử (Test Approach)
Chúng tôi sẽ áp dụng các phương pháp kiểm thử sau:
*   **Kiểm thử chức năng (Functional testing):** Đảm bảo các chức năng hoạt động đúng theo yêu cầu nghiệp vụ. Kiểm tra các trường hợp Positive (hợp lệ) và Negative (không hợp lệ).
*   **Kiểm thử giao diện cơ bản (UI testing – basic):** Đảm bảo giao diện hiển thị đúng, bố cục rõ ràng, không bị vỡ trên trình duyệt mục tiêu.
*   **Kiểm thử biên (Boundary testing):** Kiểm tra các giá trị biên của các trường nhập liệu (ví dụ: độ dài mật khẩu, số lượng sản phẩm).
*   **Kiểm thử hồi quy (Regression – smoke):** Thực hiện một bộ test case chọn lọc (smoke test) sau mỗi lần cập nhật để đảm bảo các chức năng chính vẫn hoạt động tốt.

## 4. Môi trường kiểm thử (Test Environment)
*   **Trình duyệt:** Google Chrome (phiên bản mới nhất).
*   **Hệ điều hành:** Windows 10/11.
*   **Công cụ quản lý:** GitHub (để lưu trữ tài liệu), Excel/Google Sheets (để bao quát test case nếu cần).
*   **Dữ liệu test:** Sử dụng dữ liệu giả lập (tài khoản test, thông tin thẻ tín dụng giả lập cho thanh toán).

## 5. Điều kiện bắt đầu và kết thúc (Entry / Exit Criteria)

### Điều kiện bắt đầu (Entry Criteria)
*   Mã nguồn (hoặc URL hệ thống giả lập) đã sẵn sàng (deploy).
*   Tài liệu yêu cầu (Requirement) đã được phê duyệt.
*   Kế hoạch kiểm thử đã được xem xét.

### Điều kiện kết thúc (Exit Criteria)
*   100% Test Case mức độ Priority High và Medium đã được thực thi.
*   Tỷ lệ Pass của các test case cốt lõi là 100%.
*   Không còn lỗi nghiêm trọng (Severity: Critical/Major) chưa được sửa.
*   Báo cáo kiểm thử hoàn chỉnh được gửi tới bên liên quan.

## 6. Rủi ro & Biện pháp giảm thiểu (Risks & Mitigation)

| Rủi ro (Risk) | Mức độ | Biện pháp giảm thiểu (Mitigation) |
| :--- | :--- | :--- |
| Thiếu hụt thời gian do lịch trình gấp | Cao | Ưu tiên kiểm thử các tính năng quan trọng (Core features) trước. Sử dụng kỹ thuật phân vùng tương đương để giảm số lượng test case dư thừa. |
| Yêu cầu không rõ ràng hoặc thay đổi | Trung bình | Giao tiếp liên tục với nhóm phát triển/BA để làm rõ yêu cầu (Q&A). Cập nhật RTM thường xuyên. |
| Môi trường test không ổn định | Thấp | Báo cáo ngay cho đội hạ tầng. Chuẩn bị môi trường dự phòng (local) nếu có thể. |

## 7. Vai trò & Trách nhiệm (Roles & Responsibilities)
*   **QA Leader:** Lập kế hoạch kiểm thử, review test case, báo cáo kết quả cuối cùng.
*   **Manual Tester:** Thiết kế test case, thực thi kiểm thử, log bug, verify bug fix.

## 8. Lịch trình kiểm thử (Test Schedule – Giả lập)

| Hoạt động | Ngày bắt đầu | Ngày kết thúc | Đầu ra |
| :--- | :--- | :--- | :--- |
| Lập kế hoạch (Test Planning) | 28/01/2026 | 28/01/2026 | Test Plan document |
| Thiết kế Test Case (Writing TC) | 29/01/2026 | 30/01/2026 | Test Cases set (with Review) |
| Thực thi kiểm thử (Test Execution) | 31/01/2026 | 02/02/2026 | Bug Reports, Updated Execution Status |
| Báo cáo & Tổng kết (Reporting) | 03/02/2026 | 03/02/2026 | Test Report, Metrics |
