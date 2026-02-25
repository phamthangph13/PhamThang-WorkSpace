# MA TRẬN TRUY VẾT YÊU CẦU (RTM)
## Requirement Traceability Matrix

### Tóm tắt
*   **Dự án:** Website bán hàng online (E-commerce)
*   **Tổng số yêu cầu (Requirements):** 16
*   **Số yêu cầu đã được cover:** 16/16
*   **Độ bao phủ (Coverage):** **100%** _(đạt yêu cầu ≥ 90%)_
*   **Mỗi Requirement:** Tối thiểu 2 Test Case (đạt yêu cầu)

---

## Chi tiết Ma trận

| Requirement ID | Mô tả Yêu cầu | Test Case ID (Mapping) | Số TC | Trạng thái |
| :--- | :--- | :--- | :--- | :--- |
| **R1** | Người dùng đăng ký bằng email hợp lệ | TC_AUTH_001, TC_AUTH_005, TC_AUTH_015 | 3 | ✅ Covered |
| **R2** | Không cho đăng ký khi email sai định dạng | TC_AUTH_002, TC_AUTH_004, TC_AUTH_005 | 3 | ✅ Covered |
| **R3** | Mật khẩu tối thiểu 8 ký tự | TC_AUTH_003, TC_AUTH_015 | 2 | ✅ Covered |
| **R4** | Đăng nhập thành công với thông tin hợp lệ | TC_AUTH_006, TC_AUTH_009, TC_AUTH_014 | 3 | ✅ Covered |
| **R5** | Đăng nhập thất bại khi sai mật khẩu | TC_AUTH_007, TC_AUTH_008 | 2 | ✅ Covered |
| **R6** | Quên mật khẩu gửi email đặt lại | TC_AUTH_010, TC_AUTH_011, TC_AUTH_012 | 3 | ✅ Covered |
| **R7** | Tìm kiếm hiển thị đúng kết quả | TC_PROD_001, TC_PROD_002, TC_PROD_003 | 3 | ✅ Covered |
| **R8** | Lọc theo giá hoạt động đúng | TC_PROD_004, TC_PROD_005 | 2 | ✅ Covered |
| **R9** | Xem chi tiết sản phẩm | TC_PROD_006, TC_PROD_007 | 2 | ✅ Covered |
| **R10** | Thêm sản phẩm vào giỏ thành công | TC_CART_001, TC_CART_002, TC_CART_003, TC_CART_010 | 4 | ✅ Covered |
| **R11** | Cập nhật số lượng trong giỏ | TC_CART_005, TC_CART_006, TC_CART_011, TC_CART_012 | 4 | ✅ Covered |
| **R12** | Xoá sản phẩm khỏi giỏ | TC_CART_007, TC_CART_008 | 2 | ✅ Covered |
| **R13** | Thanh toán bắt buộc nhập địa chỉ | TC_CHECKOUT_003, TC_CHECKOUT_012 | 2 | ✅ Covered |
| **R14** | Chọn phương thức thanh toán | TC_CHECKOUT_005, TC_CHECKOUT_006, TC_CHECKOUT_007 | 3 | ✅ Covered |
| **R15** | Đặt hàng thành công | TC_CHECKOUT_004, TC_CHECKOUT_005, TC_CHECKOUT_008 | 3 | ✅ Covered |
| **R16** | Lưu lịch sử đơn hàng | TC_CHECKOUT_009, TC_CHECKOUT_010 | 2 | ✅ Covered |

---

## Thống kê Coverage

| Module | Số Requirements | Số TC liên quan | Coverage |
| :--- | :--- | :--- | :--- |
| Authentication (R1–R6) | 6 | 15 | 100% |
| Product & Cart (R7–R12) | 6 | 20 | 100% |
| Checkout (R13–R16) | 4 | 12 | 100% |
| **Tổng** | **16** | **47** | **100%** |

---

## Ghi chú
*   **TC_AUTH_015** kiểm tra giá trị biên mật khẩu đúng 8 ký tự – hỗ trợ cả R1 (đăng ký thành công) và R3 (mật khẩu tối thiểu 8 ký tự).
*   **TC_AUTH_005** (bỏ trống tất cả) liên quan cả R1 (email) và R2 (validation) vì kiểm tra toàn bộ form đăng ký.
*   **TC_CART_008** (tổng tiền) hỗ trợ verify R12 – khi xoá SP thì tổng tiền phải cập nhật.
*   **TC_CHECKOUT_012** (SĐT sai) thuộc validation thông tin giao hàng – liên quan R13 (bắt buộc nhập địa chỉ đầy đủ).
*   **TC_CHECKOUT_008** (kiểm tra tổng tiền thanh toán) hỗ trợ verify R15 – đảm bảo đặt hàng với số tiền chính xác.
