# Quy Trình Quản Lý Danh Sách Nhà Cung Cấp Được Phê Duyệt (ASL)
## Approved Supplier List (ASL) Management Procedure

| Mục | Nội dung |
|-----|----------|
| Mã tài liệu | QP-809 |
| Số lần sửa đổi | Rev. 0 |
| Ngày ban hành | Tháng 5 năm 2026, ngày ___ |
| Tiêu chuẩn áp dụng | AS9100D Rev D, 8.4.1 |
| Mức độ bảo mật | Tài liệu nội bộ (Confidential) |
| Tài liệu cấp trên | QM-001 Sổ tay chất lượng §8.4, QP-808 |

| Phân loại | Chức danh | Họ tên | Chữ ký | Ngày |
|-----------|-----------|--------|--------|------|
| Soạn thảo | Nhân viên bộ phận mua hàng | | | |
| Kiểm tra | Trưởng bộ phận Chất lượng | | | |
| Phê duyệt | Đại diện lãnh đạo chất lượng (QMR) | | | |

---

## Lịch sử sửa đổi

| Rev. | Ngày | Nội dung sửa đổi | Người soạn | Người phê duyệt |
|------|------|-----------------|------------|----------------|
| 0 | 2026-05-__ | Ban hành lần đầu (Soạn thảo mới hoàn toàn dựa trên AS9100D Rev D, phản ánh hành động khắc phục CAR-009) | | |

---

## Mục lục

1. [Mục đích](#1-mục-đích)
2. [Phạm vi áp dụng](#2-phạm-vi-áp-dụng)
3. [Tài liệu/tiêu chuẩn tham chiếu](#3-tài-liệutiêu-chuẩn-tham-chiếu)
4. [Thuật ngữ và định nghĩa](#4-thuật-ngữ-và-định-nghĩa)
5. [Trách nhiệm và quyền hạn](#5-trách-nhiệm-và-quyền-hạn)
6. [Tiêu chí và thủ tục đăng ký ASL](#6-tiêu-chí-và-thủ-tục-đăng-ký-asl)
7. [Phân loại trạng thái ASL](#7-phân-loại-trạng-thái-asl)
8. [Duy trì ASL](#8-duy-trì-asl)
9. [Quản lý thay đổi ASL](#9-quản-lý-thay-đổi-asl)
10. [Quản lý nhà cung cấp do khách hàng chỉ định và nhà cung cấp được khách hàng phê duyệt](#10-quản-lý-nhà-cung-cấp-do-khách-hàng-chỉ-định-và-nhà-cung-cấp-được-khách-hàng-phê-duyệt)
11. [ASL nhà cung cấp quy trình đặc biệt](#11-asl-nhà-cung-cấp-quy-trình-đặc-biệt)
12. [Kết nối phòng ngừa linh kiện giả mạo và ASL](#12-kết-nối-phòng-ngừa-linh-kiện-giả-mạo-và-asl)
13. [Quản lý hồ sơ](#13-quản-lý-hồ-sơ)
14. [Tài liệu và biểu mẫu liên quan](#14-tài-liệu-và-biểu-mẫu-liên-quan)

---

# 1. Mục đích

Quy trình này quy định các thủ tục quản lý toàn bộ vòng đời của Danh sách nhà cung cấp được phê duyệt (ASL, Approved Supplier List) của M&C Electronics VINA, bao gồm lập, duy trì, thay đổi và hủy bỏ.

Mục đích của quy trình này:
- Thiết lập và quản lý có hệ thống ASL theo yêu cầu Ghi chú AS9100D 8.4.1
- Thiết lập hệ thống phê duyệt/phân loại/tái đánh giá dựa trên năng lực chất lượng của nhà cung cấp
- Quản lý nhà cung cấp do khách hàng chỉ định (Customer-Directed Source) và nhà cung cấp được khách hàng phê duyệt (Customer-Approved Source)
- Quản lý yêu cầu chứng nhận riêng biệt (NADCAP, v.v.) đối với nhà cung cấp quy trình đặc biệt
- Xây dựng hệ thống kiểm soát nhà cung cấp để ngăn chặn sự xâm nhập của linh kiện giả mạo
- **Phản ánh hành động khắc phục CAR-009 (chưa lập ASL, không có lịch sử đánh giá/lựa chọn/tái đánh giá nhà cung cấp)**

> **Kết nối CAR-009**: Trong phân tích khoảng cách, đã xác định "Chưa lập ASL (Danh sách nhà cung cấp được phê duyệt), không có lịch sử đánh giá/lựa chọn/tái đánh giá nhà cung cấp" là không phù hợp Major. Kết quả phân tích Is-Is Not xác nhận nguyên nhân gốc rễ là việc lựa chọn nhà cung cấp chỉ dựa trên giá cả/tiến độ và hệ thống đánh giá dựa trên chất lượng chưa được thiết lập. Quy trình này kết nối với QP-808 (quản lý nhà cung cấp bên ngoài) để quy định toàn bộ vòng đời ASL.

> **Tham khảo**: Các vấn đề chung về quản lý nhà cung cấp bên ngoài như lựa chọn nhà cung cấp ban đầu, tiêu chí đánh giá, phương pháp tái đánh giá được quy định trong QP-808. Quy trình này tập trung vào **đăng ký, quản lý trạng thái, thay đổi/loại bỏ ASL** dựa trên kết quả đánh giá của QP-808.

---

# 2. Phạm vi áp dụng

Quy trình này áp dụng cho quản lý ASL của tất cả nhà cung cấp bên ngoài cung cấp sản phẩm, linh kiện, nguyên liệu thô, quy trình gia công bên ngoài và dịch vụ cho M&C Electronics VINA.

| Phân loại | Đối tượng áp dụng | Ghi chú |
|-----------|------------------|---------|
| Nhà cung cấp nguyên liệu thô | Nhà cung cấp vật liệu trực tiếp như kim loại, nhựa, linh kiện điện tử | Bắt buộc chứng nhận vật liệu hàng không vũ trụ (Mill Cert.) |
| Nhà cung cấp linh kiện | Nhà cung cấp linh kiện mua, tiêu chuẩn phẩm (Fastener, v.v.) | Xác nhận yêu cầu hạng hàng không vũ trụ |
| Nhà cung cấp gia công bên ngoài | Nhà gia công bên ngoài như gia công cơ khí, kim loại tấm | Cần xác nhận năng lực quy trình |
| Nhà cung cấp quy trình đặc biệt | Mạ, nhiệt luyện, kiểm tra không phá hủy (NDT), hàn, sơn, v.v. | Yêu cầu chứng nhận riêng biệt như NADCAP (tham chiếu §11) |
| Dịch vụ hiệu chuẩn | Nhà cung cấp hiệu chuẩn thiết bị đo lường | Cần công nhận ISO/IEC 17025 |
| Logistics/vận chuyển | Nhà vận chuyển sản phẩm hàng không vũ trụ | Có đáp ứng yêu cầu đóng gói/vận chuyển không |

**Loại trừ**:
- Nhà cung cấp dịch vụ gián tiếp không ảnh hưởng đến chất lượng sản phẩm như văn phòng phẩm, bảo trì cơ sở vật chất
- Tuy nhiên, đưa vào đối tượng quản lý ASL nếu QMR phán định có ảnh hưởng chất lượng

---

# 3. Tài liệu/tiêu chuẩn tham chiếu

| Tài liệu/Tiêu chuẩn | Nội dung |
|---------------------|----------|
| AS9100D Rev D | Yêu cầu hệ thống quản lý chất lượng hàng không vũ trụ (8.4.1, 8.4.2, 8.4.3) |
| AS9120B | Yêu cầu hệ thống quản lý chất lượng nhà phân phối hàng không vũ trụ |
| AS6081 | Linh kiện giả mạo/không được ủy quyền - Phòng ngừa gian lận linh kiện điện tử |
| AS6174 | Giảm thiểu rủi ro linh kiện giả mạo (nguồn cung ngoài OEM) |
| AC7004 (NADCAP) | Yêu cầu chung chứng nhận quy trình đặc biệt hàng không vũ trụ |
| SAE AS9102 | Kiểm tra bộ phận đầu tiên hàng không vũ trụ (First Article Inspection) |
| QM-001 | Sổ tay chất lượng §8.4 Quản lý nhà cung cấp bên ngoài |
| QP-808 | Quy trình lựa chọn/đánh giá/quản lý nhà cung cấp bên ngoài |
| QP-802 | Quy trình quản lý rủi ro vận hành (bao gồm FMEA) |
| QP-804 | Quy trình quản lý an toàn sản phẩm/dịch vụ |
| QP-818 | Quy trình quản lý đầu ra không phù hợp |
| QP-1001 | Quy trình quản lý không phù hợp/hành động khắc phục |

---

# 4. Thuật ngữ và định nghĩa

| Thuật ngữ | Định nghĩa |
|-----------|-----------|
| ASL (Approved Supplier List) | Danh sách nhà cung cấp được phê duyệt — Danh sách chính thức các nhà cung cấp mà M&C Electronics VINA đã đánh giá năng lực chất lượng và phê duyệt. Chỉ cho phép đặt hàng mua cho nhà cung cấp đăng ký trong ASL |
| QVL (Qualified Vendor List) | Danh sách nhà cung cấp đủ điều kiện — Danh sách nhà cung cấp được công nhận bởi khách hàng hoặc tiêu chuẩn ngành. Đôi khi được sử dụng như khái niệm cấp trên của ASL |
| Approved (Phê duyệt) | Hạng cao nhất trong trạng thái đăng ký ASL. Nhà cung cấp vượt qua đánh giá ban đầu và cung cấp thử nghiệm, có thể đặt hàng không giới hạn |
| Conditional (Phê duyệt có điều kiện) | Nhà cung cấp chỉ được phép đặt hàng trong điều kiện cụ thể (giới hạn hạng mục, giới hạn số lượng, kiểm tra bổ sung, v.v.). Nhà cung cấp trong giai đoạn cung cấp thử nghiệm hoặc đang thực hiện hành động khắc phục |
| Probation (Quan sát) | Nhà cung cấp ở trạng thái cảnh báo do hiệu suất chất lượng/tiến độ giảm. Chuyển sang Suspended hoặc Removed nếu không đạt trong thời hạn cải tiến |
| Suspended (Tạm dừng) | Nhà cung cấp bị tạm dừng đặt hàng mới do lý do sự cố chất lượng nghiêm trọng, chứng nhận hết hiệu lực, v.v. Đơn đặt hàng hiện tại (In-progress) được quyết định sau khi đánh giá rủi ro |
| Removed (Loại bỏ/Xóa) | Nhà cung cấp bị xóa hoàn toàn khỏi ASL. Cấm tất cả đặt hàng cho nhà cung cấp đó. Khi đăng ký lại phải thực hiện lại từ đánh giá ban đầu |
| Customer-Directed Source | Nhà cung cấp mà khách hàng bắt buộc phải sử dụng. Có nghĩa vụ sử dụng bất kể kết quả đánh giá của công ty, nhưng cũng đăng ký và quản lý trong ASL của công ty |
| Customer-Approved Source | Nhà cung cấp có trong danh sách nhà cung cấp được khách hàng phê duyệt trước (QVL của khách hàng, v.v.). Xác nhận và duy trì trạng thái phê duyệt của khách hàng khi đăng ký ASL của công ty |
| OEM/OCM | Original Equipment Manufacturer / Original Component Manufacturer. Nhà sản xuất gốc của linh kiện |
| Nhà phân phối được ủy quyền (Authorized Distributor) | Kênh phân phối được OCM/OEM chính thức ủy quyền. Nguồn cung ưu tiên để giảm thiểu rủi ro linh kiện giả mạo |
| Quy trình đặc biệt (Special Process) | Quy trình cần có chứng nhận trước vì không thể xác nhận đầu ra bằng giám sát hoặc đo lường tiếp theo (ví dụ: hàn, mạ, nhiệt luyện, NDT, sơn) |
| NADCAP | National Aerospace and Defense Contractors Accreditation Program — Chương trình chứng nhận quốc tế quy trình đặc biệt hàng không vũ trụ |
| Flow-down Requirements | Yêu cầu chất lượng/kỹ thuật/quy định cần phải truyền đạt (lưu chuyển) từ khách hàng đến công ty, từ công ty đến nhà cung cấp |

---

# 5. Trách nhiệm và quyền hạn

| Vai trò | Trách nhiệm |
|---------|------------|
| **Giám đốc (Director / Choi Byoung Youn)** | Phê duyệt cuối cùng đăng ký ASL mới; Phê duyệt cuối cùng loại bỏ nhà cung cấp (Removed); Phê duyệt cuối cùng đăng ký hệ thống G-Ware |
| **Đại diện lãnh đạo chất lượng (QMR)** | Phụ trách tổng hợp hệ thống quản lý ASL; Thiết lập hệ thống đánh giá chất lượng nhà cung cấp; Báo cáo tình trạng ASL trong xem xét lãnh đạo |
| **Trưởng bộ phận mua hàng (Đặng Hoàng Hoa)** | Phụ trách vận hành thực tế ASL (PUR.04.05.03); Thu thập thông tin ban đầu nhà cung cấp và yêu cầu đánh giá; Xác nhận trạng thái đăng ký ASL khi đặt hàng; Cập nhật thông tin nhà cung cấp; Soạn thảo báo cáo duy trì/loại bỏ nhà cung cấp |
| **Bộ phận chất lượng (Bộ phận Chất lượng)** | Đánh giá năng lực chất lượng nhà cung cấp (kết nối QP-808); Phân tích hiệu suất nhà cung cấp dựa trên dữ liệu kiểm tra đầu vào (IQC); Thực hiện kiểm toán chất lượng hiện trường nhà cung cấp (QPA - PUR.04.00.07); Xác nhận hiệu quả cải tiến nhà cung cấp hạng C và thông báo kết quả cuối cùng cho bộ phận mua hàng |
| **Nhân viên bộ phận mua hàng (Bùi Khánh Ly và các nhân viên khác)** | Duy trì/cập nhật cơ sở dữ liệu ASL (PUR.04.05.03); Thu thập và quản lý chứng nhận·biên bản thử nghiệm nhà cung cấp; Thu thập phiếu xác nhận thông tin nhà cung cấp (PUR.04.00.05); Đầu mối liên lạc nhà cung cấp; Quản lý hồ sơ đánh giá hàng tháng (PUR.04.02.04) |
| **Bộ phận kinh doanh (Bộ phận Kinh doanh)** | Truyền đạt nội bộ thông tin nhà cung cấp do khách hàng chỉ định (NCCCĐ); Xác nhận và truyền đạt yêu cầu QVL/ASL của khách hàng |

### 5.1 Ma trận quyền ra quyết định liên quan đến ASL

| Vấn đề ra quyết định | Đề xuất | Xem xét | Phê duyệt |
|---------------------|---------|---------|----------|
| Đăng ký ASL mới (Approved) | Trưởng bộ phận mua hàng | Trưởng bộ phận chất lượng | QMR |
| Đăng ký ASL mới (Conditional) | Trưởng bộ phận mua hàng | Trưởng bộ phận chất lượng | QMR |
| Thay đổi trạng thái: Approved → Conditional | Trưởng bộ phận chất lượng | Trưởng bộ phận mua hàng | QMR |
| Thay đổi trạng thái: → Probation | Trưởng bộ phận chất lượng | Trưởng bộ phận mua hàng | QMR |
| Thay đổi trạng thái: → Suspended | Trưởng bộ phận chất lượng | Trưởng bộ phận mua hàng | QMR |
| Thay đổi trạng thái: → Removed | Trưởng bộ phận chất lượng | Trưởng bộ phận mua hàng | QMR + Tổng giám đốc |
| Đăng ký nhà cung cấp do khách hàng chỉ định | Trưởng bộ phận kinh doanh | Trưởng bộ phận chất lượng | QMR |
| Đăng ký nhà cung cấp quy trình đặc biệt | Trưởng bộ phận mua hàng | Trưởng bộ phận chất lượng + Trưởng bộ phận kỹ thuật | QMR |
| Đăng ký lại ASL (Removed → Đánh giá mới) | Trưởng bộ phận mua hàng | Trưởng bộ phận chất lượng | QMR + Tổng giám đốc |

---

# 6. Tiêu chí và thủ tục đăng ký ASL

## 6.1 Tổng quan quy trình đăng ký ASL

Đăng ký ASL tiến hành qua 3 giai đoạn sau:

```
[Giai đoạn 1: Đánh giá ban đầu]  →  [Giai đoạn 2: Cung cấp thử nghiệm]  →  [Giai đoạn 3: Đăng ký chính thức]
   (Kết nối QP-808)                        (Conditional)                           (Approved)
```

## 6.2 Giai đoạn 1: Đánh giá ban đầu

Thực hiện đánh giá ban đầu nhà cung cấp bên ngoài theo QP-808. Yêu cầu tối thiểu để đăng ký ASL như sau:

### 6.2.1 Hạng mục đánh giá bắt buộc

| Hạng mục đánh giá | Yêu cầu tối thiểu | Phương pháp đánh giá |
|------------------|------------------|---------------------|
| Chứng nhận hệ thống quản lý chất lượng | Từ ISO 9001 trở lên (hàng không vũ trụ: ưu tiên AS9100D) | Xác nhận bản sao chứng nhận |
| Ổn định kinh doanh | Hoạt động kinh doanh ít nhất 2 năm gần đây, tình trạng tài chính lành mạnh | Đăng ký kinh doanh, báo cáo tài chính |
| Năng lực kỹ thuật | Có năng lực thực hiện hạng mục/quy trình tương ứng | Danh sách thiết bị, chứng chỉ kỹ thuật, thành tích |
| Lịch sử chất lượng | Dữ liệu thành tích chất lượng với khách hàng khác | Tỷ lệ không phù hợp, lịch sử khiếu nại khách hàng |
| Lịch sử tiến độ | Tỷ lệ tuân thủ tiến độ từ 90% trở lên (thành tích của công ty/công ty khác) | Dữ liệu thành tích tiến độ |
| Phòng ngừa linh kiện giả mạo | Có hệ thống phòng ngừa linh kiện giả mạo (tham chiếu §12) | Danh sách kiểm tra tự kiểm tra hoặc xác nhận hiện trường |
| Tuân thủ quy định | Tuân thủ yêu cầu pháp lý như kiểm soát xuất khẩu, quy định môi trường | Giấy phép/chứng nhận liên quan |

### 6.2.2 Thực hiện đánh giá ban đầu

1. **Bộ phận mua hàng**: Thu thập thông tin cơ bản và tài liệu điều kiện nhà cung cấp → Soạn thảo QF-809-01 (Đơn đăng ký ASL)
2. **Bộ phận chất lượng**: Thực hiện đánh giá năng lực chất lượng theo QP-808
   - Bắt buộc đánh giá tài liệu (Documentation Review)
   - Kiểm toán hiện trường (On-site Audit): Bắt buộc khi thuộc ít nhất 1 trong các điều kiện sau:
     - Nhà cung cấp linh kiện liên quan đến an toàn hàng không vũ trụ (Safety Critical Part)
     - Nhà cung cấp thực hiện quy trình đặc biệt
     - Nhà cung cấp trong top 20% giá trị mua hàng hàng năm
     - Nhà cung cấp có lịch sử vấn đề chất lượng trước đây
3. **Bộ phận kỹ thuật**: Đánh giá tính phù hợp kỹ thuật (khi cần thiết)
4. **Trưởng bộ phận chất lượng**: Xem xét kết quả đánh giá tổng hợp → Soạn thảo ý kiến đề nghị đăng ký

### 6.2.3 Tiêu chí điểm đánh giá ban đầu

| Điểm đánh giá tổng hợp | Phán định | Biện pháp tiếp theo |
|------------------------|----------|---------------------|
| Từ 80 điểm trở lên | Phù hợp (Tiến hành cung cấp thử nghiệm) | Thực hiện cung cấp thử nghiệm giai đoạn 2 |
| 60~79 điểm | Phù hợp có điều kiện | Tái đánh giá sau khi yêu cầu hành động khắc phục; Cung cấp thử nghiệm khi vượt qua tái đánh giá |
| Dưới 60 điểm | Không phù hợp | Không thể đăng ký; Có thể nộp lại sau 6 tháng |

## 6.3 Giai đoạn 2: Cung cấp thử nghiệm (Trạng thái Conditional)

Thực hiện cung cấp thử nghiệm (Trial Period) đối với nhà cung cấp vượt qua đánh giá ban đầu.

### 6.3.1 Điều kiện cung cấp thử nghiệm

| Hạng mục | Tiêu chí |
|----------|---------|
| Thời gian | Thời điểm sớm hơn giữa 6 tháng từ ngày giao hàng đầu tiên hoặc 3 lần giao hàng |
| Trạng thái ASL | **Conditional** |
| Kiểm tra đầu vào | Áp dụng kiểm tra toàn bộ (Full Inspection) |
| Giới hạn đặt hàng | Chỉ một hạng mục, không thể sử dụng như nguồn cung cấp chính (vận hành như nguồn thứ 2) |
| Giám sát | Đánh giá hiệu suất chất lượng/tiến độ 1 lần/tháng |

### 6.3.2 Phán định cung cấp thử nghiệm

Phán định theo tiêu chí dưới đây sau khi kết thúc thời gian cung cấp thử nghiệm:

| Tiêu chí phán định | Chuyển sang Approved | Gia hạn Conditional | Hủy bỏ đăng ký |
|-------------------|---------------------|--------------------|--------------------|
| Tỷ lệ đạt kiểm tra đầu vào | ≥ 98% | 95~97% | < 95% |
| Tỷ lệ tuân thủ tiến độ | ≥ 95% | 90~94% | < 90% |
| Đáp ứng hành động khắc phục | Trả lời trong 10 ngày làm việc sau yêu cầu | 10~20 ngày làm việc | Không trả lời hoặc vượt 20 ngày làm việc |
| Sự cố chất lượng nghiêm trọng | 0 lần | 0 lần | Từ 1 lần trở lên |

- **Gia hạn Conditional**: Cho phép tối đa 1 lần (thêm 6 tháng). Hủy bỏ đăng ký nếu không đạt sau gia hạn lần 2
- **Hủy bỏ đăng ký**: Xử lý Removed trong ASL, thông báo bằng văn bản cho nhà cung cấp

## 6.4 Giai đoạn 3: Đăng ký chính thức (Trạng thái Approved)

Chuyển đổi nhà cung cấp vượt qua phán định cung cấp thử nghiệm sang trạng thái Approved chính thức.

1. **Trưởng bộ phận chất lượng**: Tổng hợp kết quả đánh giá cung cấp thử nghiệm → Soạn thảo đề xuất đăng ký chính thức
2. **Trưởng bộ phận mua hàng**: Đề xuất thay đổi đăng ký ASL (Conditional → Approved)
3. **QMR**: Phê duyệt cuối cùng
4. **Nhân viên bộ phận mua hàng**: Cập nhật cơ sở dữ liệu ASL → Gửi thông báo phê duyệt cho nhà cung cấp

---

# 7. Phân loại trạng thái ASL

## 7.1 Định nghĩa trạng thái và tiêu chí vận hành

| Trạng thái | Mã | Có thể đặt hàng không | Mức độ kiểm tra đầu vào | Mô tả |
|-----------|----|-----------------------|------------------------|-------|
| **Approved** | A | Có thể đặt hàng không giới hạn | Kiểm tra lấy mẫu bình thường | Đáp ứng tất cả tiêu chí đánh giá, hiệu suất tốt |
| **Conditional** | C | Có thể đặt hàng có điều kiện | Kiểm tra toàn bộ hoặc kiểm tra tăng cường | Đang trong giai đoạn cung cấp thử nghiệm hoặc trạng thái áp đặt điều kiện cụ thể |
| **Probation** | P | Chỉ cho phép đơn đặt hàng hiện tại (hạn chế đặt hàng mới) | Kiểm tra toàn bộ | Trạng thái cảnh báo giảm hiệu suất, đặt thời hạn cải tiến |
| **Suspended** | S | Dừng đặt hàng mới | Không áp dụng (dừng đặt hàng) | Xảy ra lý do nghiêm trọng, đơn đặt hàng hiện tại quyết định sau khi đánh giá rủi ro |
| **Removed** | R | Cấm tất cả đặt hàng | Không áp dụng | Xóa hoàn toàn khỏi ASL, khi đăng ký lại phải thực hiện lại từ đánh giá ban đầu |

## 7.2 Ma trận chuyển đổi trạng thái

```
                    Vận hành bình thường
                           │
                       ┌───┴───┐
                       │       │
                  Approved  Conditional
                   (A)       (C)
                    │         │
                    ├─────────┤
                    │         │
               Hiệu suất   Tiếp tục
               giảm        không đạt
                    │         │
                    ▼         ▼
                Probation ←───┘
                   (P)
                    │
              ┌─────┴─────┐
              │           │
           Hoàn thành   Không cải tiến/
           cải tiến     Sự cố nghiêm trọng
              │           │
              ▼           ▼
          Approved    Suspended
           (A)          (S)
                         │
                   ┌─────┴─────┐
                   │           │
               Hoàn thành   Không thể
               khắc phục    khắc phục
                   │           │
                   ▼           ▼
               Conditional   Removed
                (C)           (R)
```

## 7.3 Lý do chuyển đổi trạng thái

### 7.3.1 Lý do chuyển đổi Approved → Probation
- Điểm tổng hợp dưới 70 điểm trong tái đánh giá định kỳ
- Tỷ lệ đạt kiểm tra đầu vào hàng quý dưới 95%
- Tỷ lệ tuân thủ tiến độ hàng quý dưới 90%
- Tái phát không phù hợp cùng loại (từ 3 lần trở lên trong quý)
- Không thực hiện trong hạn đối với yêu cầu hành động khắc phục

### 7.3.2 Lý do chuyển đổi Approved/Conditional/Probation → Suspended
- Xảy ra Không phù hợp liên quan đến an toàn (Safety-Related Nonconformity)
- Chứng nhận hệ thống quản lý chất lượng hết hiệu lực/bị đình chỉ
- Chứng nhận NADCAP và chứng nhận quy trình đặc biệt khác hết hạn/bị đình chỉ (đối với nhà cung cấp quy trình đặc biệt)
- Nghi ngờ hoặc xác nhận cung cấp linh kiện giả mạo/không được ủy quyền
- Yêu cầu dừng sử dụng nhà cung cấp từ khách hàng
- Vi phạm nghiêm trọng quy định pháp luật (kiểm soát xuất khẩu, quy định môi trường, v.v.)
- Thái độ không hợp tác của nhà cung cấp (từ chối kiểm toán, hoàn toàn không thực hiện hành động khắc phục, v.v.)

### 7.3.3 Lý do chuyển đổi → Removed
- Không hoàn thành hành động khắc phục trong 60 ngày khi đang ở trạng thái Suspended
- Xác nhận cung cấp linh kiện giả mạo (Removed ngay lập tức)
- Nhà cung cấp giải thể/phá sản
- Chỉ thị cấm sử dụng vĩnh viễn từ khách hàng
- Quyết định kết thúc giao dịch với phê duyệt của QMR và Tổng giám đốc

---

# 8. Duy trì ASL

## 8.1 Tái đánh giá định kỳ

### 8.1.1 Chu kỳ tái đánh giá

| Trạng thái ASL | Chu kỳ tái đánh giá | Phương pháp đánh giá |
|---------------|--------------------|--------------------|
| Approved | 12 tháng | Đánh giá tài liệu + phân tích dữ liệu hiệu suất |
| Approved (linh kiện liên quan đến an toàn) | 12 tháng | Đánh giá tài liệu + kiểm toán hiện trường |
| Conditional | 6 tháng | Đánh giá tài liệu + phân tích dữ liệu hiệu suất |
| Probation | 3 tháng | Đánh giá tài liệu + phân tích dữ liệu hiệu suất + kiểm toán hiện trường (khi cần) |

### 8.1.2 Hạng mục tái đánh giá

| Lĩnh vực đánh giá | Hạng mục đánh giá | Điểm |
|------------------|------------------|------|
| Chất lượng (40%) | Tỷ lệ đạt kiểm tra đầu vào, tỷ lệ lỗi trong quy trình, không phù hợp liên quan đến khiếu nại khách hàng, mức độ thực hiện hành động khắc phục | 40 điểm |
| Tiến độ (25%) | Tỷ lệ tuân thủ tiến độ, năng lực đáp ứng khẩn cấp, có thông báo trước về chậm tiến độ không | 25 điểm |
| Kỹ thuật (15%) | Năng lực hỗ trợ kỹ thuật, đáp ứng thay đổi thiết kế, hoạt động cải tiến quy trình | 15 điểm |
| Quản lý (10%) | Duy trì chứng nhận QMS, ổn định tài chính, tính liên tục kinh doanh | 10 điểm |
| Hợp tác (10%) | Tính kịp thời liên lạc, hợp tác kiểm toán, tham gia hoạt động cải tiến | 10 điểm |

### 8.1.3 Tiêu chí phán định tái đánh giá

| Điểm tổng hợp | Hạng | Biện pháp ASL |
|--------------|------|--------------|
| Từ 85 điểm trở lên | A (Xuất sắc) | Duy trì Approved, có thể xem xét nới lỏng kiểm tra đầu vào |
| 70~84 điểm | B (Tốt) | Duy trì Approved, thông báo các khuyến nghị cải tiến |
| 60~69 điểm | C (Chưa đạt) | Chuyển sang Probation, yêu cầu hành động khắc phục |
| Dưới 60 điểm | D (Không phù hợp) | Chuyển sang Suspended, bắt đầu đảm bảo nguồn cung thay thế |

## 8.2 Giám sát hiệu suất

### 8.2.1 Hạng mục giám sát hàng tháng

Bộ phận mua hàng tổng hợp các hạng mục sau hàng tháng và báo cáo cho trưởng bộ phận chất lượng:

| Hạng mục giám sát | Nguồn dữ liệu | Phương pháp tính |
|------------------|--------------|-----------------|
| Tỷ lệ đạt kiểm tra đầu vào | Hồ sơ kiểm tra đầu vào (QF-809-03) | (Số lô đạt / Tổng số lô kiểm tra) × 100% |
| Tỷ lệ tuân thủ tiến độ | Hồ sơ đặt hàng mua và nhập hàng | (Số lần nhập trong hạn / Tổng số đặt hàng) × 100% |
| Số lần không phù hợp | Báo cáo không phù hợp (QP-818) | Số lần không phù hợp hàng tháng theo từng nhà cung cấp |
| Tỷ lệ đáp ứng hành động khắc phục | Hồ sơ CAR (QP-1001) | (Số lần trả lời trong hạn / Tổng số CAR phát hành) × 100% |

### 8.2.2 Xem xét hiệu suất hàng quý

Tổ chức xem xét hiệu suất nhà cung cấp 1 lần/quý do trưởng bộ phận chất lượng chủ trì:
- Người tham dự: Trưởng bộ phận mua hàng, trưởng bộ phận chất lượng, trưởng bộ phận kỹ thuật (khi cần)
- Nội dung chính:
  - Tổng hợp hiệu suất hàng quý theo từng nhà cung cấp (chất lượng/tiến độ/đáp ứng)
  - Nhận dạng nhà cung cấp cần thay đổi trạng thái ASL
  - Biện pháp quản lý nhà cung cấp rủi ro
  - Các nội dung phản ánh phản hồi khách hàng
- Kết quả: Soạn thảo QF-809-04 (Báo cáo xem xét hiệu suất nhà cung cấp hàng quý) → Báo cáo QMR

### 8.2.3 Quản lý ngày hết hạn chứng nhận

Nhân viên bộ phận mua hàng theo dõi ngày hết hạn các chứng nhận sau của nhà cung cấp đăng ký ASL:
- Chứng nhận ISO 9001 / AS9100D
- Chứng nhận NADCAP (nhà cung cấp quy trình đặc biệt)
- Công nhận ISO/IEC 17025 (nhà cung cấp hiệu chuẩn)
- Các chứng nhận khác theo yêu cầu khách hàng

Thông báo nhà cung cấp gia hạn **90 ngày trước** khi hết hạn chứng nhận; Báo cáo trưởng bộ phận chất lượng **30 ngày trước** khi chưa gia hạn để xem xét thay đổi trạng thái ASL.

---

# 9. Quản lý thay đổi ASL

## 9.1 Loại thay đổi ASL

| Loại thay đổi | Mô tả | Quyền phê duyệt |
|--------------|-------|----------------|
| Thay đổi cấp trạng thái (tăng) | Conditional → Approved, Probation → Approved | QMR |
| Thay đổi cấp trạng thái (giảm) | Approved → Probation, v.v. | QMR |
| Xử lý Suspended | Dừng đặt hàng mới | QMR |
| Xử lý Removed | Xóa hoàn toàn ASL | QMR + Tổng giám đốc |
| Thay đổi phạm vi cung cấp | Thêm hoặc hạn chế hạng mục/quy trình | QMR |
| Thay đổi thông tin nhà cung cấp | Tên công ty, địa chỉ, liên hệ, chứng nhận, v.v. | Trưởng bộ phận mua hàng |

## 9.2 Thủ tục thay đổi ASL

1. **Đề xuất thay đổi**: Bộ phận liên quan (bộ phận mua hàng hoặc bộ phận chất lượng) soạn thảo QF-809-05 (Yêu cầu thay đổi ASL)
2. **Lập tài liệu lý do và căn cứ**: Đính kèm lý do thay đổi, dữ liệu liên quan (hồ sơ hiệu suất, báo cáo không phù hợp, báo cáo kiểm toán, v.v.)
3. **Xem xét**: Người xem xét theo ma trận quyền hạn §5.1 xem xét
4. **Phê duyệt**: Người phê duyệt theo ma trận quyền hạn §5.1 phê duyệt
5. **Thi hành**: Cập nhật cơ sở dữ liệu ASL, thông báo bộ phận liên quan
6. **Thông báo nhà cung cấp**: Thông báo bằng văn bản cho nhà cung cấp khi thay đổi trạng thái (bắt buộc đối với Probation, Suspended, Removed)

## 9.3 Đăng ký lại nhà cung cấp Removed

Khi nhà cung cấp ở trạng thái Removed muốn đăng ký lại:

1. **Ít nhất 12 tháng** kể từ khi xử lý Removed (không thể đăng ký lại nếu lý do là linh kiện giả mạo)
2. Nhà cung cấp nộp bằng chứng hoàn thành phân tích nguyên nhân gốc rễ và hành động khắc phục
3. **Thực hiện lại toàn bộ quá trình từ đánh giá ban đầu (§6.2)**
4. Cần phê duyệt chung của QMR và Tổng giám đốc
5. Khi đăng ký lại bắt đầu từ trạng thái **Conditional** (không thể trực tiếp Approved)
6. Mở rộng thời gian cung cấp thử nghiệm áp dụng là **12 tháng hoặc 6 lần giao hàng**

## 9.4 Sử dụng nhà cung cấp khẩn cấp (nhà cung cấp không có ASL)

Trường hợp ngoại lệ không thể tránh khỏi việc mua hàng từ nhà cung cấp chưa đăng ký ASL:

| Hạng mục | Yêu cầu |
|----------|---------|
| Phê duyệt | Bắt buộc phê duyệt bằng văn bản của QMR (QF-809-06, Phê duyệt sử dụng khẩn cấp nhà cung cấp không có ASL) |
| Lý do | Nhà cung cấp ASL hiện có không thể cung cấp, yêu cầu khẩn cấp của khách hàng, thay thế sản phẩm ngừng sản xuất, v.v. |
| Kiểm tra | Bắt buộc kiểm tra toàn bộ lô hàng giao tương ứng |
| Thời hạn | Chỉ giới hạn cho đặt hàng một lần. Thực hiện thủ tục đăng ký ASL khi tiếp tục giao dịch |
| Hồ sơ | Lưu giữ hồ sơ lý do sử dụng khẩn cấp, đánh giá rủi ro, kết quả kiểm tra |
| Thông báo khách hàng | Cần thông báo và phê duyệt trước của khách hàng đối với linh kiện liên quan đến an toàn |

---

# 10. Quản lý nhà cung cấp do khách hàng chỉ định và nhà cung cấp được khách hàng phê duyệt

## 10.1 Nhà cung cấp do khách hàng chỉ định (Customer-Directed Source)

Khi khách hàng bắt buộc (Directed) sử dụng nhà cung cấp cụ thể:

### 10.1.1 Thủ tục đăng ký
1. **Bộ phận kinh doanh**: Nhận dạng thông tin nhà cung cấp do khách hàng chỉ định từ hợp đồng/đơn đặt hàng → Truyền đạt cho bộ phận mua hàng
2. **Bộ phận mua hàng**: Đánh dấu "Khách hàng chỉ định" trong QF-809-01 (Đơn đăng ký ASL) và yêu cầu đăng ký
3. **Bộ phận chất lượng**: Thực hiện đánh giá ban đầu trong phạm vi có thể (§6.2)
4. **Phê duyệt QMR**: Đăng ký vào ASL (trạng thái: Approved hoặc Conditional)
5. **Đặc biệt**: Dù kết quả đánh giá ban đầu không phù hợp, vẫn đăng ký nhà cung cấp do khách hàng chỉ định, nhưng **lập tài liệu ghi chép rủi ro** và thông báo cho khách hàng

### 10.1.2 Yêu cầu quản lý
- Bắt buộc đánh dấu "Customer-Directed" trong ASL
- Có thể đặt hàng bất kể kết quả đánh giá của công ty, nhưng áp dụng tiêu chuẩn kiểm tra đầu vào của công ty
- Thông báo ngay lập tức cho khách hàng khi xảy ra vấn đề chất lượng
- Đưa vào đối tượng tái đánh giá định kỳ (chia sẻ kết quả với khách hàng)
- Áp dụng tiêu chuẩn giống nhà cung cấp thông thường khi hủy bỏ chỉ định của khách hàng

## 10.2 Nhà cung cấp được khách hàng phê duyệt (Customer-Approved Source)

Nhà cung cấp có trong danh sách nhà cung cấp được khách hàng phê duyệt trước (QVL, v.v.):

### 10.2.1 Thủ tục đăng ký
1. Xác nhận danh sách nhà cung cấp tương ứng khi nhận QVL/ASL của khách hàng
2. Thực hiện thủ tục đăng ký ASL của công ty (§6) — Có thể gia điểm cho thực tế phê duyệt của khách hàng
3. Ghi "Customer-Approved" và số/ngày phê duyệt của khách hàng trong ASL

### 10.2.2 Yêu cầu quản lý
- Duy trì tính nhất quán bằng cách đối chiếu ASL của công ty khi QVL của khách hàng được cập nhật
- Xem xét lại ngay trạng thái ASL đối với nhà cung cấp bị xóa khỏi QVL của khách hàng
- Chia sẻ dữ liệu hiệu suất nhà cung cấp của công ty khi khách hàng yêu cầu

---

# 11. ASL nhà cung cấp quy trình đặc biệt

## 11.1 Loại quy trình đặc biệt

| Quy trình đặc biệt | Chứng nhận/Điều kiện tương ứng | Ghi chú |
|-------------------|-------------------------------|---------|
| Mạ (Plating) | NADCAP Chemical Processing | Tiêu chuẩn AC7108 |
| Nhiệt luyện (Heat Treatment) | NADCAP Heat Treating | Tiêu chuẩn AC7102 |
| Kiểm tra không phá hủy (NDT) | NADCAP Non-Destructive Testing | Tiêu chuẩn AC7114 |
| Hàn (Welding) | NADCAP Welding | Tiêu chuẩn AC7110 |
| Sơn/phủ (Coating) | NADCAP Coatings | Tiêu chuẩn AC7109 |
| Đúc ép (Molding) | Xác nhận quy trình (Process Validation) | Tiêu chuẩn của công ty hoặc khách hàng |

## 11.2 Yêu cầu bổ sung đăng ký nhà cung cấp quy trình đặc biệt

Ngoài yêu cầu đăng ký ASL chung (§6), phải đáp ứng thêm các yêu cầu sau:

| Yêu cầu bổ sung | Mô tả |
|----------------|-------|
| Có chứng nhận NADCAP | Khi có yêu cầu khách hàng, bắt buộc có chứng nhận NADCAP cho quy trình tương ứng. Ưu tiên NADCAP ngay cả khi không có yêu cầu khách hàng |
| Chứng nhận quy trình (Process Approval) | Hoàn thành chứng nhận quy trình (PQ, Process Qualification) bởi khách hàng hoặc công ty |
| Chứng nhận điều kiện nhân công | Xác nhận bằng chứng chứng nhận điều kiện của nhân lực thực hiện quy trình đặc biệt tương ứng |
| Thiết bị thử nghiệm | Xác nhận có thiết bị thử nghiệm/đo lường cần thiết để xác nhận kết quả quy trình tương ứng |
| Thông báo thay đổi quy trình | Ký kết hợp đồng nghĩa vụ thông báo trước khi thay đổi quy trình, thiết bị, vật liệu, nhân lực |

## 11.3 Giám sát nhà cung cấp quy trình đặc biệt

- Xác nhận hàng quý ngày hết hạn và tình trạng gia hạn chứng nhận NADCAP
- Nhà cung cấp NADCAP Merit hoặc chứng nhận 18 tháng: Giám sát 1 lần/năm
- Nhà cung cấp NADCAP chứng nhận 12 tháng hoặc không có NADCAP: Kiểm toán hiện trường hoặc xác nhận bằng tài liệu 1 lần/6 tháng
- Thực hiện ngay kiểm toán hiện trường khi tiếp nhận vấn đề chất lượng liên quan đến quy trình đặc biệt từ khách hàng

---

# 12. Kết nối phòng ngừa linh kiện giả mạo và ASL

## 12.1 Nguyên tắc phòng ngừa linh kiện giả mạo

Theo yêu cầu AS9100D 8.1.4 và AS6081/AS6174, áp dụng nguyên tắc phòng ngừa linh kiện giả mạo trong toàn bộ quản lý ASL:

1. **Ưu tiên nguồn cung OEM/OCM**: Ưu tiên sử dụng nhà sản xuất gốc hoặc nhà phân phối được ủy quyền khi thu mua linh kiện
2. **Truy xuất lịch sử cung cấp**: Phải có thể truy xuất kênh cung cấp (Supply Chain Traceability) của linh kiện
3. **Kiểm soát nguồn cung không được ủy quyền**: Áp dụng thủ tục xác nhận bổ sung khi sử dụng nguồn cung ngoài OEM/OCM

## 12.2 Đánh giá phòng ngừa linh kiện giả mạo khi đăng ký ASL

| Hạng mục đánh giá | Yêu cầu |
|------------------|---------|
| Kênh thu mua | Xác nhận có mua trực tiếp từ OEM/OCM hoặc nhà phân phối được ủy quyền không |
| Thủ tục phòng ngừa linh kiện giả mạo | Có tự có thủ tục phát hiện/phòng ngừa linh kiện giả mạo không |
| Xác nhận nhập hàng | Thủ tục xác nhận tính xác thực của linh kiện (Visual, Marking, Test, v.v.) |
| Quản lý chứng nhận | Hệ thống quản lý CoC (Chứng nhận phù hợp), Mill Certificate, biên bản thử nghiệm |
| Truy xuất lịch sử | Có thể truy xuất từ xuất xứ linh kiện đến giao hàng cuối cùng không |
| Đào tạo | Có thực hiện đào tạo nhận biết linh kiện giả mạo không |

## 12.3 Kiểm soát sử dụng nguồn cung không được ủy quyền (Unauthorized Source)

Khi không thể tránh khỏi việc thu mua từ nguồn cung không phải nhà phân phối được ủy quyền của OEM/OCM (Independent Distributor, Broker, v.v.):

1. Bắt buộc **phê duyệt trước của QMR**
2. Xác nhận nhà cung cấp nguồn có chứng nhận AS6081 (hoặc hệ thống phòng ngừa linh kiện giả mạo tương đương)
3. Thực hiện **kiểm tra đầu vào bổ sung** cho linh kiện tương ứng:
   - Kiểm tra ngoại quan (Visual Inspection) — Xác nhận ghi nhãn, gói, mã ngày tháng
   - X-ray hoặc thử nghiệm điện (đối với linh kiện điện tử)
   - Xác nhận tính xác thực của CoC, biên bản thử nghiệm
4. Lưu giữ hồ sơ kết quả kiểm tra (tối thiểu 10 năm hoặc thời gian theo yêu cầu khách hàng)
5. Thông báo và phê duyệt trước của khách hàng (khi được ghi rõ trong hợp đồng)

## 12.4 Biện pháp ASL khi phát hiện linh kiện giả mạo

Khi phát hiện linh kiện giả mạo hoặc linh kiện nghi ngờ giả mạo:

1. **Cách ly ngay lập tức**: Cách ly linh kiện tương ứng và toàn bộ cùng lô
2. **Suspended ASL ngay lập tức**: Chuyển ngay trạng thái ASL của nhà cung cấp tương ứng sang Suspended
3. **Thông báo khách hàng**: Thông báo khách hàng và cơ quan có thẩm quyền liên quan (khi áp dụng) trong vòng 24 giờ
4. **Thực hiện điều tra**: Thực hiện điều tra chung với nhà cung cấp hoặc điều tra độc lập
5. **Phán định cuối cùng**:
   - Khi xác nhận giả mạo: Xử lý **Removed ngay lập tức** (dừng giao dịch vĩnh viễn, không thể đăng ký lại)
   - Khi giải quyết nghi ngờ giả mạo: Có thể phục hồi sang Conditional sau khi xác nhận hành động khắc phục
6. **Báo cáo GIDEP**: Báo cáo cơ sở dữ liệu ngành liên quan (GIDEP, v.v.) khi áp dụng

---

# 13. Quản lý hồ sơ

## 13.1 Danh sách hồ sơ liên quan đến ASL

| Tên hồ sơ | Số biểu mẫu | Thời hạn lưu giữ | Bộ phận chịu trách nhiệm |
|-----------|------------|-----------------|--------------------------|
| Đơn đăng ký ASL | QF-809-01 | 10 năm sau khi kết thúc giao dịch | Bộ phận mua hàng |
| Danh sách chính ASL | QF-809-02 | Vĩnh viễn (duy trì bản mới nhất + lưu giữ lịch sử) | Bộ phận mua hàng |
| Hồ sơ giám sát hiệu suất nhà cung cấp | QF-809-03 | 5 năm | Bộ phận chất lượng |
| Báo cáo xem xét hiệu suất nhà cung cấp hàng quý | QF-809-04 | 5 năm | Bộ phận chất lượng |
| Yêu cầu thay đổi ASL | QF-809-05 | 10 năm sau khi kết thúc giao dịch | Bộ phận mua hàng/chất lượng |
| Phê duyệt sử dụng khẩn cấp nhà cung cấp không có ASL | QF-809-06 | 10 năm | Bộ phận mua hàng |
| Báo cáo đánh giá nhà cung cấp | Tham chiếu biểu mẫu QP-808 | 10 năm sau khi kết thúc giao dịch | Bộ phận chất lượng |
| Báo cáo kiểm toán nhà cung cấp | Tham chiếu biểu mẫu QP-808 | 10 năm sau khi kết thúc giao dịch | Bộ phận chất lượng |
| Bản sao chứng nhận nhà cung cấp | — | Ngày hết hạn + 5 năm | Bộ phận mua hàng |
| Hồ sơ điều tra liên quan đến linh kiện giả mạo | — | Lưu giữ vĩnh viễn | Bộ phận chất lượng |

## 13.2 Hạng mục bắt buộc ghi trong Danh sách chính ASL (QF-809-02)

| Hạng mục ghi | Mô tả |
|-------------|-------|
| Mã nhà cung cấp | Mã duy nhất được cấp nội bộ |
| Tên nhà cung cấp (Hàn/Anh/địa phương) | Tên công ty |
| Số đăng ký kinh doanh / Số pháp nhân | Số nhận dạng pháp lý |
| Địa điểm (địa chỉ) | Địa chỉ nhà máy/cơ sở kinh doanh |
| Liên hệ (phụ trách chất lượng) | Người liên hệ về chất lượng |
| Trạng thái ASL | A / C / P / S / R |
| Ngày đăng ký đầu tiên | Ngày đăng ký ASL lần đầu |
| Ngày thay đổi trạng thái hiện tại | Ngày thay đổi trạng thái gần nhất |
| Phạm vi cung cấp | Hạng mục/quy trình có thể cung cấp |
| Có quy trình đặc biệt không | Khi áp dụng: Tên quy trình và số chứng nhận |
| Tình trạng chứng nhận NADCAP | Số chứng nhận, ngày hết hạn |
| Tình trạng chứng nhận QMS | Cơ quan chứng nhận, số chứng nhận, ngày hết hạn |
| Có phải nhà cung cấp do khách hàng chỉ định/phê duyệt không | Có Customer-Directed / Customer-Approved không |
| Điểm đánh giá gần nhất | Điểm tổng hợp đánh giá định kỳ/đặc biệt gần nhất |
| Ngày tái đánh giá định kỳ tiếp theo | Ngày tái đánh giá định kỳ tiếp theo |
| Ghi chú | Điểm đặc biệt (điều kiện, các hạn chế, v.v.) |

## 13.3 Truy cập và bảo mật hồ sơ

- Danh sách chính ASL được quản lý ở hạng **Tài liệu nội bộ (Confidential)**
- Quyền truy cập: QMR, trưởng bộ phận mua hàng, trưởng bộ phận chất lượng, trưởng bộ phận kỹ thuật
- Cấm công bố bên ngoài (cho phép xem xét khi kiểm toán của khách hàng)
- Áp dụng bảo vệ mật khẩu hoặc hạn chế quyền truy cập đối với tệp điện tử

---

# 14. Tài liệu và biểu mẫu liên quan

## 14.1 Quy trình liên quan

| Mã tài liệu | Tên tài liệu | Sự liên quan |
|------------|-------------|-------------|
| QM-001 | Sổ tay chất lượng | §8.4 Quản lý nhà cung cấp bên ngoài |
| QP-808 | Quy trình lựa chọn/đánh giá/quản lý nhà cung cấp bên ngoài | Tiêu chí đánh giá/lựa chọn/tái đánh giá nhà cung cấp |
| QP-802 | Quy trình quản lý rủi ro vận hành (bao gồm FMEA) | Đánh giá rủi ro chuỗi cung ứng |
| QP-804 | Quy trình quản lý an toàn sản phẩm/dịch vụ | Quản lý nhà cung cấp linh kiện liên quan đến an toàn |
| QP-810 | Quy trình quản lý sản xuất/cung cấp dịch vụ | Kết nối quản lý quy trình gia công bên ngoài |
| QP-818 | Quy trình quản lý đầu ra không phù hợp | Xử lý không phù hợp nhà cung cấp |
| QP-1001 | Quy trình quản lý không phù hợp/hành động khắc phục | Yêu cầu hành động khắc phục nhà cung cấp |
| QP-706 | Quy trình quản lý thông tin dạng văn bản | Tiêu chuẩn lưu giữ hồ sơ |

## 14.2 Danh sách biểu mẫu

| Số biểu mẫu | Tên biểu mẫu | Mục đích sử dụng |
|------------|-------------|----------------|
| QF-809-01 | Đơn đăng ký ASL | Yêu cầu đăng ký ASL nhà cung cấp mới |
| QF-809-02 | Danh sách chính ASL | Quản lý tình trạng toàn bộ nhà cung cấp được phê duyệt |
| QF-809-03 | Hồ sơ giám sát hiệu suất nhà cung cấp | Tổng hợp hiệu suất chất lượng/tiến độ hàng tháng |
| QF-809-04 | Báo cáo xem xét hiệu suất nhà cung cấp hàng quý | Kết quả xem xét hiệu suất tổng hợp hàng quý |
| QF-809-05 | Yêu cầu thay đổi ASL | Yêu cầu thay đổi trạng thái/phạm vi ASL |
| QF-809-06 | Phê duyệt sử dụng khẩn cấp nhà cung cấp không có ASL | Phê duyệt sử dụng ngoại lệ nhà cung cấp chưa đăng ký |
| QF-809-07 | Sổ theo dõi chứng nhận nhà cung cấp quy trình đặc biệt | Quản lý ngày hết hạn chứng nhận NADCAP, v.v. |
| QF-809-08 | Sổ quản lý nhà cung cấp do khách hàng chỉ định/phê duyệt | Tình trạng nhà cung cấp do/được từng khách hàng chỉ định/phê duyệt |

---

**Kết thúc tài liệu — QP-809 Rev. 0**
