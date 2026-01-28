# BÁO CÁO LỖI (BUG REPORTS)

## Tổng quan
*   **Tổng số Bug:** 10
*   **Phân bố Severity:**
    *   Critical: 2
    *   Major: 4
    *   Minor: 4

## Danh sách lỗi chi tiết

### 1. [Critical] Thanh toán thất bại với thẻ Visa
*   **Bug ID:** BUG_CHK_001
*   **Tóm tắt (Summary):** Hệ thống báo lỗi 500 khi thanh toán bằng thẻ Visa giả lập hợp lệ.
*   **Các bước tái hiện (Steps to Reproduce):**
    1. Đăng nhập và thêm sản phẩm vào giỏ.
    2. Đi tới trang Checkout.
    3. Nhập đầy đủ thông tin giao hàng.
    4. Chọn phương thức thanh toán "Visa".
    5. Nhập số thẻ test "4242 4242 4242 4242".
    6. Click "Đặt hàng".
*   **Kết quả mong đợi (Expected):** Đặt hàng thành công, hiển thị trang cảm ơn.
*   **Kết quả thực tế (Actual):** Trang web hiển thị "Internal Server Error (500)".
*   **Mức độ nghiêm trọng (Severity):** Critical
*   **Độ ưu tiên (Priority):** High
*   **Môi trường (Environment):** Chrome 120, Windows 11.

### 2. [Critical] Không thể đăng nhập sau khi reset mật khẩu
*   **Bug ID:** BUG_AUTH_002
*   **Tóm tắt:** Mật khẩu mới không có hiệu lực sau khi thực hiện "Quên mật khẩu".
*   **Các bước tái hiện:**
    1. Sử dụng chức năng Quên mật khẩu để lấy lại pass.
    2. Nhận email và click link reset.
    3. Đặt mật khẩu mới là "NewPass123".
    4. Quay lại màn hình Login, nhập "NewPass123".
*   **Kết quả mong đợi:** Đăng nhập thành công.
*   **Kết quả thực tế:** Hệ thống báo "Sai thông tin đăng nhập".
*   **Mức độ nghiêm trọng:** Critical
*   **Độ ưu tiên:** High

### 3. [Major] Tổng tiền giỏ hàng tính sai khi có mã giảm giá
*   **Bug ID:** BUG_CART_003
*   **Tóm tắt:** Tổng tiền không trừ đi giá trị giảm giá.
*   **Các bước tái hiện:**
    1. Thêm sản phẩm trị giá 200.000đ.
    2. Nhập mã giảm giá "SALE50" (giảm 50k).
    3. Kiểm tra Tổng cộng.
*   **Kết quả mong đợi:** Tổng = 150.000đ.
*   **Kết quả thực tế:** Tổng vẫn hiển thị 200.000đ (dù báo mã áp dụng thành công).
*   **Mức độ nghiêm trọng:** Major
*   **Độ ưu tiên:** High

### 4. [Major] Lọc sản phẩm theo giá không chính xác
*   **Bug ID:** BUG_PROD_004
*   **Tóm tắt:** Bộ lọc giá > 1.000.000đ vẫn hiển thị sản phẩm giá 500.000đ.
*   **Các bước tái hiện:**
    1. Vào trang danh sách sản phẩm.
    2. Chọn bộ lọc giá "Trên 1 triệu".
    3. Click Lọc.
*   **Kết quả mong đợi:** Chỉ hiển thị các sp giá > 1tr.
*   **Kết quả thực tế:** Có lẫn cả sản phẩm giá 500k, 800k.
*   **Mức độ nghiêm trọng:** Major
*   **Độ ưu tiên:** Medium

### 5. [Major] Nút "Thêm vào giỏ" bị disable sai logic
*   **Bug ID:** BUG_CART_005
*   **Tóm tắt:** Không thể thêm hàng dù kho vẫn còn (Stock > 0).
*   **Các bước tái hiện:**
    1. Chọn sản phẩm A (Stock hiển thị là 5).
    2. Quan sát nút "Thêm vào giỏ".
*   **Kết quả mong đợi:** Nút sáng, cho phép click.
*   **Kết quả thực tế:** Nút bị mờ (disabled), không click được.
*   **Mức độ nghiêm trọng:** Major
*   **Độ ưu tiên:** High

### 6. [Major] Sai thông báo lỗi khi nhập email thiếu domain
*   **Bug ID:** BUG_AUTH_006
*   **Tóm tắt:** Hệ thống không báo lỗi cụ thể khi nhập email thiếu phần domain.
*   **Các bước tái hiện:**
    1. Form Đăng ký, nhập email "user@".
    2. Click Đăng ký.
*   **Kết quả mong đợi:** Báo lỗi định dạng email cụ thể.
*   **Kết quả thực tế:** Không có phản hồi gì (nút bấm không hoạt động) hoặc load mãi.
*   **Mức độ nghiêm trọng:** Major
*   **Độ ưu tiên:** Medium

### 7. [Minor] Sai chính tả trên trang Checkout
*   **Bug ID:** BUG_CHK_007
*   **Tóm tắt:** Label "Địa chỉ" bị viết sai thành "Đia chỉ".
*   **Các bước tái hiện:**
    1. Vào trang Checkout.
    2. Quan sát form nhập liệu.
*   **Kết quả mong đợi:** Hiển thị "Địa chỉ".
*   **Kết quả thực tế:** Hiển thị "Đia chỉ" (thiếu dấu nặng).
*   **Mức độ nghiêm trọng:** Minor
*   **Độ ưu tiên:** Low

### 8. [Minor] Icon mắt (Show password) bị lệch
*   **Bug ID:** BUG_AUTH_008
*   **Tóm tắt:** Icon xem mật khẩu nằm đè lên text khi nhập pass quá dài.
*   **Các bước tái hiện:**
    1. Form Login, nhập mật khẩu dài > 20 ký tự.
*   **Kết quả mong đợi:** Icon nằm gọn bên phải.
*   **Kết quả thực tế:** Chữ bị trôi đè lên icon.
*   **Mức độ nghiêm trọng:** Minor
*   **Độ ưu tiên:** Low

### 9. [Minor] Màu nút "Huỷ" không đúng thiết kế
*   **Bug ID:** BUG_PROD_009
*   **Tóm tắt:** Nút Huỷ có màu đỏ thay vì màu xám như design system.
*   **Các bước tái hiện:**
    1. Mở popup Filter.
    2. Quan sát nút Huỷ.
*   **Kết quả mong đợi:** Màu xám (#CCC).
*   **Kết quả thực tế:** Màu đỏ (#F00).
*   **Mức độ nghiêm trọng:** Minor
*   **Độ ưu tiên:** Low

### 10. [Minor] Tab order không tuần tự tại form Đăng ký
*   **Bug ID:** BUG_AUTH_010
*   **Tóm tắt:** Nhấn Tab từ ô Email nhảy xuống nút Đăng ký thay vì ô Mật khẩu.
*   **Các bước tái hiện:**
    1. Đặt trỏ chuột tại ô Email.
    2. Nhấn phím Tab.
*   **Kết quả mong đợi:** Focus chuyển sang ô Mật khẩu.
*   **Kết quả thực tế:** Focus chuyển xuống nút Đăng ký.
*   **Mức độ nghiêm trọng:** Minor
*   **Độ ưu tiên:** Low
