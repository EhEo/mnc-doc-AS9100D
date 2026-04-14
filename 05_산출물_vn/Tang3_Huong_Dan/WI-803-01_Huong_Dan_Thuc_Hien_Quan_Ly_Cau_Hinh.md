# Hướng Dẫn Thực Hiện Quản Lý Cấu Hình
## Configuration Management Work Instruction

| Mục | Nội dung |
|-----|----------|
| Số tài liệu | WI-803-01 |
| Số hiệu chỉnh | Rev. 0 |
| Ngày ban hành | Tháng 5 năm 2026, ngày ___ |
| Tiêu chuẩn áp dụng | AS9100D Rev D, Điều khoản 8.1.3 |
| Cấp độ bảo mật | Bảo mật nội bộ (Confidential) |
| Tài liệu cấp trên | QP-803 Quy trình Quản lý Cấu hình |

| Phân loại | Chức vụ | Họ tên | Chữ ký | Ngày |
|-----------|---------|--------|--------|------|
| Soạn thảo | Chuyên viên Phòng Kỹ thuật | | | |
| Xem xét | Trưởng Phòng Chất lượng | | | |
| Phê duyệt | Đại diện Chất lượng (QMR) | | | |

---

## Lịch sử hiệu chỉnh

| Số hiệu chỉnh | Ngày hiệu chỉnh | Nội dung hiệu chỉnh | Người soạn |
|---------------|-----------------|---------------------|------------|
| Rev. 0 | 2026.05.__ | Ban hành lần đầu | |

---

## Mục lục

1. [Mục đích](#1-mục-đích)
2. [Phạm vi áp dụng](#2-phạm-vi-áp-dụng)
3. [Tài liệu tham chiếu](#3-tài-liệu-tham-chiếu)
4. [Định nghĩa thuật ngữ](#4-định-nghĩa-thuật-ngữ)
5. [Phương pháp xác định CI (Hạng mục cấu hình)](#5-phương-pháp-xác-định-ci-hạng-mục-cấu-hình)
6. [Các bước thiết lập Baseline (Đường cơ sở cấu hình)](#6-các-bước-thiết-lập-baseline-đường-cơ-sở-cấu-hình)
7. [Phương pháp lập ECR/ECN](#7-phương-pháp-lập-ecrecn)
8. [Chuẩn bị và vận hành họp CCB](#8-chuẩn-bị-và-vận-hành-họp-ccb)
9. [Quy trình thực hiện kiểm toán cấu hình (FCA/PCA)](#9-quy-trình-thực-hiện-kiểm-toán-cấu-hình-fcapca)
10. [Phương pháp quản lý dữ liệu cấu hình trên ERP](#10-phương-pháp-quản-lý-dữ-liệu-cấu-hình-trên-erp)
11. [Lưu ý quan trọng](#11-lưu-ý-quan-trọng)

---

## 1. Mục đích

Hướng dẫn này quy định phương pháp làm việc cụ thể để thực hiện quản lý cấu hình (Configuration Management) một cách hệ thống đối với các sản phẩm hàng không vũ trụ của M&C. Mục đích là thực hiện nhất quán việc nhận diện, kiểm soát, ghi chép và kiểm toán cấu hình trong toàn bộ vòng đời sản phẩm từ thiết kế, sản xuất đến bảo trì.

## 2. Phạm vi áp dụng

- Tất cả các sản phẩm và linh kiện hàng không vũ trụ mà công ty thiết kế/sản xuất
- Sản phẩm sản xuất theo đơn hàng dựa trên bản vẽ khách hàng
- Đồ gá, khuôn dập, khuôn đúc, thiết bị thử nghiệm được chỉ định là đối tượng quản lý cấu hình
- Tài liệu kỹ thuật liên quan đến sản phẩm (bản vẽ, BOM, tài liệu kỹ thuật, tài liệu quy trình)

## 3. Tài liệu tham chiếu

| Số tài liệu | Tên tài liệu |
|-------------|--------------|
| AS9100D | Quality Management Systems — Aerospace, Điều khoản 8.1.3 |
| QP-803 | Quy trình Quản lý Cấu hình |
| QP-831 | Quy trình Quản lý Thiết kế/Phát triển |
| QP-804 | Quy trình Quản lý Tài liệu và Hồ sơ |
| QF-803-01 | Biểu mẫu ECR (Yêu cầu thay đổi thiết kế) |
| QF-803-02 | Biểu mẫu ECN (Thông báo thay đổi thiết kế) |
| QF-803-03 | Biểu mẫu biên bản họp CCB |

## 4. Định nghĩa thuật ngữ

| Thuật ngữ | Định nghĩa |
|-----------|------------|
| **CI (Configuration Item)** | Hạng mục đơn vị như phần cứng, phần mềm, tài liệu, v.v. được chỉ định là đối tượng quản lý cấu hình |
| **CCB (Configuration Control Board)** | Hội đồng quyết định thẩm xét/phê duyệt các thay đổi cấu hình |
| **Baseline (Đường cơ sở)** | Trạng thái của hạng mục cấu hình được phê duyệt chính thức tại một thời điểm cụ thể. Mọi thay đổi sau đó chỉ được thực hiện qua quy trình chính thức |
| **ECR (Engineering Change Request)** | Yêu cầu thay đổi thiết kế — mô tả sự cần thiết và tác động của thay đổi |
| **ECN (Engineering Change Notice)** | Thông báo thay đổi thiết kế — thông báo nội dung cụ thể và thời điểm áp dụng thay đổi đã được phê duyệt |
| **FCA (Functional Configuration Audit)** | Kiểm toán cấu hình chức năng — xác minh sản phẩm đáp ứng các yêu cầu chức năng của tài liệu kỹ thuật |
| **PCA (Physical Configuration Audit)** | Kiểm toán cấu hình vật lý — xác minh sản phẩm khớp về mặt vật lý với bản vẽ/BOM |
| **Effectivity (Hiệu lực)** | Số serial, số lô hoặc thời điểm áp dụng thay đổi |

## 5. Phương pháp xác định CI (Hạng mục cấu hình)

### 5.1 Tiêu chí lựa chọn hạng mục cấu hình

Các hạng mục đáp ứng một hoặc nhiều tiêu chí sau đây được chỉ định là CI:

| Tiêu chí | Mô tả | Ví dụ |
|----------|-------|-------|
| Liên quan đến an toàn | Hạng mục ảnh hưởng đến an toàn sản phẩm | Thiết bị an toàn, chi tiết kết cấu |
| Chức năng cốt lõi | Hạng mục thiết yếu thực hiện chức năng cốt lõi | Cụm lắp ráp chính, linh kiện then chốt |
| Giao diện | Điểm tiếp xúc với hệ thống/bộ phận khác | Đầu nối, giá đỡ lắp ráp |
| Khách hàng chỉ định | Hạng mục khách hàng yêu cầu quản lý cấu hình | Linh kiện theo chỉ định bản vẽ khách hàng |
| Liên quan quy định | Hạng mục liên quan đến chứng nhận/tuân thủ quy định | Linh kiện thuộc diện chứng nhận |

### 5.2 Quy tắc đặt mã nhận diện

Hệ thống mã nhận diện hạng mục cấu hình (CI Identifier):

```
CI-[Nhóm sản phẩm]-[Số thứ tự]-[Phiên bản]
Ví dụ: CI-MNC-0001-A
```

| Thành phần | Quy tắc |
|------------|---------|
| CI | Tiền tố hạng mục cấu hình (cố định) |
| Nhóm sản phẩm | Mã nhóm sản phẩm (MNC, AER, v.v.) — 3 ký tự tiếng Anh |
| Số thứ tự | Số thứ tự 4 chữ số (0001~9999) |
| Phiên bản | Chữ cái viết hoa theo thứ tự (A, B, C, ...) |

### 5.3 Thiết lập đường cơ sở bản vẽ/BOM/tài liệu kỹ thuật

1. Lập danh sách các tài liệu liên quan cho từng hạng mục được chỉ định là CI:
   - Bản vẽ (Số bản vẽ + Phiên bản)
   - BOM (Bill of Materials + Phiên bản)
   - Tài liệu kỹ thuật vật liệu (Material Specification)
   - Tài liệu kỹ thuật quy trình (Process Specification)
2. Ghi lại số phiên bản hiệu lực hiện tại của từng tài liệu vào **Sổ đăng ký hạng mục cấu hình (CI Register)**.
3. Sổ đăng ký do Phòng Kỹ thuật quản lý và được cập nhật sau khi có phê duyệt của CCB khi có thay đổi.

## 6. Các bước thiết lập Baseline (Đường cơ sở cấu hình)

### 6.1 Các loại đường cơ sở

| Loại | Thời điểm | Nội dung | Người phê duyệt |
|------|-----------|----------|-----------------|
| **Đường cơ sở chức năng (Functional Baseline)** | Khi xác nhận khái niệm thiết kế | Yêu cầu chức năng, thông số kỹ thuật | Khách hàng/Ban giám đốc |
| **Đường cơ sở phân bổ (Allocated Baseline)** | Khi hoàn thành thiết kế chi tiết | Bản vẽ chi tiết, danh sách linh kiện, tài liệu thử nghiệm | CCB |
| **Đường cơ sở sản phẩm (Product Baseline)** | Sau khi hoàn thành xác nhận FAI | Bản vẽ sản xuất đại trà, BOM, tài liệu quy trình, FAI hoàn thành | CCB + Khách hàng |

### 6.2 Quy trình thiết lập đường cơ sở

1. **Xác nhận tài liệu đưa vào đường cơ sở**: Lập danh sách tài liệu sẽ được đưa vào đường cơ sở dựa trên sổ đăng ký CI.
2. **Kiểm tra trạng thái tài liệu**: Xác nhận tất cả tài liệu liên quan đều là bản phê duyệt mới nhất.
3. **Lập hồ sơ đường cơ sở**: Tổng hợp danh sách tài liệu + số phiên bản từng tài liệu + ngày phê duyệt vào phiếu ghi nhận đường cơ sở.
4. **Phê duyệt CCB**: Thẩm xét và phê duyệt đường cơ sở trong họp CCB.
5. **Thông báo đường cơ sở**: Thông báo đường cơ sở đã được phê duyệt đến các bộ phận liên quan.
6. **Đăng ký DMS**: Đăng ký hồ sơ đường cơ sở vào DMS và chuyển các tài liệu liên quan sang trạng thái "Đã xác nhận đường cơ sở".

> **Lưu ý**: Mọi thay đổi sau khi thiết lập đường cơ sở phải tuân thủ quy trình ECR → phê duyệt CCB → ECN.

## 7. Phương pháp lập ECR/ECN

### 7.1 Lập ECR (Engineering Change Request)

Bất kỳ ai cũng có thể phát hành ECR khi nhận thấy cần thiết phải thay đổi.

**Hướng dẫn điền biểu mẫu ECR (QF-803-01):**

| Trường | Cách điền |
|--------|-----------|
| Số ECR | ECR-[năm]-[số thứ tự] (Ví dụ: ECR-2026-012) |
| Ngày yêu cầu | Ngày lập ECR |
| Người yêu cầu | Họ tên, bộ phận, liên hệ |
| CI đối tượng | Mã nhận diện và tên hạng mục cấu hình cần thay đổi |
| Lý do thay đổi | Mô tả cụ thể lý do cần thay đổi |
| Trạng thái hiện tại | Cấu hình hiện tại trước thay đổi (số bản vẽ/Rev, v.v.) |
| Thay đổi yêu cầu | Mô tả cụ thể nội dung muốn thay đổi |
| Mức độ khẩn cấp | Khẩn cấp (Emergency) / Bình thường (Normal) |

### 7.2 Danh sách kiểm tra phân tích tác động

ECR phải kèm theo phân tích tác động dưới đây:

| Hạng mục | Nội dung kiểm tra | Có/Không ảnh hưởng |
|----------|------------------|---------------------|
| Hình dạng/Kích thước | Có thay đổi kích thước hoặc dung sai bản vẽ không | C / K |
| Vật liệu | Có thay đổi tiêu chuẩn hoặc cấp độ vật liệu thô không | C / K |
| Quy trình | Có thêm/xóa/thay đổi quy trình sản xuất không | C / K |
| Khả năng tương thích | Có ảnh hưởng đến khả năng tương thích với sản phẩm hiện có không | C / K |
| Giao diện | Có ảnh hưởng đến mặt ghép nối với linh kiện/hệ thống khác không | C / K |
| Thử nghiệm/Kiểm tra | Có thay đổi tiêu chuẩn thử nghiệm hoặc tiêu chí kiểm tra không | C / K |
| Chi phí | Có biến động chi phí sản xuất, chi phí vật liệu không | C / K |
| Tiến độ | Có ảnh hưởng đến tiến độ sản xuất không | C / K |
| FAI | Có cần thực hiện lại FAI không | C / K |
| Phê duyệt khách hàng | Có cần phê duyệt trước của khách hàng không | C / K |
| Chứng nhận | Có ảnh hưởng đến chứng nhận/sự phù hợp không | C / K |
| Tồn kho | Phương án xử lý hàng tồn kho/bán thành phẩm hiện có | C / K |

### 7.3 Lập ECN (Engineering Change Notice)

Khi ECR được CCB phê duyệt, Phòng Kỹ thuật phát hành ECN.

**Hướng dẫn điền biểu mẫu ECN (QF-803-02):**

| Trường | Cách điền |
|--------|-----------|
| Số ECN | ECN-[năm]-[số thứ tự] (Ví dụ: ECN-2026-012) |
| ECR liên quan | Tham chiếu số ECR gốc |
| Ngày phát hành | Ngày phát hành ECN |
| Thời điểm áp dụng (Effectivity) | Ghi rõ serial/lô/ngày bắt đầu áp dụng |
| Trước thay đổi (Was) | Ghi rõ cấu hình trước thay đổi theo bản vẽ/BOM |
| Sau thay đổi (Is) | Ghi rõ cấu hình sau thay đổi theo bản vẽ/BOM |
| Danh sách tài liệu bị ảnh hưởng | Danh sách bản vẽ, BOM, tài liệu kỹ thuật, tài liệu quy trình cần hiệu chỉnh |
| Xử lý tồn kho | Phương án xử lý hàng tồn kho/bán thành phẩm hiện có (hủy/tái chế/sử dụng nguyên trạng) |
| Yêu cầu FAI | Có cần thực hiện lại FAI không (Toàn bộ/Một phần/Không cần) |
| Bộ phận phân phối | Danh sách bộ phận cần thông báo ECN |

### 7.4 Các hành động tiếp theo sau ECN

1. Hiệu chỉnh bản vẽ/BOM liên quan và ghi lại lịch sử hiệu chỉnh.
2. Cập nhật hồ sơ đường cơ sở.
3. Cập nhật số phiên bản trong sổ đăng ký CI.
4. Thay đổi BOM/định tuyến trên ERP.
5. Thực hiện lại FAI nếu cần thiết (tham chiếu WI-802-01).
6. Thông báo nội dung thay đổi đến các bộ phận liên quan và nhà thầu phụ.

## 8. Chuẩn bị và vận hành họp CCB

### 8.1 Cơ cấu CCB

| Vai trò | Chức vụ | Trách nhiệm |
|---------|---------|-------------|
| Chủ tịch | Trưởng Phòng Kỹ thuật | Chủ trì họp, quyết định cuối cùng |
| Đại diện chất lượng | Trưởng Phòng Chất lượng | Đánh giá tác động chất lượng, phán quyết FAI |
| Đại diện sản xuất | Trưởng Phòng Sản xuất | Đánh giá tác động quy trình/tiến độ |
| Đại diện mua hàng | Chuyên viên Mua hàng | Đánh giá tác động vật liệu/gia công ngoài |
| Thư ký | Chuyên viên Phòng Kỹ thuật | Soạn biên bản họp |

### 8.2 Chuẩn bị họp

1. Sau khi nhận ECR, triệu tập họp CCB **trong vòng 5 ngày làm việc** (ECR khẩn cấp: trong vòng 24 giờ).
2. Phân phát tài liệu họp trước:
   - ECR gốc + danh sách kiểm tra phân tích tác động
   - Bản vẽ/BOM liên quan (trước thay đổi)
   - Tài liệu phân tích tác động chi phí/tiến độ
3. Phân phát tài liệu cho người tham dự **trước ít nhất 2 ngày làm việc**.

### 8.3 Vận hành họp

1. Chủ tịch trình bày nội dung ECR.
2. Đại diện từng bộ phận trình bày kết quả phân tích tác động.
3. Thảo luận về tính phù hợp của thay đổi, các giải pháp thay thế và rủi ro.
4. Ghi lại quyết định:
   - **Phê duyệt**: Chỉ thị phát hành ECN (chỉ định người phụ trách, thời hạn)
   - **Từ chối**: Ghi lý do từ chối, thông báo cho người yêu cầu
   - **Tạm hoãn**: Chỉ định các vấn đề cần xem xét thêm, lập lịch tái thẩm xét
5. Lập biên bản họp (QF-803-03) và lấy chữ ký của người tham dự.

### 8.4 Xử lý thay đổi khẩn cấp

Đối với thay đổi khẩn cấp liên quan đến an toàn hoặc dừng sản xuất:

1. Có thể thực hiện thay đổi ngay lập tức với **phê duyệt bằng lời** của Chủ tịch và Đại diện chất lượng.
2. Sau khi thực hiện thay đổi, triệu tập CCB chính thức **trong vòng 48 giờ** để phê duyệt sau.
3. Ghi chú "EMERGENCY" trên ECN khẩn cấp.

## 9. Quy trình thực hiện kiểm toán cấu hình (FCA/PCA)

### 9.1 FCA (Functional Configuration Audit)

**Mục đích**: Xác minh sản phẩm đáp ứng tất cả các yêu cầu của tài liệu kỹ thuật chức năng

**Quy trình thực hiện:**

1. Trích xuất danh sách yêu cầu chức năng từ đường cơ sở.
2. Thu thập kết quả thử nghiệm/xác nhận tương ứng với từng yêu cầu.
3. Lập ma trận xác nhận:

| Số yêu cầu | Nội dung yêu cầu | Phương pháp xác nhận | Tài liệu kết quả xác nhận | Phù hợp/Không phù hợp |
|------------|-----------------|---------------------|--------------------------|----------------------|
| REQ-001 | (Nội dung yêu cầu chức năng) | Thử nghiệm/Phân tích/Kiểm tra | (Số báo cáo thử nghiệm) | Phù hợp/Không phù hợp |

4. Đánh giá đạt FCA khi tất cả các yêu cầu đều "Phù hợp".
5. Nếu có hạng mục không phù hợp, thực hiện hành động khắc phục và tái xác nhận.

### 9.2 PCA (Physical Configuration Audit)

**Mục đích**: Xác minh sản phẩm thực tế khớp về mặt vật lý với bản vẽ/BOM đã được phê duyệt

**Quy trình thực hiện:**

1. Chuẩn bị bản mới nhất của bản vẽ/BOM theo đường cơ sở sản phẩm.
2. Đối chiếu sản phẩm thực tế với bản vẽ:
   - Cấu thành linh kiện có khớp với BOM không?
   - Kích thước có khớp với bản vẽ không? (Sử dụng kết quả FAI)
   - Vật liệu có khớp với tài liệu kỹ thuật không? (Kiểm tra giấy chứng nhận vật liệu)
   - Ký hiệu/nhãn có khớp với yêu cầu bản vẽ không?
3. Ghi lại kết quả đối chiếu vào danh sách kiểm tra PCA.
4. Đánh giá đạt PCA khi tất cả các hạng mục đều khớp.
5. Phát hành NCR đối với các hạng mục không khớp và thực hiện hành động khắc phục.

### 9.3 Thời điểm thực hiện kiểm toán cấu hình

| Thời điểm | Loại kiểm toán | Ghi chú |
|-----------|---------------|---------|
| Khi hoàn thành sản xuất FAI | FCA + PCA | Bắt buộc trước khi thiết lập đường cơ sở sản phẩm |
| Sau khi thay đổi thiết kế quan trọng | FCA hoặc PCA | Quyết định theo phạm vi thay đổi |
| Theo yêu cầu khách hàng | FCA và/hoặc PCA | Thực hiện theo yêu cầu khách hàng |
| Kiểm toán định kỳ | PCA | Khuyến nghị ít nhất 1 lần/năm |

## 10. Phương pháp quản lý dữ liệu cấu hình trên ERP

### 10.1 Quản lý BOM

1. Khi ECN được phát hành, thay đổi BOM trên ERP phù hợp với Effectivity tương ứng.
2. Khi thay đổi BOM, kiểm tra các hạng mục sau:
   - Tính chính xác của số hiệu linh kiện (Part Number)
   - Tính chính xác của số lượng (Quantity)
   - Sự nhất quán của số phiên bản (Revision)
   - Cài đặt ngày hiệu lực (Effectivity Date)
3. In BOM trước và sau thay đổi để đính kèm vào ECN.

### 10.2 Quản lý bản vẽ

1. Đăng ký bản vẽ đã được hiệu chỉnh vào DMS.
2. Chuyển bản vẽ phiên bản cũ sang trạng thái "Cũ (Obsolete)" (không được xóa).
3. Cập nhật số phiên bản hiệu chỉnh mới nhất vào sổ phân phát bản vẽ.

### 10.3 Duy trì khả năng truy xuất

- Ghi lũy kế toàn bộ lịch sử thay đổi cấu hình vào sổ đăng ký CI.
- Duy trì chuỗi liên kết: ECR → quyết định CCB → ECN → hiệu chỉnh bản vẽ/BOM.
- Sử dụng lịch sử thay đổi (Change Log) trên ERP để truy xuất.

## 11. Lưu ý quan trọng

1. **Cấm thay đổi khi không có đường cơ sở**: Sau khi thiết lập đường cơ sở, không được thực hiện bất kỳ thay đổi cấu hình nào mà không qua quy trình ECR/CCB/ECN. Các thay đổi không chính thức ("sửa bằng bút đỏ", v.v.) tuyệt đối không được phép.
2. **Bắt buộc phê duyệt khách hàng**: Thay đổi cấu hình sản phẩm dựa trên bản vẽ khách hàng phải có phê duyệt trước của khách hàng.
3. **Ghi rõ Effectivity**: Không được mô tả thời điểm áp dụng trong ECN một cách mơ hồ. Không dùng "ngay lập tức" mà phải ghi rõ số serial/lô/ngày cụ thể.
4. **Quản lý bản vẽ cũ**: Quản lý thu hồi triệt để để không còn bản vẽ cũ tại nơi làm việc.
5. **Lưu giữ hồ sơ**: Tất cả ECR, ECN, biên bản họp CCB phải được lưu giữ trong suốt vòng đời sản phẩm.
6. **Tham chiếu chéo**: Phải kiểm tra tác động của thay đổi cấu hình đến các quy trình khác như FAI, quy trình đặc biệt, quản lý gia công ngoài.

---

| Số biểu mẫu | Tên biểu mẫu | Ghi chú |
|-------------|--------------|---------|
| QF-803-01 | ECR (Engineering Change Request) | |
| QF-803-02 | ECN (Engineering Change Notice) | |
| QF-803-03 | Biên bản họp CCB | |
| QF-803-04 | Sổ đăng ký hạng mục cấu hình (CI Register) | |
| QF-803-05 | Phiếu ghi nhận đường cơ sở | |
| QF-803-06 | Danh sách kiểm tra kiểm toán cấu hình (FCA/PCA) | |

---

**Kết thúc tài liệu (End of Document)**
