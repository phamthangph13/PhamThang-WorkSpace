# KẾ HOẠCH KIỂM THỬ (TEST PLAN)

**Dự án:** Website bán hàng online (E-commerce)  
**Phiên bản:** 1.0.0  
**Ngày tạo:** 25/02/2026  
**Người tạo:** QA Team  

---

## 1. Giới thiệu (Introduction)

Tài liệu này mô tả kế hoạch kiểm thử thủ công (Manual Testing) cho hệ thống Website bán hàng online (E-commerce). Mục tiêu chính là đảm bảo chất lượng của các tính năng cốt lõi trước khi đưa vào vận hành thực tế.

Hệ thống E-commerce bao gồm 3 phân hệ (module) chính:
- **Module 1 – Xác thực người dùng (Authentication):** Quản lý đăng ký, đăng nhập, quên mật khẩu và đăng xuất.
- **Module 2 – Sản phẩm & Giỏ hàng (Product & Cart):** Tìm kiếm, lọc sản phẩm, xem chi tiết, quản lý giỏ hàng.
- **Module 3 – Thanh toán (Checkout):** Nhập thông tin giao hàng, chọn phương thức thanh toán, đặt hàng và xem lịch sử.

Tài liệu này xác định phạm vi, phương pháp tiếp cận, tài nguyên cần thiết, lịch trình và các rủi ro liên quan đến quá trình kiểm thử.

---

## 2. Phạm vi kiểm thử (Scope)

### 2.1. Trong phạm vi (In-scope)

Các phân hệ và chức năng được kiểm thử:

| Module | Chức năng kiểm thử |
| :--- | :--- |
| **Authentication** | Đăng ký tài khoản, Đăng nhập, Quên mật khẩu, Đăng xuất |
| **Product & Cart** | Tìm kiếm sản phẩm, Lọc theo giá/danh mục, Xem chi tiết, Thêm vào giỏ, Cập nhật số lượng, Xoá sản phẩm khỏi giỏ |
| **Checkout** | Nhập địa chỉ giao hàng, Chọn phương thức thanh toán (COD/Visa giả lập), Đặt hàng, Xem lịch sử đơn hàng |

**Loại kiểm thử trong phạm vi:**
- Kiểm thử chức năng (Functional Testing)
- Kiểm thử giao diện cơ bản (Basic UI Testing)
- Kiểm thử biên (Boundary Testing)
- Kiểm thử hồi quy cơ bản (Smoke/Regression Testing)

### 2.2. Ngoài phạm vi (Out-of-scope)

- Kiểm thử hiệu năng (Performance Testing / Load Testing).
- Kiểm thử tự động (Automation Testing).
- Kiểm thử bảo mật chuyên sâu (Penetration Testing).
- Kiểm thử tương thích trình duyệt chéo (Cross-browser Testing).
- Kiểm thử mobile (Mobile Testing).
- Các tính năng quản trị viên (Admin panel).

---

## 3. Phương pháp kiểm thử (Test Approach)

### 3.1. Kiểm thử chức năng (Functional Testing)
Đảm bảo từng chức năng hoạt động đúng theo yêu cầu nghiệp vụ (Requirements R1–R16). Bao gồm:
- **Positive Testing:** Kiểm tra với dữ liệu hợp lệ, kỳ vọng hệ thống hoạt động đúng.
- **Negative Testing:** Kiểm tra với dữ liệu không hợp lệ (để trống, sai format, giá trị âm…), kỳ vọng hệ thống từ chối hợp lý.
- **Boundary Testing:** Kiểm tra tại các giá trị biên (mật khẩu đúng 7 ký tự, đúng 8 ký tự; số lượng = 0, = max stock…).

### 3.2. Kiểm thử giao diện cơ bản (UI Testing – Basic)
- Đảm bảo giao diện hiển thị đúng, bố cục rõ ràng, không bị vỡ trên trình duyệt mục tiêu.
- Kiểm tra text, label, font chữ, màu sắc theo Design System.
- Kiểm tra responsive cơ bản trên màn hình desktop.

### 3.3. Kiểm thử hồi quy (Regression – Smoke Test)
- Thực hiện một bộ test case chọn lọc (Smoke Test) sau mỗi lần cập nhật bản build.
- Bộ Smoke Test bao gồm các luồng chính: Đăng nhập → Tìm kiếm SP → Thêm giỏ → Thanh toán.

### 3.4. Kiểm thử bảo mật cơ bản (Basic Security Testing)
- Kiểm tra SQL Injection đơn giản trên form đăng nhập.
- Kiểm tra XSS cơ bản trên ô tìm kiếm.
- Kiểm tra validation input trên tất cả các form.

---

## 4. Môi trường kiểm thử (Test Environment)

| Thành phần | Chi tiết |
| :--- | :--- |
| **Hệ điều hành** | Windows 10 / Windows 11 |
| **Trình duyệt** | Google Chrome (phiên bản mới nhất – v120+) |
| **Đường dẫn hệ thống** | URL staging (giả lập): `http://ecommerce-staging.example.com` |
| **Công cụ quản lý** | GitHub (lưu trữ tài liệu), Google Sheets (quản lý test case nếu cần) |
| **Dữ liệu test** | Tài khoản giả lập: `testuser@email.com / Test@1234` |
| **Thẻ Visa test** | `4242 4242 4242 4242`, Exp: `12/28`, CVV: `123` |

---

## 5. Điều kiện bắt đầu và kết thúc (Entry / Exit Criteria)

### 5.1. Điều kiện bắt đầu (Entry Criteria)
- Hệ thống (hoặc URL staging) đã được deploy và truy cập được.
- Tài liệu yêu cầu (Requirement R1–R16) đã được phê duyệt.
- Kế hoạch kiểm thử đã được review và approve.
- Tài khoản test và dữ liệu test đã được chuẩn bị sẵn.
- Môi trường test ổn định (không có lỗi hạ tầng).

### 5.2. Điều kiện kết thúc (Exit Criteria)
- 100% Test Case có Priority **High** và **Medium** đã được thực thi.
- Tỷ lệ Pass của các test case cốt lõi (Core flow) đạt ≥ 95%.
- Không còn lỗi Severity **Critical** chưa được sửa.
- Tất cả lỗi Severity **Major** đã có kế hoạch xử lý (fixed hoặc deferred có lý do).
- Báo cáo kiểm thử (Test Report) và Chỉ số kiểm thử (Test Metrics) đã hoàn chỉnh.

---

## 6. Rủi ro & Biện pháp giảm thiểu (Risks & Mitigation)

| # | Rủi ro (Risk) | Mức độ | Xác suất | Biện pháp giảm thiểu (Mitigation) |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Thiếu hụt thời gian do lịch trình gấp | Cao | Cao | Ưu tiên kiểm thử Core features (Đăng nhập, Giỏ hàng, Thanh toán) trước. Áp dụng Risk-based Testing. |
| 2 | Yêu cầu không rõ ràng hoặc thay đổi giữa chừng | Trung bình | Trung bình | Giao tiếp liên tục với nhóm phát triển/BA. Cập nhật RTM khi yêu cầu thay đổi. |
| 3 | Môi trường test không ổn định (server down) | Trung bình | Thấp | Báo cáo ngay cho đội hạ tầng. Chuẩn bị mock/local environment dự phòng. |
| 4 | Thiếu dữ liệu test đa dạng | Thấp | Trung bình | Chuẩn bị bộ test data phong phú trước khi bắt đầu. Dùng data generation tool. |
| 5 | Phát hiện lỗi Critical muộn, gần deadline | Cao | Thấp | Chạy Smoke Test sớm ngay từ đầu sprint. Ưu tiên kiểm thử luồng chính trước. |

---

## 7. Vai trò & Trách nhiệm (Roles & Responsibilities)

| Vai trò | Trách nhiệm |
| :--- | :--- |
| **QA Leader** | Lập kế hoạch kiểm thử, phân công công việc, review test case, theo dõi tiến độ, tổng hợp báo cáo cuối cùng. |
| **Manual Tester 1** | Thiết kế & thực thi test case cho Module Authentication và Checkout. Log bug, verify bug fix. |
| **Manual Tester 2** | Thiết kế & thực thi test case cho Module Product & Cart. Log bug, verify bug fix. |
| **Developer** | Fix bug theo báo cáo lỗi, deploy bản build mới cho QA retest. |

---

## 8. Lịch trình kiểm thử (Test Schedule – Giả lập)

| # | Hoạt động | Ngày bắt đầu | Ngày kết thúc | Đầu ra (Deliverable) |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Lập kế hoạch kiểm thử (Test Planning) | 20/02/2026 | 21/02/2026 | Test Plan |
| 2 | Thiết kế Test Case & RTM | 22/02/2026 | 24/02/2026 | Test Cases (47 TCs), RTM |
| 3 | Review Test Case (Internal) | 24/02/2026 | 24/02/2026 | Reviewed Test Cases |
| 4 | Thực thi kiểm thử – Vòng 1 (Cycle 1) | 25/02/2026 | 27/02/2026 | Bug Reports, Execution Results |
| 5 | Bug Fix & Retest (Vòng 2) | 28/02/2026 | 01/03/2026 | Updated Bug Status |
| 6 | Báo cáo & Tổng kết (Reporting) | 02/03/2026 | 02/03/2026 | Test Report, Test Metrics |

---

## 9. Tiêu chuẩn đặt tên (Naming Convention)

| Loại | Quy tắc | Ví dụ |
| :--- | :--- | :--- |
| **Test Case ID** | TC\_[MODULE]\_[SỐ] | TC_AUTH_001, TC_CART_010, TC_CHECKOUT_005 |
| **Bug ID** | BUG\_[MODULE]\_[SỐ] | BUG_AUTH_001, BUG_CHECKOUT_002, BUG_PROD_001 |

**Module codes:**
- `AUTH` – Xác thực (Authentication)
- `PROD` – Sản phẩm (Product)
- `CART` – Giỏ hàng (Cart)
- `CHECKOUT` hoặc `CHK` – Thanh toán (Checkout)

---

## 10. Phê duyệt tài liệu (Document Approval)

| Vai trò | Họ tên | Ngày | Chữ ký |
| :--- | :--- | :--- | :--- |
| QA Leader | ___________________ | ___/___/2026 | ___________ |
| Project Manager | ___________________ | ___/___/2026 | ___________ |
