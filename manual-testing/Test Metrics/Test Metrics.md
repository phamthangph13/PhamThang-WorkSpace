# CHỈ SỐ KIỂM THỬ (TEST METRICS)

**Dự án:** Website bán hàng online (E-commerce)  
**Phiên bản:** v1.0.0  
**Ngày cập nhật:** 25/02/2026  

---

## 1. Tỷ lệ thực thi kiểm thử (Test Execution Rate)

Đo lường tiến độ kiểm thử dựa trên số lượng test case đã thực thi.

*   **Công thức:** `(Số TC đã thực thi / Tổng số TC) × 100%`
*   **Kết quả:** `(47 / 47) × 100%` = **100%**
*   **Đánh giá:** ✅ Hoàn thành đúng tiến độ, không có TC nào bị bỏ qua hoặc blocked.

---

## 2. Tỷ lệ Pass / Fail (Pass/Fail Rate)

Đo lường chất lượng của bản build hiện tại.

| Chỉ số | Công thức | Kết quả |
| :--- | :--- | :--- |
| **Pass Rate** | (35 / 47) × 100% | **74.5%** |
| **Fail Rate** | (12 / 47) × 100% | **25.5%** |

**Đánh giá:** ⚠️ Tỷ lệ Fail 25.5% vượt ngưỡng chấp nhận (≤ 10%). Cần fix bug và retest.

### Biểu đồ sơ bộ:
```
Pass: ███████████████████████████████████ (74.5%)
Fail: ████████████ (25.5%)
```

---

## 3. Mật độ lỗi theo Module (Defect Density per Module)

Xác định module nào chứa nhiều rủi ro nhất.

| Module | Số lượng TC | Số lượng Bug | Mật độ lỗi (Bug/TC) | Đánh giá |
| :--- | :--- | :--- | :--- | :--- |
| **Authentication** | 15 | 4 | 26.7% | ⚠️ Cao |
| **Product & Cart** | 20 | 5 | 25.0% | ⚠️ Cao |
| **Checkout** | 12 | 3 | 25.0% | ⚠️ Cao |
| **Tổng** | **47** | **12** | **25.5%** | |

**Chi tiết phân bố bug theo module:**
*   **Authentication (4 bug):** BUG_AUTH_001 (Critical), BUG_AUTH_002 (Major), BUG_AUTH_003 (Minor), BUG_AUTH_004 (Minor)
*   **Product & Cart (5 bug):** BUG_PROD_001 (Major), BUG_PROD_002 (Minor), BUG_CART_001 (Major), BUG_CART_002 (Major), BUG_CART_003 (Major)
*   **Checkout (3 bug):** BUG_CHECKOUT_001 (Critical), BUG_CHECKOUT_002 (Critical), BUG_CHECKOUT_003 (Minor)

---

## 4. Phân bố mức độ nghiêm trọng (Severity Distribution)

Đánh giá mức độ ảnh hưởng của các lỗi tìm thấy.

| Severity | Số lượng | Tỷ lệ (%) | Bug ID |
| :--- | :--- | :--- | :--- |
| **Critical** | 3 | 25.0% | BUG_CHECKOUT_001, BUG_AUTH_001, BUG_CHECKOUT_002 |
| **Major** | 5 | 41.7% | BUG_CART_001, BUG_PROD_001, BUG_CART_002, BUG_AUTH_002, BUG_CART_003 |
| **Minor** | 4 | 33.3% | BUG_CHECKOUT_003, BUG_AUTH_003, BUG_PROD_002, BUG_AUTH_004 |

### Biểu đồ sơ bộ:
```
Critical: ███ (25.0%)   ← 3 bug
Major:    █████ (41.7%) ← 5 bug
Minor:    ████ (33.3%)  ← 4 bug
```

**Đánh giá:** ⛔ Có 3 lỗi Critical (25%) – tỷ lệ rất cao, cần fix khẩn cấp trước khi release.

---

## 5. Độ bao phủ yêu cầu (Requirement Coverage)

Đo lường mức độ kiểm thử so với yêu cầu đề ra.

| Chỉ số | Giá trị |
| :--- | :--- |
| Tổng số Requirement | 16 |
| Số Requirement đã có TC map | 16 |
| Số Requirement chưa được cover | 0 |
| **Coverage** | **100%** |
| Mỗi Requirement tối thiểu | ≥ 2 Test Cases ✅ |

**Đánh giá:** ✅ Đạt yêu cầu ≥ 90%. Tất cả 16/16 yêu cầu đã được map với tối thiểu 2 test case.

---

## 6. Tổng hợp & Kết luận

| # | Chỉ số | Giá trị | Ngưỡng mong đợi | Trạng thái |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Test Execution Rate | 100% | ≥ 95% | ✅ Đạt |
| 2 | Pass Rate | 74.5% | ≥ 90% | ⛔ Không đạt |
| 3 | Critical Bug Count | 3 | 0 | ⛔ Không đạt |
| 4 | Requirement Coverage | 100% | ≥ 90% | ✅ Đạt |
| 5 | Highest Defect Density | 26.7% (Auth) | ≤ 15% | ⚠️ Cần cải thiện |

**Kết luận:** Hệ thống đã được kiểm thử đầy đủ (100% execution, 100% coverage) nhưng chất lượng chưa đạt yêu cầu do Pass Rate thấp (74.5%) và còn 3 lỗi Critical. Cần fix bug và thực hiện Regression Test trước khi cân nhắc release.
