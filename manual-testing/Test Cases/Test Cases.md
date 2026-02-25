# CA KIỂM THỬ (TEST CASES)

## Tổng quan
*   **Dự án:** Website bán hàng online (E-commerce)
*   **Phiên bản:** 1.0.0
*   **Tổng số Test Case:** 47
*   **Phân loại:**
    *   Authentication: 15
    *   Product & Cart: 20
    *   Checkout: 12

### Thống kê loại test:
| Loại | Số lượng | Ghi chú |
| :--- | :--- | :--- |
| Positive | 20 | Kiểm tra chức năng hoạt động đúng |
| Negative | 14 | Kiểm tra xử lý dữ liệu không hợp lệ |
| Boundary | 6 | Kiểm tra giá trị biên |
| UI | 4 | Kiểm tra giao diện cơ bản |
| Security | 3 | Kiểm tra bảo mật / validation cơ bản |

---

## Module 1: Xác thực người dùng (Authentication) – 15 TCs

| TC_ID | Tiêu đề (Title) | Điều kiện trước (Precondition) | Các bước (Steps) | Kết quả mong đợi (Expected Result) | Độ ưu tiên (Priority) | Loại test (Type) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| TC_AUTH_001 | Đăng ký tài khoản với email và mật khẩu hợp lệ | Chưa đăng nhập, email chưa tồn tại trong hệ thống | 1. Truy cập trang Đăng ký<br>2. Nhập email hợp lệ "newuser@email.com"<br>3. Nhập mật khẩu "Test@1234" (≥ 8 ký tự)<br>4. Click nút "Đăng ký" | Đăng ký thành công, chuyển hướng đến trang Login hoặc Home | High | Positive |
| TC_AUTH_002 | Đăng ký với email sai định dạng (thiếu @) | Chưa đăng nhập | 1. Truy cập trang Đăng ký<br>2. Nhập email "invalidemail.com" (thiếu @)<br>3. Nhập mật khẩu hợp lệ "12345678"<br>4. Click "Đăng ký" | Hiển thị thông báo lỗi: "Email không hợp lệ" | Medium | Negative |
| TC_AUTH_003 | Đăng ký với mật khẩu 7 ký tự (dưới tối thiểu) | Chưa đăng nhập | 1. Truy cập trang Đăng ký<br>2. Nhập email hợp lệ<br>3. Nhập mật khẩu "1234567" (7 ký tự)<br>4. Click "Đăng ký" | Hiển thị lỗi: "Mật khẩu phải có ít nhất 8 ký tự" | Medium | Boundary |
| TC_AUTH_004 | Đăng ký với email đã tồn tại trong hệ thống | Email "existing@email.com" đã tồn tại | 1. Truy cập trang Đăng ký<br>2. Nhập email "existing@email.com"<br>3. Nhập mật khẩu hợp lệ<br>4. Click "Đăng ký" | Hiển thị lỗi: "Email này đã được đăng ký" | High | Negative |
| TC_AUTH_005 | Đăng ký bỏ trống tất cả các trường | Chưa đăng nhập | 1. Truy cập trang Đăng ký<br>2. Để trống email và mật khẩu<br>3. Click "Đăng ký" | Hiển thị lỗi yêu cầu nhập đủ thông tin bắt buộc | Medium | Negative |
| TC_AUTH_006 | Đăng nhập thành công với thông tin hợp lệ | User "testuser@email.com" đã tồn tại | 1. Truy cập trang Login<br>2. Nhập email "testuser@email.com"<br>3. Nhập mật khẩu đúng "Test@1234"<br>4. Click "Đăng nhập" | Đăng nhập thành công, chuyển đến trang chủ, hiển thị tên user | High | Positive |
| TC_AUTH_007 | Đăng nhập với sai mật khẩu | User "testuser@email.com" đã tồn tại | 1. Truy cập trang Login<br>2. Nhập email đúng "testuser@email.com"<br>3. Nhập mật khẩu sai "wrongpass"<br>4. Click "Đăng nhập" | Hiển thị lỗi: "Sai thông tin đăng nhập" | High | Negative |
| TC_AUTH_008 | Đăng nhập với email không tồn tại | Chưa đăng nhập | 1. Truy cập trang Login<br>2. Nhập email "notexist@email.com"<br>3. Nhập mật khẩu bất kỳ<br>4. Click "Đăng nhập" | Hiển thị lỗi: "Sai thông tin đăng nhập" (không tiết lộ email không tồn tại) | High | Negative |
| TC_AUTH_009 | Đăng nhập – Toggle hiển thị mật khẩu (Show/Hide) | Chưa đăng nhập | 1. Truy cập trang Login<br>2. Nhập mật khẩu bất kỳ<br>3. Click icon mắt (toggle password) | Mật khẩu chuyển đổi giữa dạng ẩn (•••) và dạng text rõ | Low | UI |
| TC_AUTH_010 | Quên mật khẩu với email hợp lệ đã đăng ký | User "testuser@email.com" đã tồn tại | 1. Tại trang Login, click "Quên mật khẩu"<br>2. Nhập email "testuser@email.com"<br>3. Click "Gửi" | Hiển thị thông báo: "Email đặt lại mật khẩu đã được gửi" | Medium | Positive |
| TC_AUTH_011 | Quên mật khẩu với email không tồn tại | – | 1. Click "Quên mật khẩu"<br>2. Nhập email "notexist@email.com"<br>3. Click "Gửi" | Hiển thị lỗi: "Email không tồn tại trong hệ thống" | Medium | Negative |
| TC_AUTH_012 | Quên mật khẩu với email sai định dạng | – | 1. Click "Quên mật khẩu"<br>2. Nhập email "abc" (sai format)<br>3. Click "Gửi" | Hiển thị lỗi: "Vui lòng nhập email hợp lệ" | Medium | Negative |
| TC_AUTH_013 | Đăng xuất khỏi hệ thống | Đã đăng nhập thành công | 1. Click icon User / Avatar<br>2. Chọn "Đăng xuất" | Đăng xuất thành công, chuyển về trang Login hoặc Home | Medium | Positive |
| TC_AUTH_014 | Kiểm tra bảo mật – SQL Injection đơn giản trên form Login | – | 1. Tại form Login, nhập email: `' OR 1=1 --`<br>2. Nhập mật khẩu bất kỳ<br>3. Click "Đăng nhập" | Không đăng nhập được, hệ thống báo lỗi thông thường | High | Security |
| TC_AUTH_015 | Đăng ký với mật khẩu đúng 8 ký tự (giá trị biên dưới) | Chưa đăng nhập | 1. Truy cập trang Đăng ký<br>2. Nhập email hợp lệ chưa tồn tại<br>3. Nhập mật khẩu "12345678" (đúng 8 ký tự)<br>4. Click "Đăng ký" | Đăng ký thành công (mật khẩu đạt yêu cầu tối thiểu) | Medium | Boundary |

---

## Module 2: Sản phẩm & Giỏ hàng (Product & Cart) – 20 TCs

| TC_ID | Tiêu đề (Title) | Điều kiện trước (Precondition) | Các bước (Steps) | Kết quả mong đợi (Expected Result) | Độ ưu tiên (Priority) | Loại test (Type) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| TC_PROD_001 | Tìm kiếm sản phẩm với từ khoá chính xác | Có sản phẩm "iPhone 15" trong hệ thống | 1. Nhập "iPhone 15" vào ô tìm kiếm<br>2. Nhấn Enter hoặc click icon tìm kiếm | Hiển thị danh sách sản phẩm có tên chứa "iPhone 15" | High | Positive |
| TC_PROD_002 | Tìm kiếm sản phẩm không tồn tại | – | 1. Nhập "xyzabc123" vào ô tìm kiếm<br>2. Nhấn Enter | Hiển thị thông báo: "Không tìm thấy sản phẩm" | Medium | Negative |
| TC_PROD_003 | Tìm kiếm với ký tự đặc biệt (XSS cơ bản) | – | 1. Nhập `<script>alert('xss')</script>` vào ô tìm kiếm<br>2. Nhấn Enter | Xử lý an toàn (escape HTML), không thực thi script, hiển thị "Không tìm thấy" | Low | Security |
| TC_PROD_004 | Lọc sản phẩm theo khoảng giá hợp lệ | Có sản phẩm đa dạng giá | 1. Chọn bộ lọc giá "1.000.000đ – 5.000.000đ"<br>2. Click "Lọc" | Chỉ hiển thị các sản phẩm có giá trong khoảng 1tr – 5tr | Medium | Positive |
| TC_PROD_005 | Lọc sản phẩm khi giá min > max | – | 1. Nhập giá Min = 5.000.000đ, Max = 1.000.000đ<br>2. Click "Lọc" | Hiển thị lỗi hoặc tự động hoán đổi min/max | Low | Negative |
| TC_PROD_006 | Xem chi tiết sản phẩm | Có sản phẩm A trong danh sách | 1. Click vào ảnh hoặc tên sản phẩm A | Chuyển đến trang chi tiết sản phẩm A, hiển thị: tên, giá, mô tả, ảnh, nút "Thêm vào giỏ" | High | Positive |
| TC_PROD_007 | Kiểm tra hiển thị giá sản phẩm đúng format | – | 1. Truy cập trang chi tiết sản phẩm bất kỳ | Giá hiển thị đúng format tiền tệ Việt Nam (ví dụ: 1.500.000đ) | Medium | UI |
| TC_CART_001 | Thêm sản phẩm vào giỏ hàng thành công | Đang ở trang chi tiết sản phẩm, đã đăng nhập | 1. Chọn số lượng = 1<br>2. Click "Thêm vào giỏ" | Thông báo "Đã thêm vào giỏ", icon giỏ hàng cập nhật +1 | High | Positive |
| TC_CART_002 | Thêm sản phẩm vào giỏ – Số lượng tối đa (vượt tồn kho) | Stock sản phẩm = 10 | 1. Nhập số lượng = 999<br>2. Click "Thêm vào giỏ" | Hiển thị lỗi: "Số lượng vượt quá tồn kho" hoặc tự giới hạn về max | Medium | Boundary |
| TC_CART_003 | Thêm sản phẩm vào giỏ – Số lượng = 0 | – | 1. Nhập số lượng = 0<br>2. Click "Thêm vào giỏ" | Không cho phép thêm, hiển thị lỗi: "Số lượng phải ≥ 1" | Medium | Boundary |
| TC_CART_004 | Thêm sản phẩm vào giỏ – Số lượng âm | – | 1. Nhập số lượng = -5<br>2. Click "Thêm vào giỏ" | Không cho phép thêm, hiển thị lỗi hoặc tự reset về 1 | Medium | Negative |
| TC_CART_005 | Cập nhật số lượng trong giỏ hàng (Tăng +) | Giỏ có sản phẩm A (sl: 1) | 1. Vào trang giỏ hàng<br>2. Click nút (+) cạnh sản phẩm A | Số lượng tăng lên 2, tổng tiền cập nhật đúng | High | Positive |
| TC_CART_006 | Cập nhật số lượng trong giỏ hàng (Giảm −) | Giỏ có sản phẩm A (sl: 2) | 1. Vào trang giỏ hàng<br>2. Click nút (−) cạnh sản phẩm A | Số lượng giảm còn 1, tổng tiền cập nhật đúng | High | Positive |
| TC_CART_007 | Xoá sản phẩm khỏi giỏ hàng | Giỏ có sản phẩm A | 1. Vào trang giỏ hàng<br>2. Click icon Thùng rác / nút "Xoá" của sản phẩm A | Sản phẩm A biến mất khỏi giỏ, tổng tiền cập nhật lại | High | Positive |
| TC_CART_008 | Kiểm tra tính đúng của tổng tiền giỏ hàng (nhiều sản phẩm) | Giỏ có SP A (10.000đ × 1) và SP B (20.000đ × 1) | 1. Vào trang giỏ hàng<br>2. Kiểm tra dòng Tổng cộng | Tổng tiền = 10.000 + 20.000 = 30.000đ | High | Positive |
| TC_CART_009 | Hiển thị giỏ hàng khi chưa có sản phẩm | Giỏ hàng trống | 1. Click icon giỏ hàng | Hiển thị thông báo "Giỏ hàng trống" và nút "Mua sắm ngay" | Low | UI |
| TC_CART_010 | Thêm cùng 1 sản phẩm nhiều lần (gộp số lượng) | Giỏ đã có SP A (sl: 1) | 1. Quay lại trang chi tiết SP A<br>2. Click "Thêm vào giỏ" (sl: 1) lần nữa | Trong giỏ, SP A tăng số lượng lên 2 (không tạo dòng mới) | Medium | Positive |
| TC_CART_011 | Nhập ký tự chữ cái vào ô số lượng | – | 1. Tại ô số lượng, xoá nội dung và nhập "abc"<br>2. Quan sát hành vi | Không cho nhập chữ, hoặc tự reset về giá trị mặc định (1) | Low | Negative |
| TC_CART_012 | Kiểm tra giới hạn tồn kho khi cập nhật số lượng | Stock SP A = 5, giỏ đang có sl = 5 | 1. Vào giỏ hàng<br>2. Click nút (+) để tăng lên 6 | Hiển thị lỗi: "Vượt quá số lượng tồn kho" hoặc không cho tăng | Medium | Boundary |
| TC_CART_013 | Giữ giỏ hàng sau khi refresh trang | Đã thêm sản phẩm vào giỏ | 1. Nhấn F5 (refresh trình duyệt) | Giỏ hàng vẫn còn nguyên sản phẩm đã thêm | Medium | Positive |

---

## Module 3: Thanh toán (Checkout) – 12 TCs

| TC_ID | Tiêu đề (Title) | Điều kiện trước (Precondition) | Các bước (Steps) | Kết quả mong đợi (Expected Result) | Độ ưu tiên (Priority) | Loại test (Type) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| TC_CHECKOUT_001 | Vào trang thanh toán khi chưa đăng nhập | Giỏ hàng có sản phẩm, chưa login | 1. Click nút "Thanh toán" | Chuyển hướng đến trang Đăng nhập, yêu cầu login trước | High | Positive |
| TC_CHECKOUT_002 | Vào trang thanh toán khi đã đăng nhập | Đã login, giỏ có sản phẩm | 1. Click nút "Thanh toán" | Hiển thị trang Checkout với đầy đủ thông tin sản phẩm trong giỏ | High | Positive |
| TC_CHECKOUT_003 | Thanh toán bỏ trống trường địa chỉ | Tại trang Checkout | 1. Để trống ô "Địa chỉ giao hàng"<br>2. Nhập SĐT hợp lệ<br>3. Chọn phương thức COD<br>4. Click "Đặt hàng" | Hiển thị lỗi: "Vui lòng nhập địa chỉ giao hàng" | High | Negative |
| TC_CHECKOUT_004 | Đặt hàng thành công bằng COD | Nhập đầy đủ thông tin giao hàng hợp lệ | 1. Nhập địa chỉ, SĐT hợp lệ<br>2. Chọn phương thức "Thanh toán khi nhận hàng (COD)"<br>3. Click "Đặt hàng" | Thông báo đặt hàng thành công, giỏ hàng được xoá, tạo đơn hàng mới | High | Positive |
| TC_CHECKOUT_005 | Đặt hàng thành công bằng Visa giả lập | Nhập đầy đủ thông tin giao hàng hợp lệ | 1. Chọn phương thức "Visa"<br>2. Nhập số thẻ "4242 4242 4242 4242"<br>3. Nhập Expiry "12/28", CVV "123"<br>4. Click "Đặt hàng" | Thông báo đặt hàng thành công, giỏ hàng được xoá | High | Positive |
| TC_CHECKOUT_006 | Nhập sai định dạng thẻ Visa | Tại trang Checkout | 1. Chọn phương thức "Visa"<br>2. Nhập số thẻ "1234" (quá ngắn)<br>3. Click "Đặt hàng" | Hiển thị lỗi: "Số thẻ không hợp lệ" | High | Negative |
| TC_CHECKOUT_007 | Chọn / chuyển đổi phương thức thanh toán | Tại trang Checkout | 1. Click chọn "COD"<br>2. Sau đó click chọn "Visa" | UI highlight đúng phương thức được chọn, form nhập thẻ hiện/ẩn tương ứng | Medium | UI |
| TC_CHECKOUT_008 | Kiểm tra tổng tiền trên trang thanh toán | Giỏ có SP (giá 100k × 2) + phí ship 30k | 1. Vào trang Checkout<br>2. Kiểm tra mục "Tổng cộng" | Tổng = 100k × 2 + 30k (phí ship) = 230.000đ | High | Positive |
| TC_CHECKOUT_009 | Xem lịch sử đơn hàng sau khi đặt hàng | Đã đặt thành công 1 đơn hàng | 1. Click vào Profile / Tài khoản<br>2. Chọn "Lịch sử đơn hàng" | Hiển thị đơn hàng vừa đặt với mã đơn, ngày đặt, trạng thái | Medium | Positive |
| TC_CHECKOUT_010 | Xem chi tiết đơn hàng trong lịch sử | Có đơn hàng trong lịch sử | 1. Vào "Lịch sử đơn hàng"<br>2. Click vào mã đơn hàng | Hiển thị chi tiết: danh sách SP, số lượng, giá, tổng tiền, trạng thái | Medium | Positive |
| TC_CHECKOUT_011 | Thanh toán khi giỏ hàng trống | Giỏ hàng không có sản phẩm | 1. Truy cập trực tiếp URL `/checkout` | Chuyển hướng về trang chủ hoặc hiển thị "Giỏ hàng trống, vui lòng thêm sản phẩm" | Low | Negative |
| TC_CHECKOUT_012 | Nhập số điện thoại sai định dạng | Tại trang Checkout | 1. Nhập SĐT "abc" (không phải số)<br>2. Nhập địa chỉ hợp lệ<br>3. Click "Đặt hàng" | Hiển thị lỗi: "Số điện thoại không hợp lệ" | Medium | Security |

---

## Tổng kết phân loại

| Loại Test | Danh sách TC_ID | Số lượng |
| :--- | :--- | :--- |
| **Positive** | TC_AUTH_001, 006, 010, 013; TC_PROD_001, 004, 006; TC_CART_001, 005, 006, 007, 008, 010, 013; TC_CHECKOUT_001, 002, 004, 005, 008, 009, 010 | 21 |
| **Negative** | TC_AUTH_002, 004, 005, 007, 008, 011, 012; TC_PROD_002, 005; TC_CART_003, 004, 011; TC_CHECKOUT_003, 006, 011 | 15 |
| **Boundary** | TC_AUTH_003, 015; TC_CART_002, 003, 012; TC_PROD_005 | 6 |
| **UI** | TC_AUTH_009; TC_PROD_007; TC_CART_009; TC_CHECKOUT_007 | 4 |
| **Security** | TC_AUTH_014; TC_PROD_003; TC_CHECKOUT_012 | 3 |
