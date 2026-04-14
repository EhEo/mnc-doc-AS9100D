# QP-816 Quản Lý Thay Đổi (Thay đổi Sản phẩm/Quy trình)
## Change Management Procedure (Product/Process Change)

| Mục | Nội dung |
|------|------|
| Mã tài liệu | QP-816 |
| Phiên bản | Rev. 0 |
| Ngày ban hành | Tháng 4 năm 2026 ___ |
| Tiêu chuẩn áp dụng | AS9100D Rev D, 8.5.6 |
| Cấp độ bảo mật | Bảo mật (Confidential) |
| Tài liệu cấp trên | QM-001 Sổ tay chất lượng §8.5.6 |

| Phân loại | Chức danh | Họ tên | Chữ ký | Ngày |
|------|------|------|------|------|
| Soạn thảo | Nhân viên Bộ phận Kỹ thuật (Phát triển) | | | |
| Xem xét | Trưởng Bộ phận Chất lượng | | | |
| Phê duyệt | Đại diện lãnh đạo về chất lượng (QMR) | | | |

---

## Lịch sử thay đổi

| Rev. | Ngày | Nội dung thay đổi | Người soạn | Người phê duyệt |
|------|------|----------|--------|--------|
| 0 | 2026-04-__ | Ban hành lần đầu (Xây dựng mới trên cơ sở AS9100D Rev D, phản ánh quy trình quản lý thay đổi 4M hiện có) | | |

---

## Mục lục

1. [Mục đích](#1-mục-đích)
2. [Phạm vi áp dụng](#2-phạm-vi-áp-dụng)
3. [Tài liệu tham chiếu/Tiêu chuẩn](#3-tài-liệu-tham-chiếutiêu-chuẩn)
4. [Thuật ngữ và định nghĩa](#4-thuật-ngữ-và-định-nghĩa)
5. [Trách nhiệm và quyền hạn](#5-trách-nhiệm-và-quyền-hạn)
6. [Phân loại thay đổi](#6-phân-loại-thay-đổi)
7. [Yêu cầu và xem xét thay đổi (Quy trình ECR→ECN)](#7-yêu-cầu-và-xem-xét-thay-đổi-quy-trình-ecrecn)
8. [Phân tích tác động thay đổi](#8-phân-tích-tác-động-thay-đổi)
9. [Phê duyệt và thực hiện thay đổi](#9-phê-duyệt-và-thực-hiện-thay-đổi)
10. [Xác nhận hiệu lực thay đổi](#10-xác-nhận-hiệu-lực-thay-đổi)
11. [Yêu cầu đặc biệt hàng không vũ trụ](#11-yêu-cầu-đặc-biệt-hàng-không-vũ-trụ)
12. [Xử lý thay đổi khẩn cấp (Deviation/Concession)](#12-xử-lý-thay-đổi-khẩn-cấp-deviationconcession)
13. [Quản lý hồ sơ](#13-quản-lý-hồ-sơ)
14. [Tài liệu liên quan và biểu mẫu](#14-tài-liệu-liên-quan-và-biểu-mẫu)

---

# 1. Mục đích

Quy trình này quy định thủ tục quản lý có hệ thống các thay đổi về sản phẩm, quy trình, vật liệu, thiết bị và nhân sự của Công ty TNHH M&C ELECTRONICS VIỆT NAM (sau đây gọi là M&C Electronics VINA).

Mục đích của quy trình này:
- Quản lý thay đổi trong sản xuất và cung cấp dịch vụ theo yêu cầu AS9100D 8.5.6
- Xem xét và kiểm soát ảnh hưởng của thay đổi đến sự phù hợp liên tục với các yêu cầu
- Nâng cấp hệ thống quản lý thay đổi 4M (Man, Machine, Material, Method) hiện có lên mức yêu cầu hàng không vũ trụ
- Thiết lập hệ thống kiểm soát thay đổi thông qua quy trình ECR (Engineering Change Request) → ECN (Engineering Change Notice)
- Thực hiện quản lý thay đổi tích hợp liên kết với quản lý hình thái cấu hình (QP-803) và quản lý rủi ro (QP-802)
- Đáp ứng các yêu cầu thay đổi đặc thù hàng không vũ trụ như phê duyệt trước của khách hàng, thông báo cho cơ quan quản lý, v.v.

> **Lưu ý**: Chi tiết kỹ thuật của thay đổi thiết kế/phát triển được đề cập trong QP-807 (Quản lý thiết kế/phát triển), kiểm soát thay đổi đường cơ sở hình thái cấu hình được đề cập trong QP-803 (Quản lý hình thái cấu hình). Quy trình này quy định toàn bộ **kiểm soát thay đổi trong giai đoạn sản xuất/cung cấp dịch vụ (8.5.6)**.

---

# 2. Phạm vi áp dụng

Quy trình này áp dụng cho tất cả các thay đổi xảy ra trong quá trình sản xuất sản phẩm hàng không vũ trụ và cung cấp dịch vụ của M&C Electronics VINA.

| Phân loại | Đối tượng áp dụng |
|------|----------|
| Thay đổi thiết kế | Thay đổi bản vẽ, thông số kỹ thuật, BOM, phần mềm (liên kết QP-807/QP-803) |
| Thay đổi quy trình | Thay đổi quy trình sản xuất, phương pháp làm việc, trình tự công đoạn, thông số quy trình |
| Thay đổi vật liệu | Thay đổi vật liệu, áp dụng vật liệu thay thế, thay đổi nhà cung cấp |
| Thay đổi thiết bị | Thay đổi/di chuyển thiết bị sản xuất, khuôn, đồ gá, công cụ kiểm tra |
| Thay đổi nhân sự | Thay đổi nhân viên vận hành quy trình đặc biệt, nhân viên kiểm tra, nhân sự kỹ thuật chủ chốt |

**Bộ phận áp dụng**: Phát triển (Phát triển), Sản xuất (Sản xuất), Khuôn (Khuôn), Kế hoạch sản xuất (KHSX), Chất lượng (Chất lượng), Mua hàng (PUR), Kinh doanh (Kinh doanh)

**Ngoại lệ**: Bảo dưỡng thiết bị thường xuyên (thay thế định kỳ theo kế hoạch bảo dưỡng phòng ngừa), thay thế vật tư tiêu hao cùng quy cách không thuộc đối tượng thay đổi theo quy trình này.

---

# 3. Tài liệu tham chiếu/Tiêu chuẩn

| Tài liệu/Tiêu chuẩn | Nội dung |
|----------|------|
| AS9100D Rev D | Yêu cầu hệ thống quản lý chất lượng hàng không vũ trụ (Điều 8.5.6) |
| ISO 9001:2015 | Yêu cầu hệ thống quản lý chất lượng (Điều 8.5.6) |
| AS9102 Rev B | Yêu cầu First Article Inspection |
| QM-001 | Sổ tay chất lượng §8.5.6 Quản lý thay đổi sản xuất/cung cấp dịch vụ |
| QP-802 | Quy trình quản lý rủi ro vận hành (FMEA) |
| QP-803 | Quy trình quản lý hình thái cấu hình (bao gồm CCB) |
| QP-807 | Quy trình quản lý thiết kế/phát triển |
| QP-811 | Quy trình FAI (Kiểm tra vật phẩm lần đầu) |
| QP-818 | Quy trình quản lý đầu ra không phù hợp |
| QP-706 | Quy trình quản lý thông tin được lập thành văn bản |

---

# 4. Thuật ngữ và định nghĩa

| Thuật ngữ | Định nghĩa |
|------|------|
| Thay đổi 4M | Thay đổi về Man (Nhân sự), Machine (Máy móc), Material (Vật liệu), Method (Quy trình/Phương pháp). Phương thức phân loại thay đổi được sử dụng trong hệ thống ISO/IATF cũ |
| ECR (Engineering Change Request) | Đề nghị thay đổi kỹ thuật — Tài liệu mô tả sự cần thiết, căn cứ và tác động dự kiến của thay đổi để yêu cầu thay đổi |
| ECN (Engineering Change Notice) | Thông báo thay đổi kỹ thuật — Tài liệu chính thức thông báo nội dung thay đổi và lệnh thực hiện sau khi xem xét/phê duyệt thay đổi |
| PCN (Process Change Notice) | Thông báo thay đổi quy trình — Tài liệu thông báo cho khách hàng và các bộ phận liên quan khi thay đổi quy trình |
| Deviation | Cho phép lệch tạm thời — Cho phép lệch trước so với yêu cầu quy định đối với sản phẩm chưa được sản xuất |
| Concession (Chấp thuận đặc biệt) | Cho phép sử dụng hoặc xuất hàng sản phẩm không phù hợp với yêu cầu quy định |
| Thay đổi ảnh hưởng đến hình thái cấu hình | Thay đổi ảnh hưởng đến đường cơ sở hình thái cấu hình (Baseline), bắt buộc phải có xem xét của CCB |
| Xác nhận hiệu lực thay đổi | Hoạt động xác nhận sản phẩm/quy trình đã thay đổi đáp ứng các yêu cầu sau khi thực hiện thay đổi |
| Class I | Thay đổi chính ảnh hưởng đến Hình dạng, Lắp ghép, Chức năng (Form, Fit, Function) |
| Class II | Thay đổi nhỏ không ảnh hưởng đến Hình dạng, Lắp ghép, Chức năng |

---

# 5. Trách nhiệm và quyền hạn

## 5.1 Trách nhiệm theo tổ chức

| Vai trò | Trách nhiệm |
|------|------|
| Tổng Giám đốc | Phê duyệt cuối cùng đối với thay đổi Class I và thay đổi phải báo cáo khách hàng |
| Đại diện lãnh đạo về chất lượng (QMR) | Quản lý tổng thể quy trình quản lý thay đổi, xem xét/phê duyệt ảnh hưởng chất lượng của thay đổi Class I |
| CCB (Ủy ban kiểm soát hình thái cấu hình) | Xem xét/phê duyệt thay đổi ảnh hưởng đến hình thái cấu hình (liên kết QP-803) |
| Trưởng Bộ phận Kỹ thuật (Phát triển) | Quản lý ECR/ECN thay đổi thiết kế, chủ trì phân tích tác động kỹ thuật, phân loại Class I/II |
| Trưởng Bộ phận Sản xuất (Sản xuất) | Yêu cầu/thực hiện thay đổi quy trình, quản lý thay đổi 4M hàng ngày, xác nhận ổn định sản xuất sau thay đổi |
| Trưởng Bộ phận Khuôn (Khuôn) | Phân tích tác động thay đổi khuôn/đồ gá/công cụ, thực hiện thay đổi thiết bị |
| Trưởng Bộ phận Chất lượng (Chất lượng) | Xác minh chất lượng tác động thay đổi, quyết định tái thực hiện FAI, xác nhận hiệu lực thay đổi |
| Bộ phận Mua hàng (PUR) | Phân tích tác động khi thay đổi nhà cung cấp/vật liệu, xác nhận tính phù hợp của vật liệu thay thế |
| Kế hoạch sản xuất (KHSX) | Lập lịch thay đổi, phân tích tác động tồn kho, quản lý thời điểm chuyển đổi (Effectivity) |
| Bộ phận Kinh doanh (Kinh doanh) | Yêu cầu/tiếp nhận phê duyệt trước của khách hàng, tiếp nhận/chuyển tiếp yêu cầu thay đổi từ khách hàng |

## 5.2 Ma trận quyền phê duyệt thay đổi

| Cấp độ thay đổi | Mức độ ảnh hưởng | Quyền phê duyệt |
|----------|----------|----------|
| Class I — Thay đổi thiết kế | Ảnh hưởng FFF (Hình dạng/Lắp ghép/Chức năng) | Xem xét CCB + Phê duyệt QMR + Phê duyệt khách hàng |
| Class I — Thay đổi quy trình | Ảnh hưởng đến sự phù hợp sản phẩm | Phê duyệt QMR + Trưởng Bộ phận Kỹ thuật + Trưởng Bộ phận Sản xuất |
| Class II — Thay đổi thiết kế nhỏ | Không ảnh hưởng FFF | Phê duyệt của Trưởng Bộ phận Kỹ thuật |
| Class II — Thay đổi quy trình nhỏ | Không ảnh hưởng đến sự phù hợp sản phẩm | Phê duyệt Trưởng Bộ phận Sản xuất + Trưởng Bộ phận Chất lượng |
| Thay đổi vật liệu | Khác nhau theo cấp độ | Class I: CCB / Class II: Bộ phận Mua hàng + Bộ phận Chất lượng |
| Thay đổi thiết bị | Khác nhau theo cấp độ | Class I: CCB / Class II: Trưởng Bộ phận Sản xuất + Trưởng Bộ phận Chất lượng |
| Thay đổi nhân sự | Nhân viên vận hành quy trình đặc biệt | Trưởng Bộ phận Chất lượng + Trưởng Bộ phận liên quan |
| Thay đổi khẩn cấp (Deviation) | Lệch tạm thời | Phê duyệt QMR + Phê duyệt khách hàng (khi cần) |
| Concession (Chấp thuận đặc biệt) | Xuất hàng không phù hợp | QMR + Phê duyệt khách hàng (bắt buộc đối với hàng không vũ trụ) |

---

# 6. Phân loại thay đổi

## 6.1 Phân loại theo loại thay đổi

### 6.1.1 Thay đổi thiết kế (Design Change)
- Thay đổi kỹ thuật về bản vẽ, thông số kỹ thuật, BOM, phần mềm
- Phân loại Class I/II tùy thuộc vào mức độ ảnh hưởng đến đường cơ sở hình thái cấu hình
- ECR → Xem xét CCB (Class I) → Phát hành ECN → Thực hiện

### 6.1.2 Thay đổi quy trình (Process Change)
- Thay đổi trình tự, phương pháp, thông số quy trình sản xuất
- Kéo theo thay đổi tiêu chuẩn công việc (WI), sơ đồ quy trình, sơ đồ quy trình QC
- Thay đổi quy trình đặc biệt yêu cầu tái chứng nhận (Requalification)

### 6.1.3 Thay đổi vật liệu (Material Change)
- Thay đổi quy cách, cấp độ, nhà sản xuất vật liệu nguyên phụ liệu
- Áp dụng vật liệu thay thế (Alternate Material)
- Thay đổi nhà cung cấp (liên kết QP-808 Quản lý nhà cung cấp bên ngoài)

### 6.1.4 Thay đổi thiết bị (Machine/Equipment Change)
- Lắp đặt mới, thay thế, di chuyển (Relocation) thiết bị sản xuất
- Chế tạo mới hoặc sửa chữa lớn khuôn, đồ gá, công cụ
- Thay đổi thiết bị kiểm tra/thử nghiệm

### 6.1.5 Thay đổi nhân sự (Man Change)
- Thay đổi nhân viên được chứng nhận cho quy trình đặc biệt (hàn, hàn thiếc, mạ điện, v.v.)
- Thay đổi nhân viên kiểm tra chủ chốt
- Khi bổ sung nhân viên mới, xác nhận tư cách (liên kết QP-703)

## 6.2 Tiêu chí phân loại cấp độ thay đổi

| Cấp độ | Tiêu chí | Ví dụ |
|------|------|------|
| Class I (Thay đổi chính) | Ảnh hưởng đến FFF / Ảnh hưởng đến khả năng tương thích / Ảnh hưởng đến an toàn, độ tin cậy / Ảnh hưởng đến yêu cầu khách hàng | Thay đổi dung sai kích thước, thay đổi vật liệu, thêm/bỏ công đoạn, thay đổi nhà cung cấp chủ chốt |
| Class II (Thay đổi nhỏ) | Không ảnh hưởng FFF / Duy trì khả năng tương thích / Không ảnh hưởng an toàn, độ tin cậy | Sửa cách ghi trên bản vẽ, nới lỏng dung sai kích thước không quan trọng, cải thiện tiện lợi làm việc |

---

# 7. Yêu cầu và xem xét thay đổi (Quy trình ECR→ECN)

## 7.1 Yêu cầu thay đổi (ECR)

### 7.1.1 Đề xuất yêu cầu thay đổi
- **Người đề xuất**: Tất cả nhân viên các bộ phận có thể phát hành ECR khi nhận thấy sự cần thiết thay đổi
- **Lý do yêu cầu thay đổi**:
  - Thay đổi yêu cầu của khách hàng
  - Cải tiến thiết kế hoặc hiệu chỉnh sai sót
  - Cải tiến quy trình hoặc giải quyết vấn đề
  - Giảm chi phí
  - Ứng phó thay đổi quy cách/quy định
  - Lý do từ nhà cung cấp (ngừng sản xuất, vấn đề chất lượng)
  - Khắc phục sự không phù hợp từ đánh giá nội bộ/bên ngoài

### 7.1.2 Thông tin bắt buộc trong ECR

| Mục | Nội dung |
|------|------|
| Số ECR | ECR-YYYY-NNN (năm-số thứ tự) |
| Đối tượng thay đổi | Số nhận dạng bản vẽ/thông số kỹ thuật/quy trình/vật liệu/thiết bị liên quan |
| Lý do thay đổi | Lý do cụ thể cần thay đổi |
| Trạng thái hiện tại (As-Is) | Mô tả trạng thái quy cách/quy trình/vật liệu hiện tại |
| Trạng thái sau thay đổi (To-Be) | Mô tả trạng thái quy cách/quy trình/vật liệu mục tiêu sau thay đổi |
| Tác động dự kiến | Đánh giá sơ bộ tác động đến chất lượng, tiến độ, chi phí, an toàn, hình thái cấu hình |
| Phân loại thay đổi | Thiết kế/Quy trình/Vật liệu/Thiết bị/Nhân sự |
| Cấp độ (Class I/II) | Phân loại cấp độ sơ bộ (xác nhận khi xem xét) |
| Ngày yêu cầu / Người yêu cầu | Ngày, bộ phận, họ tên |

### 7.1.3 Tiếp nhận ECR và xem xét sơ bộ
1. Bộ phận Kỹ thuật (thay đổi thiết kế) hoặc Bộ phận Sản xuất (thay đổi quy trình/4M) tiếp nhận ECR
2. Xác nhận tính đầy đủ của ECR (kiểm tra các mục bắt buộc đã điền)
3. Phân loại cấp độ thay đổi sơ bộ (Class I/II)
4. Nếu phán định Class I → Lên lịch xem xét CCB
5. Nếu phán định Class II → Tiến hành với xem xét của trưởng bộ phận liên quan

## 7.2 Xem xét thay đổi

### 7.2.1 Thay đổi Class I — Xem xét CCB
- Triệu tập CCB (tham khảo QP-803 §8 Quản lý hình thái cấu hình)
- Tham gia Nhóm đa chức năng (Cross-Functional Team): Kỹ thuật, Sản xuất, Chất lượng, Mua hàng, Kế hoạch sản xuất
- Các mục xem xét:
  - Tính khả thi kỹ thuật
  - Kết quả phân tích tác động (xem Điều 8)
  - Có cần phê duyệt của khách hàng không
  - Tác động quy định
  - Ảnh hưởng đến đường cơ sở hình thái cấu hình
  - Lịch thực hiện và kế hoạch chuyển đổi
- Kết quả xem xét: Chấp thuận / Chấp thuận có điều kiện / Từ chối / Yêu cầu bổ sung

### 7.2.2 Thay đổi Class II — Xem xét đơn giản
- Xem xét bởi Trưởng Bộ phận liên quan + Trưởng Bộ phận Chất lượng
- Xác nhận tính khả thi kỹ thuật và tác động chất lượng
- Xác nhận lại không ảnh hưởng FFF sau đó phê duyệt

## 7.3 Phát hành ECN

| Mục | Nội dung |
|------|------|
| Số ECN | ECN-YYYY-NNN (năm-số thứ tự), tham chiếu số ECR |
| Nội dung thay đổi | Nội dung thay đổi cụ thể (nội dung thay đổi bản vẽ/BOM/quy trình/quy cách) |
| Tài liệu bị ảnh hưởng | Danh sách bản vẽ, thông số kỹ thuật, tiêu chuẩn công việc, sơ đồ quy trình QC cần sửa đổi |
| Thời điểm áp dụng (Effectivity) | Thời điểm chuyển đổi theo số lô, số serial hoặc ngày |
| Xử lý tồn kho | Phương pháp xử lý tồn kho/bán thành phẩm/thành phẩm hiện có |
| Có cần tái thực hiện FAI không | Phán định có cần tái thực hiện FAI đối với thay đổi Class I không (xem Điều 10) |
| Thông báo/Phê duyệt khách hàng | Có phê duyệt trước của khách hàng chưa, số tài liệu phê duyệt |
| Đối tượng phân phối | Bộ phận phân phối ECN và chữ ký xác nhận |

---

# 8. Phân tích tác động thay đổi

## 8.1 Phạm vi phân tích tác động

Thực hiện phân tích tác động đối với tất cả thay đổi Class I và thay đổi Class II có thể ảnh hưởng đến sự phù hợp của sản phẩm.

| Lĩnh vực phân tích | Nội dung phân tích |
|----------|----------|
| Sự phù hợp sản phẩm | Liệu sản phẩm có tiếp tục đáp ứng yêu cầu quy cách/thông số kỹ thuật không |
| Tác động hình thái cấu hình | Có thay đổi đường cơ sở hình thái cấu hình không (liên kết QP-803) |
| Tác động an toàn | Tác động đến an toàn sản phẩm/dịch vụ (liên kết QP-804) |
| Khả năng tương thích/thay thế | Khả năng tương thích, khả năng thay thế so với sản phẩm hiện có |
| Năng lực quy trình | Có duy trì được năng lực quy trình (Cpk) sau thay đổi không |
| Tác động tiến độ | Thời gian thực hiện thay đổi, thời gian ngừng sản xuất, tác động tiến độ giao hàng |
| Tác động chi phí | Biến động chi phí nguyên vật liệu, gia công, kiểm tra |
| Tác động chuỗi cung ứng | Thay đổi nhà cung cấp, biến động thời gian dẫn (lead time) |
| Tác động quy định/chứng nhận | Có cần tái lấy chứng nhận từ cơ quan hàng không, khách hàng không |

## 8.2 Đánh giá rủi ro (Liên kết QP-802)

Rủi ro do thay đổi được đánh giá theo quy trình QP-802 (Quản lý rủi ro vận hành).

| Mức độ rủi ro | Mức độ nghiêm trọng × Tần suất xảy ra | Biện pháp |
|------------|----------------|------|
| Rủi ro cao (High) | RPN ≥ 100 hoặc Mức độ nghiêm trọng ≥ 8 | Bắt buộc lập kế hoạch giảm thiểu rủi ro riêng, Xem xét CCB |
| Rủi ro trung bình (Medium) | 40 ≤ RPN < 100 | Thực hiện biện pháp giảm thiểu rủi ro rồi phê duyệt |
| Rủi ro thấp (Low) | RPN < 40 | Tiến hành quy trình thay đổi tiêu chuẩn |

## 8.3 Cập nhật FMEA

- Bắt buộc cập nhật FMEA quy trình/thiết kế liên quan khi có thay đổi Class I
- Xác định dạng hỏng mới (Failure Mode) do thay đổi và lập biện pháp đối phó
- Đính kèm kết quả cập nhật FMEA vào ECN

---

# 9. Phê duyệt và thực hiện thay đổi

## 9.1 Phê duyệt thay đổi

1. Xác nhận hoàn thành phân tích tác động và đánh giá rủi ro
2. Lấy phê duyệt theo ma trận quyền phê duyệt (§5.2)
3. Phê duyệt trước của khách hàng (khi áp dụng) — Cấm thực hiện thay đổi trước khi hoàn thành phê duyệt của khách hàng
4. Thông báo/phê duyệt từ cơ quan quản lý (khi áp dụng)
5. Phát hành và phân phối ECN chính thức

## 9.2 Thực hiện thay đổi

### 9.2.1 Chuẩn bị trước khi thực hiện
- Sửa đổi tài liệu liên quan: Bản vẽ, BOM, tiêu chuẩn công việc, sơ đồ quy trình QC, tiêu chuẩn kiểm tra
- Thu hồi và vô hiệu hóa tài liệu phiên bản cũ (liên kết QP-706)
- Cập nhật hệ thống quản lý hình thái cấu hình (liên kết QP-803)
- Tiến hành đào tạo/huấn luyện nhân viên (phổ biến nội dung thay đổi, liên kết QP-703)
- Xác nhận chuẩn bị vật liệu/thiết bị
- Xử lý tồn kho (nhận dạng/phân tách trước và sau thời điểm chuyển đổi)

### 9.2.2 Thực hiện
- Thực hiện thay đổi theo thời điểm áp dụng (Effectivity) ghi trong ECN
- Đảm bảo nhận dạng rõ ràng và truy xuất nguồn gốc sản phẩm trước/sau thay đổi (liên kết QP-812)
- Biện pháp chống lẫn trong giai đoạn chuyển đổi (Transition Period)
- Xác nhận và ký tên hoàn thành từng bước thực hiện thay đổi

### 9.2.3 Danh sách kiểm tra thực hiện thay đổi

| Mục kiểm tra | Xác nhận | Ghi chú |
|----------|------|------|
| Hoàn thành sửa đổi tài liệu liên quan | □ | Bản vẽ/BOM/WI/Sơ đồ quy trình QC |
| Thu hồi tài liệu phiên bản cũ | □ | QP-706 |
| Cập nhật hệ thống quản lý hình thái cấu hình | □ | QP-803 |
| Hoàn thành đào tạo nhân viên | □ | QP-703 |
| Hoàn thành chuẩn bị vật liệu/thiết bị | □ | |
| Phân tách tồn kho tại thời điểm chuyển đổi | □ | Nhận dạng lô/S/N |
| Hoàn thành phê duyệt khách hàng (khi áp dụng) | □ | Số tài liệu phê duyệt |
| Thông báo cho cơ quan quản lý (khi áp dụng) | □ | |
| Lập kế hoạch tái thực hiện FAI (khi áp dụng) | □ | QP-811 |

---

# 10. Xác nhận hiệu lực thay đổi

## 10.1 Phương pháp xác nhận hiệu lực

Sau khi thực hiện thay đổi, xác nhận sản phẩm/quy trình đã thay đổi đáp ứng các yêu cầu.

| Phương pháp xác nhận | Điều kiện áp dụng | Tiêu chí |
|----------|----------|------|
| Tái thực hiện FAI | Thay đổi Class I (ảnh hưởng FFF) | Đáp ứng yêu cầu AS9102 (QP-811) |
| FAI một phần | Thay đổi Class I (chỉ ảnh hưởng một số đặc tính) | FAI chỉ đối với các đặc tính bị ảnh hưởng bởi thay đổi |
| Kiểm tra mẫu đầu (đơn giản) | Thay đổi Class II | Kiểm tra toàn bộ đối với các mục thay đổi |
| Xác nhận năng lực quy trình | Thay đổi quy trình | Xác nhận Cpk ≥ 1.33 |
| Thử nghiệm chức năng | Thay đổi ảnh hưởng chức năng | Đạt các mục thử nghiệm theo quy cách khách hàng |

## 10.2 Tiêu chí quyết định tái thực hiện FAI (Liên kết QP-811)

Theo AS9102, tái thực hiện FAI trong các trường hợp sau:

| Cần tái thực hiện FAI | Không cần tái thực hiện FAI |
|----------------|-----------------|
| Thay đổi thiết kế (bản vẽ/thông số kỹ thuật) ảnh hưởng FFF | Thay đổi phi kỹ thuật như sửa cách ghi trên bản vẽ |
| Thay đổi trọng yếu trong quy trình sản xuất | Điều chỉnh thông số nhỏ trong cùng quy trình |
| Di chuyển địa điểm sản xuất (cơ sở) | Di chuyển dây chuyền trong cùng cơ sở |
| Tái khởi động sản xuất sau khi ngừng từ 2 năm trở lên | Duy trì sản xuất đều đặn |
| Thay đổi vật liệu/nguyên liệu (ảnh hưởng FFF) | Thay đổi lô cùng quy cách, cùng nhà sản xuất |

## 10.3 Báo cáo xác nhận hiệu lực

- Ghi kết quả xác nhận hiệu lực vào ECN và phản ánh vào lịch sử thay đổi
- Khi xảy ra sự không phù hợp, liên kết xử lý theo QP-818 (Quản lý đầu ra không phù hợp) và QP-1001 (Hành động khắc phục)
- Xử lý đóng thay đổi (Close-out) sau khi hoàn thành xác nhận hiệu lực

---

# 11. Yêu cầu đặc biệt hàng không vũ trụ

## 11.1 Phê duyệt trước của khách hàng (Customer Prior Approval)

Yêu cầu của khách hàng hàng không vũ trụ về thay đổi:

- **Bắt buộc** tuân thủ các yêu cầu thông báo/phê duyệt thay đổi ghi trong hợp đồng/PO của khách hàng
- Đối với thay đổi Class I, gửi ECR hoặc PCN cho khách hàng và chỉ thực hiện thay đổi sau khi nhận được phê duyệt bằng văn bản của khách hàng
- Trường hợp khách hàng có biểu mẫu và thủ tục riêng, ưu tiên sử dụng biểu mẫu của khách hàng
- Duy trì sản xuất theo trạng thái trước thay đổi trong thời gian chờ phê duyệt của khách hàng
- **Tuyệt đối cấm thực hiện thay đổi khi chưa được khách hàng phê duyệt**

## 11.2 Liên kết quản lý hình thái cấu hình (QP-803)

- Tất cả thay đổi Class I được quản lý kết hợp với quy trình quản lý hình thái cấu hình
- Bắt buộc xem xét CCB khi thay đổi đường cơ sở hình thái cấu hình (Baseline)
- Cập nhật Hồ sơ trạng thái hình thái cấu hình (CSA) đồng thời khi phát hành ECN
- Bao gồm xác minh lịch sử thay đổi trong kiểm toán hình thái cấu hình (Configuration Audit)

## 11.3 Thông báo cho cơ quan quản lý

- Thông báo/phê duyệt trước theo yêu cầu quy định khi thay đổi sản phẩm được chứng nhận bởi cơ quan hàng không (EASA, FAA, v.v.)
- Trường hợp cần thông báo cho cơ quan quản lý thông qua khách hàng, Bộ phận Kinh doanh phối hợp với khách hàng xử lý
- Tạm dừng thực hiện thay đổi khi chưa hoàn thành phê duyệt từ cơ quan quản lý

## 11.4 Kiểm soát thay đổi của nhà cung cấp bên ngoài

- Yêu cầu áp dụng quy trình quản lý thay đổi tương tự đối với các thay đổi sản phẩm/quy trình của nhà cung cấp bên ngoài
- Nhà cung cấp có nghĩa vụ thông báo trước cho M&C Electronics VINA trước khi thực hiện thay đổi
- Liên kết QP-808 (Quản lý nhà cung cấp bên ngoài) khi thay đổi Danh sách nhà cung cấp được phê duyệt (ASL)

## 11.5 Đảm bảo truy xuất nguồn gốc

- Nhận dạng rõ ràng số lô hoặc số serial cho sản phẩm trước/sau thay đổi
- Duy trì lịch sử có thể truy xuất dựa trên thời điểm áp dụng thay đổi (Effectivity Point)
- Lịch sử thay đổi được lưu trữ tối thiểu 10 năm sau khi kết thúc vòng đời sản phẩm (hoặc thời hạn yêu cầu của khách hàng)

---

# 12. Xử lý thay đổi khẩn cấp (Deviation/Concession)

## 12.1 Deviation (Cho phép lệch tạm thời)

Trường hợp không thể tránh được việc lệch so với yêu cầu quy định trước khi sản xuất:

| Mục | Yêu cầu |
|------|---------|
| Đề xuất | Bộ phận liên quan phát hành Deviation Request mô tả sự cần thiết và căn cứ của việc lệch |
| Phạm vi | Giới hạn rõ ràng lô/số lượng/thời hạn áp dụng |
| Phân tích tác động | Phân tích tác động của việc lệch đến an toàn, chức năng, sự phù hợp của sản phẩm |
| Phê duyệt | Bắt buộc phê duyệt QMR, lệch ở mức Class I bắt buộc phê duyệt khách hàng |
| Hồ sơ | Lưu trữ số Deviation, phạm vi áp dụng, chi tiết phê duyệt |
| Thời hạn | Tự động kết thúc khi hết thời hạn áp dụng, cần phê duyệt lại khi gia hạn |

## 12.2 Concession (Chấp thuận đặc biệt)

Cho phép sử dụng/xuất hàng sản phẩm không phù hợp đã được sản xuất:

| Mục | Yêu cầu |
|------|---------|
| Đề xuất | Xử lý sự không phù hợp theo QP-818 khi xảy ra, rồi xem xét Concession |
| Điều kiện | Chứng minh không ảnh hưởng đến an toàn, chức năng, độ tin cậy |
| Phê duyệt khách hàng | **Đối với sản phẩm hàng không vũ trụ, bắt buộc phê duyệt bằng văn bản của khách hàng** (không thể tự phê duyệt) |
| Nhận dạng | Nhận dạng rõ ràng và theo dõi sản phẩm Concession |
| Hồ sơ | Số Concession, căn cứ phê duyệt, tài liệu phê duyệt của khách hàng, hồ sơ phân tích tác động |
| Biện pháp tiếp theo | Phân tích nguyên nhân gốc rễ và thực hiện hành động khắc phục (liên kết QP-1001) |

## 12.3 Quy trình thay đổi khẩn cấp

Trường hợp không thể thực hiện quy trình ECR→ECN thông thường do tình huống khẩn cấp (dừng dây chuyền sản xuất, rủi ro tiến độ giao hàng, v.v.):

1. **Phê duyệt khẩn cấp**: Có thể thực hiện thay đổi bằng phê duyệt khẩn cấp bằng miệng/email của QMR hoặc Tổng Giám đốc
2. **Lập hồ sơ hậu kỳ**: Soạn thảo bổ sung ECR/ECN thông thường **trong 48 giờ** sau khi thực hiện thay đổi khẩn cấp
3. **Thông báo khách hàng**: Trường hợp cần phê duyệt khách hàng, ngay lập tức thông báo cho khách hàng về việc thay đổi khẩn cấp
4. **Xác nhận hiệu lực**: Thực hiện xác nhận hiệu lực ở mức độ tương đương thay đổi thông thường
5. **Phòng ngừa tái phát**: Phân tích nguyên nhân thay đổi khẩn cấp và lập kế hoạch chuyển sang quy trình thông thường

---

# 13. Quản lý hồ sơ

## 13.1 Hồ sơ cần lưu trữ

| Hồ sơ | Thời hạn lưu trữ | Nơi lưu trữ |
|------|----------|----------|
| ECR (Đề nghị thay đổi kỹ thuật) | Vòng đời sản phẩm + 10 năm | DMS (Hệ thống quản lý tài liệu) |
| ECN (Thông báo thay đổi kỹ thuật) | Vòng đời sản phẩm + 10 năm | DMS |
| PCN (Thông báo thay đổi quy trình) | Vòng đời sản phẩm + 10 năm | DMS |
| Phiếu phân tích tác động thay đổi | Vòng đời sản phẩm + 10 năm | DMS |
| Biên bản họp CCB (Class I) | Vòng đời sản phẩm + 10 năm | DMS |
| Tài liệu phê duyệt của khách hàng | Vòng đời sản phẩm + 10 năm | DMS + Bộ phận Kinh doanh |
| Hồ sơ Deviation/Concession | Vòng đời sản phẩm + 10 năm | DMS |
| Báo cáo FAI (sau thay đổi) | Vòng đời sản phẩm + 10 năm | Bộ phận Chất lượng |
| Hồ sơ xác nhận hiệu lực thay đổi | Vòng đời sản phẩm + 10 năm | DMS |
| Hồ sơ cập nhật FMEA | Bản mới nhất + bản sửa đổi liền trước | Bộ phận Kỹ thuật |

## 13.2 Sổ theo dõi lịch sử thay đổi

- Duy trì sổ theo dõi lịch sử thay đổi (Change Log) quản lý tất cả các thay đổi theo số thứ tự
- Thông tin ghi lại: Số ECR/ECN, đối tượng thay đổi, loại thay đổi, cấp độ, ngày, trạng thái, người phê duyệt
- Sổ theo dõi lịch sử thay đổi được sử dụng làm dữ liệu đầu vào cho xem xét của lãnh đạo hàng quý (QP-904)

---

# 14. Tài liệu liên quan và biểu mẫu

## 14.1 Quy trình liên quan

| Mã tài liệu | Tên tài liệu | Liên kết |
|---------|--------|----------|
| QP-802 | Quản lý rủi ro vận hành (FMEA) | Đánh giá rủi ro thay đổi, cập nhật FMEA |
| QP-803 | Quản lý hình thái cấu hình (bao gồm CCB) | Thay đổi đường cơ sở hình thái cấu hình, xem xét CCB |
| QP-804 | Quản lý an toàn sản phẩm/dịch vụ | Đánh giá thay đổi ảnh hưởng an toàn |
| QP-706 | Quản lý thông tin được lập thành văn bản | Sửa đổi tài liệu, thu hồi phiên bản cũ |
| QP-703 | Quản lý năng lực/đào tạo | Đào tạo nhân viên sau thay đổi |
| QP-807 | Quản lý thiết kế/phát triển | Thủ tục chi tiết thay đổi thiết kế |
| QP-811 | FAI (Kiểm tra vật phẩm lần đầu) | Phán định và thực hiện tái FAI |
| QP-818 | Quản lý đầu ra không phù hợp | Xử lý sự không phù hợp khi thay đổi thất bại |
| QP-1001 | Quản lý sự không phù hợp và hành động khắc phục | Phân tích nguyên nhân gốc rễ, hành động khắc phục |
| QP-904 | Xem xét của lãnh đạo | Báo cáo tình trạng thay đổi |

## 14.2 Danh sách biểu mẫu

| Số biểu mẫu | Tên biểu mẫu |
|---------|--------|
| QF-816-01 | Đề nghị thay đổi kỹ thuật (ECR, Engineering Change Request) |
| QF-816-02 | Thông báo thay đổi kỹ thuật (ECN, Engineering Change Notice) |
| QF-816-03 | Thông báo thay đổi quy trình (PCN, Process Change Notice) |
| QF-816-04 | Phiếu phân tích tác động thay đổi (Change Impact Analysis) |
| QF-816-05 | Đề nghị/Phê duyệt thay đổi khẩn cấp (Deviation) |
| QF-816-06 | Đề nghị/Phê duyệt Concession (Chấp thuận đặc biệt) |
| QF-816-07 | Danh sách kiểm tra thực hiện thay đổi |
| QF-816-08 | Báo cáo xác nhận hiệu lực thay đổi |
| QF-816-09 | Sổ theo dõi lịch sử thay đổi (Change Log) |

---

> **Kết thúc tài liệu — QP-816 Rev. 0**

---

*Tài liệu này là tài sản của M&C Electronics VIỆT NAM. Nghiêm cấm sao chép hoặc tiết lộ cho bên thứ ba khi chưa có sự đồng ý bằng văn bản.*
