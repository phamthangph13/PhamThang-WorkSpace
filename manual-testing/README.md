# 📋 Manual Testing – E-commerce Website

Bộ tài liệu kiểm thử thủ công (Manual Testing) cho hệ thống **Website bán hàng online (E-commerce)**.

## 📁 Cấu trúc thư mục

```
manual-testing/
├── Test Plan/          📄 Kế hoạch kiểm thử
├── Test Cases/         📋 Ca kiểm thử (47 TCs)
├── RTM/                🔗 Ma trận truy vết yêu cầu
├── Bug Reports/        🐞 Báo cáo lỗi (12 bugs)
├── Test Report/        📊 Báo cáo kiểm thử
└── Test Metrics/       📈 Chỉ số kiểm thử
```

## 🎯 Hệ thống kiểm thử

| Module | Chức năng |
| :--- | :--- |
| **Authentication** | Đăng ký, Đăng nhập, Quên mật khẩu, Đăng xuất |
| **Product & Cart** | Tìm kiếm, Lọc giá, Xem chi tiết, Giỏ hàng |
| **Checkout** | Địa chỉ giao hàng, Thanh toán COD/Visa, Lịch sử đơn hàng |

## 📊 Tổng quan kết quả

| Chỉ số | Giá trị |
| :--- | :--- |
| Tổng Test Cases | 47 |
| Pass / Fail | 35 (74.5%) / 12 (25.5%) |
| Tổng Bugs | 12 (3 Critical, 5 Major, 4 Minor) |
| Requirement Coverage | 100% (16/16) |
| **Release Decision** | ⛔ **No-Release** |

## 📝 Quy ước đặt tên

- **Test Case:** `TC_[MODULE]_[SỐ]` → `TC_AUTH_001`, `TC_CART_010`, `TC_CHECKOUT_005`
- **Bug:** `BUG_[MODULE]_[SỐ]` → `BUG_AUTH_001`, `BUG_CHECKOUT_002`
