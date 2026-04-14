# Quy trình Quản lý Cấu hình (Bao gồm CCB)
## Configuration Management Procedure (Including CCB)

| Mục | Nội dung |
|-----|---------|
| Số tài liệu | QP-803 |
| Số hiệu chỉnh | Rev. 0 |
| Ngày ban hành | Tháng 4 năm 2026, ngày ___ |
| Tiêu chuẩn áp dụng | AS9100D Rev D, 8.1.3 |
| Cấp độ bảo mật | Tài liệu mật (Confidential) |
| Tài liệu cấp trên | QM-001 Sổ tay chất lượng §8.1.3 |

| Phân loại | Chức vụ | Họ tên | Chữ ký | Ngày |
|-----------|---------|--------|--------|------|
| Soạn thảo | Nhân viên bộ phận Kỹ thuật (Phát triển) | | | |
| Kiểm tra | Trưởng bộ phận Chất lượng | | | |
| Phê duyệt | Đại diện lãnh đạo về chất lượng (QMR) | | | |

---

## Lịch sử chỉnh sửa

| Rev. | Ngày | Nội dung chỉnh sửa | Người soạn | Người phê duyệt |
|------|------|-------------------|------------|-----------------|
| 0 | 2026-04-__ | Ban hành lần đầu (Soạn thảo hoàn toàn mới dựa trên AS9100D Rev D) | | |

---

## Mục lục

1. [Mục đích](#1-mục-đích)
2. [Phạm vi áp dụng](#2-phạm-vi-áp-dụng)
3. [Tài liệu/tiêu chuẩn tham chiếu](#3-tài-liệutieu-chuẩn-tham-chiếu)
4. [Thuật ngữ và định nghĩa](#4-thuật-ngữ-và-định-nghĩa)
5. [Trách nhiệm và quyền hạn](#5-trách-nhiệm-và-quyền-hạn)
6. [Quy trình quản lý cấu hình](#6-quy-trình-quản-lý-cấu-hình)
7. [Nhận dạng cấu hình](#7-nhận-dạng-cấu-hình-configuration-identification)
8. [Kiểm soát cấu hình (Kiểm soát thay đổi)](#8-kiểm-soát-cấu-hình-kiểm-soát-thay-đổi-configuration-control)
9. [Ghi chép trạng thái cấu hình](#9-ghi-chép-trạng-thái-cấu-hình-configuration-status-accounting)
10. [Kiểm toán cấu hình](#10-kiểm-toán-cấu-hình-configuration-audit)
11. [Yêu cầu đặc thù hàng không vũ trụ](#11-yêu-cầu-đặc-thù-hàng-không-vũ-trụ)
12. [Quản lý hồ sơ](#12-quản-lý-hồ-sơ)
13. [Tài liệu và biểu mẫu liên quan](#13-tài-liệu-và-biểu-mẫu-liên-quan)

---

# 1. Mục đích

Quy trình này quy định các thủ tục để xây dựng và vận hành hệ thống quản lý cấu hình (Configuration Management) đối với sản phẩm hàng không vũ trụ của Công ty TNHH M&C ELECTRONICS VIỆT NAM (sau đây gọi là M&C Electronics VINA).

Mục đích của quy trình này:
- Xây dựng quy trình quản lý cấu hình theo yêu cầu AS9100D 8.1.3
- Thực hiện nhận dạng, kiểm soát thay đổi, ghi chép trạng thái và kiểm toán có hệ thống các Hạng mục cấu hình (CI)
- Thiết lập hệ thống xem xét và phê duyệt thay đổi thông qua Hội đồng kiểm soát cấu hình (CCB)
- Đảm bảo tính toàn vẹn sản phẩm thông qua xây dựng và quản lý lịch sử Đường cơ sở thiết kế (Baseline)
- **Phản ánh hành động khắc phục CAR-003** (Chưa xây dựng hệ thống quản lý cấu hình: thiếu đường cơ sở thiết kế, mã nhận dạng cấu hình, thủ tục kiểm soát thay đổi)
- **Phản ánh hành động khắc phục CAR-004** (Không có liên kết giữa hệ thống ERP và quản lý cấu hình: không nhất quán giữa lịch sử chỉnh sửa bản vẽ và phiên bản BOM sản xuất)

> **Lưu ý**: Thủ tục chi tiết quản lý thay đổi thiết kế/phát triển (AS9100D 8.3.6) được đề cập tại QP-807. Quy trình này quy định toàn bộ **hệ thống quản lý cấu hình (8.1.3)** và xác định các yêu cầu về quản lý cấu hình khi thay đổi thiết kế.

---

# 2. Phạm vi áp dụng

Quy trình này áp dụng trong toàn bộ vòng đời của sản phẩm hàng không vũ trụ và các dịch vụ liên quan của M&C Electronics VINA.

| Phân loại | Đối tượng áp dụng |
|-----------|------------------|
| Thiết kế/phát triển | Nhận dạng và kiểm soát thay đổi của bản vẽ thiết kế, đặc tính kỹ thuật, phần mềm, mô hình 3D |
| Sản xuất/chế tạo | Quản lý cấu hình BOM sản xuất, sơ đồ quy trình, tiêu chuẩn công việc, khuôn mẫu/đồ gá |
| Mua hàng/vật liệu | Đặc tính kỹ thuật mua hàng, Danh sách linh kiện được phê duyệt (APL), quy cách nhà cung cấp ngoài |
| Kiểm tra/chất lượng | Tiêu chuẩn kiểm tra, thủ tục thử nghiệm, tiêu chuẩn hiệu chuẩn thiết bị đo lường |
| Tài liệu/hồ sơ | Toàn bộ thông tin dạng văn bản là đối tượng quản lý cấu hình |
| Sau giao hàng/bàn giao | Hồ sơ cấu hình giao hàng cho khách hàng, quản lý thay đổi tại hiện trường |

**Bộ phận áp dụng**: Phát triển, Sản xuất, Khuôn, Kế hoạch sản xuất (KHSX), Chất lượng, Mua hàng (PUR), Kinh doanh, Nhân sự (HR_GA)

---

# 3. Tài liệu/tiêu chuẩn tham chiếu

| Tài liệu/tiêu chuẩn | Nội dung |
|--------------------|---------|
| AS9100D Rev D | Yêu cầu hệ thống quản lý chất lượng hàng không vũ trụ (điều khoản 8.1.3) |
| ISO 10007:2017 | Hướng dẫn quản lý cấu hình (Configuration Management — Guidance) |
| EIA-649-1 | Yêu cầu quản lý cấu hình (Configuration Management Requirements) |
| MIL-HDBK-61B | Hướng dẫn quản lý cấu hình (Sổ tay quốc phòng Mỹ) |
| QM-001 | Sổ tay chất lượng §8.1.3 Quản lý cấu hình |
| QP-807 | Quy trình quản lý thay đổi thiết kế/phát triển |
| QP-706 | Quy trình quản lý thông tin dạng văn bản |
| QP-802 | Quy trình quản lý rủi ro vận hành (FMEA) |

---

# 4. Thuật ngữ và định nghĩa

| Thuật ngữ | Định nghĩa |
|-----------|-----------|
| Cấu hình (Configuration) | Trạng thái cấu thành của sản phẩm với các đặc tính chức năng và vật lý được mô tả trong tài liệu kỹ thuật |
| Hạng mục cấu hình (Configuration Item, CI) | Phần cứng, phần mềm, tài liệu hoặc tổ hợp của chúng được lựa chọn là đối tượng quản lý cấu hình. Đơn vị được nhận dạng và quản lý độc lập |
| Đường cơ sở cấu hình (Configuration Baseline) | Tiêu chuẩn kỹ thuật của hạng mục cấu hình được phê duyệt chính thức tại một thời điểm cụ thể. Điểm tham chiếu cho tất cả các thay đổi sau đó |
| Đường cơ sở chức năng (Functional Baseline, FBL) | Đường cơ sở thông số kỹ thuật về hiệu suất/chức năng được phê duyệt tại thời điểm xem xét yêu cầu chức năng |
| Đường cơ sở phân bổ (Allocated Baseline, ABL) | Đường cơ sở phân bổ yêu cầu theo CI được phê duyệt tại thời điểm Xem xét thiết kế sơ bộ (PDR) |
| Đường cơ sở sản phẩm (Product Baseline, PBL) | Đường cơ sở cấu hình vật lý và chức năng của sản phẩm được xác định sau Xem xét thiết kế chi tiết (CDR) |
| CCB (Configuration Control Board) | Hội đồng kiểm soát cấu hình — Hội đồng đa chức năng xem xét và phê duyệt yêu cầu thay đổi cấu hình |
| ECR (Engineering Change Request) | Phiếu yêu cầu thay đổi kỹ thuật — Tài liệu yêu cầu mô tả sự cần thiết và căn cứ của việc thay đổi cấu hình |
| ECN (Engineering Change Notice) | Thông báo thay đổi kỹ thuật — Tài liệu chính thức chỉ thị thực hiện thay đổi sau khi được CCB phê duyệt |
| ECP (Engineering Change Proposal) | Đề xuất thay đổi kỹ thuật — Tài liệu đề xuất bao gồm chi tiết kỹ thuật và phân tích ảnh hưởng của thay đổi |
| Kiểm toán cấu hình (Configuration Audit) | Hoạt động xác minh chính thức để kiểm tra xem hạng mục cấu hình có khớp với đường cơ sở được phê duyệt không |
| FCA (Functional Configuration Audit) | Kiểm toán cấu hình chức năng — Xác minh xem hạng mục cấu hình có đáp ứng yêu cầu chức năng/hiệu suất không |
| PCA (Physical Configuration Audit) | Kiểm toán cấu hình vật lý — Xác minh xem sản phẩm thực tế có khớp với tài liệu kỹ thuật (bản vẽ, BOM) không |
| Ghi chép trạng thái cấu hình (CSA, Configuration Status Accounting) | Hoạt động ghi chép và duy trì trạng thái hiện tại, lịch sử thay đổi và thông tin đường cơ sở của hạng mục cấu hình |

---

# 5. Trách nhiệm và quyền hạn

## 5.1 Trách nhiệm theo tổ chức

| Vai trò | Trách nhiệm |
|---------|------------|
| **Đại diện lãnh đạo về chất lượng (QMR)** | Giám sát toàn bộ hệ thống quản lý cấu hình; Phê duyệt cuối cùng quyết định CCB; Báo cáo kết quả kiểm toán cấu hình trong xem xét lãnh đạo |
| **Trưởng bộ phận Kỹ thuật (Phát triển)** | Chủ tịch CCB; Chủ trì nhận dạng hạng mục cấu hình; Xây dựng đường cơ sở; Xem xét kỹ thuật ECR/ECN; Phân tích ảnh hưởng thay đổi thiết kế |
| **Trưởng bộ phận Chất lượng** | Thành viên CCB; Chủ trì kiểm toán cấu hình (FCA/PCA); Quản lý ghi chép trạng thái cấu hình; Kiểm tra chất lượng sau thay đổi |
| **Trưởng bộ phận Sản xuất** | Thành viên CCB; Đánh giá ảnh hưởng sản xuất của thay đổi; Phản ánh thay đổi vào hiện trường sản xuất; Quản lý thay đổi khuôn mẫu/đồ gá |
| **Trưởng bộ phận Mua hàng** | Thành viên CCB; Đánh giá ảnh hưởng chuỗi cung ứng của thay đổi; Thông báo thay đổi cho nhà cung cấp; Quản lý thay đổi đặc tính kỹ thuật mua hàng |
| **Trưởng bộ phận KHSX** | Điều chỉnh tiến độ sản xuất theo thay đổi; Lập kế hoạch xử lý tồn kho/WIP |
| **Trưởng bộ phận Khuôn** | Thực hiện thay đổi khuôn mẫu/đồ gá; Quản lý lịch sử cấu hình khuôn |
| **Trưởng bộ phận Kinh doanh** | Thông báo và nhận phê duyệt của khách hàng khi thay đổi yêu cầu phê duyệt khách hàng; Truyền thông ảnh hưởng ngày giao hàng |
| **Nhân viên quản lý cấu hình (CM Officer)** | Đăng ký/quản lý hạng mục cấu hình; Tiếp nhận/phân phối ECR/ECN; Duy trì Sổ ghi chép trạng thái cấu hình; Chuẩn bị và ghi chép cuộc họp CCB |

## 5.2 Thành phần CCB (Hội đồng kiểm soát cấu hình)

| Phân loại | Chức vụ | Vai trò |
|-----------|---------|--------|
| Chủ tịch | Trưởng bộ phận Kỹ thuật (Trưởng bộ phận Phát triển) | Chủ trì cuộc họp CCB, tổng quản lý xem xét thay đổi |
| Thành viên thường trực | Trưởng bộ phận Chất lượng | Đánh giá ảnh hưởng chất lượng, liên kết kiểm toán cấu hình |
| Thành viên thường trực | Trưởng bộ phận Sản xuất | Đánh giá ảnh hưởng/tính khả thi sản xuất |
| Thành viên thường trực | Trưởng bộ phận Mua hàng | Đánh giá ảnh hưởng chuỗi cung ứng/chi phí |
| Thư ký | Nhân viên quản lý cấu hình | Chuẩn bị, ghi chép, quản lý ECR/ECN |
| Thành viên tạm thời | Nhân viên bộ phận liên quan | Tham gia Khuôn, KHSX, Kinh doanh, v.v. tùy theo nội dung |

**Nguyên tắc vận hành CCB**:
- Họp định kỳ: 1 lần/tháng (Thứ Tư tuần đầu mỗi tháng)
- Họp khẩn: Triệu tập trong 24 giờ khi có thay đổi liên quan đến an toàn/khả năng bay, yêu cầu khẩn từ khách hàng
- Số nhóm ra quyết định: Chủ tịch + ít nhất 2 trong 3 thành viên thường trực
- Phương thức biểu quyết: Đa số thành viên tham dự đồng ý (Vấn đề liên quan đến an toàn cần nhất trí)

---

# 6. Quy trình quản lý cấu hình

## 6.1 Sơ đồ dòng chảy quy trình quản lý cấu hình

```
┌─────────────────────────────────────────────────────────────────┐
│              Sơ đồ dòng chảy quy trình quản lý cấu hình         │
│              Configuration Management Process Flow               │
└─────────────────────────────────────────────────────────────────┘

  ① Nhận dạng cấu hình (Configuration Identification)
     │  · Lựa chọn CI và cấp số
     │  · Phân bổ số CI cho BOM, bản vẽ, đặc tính kỹ thuật
     │  · Xây dựng Đường cơ sở cấu hình (Baseline)
     │
     ▼
  ② Kiểm soát cấu hình/thay đổi (Configuration Control)
     │  · Tiếp nhận ECR → Phân tích ảnh hưởng
     │  · Xem xét/phê duyệt CCB
     │  · Phát hành ECN → Thực hiện thay đổi
     │
     ├──→ [CCB từ chối] → Bổ sung ECR hoặc kết thúc
     │
     ▼
  ③ Ghi chép trạng thái cấu hình (Configuration Status Accounting)
     │  · Ghi chép lịch sử đường cơ sở
     │  · Theo dõi lịch sử thay đổi (Lịch sử ECR/ECN)
     │  · Duy trì trạng thái cấu hình hiện tại
     │
     ▼
  ④ Kiểm toán cấu hình (Configuration Audit)
     │  · FCA: Xác minh đáp ứng yêu cầu chức năng/hiệu suất
     │  · PCA: Xác minh khớp giữa thực tế và tài liệu kỹ thuật
     │  · Khi phát hiện không phù hợp → Hành động khắc phục (QP-1001)
     │
     ▼
  ⑤ Cập nhật đường cơ sở / Lưu trữ hồ sơ
     · Phản ánh kết quả kiểm toán
     · Cập nhật Sổ hồ sơ quản lý cấu hình
     · Phản hồi vào chu kỳ quản lý cấu hình tiếp theo

  [Chung tất cả các bước] Liên kết hệ thống ERP — Kiểm tra tự động tính nhất quán bản vẽ↔BOM
                          (Hành động khắc phục CAR-004)
```

## 6.2 Yếu tố kích hoạt hoạt động quản lý cấu hình

| Yếu tố kích hoạt | Thời điểm | Hoạt động quản lý cấu hình |
|-----------------|----------|--------------------------|
| Sản phẩm/thiết kế mới | Khi bắt đầu thiết kế | Nhận dạng CI, xây dựng Đường cơ sở chức năng (FBL) |
| Xem xét thiết kế sơ bộ (PDR) | Sau khi hoàn thành PDR | Xây dựng Đường cơ sở phân bổ (ABL) |
| Xem xét thiết kế chi tiết (CDR) | Sau khi hoàn thành CDR | Xây dựng Đường cơ sở sản phẩm (PBL) |
| Yêu cầu thay đổi thiết kế | Khi tiếp nhận ECR | Quy trình ECR → CCB → ECN |
| Thay đổi quy trình/4M | Khi xảy ra thay đổi | Kiểm soát thay đổi cấu hình quy trình |
| Thay đổi yêu cầu khách hàng | Khi tiếp nhận thay đổi | Thay đổi yêu cầu → Đánh giá lại đường cơ sở |
| Không phù hợp/hành động khắc phục | Khi xác định nguyên nhân gốc rễ | Phán định có cần thay đổi cấu hình không |
| Kiểm toán cấu hình định kỳ | 1 lần/nửa năm | Thực hiện FCA/PCA |
| FAI (Kiểm tra lần đầu) | Khi thực hiện FAI | Thực hiện liên kết PCA |

---

# 7. Nhận dạng cấu hình (Configuration Identification)

## 7.1 Tiêu chí lựa chọn Hạng mục cấu hình (CI)

Lựa chọn và quản lý các hạng mục đáp ứng tiêu chí sau đây làm Hạng mục cấu hình (CI):

| Tiêu chí | Mô tả |
|---------|-------|
| Hạng mục an toàn quan trọng | Linh kiện, lắp ráp, phần mềm ảnh hưởng đến an toàn/khả năng bay |
| Hạng mục giao diện chính | Hạng mục có giao diện vật lý/chức năng với hệ thống/linh kiện khác |
| Hạng mục khách hàng chỉ định | Hạng mục khách hàng yêu cầu quản lý cấu hình |
| Hạng mục liên quan đến quy định | Hạng mục liên quan trực tiếp đến chứng nhận khả năng bay, yêu cầu quy định |
| Hạng mục rủi ro kỹ thuật | Hạng mục có độ phức tạp kỹ thuật cao hoặc quan trọng đối với hiệu suất |
| Hạng mục tương thích/thay thế được | Hạng mục cần duy trì tính tương thích/thay thế được (Interchangeability) |

## 7.2 Hệ thống số hạng mục cấu hình

Cấp số nhận dạng duy nhất cho hạng mục cấu hình, áp dụng hệ thống sau:

```
CI-[Nhóm sản phẩm]-[Loại]-[Số thứ tự]-[Số hiệu chỉnh]

Ví dụ:
CI-AES-HW-001-A   →  Nhóm sản phẩm AES, Phần cứng, Số 001, Hiệu chỉnh A
CI-AES-SW-012-B   →  Nhóm sản phẩm AES, Phần mềm, Số 012, Hiệu chỉnh B
CI-AES-DC-005-A   →  Nhóm sản phẩm AES, Tài liệu, Số 005, Hiệu chỉnh A
```

| Mã | Loại |
|----|------|
| HW | Phần cứng (Linh kiện, lắp ráp, khuôn mẫu, đồ gá) |
| SW | Phần mềm (Nhúng, chương trình thử nghiệm) |
| DC | Tài liệu (Bản vẽ, đặc tính kỹ thuật, thủ tục thử nghiệm) |
| FW | Firmware |

## 7.3 Quản lý tài liệu cấu hình

| Loại tài liệu | Đối tượng cấp số CI | Hệ thống quản lý |
|--------------|-------------------|-----------------|
| Bản vẽ sản phẩm | Tất cả bản vẽ sản phẩm hàng không vũ trụ | Ánh xạ số bản vẽ + số CI, quản lý lịch sử hiệu chỉnh |
| BOM (Bill of Materials) | BOM theo sản phẩm | Quản lý liên kết phiên bản BOM với hiệu chỉnh bản vẽ (Liên kết ERP) |
| Đặc tính kỹ thuật sản phẩm | Đặc tính kỹ thuật về hiệu suất/vật liệu/thử nghiệm | Cấp số CI, bao gồm đường cơ sở |
| Phần mềm | Phần mềm nhúng, chương trình thử nghiệm | Quản lý phiên bản (Sử dụng công cụ quản lý cấu hình) |
| Tài liệu quy trình | Sơ đồ quy trình, tiêu chuẩn công việc, bảng QC | Quản lý riêng như cấu hình sản xuất |

## 7.4 Xây dựng Đường cơ sở (Baseline)

| Loại đường cơ sở | Thời điểm xây dựng | Nội dung bao gồm | Quyền hạn phê duyệt |
|-----------------|------------------|----------------|---------------------|
| Đường cơ sở chức năng (FBL) | Hoàn thành xem xét yêu cầu | Yêu cầu khách hàng, đặc tính kỹ thuật chức năng | Chủ tịch CCB + QMR |
| Đường cơ sở phân bổ (ABL) | Hoàn thành PDR | Yêu cầu phân bổ theo CI, định nghĩa giao diện | CCB |
| Đường cơ sở sản phẩm (PBL) | Hoàn thành CDR / FAI | Thiết kế chi tiết, bản vẽ sản xuất, BOM, thủ tục thử nghiệm | CCB + Khách hàng (nếu cần) |

Khi xây dựng đường cơ sở, lập gói đường cơ sở cấu hình bao gồm các tài liệu sau:
- Bản vẽ, đặc tính kỹ thuật, BOM của CI liên quan
- Danh sách quy cách/tiêu chuẩn áp dụng
- Tài liệu định nghĩa giao diện
- Kế hoạch thử nghiệm/xác minh
- Hồ sơ phê duyệt đường cơ sở

---

# 8. Kiểm soát cấu hình (Kiểm soát thay đổi, Configuration Control)

## 8.1 Sơ đồ dòng chảy quy trình kiểm soát thay đổi

```
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│  Yêu cầu │    │  Phân    │    │  CCB     │    │  Phát    │    │  Thực    │
│  thay    │───→│  tích    │───→│  Xem xét │───→│  hành    │───→│  hiện    │
│  đổi(ECR)│    │  ảnh     │    │  /Phê    │    │  ECN     │    │  /Xác    │
│          │    │  hưởng   │    │  duyệt   │    │          │    │  minh    │
└──────────┘    └──────────┘    └──────────┘    └──────────┘    └──────────┘
     │                              │                               │
     │                         [Từ chối/Bổ sung]                   │
     │                              │                               ▼
     │                              ▼                         ┌──────────┐
     │                        Bổ sung ECR                     │  Cập nhật│
     │                        hoặc kết thúc                   │  đường   │
     │                                                        │  cơ sở / │
     │                                                        │  Lưu hồ  │
     │                                                        │  sơ      │
     │                                                        └──────────┘
     │
     └──→ [Thay đổi khẩn] ──→ Chủ tịch CCB đơn độc phê duyệt ──→ Phát hành ECN ──→ CCB hậu phê duyệt
```

## 8.2 Thủ tục ECR (Yêu cầu thay đổi kỹ thuật)

### 8.2.1 Phát hành ECR

- **Người được phát hành**: Tất cả nhân viên các bộ phận
- **Nơi tiếp nhận**: Nhân viên quản lý cấu hình (CM Officer)
- **Biểu mẫu**: F-803-01 (Phiếu yêu cầu thay đổi kỹ thuật, ECR)

### 8.2.2 Nội dung bắt buộc ghi trong ECR

| Hạng mục | Nội dung |
|----------|---------|
| Số ECR | Đánh số tự động (Định dạng ECR-YYYY-NNN) |
| CI thay đổi | Số CI, số bản vẽ, số hiệu chỉnh hiện tại |
| Lý do thay đổi | Cải tiến chất lượng, yêu cầu khách hàng, giảm chi phí, khắc phục không phù hợp, v.v. |
| Nội dung thay đổi (chi tiết) | So sánh cấu hình hiện tại → cấu hình sau thay đổi |
| Mức độ khẩn cấp | Thông thường/Khẩn/Rất khẩn |
| Người yêu cầu/Bộ phận | Họ tên, bộ phận, ngày |

### 8.2.3 Phân loại thay đổi

| Phân loại | Định nghĩa | Quyền hạn phê duyệt |
|-----------|-----------|---------------------|
| Class I (Thay đổi trọng yếu) | Thay đổi ảnh hưởng đến hình thức/chức năng/hiệu suất/độ tin cậy/an toàn/tính tương thích hoặc thay đổi cần phê duyệt khách hàng | Xem xét CCB + Phê duyệt QMR + Phê duyệt khách hàng |
| Class II (Thay đổi nhỏ) | Thay đổi nhỏ không ảnh hưởng đến hình thức/chức năng/hiệu suất (Ký hiệu, biên tập, v.v.) | Phê duyệt Chủ tịch CCB |

## 8.3 Phân tích ảnh hưởng

Sau khi tiếp nhận ECR, các bộ phận liên quan thực hiện phân tích ảnh hưởng đối với các hạng mục sau:

| Hạng mục phân tích | Phụ trách | Nội dung |
|-------------------|----------|---------|
| Ảnh hưởng kỹ thuật | Bộ phận Kỹ thuật | Hiệu suất, độ tin cậy, giao diện, tính tương thích, an toàn/khả năng bay |
| Ảnh hưởng sản xuất | Bộ phận Sản xuất | Thay đổi quy trình, thay đổi thiết bị/khuôn mẫu, thời gian thực hiện, tái chế |
| Ảnh hưởng chất lượng | Bộ phận Chất lượng | Thay đổi tiêu chí kiểm tra, có cần thực hiện lại FAI không, rủi ro |
| Ảnh hưởng chi phí | Bộ phận Mua hàng | Chi phí vật liệu, gia công, khuôn mẫu, phế liệu |
| Ảnh hưởng tiến độ | Bộ phận KHSX | Ngày giao hàng, xử lý tồn kho/WIP, tiến độ chuyển đổi |
| Ảnh hưởng khách hàng | Bộ phận Kinh doanh | Có cần thông báo/phê duyệt khách hàng không, ảnh hưởng hợp đồng |

## 8.4 Xem xét và phê duyệt CCB

### 8.4.1 Thủ tục xem xét

1. Nhân viên quản lý cấu hình phân phối trước ECR và kết quả phân tích ảnh hưởng cho thành viên CCB (Trước cuộc họp 3 ngày)
2. Xem xét tính hợp lý kỹ thuật/kinh tế/tiến độ của thay đổi tại cuộc họp CCB
3. Kết quả xem xét: **Phê duyệt / Phê duyệt có điều kiện / Từ chối / Hoãn**
4. Ghi chép kết quả vào F-803-03 (Biên bản họp CCB)

### 8.4.2 Tiêu chí phê duyệt

| Phán định | Điều kiện |
|----------|---------|
| Phê duyệt | Hoàn thành phân tích ảnh hưởng, rủi ro chấp nhận được, kế hoạch thực hiện phù hợp |
| Phê duyệt có điều kiện | Phê duyệt sau khi đặt điều kiện xác minh/thử nghiệm bổ sung |
| Từ chối | Thiếu tính hợp lý kỹ thuật/kinh tế, cần xem xét phương án thay thế |
| Hoãn | Cần thông tin/phân tích bổ sung |

## 8.5 Phát hành ECN (Thông báo thay đổi kỹ thuật)

Sau khi CCB phê duyệt, bộ phận Kỹ thuật phát hành ECN để chính thức chỉ thị thay đổi.

### 8.5.1 Nội dung bắt buộc ghi trong ECN

| Hạng mục | Nội dung |
|----------|---------|
| Số ECN | Định dạng ECN-YYYY-NNN |
| Số ECR liên quan | Theo dõi yêu cầu thay đổi |
| CI/Bản vẽ thay đổi | Danh sách đối tượng thay đổi, số hiệu chỉnh trước/sau |
| Nội dung thay đổi (chi tiết) | So sánh trước/sau thay đổi (bản vẽ, BOM, đặc tính kỹ thuật) |
| Thời điểm áp dụng | Ngay lập tức, sau khi hết tồn kho, từ lô cụ thể |
| Thông tin tính tương thích | Có tương thích/thay thế được với sản phẩm hiện tại không |
| Danh sách phân phối | Danh sách bộ phận liên quan |

### 8.5.2 Thực hiện và xác minh thay đổi

| Bước | Hoạt động | Phụ trách |
|------|----------|----------|
| 1 | Hiệu chỉnh bản vẽ/BOM/đặc tính kỹ thuật, phản ánh vào ERP | Bộ phận KT + IT |
| 2 | Thay đổi tài liệu quy trình (tiêu chuẩn công việc, bảng QC quy trình) | Bộ phận SX |
| 3 | Thay đổi khuôn mẫu/đồ gá (nếu cần) | Bộ phận Khuôn |
| 4 | Thay đổi tiêu chí kiểm tra, xác nhận hiệu chuẩn thiết bị đo lường | Bộ phận CL |
| 5 | Chế tạo sản phẩm đầu tiên sau thay đổi và xác minh | Bộ phận SX + CL |
| 6 | Thực hiện lại FAI (Khi thay đổi Class I) | Bộ phận CL |
| 7 | Xác nhận hoàn thành thay đổi và đóng ECN | Nhân viên QL cấu hình |

> **Hành động khắc phục CAR-004**: Khi phát hành mọi ECN, đồng thời cập nhật số hiệu chỉnh bản vẽ và phiên bản BOM trong hệ thống ERP. Tính nhất quán bản vẽ-BOM phải được xác minh bắt buộc trước khi đóng ECN, không thể đóng ECN khi xảy ra sự không nhất quán.

## 8.6 Thủ tục thay đổi khẩn

Khi thay đổi khẩn liên quan đến an toàn/khả năng bay hoặc gây dừng dây chuyền:

1. Tiếp nhận ECR → Chủ tịch CCB có thể đơn độc phê duyệt khẩn
2. Phát hành ECN và thực hiện thay đổi trong 24 giờ
3. Triệu tập cuộc họp CCB khẩn trong 72 giờ để hậu phê duyệt
4. Khi không được hậu phê duyệt: Rút lại thay đổi và khôi phục

---

# 9. Ghi chép trạng thái cấu hình (Configuration Status Accounting)

## 9.1 Mục đích ghi chép trạng thái cấu hình

Ghi chép và duy trì có hệ thống trạng thái hiện tại và lịch sử thay đổi của hạng mục cấu hình, để có thể nắm bắt chính xác trạng thái cấu hình của hạng mục cấu hình tại bất kỳ thời điểm nào.

## 9.2 Sổ hồ sơ quản lý cấu hình

Nhân viên quản lý cấu hình duy trì F-815-01 (Sổ hồ sơ quản lý cấu hình) và ghi chép các thông tin sau:

| Hạng mục ghi chép | Nội dung |
|-----------------|---------|
| Trạng thái CI | Số CI, tên, loại, số hiệu chỉnh hiện tại, thuộc đường cơ sở nào |
| Lịch sử đường cơ sở | Ngày xây dựng FBL/ABL/PBL, người phê duyệt, danh sách CI bao gồm |
| Lịch sử thay đổi | Số ECR/ECN, cấu hình trước/sau thay đổi, ngày thay đổi, người phê duyệt |
| Cấu hình hiện hành | Số hiệu chỉnh hợp lệ mới nhất và trạng thái áp dụng của từng CI |
| Lịch sử lệch/đặc cách | Lịch sử lệch tạm thời (Deviation), đặc cách (Waiver) |

## 9.3 Quản lý liên kết ERP

> **Nội dung cốt lõi hành động khắc phục CAR-004**

| Yêu cầu | Phương pháp triển khai |
|---------|----------------------|
| Tính nhất quán bản vẽ-BOM | Liên kết trường số hiệu chỉnh bản vẽ và trường phiên bản BOM trong ERP; Phát cảnh báo khi không nhất quán |
| Đồng bộ tự động | Tự động phản ánh nội dung thay đổi vào ERP khi phê duyệt ECN (hoặc phản ánh thủ công trong 24 giờ rồi xác minh) |
| Theo dõi lịch sử | Có thể tra cứu lịch sử thay đổi theo CI trong ERP (Lịch sử tích hợp bản vẽ, BOM, sơ đồ quy trình) |
| Báo cáo tính nhất quán | Tạo báo cáo tính nhất quán bản vẽ-BOM 1 lần/tháng và nhân viên quản lý cấu hình xem xét |

## 9.4 Báo cáo trạng thái cấu hình

| Loại báo cáo | Chu kỳ | Nội dung | Đối tượng báo cáo |
|-------------|--------|---------|-----------------|
| Tóm tắt trạng thái cấu hình | 1 lần/tháng | Trạng thái CI, trạng thái ECR/ECN, thay đổi đường cơ sở | CCB, QMR |
| Tính nhất quán bản vẽ-BOM | 1 lần/tháng | Xác nhận nhất quán phiên bản bản vẽ↔BOM trong ERP | Trưởng bộ phận KT, SX |
| Báo cáo lịch sử thay đổi | 1 lần/quý | Số lần thay đổi theo quý, thống kê theo loại, phân tích thời gian thực hiện | Đầu vào xem xét lãnh đạo |
| Báo cáo theo yêu cầu khách hàng | Theo yêu cầu | Cung cấp lịch sử cấu hình sản phẩm liên quan khi khách hàng yêu cầu | Khách hàng |

---

# 10. Kiểm toán cấu hình (Configuration Audit)

## 10.1 Loại kiểm toán cấu hình

### 10.1.1 FCA (Kiểm toán cấu hình chức năng, Functional Configuration Audit)

| Hạng mục | Nội dung |
|----------|---------|
| Mục đích | Xác minh xem hạng mục cấu hình có đáp ứng yêu cầu chức năng/hiệu suất được phê duyệt không |
| Thời điểm | Khi hoàn thành xác minh/xác nhận thiết kế, liên kết FAI |
| Đối tượng xác minh | Kết quả thử nghiệm vs yêu cầu đặc tính kỹ thuật, hồ sơ thử nghiệm chức năng, kết quả mô phỏng |
| Người thực hiện | Bộ phận Chất lượng (Bộ phận Kỹ thuật hỗ trợ) |

**Nội dung xác nhận FCA**:
- Có kết quả thử nghiệm cho tất cả yêu cầu chức năng/hiệu suất không?
- Kết quả thử nghiệm có đáp ứng yêu cầu đặc tính kỹ thuật không?
- Có phê duyệt lệch (Deviation) cho các hạng mục không đáp ứng không?
- Điều kiện thử nghiệm có phù hợp và có thể tái tạo không?

### 10.1.2 PCA (Kiểm toán cấu hình vật lý, Physical Configuration Audit)

| Hạng mục | Nội dung |
|----------|---------|
| Mục đích | Xác minh xem sản phẩm thực tế có khớp chính xác với tài liệu kỹ thuật được phê duyệt (bản vẽ, BOM, đặc tính kỹ thuật) không |
| Thời điểm | Trước khi chuyển sang sản xuất hàng loạt, liên kết FAI, định kỳ (1 lần/nửa năm) |
| Đối tượng xác minh | Thực tế vs kích thước/vật liệu bản vẽ, thực tế vs cấu thành BOM, nhãn/dấu hiệu |
| Người thực hiện | Bộ phận Chất lượng (Bộ phận Sản xuất, Kỹ thuật hỗ trợ) |

**Nội dung xác nhận PCA**:
- Kích thước/vật liệu/ngoại quan của sản phẩm thực tế có khớp với bản vẽ mới nhất không?
- Cấu thành linh kiện thực tế có khớp với BOM mới nhất không?
- Nhãn sản phẩm (Part No., Rev., S/N, v.v.) có chính xác không?
- Chứng chỉ vật liệu sử dụng (Mill Cert.) có khớp với đặc tính kỹ thuật không?

## 10.2 Thủ tục kiểm toán cấu hình

| Bước | Hoạt động | Phụ trách |
|------|----------|----------|
| 1 | Lập kế hoạch kiểm toán (CI mục tiêu, tiến độ, kiểm toán viên) | Trưởng bộ phận CL |
| 2 | Chuẩn bị tài liệu cơ sở (Bản vẽ, BOM, đặc tính kỹ thuật mới nhất) | Nhân viên QL cấu hình |
| 3 | Thực hiện FCA: Đối chiếu kết quả thử nghiệm vs yêu cầu | Bộ phận CL |
| 4 | Thực hiện PCA: Đối chiếu thực tế vs tài liệu kỹ thuật | Bộ phận CL + SX |
| 5 | Ghi chép các hạng mục không phù hợp | Bộ phận CL |
| 6 | Yêu cầu hành động khắc phục (khi không phù hợp) → Liên kết QP-1001 | Trưởng bộ phận CL |
| 7 | Xác nhận thực hiện hành động khắc phục | Bộ phận CL |
| 8 | Soạn thảo báo cáo kiểm toán và báo cáo cho CCB/QMR | Trưởng bộ phận CL |

## 10.3 Chu kỳ kiểm toán cấu hình

| Loại kiểm toán | Chu kỳ | Ghi chú |
|--------------|--------|--------|
| PCA định kỳ | 1 lần/nửa năm | Sản phẩm sản xuất hàng loạt |
| FCA/PCA liên kết FAI | Khi kiểm tra lần đầu | Sản phẩm mới, sau thay đổi Class I |
| Kiểm toán theo yêu cầu khách hàng | Khi khách hàng yêu cầu | Ứng phó kiểm toán khách hàng |
| Kiểm toán đặc biệt | Khi xảy ra không phù hợp trọng đại | Khi phát hiện không phù hợp liên quan đến cấu hình |

---

# 11. Yêu cầu đặc thù hàng không vũ trụ

## 11.1 Yêu cầu phê duyệt khách hàng

| Yêu cầu | Nội dung chi tiết |
|---------|-----------------|
| Thay đổi cần phê duyệt khách hàng | Thay đổi Class I yêu cầu phê duyệt trong hợp đồng với khách hàng phải được thực hiện sau khi nhận phê duyệt bằng văn bản của khách hàng |
| Thông báo cho khách hàng | Thông báo kịp thời cho khách hàng về thay đổi cấu hình và ảnh hưởng (Bộ phận Kinh doanh chủ trì) |
| Ứng phó kiểm toán khách hàng | Hỗ trợ xác nhận hồ sơ cấu hình và thực tế khi khách hàng yêu cầu kiểm toán cấu hình |
| Thông tin cấu hình khi giao hàng | Ghi rõ trạng thái cấu hình sản phẩm liên quan (Rev. bản vẽ áp dụng, phiên bản BOM) trong tài liệu bàn giao khi giao hàng |

## 11.2 Đánh giá ảnh hưởng khả năng bay

Khi thay đổi cấu hình, đánh giá ảnh hưởng đến khả năng bay (Airworthiness):

| Hạng mục đánh giá | Nội dung |
|-----------------|---------|
| Phán định ảnh hưởng khả năng bay | Phán định có ảnh hưởng đến khả năng bay đối với tất cả ECR (Nội dung bắt buộc xác nhận khi xem xét CCB) |
| Thay đổi hạng mục an toàn quan trọng | Liên kết đánh giá rủi ro (QP-802) khi thay đổi cấu hình Hạng mục an toàn quan trọng (Safety-Critical Item) |
| Đánh giá ảnh hưởng chứng nhận | Xác nhận xem thay đổi có ảnh hưởng đến Chứng nhận loại (Type Certificate) hiện có không |
| Thông báo cơ quan quản lý | Xác nhận yêu cầu thông báo cho cơ quan quản lý liên quan (EASA, FAA, v.v.) khi thay đổi ảnh hưởng đến khả năng bay |

## 11.3 Lưu trữ tài liệu cấu hình

Theo yêu cầu hàng không vũ trụ, quy định thời hạn lưu trữ hồ sơ liên quan đến quản lý cấu hình như sau:

| Loại hồ sơ | Thời hạn lưu trữ | Ghi chú |
|-----------|-----------------|--------|
| Sổ hồ sơ quản lý cấu hình | Tuổi thọ sản phẩm + 10 năm | Thời hạn tối thiểu, kéo dài theo yêu cầu khách hàng |
| Hồ sơ ECR/ECN | Tuổi thọ sản phẩm + 10 năm | Khuyến nghị lưu trữ kép điện tử/giấy |
| Biên bản họp CCB | Tuổi thọ sản phẩm + 10 năm | Bao gồm nội dung quyết nghị và danh sách người tham dự |
| Gói đường cơ sở | Tuổi thọ sản phẩm + 10 năm | Lưu trữ riêng từng FBL/ABL/PBL |
| Báo cáo kiểm toán cấu hình | Tuổi thọ sản phẩm + 10 năm | Bao gồm kết quả FCA/PCA |
| Lịch sử chỉnh sửa bản vẽ/BOM | Tuổi thọ sản phẩm + 10 năm | Lưu trữ tất cả bản hiệu chỉnh (bao gồm bản đã hủy) |

> **Lưu ý**: "Tuổi thọ sản phẩm" có nghĩa là thời điểm kết thúc vận hành của sản phẩm được giao hàng cuối cùng. Khi khách hàng/cơ quan quản lý yêu cầu riêng, áp dụng thời hạn đó.

## 11.4 Phòng ngừa linh kiện giả và quản lý cấu hình

| Yêu cầu | Nội dung chi tiết |
|---------|-----------------|
| Khả năng truy xuất linh kiện | Liên kết số CI với khả năng truy xuất lô/mẻ để ngăn ngừa nhập linh kiện giả |
| Danh sách linh kiện được phê duyệt | Đồng thời cập nhật APL (Danh sách linh kiện được phê duyệt) khi thay đổi cấu hình |
| Kiểm soát thay đổi nhà cung cấp | Áp dụng quy trình thay đổi cấu hình khi thay đổi nhà cung cấp linh kiện (Thay đổi Class I) |

---

# 12. Quản lý hồ sơ

## 12.1 Danh sách hồ sơ quản lý cấu hình

| Tên hồ sơ | Số biểu mẫu | Thời hạn lưu trữ | Trách nhiệm bảo quản |
|-----------|------------|-----------------|---------------------|
| Phiếu yêu cầu thay đổi kỹ thuật (ECR) | F-803-01 | Tuổi thọ SP + 10 năm | Nhân viên QL cấu hình |
| Thông báo thay đổi kỹ thuật (ECN) | F-803-02 | Tuổi thọ SP + 10 năm | Nhân viên QL cấu hình |
| Biên bản họp CCB | F-803-03 | Tuổi thọ SP + 10 năm | Nhân viên QL cấu hình |
| Sổ hồ sơ quản lý cấu hình | F-815-01 | Tuổi thọ SP + 10 năm | Nhân viên QL cấu hình |
| Báo cáo kiểm toán cấu hình | (Sử dụng biểu mẫu đánh giá nội bộ) | Tuổi thọ SP + 10 năm | Trưởng bộ phận CL |
| Gói đường cơ sở | (Tài liệu gốc liên quan) | Tuổi thọ SP + 10 năm | Trưởng bộ phận KT |

## 12.2 Nguyên tắc quản lý hồ sơ

- Tất cả hồ sơ quản lý cấu hình được quản lý theo thủ tục của QP-706 (Quản lý thông tin dạng văn bản).
- Thiết lập hệ thống sao lưu cho hồ sơ điện tử và quản lý quyền truy cập.
- Hồ sơ giấy được bảo quản tại kho có điều kiện chống cháy, chống ẩm, chống côn trùng.
- Áp dụng thủ tục phê duyệt khi thay đổi để ngăn ngừa sửa đổi hồ sơ trái phép.

---

# 13. Tài liệu và biểu mẫu liên quan

## 13.1 Quy trình liên quan

| Số tài liệu | Tên tài liệu | Mối liên hệ |
|------------|-------------|------------|
| QM-001 | Sổ tay chất lượng | Tài liệu cấp trên (§8.1.3 Quản lý cấu hình) |
| QP-706 | Quy trình quản lý thông tin dạng văn bản | Liên kết quản lý tài liệu/hồ sơ |
| QP-802 | Quản lý rủi ro vận hành (FMEA) | Liên kết đánh giá rủi ro thay đổi |
| QP-807 | Quy trình quản lý thay đổi thiết kế/phát triển | Liên kết quy trình thay đổi thiết kế |
| QP-1001 | Quy trình quản lý không phù hợp/hành động khắc phục | Hành động khắc phục không phù hợp cấu hình |

## 13.2 Danh sách biểu mẫu

| Số biểu mẫu | Tên biểu mẫu | Mục đích |
|------------|-------------|---------|
| F-803-01 | Phiếu yêu cầu thay đổi kỹ thuật (ECR) | Tiếp nhận và ghi chép yêu cầu thay đổi cấu hình |
| F-803-02 | Thông báo thay đổi kỹ thuật (ECN) | Chỉ thị thay đổi sau khi CCB phê duyệt |
| F-803-03 | Biên bản họp CCB | Ghi chép xem xét/quyết định của Hội đồng kiểm soát cấu hình |
| F-815-01 | Sổ hồ sơ quản lý cấu hình | Quản lý tích hợp trạng thái CI, lịch sử đường cơ sở, lịch sử thay đổi |

---

**Hết tài liệu — QP-803 Rev. 0**
