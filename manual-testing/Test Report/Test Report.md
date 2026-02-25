# BÁO CÁO KIỂM THỬ (TEST REPORT)

**Dự án:** Website bán hàng online (E-commerce)  
**Phiên bản test:** v1.0.0  
**Ngày báo cáo:** 25/02/2026  
**Người thực hiện:** QA Team  

---

## 1. Tóm tắt (Executive Summary)

Đợt kiểm thử Manual Testing cho hệ thống E-commerce đã hoàn thành. Tất cả **47 Test Case** trên 3 module (Authentication, Product & Cart, Checkout) đã được thực thi 100%.

Kết quả cho thấy hệ thống còn tồn tại **12 lỗi**, trong đó có **3 lỗi Critical** ảnh hưởng trực tiếp đến luồng thanh toán và đăng nhập. Hệ thống **chưa đủ điều kiện để phát hành (No-Release)**.

---

## 2. Kết quả thực thi (Test Execution Results)

| Hạng mục | Số lượng | Tỷ lệ (%) |
| :--- | :--- | :--- |
| **Tổng số Test Case** | 47 | 100% |
| **Đã thực thi (Executed)** | 47 | 100% |
| **Đạt (Pass)** | 35 | 74.5% |
| **Trượt (Fail)** | 12 | 25.5% |
| **Bị chặn (Blocked)** | 0 | 0% |

### Kết quả theo Module

| Module | Tổng TC | Pass | Fail | Pass Rate |
| :--- | :--- | :--- | :--- | :--- |
| Authentication | 15 | 11 | 4 | 73.3% |
| Product & Cart | 20 | 15 | 5 | 75.0% |
| Checkout | 12 | 9 | 3 | 75.0% |
| **Tổng** | **47** | **35** | **12** | **74.5%** |

---

## 3. Thống kê lỗi (Defect Statistics)

*   **Tổng số lỗi tìm thấy:** 12
*   **Phân theo mức độ nghiêm trọng (Severity):**
    *   Critical: 3
    *   Major: 5
    *   Minor: 4

### Top 5 lỗi nghiêm trọng nhất

| # | Bug ID | Severity | Tóm tắt | Module |
| :--- | :--- | :--- | :--- | :--- |
| 1 | BUG_CHECKOUT_001 | **Critical** | Thanh toán thất bại với thẻ Visa – lỗi 500 | Checkout |
| 2 | BUG_AUTH_001 | **Critical** | Không đăng nhập được sau khi reset password | Auth |
| 3 | BUG_CHECKOUT_002 | **Critical** | Double-click tạo đơn hàng trùng lặp (duplicate) | Checkout |
| 4 | BUG_CART_001 | **Major** | Tổng tiền không trừ mã giảm giá | Cart |
| 5 | BUG_PROD_001 | **Major** | Bộ lọc giá hiển thị sản phẩm ngoài khoảng | Product |

---

## 4. Nhận xét chất lượng (Quality Assessment)

### Điểm mạnh:
*   Giao diện (UI) tương đối thống nhất theo Design System.
*   Các chức năng cơ bản của module **Sản phẩm** (tìm kiếm, xem chi tiết) hoạt động ổn định.
*   Module **Giỏ hàng** – các thao tác thêm/xoá/cập nhật cơ bản chạy đúng.
*   Chức năng đăng ký / đăng nhập cơ bản (positive flow) hoạt động tốt.

### Điểm yếu:
*   **Module Checkout** có **3 lỗi** (gồm 2 Critical): Thanh toán Visa lỗi 500, đơn hàng bị duplicate – **ảnh hưởng trực tiếp đến doanh thu**.
*   **Module Authentication** có lỗi Critical: Reset password không hoạt động – **chặn luồng khôi phục tài khoản**.
*   Logic tính toán tiền trong giỏ hàng chưa chính xác (không trừ giảm giá, không cập nhật real-time).
*   Validation input ở một số form chưa đầy đủ (email thiếu domain không có phản hồi).

---

## 5. Quyết định phát hành (Release Decision)

### ⛔ KHÔNG PHÁT HÀNH (NO-RELEASE)

**Lý do:**
1.  Tồn tại **3 lỗi Critical** chưa được fix – vi phạm Exit Criteria.
2.  Tỷ lệ Fail = **25.5%** – cao hơn mức chấp nhận được.
3.  Các lỗi Critical ảnh hưởng trực tiếp đến:
    *   Luồng thanh toán (revenue flow) – BUG_CHECKOUT_001, BUG_CHECKOUT_002.
    *   Luồng khôi phục tài khoản – BUG_AUTH_001.
4.  Hệ thống chưa đạt tiêu chuẩn ổn định để đưa ra môi trường Production.

---

## 6. Khuyến nghị (Recommendations)

| Ưu tiên | Hành động | Deadline đề xuất |
| :--- | :--- | :--- |
| **P1 – Khẩn cấp** | Fix 3 lỗi Critical (BUG_CHECKOUT_001, BUG_AUTH_001, BUG_CHECKOUT_002) | Trong 2 ngày |
| **P2 – Cao** | Fix 5 lỗi Major (BUG_CART_001, BUG_PROD_001, BUG_CART_002, BUG_AUTH_002, BUG_CART_003) | Trong 5 ngày |
| **P3 – Trung bình** | Fix 4 lỗi Minor (UI/UX issues) | Sprint tiếp theo |
| **P4** | Build bản vá (Hotfix) và thực hiện **Regression Test** toàn bộ | Sau khi fix Critical |
| **P5** | Cân nhắc thêm **Automation Smoke Test** cho các luồng chính | Dài hạn |
