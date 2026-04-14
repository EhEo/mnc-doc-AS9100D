# Thủ tục Giám sát, Đo lường, Phân tích và Đánh giá
## Monitoring, Measurement, Analysis and Evaluation Procedure

| Mục | Nội dung |
|-----|----------|
| Mã tài liệu | QP-901 |
| Lần sửa đổi | Rev. 0 |
| Ngày ban hành | Tháng 4 năm 2026 |
| Tiêu chuẩn áp dụng | AS9100D Rev D, 9.1 |
| Mức độ bảo mật | Chung (General) |
| Tài liệu cấp trên | QM-001 Sổ tay chất lượng §9.1 |

| Phân loại | Chức vụ | Họ tên | Chữ ký | Ngày |
|-----------|---------|--------|--------|------|
| Soạn thảo | Nhân viên phòng Chất lượng | | | |
| Xem xét | Trưởng phòng Chất lượng | | | |
| Phê duyệt | Đại diện lãnh đạo chất lượng (QMR) | | | |

---

## Lịch sử sửa đổi

| Rev. | Ngày | Nội dung sửa đổi | Người soạn | Người phê duyệt |
|------|------|-----------------|------------|----------------|
| 0 | 2026-04-__ | Ban hành lần đầu (soạn thảo mới theo AS9100D Rev D, bao gồm xử lý CAR-014) | | |

---

## Mục lục

1. [Mục đích](#1-mục-đích)
2. [Phạm vi áp dụng](#2-phạm-vi-áp-dụng)
3. [Tài liệu/tiêu chuẩn tham chiếu](#3-tài-liệu-tiêu-chuẩn-tham-chiếu)
4. [Thuật ngữ và định nghĩa](#4-thuật-ngữ-và-định-nghĩa)
5. [Trách nhiệm và quyền hạn](#5-trách-nhiệm-và-quyền-hạn)
6. [Xác định đối tượng giám sát/đo lường](#6-xác-định-đối-tượng-giám-sátđo-lường)
7. [Giám sát hiệu suất quá trình (Hệ thống KPI)](#7-giám-sát-hiệu-suất-quá-trình-hệ-thống-kpi)
8. [Phương pháp phân tích dữ liệu](#8-phương-pháp-phân-tích-dữ-liệu)
9. [Đánh giá sự phù hợp của sản phẩm](#9-đánh-giá-sự-phù-hợp-của-sản-phẩm)
10. [Yêu cầu đặc thù hàng không vũ trụ](#10-yêu-cầu-đặc-thù-hàng-không-vũ-trụ)
11. [Quản lý hồ sơ](#11-quản-lý-hồ-sơ)
12. [Tài liệu và biểu mẫu liên quan](#12-tài-liệu-và-biểu-mẫu-liên-quan)

---

# 1. Mục đích

Thủ tục này quy định quy trình giám sát, đo lường, phân tích và đánh giá hiệu suất của hệ thống quản lý chất lượng (QMS) cũng như sản phẩm/dịch vụ của M&C Electronics VINA.

Mục đích của thủ tục này:
- Thực hiện giám sát và đo lường có hệ thống theo yêu cầu AS9100D 9.1.1 / 9.1.3
- Đánh giá hiệu suất quá trình và sự phù hợp của sản phẩm dựa trên dữ liệu khách quan
- Xây dựng hệ thống phân tích dữ liệu khoa học bằng kỹ thuật thống kê (SPC, phân tích Pareto, phân tích xu hướng)
- Nhận diện cơ hội cải tiến QMS và cung cấp căn cứ ra quyết định

> **Xử lý CAR-014**: Thủ tục này được ban hành như biện pháp khắc phục cho CAR-014 (thiếu quy trình giám sát/đo lường/phân tích) được nhận diện từ kết quả phân tích khoảng cách. Hệ thống hóa và mở rộng các hoạt động SPC hiện có (Folder 30) theo yêu cầu AS9100D 9.1.

---

# 2. Phạm vi áp dụng

Thủ tục này áp dụng cho toàn bộ quá trình QMS và sản phẩm/dịch vụ của M&C Electronics VINA.

| Phân loại | Đối tượng áp dụng |
|-----------|-----------------|
| Sự hài lòng của khách hàng | Khảo sát sự hài lòng khách hàng, khiếu nại, hoàn hàng, khiếu nại chính thức |
| Sự phù hợp sản phẩm | Kết quả kiểm tra nhập kho, kiểm tra công đoạn, kiểm tra cuối cùng |
| Hiệu suất quá trình | KPI liên quan đến sản xuất, chất lượng, tiến độ giao hàng, chi phí |
| Hiệu suất nhà cung cấp | Chất lượng, tiến độ giao hàng, điểm đánh giá của nhà cung cấp bên ngoài |
| Hiệu suất QMS | Mức độ đạt mục tiêu chất lượng, kết quả đánh giá nội bộ, tỷ lệ hoàn thành hành động khắc phục |
| Đặc thù hàng không vũ trụ | OTD (giao hàng đúng hạn), năng lực quá trình (Cpk), dữ liệu liên quan đến an toàn |

---

# 3. Tài liệu/tiêu chuẩn tham chiếu

| Tài liệu/tiêu chuẩn | Nội dung |
|--------------------|----------|
| AS9100D Rev D | Yêu cầu hệ thống quản lý chất lượng hàng không vũ trụ (điều 9.1.1, 9.1.3) |
| ISO 9001:2015 | Yêu cầu hệ thống quản lý chất lượng (điều 9.1.1, 9.1.3) |
| QM-001 | Sổ tay chất lượng §9.1 |
| Quy trình SPC hiện có (Folder 30) | Tài liệu SPC kiểm soát biểu đồ, phân tích năng lực quá trình hiện có (làm cơ sở tham chiếu) |
| ISO/TR 10017 | Hướng dẫn về kỹ thuật thống kê |
| QP-602 | Lập kế hoạch thiết lập/đạt được mục tiêu chất lượng |
| QP-903 | Quản lý đánh giá nội bộ |
| QP-904 | Xem xét của lãnh đạo |

---

# 4. Thuật ngữ và định nghĩa

| Thuật ngữ | Định nghĩa |
|-----------|-----------|
| KPI | Key Performance Indicator - Chỉ số hiệu suất cốt lõi. Chỉ số đo lường định lượng hiệu suất quá trình/sản phẩm |
| SPC | Statistical Process Control - Kiểm soát quá trình thống kê. Kỹ thuật sử dụng biểu đồ kiểm soát và phương pháp thống kê để giám sát/quản lý biến động quá trình |
| Cpk | Process Capability Index - Chỉ số năng lực quá trình. Thước đo năng lực sản xuất sản phẩm trong giới hạn quy cách của quá trình |
| Cp | Năng lực quá trình (tiềm năng). Năng lực quá trình chỉ xem xét mức độ phân tán, không phụ thuộc vào tâm quá trình |
| Phân tích Pareto | Phân tích Pareto. Kỹ thuật sắp xếp các loại lỗi, nguyên nhân theo tần suất để nhận diện số ít quan trọng (Vital Few) |
| Phân tích xu hướng | Trend Analysis. Kỹ thuật phân tích dữ liệu chuỗi thời gian để nắm bắt xu hướng tăng/giảm/ổn định |
| Biểu đồ kiểm soát | Control Chart. Biểu đồ giám sát biến động theo thời gian của quá trình trong giới hạn kiểm soát (UCL/LCL) |
| UCL/LCL | Upper/Lower Control Limit - Giới hạn kiểm soát trên/dưới |
| OTD | On-Time Delivery - Tỷ lệ giao hàng đúng hạn |
| DPPM | Defective Parts Per Million - Số lượng phụ tùng lỗi trên một triệu sản phẩm |
| RFT | Right First Time - Tỷ lệ đạt ngay lần đầu |

---

# 5. Trách nhiệm và quyền hạn

| Vai trò | Trách nhiệm |
|---------|------------|
| **Đại diện lãnh đạo chất lượng (QMR)** | Tổng phụ trách hệ thống giám sát/đo lường/phân tích, phê duyệt hệ thống KPI, báo cáo trong xem xét lãnh đạo |
| **Trưởng phòng Chất lượng** | Tổng phụ trách thu thập/phân tích dữ liệu KPI, quản lý vận hành SPC, lập báo cáo phân tích |
| **Nhân viên phòng Chất lượng** | Thu thập dữ liệu kiểm tra, vận hành biểu đồ kiểm soát SPC, thực hiện phân tích thống kê |
| **Trưởng phòng Sản xuất** | Cung cấp dữ liệu KPI liên quan đến sản xuất, hoạt động cải tiến năng lực quá trình |
| **Người phụ trách từng quá trình** | Thu thập và nộp dữ liệu KPI của quá trình phụ trách |
| **Đại diện lãnh đạo (MR)** | Chỉ đạo cải tiến QMS dựa trên kết quả phân tích, chuẩn bị đầu vào xem xét lãnh đạo |

---

# 6. Xác định đối tượng giám sát/đo lường

## 6.1 Nguyên tắc xác định

Theo AS9100D 9.1.1, xác định và vận hành các nội dung sau:

| Nội dung xác định | Mô tả |
|-----------------|-------|
| **Giám sát/đo lường cái gì** | Lựa chọn chỉ tiêu KPI (xem mục 7) |
| **Thực hiện bằng phương pháp nào** | Phương pháp thu thập dữ liệu, kỹ thuật phân tích (xem mục 8) |
| **Khi nào thực hiện** | Tần suất giám sát/đo lường (xem mục 6.2) |
| **Khi nào phân tích/đánh giá kết quả** | Tần suất phân tích, tần suất báo cáo (xem mục 6.2) |
| **Ai thực hiện** | Người phụ trách/bộ phận (xem mục 5) |

## 6.2 Tần suất giám sát/đo lường

| Phân loại | Tần suất thu thập | Tần suất phân tích | Tần suất báo cáo |
|-----------|-----------------|-------------------|-----------------|
| Dữ liệu SPC công đoạn | Thời gian thực/hàng ngày | Hàng tuần | Hàng tháng |
| Tỷ lệ kiểm tra đạt | Hàng ngày | Hàng tuần | Hàng tháng |
| Khiếu nại/khiếu nại khách hàng | Ngay khi phát sinh | Hàng tháng | Hàng quý |
| Hiệu suất nhà cung cấp | Khi nhập hàng | Hàng quý | 6 tháng/lần |
| Mức độ đạt mục tiêu chất lượng | Hàng tháng | Hàng quý | Khi xem xét lãnh đạo |
| OTD (tỷ lệ giao hàng đúng hạn) | Từng lô xuất hàng | Hàng tháng | Hàng tháng/xem xét lãnh đạo |
| Kết quả đánh giá nội bộ | Khi đánh giá | Ngay sau đánh giá | Khi xem xét lãnh đạo |

---

# 7. Giám sát hiệu suất quá trình (Hệ thống KPI)

## 7.1 Cấu trúc hệ thống KPI

```
KPI cấp quản lý (Mục tiêu chất lượng toàn công ty)
    ├── KPI cấp quá trình (Chỉ tiêu hiệu suất theo bộ phận)
    │       ├── KPI chất lượng
    │       ├── KPI tiến độ giao hàng
    │       ├── KPI sản xuất
    │       └── KPI nhà cung cấp
    └── KPI cấp sản phẩm (Sự phù hợp sản phẩm/quá trình)
            ├── Tỷ lệ kiểm tra đạt
            ├── Năng lực quá trình (Cpk)
            └── Tỷ lệ lỗi (DPPM)
```

## 7.2 Danh sách KPI chính

### 7.2.1 KPI chất lượng

| Chỉ tiêu KPI | Công thức tính | Mục tiêu | Tần suất đo | Phụ trách |
|-------------|---------------|----------|------------|-----------|
| Tỷ lệ kiểm tra nhập kho đạt | (Số LOT đạt / Tổng số LOT kiểm tra) × 100 | ≥ 98% | Hàng tháng | BP Chất lượng |
| Tỷ lệ lỗi công đoạn | (Số lỗi công đoạn / Tổng số sản xuất) × 1.000.000 (DPPM) | ≤ 500 DPPM | Hàng tháng | BP Chất lượng |
| Tỷ lệ kiểm tra cuối cùng đạt | (Số LOT đạt / Tổng số LOT kiểm tra) × 100 | ≥ 99% | Hàng tháng | BP Chất lượng |
| Số lượng khiếu nại khách hàng | Số khiếu nại tiếp nhận hàng tháng | ≤ 2 vụ/tháng | Hàng tháng | BP Chất lượng |
| Tỷ lệ hoàn hàng của khách hàng | (Số lượng hoàn hàng / Số lượng xuất hàng) × 1.000.000 (DPPM) | ≤ 100 DPPM | Hàng tháng | BP Chất lượng |
| Tỷ lệ hoàn thành hành động khắc phục | (Số hoàn thành trong hạn / Tổng số phát hành) × 100 | ≥ 95% | Hàng tháng | BP Chất lượng |
| Tỷ lệ đạt ngay lần đầu (RFT) | (Số đạt ngay lần đầu / Tổng số kiểm tra) × 100 | ≥ 95% | Hàng tháng | BP Chất lượng |

### 7.2.2 KPI tiến độ giao hàng

| Chỉ tiêu KPI | Công thức tính | Mục tiêu | Tần suất đo | Phụ trách |
|-------------|---------------|----------|------------|-----------|
| OTD (tỷ lệ giao hàng đúng hạn) | (Số lô xuất đúng hạn / Tổng số lô xuất) × 100 | ≥ 95% | Hàng tháng | Sản xuất/Kinh doanh |
| Số lô giao hàng trễ | Số lô trễ hàng tháng | ≤ 3 lô/tháng | Hàng tháng | BP Sản xuất |

### 7.2.3 KPI nhà cung cấp

| Chỉ tiêu KPI | Công thức tính | Mục tiêu | Tần suất đo | Phụ trách |
|-------------|---------------|----------|------------|-----------|
| Tỷ lệ chất lượng nhà cung cấp đạt | (LOT đạt / Tổng LOT nhập) × 100 | ≥ 98% | Hàng quý | Mua hàng/Chất lượng |
| Tỷ lệ tuân thủ tiến độ nhà cung cấp | (Số lô nhập đúng hạn / Tổng số đơn đặt hàng) × 100 | ≥ 95% | Hàng quý | BP Mua hàng |

### 7.2.4 KPI hiệu suất QMS

| Chỉ tiêu KPI | Công thức tính | Mục tiêu | Tần suất đo | Phụ trách |
|-------------|---------------|----------|------------|-----------|
| Tỷ lệ đạt mục tiêu chất lượng | (Số mục tiêu đạt / Tổng số mục tiêu) × 100 | ≥ 90% | 6 tháng/lần | QMR |
| Tỷ lệ cải tiến không phù hợp đánh giá nội bộ | (Số hoàn thành cải tiến / Số không phù hợp phát hiện) × 100 | 100% | Sau đánh giá | BP Chất lượng |

## 7.3 Quy trình quản lý KPI

```
Thiết lập KPI (đầu năm/khi có thay đổi)
    ↓
Thu thập dữ liệu (người phụ trách từng quá trình)
    ↓
Xác nhận dữ liệu (BP Chất lượng)
    ↓
Phân tích và nắm bắt xu hướng (Trưởng BP Chất lượng)
    ↓
Phát hành báo cáo (hàng tháng/hàng quý)
    ↓
Đầu vào xem xét lãnh đạo (QP-904)
    ↓
Biện pháp cải tiến (khi không đạt mục tiêu)
    ↓
Xem xét lại KPI (ít nhất 1 lần/năm)
```

---

# 8. Phương pháp phân tích dữ liệu

## 8.1 Kiểm soát quá trình thống kê (SPC)

> Hệ thống hóa quy trình SPC hiện có (Folder 30) theo yêu cầu AS9100D.

### 8.1.1 Đối tượng áp dụng SPC

| Đối tượng áp dụng | Loại SPC | Loại biểu đồ kiểm soát |
|-----------------|---------|----------------------|
| Đặc tính kích thước (biến đổi liên tục) | SPC biến đổi liên tục | Biểu đồ X̄-R, X̄-S |
| Đặc tính ngoại quan/chức năng (biến đổi rời rạc) | SPC biến đổi rời rạc | Biểu đồ p, np, c |
| Đặc tính cốt lõi (KC) | SPC biến đổi liên tục (bắt buộc) | Biểu đồ X̄-R |
| Đặc tính an toàn cốt lõi | SPC biến đổi liên tục (bắt buộc) | Biểu đồ X̄-R + quản lý Cpk |

### 8.1.2 Quy trình vận hành SPC

1. **Lựa chọn đặc tính quản lý**: Ưu tiên đặc tính cốt lõi (KC), đặc tính an toàn cốt lõi, hạng mục khách hàng chỉ định
2. **Thu thập dữ liệu**: Thiết lập kích thước nhóm con (n=3~5), tần suất thu thập
3. **Lập biểu đồ kiểm soát**: Tính toán UCL, CL, LCL và lập biểu đồ kiểm soát
4. **Kiểm soát quá trình**: Điều tra và xử lý ngay khi vượt giới hạn kiểm soát
5. **Phân tích năng lực quá trình**: Tính toán và đánh giá Cp, Cpk định kỳ
6. **Hoạt động cải tiến**: Thực hiện hoạt động cải tiến khi năng lực quá trình không đạt

### 8.1.3 Tiêu chí phán định bất thường trên biểu đồ kiểm soát (Quy tắc Nelson)

| Quy tắc | Mẫu bất thường | Biện pháp |
|---------|--------------|-----------|
| Rule 1 | 1 điểm ngoài giới hạn kiểm soát | Điều tra ngay và thực hiện hành động khắc phục |
| Rule 2 | 9 điểm liên tiếp cùng một phía trung tâm | Điều tra sự dịch chuyển quá trình |
| Rule 3 | 6 điểm liên tiếp theo xu hướng tăng hoặc giảm | Điều tra nguyên nhân xu hướng |
| Rule 4 | 14 điểm liên tiếp xen kẽ trên dưới | Điều tra nguyên nhân hỗn hợp |

### 8.1.4 Quy trình xử lý khi biểu đồ kiểm soát vượt giới hạn

```
Phát hiện bất thường trên biểu đồ kiểm soát
    ↓
Tạm dừng sản xuất (nếu cần)
    ↓
Điều tra nguyên nhân (5 Why, biểu đồ xương cá)
    ↓
Thực hiện hành động khắc phục
    ↓
Xác nhận hiệu quả (xác nhận biểu đồ kiểm soát ổn định)
    ↓
Ghi chép (nguyên nhân bất thường, nội dung biện pháp, kết quả)
```

## 8.2 Phân tích Pareto

### 8.2.1 Lĩnh vực áp dụng

| Đối tượng phân tích | Tiêu chí phân loại | Tần suất phân tích |
|-------------------|------------------|------------------|
| Lỗi công đoạn | Theo loại lỗi, theo công đoạn, theo sản phẩm | Hàng tháng |
| Khiếu nại khách hàng | Theo loại khiếu nại, theo khách hàng, theo sản phẩm | Hàng quý |
| Không phù hợp nhà cung cấp | Theo loại không phù hợp, theo nhà cung cấp | Hàng quý |
| Không phù hợp đánh giá nội bộ | Theo điều khoản, theo bộ phận | Sau đánh giá |

### 8.2.2 Quy trình phân tích Pareto

1. **Thu thập dữ liệu**: Thu thập dữ liệu không phù hợp/lỗi trong khoảng thời gian phân tích
2. **Phân loại tổng hợp**: Tổng hợp số lượng/tỷ lệ theo từng loại
3. **Sắp xếp giảm dần**: Sắp xếp theo thứ tự tần suất từ cao đến thấp
4. **Tính tỷ lệ tích lũy**: Tính tỷ lệ phần trăm tích lũy
5. **Lập biểu đồ Pareto**: Biểu đồ cột + đường cong tích lũy
6. **Nhận diện số ít quan trọng (Vital Few)**: Nhận diện các mục mà 20% nguyên nhân hàng đầu chiếm 80% tác động
7. **Xác định ưu tiên cải tiến**: Tập trung cải tiến vào số ít quan trọng

## 8.3 Phân tích xu hướng (Trend Analysis)

### 8.3.1 Lĩnh vực áp dụng

| Đối tượng phân tích | Phương pháp phân tích | Tần suất phân tích |
|-------------------|--------------------|--------------------|
| Xu hướng KPI | Biểu đồ chuỗi thời gian, trung bình di động | Hàng tháng/hàng quý |
| Xu hướng tỷ lệ lỗi | Biểu đồ chuỗi thời gian | Hàng tháng |
| Xu hướng sự hài lòng khách hàng | Biểu đồ chuỗi thời gian, phân tích hồi quy | 6 tháng/lần |
| Xu hướng năng lực quá trình | Biểu đồ chuỗi thời gian Cpk | Hàng tháng |

### 8.3.2 Tiêu chí đánh giá xu hướng

| Loại xu hướng | Tiêu chí đánh giá | Biện pháp |
|-------------|-----------------|-----------|
| Xu hướng cải thiện | Cải thiện so với mục tiêu 3 tháng liên tiếp | Duy trì phương pháp quản lý hiện tại, chia sẻ trường hợp tốt nhất |
| Xu hướng xấu đi | Không đạt mục tiêu 2 tháng liên tiếp hoặc xấu hơn tháng trước | Bắt đầu phân tích nguyên nhân và hành động khắc phục |
| Biến động đột ngột | Biến động ±20% so với tháng trước | Điều tra nguyên nhân ngay |
| Xu hướng ổn định | Duy trì trong giới hạn kiểm soát trên 6 tháng | Xem xét nâng cao mục tiêu |

## 8.4 Các kỹ thuật phân tích khác

| Kỹ thuật phân tích | Tình huống áp dụng | Sản phẩm đầu ra |
|-------------------|------------------|----------------|
| Biểu đồ xương cá (Fishbone) | Khi phân tích nguyên nhân lỗi | Báo cáo phân tích nguyên nhân |
| Biểu đồ tần suất (Histogram) | Khi nắm bắt phân phối dữ liệu | Báo cáo phân tích phân phối |
| Biểu đồ phân tán | Khi phân tích tương quan giữa các yếu tố | Báo cáo phân tích tương quan |
| Phân tích 5 Why | Khi truy tìm nguyên nhân gốc rễ | Báo cáo phân tích nguyên nhân gốc rễ |

---

# 9. Đánh giá sự phù hợp của sản phẩm

## 9.1 Hệ thống đánh giá

| Giai đoạn đánh giá | Đối tượng đánh giá | Tiêu chí đánh giá | Quy trình tham chiếu |
|------------------|------------------|-----------------|-------------------|
| Kiểm tra nhập kho | Nguyên vật liệu, linh kiện mua về | Bản vẽ/thông số kỹ thuật, AQL | QP-815 (kiểm tra nhập kho) |
| Kiểm tra công đoạn | Sản phẩm đang chế tạo | Tiêu chuẩn công đoạn, SPC | QP-810 (quản lý sản xuất) |
| Kiểm tra cuối cùng | Thành phẩm | Bản vẽ/thông số kỹ thuật, tiêu chuẩn kiểm tra | QP-817 (kiểm tra cuối cùng) |
| FAI | Sản phẩm đầu tiên | AS9102, đo tất cả kích thước theo bản vẽ | QP-811 (FAI) |

## 9.2 Phân tích tích hợp dữ liệu sự phù hợp sản phẩm

- Phân tích tích hợp toàn bộ dữ liệu kiểm tra từ kiểm tra nhập kho → kiểm tra công đoạn → kiểm tra cuối cùng.
- Theo dõi sự thay đổi tỷ lệ lỗi theo từng giai đoạn công đoạn để đánh giá xem có ngăn được lỗi thoát ra ngoài (Escaping Defect) hay không.
- Kết quả phân tích được đưa vào báo cáo chất lượng hàng tháng và sử dụng làm tài liệu đầu vào xem xét lãnh đạo.

---

# 10. Yêu cầu đặc thù hàng không vũ trụ

## 10.1 Tỷ lệ giao hàng đúng hạn (OTD: On-Time Delivery)

AS9100D yêu cầu rõ ràng việc giám sát và cải tiến hiệu suất giao hàng đúng hạn.

| Hạng mục | Nội dung |
|---------|----------|
| Công thức tính | OTD(%) = (Số lô xuất trong hạn giao hàng cam kết / Tổng số lô xuất) × 100 |
| Mục tiêu | ≥ 95% (theo tiêu chuẩn khách hàng hàng không vũ trụ) |
| Tần suất đo | Hàng tháng |
| Báo cáo | Báo cáo chất lượng hàng tháng, đầu vào xem xét lãnh đạo |
| Biện pháp khi không đạt | Phân tích nguyên nhân → hành động khắc phục (QP-1001) → xác nhận hiệu quả |

### Chi tiết phân tích OTD

- Thực hiện phân tích Pareto bằng cách phân loại nguyên nhân chậm trễ (chậm vật liệu, lỗi công đoạn, hỏng thiết bị, logistics, v.v.).
- Khi có xu hướng không đạt OTD, phân tích nguyên nhân gốc rễ và thực hiện hoạt động cải tiến phối hợp với các bộ phận sản xuất/kinh doanh/mua hàng.

## 10.2 Quản lý năng lực quá trình (Cpk)

Trong ngành hàng không vũ trụ, yêu cầu quản lý nghiêm ngặt về năng lực quá trình.

| Phân loại | Tiêu chuẩn Cpk | Đối tượng áp dụng | Biện pháp khi không đạt |
|-----------|---------------|-----------------|----------------------|
| Đặc tính thông thường | Cpk ≥ 1.33 | Kích thước thông thường, đặc tính chức năng | Cải tiến quá trình, chuyển sang kiểm tra 100% |
| **Đặc tính an toàn cốt lõi** | **Cpk ≥ 1.67** | Kích thước liên quan đến an toàn, hạng mục chức năng | **Dừng quá trình ngay và phân tích nguyên nhân, bắt buộc kiểm tra 100%** |
| Đặc tính cốt lõi (KC) | Cpk ≥ 1.33 | Đặc tính cốt lõi do khách hàng chỉ định | Thông báo khách hàng, lập kế hoạch cải tiến |
| Quá trình mới | Cpk ≥ 1.67 (ban đầu) | Khi đưa vào thiết bị/quá trình mới | Có thể chuyển sang 1.33 sau khi xác nhận ổn định |

### Quy trình quản lý năng lực quá trình

```
Tính toán Cpk định kỳ (hàng tháng trở lên)
    ↓
Đánh giá so với tiêu chuẩn
    ├── Cpk ≥ Tiêu chuẩn → Duy trì quản lý hiện tại, giám sát xu hướng
    └── Cpk < Tiêu chuẩn → Thực hiện quy trình dưới đây
            ↓
        Phân tích nguyên nhân (biểu đồ kiểm soát SPC, biểu đồ xương cá)
            ↓
        Thực hiện hoạt động cải tiến
            ↓
        Tính lại Cpk sau cải tiến
            ↓
        Xác nhận hiệu quả và tiêu chuẩn hóa
```

## 10.3 Yêu cầu phân tích dữ liệu hàng không vũ trụ

Theo AS9100D 9.1.3, phân tích và đánh giá các nội dung sau:

| Hạng mục phân tích | Yêu cầu AS9100D | Phương pháp phân tích | Báo cáo |
|------------------|----------------|--------------------|---------| 
| Sự phù hợp sản phẩm | 9.1.3 a) | Tỷ lệ đạt, DPPM, Cpk | Hàng tháng/xem xét lãnh đạo |
| Sự hài lòng khách hàng | 9.1.3 b) | Khảo sát hài lòng, xu hướng khiếu nại/hoàn hàng | 6 tháng/xem xét lãnh đạo |
| Hiệu suất/hiệu quả QMS | 9.1.3 c) | Tỷ lệ đạt mục tiêu chất lượng, xu hướng KPI | Hàng quý/xem xét lãnh đạo |
| Hiệu quả thực hiện kế hoạch | 9.1.3 d) | Kết quả thực tế so với kế hoạch, hiệu quả ứng phó rủi ro | Hàng quý/xem xét lãnh đạo |
| Hiệu quả ứng phó rủi ro | 9.1.3 e) | Kết quả giảm thiểu rủi ro, mức độ tận dụng cơ hội | 6 tháng/xem xét lãnh đạo |
| Hiệu suất nhà cung cấp bên ngoài | 9.1.3 f) | Điểm đánh giá nhà cung cấp, chất lượng/tiến độ | Hàng quý/xem xét lãnh đạo |
| Sự cần thiết cải tiến QMS | 9.1.3 g) | Phân tích tổng hợp, xu hướng, benchmarking | Xem xét lãnh đạo |

---

# 11. Quản lý hồ sơ

## 11.1 Hồ sơ cần quản lý

| Hồ sơ | Số biểu mẫu | Thời hạn lưu | Bộ phận lưu giữ |
|-------|------------|-------------|----------------|
| Báo cáo chất lượng hàng tháng | QF-901-01 | 5 năm | BP Chất lượng |
| Bảng trạng thái KPI | QF-901-02 | 5 năm | BP Chất lượng |
| Biểu đồ kiểm soát SPC | QF-901-03 | 5 năm | BP Chất lượng |
| Báo cáo phân tích năng lực quá trình (Cpk) | QF-901-04 | 5 năm | BP Chất lượng |
| Báo cáo phân tích Pareto | QF-901-05 | 3 năm | BP Chất lượng |
| Báo cáo phân tích xu hướng | QF-901-06 | 3 năm | BP Chất lượng |
| Báo cáo phân tích dữ liệu tổng hợp | QF-901-07 | 5 năm | BP Chất lượng |

## 11.2 Nguyên tắc lưu giữ

- Hồ sơ SPC/Cpk liên quan đến sản phẩm hàng không vũ trụ áp dụng thời hạn lưu giữ lâu hơn giữa yêu cầu khách hàng và yêu cầu quy định.
- Hồ sơ điện tử và hồ sơ giấy đều áp dụng cùng thời hạn lưu giữ.
- Các báo cáo phân tích được sử dụng làm đầu vào xem xét lãnh đạo được quản lý cùng với hồ sơ xem xét lãnh đạo.

---

# 12. Tài liệu và biểu mẫu liên quan

## 12.1 Tài liệu liên quan

| Mã tài liệu | Tên tài liệu |
|------------|-------------|
| QM-001 | Sổ tay chất lượng |
| Quy trình SPC hiện có (Folder 30) | Tài liệu biểu đồ kiểm soát SPC, phân tích năng lực quá trình hiện có |
| QP-602 | Lập kế hoạch thiết lập/đạt được mục tiêu chất lượng |
| QP-702 | Quản lý thiết bị đo lường/dụng cụ đo |
| QP-810 | Quản lý sản xuất và cung cấp dịch vụ |
| QP-817 | Quản lý kiểm tra cuối cùng và xuất hàng |
| QP-903 | Quản lý đánh giá nội bộ |
| QP-904 | Xem xét của lãnh đạo |
| QP-1001 | Quản lý không phù hợp/hành động khắc phục |

## 12.2 Biểu mẫu liên quan

| Số biểu mẫu | Tên biểu mẫu |
|------------|-------------|
| QF-901-01 | Báo cáo chất lượng hàng tháng |
| QF-901-02 | Bảng trạng thái KPI |
| QF-901-03 | Biểu đồ kiểm soát SPC (X̄-R, p, np, c) |
| QF-901-04 | Báo cáo phân tích năng lực quá trình (Cp/Cpk) |
| QF-901-05 | Báo cáo phân tích Pareto |
| QF-901-06 | Báo cáo phân tích xu hướng |
| QF-901-07 | Báo cáo phân tích dữ liệu tổng hợp |

---

**Kết thúc tài liệu — QP-901 Rev. 0**
