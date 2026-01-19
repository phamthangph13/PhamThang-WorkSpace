# 📊 Báo Cáo Kiểm Thử Hiệu Năng với JavaScript

## Mục Tiêu

Thực hiện kiểm thử hiệu năng (Performance Testing) sử dụng JavaScript với thư viện `autocannon` - một công cụ load testing tương đương với Apache JMeter.

## Thông Tin Kiểm Thử

| Thông tin | Chi tiết |
|-----------|----------|
| **Target Website** | https://jsonplaceholder.typicode.com |
| **Công cụ sử dụng** | autocannon (Node.js) |
| **Ngày thực hiện** | 2026-01-19 |
| **Số lượng kịch bản** | 3 |

---

## 🔧 Cấu Hình và Cài Đặt

### Cài đặt dependencies

```bash
cd jmeter
npm install
```

### Chạy từng kịch bản

```bash
# Kịch bản 1: Cơ bản
npm run test:basic

# Kịch bản 2: Tải nặng
npm run test:heavy

# Kịch bản 3: Tùy chỉnh
npm run test:custom

# Chạy tất cả
npm run test:all
```

---

## 📋 Các Kịch Bản Kiểm Thử

### 🟢 Scenario 1: Kịch Bản Cơ Bản

| Tham số | Giá trị |
|---------|---------|
| Số lượng người dùng (Threads) | 10 |
| Số lần lặp (Loop Count) | 5 lần |
| Tổng số requests | 50 |
| Hành vi | HTTP GET `/posts` |

**Mô tả:** Kịch bản này mô phỏng 10 người dùng đồng thời truy cập API để lấy danh sách bài viết, mỗi người thực hiện 5 lần request.

---

### 🟡 Scenario 2: Kịch Bản Tải Nặng

| Tham số | Giá trị |
|---------|---------|
| Số lượng người dùng (Threads) | 50 |
| Ramp-up Period | 30 giây |
| Hành vi | HTTP GET `/posts`, `/users`, `/posts/1` |

**Mô tả:** Kịch bản này mô phỏng tải nặng với 50 người dùng đồng thời trong 30 giây, truy cập nhiều endpoints khác nhau.

---

### 🔴 Scenario 3: Kịch Bản Tùy Chỉnh

| Tham số | Giá trị |
|---------|---------|
| Số lượng người dùng (Threads) | 20 |
| Thời gian chạy | 60 giây |
| Hành vi | HTTP POST `/posts` + GET `/comments`, `/todos`, `/albums` |

**Mô tả:** Kịch bản phức tạp nhất, kết hợp cả POST (tạo resource mới) và GET requests đến nhiều endpoints trong 60 giây.

---

## 📈 Kết Quả Kiểm Thử

### Bảng Tổng Hợp Kết Quả

| Kịch bản | Tổng Requests | Latency TB (ms) | Min (ms) | Max (ms) | Throughput | Req/s | Errors | Error Rate |
|----------|---------------|-----------------|----------|----------|------------|-------|--------|------------|
| **Scenario 1** | 50 | 274.94 | 81 | 508 | 718 KB/s | 25.00 | 0 | 0.00% |
| **Scenario 2** | 3,935 | 378.56 | 54 | 4,885 | 1.63 MB/s | 131.17 | 0 | 0.00% |
| **Scenario 3** | 1,218 | 976.47 | 59 | 9,199 | 991 KB/s | 20.30 | 0 | 0.00% |

### Chi Tiết Latency Percentiles

| Kịch bản | P50 | P75 | P90 | P99 |
|----------|-----|-----|-----|-----|
| **Scenario 1** | 145 ms | - | - | 508 ms |
| **Scenario 2** | 265 ms | 494 ms | 769 ms | 1,851 ms |
| **Scenario 3** | 550 ms | 1,214 ms | 2,308 ms | 4,717 ms |

---

## 📊 Phân Tích Kết Quả

### 1. Response Time (Latency)

- **Scenario 1 (Cơ bản):** Response time trung bình 274.94ms là chấp nhận được cho API testing. P50 = 145ms cho thấy 50% requests được xử lý rất nhanh.

- **Scenario 2 (Tải nặng):** Với 50 connections đồng thời, latency tăng lên 378.56ms nhưng vẫn trong giới hạn chấp nhận được. P99 = 1,851ms cho thấy có một số requests bị chậm do tải cao.

- **Scenario 3 (Tùy chỉnh):** Latency cao nhất (976.47ms) do sử dụng POST requests và nhiều endpoints phức tạp. P99 lên đến 4,717ms.

### 2. Throughput

- **Scenario 2** đạt throughput cao nhất (1.63 MB/s, ~131 req/s) do có số lượng connections lớn nhất.
- **Scenario 1** có throughput ổn định (~25 req/s) phù hợp với cấu hình nhỏ.
- **Scenario 3** có throughput thấp nhất do POST requests tốn nhiều thời gian xử lý hơn.

### 3. Error Rate

✅ **Tất cả 3 kịch bản đều có Error Rate = 0%**

Điều này cho thấy API jsonplaceholder.typicode.com hoạt động ổn định và có thể xử lý được mức tải đã kiểm thử.

---

## 🎯 Kết Luận

### Đánh giá hiệu năng target website

| Tiêu chí | Kết quả | Đánh giá |
|----------|---------|----------|
| Response Time < 500ms | Scenario 1 & 2 đạt | ✅ Tốt |
| Throughput > 100 req/s | Scenario 2 đạt | ✅ Tốt |
| Error Rate < 1% | Tất cả đạt | ✅ Xuất sắc |

### Khuyến nghị

1. **Với tải cơ bản (10-20 users):** Website hoạt động tốt, response time nhanh.
2. **Với tải nặng (50+ users):** Vẫn đáp ứng được nhưng latency tăng đáng kể ở percentile cao (P99).
3. **Với requests phức tạp (POST + nhiều endpoints):** Cần lưu ý thời gian xử lý cao hơn đáng kể.

---

## 📁 Cấu Trúc Thư Mục

```
jmeter/
├── package.json            # Cấu hình npm project
├── config.js               # Cấu hình chung (URL, endpoints, params)
├── scenario1-basic.js      # Kịch bản 1: Cơ bản
├── scenario2-heavy-load.js # Kịch bản 2: Tải nặng
├── scenario3-custom.js     # Kịch bản 3: Tùy chỉnh
├── run-all-tests.js        # Script chạy tất cả tests
├── README.md               # Báo cáo này
└── results/                # Thư mục kết quả
    ├── scenario1-results.json
    ├── scenario1-results.csv
    ├── scenario2-results.json
    ├── scenario2-results.csv
    ├── scenario3-results.json
    └── scenario3-results.csv
```

---

## 🛠️ Công Nghệ Sử Dụng

| Công nghệ | Phiên bản | Mô tả |
|-----------|-----------|-------|
| Node.js | >= 14.x | Runtime JavaScript |
| autocannon | ^7.15.0 | HTTP/HTTPS benchmarking tool |
| chalk | ^4.1.2 | Terminal string styling |

---

## ⚠️ Lưu Ý

- Không gửi quá nhiều requests đến website production để tránh vi phạm chính sách sử dụng (rate limiting).
- Kết quả có thể khác nhau tùy thuộc vào điều kiện mạng và thời điểm kiểm thử.
- Nên chạy test nhiều lần để có kết quả chính xác hơn.

---

## 📚 Tham Khảo

- [Autocannon GitHub](https://github.com/mcollina/autocannon)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
- [Apache JMeter](https://jmeter.apache.org/)
