# MA TRẬN TRUY VẾT YÊU CẦU (RTM)

## Tóm tắt
*   **Tổng số yêu cầu (Requirements):** 16
*   **Độ bao phủ (Coverage):** 100%
*   **Tiêu chí:** Mỗi yêu cầu được map với tối thiểu 2 kiểm thử (Test Cases).

## Chi tiết Ma trận

| Requirement ID | Mô tả Yêu cầu | Test Case ID (Mapping) | Trạng thái |
| :--- | :--- | :--- | :--- |
| **R1** | Người dùng đăng ký bằng email hợp lệ | TC_AUTH_001, TC_AUTH_015 | Covered |
| **R2** | Không cho đăng ký khi email sai định dạng | TC_AUTH_002, TC_AUTH_004 | Covered |
| **R3** | Mật khẩu tối thiểu 8 ký tự | TC_AUTH_003, TC_AUTH_015 | Covered |
| **R4** | Đăng nhập thành công với thông tin hợp lệ | TC_AUTH_006, TC_AUTH_009 | Covered |
| **R5** | Đăng nhập thất bại khi sai mật khẩu | TC_AUTH_007, TC_AUTH_008 | Covered |
| **R6** | Quên mật khẩu gửi email đặt lại | TC_AUTH_010, TC_AUTH_012 | Covered |
| **R7** | Tìm kiếm hiển thị đúng kết quả | TC_PROD_001, TC_PROD_003 | Covered |
| **R8** | Lọc theo giá hoạt động đúng | TC_PROD_004, TC_PROD_005 | Covered |
| **R9** | Xem chi tiết sản phẩm | TC_PROD_006, TC_PROD_007 | Covered |
| **R10** | Thêm sản phẩm vào giỏ thành công | TC_CART_001, TC_CART_010 | Covered |
| **R11** | Cập nhật số lượng trong giỏ | TC_CART_005, TC_CART_006 | Covered |
| **R12** | Xoá sản phẩm khỏi giỏ | TC_CART_007, TC_CART_008 | Covered |
| **R13** | Thanh toán bắt buộc nhập địa chỉ | TC_CHK_003, TC_CHK_012 | Covered |
| **R14** | Chọn phương thức thanh toán | TC_CHK_007, TC_CHK_005 | Covered |
| **R15** | Đặt hàng thành công | TC_CHK_004, TC_CHK_005 | Covered |
| **R16** | Lưu lịch sử đơn hàng | TC_CHK_009, TC_CHK_010 | Covered |

## Ghi chú
*   **TC_AUTH_015** kiểm tra biên độ dài mật khẩu hợp lệ (8 ký tự), hỗ trợ cho R1 và R3.
*   **TC_CART_008** (Tính tổng tiền) được dùng để verify việc xoá (R12) sản phẩm có cập nhật lại tổng tiền đúng hay không.
*   **TC_CHK_012** (Validate SĐT) là một phần của thông tin địa chỉ giao hàng (R13).
