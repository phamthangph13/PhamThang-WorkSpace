# 📊 Student Analyzer - Phân tích dữ liệu điểm số học sinh

## 📋 Mô tả bài toán

Đây là bài tập thực hành **kiểm thử đơn vị (Unit Testing)** với **Jest** (tương đương JUnit trong Java) cho Node.js.

### Chức năng chính:
- **countExcellentStudents(scores)**: Đếm số học sinh đạt loại Giỏi (điểm >= 8.0)
- **calculateValidAverage(scores)**: Tính điểm trung bình của các điểm hợp lệ (0-10)

### Quy tắc xử lý:
- ✅ Điểm hợp lệ: từ 0 đến 10
- ❌ Điểm không hợp lệ (< 0 hoặc > 10): bị bỏ qua
- 📭 Danh sách rỗng: trả về 0

---

## 📁 Cấu trúc thư mục

```
unit-test/
├── src/
│   └── StudentAnalyzer.js    # Mã nguồn chính
├── test/
│   └── StudentAnalyzer.test.js   # Các ca kiểm thử (test cases)
├── package.json              # Cấu hình dự án
└── README.md                 # Tài liệu hướng dẫn
```

---

## 🛠️ Hướng dẫn cài đặt

### Yêu cầu hệ thống:
- **Node.js** >= 16.x
- **npm** >= 8.x

### Bước 1: Cài đặt Node.js
Tải và cài đặt Node.js từ: https://nodejs.org/

### Bước 2: Cài đặt dependencies
```bash
cd unit-test
npm install
```

---

## 🧪 Hướng dẫn chạy kiểm thử

### Chạy tất cả test cases:
```bash
npm test
```

### Chạy test với báo cáo coverage:
```bash
npm run test:coverage
```

### Kết quả mong đợi:
```
 PASS  test/StudentAnalyzer.test.js
  StudentAnalyzer
    countExcellentStudents
      Trường hợp bình thường
        ✓ Danh sách có nhiều điểm hợp lệ và không hợp lệ
        ✓ Danh sách toàn bộ điểm hợp lệ
        ...
    Kiểm thử lớp tương đương (Equivalence Class Testing)
      Equivalence Classes - isValidScore()
        ✓ EC1: Điểm hợp lệ
        ✓ EC2: Điểm âm
        ...

Test Suites: 1 passed, 1 total
Tests:       85+ passed, 85+ total
```

---

## 🎯 Kiểm Thử Lớp Tương Đương (Equivalence Class Testing)

### Giới thiệu phương pháp

**Kiểm thử lớp tương đương (Equivalence Partitioning)** là kỹ thuật thiết kế test case bằng cách:
1. Chia miền đầu vào thành các **lớp tương đương** (equivalence classes)
2. Chọn **một giá trị đại diện** từ mỗi lớp để test
3. Giả định rằng tất cả các giá trị trong cùng một lớp sẽ cho cùng kết quả

### 📊 Phân tích lớp tương đương

#### Method: `isValidScore(score)`

| Lớp | Miền giá trị | Đại diện | Kết quả |
|-----|--------------|----------|---------|
| **EC1** | 0 ≤ score ≤ 10 | 5, 7.5 | `true` |
| **EC2** | score < 0 | -1, -100, -0.5 | `false` |
| **EC3** | score > 10 | 11, 100, 10.5 | `false` |
| **EC4** | Không phải số | 'abc', null, NaN, {}, [] | `false` |

#### Method: `countExcellentStudents(scores)`

| Lớp | Mô tả | Đại diện | Kết quả |
|-----|-------|----------|---------|
| **EC1** | Danh sách null/undefined | `null`, `undefined` | 0 |
| **EC2** | Danh sách rỗng | `[]` | 0 |
| **EC3** | Tất cả điểm không hợp lệ | `[-5, 15, 100]` | 0 |
| **EC4** | Tất cả hợp lệ, không giỏi | `[5, 6, 7, 7.9]` | 0 |
| **EC5** | Có điểm giỏi hợp lệ | `[8.0, 9.0, 10.0]` | > 0 |
| **EC6** | Hỗn hợp | `[9.0, 7.0, -5, 8.5]` | đếm điểm ≥ 8 |

#### Method: `calculateValidAverage(scores)`

| Lớp | Mô tả | Đại diện | Kết quả |
|-----|-------|----------|---------|
| **EC1** | Danh sách null/undefined | `null`, `undefined` | 0 |
| **EC2** | Danh sách rỗng | `[]` | 0 |
| **EC3** | Tất cả điểm không hợp lệ | `[-5, 15, 100]` | 0 |
| **EC4** | Tất cả điểm hợp lệ | `[5, 6, 7, 8]` | 6.5 |
| **EC5** | Hỗn hợp hợp lệ/không hợp lệ | `[5, -5, 7]` | 6 |
| **EC6** | Một phần tử hợp lệ | `[7.5]` | 7.5 |
| **EC7** | Điểm biên 0 và 10 | `[0, 10]` | 5 |

### 📏 Phân tích giá trị biên (Boundary Value Analysis)

| Biên | Giá trị | Mô tả | Kết quả isValidScore |
|------|---------|-------|----------------------|
| B1 | 0 | Biên dưới hợp lệ | `true` |
| B2 | -0.01 | Ngay dưới biên dưới | `false` |
| B3 | 10 | Biên trên hợp lệ | `true` |
| B4 | 10.01 | Ngay trên biên trên | `false` |
| B5 | 7.99 | Ngay dưới ngưỡng giỏi | Không giỏi |
| B6 | 8.0 | Đúng ngưỡng giỏi | Giỏi |
| B7 | 8.01 | Ngay trên ngưỡng giỏi | Giỏi |

---

## 📝 Danh sách Test Cases

### 1. countExcellentStudents()

| Loại | Test Case | Input | Expected Output |
|------|-----------|-------|-----------------|
| Bình thường | Điểm hợp lệ và không hợp lệ | [9.0, 8.5, 7.0, 11.0, -1.0] | 2 |
| Bình thường | Toàn bộ hợp lệ | [8.0, 9.5, 7.5, 6.0, 10.0] | 3 |
| Biên | Danh sách trống | [] | 0 |
| Biên | Chỉ có điểm 10 | [10, 10, 10] | 3 |
| Biên | Điểm đúng bằng 8.0 | [8.0] | 1 |
| Ngoại lệ | Có điểm < 0 | [9.0, -5.0, 8.5] | 2 |
| Ngoại lệ | Có điểm > 10 | [15.0, 8.0, 9.0] | 2 |

### 2. calculateValidAverage()

| Loại | Test Case | Input | Expected Output |
|------|-----------|-------|-----------------|
| Bình thường | Điểm hợp lệ và không hợp lệ | [9.0, 8.5, 7.0, 11.0, -1.0] | 8.17 |
| Bình thường | Toàn bộ hợp lệ | [8.0, 9.0, 7.0, 6.0, 10.0] | 8.0 |
| Biên | Danh sách trống | [] | 0 |
| Biên | Chỉ có điểm 0 | [0, 0, 0] | 0 |
| Biên | Chỉ có điểm 10 | [10, 10, 10] | 10 |
| Ngoại lệ | Có điểm < 0 | [6.0, -5.0, 8.0] | 7.0 |
| Ngoại lệ | Tất cả không hợp lệ | [-1.0, 11.0, 100.0] | 0 |

---

## 🤖 Nhận xét do AI viết

### Đánh giá chất lượng test suite

> **✅ Điểm mạnh:**
> 1. **Bao phủ đầy đủ các lớp tương đương**: Test suite đã cover tất cả các equivalence classes cho cả 3 methods.
> 2. **Kiểm thử giá trị biên chặt chẽ**: Sử dụng các giá trị như 7.99, 8.0, 8.01, -0.01, 10.01 để test boundary conditions.
> 3. **Xử lý edge cases tốt**: Đã test null, undefined, empty array, và các kiểu dữ liệu không hợp lệ.
> 4. **Tổ chức test theo cấu trúc rõ ràng**: Phân chia thành các nhóm Trường hợp bình thường, Trường hợp biên, Trường hợp ngoại lệ.

> **⚠️ Điểm cần lưu ý:**
> 1. Test hiện tại sử dụng `toBeCloseTo` cho các phép tính thập phân - đây là best practice để tránh lỗi floating-point.
> 2. Một số test case có thể được mở rộng thêm để cover các trường hợp đặc biệt như Infinity, -Infinity.

### Phương pháp kiểm thử được áp dụng

| Kỹ thuật | Mô tả | Áp dụng |
|----------|-------|---------|
| **Equivalence Partitioning** | Chia input thành các lớp tương đương | ✅ Đã áp dụng đầy đủ |
| **Boundary Value Analysis** | Test các giá trị biên | ✅ Đã áp dụng đầy đủ |
| **Decision Table Testing** | Test các tổ hợp điều kiện | ⚡ Áp dụng một phần |
| **Error Guessing** | Dự đoán lỗi tiềm ẩn | ✅ Đã áp dụng |

### Kết luận

Bộ test này đạt chất lượng **tốt** với:
- **85+ test cases** covering tất cả các phương thức
- **Code coverage** dự kiến đạt **>95%**
- Thiết kế theo nguyên tắc **kiểm thử lớp tương đương** và **phân tích giá trị biên**

---

## 📚 Ví dụ sử dụng

```javascript
const StudentAnalyzer = require('./src/StudentAnalyzer');

const analyzer = new StudentAnalyzer();

// Đếm học sinh giỏi
const scores = [9.0, 8.5, 7.0, 11.0, -1.0];
console.log(analyzer.countExcellentStudents(scores)); // Output: 2

// Tính điểm trung bình
console.log(analyzer.calculateValidAverage(scores)); // Output: 8.17
```

---

## 🔗 Tài liệu tham khảo

- [Jest Official Documentation](https://jestjs.io/docs/getting-started)
- [Node.js Official](https://nodejs.org/)
- [Equivalence Partitioning - ISTQB](https://istqb-glossary.page/equivalence-partitioning/)
- [Boundary Value Analysis](https://istqb-glossary.page/boundary-value-analysis/)

---

## 👥 Tác giả

- **Sinh viên**: [Tên sinh viên]
- **MSSV**: [Mã số sinh viên]
- **Môn học**: Kiểm thử phần mềm

---

## 📄 License

MIT License

