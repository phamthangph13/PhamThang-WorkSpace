# BÁO CÁO KIỂM THỬ (TEST REPORT)

## 1. Tóm tắt (Executive Summary)
Đợt kiểm thử cho hệ thống E-commerce đã hoàn thành giai đoạn Manual Testing. Tất cả 47 Test Case đã được thực thi. Hệ thống còn tồn tại một số lỗi nghiêm trọng ảnh hưởng đến chức năng thanh toán và đăng nhập.

*   **Dự án:** E-commerce System
*   **Phiên bản:** 1.0.0
*   **Ngày báo cáo:** 03/02/2026
*   **Người thực hiện:** QA Team

## 2. Kết quả thực thi (Test Execution Results)

| Hạng mục | Số lượng | Tỷ lệ (%) |
| :--- | :--- | :--- |
| **Tổng số Test Case** | 47 | 100% |
| **Đã thực thi (Executed)** | 47 | 100% |
| **Đạt (Pass)** | 37 | 78.7% |
| **Trượt (Fail)** | 10 | 21.3% |
| **Bị chặn (Blocked)** | 0 | 0% |

## 3. Thống kê lỗi (Defect Statistics)

*   **Tổng số lỗi tìm thấy:** 10
*   **Phân theo mức độ nghiêm trọng (Severity):**
    *   Critical: 2
    *   Major: 4
    *   Minor: 4

### Top 5 lỗi nghiêm trọng nhất:
1.  **[Critical]** BUG_CHK_001: Thanh toán thất bại với thẻ Visa (Lỗi 500).
2.  **[Critical]** BUG_AUTH_002: Không đăng nhập được sau khi Reset Password.
3.  **[Major]** BUG_CART_003: Tổng tiền không trừ mã giảm giá.
4.  **[Major]** BUG_PROD_004: Bộ lọc giá hoạt động sai.
5.  **[Major]** BUG_CART_005: Nút thêm giỏ hàng bị disable sai.

## 4. Nhận xét chất lượng (Quality Assessment)
*   **Điểm mạnh:** UI khá thống nhất, các chức năng cơ bản của module Sản phẩm hoạt động ổn.
*   **Điểm yếu:** Phân hệ Thanh toán (Checkout) và Xác thực (Authentication) còn lỗi Critical chặn luồng người dùng chính (User Flow). Logic tính toán tiền chưa chính xác.

## 5. Quyết định (Release Decision)
⛔ **KHÔNG PHÁT HÀNH (NO-RELEASE)**

**Lý do:**
*   Tồn tại 2 lỗi Critical (BUG_CHK_001, BUG_AUTH_002) ảnh hưởng trực tiếp đến doanh thu và trải nghiệm người dùng.
*   Tỷ lệ Fail cao (21.3%).
*   Hệ thống chưa đủ ổn định để đưa ra môi trường Production.

**Khuyến nghị:**
*   Fix gấp các lỗi Critical và Major.
*   Build bản vá và thực hiện Retest.
