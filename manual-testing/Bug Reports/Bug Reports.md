# BÁO CÁO LỖI (BUG REPORTS)

## Tổng quan
*   **Dự án:** Website bán hàng online (E-commerce)
*   **Phiên bản test:** v1.0.0
*   **Ngày báo cáo:** 25/02/2026
*   **Tổng số Bug:** 12
*   **Phân bố Severity:**
    *   Critical: 3
    *   Major: 5
    *   Minor: 4

---

## Danh sách lỗi chi tiết

### Bug #1 – [Critical] Thanh toán thất bại với thẻ Visa giả lập

| Trường | Nội dung |
| :--- | :--- |
| **Bug ID** | BUG_CHECKOUT_001 |
| **Tóm tắt (Summary)** | Hệ thống trả về lỗi 500 (Internal Server Error) khi thanh toán bằng thẻ Visa giả lập hợp lệ |
| **Các bước tái hiện (Steps to Reproduce)** | 1. Đăng nhập tài khoản hợp lệ<br>2. Thêm ít nhất 1 sản phẩm vào giỏ hàng<br>3. Click "Thanh toán"<br>4. Nhập đầy đủ thông tin giao hàng (địa chỉ, SĐT)<br>5. Chọn phương thức thanh toán "Visa"<br>6. Nhập số thẻ test "4242 4242 4242 4242", ngày hết hạn "12/28", CVV "123"<br>7. Click "Đặt hàng" |
| **Kết quả mong đợi (Expected)** | Đặt hàng thành công, hiển thị trang xác nhận đơn hàng |
| **Kết quả thực tế (Actual)** | Trang web hiển thị "Internal Server Error (500)", đơn hàng không được tạo |
| **Mức độ nghiêm trọng (Severity)** | Critical |
| **Độ ưu tiên (Priority)** | High |
| **Môi trường (Environment)** | Chrome 120, Windows 11 |

---

### Bug #2 – [Critical] Không thể đăng nhập sau khi reset mật khẩu

| Trường | Nội dung |
| :--- | :--- |
| **Bug ID** | BUG_AUTH_001 |
| **Tóm tắt (Summary)** | Mật khẩu mới không có hiệu lực sau khi thực hiện chức năng "Quên mật khẩu" |
| **Các bước tái hiện (Steps to Reproduce)** | 1. Vào trang Login, click "Quên mật khẩu"<br>2. Nhập email đã đăng ký (test@email.com)<br>3. Mở email, click link reset password<br>4. Nhập mật khẩu mới "NewPass@123" (hợp lệ, ≥ 8 ký tự)<br>5. Click "Xác nhận"<br>6. Quay lại trang Login, đăng nhập với email "test@email.com" và pass "NewPass@123" |
| **Kết quả mong đợi (Expected)** | Đăng nhập thành công với mật khẩu mới |
| **Kết quả thực tế (Actual)** | Hệ thống báo "Sai thông tin đăng nhập". Chỉ mật khẩu cũ mới đăng nhập được |
| **Mức độ nghiêm trọng (Severity)** | Critical |
| **Độ ưu tiên (Priority)** | High |
| **Môi trường (Environment)** | Chrome 120, Windows 11 |

---

### Bug #3 – [Critical] Đơn hàng COD bị tạo trùng lặp (duplicate)

| Trường | Nội dung |
| :--- | :--- |
| **Bug ID** | BUG_CHECKOUT_002 |
| **Tóm tắt (Summary)** | Double-click nút "Đặt hàng" tạo ra 2 đơn hàng giống hệt nhau |
| **Các bước tái hiện (Steps to Reproduce)** | 1. Đăng nhập, thêm sản phẩm vào giỏ<br>2. Vào trang Checkout, nhập đầy đủ thông tin<br>3. Chọn COD<br>4. Click nhanh nút "Đặt hàng" 2 lần liên tiếp |
| **Kết quả mong đợi (Expected)** | Chỉ tạo 1 đơn hàng duy nhất, nút bị disable sau lần click đầu |
| **Kết quả thực tế (Actual)** | 2 đơn hàng được tạo với cùng nội dung, khách hàng bị tính tiền 2 lần |
| **Mức độ nghiêm trọng (Severity)** | Critical |
| **Độ ưu tiên (Priority)** | High |
| **Môi trường (Environment)** | Chrome 120, Windows 11 |

---

### Bug #4 – [Major] Tổng tiền giỏ hàng tính sai khi có mã giảm giá

| Trường | Nội dung |
| :--- | :--- |
| **Bug ID** | BUG_CART_001 |
| **Tóm tắt (Summary)** | Tổng tiền không trừ đi giá trị giảm giá dù hệ thống báo mã áp dụng thành công |
| **Các bước tái hiện (Steps to Reproduce)** | 1. Thêm sản phẩm "Áo thun" trị giá 200.000đ vào giỏ (sl: 1)<br>2. Nhập mã giảm giá "SALE50" (giảm 50.000đ)<br>3. Hệ thống hiện "Mã giảm giá đã áp dụng thành công"<br>4. Kiểm tra dòng Tổng cộng |
| **Kết quả mong đợi (Expected)** | Tổng cộng = 200.000đ − 50.000đ = **150.000đ** |
| **Kết quả thực tế (Actual)** | Tổng cộng vẫn hiển thị **200.000đ** |
| **Mức độ nghiêm trọng (Severity)** | Major |
| **Độ ưu tiên (Priority)** | High |
| **Môi trường (Environment)** | Chrome 120, Windows 11 |

---

### Bug #5 – [Major] Lọc sản phẩm theo giá không chính xác

| Trường | Nội dung |
| :--- | :--- |
| **Bug ID** | BUG_PROD_001 |
| **Tóm tắt (Summary)** | Bộ lọc giá "Trên 1.000.000đ" vẫn hiển thị sản phẩm giá dưới 1 triệu |
| **Các bước tái hiện (Steps to Reproduce)** | 1. Vào trang danh sách sản phẩm<br>2. Chọn bộ lọc giá "Trên 1 triệu"<br>3. Click nút "Lọc" |
| **Kết quả mong đợi (Expected)** | Chỉ hiển thị các sản phẩm có giá > 1.000.000đ |
| **Kết quả thực tế (Actual)** | Danh sách kết quả có lẫn sản phẩm giá 500.000đ, 800.000đ |
| **Mức độ nghiêm trọng (Severity)** | Major |
| **Độ ưu tiên (Priority)** | Medium |
| **Môi trường (Environment)** | Chrome 120, Windows 11 |

---

### Bug #6 – [Major] Nút "Thêm vào giỏ" bị disable khi kho vẫn còn hàng

| Trường | Nội dung |
| :--- | :--- |
| **Bug ID** | BUG_CART_002 |
| **Tóm tắt (Summary)** | Không thể thêm sản phẩm vào giỏ dù tồn kho (Stock) vẫn còn > 0 |
| **Các bước tái hiện (Steps to Reproduce)** | 1. Vào trang chi tiết sản phẩm A<br>2. Thông tin hiển thị: Stock = 5<br>3. Quan sát nút "Thêm vào giỏ" |
| **Kết quả mong đợi (Expected)** | Nút "Thêm vào giỏ" sáng, cho phép click và thêm bình thường |
| **Kết quả thực tế (Actual)** | Nút bị mờ (disabled), không click được. Chỉ xảy ra với 1 số sản phẩm nhất định |
| **Mức độ nghiêm trọng (Severity)** | Major |
| **Độ ưu tiên (Priority)** | High |
| **Môi trường (Environment)** | Chrome 120, Windows 11 |

---

### Bug #7 – [Major] Hệ thống không validate email thiếu domain khi đăng ký

| Trường | Nội dung |
| :--- | :--- |
| **Bug ID** | BUG_AUTH_002 |
| **Tóm tắt (Summary)** | Nhập email thiếu phần domain (ví dụ "user@") không hiển thị thông báo lỗi |
| **Các bước tái hiện (Steps to Reproduce)** | 1. Vào trang Đăng ký<br>2. Nhập email "user@" (thiếu domain)<br>3. Nhập mật khẩu hợp lệ "12345678"<br>4. Click nút "Đăng ký" |
| **Kết quả mong đợi (Expected)** | Hiển thị lỗi cụ thể: "Email phải có định dạng hợp lệ (ví dụ: user@example.com)" |
| **Kết quả thực tế (Actual)** | Không có phản hồi gì – nút "Đăng ký" không phản hồi, trang loading mãi không dừng |
| **Mức độ nghiêm trọng (Severity)** | Major |
| **Độ ưu tiên (Priority)** | Medium |
| **Môi trường (Environment)** | Chrome 120, Windows 11 |

---

### Bug #8 – [Major] Số lượng sản phẩm trong giỏ không cập nhật khi nhập trực tiếp

| Trường | Nội dung |
| :--- | :--- |
| **Bug ID** | BUG_CART_003 |
| **Tóm tắt (Summary)** | Khi sửa số lượng bằng cách gõ trực tiếp vào ô input, tổng tiền không được cập nhật |
| **Các bước tái hiện (Steps to Reproduce)** | 1. Thêm sản phẩm "Laptop" giá 15.000.000đ vào giỏ (sl: 1)<br>2. Vào trang giỏ hàng<br>3. Xoá số "1" trong ô số lượng, nhập "3"<br>4. Click ra ngoài ô input (blur) |
| **Kết quả mong đợi (Expected)** | Tổng tiền cập nhật: 15.000.000đ × 3 = 45.000.000đ |
| **Kết quả thực tế (Actual)** | Tổng tiền vẫn giữ 15.000.000đ. Phải refresh lại trang mới đúng |
| **Mức độ nghiêm trọng (Severity)** | Major |
| **Độ ưu tiên (Priority)** | Medium |
| **Môi trường (Environment)** | Chrome 120, Windows 11 |

---

### Bug #9 – [Minor] Sai chính tả trên trang Checkout

| Trường | Nội dung |
| :--- | :--- |
| **Bug ID** | BUG_CHECKOUT_003 |
| **Tóm tắt (Summary)** | Label "Địa chỉ" bị viết sai thành "Đia chỉ" (thiếu dấu nặng chữ "ị") |
| **Các bước tái hiện (Steps to Reproduce)** | 1. Đăng nhập, thêm sản phẩm vào giỏ<br>2. Click "Thanh toán"<br>3. Quan sát form nhập thông tin giao hàng |
| **Kết quả mong đợi (Expected)** | Hiển thị "Địa chỉ giao hàng" |
| **Kết quả thực tế (Actual)** | Hiển thị "Đia chỉ giao hàng" |
| **Mức độ nghiêm trọng (Severity)** | Minor |
| **Độ ưu tiên (Priority)** | Low |
| **Môi trường (Environment)** | Chrome 120, Windows 11 |

---

### Bug #10 – [Minor] Icon mắt (Show/Hide password) bị lệch khi nhập pass dài

| Trường | Nội dung |
| :--- | :--- |
| **Bug ID** | BUG_AUTH_003 |
| **Tóm tắt (Summary)** | Icon toggle hiển thị mật khẩu bị đè bởi text khi mật khẩu dài > 20 ký tự |
| **Các bước tái hiện (Steps to Reproduce)** | 1. Vào trang Login<br>2. Nhập mật khẩu dài hơn 20 ký tự (ví dụ: "abcdefghijklmnopqrstuvwxyz")<br>3. Quan sát icon mắt bên phải ô input |
| **Kết quả mong đợi (Expected)** | Icon nằm gọn bên phải, không bị text đè lên |
| **Kết quả thực tế (Actual)** | Text mật khẩu trôi ra đè lên icon mắt, icon bị che 1 phần |
| **Mức độ nghiêm trọng (Severity)** | Minor |
| **Độ ưu tiên (Priority)** | Low |
| **Môi trường (Environment)** | Chrome 120, Windows 11 |

---

### Bug #11 – [Minor] Màu nút "Huỷ" không đúng thiết kế (Design System)

| Trường | Nội dung |
| :--- | :--- |
| **Bug ID** | BUG_PROD_002 |
| **Tóm tắt (Summary)** | Nút "Huỷ" trong popup bộ lọc có màu đỏ thay vì màu xám theo design system |
| **Các bước tái hiện (Steps to Reproduce)** | 1. Vào trang danh sách sản phẩm<br>2. Mở popup "Bộ lọc" (Filter)<br>3. Quan sát nút "Huỷ" |
| **Kết quả mong đợi (Expected)** | Nút "Huỷ" có màu xám (#CCCCCC) theo design system |
| **Kết quả thực tế (Actual)** | Nút "Huỷ" có màu đỏ (#FF0000) |
| **Mức độ nghiêm trọng (Severity)** | Minor |
| **Độ ưu tiên (Priority)** | Low |
| **Môi trường (Environment)** | Chrome 120, Windows 11 |

---

### Bug #12 – [Minor] Tab order không tuần tự tại form Đăng ký

| Trường | Nội dung |
| :--- | :--- |
| **Bug ID** | BUG_AUTH_004 |
| **Tóm tắt (Summary)** | Nhấn Tab từ ô Email nhảy xuống nút "Đăng ký" thay vì ô "Mật khẩu" |
| **Các bước tái hiện (Steps to Reproduce)** | 1. Vào trang Đăng ký<br>2. Click vào ô "Email" để đặt focus<br>3. Nhấn phím Tab |
| **Kết quả mong đợi (Expected)** | Focus chuyển sang ô "Mật khẩu" (theo thứ tự tự nhiên trên form) |
| **Kết quả thực tế (Actual)** | Focus nhảy xuống nút "Đăng ký", bỏ qua ô "Mật khẩu" |
| **Mức độ nghiêm trọng (Severity)** | Minor |
| **Độ ưu tiên (Priority)** | Low |
| **Môi trường (Environment)** | Chrome 120, Windows 11 |
