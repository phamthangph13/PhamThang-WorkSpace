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
        ✓ Danh sách không có học sinh giỏi
        ✓ Tất cả học sinh đều giỏi
      Trường hợp biên
        ✓ Danh sách trống
        ✓ Danh sách null
        ...
    calculateValidAverage
        ...

Test Suites: 1 passed, 1 total
Tests:       26 passed, 26 total
```

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
- [GitHub Docs - Linking commits to issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)

---

## 👥 Tác giả

- **Sinh viên**: [Tên sinh viên]
- **MSSV**: [Mã số sinh viên]
- **Môn học**: Kiểm thử phần mềm

---

## 📄 License

MIT License
