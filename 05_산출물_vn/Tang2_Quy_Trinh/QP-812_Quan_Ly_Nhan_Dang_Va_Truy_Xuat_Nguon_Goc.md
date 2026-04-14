# Quy Trình Quản Lý Nhận Dạng và Truy Xuất Nguồn Gốc
## Identification and Traceability Management Procedure

| Mục | Nội dung |
|-----|----------|
| Mã tài liệu | QP-812 |
| Số lần sửa đổi | Rev. 0 |
| Ngày ban hành | Tháng 5 năm 2026, ngày ___ |
| Tiêu chuẩn áp dụng | AS9100D Rev D, 8.5.2 |
| Mức độ bảo mật | Tài liệu nội bộ (Confidential) |
| Tài liệu cấp trên | QM-001 Sổ tay chất lượng §8.5.2 |

| Phân loại | Chức danh | Họ tên | Chữ ký | Ngày |
|-----------|-----------|--------|--------|------|
| Soạn thảo | Nhân viên bộ phận Sản xuất | | | |
| Kiểm tra | Trưởng bộ phận Chất lượng | | | |
| Phê duyệt | Đại diện lãnh đạo chất lượng (QMR) | | | |

---

## Lịch sử sửa đổi

| Rev. | Ngày | Nội dung sửa đổi | Người soạn | Người phê duyệt |
|------|------|-----------------|------------|----------------|
| 0 | 2026-05-__ | Ban hành lần đầu (Soạn thảo mới dựa trên AS9100D Rev D, phản ánh hành động khắc phục CAR-008) | | |

---

## Mục lục

1. [Mục đích](#1-mục-đích)
2. [Phạm vi áp dụng](#2-phạm-vi-áp-dụng)
3. [Tài liệu/tiêu chuẩn tham chiếu](#3-tài-liệutiêu-chuẩn-tham-chiếu)
4. [Thuật ngữ và định nghĩa](#4-thuật-ngữ-và-định-nghĩa)
5. [Trách nhiệm và quyền hạn](#5-trách-nhiệm-và-quyền-hạn)
6. [Hệ thống nhận dạng sản phẩm](#6-hệ-thống-nhận-dạng-sản-phẩm)
7. [Nhận dạng nguyên liệu thô và truy xuất nhập kho](#7-nhận-dạng-nguyên-liệu-thô-và-truy-xuất-nhập-kho)
8. [Nhận dạng trong quy trình](#8-nhận-dạng-trong-quy-trình)
9. [Nhận dạng thành phẩm và truy xuất xuất kho](#9-nhận-dạng-thành-phẩm-và-truy-xuất-xuất-kho)
10. [Ma trận truy xuất lô](#10-ma-trận-truy-xuất-lô)
11. [Liên kết hệ thống ERP](#11-liên-kết-hệ-thống-erp)
12. [Nhận dạng và cách ly sản phẩm không phù hợp](#12-nhận-dạng-và-cách-ly-sản-phẩm-không-phù-hợp)
13. [Yêu cầu đặc thù hàng không vũ trụ](#13-yêu-cầu-đặc-thù-hàng-không-vũ-trụ)
14. [Quản lý hồ sơ](#14-quản-lý-hồ-sơ)
15. [Tài liệu và biểu mẫu liên quan](#15-tài-liệu-và-biểu-mẫu-liên-quan)

---

# 1. Mục đích

Quy trình này quy định các thủ tục để đảm bảo nhận dạng và truy xuất nguồn gốc trong toàn bộ vòng đời của sản phẩm hàng không vũ trụ được sản xuất tại M&C Electronics VINA.

Mục đích của quy trình này:
- Thiết lập hệ thống quản lý nhận dạng và truy xuất nguồn gốc sản phẩm theo yêu cầu AS9100D 8.5.2
- Đảm bảo khả năng truy xuất hai chiều theo đơn vị lô (Lot) từ khi nhập nguyên liệu thô đến khi xuất thành phẩm
- Xây dựng mối liên kết giữa chứng nhận nguyên liệu (Mill Certificate), hồ sơ quy trình và hồ sơ xuất kho
- Thiết lập hệ thống truy xuất để nhanh chóng xác định phạm vi ảnh hưởng và cách ly khi phát sinh sự không phù hợp
- Đáp ứng yêu cầu truy xuất nguồn gốc của khách hàng và cơ quan quản lý
- **Phản ánh hành động khắc phục CAR-008** (Không thể truy xuất theo đơn vị lô: Không có mối liên kết truy xuất giữa lô nguyên liệu thô - quy trình - thành phẩm)

> **Bối cảnh**: Kết quả phân tích khoảng cách cho thấy hệ thống barcode/nhãn chưa được xây dựng và yêu cầu truy xuất chỉ được hiểu ở cấp độ đơn chiếc, khiến việc truy xuất có hệ thống theo đơn vị lô không thể thực hiện được. Quy trình này thiết lập hệ thống quản lý truy xuất toàn diện bao gồm hệ thống cấp số lô, hồ sơ di chuyển quy trình và liên kết ERP để giải quyết nguyên nhân gốc rễ này.

---

# 2. Phạm vi áp dụng

Quy trình này áp dụng cho tất cả sản phẩm, vật liệu, bán thành phẩm và thành phẩm được xử lý trong QMS của M&C Electronics VINA.

**Đối tượng áp dụng:**
- Nguyên liệu thô và linh kiện mua (từ giai đoạn kiểm tra đầu vào)
- Bán thành phẩm trong quy trình (Work-in-Process, WIP)
- Thành phẩm (sản phẩm đã hoàn thành kiểm tra cuối cùng trước khi xuất kho)
- Sản phẩm gia công ngoài (gia công ngoài/nhập về quy trình ngoài như mạ, nhiệt luyện, kiểm tra không phá hủy)
- Tài sản do khách hàng cung cấp (bao gồm vật liệu do khách hàng cấp/GFP)
- Linh kiện có giới hạn tuổi thọ và vật liệu cần quản lý hạn sử dụng

**Loại trừ:**
- Văn phòng phẩm, vật tư gián tiếp thông thường (vật liệu không yêu cầu truy xuất)
- Đại diện lãnh đạo chất lượng (QMR) phê duyệt phạm vi và lý do loại trừ

**Nhà máy áp dụng:**
- Trụ sở chính M&C Electronics VINA (tại Việt Nam)
- Tất cả khu vực sản xuất/kiểm tra/bảo quản trong phạm vi chứng nhận

---

# 3. Tài liệu/tiêu chuẩn tham chiếu

## 3.1 Tiêu chuẩn bên ngoài

| Số tiêu chuẩn | Tên | Nội dung liên quan |
|--------------|-----|------------------|
| AS9100D Rev D | Quality Management Systems - Requirements for Aviation, Space and Defense Organizations | 8.5.2 Nhận dạng và truy xuất nguồn gốc |
| ISO 9001:2015 | Quality management systems - Requirements | 8.5.2 Nhận dạng và truy xuất nguồn gốc |
| AS9102 Rev C | First Article Inspection Requirement | Yêu cầu hồ sơ truy xuất khi FAI |
| AS9120 Rev B | Quality Management Systems - Requirements for Aviation, Space and Defense Distributors | Yêu cầu truy xuất của nhà phân phối (tham khảo) |

## 3.2 Tài liệu nội bộ

| Mã tài liệu | Tên tài liệu | Nội dung liên quan |
|------------|------------|------------------|
| QM-001 | Sổ tay chất lượng | §8.5.2 Chính sách nhận dạng và truy xuất nguồn gốc |
| QP-706 | Quản lý thông tin tài liệu | Thủ tục lưu trữ/quản lý hồ sơ |
| QP-801 | Quản lý hoạch định vận hành | Cân nhắc truy xuất khi lập kế hoạch sản xuất |
| QP-803 | Quản lý hình dạng (CCB) | Liên kết nhận dạng hình dạng và truy xuất nguồn gốc |
| QP-810 | Quản lý sản xuất và cung cấp dịch vụ | Yêu cầu nhận dạng trong điều kiện quản lý sản xuất |
| QP-817 | Quản lý kiểm tra cuối cùng/xuất xưởng | Xác nhận truy xuất trước khi xuất kho |
| QP-818 | Quản lý đầu ra không phù hợp | Nhận dạng và cách ly sản phẩm không phù hợp |
| QP-819 | Quản lý phòng ngừa FOD | Kiểm soát nhận dạng vật liệu liên quan FOD |

## 3.3 Yêu cầu của khách hàng

- Yêu cầu truy xuất nguồn gốc riêng của từng khách hàng (CSR: Customer Specific Requirements)
- Đặc tả ghi nhãn/đánh dấu theo từng khách hàng
- Yêu cầu chứng nhận vật liệu theo khách hàng

---

# 4. Thuật ngữ và định nghĩa

| Thuật ngữ (tiếng Việt) | Tiếng Anh | Định nghĩa |
|----------------------|-----------|-----------|
| Số lô | Lot Number | Số nhận dạng duy nhất được cấp cho nhóm sản phẩm được sản xuất trong cùng điều kiện (cùng nguyên liệu thô, cùng quy trình, cùng thời điểm) |
| Số serial | Serial Number (S/N) | Số nhận dạng duy nhất được cấp cho từng sản phẩm đơn lẻ. Chủ yếu áp dụng cho linh kiện quan trọng về an toàn hàng không vũ trụ |
| Lô hàng | Batch | Nhóm bán thành phẩm/thành phẩm được đưa vào cùng thời điểm từ cùng một lô nguyên liệu thô và trải qua cùng quy trình |
| Phiếu theo dõi | Traveler (Lot Traveler) | Phiếu di chuyển quy trình đi kèm với lô hoặc lô hàng khi di chuyển qua từng quy trình. Ghi lịch sử công việc, kết quả kiểm tra, chữ ký của người vận hành |
| Ma trận truy xuất | Traceability Matrix | Hồ sơ hiển thị có hệ thống mối quan hệ kết nối giữa nguyên liệu thô - quy trình - thành phẩm. Có thể truy xuất cả theo chiều thuận và chiều ngược |
| Truy xuất chiều thuận | Forward Traceability | Phương pháp bắt đầu từ lô nguyên liệu thô để truy xuất thành phẩm mà vật liệu đó đã được sử dụng |
| Truy xuất chiều ngược | Reverse Traceability | Phương pháp bắt đầu từ thành phẩm để truy xuất lô nguyên liệu thô đã sử dụng và lịch sử quy trình |
| Chứng nhận vật liệu | Mill Certificate (Mill Cert) | Chứng nhận thử nghiệm vật liệu/thành phần hóa học/tính chất cơ học do nhà cung cấp nguyên liệu thô phát hành |
| Chứng nhận phù hợp | Certificate of Conformance (CoC) | Tài liệu chứng minh sản phẩm phù hợp với yêu cầu quy định |
| AAM | Acceptance Authority Media | Phương tiện biểu thị trạng thái đạt/chấp nhận của sản phẩm (con dấu, chữ ký điện tử, nhãn, v.v.) |
| Linh kiện giới hạn tuổi thọ | Life-Limited Part (LLP) | Linh kiện có tuổi thọ bị giới hạn bởi thời gian sử dụng, chu kỳ hoặc ngày tháng |
| Vật liệu có hạn sử dụng | Shelf-Life Material | Vật liệu bị giới hạn thời gian bảo quản và phải sử dụng trong hạn (keo dán, chất bịt kín, hóa chất, v.v.) |
| Nhận dạng hình dạng | Configuration Identification | Hệ thống nhận dạng kết nối hình dạng sản phẩm (Bản vẽ Rev., phiên bản BOM) với sản phẩm thực tế |

---

# 5. Trách nhiệm và quyền hạn

| Vai trò | Trách nhiệm |
|---------|------------|
| **Đại diện lãnh đạo chất lượng (QMR)** | Phê duyệt và giám sát hiệu lực thủ tục quản lý nhận dạng và truy xuất, Phán quyết cuối cùng về sự không phù hợp liên quan đến truy xuất |
| **Trưởng bộ phận Chất lượng** | Giám sát thực hiện thủ tục quản lý truy xuất, Thực hiện kiểm tra truy xuất, Xác minh chứng nhận vật liệu, Phụ trách quản lý tổng thể ma trận truy xuất |
| **Trưởng bộ phận Sản xuất** | Cấp và quản lý số lô, Vận hành phiếu theo dõi, Xác nhận duy trì nhận dạng khi di chuyển quy trình, Quản lý nhãn/đánh dấu |
| **Nhân viên sản xuất** | Ghi chép phiếu theo dõi khi thực hiện quy trình, Dán/xác nhận nhãn nhận dạng lô, Cấm sử dụng vật liệu không rõ nhận dạng |
| **Trưởng bộ phận Vật tư/Mua hàng** | Cấp số lô khi nhập nguyên liệu thô, Xác nhận và lưu trữ chứng nhận vật liệu, Quản lý vật liệu có hạn sử dụng |
| **Trưởng bộ phận Kiểm tra** | Xác nhận trạng thái nhận dạng khi kiểm tra đầu vào/kiểm tra quy trình/kiểm tra cuối, Cấp AAM, Đánh dấu nhận dạng sản phẩm không phù hợp |
| **Trưởng bộ phận Kỹ thuật** | Thiết lập hệ thống mã số linh kiện, Duy trì tính nhất quán bản vẽ-BOM, Quản lý liên kết nhận dạng hình dạng và truy xuất |
| **Phụ trách IT** | Xây dựng/duy trì tính năng truy xuất lô trong ERP, Vận hành hệ thống barcode/nhãn, Sao lưu dữ liệu truy xuất |

---

# 6. Hệ thống nhận dạng sản phẩm

## 6.1 Quy tắc cấp mã số linh kiện

Mã số linh kiện (Part Number) là đơn vị cơ bản cho nhận dạng duy nhất của sản phẩm và được cấp theo hệ thống sau:

**Cấu trúc mã số linh kiện:**

```
[Nhóm sản phẩm]-[Số thứ tự]-[Sửa đổi]
Ví dụ: MCE-A1001-R01

MCE     : Mã công ty (M&C Electronics)
A       : Mã nhóm sản phẩm (A=Hàng không vũ trụ, E=Điện tử, M=Cơ khí)
1001    : Số được cấp theo thứ tự
R01     : Số sửa đổi bản vẽ (Rev. 01)
```

**Mã nhóm sản phẩm:**

| Mã | Phân loại | Mô tả |
|----|-----------|-------|
| A | Linh kiện hàng không vũ trụ | Linh kiện dùng cho thiết bị hàng không/vũ trụ |
| E | Cụm lắp ráp điện tử | PCB, mô-đun điện tử, v.v. |
| M | Linh kiện cơ khí | Linh kiện gia công cơ khí, kết cấu |
| S | Linh kiện dịch vụ | Linh kiện thay thế để sửa chữa/bảo trì |
| T | Dụng cụ/đồ gá | Dụng cụ sản xuất, đồ gá, thiết bị kiểm tra |

## 6.2 Quy tắc cấp số lô

Số lô được cấp từ khi nhập nguyên liệu thô và là đơn vị cốt lõi của truy xuất trong toàn bộ quy trình.

**Cấu trúc số lô:**

```
[Năm][Tháng][Ngày]-[Số thứ tự]
Ví dụ: 260415-001

26      : Năm (2026)
04      : Tháng (Tháng 4)
15      : Ngày (Ngày 15)
001     : Số thứ tự trong ngày (3 chữ số)
```

**Nguyên tắc cấp số lô:**
- Cùng vật liệu + cùng nhà cung cấp + cùng ngày nhập = cùng số lô
- Phải cấp số lô riêng khi chứng nhận vật liệu (Mill Cert) khác nhau
- Số lô do bộ phận Vật tư/Mua hàng cấp khi nhập hàng và đăng ký ngay vào ERP
- Số lô phải ghi bắt buộc trong tất cả hồ sơ di chuyển quy trình của vật liệu

## 6.3 Quy tắc cấp số serial

Số serial được cấp cho sản phẩm cần truy xuất riêng lẻ.

**Cấu trúc số serial:**

```
[Mã số linh kiện]-[Số lô]-[Số thứ tự]
Ví dụ: MCE-A1001-R01-260415001-0001

0001    : Số thứ tự cá thể trong lô (4 chữ số)
```

**Đối tượng cấp số serial:**
- Linh kiện quan trọng về an toàn (Safety Critical Part)
- Linh kiện giới hạn tuổi thọ (Life-Limited Part)
- Linh kiện mà khách hàng yêu cầu truy xuất serial
- Linh kiện cần truy xuất số đăng ký máy bay (A/C Registration Number)
- Linh kiện đắt tiền có đơn giá từ mức quy định trở lên (tiêu chuẩn: do trưởng bộ phận Chất lượng quyết định)

## 6.4 Phương pháp đánh dấu nhận dạng

| Phương pháp | Đối tượng áp dụng | Độ bền | Ghi chú |
|------------|----------------|---------|---------| 
| Nhãn barcode | Tất cả vật liệu/bán thành phẩm/thành phẩm | Trong quy trình | Quét liên kết ERP |
| Khắc/ăn mòn | Linh kiện kim loại (khi khách hàng yêu cầu) | Vĩnh viễn | Vị trí không ảnh hưởng đến chức năng linh kiện |
| Đánh dấu mực | PCB, linh kiện điện tử | Bán vĩnh viễn | Sử dụng mực chống tẩy rửa |
| Thẻ/nhãn treo | Linh kiện lớn, sản phẩm gia công ngoài | Trong quy trình | Cần biện pháp chống thất lạc |
| Nhãn bao bì | Bao bì thành phẩm | Sau khi xuất kho | Tuân thủ mẫu biểu của khách hàng |
| Nhận dạng điện tử | Dữ liệu ERP | Vĩnh viễn | Phải liên kết với nhận dạng vật lý |

**Thông tin bắt buộc ghi trên nhãn nhận dạng:**
- Mã số linh kiện (Part Number)
- Số lô (Lot Number)
- Số serial (khi cần, Serial Number)
- Số lượng
- Trạng thái kiểm tra (Đạt/Không phù hợp/Chờ kiểm tra)

---

# 7. Nhận dạng nguyên liệu thô và truy xuất nhập kho

## 7.1 Quy trình nhập kho

```
Nhà cung cấp xuất hàng → Tiếp nhận nhập kho → Xác nhận chứng nhận vật liệu → Cấp số lô →
Dán nhãn barcode → Đăng ký nhập kho ERP → Kiểm tra đầu vào → Bảo quản vật liệu đạt
```

## 7.2 Quản lý chứng nhận vật liệu (Mill Certificate)

**Hạng mục xác nhận khi nhập kho:**

| Hạng mục xác nhận | Nội dung xác nhận | Người phụ trách |
|-----------------|-----------------|----------------|
| Nhận chứng nhận vật liệu | Xác nhận đính kèm Mill Cert hoặc CoC cho tất cả nguyên liệu thô | Bộ phận Vật tư |
| Xác minh nội dung | Xem vật liệu, thành phần hóa học, tính chất cơ học có phù hợp với yêu cầu bản vẽ/quy cách không | Bộ phận Chất lượng |
| Xác nhận nhà cung cấp | Xác nhận đơn vị có đăng ký trong ASL (Danh sách nhà cung cấp được phê duyệt) không | Bộ phận Mua hàng |
| Chứng nhận xuất xứ | Xác nhận chứng nhận xuất xứ (CoO) khi khách hàng yêu cầu | Bộ phận Mua hàng |
| Số chứng nhận vật liệu | Ghi lại ánh xạ số Mill Cert và số lô | Bộ phận Vật tư |

**Hồ sơ liên kết Mill Certificate:**

```
Số Mill Cert ↔ Số lô của nhà cung cấp ↔ Số lô của chúng tôi ↔ Số nhập kho ERP
```

- Bản gốc (hoặc bản sao có chứng nhận) của chứng nhận vật liệu được lưu trữ theo thủ tục bảo quản tài liệu (QP-706) trong thời gian tối thiểu là thời gian sử dụng sản phẩm + 3 năm hoặc thời gian do khách hàng yêu cầu, lấy thời gian dài hơn.
- Mối quan hệ ánh xạ giữa số Mill Cert và số lô của chúng tôi được đăng ký trong ERP và cũng ghi vào sổ đăng ký ánh xạ riêng (QF-812-01).

## 7.3 Nhãn nhận dạng nhập kho

Khi nhập kho, dán nhãn barcode chứa các thông tin sau cho tất cả vật liệu:

| Hạng mục ghi trên nhãn | Nội dung |
|----------------------|----------|
| Mã số linh kiện của chúng tôi | Part Number |
| Số lô của chúng tôi | Số lô được cấp khi nhập kho |
| Số lô của nhà cung cấp | Số lô/lô hàng gốc của nhà cung cấp |
| Số Mill Cert | Số chứng nhận vật liệu |
| Ngày nhập kho | YYYY-MM-DD |
| Số lượng | Số lượng nhập kho |
| Hạn sử dụng | Khi cần (vật liệu Shelf-Life) |
| Trạng thái kiểm tra | Chờ kiểm tra (vàng) / Đạt (xanh lá) / Không phù hợp (đỏ) |

## 7.4 Xử lý sau kiểm tra đầu vào

- **Đạt**: Dán nhãn đạt màu xanh lá, nhập vào khu vực bảo quản đã phê duyệt, thay đổi trạng thái ERP
- **Không phù hợp**: Dán nhãn không phù hợp màu đỏ, chuyển đến khu vực cách ly, xử lý theo QP-818
- **Đạt có điều kiện**: Xử lý theo thủ tục đặc cách (Concession), ghi rõ lý do đặc cách trong hồ sơ truy xuất

---

# 8. Nhận dạng trong quy trình

## 8.1 Phiếu theo dõi lô (Lot Traveler / Route Card)

Phiếu theo dõi lô là phiếu di chuyển quy trình đi kèm với lô/lô hàng khi di chuyển qua từng quy trình, là tài liệu cốt lõi của truy xuất.

**Hạng mục ghi trên phiếu theo dõi:**

| Hạng mục | Nội dung ghi |
|---------|-------------|
| Số lệnh sản xuất | Work Order Number |
| Mã số linh kiện / Số sửa đổi | Part No. / Rev. |
| Số lô | Số lô nguyên liệu thô và số lô quy trình |
| Số lượng đầu vào / Số lượng đạt | Truy xuất số lượng theo từng quy trình |
| Thứ tự quy trình | Tên quy trình, số quy trình, số tài liệu chuẩn công việc (WI) |
| Chữ ký/thời gian người vận hành | Xác nhận của người vận hành khi hoàn thành mỗi quy trình |
| Chữ ký/thời gian người kiểm tra | Xác nhận của nhân viên kiểm tra khi thực hiện kiểm tra quy trình |
| Số thiết bị sử dụng | Số duy nhất của thiết bị/máy móc sử dụng |
| Số dụng cụ đo sử dụng | Số quản lý của thiết bị đo sử dụng |
| Điều kiện quy trình đặc biệt | Ghi thông số quy trình: nhiệt độ, thời gian, áp suất, v.v. |
| Lịch sử phát sinh sự không phù hợp | Nội dung xử lý khi phát sinh sự không phù hợp trong quy trình |

## 8.2 Quy tắc di chuyển quy trình

**Nguyên tắc cơ bản:**
- Lô/lô hàng không có phiếu theo dõi không được phép di chuyển đến quy trình tiếp theo
- Cấm đưa vào quy trình tiếp theo phiếu theo dõi không có chữ ký của người vận hành/người kiểm tra quy trình trước
- Khi tách lô (Split), phát hành phiếu theo dõi mới cho từng lô tách và ghi lại mối quan hệ với số lô gốc
- Về nguyên tắc cấm ghép lô (Merge). Trường hợp không thể tránh được, thực hiện sau khi được trưởng bộ phận Chất lượng phê duyệt và ghi lại cả hai số lô gốc

**Luồng di chuyển quy trình:**

```
Xuất nguyên liệu thô → [Xác nhận số lô, phát hành phiếu theo dõi]
    ↓
Quy trình 1 (ví dụ: cắt) → [Chữ ký người vận hành, ghi số lượng, ghi số thiết bị]
    ↓
Kiểm tra quy trình 1 → [Chữ ký người kiểm tra, đánh giá đạt/không phù hợp]
    ↓
Quy trình 2 (ví dụ: gia công) → [Chữ ký người vận hành, ghi số lượng]
    ↓
    ... (lặp lại)
    ↓
Quy trình gia công ngoài (nếu có) → [Ghi xuất/nhập gia công ngoài, đính kèm biên bản gia công ngoài]
    ↓
Kiểm tra cuối cùng → [Chữ ký người kiểm tra, cấp AAM]
    ↓
Nhập thành phẩm → [Đăng ký thành phẩm ERP, dán nhãn nhận dạng]
```

## 8.3 Quản lý nhận dạng quy trình gia công ngoài

Khi gia công ngoài (mạ, nhiệt luyện, kiểm tra không phá hủy, v.v.), duy trì khả năng truy xuất:

| Bước | Hạng mục quản lý | Người phụ trách |
|------|----------------|----------------|
| Xuất gia công ngoài | Ghi số lô xuất, số lượng, ngày xuất. Dán nhãn xuất gia công ngoài | Bộ phận Sản xuất |
| Bàn giao cho gia công ngoài | Ghi rõ yêu cầu truy xuất, yêu cầu không trộn lô | Bộ phận Mua hàng |
| Nhận về từ gia công ngoài | Xác nhận số lượng nhận, biên bản/CoC của gia công ngoài, xác nhận số lô khớp | Bộ phận Chất lượng |
| Liên kết hồ sơ | Ghi số biên bản gia công ngoài vào phiếu theo dõi, đăng ký ERP | Bộ phận Chất lượng |

## 8.4 Xử lý vật liệu không rõ nhận dạng

Khi phát hiện vật liệu không rõ hoặc bị thất lạc nhận dạng:

1. Ngay lập tức đánh dấu vật liệu đó là **"Không rõ nhận dạng"** (thẻ màu cam) và cách ly
2. Báo cáo ngay cho trưởng bộ phận Sản xuất
3. Cố gắng khôi phục nhận dạng dựa trên hồ sơ có sẵn (ERP, phiếu theo dõi, vị trí bảo quản, v.v.)
4. Trường hợp không thể khôi phục nhận dạng, xử lý như không phù hợp theo phán quyết của trưởng bộ phận Chất lượng (QP-818)
5. **Tuyệt đối cấm** sử dụng vật liệu không rõ nhận dạng vào sản phẩm

---

# 9. Nhận dạng thành phẩm và truy xuất xuất kho

## 9.1 Nhận dạng thành phẩm

Sau khi kiểm tra cuối cùng đạt, áp dụng nhận dạng sau cho thành phẩm:

| Hạng mục nhận dạng | Nội dung |
|------------------|----------|
| Mã số linh kiện/Số sửa đổi | Part No. / Rev. |
| Số lô | Lô thành phẩm liên quan |
| Số serial | Khi cần (sản phẩm đối tượng truy xuất serial) |
| Dấu hiệu đạt (AAM) | Con dấu đạt, chữ ký điện tử hoặc nhãn đạt |
| Ngày kiểm tra | Ngày hoàn thành kiểm tra cuối cùng |
| Số đơn hàng của khách hàng | Purchase Order Number |

## 9.2 Phương tiện phê duyệt chấp nhận (Acceptance Authority Media, AAM)

AAM là phương tiện chính thức biểu thị trạng thái đạt/chấp nhận của sản phẩm.

**Loại AAM và quản lý:**

| Loại AAM | Nơi áp dụng | Phương pháp quản lý |
|---------|------------|------------------|
| Con dấu đạt | Phiếu theo dõi, biên bản kiểm tra | Cấp số con dấu duy nhất cho từng cá nhân, vận hành sổ quản lý con dấu (QF-812-07) |
| Chữ ký điện tử | Phê duyệt kiểm tra trong ERP | Tài khoản ERP cá nhân, quản lý mật khẩu, cấp quyền ký riêng |
| Nhãn đạt | Bao bì thành phẩm | Quản lý số thứ tự, kiểm soát bảo quản nhãn chưa sử dụng |

**Nguyên tắc quản lý AAM:**
- Chỉ nhân viên được cấp quyền kiểm tra mới có thể sử dụng AAM
- Con dấu chỉ do chính người sử dụng bảo quản, báo cáo ngay cho trưởng bộ phận Chất lượng khi bị thất lạc
- Khi nghỉ việc/điều chuyển, thu hồi AAM và số AAM đó không được tái sử dụng
- Ghi lịch sử cấp/thu hồi AAM vào sổ quản lý con dấu

## 9.3 Hồ sơ truy xuất xuất kho

Khi xuất kho, tạo và lưu trữ các hồ sơ sau:

| Hồ sơ | Nội dung | Thời gian lưu trữ |
|-------|----------|-----------------|
| Hồ sơ kiểm tra xuất kho | Biên bản kiểm tra cuối cùng, hồ sơ kiểm tra ngoại quan | Thời gian sử dụng sản phẩm + 3 năm |
| Chứng nhận phù hợp (CoC) | Chứng minh phù hợp sản phẩm phát hành cho khách hàng | Thời gian sử dụng sản phẩm + 3 năm |
| Phiếu đóng gói | Danh sách mặt hàng xuất kho, số lượng, danh sách lô/S/N | 10 năm |
| Xác minh truy xuất trước khi xuất kho | Xác nhận cuối cùng mối liên kết truy xuất nguyên liệu thô-quy trình-thành phẩm | 10 năm |
| Tài liệu theo yêu cầu khách hàng | Bằng chứng bổ sung theo yêu cầu khách hàng (bản sao Mill Cert, v.v.) | Thời gian do khách hàng yêu cầu |

**Danh sách kiểm tra xác minh truy xuất trước khi xuất kho:**
- [ ] Xác nhận khả năng truy xuất từ lô nguyên liệu thô đến lô thành phẩm
- [ ] Xác nhận tất cả phiếu theo dõi quy trình đã hoàn chỉnh
- [ ] Xác nhận hoàn thành ánh xạ chứng nhận vật liệu (Mill Cert)
- [ ] Xác nhận đính kèm biên bản quy trình gia công ngoài
- [ ] Xác nhận đầy đủ hồ sơ quy trình đặc biệt
- [ ] Xác nhận hoàn chỉnh hồ sơ xử lý không phù hợp (nếu có)
- [ ] Xác nhận đính kèm tài liệu truy xuất theo yêu cầu khách hàng

---

# 10. Ma trận truy xuất lô

## 10.1 Tổng quan ma trận truy xuất

Ma trận truy xuất là hồ sơ cốt lõi được xây dựng để có thể truy xuất hai chiều toàn bộ lịch sử từ nguyên liệu thô đến thành phẩm.

**Cấu trúc ma trận:**

```
┌─────────────────────────────────────────────────────────────────┐
│               Ma trận truy xuất (QF-812-05)                     │
├──────────────┬──────────────┬──────────────┬───────────────────┤
│ Thông tin    │ Thông tin    │ Thông tin    │ Thông tin         │
│ nguyên liệu  │ quy trình    │ thành phẩm   │ xuất kho          │
├──────────────┼──────────────┼──────────────┼───────────────────┤
│ Mã số NL thô │ Số lệnh SX   │ Mã số TP     │ Số đơn hàng KH   │
│ Tên nhà CC   │ Ngày TH quy  │ Số lô TP     │ Ngày xuất kho    │
│ Lô nhà CC    │ trình        │ Số serial    │ Nơi xuất (KH)    │
│ Số lô của    │ Người vận    │ Kết quả kiểm │ Số phiếu đóng gói│
│ chúng tôi    │ hành/kiểm    │ tra cuối     │ Số đăng ký máy   │
│ Số Mill Cert │ tra          │ Số CoC       │ bay (nếu có)     │
│ Ngày nhập/   │ Thiết bị đã  │ Hồ sơ AAM    │                  │
│ Số lượng     │ dùng         │              │                  │
│              │ Lịch sử KPH  │              │                  │
└──────────────┴──────────────┴──────────────┴───────────────────┘
```

## 10.2 Truy xuất chiều thuận (Forward Traceability)

**Mục đích:** Truy xuất thành phẩm mà lô nguyên liệu thô cụ thể đã được sử dụng

**Thủ tục:**
1. Tra cứu lệnh sản xuất (WO) mà vật liệu đó đã được xuất kho bằng số lô nguyên liệu thô trên ERP
2. Xác nhận số lô thành phẩm được sản xuất theo từng lệnh sản xuất
3. Xác nhận hồ sơ xuất kho (khách hàng, ngày xuất, phiếu đóng gói) theo từng lô thành phẩm
4. Truy xuất đến số đăng ký khách hàng/máy bay khi cần

**Đường truy xuất:**

```
Lô nguyên liệu thô → Lệnh sản xuất (WO) → Phiếu theo dõi quy trình → Lô thành phẩm → Hồ sơ xuất kho → Khách hàng
```

**Tình huống sử dụng truy xuất chiều thuận:**
- Xác định phạm vi thành phẩm bị ảnh hưởng khi phát hiện nguyên liệu thô không phù hợp
- Ứng phó thu hồi (Recall) của nhà cung cấp
- Xác nhận phạm vi ảnh hưởng khi phát hiện vật liệu quá hạn sử dụng

## 10.3 Truy xuất chiều ngược (Reverse Traceability)

**Mục đích:** Bắt đầu từ thành phẩm để truy xuất nguyên liệu thô đã sử dụng và lịch sử quy trình

**Thủ tục:**
1. Tra cứu lệnh sản xuất (WO) bằng số lô/serial thành phẩm trên ERP
2. Xác nhận số lô nguyên liệu thô được đưa vào lệnh sản xuất
3. Xác nhận chứng nhận vật liệu (Mill Cert), thông tin nhà cung cấp của lô nguyên liệu thô
4. Xác nhận người vận hành, người kiểm tra, thiết bị sử dụng, điều kiện quy trình theo từng quy trình

**Đường truy xuất:**

```
Khiếu nại khách hàng → Hồ sơ xuất kho → Lô thành phẩm → Phiếu theo dõi → Lô nguyên liệu thô → Mill Cert → Nhà cung cấp
```

**Tình huống sử dụng truy xuất chiều ngược:**
- Phân tích nguyên nhân khi nhận được khiếu nại/phàn nàn của khách hàng
- Truy xuất nguyên nhân gốc rễ khi phát hiện thành phẩm không phù hợp
- Ứng phó điều tra của cơ quan quản lý

## 10.4 Xác minh truy xuất (Traceability Drill)

Định kỳ thực hiện **Diễn tập truy xuất (Traceability Drill)** để xác minh hiệu lực của hệ thống truy xuất.

| Hạng mục | Nội dung |
|---------|----------|
| Chu kỳ thực hiện | Ít nhất 1 lần/quý |
| Phương pháp thực hiện | Chọn ngẫu nhiên một lô và thực hiện truy xuất chiều thuận/chiều ngược |
| Tiêu chí đạt | Chiều thuận: Hoàn thành truy xuất trong 4 giờ / Chiều ngược: Hoàn thành truy xuất trong 4 giờ |
| Hồ sơ | Biên bản diễn tập truy xuất (QF-812-06) |
| Khi không phù hợp | Lập và thực hiện biện pháp cải tiến hệ thống truy xuất, thực hiện tái xác minh |
| Người phụ trách | Trưởng bộ phận Chất lượng |

---

# 11. Liên kết hệ thống ERP

## 11.1 Tính năng truy xuất lô ERP

Xây dựng và vận hành các tính năng truy xuất lô sau trong hệ thống ERP:

| Tính năng | Mô tả | Trạng thái |
|---------|-------|----------|
| Tự động tạo số lô | Thiết lập quy tắc cấp số lô tự động khi nhập kho | Cần xây dựng |
| Lịch sử nhập/xuất theo lô | Theo dõi tình trạng nhập/xuất/tồn kho theo lô nguyên liệu thô | Cần xây dựng |
| Ánh xạ WO-lô | Ghi hồ sơ kết nối giữa lệnh sản xuất và lô nguyên liệu thô đầu vào | Cần xây dựng |
| Tra cứu truy xuất chiều thuận/ngược | Tra cứu hàng loạt hồ sơ liên quan khi nhập số lô | Cần xây dựng |
| Lưu trữ điện tử Mill Cert | Lưu trữ bản scan chứng nhận vật liệu liên kết với lô | Cần xây dựng |
| Thông báo hạn sử dụng | Thông báo trước khi hết hạn vật liệu Shelf-Life | Cần xây dựng |
| Báo cáo truy xuất | Tự động tạo ma trận truy xuất khi xuất kho | Cần xây dựng |

> **Lưu ý**: Tính năng truy xuất lô ERP do phụ trách IT hoàn thành xây dựng vào ngày 2026-05-23 (theo lịch hành động khắc phục CAR-008). Đến khi hoàn thành xây dựng, vận hành theo phương thức thủ công (Excel/phiếu theo dõi).

## 11.2 Hệ thống barcode/nhãn

**Hệ thống vận hành nhãn barcode:**

| Hạng mục | Đặc điểm kỹ thuật |
|---------|-----------------|
| Định dạng barcode | Code 128 hoặc QR Code (tương thích ERP) |
| Máy in nhãn | Máy in barcode nhiệt (bố trí tại khu nhập kho, khu sản xuất) |
| Máy quét barcode | Máy quét barcode có/không dây (bố trí tại từng quy trình, kho) |
| Nội dung nhãn | Mã số linh kiện, số lô, số lượng, barcode, trạng thái kiểm tra (phân biệt màu) |
| Chất liệu nhãn | Nhãn chịu nhiệt/chịu dầu (chọn theo môi trường quy trình) |

**Điểm quét barcode:**

| Thời điểm quét | Vị trí | Nội dung hồ sơ |
|--------------|--------|--------------|
| Nhập kho | Khu kiểm tra đầu vào | Đăng ký nhập kho, tạo lô |
| Xuất vật liệu | Kho | Hồ sơ xuất vật liệu cho lệnh sản xuất |
| Đưa vào quy trình | Điểm bắt đầu mỗi quy trình | Hồ sơ bắt đầu quy trình, xác nhận người vận hành |
| Hoàn thành quy trình | Điểm kết thúc mỗi quy trình | Hồ sơ hoàn thành quy trình, số lượng đạt/lỗi |
| Xuất/nhận gia công ngoài | Khu xuất nhập gia công ngoài | Hồ sơ xuất/nhận gia công ngoài |
| Kiểm tra cuối cùng | Khu kiểm tra | Đăng ký kết quả kiểm tra cuối |
| Nhập thành phẩm | Kho thành phẩm | Đăng ký tồn kho thành phẩm |
| Xuất kho | Khu xuất kho | Hồ sơ xuất kho, liên kết phiếu đóng gói |

## 11.3 Vận hành thủ công bổ sung (Giai đoạn chuyển tiếp khi chưa xây dựng ERP)

Đến khi hoàn thành xây dựng tính năng truy xuất lô ERP, vận hành theo hệ thống thủ công sau:

- **Sổ truy xuất lô (Excel)**: Ghi thủ công ánh xạ giữa số lô nhập kho, lệnh sản xuất và lô thành phẩm
- **Phiếu theo dõi (giấy)**: Ghi tay phiếu di chuyển quy trình, quét thành bản điện tử sau khi hoàn thành
- **Lưu trữ chứng nhận vật liệu**: Lưu trữ Mill Cert theo thứ tự số lô về mặt vật lý/điện tử

---

# 12. Nhận dạng và cách ly sản phẩm không phù hợp

Điều khoản này quy định việc duy trì truy xuất khi nhận dạng và cách ly sản phẩm không phù hợp, phối hợp với QP-818 (Quản lý đầu ra không phù hợp).

## 12.1 Đánh dấu nhận dạng sản phẩm không phù hợp

| Phân loại | Phương pháp nhận dạng | Màu sắc |
|-----------|---------------------|---------|
| Nghi ngờ không phù hợp | Thẻ "Chờ kiểm tra" | Vàng |
| Xác nhận không phù hợp | Nhãn/thẻ "Không phù hợp" | Đỏ |
| Đặc cách (Concession) | Nhãn "Đặc cách đạt" | Cam |
| Đối tượng tiêu hủy | Nhãn "Tiêu hủy" | Đỏ + gạch chéo (X) |

## 12.2 Nguyên tắc duy trì truy xuất sản phẩm không phù hợp

- **Tuyệt đối không được xóa** số lô, số serial của sản phẩm không phù hợp
- Ghi kết quả xử lý sản phẩm không phù hợp (tái chế, sửa chữa, đặc cách, tiêu hủy) vào phiếu theo dõi
- Khi phát sinh sự không phù hợp, ngay lập tức xác định phạm vi lô bị ảnh hưởng bằng truy xuất chiều thuận
- Khi bảo quản trong khu cách ly, bảo quản riêng theo từng lô và phòng ngừa trộn lô
- Bao gồm hồ sơ xử lý sự không phù hợp trong ma trận truy xuất

## 12.3 Truy xuất ứng phó thu hồi

Khi nhận được yêu cầu thu hồi từ khách hàng hoặc cơ quan quản lý:

1. **Xác định phạm vi ảnh hưởng**: Thực hiện truy xuất chiều thuận của lô nguyên liệu thô liên quan (Mục tiêu: Hoàn thành trong 24 giờ)
2. **Nhận dạng lô xuất kho**: Xác định lô thành phẩm xuất kho và danh sách khách hàng có chứa vật liệu đó
3. **Thông báo khách hàng**: Thông báo ngay cho khách hàng bị ảnh hưởng
4. **Biện pháp cách ly**: Ngay lập tức cách ly lô bị ảnh hưởng trong tồn kho nội bộ
5. **Bảo tồn hồ sơ**: Lập tài liệu toàn bộ quá trình ứng phó thu hồi và lưu trữ

---

# 13. Yêu cầu đặc thù hàng không vũ trụ

## 13.1 Nhận dạng linh kiện giới hạn tuổi thọ (Life-Limited Parts, LLP)

Quản lý các linh kiện có tuổi thọ bị giới hạn bởi thời gian, chu kỳ hoặc ngày tháng:

| Hạng mục quản lý | Nội dung |
|----------------|----------|
| Đánh dấu nhận dạng | Nhãn hoặc đánh dấu "LLP", ghi thông tin giới hạn tuổi thọ |
| Theo dõi tuổi thọ | Quản lý hồ sơ ngày lắp đặt, thời gian/chu kỳ sử dụng, tuổi thọ còn lại |
| Hệ thống cảnh báo | Cảnh báo trước khi đến hạn tuổi thọ (thông báo ERP hoặc quản lý thủ công) |
| Liên kết hồ sơ | Đăng ký vào sổ quản lý linh kiện giới hạn tuổi thọ (QF-812-08) |
| Lịch sử thay thế | Ghi S/N bộ cũ/mới, ngày thay, lý do thay khi thay thế |
| Thông báo khách hàng | Thông báo trước cho khách hàng thông tin về hạn tuổi thọ (nếu có) |

## 13.2 Quản lý hạn sử dụng (Shelf-Life Management)

Đối với vật liệu bị giới hạn thời gian bảo quản (keo dán, chất bịt kín, hóa chất, một số linh kiện điện tử, v.v.):

| Hạng mục quản lý | Nội dung |
|----------------|----------|
| Ghi nhãn hạn sử dụng | Ghi ngày sản xuất, hạn sử dụng (ngày hết hạn) trên nhãn vật liệu |
| Nguyên tắc FIFO | Bắt buộc áp dụng xuất trước - vào trước (First-In First-Out) |
| Giám sát hạn sử dụng | Kiểm tra sổ quản lý hạn sử dụng (QF-812-09) 1 lần/tháng |
| Thông báo trước khi hết hạn | Thông báo cho bộ phận Vật tư trước 30 ngày hết hạn (ERP hoặc thủ công) |
| Xử lý vật liệu hết hạn | Ngay lập tức cách ly vật liệu quá hạn sử dụng → Xử lý không phù hợp (QP-818) |
| Quản lý gia hạn | Chỉ có thể gia hạn khi có tài liệu phê duyệt gia hạn hạn sử dụng chính thức từ nhà cung cấp, cần phê duyệt của trưởng bộ phận Chất lượng |
| Điều kiện bảo quản | Định kỳ xác nhận tuân thủ điều kiện bảo quản nhiệt độ, độ ẩm, v.v. |

**Khu vực bảo quản vật liệu có hạn sử dụng:**
- Chỉ định khu vực bảo quản chuyên dụng cho vật liệu có hạn sử dụng
- Sắp xếp theo thứ tự ngày hết hạn (dễ thực hiện FIFO)
- Ghi lại kết quả theo dõi điều kiện bảo quản (nhiệt độ/độ ẩm)

## 13.3 Truy xuất số đăng ký máy bay

Khi khách hàng yêu cầu, đảm bảo có thể truy xuất đến số đăng ký máy bay (Aircraft Registration Number) mà thành phẩm được lắp đặt:

- Khi số đăng ký máy bay hoặc thông tin đối tượng lắp đặt được ghi trong đơn đặt hàng của khách hàng, đăng ký vào ERP
- Ghi số đăng ký máy bay trong hồ sơ xuất kho (CoC, phiếu đóng gói)
- Bao gồm thông tin máy bay trong ma trận truy xuất

## 13.4 Liên kết nhận dạng hình dạng (Liên kết QP-803)

Liên kết hình dạng (Configuration) sản phẩm và truy xuất nguồn gốc:

- Số sửa đổi (Rev.) của mã số linh kiện phải nhất quán với đường cơ sở hình dạng (Baseline)
- Khi sửa đổi bản vẽ, phân biệt rõ lô của mã số linh kiện đó (Cấm trộn lô Rev. cũ và Rev. mới)
- Đảm bảo có thể phân biệt và truy xuất lô trước và sau thay đổi hình dạng (ECN)
- Các chi tiết liên quan đến nhận dạng hình dạng tuân theo QP-803 (Quy trình quản lý hình dạng)

## 13.5 Nhận dạng tài sản của khách hàng (GFP: Government/Customer Furnished Property)

Đối với vật liệu, dụng cụ, thiết bị thử nghiệm, v.v. do khách hàng cung cấp:

- Dán nhãn riêng nhận dạng rõ ràng là tài sản của khách hàng ("Tài sản khách hàng / Customer Property")
- Duy trì số nhận dạng do khách hàng cấp (quản lý song song với số của chúng tôi)
- Đăng ký vào sổ quản lý tài sản khách hàng và liên kết hồ sơ truy xuất
- Thông báo ngay cho khách hàng khi tài sản của khách hàng bị thất lạc, hỏng hóc, không phù hợp

---

# 14. Quản lý hồ sơ

## 14.1 Danh sách hồ sơ liên quan đến truy xuất

| Tên hồ sơ | Mã tài liệu | Thời gian lưu trữ | Hình thức lưu trữ | Người phụ trách |
|----------|-----------|-----------------|-----------------|----------------|
| Sổ đăng ký ánh xạ chứng nhận vật liệu | QF-812-01 | Thời gian SP + 3 năm | Điện tử + Giấy | Trưởng bộ phận Vật tư |
| Sổ đăng ký lô nhập kho | QF-812-02 | 10 năm | Điện tử (ERP) | Trưởng bộ phận Vật tư |
| Phiếu theo dõi lô (Phiếu di chuyển quy trình) | QF-812-03 | Thời gian SP + 3 năm | Điện tử + Giấy | Trưởng bộ phận Sản xuất |
| Hồ sơ truy xuất xuất kho thành phẩm | QF-812-04 | 10 năm | Điện tử (ERP) | Trưởng bộ phận Chất lượng |
| Ma trận truy xuất | QF-812-05 | Thời gian SP + 3 năm | Điện tử | Trưởng bộ phận Chất lượng |
| Biên bản diễn tập truy xuất (Drill) | QF-812-06 | 5 năm | Điện tử | Trưởng bộ phận Chất lượng |
| Sổ quản lý AAM (con dấu) | QF-812-07 | Vĩnh viễn | Điện tử + Giấy | Trưởng bộ phận Chất lượng |
| Sổ quản lý linh kiện giới hạn tuổi thọ | QF-812-08 | Thời gian SP + 3 năm | Điện tử | Trưởng bộ phận Chất lượng |
| Sổ quản lý vật liệu có hạn sử dụng | QF-812-09 | 5 năm | Điện tử | Trưởng bộ phận Vật tư |
| Biên bản xử lý vật liệu không rõ nhận dạng | QF-812-10 | 5 năm | Điện tử | Trưởng bộ phận Chất lượng |

## 14.2 Nguyên tắc bảo quản hồ sơ

- Áp dụng thời gian lưu trữ dài nhất trong các thời gian sau cho hồ sơ liên quan đến truy xuất:
  - Thời gian sử dụng sản phẩm + 3 năm
  - Thời gian ghi trong hợp đồng khách hàng
  - Thời gian ghi trong yêu cầu quy định liên quan
  - Tối thiểu 10 năm
- Định kỳ sao lưu hồ sơ điện tử, chu kỳ và phương pháp sao lưu theo QP-706
- Song song lưu trữ điện tử bằng cách quét hồ sơ giấy
- Đảm bảo tính toàn vẹn, khả năng đọc và dễ tìm kiếm của hồ sơ

---

# 15. Tài liệu và biểu mẫu liên quan

## 15.1 Quy trình liên quan

| Mã tài liệu | Tên tài liệu | Nội dung liên quan |
|------------|------------|------------------|
| QM-001 | Sổ tay chất lượng | §8.5.2 Chính sách nhận dạng và truy xuất nguồn gốc |
| QP-706 | Quản lý thông tin tài liệu | Thủ tục lưu trữ và quản lý hồ sơ |
| QP-801 | Quản lý hoạch định vận hành | Hoạch định truy xuất khi lập kế hoạch sản xuất |
| QP-803 | Quản lý hình dạng (CCB) | Liên kết nhận dạng hình dạng và truy xuất nguồn gốc |
| QP-810 | Quản lý sản xuất và cung cấp dịch vụ | Yêu cầu nhận dạng trong điều kiện quản lý sản xuất |
| QP-817 | Quản lý kiểm tra cuối cùng/xuất xưởng | Xác minh truy xuất trước khi xuất kho |
| QP-818 | Quản lý đầu ra không phù hợp | Nhận dạng/cách ly/xử lý sản phẩm không phù hợp |
| QP-819 | Quản lý phòng ngừa FOD | Kiểm soát nhận dạng vật liệu liên quan FOD |

## 15.2 Danh sách biểu mẫu

| Số biểu mẫu | Tên biểu mẫu | Mục đích sử dụng |
|-----------|------------|----------------|
| QF-812-01 | Sổ đăng ký ánh xạ chứng nhận vật liệu (Mill Cert) | Ánh xạ lô nhà cung cấp/Mill Cert và số lô của chúng tôi |
| QF-812-02 | Sổ đăng ký lô nhập kho | Hồ sơ đăng ký số lô khi nhập nguyên liệu thô |
| QF-812-03 | Phiếu theo dõi lô (Phiếu di chuyển quy trình) | Ghi lịch sử công việc/kiểm tra theo từng quy trình |
| QF-812-04 | Biên bản truy xuất xuất kho thành phẩm | Ghi thông tin truy xuất khi xuất kho |
| QF-812-05 | Ma trận truy xuất | Hồ sơ truy xuất chiều thuận/ngược |
| QF-812-06 | Biên bản diễn tập truy xuất (Drill) | Ghi kết quả xác minh truy xuất hàng quý |
| QF-812-07 | Sổ quản lý AAM (con dấu) | Hồ sơ cấp/thu hồi/quản lý con dấu đạt |
| QF-812-08 | Sổ quản lý linh kiện giới hạn tuổi thọ | Quản lý lịch sử tuổi thọ/chu kỳ/thay thế LLP |
| QF-812-09 | Sổ quản lý vật liệu có hạn sử dụng | Theo dõi hạn sử dụng vật liệu Shelf-Life |
| QF-812-10 | Biên bản xử lý vật liệu không rõ nhận dạng | Hồ sơ xử lý khi phát hiện vật liệu không rõ nhận dạng |

---

## Phụ lục A: Sơ đồ luồng truy xuất lô

```
┌──────────────┐
│ Nhập nguyên  │
│ liệu thô     │
│ (Cấp số lô)  │
└──────┬───────┘
       │ Ánh xạ Mill Cert (QF-812-01)
       │ Đăng ký lô nhập kho (QF-812-02)
       │ Dán nhãn barcode
       ▼
┌──────────────┐
│ Kiểm tra     │
│ đầu vào      │
│ (Đạt/KPH)    │
└──────┬───────┘
       │ Đạt → Khu vực bảo quản đã phê duyệt
       │ Không phù hợp → Cách ly (QP-818)
       ▼
┌──────────────┐
│ Xuất vật liệu│
│ (Theo WO)    │
└──────┬───────┘
       │ ERP: WO ↔ Ánh xạ lô nguyên liệu thô
       ▼
┌──────────────┐
│ Quy trình    │◄── Phiếu theo dõi đi kèm (QF-812-03)
│ 1~N          │    Chữ ký người vận hành/kiểm tra
│ (Gia công/   │    Ghi thiết bị/dụng cụ đo sử dụng
│ Lắp ráp)     │
└──────┬───────┘
       │
       │ (Khi có quy trình gia công ngoài)
       ├──► Xuất gia công → Gia công ngoài → Nhận về
       │    (Đính kèm biên bản gia công ngoài)
       ▼
┌──────────────┐
│ Kiểm tra     │
│ cuối cùng    │
└──────┬───────┘
       │ Cấp AAM, đăng ký ERP
       ▼
┌──────────────┐
│ Nhập thành   │
│ phẩm         │
└──────┬───────┘
       │ Xác minh truy xuất (QP-817)
       ▼
┌──────────────┐
│ Xuất kho     │──► CoC, phiếu đóng gói (QF-812-04)
│ (Giao hàng)  │    Ma trận truy xuất (QF-812-05)
└──────────────┘
```

---

> **Kết thúc tài liệu — QP-812 Rev. 0**
>
> Quy trình này được thực hiện sau khi đại diện lãnh đạo chất lượng (QMR) phê duyệt và được quản lý theo QP-706 (Quản lý thông tin tài liệu).
> Bản in của tài liệu này chỉ có tính chất tham khảo, chỉ bản đăng ký DMS mới là tài liệu hợp lệ chính thức.
