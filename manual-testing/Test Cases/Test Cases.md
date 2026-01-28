# CA KIỂM THỬ (TEST CASES)

## Tổng quan
*   **Tổng số Test Case:** 47
*   **Phân loại:**
    *   Authentication: 15
    *   Product & Cart: 20
    *   Checkout: 12

## Chi tiết Test Case

### Module 1: Xác thực (Authentication) - 15 TCs

| TC_ID | Tiêu đề (Title) | Điều kiện trước (Precondition) | Các bước (Steps) | Kết quả mong đợi (Expected Result) | Độ ưu tiên (Priority) | Loại test (Type) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| TC_AUTH_001 | Đăng ký với email và mật khẩu hợp lệ | Chưa đăng nhập | 1. Vào trang đăng ký<br>2. Nhập email hợp lệ (new@email.com)<br>3. Nhập pass "12345678"<br>4. Click Đăng ký | Đăng ký thành công, chuyển hướng đến trang login/home | High | Positive |
| TC_AUTH_002 | Đăng ký với email sai định dạng (thiếu @) | Chưa đăng nhập | 1. Vào trang đăng ký<br>2. Nhập email "invalidemail.com"<br>3. Nhập pass hợp lệ<br>4. Click Đăng ký | Hiển thị lỗi định dạng email | Medium | Negative |
| TC_AUTH_003 | Đăng ký với mật khẩu ít hơn 8 ký tự | Chưa đăng nhập | 1. Vào trang đăng ký<br>2. Nhập email hợp lệ<br>3. Nhập pass "1234567"<br>4. Click Đăng ký | Hiển thị lỗi mật khẩu quá ngắn | Medium | Boundary |
| TC_AUTH_004 | Đăng ký với email đã tồn tại | Email đã có trong DB | 1. Vào trang đăng ký<br>2. Nhập email đã tồn tại<br>3. Nhập pass hợp lệ<br>4. Click Đăng ký | Hiển thị lỗi email đã được sử dụng | High | Negative |
| TC_AUTH_005 | Đăng ký bỏ trống tất cả các trường | Chưa đăng nhập | 1. Vào trang đăng ký<br>2. Để trống email và pass<br>3. Click Đăng ký | Hiển thị lỗi yêu cầu nhập đủ thông tin | Medium | Negative |
| TC_AUTH_006 | Đăng nhập với thông tin hợp lệ | User đã tồn tại | 1. Vào trang Login<br>2. Nhập email đúng<br>3. Nhập pass đúng<br>4. Click Đăng nhập | Đăng nhập thành công, vào trang chủ | High | Positive |
| TC_AUTH_007 | Đăng nhập với sai mật khẩu | User đã tồn tại | 1. Vào trang Login<br>2. Nhập email đúng<br>3. Nhập pass sai<br>4. Click Đăng nhập | Báo lỗi sai thông tin đăng nhập | High | Negative |
| TC_AUTH_008 | Đăng nhập với email không tồn tại | Chưa đăng nhập | 1. Vào trang Login<br>2. Nhập email chưa đk<br>3. Nhập pass bất kỳ<br>4. Click Đăng nhập | Báo lỗi sai thông tin đăng nhập | High | Negative |
| TC_AUTH_009 | Đăng nhập - Kiểm tra hiển thị mật khẩu (Show/Hide) | Chưa đăng nhập | 1. Vào trang Login<br>2. Nhập pass<br>3. Click icon mắt | Mật khẩu chuyển đổi giữa dạng text và dot | Low | UI |
| TC_AUTH_010 | Quên mật khẩu với email hợp lệ | User đã tồn tại | 1. Click Quên mật khẩu<br>2. Nhập email đúng<br>3. Click Gửi | Thông báo email reset đã được gửi | Medium | Positive |
| TC_AUTH_011 | Quên mật khẩu với email không tồn tại | - | 1. Click Quên mật khẩu<br>2. Nhập email chưa đk<br>3. Click Gửi | Báo lỗi email không tồn tại trong hệ thống | Medium | Negative |
| TC_AUTH_012 | Quên mật khẩu với sai định dạng email | - | 1. Click Quên mật khẩu<br>2. Nhập email "abc"<br>3. Click Gửi | Báo lỗi định dạng email | Medium | Negative |
| TC_AUTH_013 | Đăng xuất khỏi hệ thống | Đã đăng nhập | 1. Click icon User<br>2. Chọn Đăng xuất | Đăng xuất thành công, về trang login/home | Medium | Positive |
| TC_AUTH_014 | Kiểm tra bảo mật form đăng nhập (SQL Injection đơn giản) | - | 1. Nhập email `' OR 1=1 --`<br>2. Nhập pass bất kỳ<br>3. Click Login | Không đăng nhập được, báo lỗi sai thông tin | High | Security |
| TC_AUTH_015 | Đăng ký với mật khẩu đúng 8 ký tự | Chưa đăng nhập | 1. Nhập email hợp lệ<br>2. Nhập pass "12345678"<br>3. Click Đăng ký | Đăng ký thành công (Test biên dưới) | Medium | Boundary |

### Module 2: Sản phẩm & Giỏ hàng (Product & Cart) - 20 TCs

| TC_ID | Tiêu đề (Title) | Điều kiện trước (Precondition) | Các bước (Steps) | Kết quả mong đợi (Expected Result) | Độ ưu tiên (Priority) | Loại test (Type) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| TC_PROD_001 | Tìm kiếm sản phẩm chính xác | Có sp "Iphone 15" | 1. Nhập "Iphone 15" vào ô tìm kiếm<br>2. Enter | Hiển thị list sp có tên chứa "Iphone 15" | High | Positive |
| TC_PROD_002 | Tìm kiếm sản phẩm không tồn tại | - | 1. Nhập "xyzabc"<br>2. Enter | Hiển thị thông báo không tìm thấy sp | Medium | Negative |
| TC_PROD_003 | Tìm kiếm với ký tự đặc biệt | - | 1. Nhập "@#$%"<br>2. Enter | Xử lý an toàn, không lỗi hệ thống | Low | Negative |
| TC_PROD_004 | Lọc sản phẩm theo khoảng giá hợp lệ | Có sp giá đa dạng | 1. Chọn lọc giá 1tr - 5tr<br>2. Click Lọc | Chỉ hiển thị sp trong khoảng giá 1tr-5tr | Medium | Positive |
| TC_PROD_005 | Lọc sản phẩm khi min > max | - | 1. Nhập min = 5tr, max = 1tr<br>2. Click Lọc | Báo lỗi hoặc tự đổi chỗ min/max | Low | Negative |
| TC_PROD_006 | Xem chi tiết sản phẩm | - | 1. Click vào ảnh sp A | Chuyển đến trang chi tiết sp A | High | Positive |
| TC_PROD_007 | Kiểm tra hiển thị giá sản phẩm | - | 1. Vào trang chi tiết | Giá hiển thị đúng format tiền tệ, có đơn vị | Medium | UI |
| TC_CART_001 | Thêm sản phẩm vào giỏ hàng thành công | Đang ở trang detail | 1. Chọn số lượng 1<br>2. Click "Thêm vào giỏ" | Thông báo thành công, icon giỏ hàng +1 | High | Positive |
| TC_CART_002 | Thêm sản phẩm vào giỏ - Số lượng tối đa | - | 1. Nhập số lượng 999 (hoặc max stock)<br>2. Click Thêm | Thêm thành công hoặc báo vượt quá tồn kho | Medium | Boundary |
| TC_CART_003 | Thêm sản phẩm vào giỏ - Số lượng 0 | - | 1. Nhập số lượng 0<br>2. Click Thêm | Không cho phép thêm, báo lỗi | Medium | Negative |
| TC_CART_004 | Thêm sản phẩm vào giỏ - Số lượng âm | - | 1. Nhập số lượng -5<br>2. Click Thêm | Không cho phép thêm, báo lỗi | Medium | Negative |
| TC_CART_005 | Cập nhật số lượng trong giỏ hàng (Tăng) | Giỏ có sp A (sl: 1) | 1. Vào giỏ hàng<br>2. Click nút (+) | Số lượng tăng lên 2, tổng tiền cập nhật đúng | High | Positive |
| TC_CART_006 | Cập nhật số lượng trong giỏ hàng (Giảm) | Giỏ có sp A (sl: 2) | 1. Vào giỏ hàng<br>2. Click nút (-) | Số lượng giảm còn 1, tổng tiền cập nhật đúng | High | Positive |
| TC_CART_007 | Xoá sản phẩm khỏi giỏ hàng | Giỏ có sp A | 1. Vào giỏ hàng<br>2. Click icon Thùng rác sp A | Sp A biến mất khỏi giỏ, tổng tiền update | High | Positive |
| TC_CART_008 | Tính tổng tiền giỏ hàng (nhiều sp) | Giỏ có sp A (10k), sp B (20k) | 1. Vào giỏ hàng | Tổng tiền = 30k (chưa ship) | High | Positive |
| TC_CART_009 | Giỏ hàng trống | Giỏ chưa có gì | 1. Vào giỏ hàng | Hiển thị "Giỏ hàng trống" và nút "Mua sắm ngay" | Low | UI |
| TC_CART_010 | Thêm cùng 1 sản phẩm nhiều lần | Giỏ đã có sp A (sl: 1) | 1. Ra trang chủ, thêm sp A lần nữa | Trong giỏ sp A tăng số lượng lên 2 (không tạo dòng mới) | Medium | Positive |
| TC_CART_011 | Nhập số lượng là chữ cái | - | 1. Ô số lượng nhập "abc" | Không cho nhập hoặc tự reset về 1 | Low | Negative |
| TC_CART_012 | Kiểm tra tồn kho khi thêm vào giỏ | Stock = 5 | 1. Thêm 6 sp vào giỏ | Báo lỗi không đủ hàng | Medium | Boundary |
| TC_CART_013 | Giữ giỏ hàng sau khi refresh trang | Đã thêm sp | 1. F5 trình duyệt | Giỏ hàng vẫn còn nguyên sp | Medium | Positive |

### Module 3: Thanh toán (Checkout) - 12 TCs

| TC_ID | Tiêu đề (Title) | Điều kiện trước (Precondition) | Các bước (Steps) | Kết quả mong đợi (Expected Result) | Độ ưu tiên (Priority) | Loại test (Type) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| TC_CHK_001 | Vào trang thanh toán khi chưa login | Giỏ có hàng, chưa login | 1. Click "Thanh toán" | Chuyển hướng yêu cầu đăng nhập/đăng ký | High | Positive |
| TC_CHK_002 | Vào trang thanh toán (Đã login) | Giỏ có hàng, đã login | 1. Click "Thanh toán" | Vào trang Checkout, hiển thị đúng thông tin sp | High | Positive |
| TC_CHK_003 | Thanh toán bỏ trống địa chỉ | Tại trang Checkout | 1. Để trống địa chỉ<br>2. Click Đặt hàng | Báo lỗi yêu cầu nhập địa chỉ | High | Negative |
| TC_CHK_004 | Đặt hàng thành công (COD) | Nhập đủ thông tin | 1. Chọn COD<br>2. Click Đặt hàng | Thông báo đặt hàng thành công, xoá giỏ hàng | High | Positive |
| TC_CHK_005 | Đặt hàng thành công (Visa giả lập) | Nhập đủ thông tin | 1. Chọn Visa<br>2. Nhập thẻ test 4242...<br>3. Click Đặt hàng | Thông báo thành công | High | Positive |
| TC_CHK_006 | Nhập sai định dạng thẻ Visa | - | 1. Chọn Visa<br>2. Nhập số thẻ ngắn/sai<br>3. Click Đặt hàng | Báo lỗi thẻ không hợp lệ | High | Negative |
| TC_CHK_007 | Chọn phương thức thanh toán | - | 1. Click chọn COD<br>2. Click chọn Visa | UI highlight phương thức được chọn | Medium | UI |
| TC_CHK_008 | Kiểm tra tổng tiền thanh toán | - | 1. Kiểm tra mục Tổng cộng | Tổng = Tiền hàng + Ship - Giảm giá (nếu có) | High | Positive |
| TC_CHK_009 | Xem lịch sử đơn hàng | Đã đặt 1 đơn | 1. Vào Profile -> Lịch sử đơn | Hiển thị đơn vừa đặt | Medium | Positive |
| TC_CHK_010 | Chi tiết lịch sử đơn hàng | Có đơn hàng | 1. Click vào mã đơn hàng | Hiển thị chi tiết sp, giá, trạng thái | Medium | Positive |
| TC_CHK_011 | Thanh toán khi giỏ hàng trống | Giỏ trống | 1. Cố truy cập URL /checkout | Chuyển hướng về trang chủ hoặc báo giỏ trống | Low | Negative |
| TC_CHK_012 | Nhập số điện thoại sai định dạng | Tại trang Checkout | 1. Nhập SĐT "abc"<br>2. Click Đặt hàng | Báo lỗi SĐT không hợp lệ | Medium | Negative |
