# Cypress E2E Testing - SauceDemo

## Tổng quan

Dự án này thực hiện kiểm thử tự động End-to-End (E2E) cho trang web mẫu [SauceDemo](https://www.saucedemo.com) sử dụng Cypress.

## Kết quả kiểm thử

✅ **Tất cả 7 bài kiểm thử đều PASS thành công!**

| Spec File | Tests | Passing | Duration |
|-----------|-------|---------|----------|
| cart_spec.cy.js | 3 | 3 | 10s |
| checkout_spec.cy.js | 2 | 2 | 6s |
| login_spec.cy.js | 2 | 2 | 7s |
| **Total** | **7** | **7** | **24s** |

## Các kịch bản kiểm thử đã thực hiện

### 1. Login Tests ([login_spec.cy.js](file:///Users/phamthang/Desktop/Cypress/cypress/e2e/login_spec.cy.js))

- ✅ **Đăng nhập thành công**: Kiểm tra đăng nhập với thông tin hợp lệ (standard_user/secret_sauce)
- ✅ **Đăng nhập thất bại**: Kiểm tra hiển thị lỗi khi đăng nhập với thông tin không hợp lệ

### 2. Cart Tests ([cart_spec.cy.js](file:///Users/phamthang/Desktop/Cypress/cypress/e2e/cart_spec.cy.js))

- ✅ **Thêm sản phẩm vào giỏ hàng**: Kiểm tra chức năng thêm sản phẩm
- ✅ **Sắp xếp sản phẩm theo giá**: Kiểm tra bộ lọc "Price (low to high)"
- ✅ **Xóa sản phẩm khỏi giỏ hàng**: Kiểm tra chức năng xóa sản phẩm (Bài tập yêu cầu)

### 3. Checkout Tests ([checkout_spec.cy.js](file:///Users/phamthang/Desktop/Cypress/cypress/e2e/checkout_spec.cy.js))

- ✅ **Quy trình thanh toán**: Kiểm tra điền thông tin và chuyển đến trang xác nhận (Bài tập yêu cầu)
- ✅ **Hoàn thành thanh toán**: Kiểm tra toàn bộ quy trình thanh toán đến confirmation

## Cấu trúc dự án

```
Cypress/
├── cypress/
│   ├── e2e/
│   │   ├── login_spec.cy.js      # Kiểm thử đăng nhập
│   │   ├── cart_spec.cy.js       # Kiểm thử giỏ hàng
│   │   └── checkout_spec.cy.js   # Kiểm thử thanh toán
│   ├── support/
│   │   ├── e2e.js                # File support chính
│   │   └── commands.js           # Custom commands
│   └── videos/                   # Video recordings
├── cypress.config.js             # Cấu hình Cypress
├── package.json                  # Dependencies
└── README.md                     # File này
```

## Cách chạy kiểm thử

### Chạy ở chế độ headless (không UI)
```bash
npm test
```

### Mở Cypress UI
```bash
npm run test:open
```

### Chạy với trình duyệt hiển thị
```bash
npm run test:headed
```

## Video recordings

Các video ghi lại quá trình kiểm thử được lưu trong thư mục `cypress/videos/`:
- [cart_spec.cy.js.mp4](file:///Users/phamthang/Desktop/Cypress/cypress/videos/cart_spec.cy.js.mp4)
- [checkout_spec.cy.js.mp4](file:///Users/phamthang/Desktop/Cypress/cypress/videos/checkout_spec.cy.js.mp4)
- [login_spec.cy.js.mp4](file:///Users/phamthang/Desktop/Cypress/cypress/videos/login_spec.cy.js.mp4)

## Thông tin kỹ thuật

- **Cypress Version**: 15.9.0
- **Browser**: Electron 138 (headless)
- **Node Version**: v20.19.6
- **Base URL**: https://www.saucedemo.com
