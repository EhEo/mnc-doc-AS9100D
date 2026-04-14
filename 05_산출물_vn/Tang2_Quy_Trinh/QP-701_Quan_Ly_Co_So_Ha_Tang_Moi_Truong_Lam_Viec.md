# Thủ tục Quản lý Cơ sở hạ tầng và Môi trường làm việc
## Infrastructure and Work Environment Management Procedure

| Mục | Nội dung |
|-----|----------|
| Mã tài liệu | QP-701 |
| Lần sửa đổi | Rev. 0 |
| Ngày ban hành | Tháng 5 năm 2026 |
| Tiêu chuẩn áp dụng | AS9100D Rev D, 7.1.3, 7.1.4 |
| Mức độ bảo mật | Bảo mật (Confidential) |
| Tài liệu cấp trên | QM-001 Sổ tay chất lượng §7.1 |

| Phân loại | Chức vụ | Họ tên | Chữ ký | Ngày |
|-----------|---------|--------|--------|------|
| Soạn thảo | Nhân viên quản lý cơ sở vật chất | | | |
| Xem xét | Trưởng phòng Chất lượng | | | |
| Phê duyệt | Đại diện lãnh đạo chất lượng (QMR) | | | |

---

## Lịch sử sửa đổi

| Rev. | Ngày | Nội dung sửa đổi | Người soạn | Người phê duyệt |
|------|------|-----------------|------------|----------------|
| 0 | 2026-05-__ | Ban hành lần đầu (soạn thảo mới theo AS9100D Rev D) | | |

---

## Mục lục

1. [Mục đích](#1-mục-đích)
2. [Phạm vi áp dụng](#2-phạm-vi-áp-dụng)
3. [Tài liệu/tiêu chuẩn tham chiếu](#3-tài-liệu-tiêu-chuẩn-tham-chiếu)
4. [Thuật ngữ và định nghĩa](#4-thuật-ngữ-và-định-nghĩa)
5. [Trách nhiệm và quyền hạn](#5-trách-nhiệm-và-quyền-hạn)
6. [Quản lý cơ sở hạ tầng](#6-quản-lý-cơ-sở-hạ-tầng)
7. [Quản lý môi trường làm việc](#7-quản-lý-môi-trường-làm-việc)
8. [Bảo dưỡng phòng ngừa](#8-bảo-dưỡng-phòng-ngừa)
9. [Yêu cầu đặc thù hàng không vũ trụ](#9-yêu-cầu-đặc-thù-hàng-không-vũ-trụ)
10. [Quản lý hồ sơ](#10-quản-lý-hồ-sơ)
11. [Tài liệu và biểu mẫu liên quan](#11-tài-liệu-và-biểu-mẫu-liên-quan)

---

# 1. Mục đích

Thủ tục này quy định quy trình xác định, cung cấp, duy trì cơ sở hạ tầng (Infrastructure) cần thiết để đạt được sự phù hợp của sản phẩm và vận hành hiệu quả hệ thống quản lý chất lượng, đồng thời quản lý phù hợp môi trường làm việc (Work Environment) tại M&C Electronics VINA (sau đây gọi là "Công ty").

Mục đích của thủ tục này:
- Quản lý và bảo trì có hệ thống cơ sở hạ tầng theo yêu cầu AS9100D 7.1.3
- Duy trì điều kiện phù hợp cho môi trường vận hành quá trình theo yêu cầu AS9100D 7.1.4
- Quản lý vòng đời của các nguồn lực cơ sở hạ tầng như tòa nhà, thiết bị, tiện ích, hệ thống IT, phương tiện vận chuyển
- Theo dõi và quản lý các yếu tố môi trường làm việc như nhiệt độ, độ ẩm, độ sáng, tĩnh điện, độ sạch
- Đảm bảo điều kiện môi trường ảnh hưởng đến chất lượng và an toàn của sản phẩm hàng không vũ trụ
- Tối thiểu hóa gián đoạn sản xuất và nâng cao tỷ lệ hoạt động của thiết bị thông qua bảo dưỡng phòng ngừa (PM)

---

# 2. Phạm vi áp dụng

Thủ tục này áp dụng cho tất cả cơ sở hạ tầng và môi trường làm việc trong phạm vi QMS của M&C Electronics VINA.

### 2.1 Phạm vi áp dụng cơ sở hạ tầng

| Phân loại | Đối tượng áp dụng | Ví dụ |
|-----------|-----------------|-------|
| Tòa nhà/Cơ sở | Nhà xưởng, nhà văn phòng, kho hàng, phòng kiểm tra | Kết cấu tòa nhà, sàn, tường, mái, thoát nước |
| Thiết bị sản xuất | Thiết bị sản xuất chính, máy gia công, thiết bị lắp ráp | CNC, dây chuyền SMT, thiết bị hàn, máy ép |
| Tiện ích | Điện, khí nén, cấp nước, thông gió | Trạm biến áp, máy nén khí, hệ thống cấp nước, hệ thống thông gió |
| Cơ sở hạ tầng IT | Mạng, máy chủ, phần mềm | ERP, DMS, thiết bị mạng, hệ thống sao lưu |
| Phương tiện vận chuyển | Xe và thiết bị dùng cho vận chuyển nội bộ/bên ngoài | Xe nâng, xe đẩy tay, phương tiện vận chuyển |
| Thiết bị hỗ trợ | Thiết bị an toàn, phòng cháy, an ninh | Bình chữa cháy, CCTV, hệ thống kiểm soát ra vào |

### 2.2 Phạm vi áp dụng môi trường làm việc

| Phân loại | Đối tượng áp dụng | Yếu tố quản lý |
|-----------|-----------------|--------------|
| Môi trường vật lý | Khu vực sản xuất, phòng kiểm tra, khu vực bảo quản | Nhiệt độ, độ ẩm, độ sáng, tiếng ồn, rung động |
| Môi trường độ sạch | Phòng sạch, khu vực kiểm soát FOD | Hạt bụi, vật lạ, chất gây nhiễm |
| Môi trường điện | Khu vực xử lý sản phẩm nhạy cảm với ESD | Tĩnh điện, nối đất, ion hóa |
| Môi trường hóa học | Khu vực sử dụng/bảo quản hóa chất | Thông gió, nồng độ chất độc hại |
| Môi trường nhân lực | Toàn bộ cơ sở | An toàn, ergonomy, vệ sinh, môi trường tâm lý |

**Ngoại trừ**: Môi trường văn phòng tại trụ sở chính (Hàn Quốc) (áp dụng hệ thống quản lý riêng)

---

# 3. Tài liệu/tiêu chuẩn tham chiếu

| Tài liệu/tiêu chuẩn | Nội dung |
|--------------------|----------|
| AS9100D Rev D | Yêu cầu hệ thống quản lý chất lượng hàng không vũ trụ (điều 7.1.3, 7.1.4) |
| ISO 9001:2015 | Yêu cầu hệ thống quản lý chất lượng (điều 7.1.3, 7.1.4) |
| IPC-A-610 | Tiêu chí chấp nhận sản phẩm lắp ráp điện tử (yêu cầu điều kiện môi trường) |
| IPC J-STD-001 | Yêu cầu hàn (tiêu chuẩn môi trường làm việc) |
| ANSI/ESD S20.20 | Hướng dẫn phát triển chương trình quản lý ESD |
| IEC 61340-5-1 | Bảo vệ khỏi hiện tượng tĩnh điện – Yêu cầu chung |
| NAS 412 | Phòng chống FOD (liên kết với độ sạch môi trường làm việc) |
| Luật An toàn vệ sinh lao động Việt Nam | Tiêu chuẩn an toàn vệ sinh tại nơi làm việc (áp dụng QCVN) |
| QCVN 26:2016/BYT | Tiêu chuẩn vi khí hậu (nhiệt độ, độ ẩm) môi trường làm việc tại Việt Nam |
| QCVN 22:2016/BYT | Tiêu chuẩn độ sáng môi trường làm việc tại Việt Nam |

---

# 4. Thuật ngữ và định nghĩa

| Thuật ngữ | Định nghĩa |
|-----------|-----------|
| Cơ sở hạ tầng (Infrastructure) | Tổng thể cơ sở, thiết bị, tiện ích, hệ thống IT, v.v. cần thiết cho hoạt động của tổ chức (AS9100D 7.1.3) |
| Môi trường làm việc (Work Environment) | Tập hợp các điều kiện mà trong đó công việc được thực hiện, bao gồm các yếu tố vật lý, xã hội, tâm lý và môi trường (AS9100D 7.1.4) |
| PM (Preventive Maintenance) | Bảo dưỡng phòng ngừa. Hoạt động bảo trì được thực hiện có kế hoạch trước khi xảy ra hỏng hóc thiết bị |
| BM (Breakdown Maintenance) | Bảo dưỡng sự cố. Hoạt động sửa chữa khẩn cấp được thực hiện sau khi xảy ra hỏng hóc |
| CBM (Condition-Based Maintenance) | Bảo dưỡng dựa trên tình trạng. Phương pháp quyết định thời điểm bảo trì dựa trên theo dõi tình trạng thiết bị |
| OEE (Overall Equipment Effectiveness) | Hiệu quả thiết bị tổng thể. Tỷ lệ hoạt động × Tỷ lệ hiệu suất × Tỷ lệ sản phẩm tốt |
| ESD (Electrostatic Discharge) | Phóng điện tĩnh điện. Hiện tượng tĩnh điện có thể gây hỏng hóc linh kiện điện tử |
| EPA (ESD Protected Area) | Khu vực bảo vệ ESD. Khu vực làm việc được áp dụng quản lý tĩnh điện |
| FOD (Foreign Object Debris/Damage) | Hư hỏng do vật lạ. Vật lạ bên ngoài có thể gây hư hỏng sản phẩm hoặc hư hỏng do đó gây ra |
| Phòng sạch (Clean Room) | Phòng làm việc sạch với nồng độ hạt bụi trong không khí được kiểm soát |
| Khu vực kiểm soát (Controlled Area) | Khu vực được chỉ định nơi một số điều kiện môi trường nhất định được quản lý (ESD, phòng sạch, khu vực kiểm soát FOD, v.v.) |
| Theo dõi môi trường | Hoạt động đo lường và ghi chép các thông số chính của môi trường làm việc (nhiệt độ, độ ẩm, độ sáng, v.v.) |

---

# 5. Trách nhiệm và quyền hạn

| Chức vụ/Bộ phận | Trách nhiệm và quyền hạn |
|----------------|------------------------|
| **Ban lãnh đạo** | • Phê duyệt ngân sách đầu tư cơ sở hạ tầng và phân bổ nguồn lực<br>• Phê duyệt chính sách môi trường làm việc<br>• Đánh giá tính phù hợp của cơ sở hạ tầng trong xem xét lãnh đạo |
| **QMR (Đại diện lãnh đạo chất lượng)** | • Phê duyệt và giám sát thực hiện thủ tục này<br>• Đánh giá tác động của môi trường làm việc đến chất lượng sản phẩm<br>• Phán định sự phù hợp của kết quả theo dõi môi trường |
| **Nhân viên quản lý cơ sở vật chất** | • Quản lý danh mục cơ sở hạ tầng (Master List)<br>• Lập kế hoạch và thực hiện bảo dưỡng phòng ngừa (PM)<br>• Quản lý bảo trì cơ sở tiện ích<br>• Kiểm tra an toàn tòa nhà/cơ sở |
| **Trưởng phòng Sản xuất** | • Kiểm tra hàng ngày và báo cáo bất thường thiết bị sản xuất<br>• Duy trì điều kiện môi trường làm việc trong khu vực sản xuất<br>• Báo cáo ngay và ứng phó ban đầu khi thiết bị bất thường<br>• Thực hiện đào tạo quản lý môi trường cho công nhân |
| **Trưởng phòng Chất lượng** | • Giám sát quản lý điều kiện môi trường phòng kiểm tra<br>• Xem xét dữ liệu theo dõi môi trường và xử lý khi bất thường<br>• Kiểm toán sự phù hợp môi trường ESD/phòng sạch<br>• Xử lý không phù hợp liên quan đến môi trường làm việc |
| **Nhân viên IT** | • Quản lý cơ sở hạ tầng IT (mạng, máy chủ, phần mềm)<br>• Quản lý sao lưu dữ liệu và bảo mật thông tin<br>• Bảo trì hệ thống DMS/ERP |
| **Nhân viên An toàn vệ sinh lao động** | • Kiểm tra an toàn môi trường làm việc (tuân thủ pháp luật Việt Nam)<br>• Quản lý hóa chất và kiểm tra cơ sở thông gió<br>• Kiểm tra thiết bị phòng cháy/khẩn cấp |
| **Công nhân (toàn bộ)** | • Thực hiện kiểm tra hàng ngày thiết bị phụ trách (đầu/cuối ca)<br>• Báo cáo ngay khi phát hiện bất thường môi trường làm việc<br>• Tuân thủ quy định ESD/FOD/độ sạch |

---

# 6. Quản lý cơ sở hạ tầng

## 6.1 Xác định và cung cấp cơ sở hạ tầng

### 6.1.1 Xác định nhu cầu cơ sở hạ tầng

Xác định cơ sở hạ tầng cần thiết dựa trên các yếu tố sau:

- Thiết bị và cơ sở cần thiết để đạt được sự phù hợp của sản phẩm và dịch vụ
- Điều kiện môi trường/thiết bị yêu cầu bởi yêu cầu khách hàng và tiêu chuẩn áp dụng
- Thông số kỹ thuật thiết bị cần thiết để đảm bảo năng lực quy trình (Capability)
- Yêu cầu an toàn lao động và ergonomy
- Yêu cầu pháp quy địa phương Việt Nam (an toàn vệ sinh công nghiệp, môi trường, phòng cháy)

### 6.1.2 Thủ tục đưa cơ sở hạ tầng vào sử dụng

| Bước | Hoạt động | Phụ trách | Đầu ra |
|------|----------|----------|--------|
| 1 | Xem xét nhu cầu và xác định thông số kỹ thuật | BP yêu cầu + Quản lý cơ sở vật chất | Phiếu yêu cầu đưa thiết bị vào sử dụng |
| 2 | Xem xét ngân sách và phê duyệt | Ban lãnh đạo | Phê duyệt đầu tư |
| 3 | Mua sắm/Lắp đặt | Quản lý cơ sở vật chất + BP Mua hàng | Đơn đặt hàng, hồ sơ lắp đặt |
| 4 | Xác nhận (Validation) và kiểm tra năng lực | Quản lý cơ sở vật chất + BP Chất lượng | Hồ sơ IQ/OQ/PQ |
| 5 | Đăng ký danh mục cơ sở hạ tầng | Quản lý cơ sở vật chất | Danh mục cơ sở hạ tầng tổng hợp |
| 6 | Bắt đầu vận hành | BP liên quan | Phê duyệt bắt đầu vận hành |

## 6.2 Quản lý tòa nhà và cơ sở

### 6.2.1 Quản lý tòa nhà

- Kiểm tra định kỳ kết cấu tòa nhà (sàn, tường, mái, thoát nước): ít nhất **2 lần/năm**
- Xử lý ngay khi phát hiện lão hóa tòa nhà, thấm dột, nứt vỡ, v.v.
- Sàn khu vực sản xuất: Duy trì tình trạng chống tĩnh điện (sàn dẫn điện) hoặc phủ epoxy
- Kiểm tra tình trạng kín của cửa ra vào, cửa sổ (phòng FOD/côn trùng)

### 6.2.2 Phân chia và quản lý khu vực

| Khu vực | Cấp quản lý | Điều kiện môi trường | Kiểm soát ra vào |
|---------|------------|---------------------|-----------------|
| Khu vực văn phòng thông thường | Thông thường | Duy trì môi trường thoải mái | Ra vào bằng thẻ nhân viên |
| Khu vực sản xuất | Có kiểm soát | Quản lý nhiệt độ, độ ẩm, độ sáng | Ra vào người được phép |
| Phòng kiểm tra | Kiểm soát chặt | Quản lý nhiệt độ, độ ẩm, độ sáng, rung động | Ra vào người được phép + ghi chép |
| Khu vực bảo vệ ESD (EPA) | Kiểm soát chặt | Áp dụng tiêu chuẩn quản lý tĩnh điện | Người đã được đào tạo ESD |
| Phòng sạch/Khu vực sạch | Quản lý đặc biệt | Quản lý nhiệt độ, độ ẩm, hạt bụi, chênh áp | Người đã được đào tạo phòng sạch |
| Khu vực bảo quản hóa chất | Quản lý đặc biệt | Thông gió, nhiệt độ, bảo quản cách ly | Người có năng lực xử lý |
| Khu vực bảo quản vật liệu/sản phẩm | Có kiểm soát | Nhiệt độ, độ ẩm, độ sạch | Ra vào người được phép |

## 6.3 Quản lý thiết bị sản xuất

### 6.3.1 Quản lý danh mục thiết bị

Tất cả thiết bị sản xuất được đăng ký quản lý trong **Danh mục thiết bị tổng hợp (QF-701-01)**.

Thông tin đăng ký:
- Mã số duy nhất của thiết bị (hệ thống cấp mã quản lý: Mã BP-Loại thiết bị-Số thứ tự)
- Tên thiết bị, nhà sản xuất, tên model, số serial
- Ngày lắp đặt, vị trí lắp đặt
- Thông số kỹ thuật chính (công suất, độ chính xác, v.v.)
- Chu kỳ PM và ngày thực hiện PM gần nhất
- Tình trạng thiết bị (Đang hoạt động/Đang bảo trì/Dự kiến thải loại)

### 6.3.2 Kiểm tra hàng ngày thiết bị

| Thời điểm kiểm tra | Mục kiểm tra | Phụ trách | Hồ sơ |
|-------------------|-------------|----------|-------|
| Trước khi bắt đầu ca | Ngoại quan, tiếng ồn bất thường, tình trạng bôi trơn, thiết bị an toàn | Công nhân | Phiếu kiểm tra hàng ngày thiết bị (QF-701-02) |
| Trong khi làm việc | Quan sát dấu hiệu bất thường (rung động, tiếng ồn, phát nhiệt, chất lượng gia công) | Công nhân | Báo cáo ngay khi phát hiện bất thường |
| Khi kết thúc ca | Vệ sinh, bôi trơn, loại bỏ mạt thừa, xác nhận tắt nguồn | Công nhân | Phiếu kiểm tra hàng ngày thiết bị (QF-701-02) |

## 6.4 Quản lý tiện ích

| Tiện ích | Mục quản lý | Chu kỳ kiểm tra | Phụ trách |
|---------|------------|----------------|----------|
| Điện | Trạm biến áp, UPS, ổn định điện áp | 1 lần/tháng | Quản lý cơ sở vật chất |
| Khí nén | Máy nén khí, máy sấy, rò rỉ đường ống, điểm sương | 1 lần/tuần | Quản lý cơ sở vật chất |
| Cấp nước | Chất lượng nước, tình trạng đường ống, thiết bị lọc nước | 1 lần/tháng | Quản lý cơ sở vật chất |
| Thông gió/Hút gió | Quạt hút, ống dẫn, tình trạng bộ lọc | 1 lần/tháng | Quản lý cơ sở vật chất |
| Khí đốt | Rò rỉ đường ống, tình trạng van, xác nhận lượng còn lại | 1 lần/tuần | Quản lý cơ sở vật chất |

## 6.5 Quản lý cơ sở hạ tầng IT

| Mục quản lý | Nội dung | Chu kỳ |
|------------|----------|-------|
| Mạng | Theo dõi tính sẵn có, áp dụng bản vá bảo mật | Liên tục/1 lần/tháng |
| Máy chủ | Tình trạng hoạt động, quản lý dung lượng, xác nhận sao lưu | 1 lần/ngày |
| DMS/ERP | Tính sẵn có của hệ thống, tính toàn vẹn dữ liệu | Liên tục |
| Sao lưu dữ liệu | Thực hiện sao lưu định kỳ và kiểm tra khôi phục | Sao lưu: 1 lần/ngày, Kiểm tra khôi phục: 2 lần/năm |
| Bảo mật thông tin | Quản lý quyền truy cập, biện pháp chống virus | Liên tục/Kiểm tra 1 lần/quý |

## 6.6 Quản lý phương tiện vận chuyển

| Phương tiện | Mục quản lý | Chu kỳ kiểm tra |
|------------|------------|----------------|
| Xe nâng | Kiểm tra hàng ngày (phanh, thủy lực, lốp), kiểm định định kỳ | Trước khi sử dụng/1 lần/năm |
| Xe đẩy tay | Ngoại quan, thủy lực, tình trạng bánh xe | Trước khi sử dụng |
| Phương tiện vận chuyển | Kiểm định theo quy định pháp luật, kiểm tra hàng ngày | Trước khi sử dụng/Theo chu kỳ pháp định |

---

# 7. Quản lý môi trường làm việc

## 7.1 Tiêu chuẩn quản lý môi trường

### 7.1.1 Quản lý nhiệt độ và độ ẩm (Tiêu chuẩn thực tế áp dụng tại M&C — Mã tiêu chuẩn: ISO.04.09.01)

Bảng tiêu chuẩn môi trường thực tế của M&C Electronics VINA dưới đây được đo và ghi chép 2 lần/ngày (buổi sáng/buổi chiều). Đo bằng nhiệt ẩm kế tại vị trí được chỉ định của từng quy trình và ghi vào phiếu kiểm tra.

| STT | Khu vực | Tiêu chuẩn nhiệt độ (°C) | Tiêu chuẩn độ ẩm (%) | Chu kỳ theo dõi | Biểu mẫu ghi chép |
|-----|--------|------------------------|---------------------|----------------|-----------------|
| 1 | Bảo quản Jig CNC | 21~25 | 50~60 | 2 lần/ngày | Phiếu kiểm tra |
| 2 | Độ tin cậy (Reliability) | 21~25 | 30~70 | 2 lần/ngày | Phiếu kiểm tra |
| 3 | Kho Tape | 21~25 | 30~70 | 2 lần/ngày | Phiếu kiểm tra |
| 4 | Kho nhôm | 15~35 | 20~80 | 2 lần/ngày | Phiếu kiểm tra |
| 5 | Kho nhựa | 15~35 | 20~80 | 2 lần/ngày | Phiếu kiểm tra |
| 6 | Kho hóa chất | 15~35 | 20~80 | 2 lần/ngày | Phiếu kiểm tra |
| 7 | Kho Sơn | 15~35 | 20~80 | 2 lần/ngày | Phiếu kiểm tra |
| 8 | Kho Dầu đúc kim loại | 15~35 | 20~80 | 2 lần/ngày | Phiếu kiểm tra |
| 9 | Kho thành phẩm | 15~35 | 20~80 | 2 lần/ngày | Phiếu kiểm tra |
| 10 | Kho gia công | 15~35 | 20~80 | 2 lần/ngày | Phiếu kiểm tra |
| 11 | Khuôn | 15~35 | 20~80 | 2 lần/ngày | Phiếu kiểm tra |
| 12 | CNC | 15~35 | 20~80 | 2 lần/ngày | Phiếu kiểm tra |
| 13 | Polishing (Đánh bóng) | 15~35 | 20~80 | 2 lần/ngày | Phiếu kiểm tra |
| 14 | Chromate (Xử lý hóa học) | 15~35 | 20~80 | 2 lần/ngày | Phiếu kiểm tra |
| 15 | Injection (Ép nhựa) | 15~35 | 20~80 | 2 lần/ngày | Phiếu kiểm tra |
| 16 | Coating (Sơn phủ) | 15~35 | 20~80 | 2 lần/ngày | Phiếu kiểm tra |
| 17 | Leak test (Kiểm tra rò rỉ) | 18~32 | 20~80 | 2 lần/ngày | Phiếu kiểm tra |
| 18 | Assy (Lắp ráp) | 21~25 | 30~70 | 2 lần/ngày | Phiếu kiểm tra |
| 19 | GP12 (Kiểm tra xuất hàng) | 20~30 | 20~80 | 2 lần/ngày | Phiếu kiểm tra |

**Xử lý khi bất thường**: Khi nhiệt độ hoặc độ ẩm vượt ra ngoài tiêu chuẩn hoặc liên tục 2 ngày tiếp cận giới hạn Min/Max, báo cáo ngay cho cấp trên và yêu cầu BP thiết bị/cơ sở vật chất xử lý ngay lập tức.

### 7.1.2 Quản lý độ sáng (Tiêu chuẩn thực tế M&C)

| Khu vực | Tiêu chuẩn độ sáng | Phương pháp đo | Chu kỳ kiểm tra | Hồ sơ |
|---------|------------------|--------------|----------------|-------|
| Tất cả khu vực bàn kiểm tra | 800~1.200 lux | Đo bằng máy đo độ sáng, thực hiện theo hướng dẫn | 1 lần/tuần | Biểu đồ quản lý độ sáng |
| Khu vực kiểm tra Back glass | 1.500~2.000 lux | Đo bằng máy đo độ sáng | 1 lần/tuần | Biểu đồ quản lý độ sáng |

Khi vượt tiêu chuẩn: Bổ sung hoặc bỏ đèn huỳnh quang để duy trì tiêu chuẩn độ sáng.

| Khu vực bảo quản vật liệu | 60 ± 10% RH | 50~70% RH | 2 lần/ngày | QF-701-03 |
| Phòng sạch | 45 ± 10% RH | 35~55% RH | Theo dõi liên tục | Tự động ghi chép |

> **Lưu ý**: Khi độ ẩm < 30% RH, nguy cơ ESD tăng; khi > 70% RH, nguy cơ ngưng tụ/ăn mòn. Cần hành động khắc phục ngay.

### 7.1.3 Quản lý độ sáng

| Khu vực | Tiêu chuẩn độ sáng (lux) | Khoảng cho phép | Chu kỳ đo | Biểu mẫu |
|---------|------------------------|----------------|---------|---------|
| Khu vực sản xuất thông thường | ≥ 300 lux | 300~500 lux | 1 lần/quý | QF-701-04 |
| Khu vực lắp ráp chính xác | ≥ 500 lux | 500~750 lux | 1 lần/quý | QF-701-04 |
| Khu vực kiểm tra | ≥ 750 lux | 750~1000 lux | 1 lần/quý | QF-701-04 |
| Khu vực kiểm tra ngoại quan | ≥ 1000 lux | 1000~1500 lux | 1 lần/quý | QF-701-04 |
| Khu vực văn phòng | ≥ 300 lux | 300~500 lux | 2 lần/năm | QF-701-04 |
| Kho/Khu bảo quản | ≥ 150 lux | 150~300 lux | 2 lần/năm | QF-701-04 |

> **Lưu ý**: Tuân thủ QCVN 22:2016/BYT của Việt Nam và yêu cầu môi trường kiểm tra IPC-A-610. Đo độ sáng bằng máy đo độ sáng đã hiệu chuẩn ở độ cao bề mặt làm việc.

### 7.1.4 Quản lý tĩnh điện (ESD)

Áp dụng các yêu cầu sau đối với khu vực xử lý sản phẩm nhạy cảm với ESD (linh kiện điện tử, PCB, bán dẫn, v.v.):

| Mục quản lý | Tiêu chuẩn | Chu kỳ kiểm tra | Phụ trách |
|------------|---------|----------------|----------|
| Điện trở nối đất | < 1,0 × 10⁹ Ω (điện trở bề mặt) | 1 lần/tháng | Quản lý cơ sở vật chất |
| Điện trở bề mặt bàn làm việc | 1,0 × 10⁶ ~ 1,0 × 10⁹ Ω | 1 lần/tháng | BP Chất lượng |
| Điện trở bề mặt sàn | 1,0 × 10⁶ ~ 1,0 × 10⁹ Ω | 1 lần/quý | Quản lý cơ sở vật chất |
| Dây đeo cổ tay nối đất (Wrist Strap) | Xác nhận liên tục nối đất (< 35 MΩ) | Trước khi sử dụng hàng ngày | Công nhân |
| Máy ion hóa (Ionizer) | Xác nhận thời gian phóng điện và điện áp cân bằng | 1 lần/tháng | Quản lý cơ sở vật chất |
| Độ ẩm | Duy trì > 30% RH | Liên tục | Quản lý cơ sở vật chất |
| Thiết bị bảo vệ ESD | Xác nhận mặc áo choàng ESD, giày nối đất, găng tay ESD | Hàng ngày | TP Sản xuất |

> **Chi tiết**: Chi tiết vận hành Khu vực bảo vệ ESD (EPA) theo **WI-701-01 Hướng dẫn quản lý ESD**.

### 7.1.5 Quản lý độ sạch (Liên kết FOD)

| Khu vực | Cấp độ sạch | Tiêu chuẩn quản lý | Chu kỳ kiểm tra |
|---------|-----------|-----------------|----------------|
| Khu vực sản xuất thông thường | Thông thường | Vệ sinh trước/sau khi làm việc, kiểm tra 5S hàng tuần | 1 lần/ngày |
| Khu vực lắp ráp linh kiện điện tử | Có kiểm soát | Vệ sinh bàn làm việc, cấm mang thức ăn, kiểm soát bao bì | 1 lần/ngày |
| Phòng sạch/Khu vực sạch | Kiểm soát chặt | Đáp ứng tiêu chuẩn hạt bụi, tuân thủ thủ tục vào phòng sạch | Liên tục |
| Khu vực kiểm tra | Có kiểm soát | Loại bỏ vật lạ, 5S, đảm bảo độ sáng | 1 lần/ngày |
| Khu vực bảo quản vật liệu | Có kiểm soát | Vệ sinh sàn, FIFO, chống côn trùng/ẩm | 1 lần/tuần |

> **Liên kết phòng chống FOD**: Quản lý độ sạch được vận hành liên kết với **QP-819 Thủ tục quản lý phòng chống FOD**. Tiêu chuẩn độ sạch khu vực kiểm soát FOD, thủ tục kiểm tra vật lạ, hệ thống báo cáo FOD theo QP-819.

## 7.2 Xử lý khi sai lệch điều kiện môi trường

### 7.2.1 Tiêu chí phán định sai lệch

Khi kết quả theo dõi môi trường vượt ra ngoài khoảng cho phép, phán định là "Sai lệch (Out of Specification)".

### 7.2.2 Thủ tục xử lý khi sai lệch

| Bước | Hoạt động | Phụ trách | Thời hạn |
|------|----------|----------|---------|
| 1 | Xác nhận sai lệch và báo cáo ngay | Người phát hiện → TP BP liên quan | Ngay lập tức |
| 2 | Phán định có dừng công việc tại khu vực không | TP BP liên quan + TP Chất lượng | Trong vòng 30 phút |
| 3 | Điều tra nguyên nhân sai lệch và khôi phục điều kiện môi trường | Quản lý cơ sở vật chất + BP liên quan | Trong vòng 4 giờ |
| 4 | Đánh giá tác động đến sản phẩm được sản xuất/kiểm tra trong thời gian sai lệch | BP Chất lượng | Trong vòng 24 giờ |
| 5 | Quyết định xử lý sản phẩm bị ảnh hưởng (kiểm tra lại/phế phẩm, v.v.) | TP Chất lượng | Sau khi đánh giá tác động |
| 6 | Thực hiện hành động khắc phục và phòng ngừa tái phát | Quản lý cơ sở vật chất + BP liên quan | Trong vòng 1 tuần |
| 7 | Xác nhận hiệu quả hành động khắc phục | TP Chất lượng | Sau hành động khắc phục |

### 7.2.3 Ứng phó tình huống khẩn cấp

Trong các trường hợp sau, dừng ngay công việc tại khu vực liên quan và báo cáo QMR:
- Nhiệt độ sai lệch hơn ±10°C so với khoảng cho phép
- Độ ẩm < 30% RH hoặc > 80% RH (khu vực ESD)
- Mất điện, ngừng cấp nước hoặc gián đoạn cung cấp tiện ích
- Đảo chiều chênh áp phòng sạch hoặc hạt bụi tăng đột ngột
- Tình huống khẩn cấp liên quan đến an toàn (cháy, rò rỉ, v.v.)

## 7.3 Quản lý môi trường nhân lực

| Yếu tố quản lý | Nội dung quản lý | Chu kỳ |
|--------------|----------------|-------|
| An toàn | Đăng nội quy an toàn, xác nhận mặc thiết bị bảo hộ, đánh dấu khu vực nguy hiểm | Liên tục |
| Ergonomy | Đánh giá độ cao bàn làm việc, góc chiếu sáng, tải lao động lặp đi lặp lại | 2 lần/năm |
| Tiếng ồn | Đo tiếng ồn, biện pháp cách âm, cấp thiết bị bảo vệ thính lực | Đo 2 lần/năm |
| Vệ sinh | Duy trì tình trạng nhà vệ sinh, nước uống, thông gió | Liên tục |

---

# 8. Bảo dưỡng phòng ngừa (Preventive Maintenance)

## 8.1 Hệ thống bảo dưỡng

### 8.1.1 Loại hình bảo dưỡng

| Loại | Mô tả | Đối tượng áp dụng |
|------|-------|-----------------|
| Kiểm tra hàng ngày | Kiểm tra nhanh do công nhân thực hiện hàng ngày | Tất cả thiết bị sản xuất |
| PM định kỳ | Kiểm tra/bảo trì theo chu kỳ có kế hoạch | Thiết bị trong danh sách PM |
| CBM (Bảo dưỡng dựa trên tình trạng) | Bảo trì dựa trên theo dõi tình trạng thiết bị | Thiết bị chủ chốt |
| BM (Bảo dưỡng sự cố) | Sửa chữa khẩn cấp sau khi xảy ra hỏng hóc | Thiết bị hỏng |
| Bảo dưỡng cải tiến | Hoạt động cải tiến thiết bị và nâng cao hiệu suất | Thiết bị cần cải tiến |

### 8.1.2 Phân loại cấp độ PM

| Cấp độ | Tiêu chí | Chu kỳ PM | Ví dụ |
|--------|---------|---------|-------|
| Cấp A (Chủ chốt) | Dừng dây chuyền sản xuất khi hỏng, không thể thay thế | ≥ 1 lần/tháng | CNC, dây chuyền SMT |
| Cấp B (Quan trọng) | Ảnh hưởng một phần khi hỏng, có thể thay thế | ≥ 1 lần/quý | Thiết bị hàn, máy ép |
| Cấp C (Thông thường) | Ảnh hưởng nhỏ khi hỏng, dễ thay thế | ≥ 1 lần/6 tháng | Dụng cụ, thiết bị phụ trợ |

## 8.2 Lập kế hoạch và thực hiện PM

### 8.2.1 Kế hoạch PM hàng năm

- Nhân viên quản lý cơ sở vật chất lập **Kế hoạch PM hàng năm (QF-701-05)** cho năm tiếp theo vào tháng 12 hàng năm.
- Kế hoạch PM bao gồm:
  - Danh sách thiết bị đối tượng và cấp độ PM
  - Chu kỳ PM và ngày dự kiến
  - Các mục PM (kiểm tra, thay thế, bôi trơn, hiệu chuẩn, v.v.)
  - Danh sách phụ tùng/vật tư tiêu hao cần thiết
  - Phân công người chịu trách nhiệm
- Kế hoạch PM hàng năm được điều phối với lịch sản xuất, sau khi thỏa thuận với TP Sản xuất được QMR phê duyệt.

### 8.2.2 Thủ tục thực hiện PM

| Bước | Hoạt động | Phụ trách | Đầu ra |
|------|----------|----------|--------|
| 1 | Thông báo lịch PM (trước 1 tuần) | Quản lý cơ sở vật chất | Thông báo lịch PM |
| 2 | Dừng thiết bị và biện pháp an toàn | Quản lý cơ sở vật chất + BP Sản xuất | - |
| 3 | Thực hiện kiểm tra/bảo trì từng mục PM | Quản lý cơ sở vật chất (hoặc đơn vị bên ngoài) | Hồ sơ thực hiện PM (QF-701-06) |
| 4 | Ghi chép khi thay thế phụ tùng | Quản lý cơ sở vật chất | Lịch sử thay thế phụ tùng |
| 5 | Xác nhận chạy thử sau khi hoàn thành PM | Quản lý cơ sở vật chất + BP Sản xuất | Hồ sơ xác nhận chạy thử |
| 6 | Phê duyệt phục hồi vận hành thiết bị | TP Sản xuất | Phê duyệt phục hồi vận hành |
| 7 | Cập nhật hồ sơ PM | Quản lý cơ sở vật chất | Cập nhật Danh mục thiết bị tổng hợp |

### 8.2.3 Quản lý tỷ lệ thực hiện PM

- **Mục tiêu tỷ lệ thực hiện PM**: ≥ 95% (theo tháng)
- Tỷ lệ thực hiện PM = (Số lần PM thực tế thực hiện / Số lần PM kế hoạch) × 100%
- Tổng hợp tỷ lệ thực hiện PM hàng tháng và báo cáo trong xem xét lãnh đạo

## 8.3 Ứng phó hỏng hóc (BM)

### 8.3.1 Báo cáo và xử lý hỏng hóc

| Bước | Hoạt động | Phụ trách |
|------|----------|----------|
| 1 | Phát hiện bất thường/hỏng thiết bị → Dừng ngay | Công nhân |
| 2 | Báo cáo TP Sản xuất và Quản lý cơ sở vật chất | Công nhân |
| 3 | Chẩn đoán nguyên nhân hỏng | Quản lý cơ sở vật chất |
| 4 | Sửa chữa (nội bộ/đơn vị bên ngoài) | Quản lý cơ sở vật chất |
| 5 | Chạy thử và xác nhận chất lượng sau khi hoàn thành sửa chữa | Quản lý cơ sở vật chất + BP Chất lượng |
| 6 | Ghi hồ sơ lịch sử hỏng hóc và phân tích phòng ngừa tái phát | Quản lý cơ sở vật chất |

### 8.3.2 Phân tích lịch sử hỏng hóc

- Ghi lịch sử hỏng hóc theo từng thiết bị vào **Phiếu lịch sử thiết bị (QF-701-07)**.
- Phân tích dữ liệu hỏng hóc hàng quý để xác định mẫu hỏng hóc lặp lại.
- Đối với thiết bị hỏng lặp lại, xem xét điều chỉnh chu kỳ PM, thay phụ tùng trước, hoặc thay thế thiết bị.

## 8.4 Chỉ số hiệu suất thiết bị

| Chỉ số | Phương pháp tính | Mục tiêu | Chu kỳ báo cáo |
|--------|----------------|---------|--------------|
| Tỷ lệ thực hiện PM | (Số thực hiện / Số kế hoạch) × 100% | ≥ 95% | Hàng tháng |
| Tỷ lệ hoạt động thiết bị | (Thời gian hoạt động / Thời gian hoạt động kế hoạch) × 100% | ≥ 90% | Hàng tháng |
| MTBF (Thời gian trung bình giữa các lần hỏng) | Tổng thời gian hoạt động / Số lần hỏng | Xu hướng tăng | Hàng quý |
| MTTR (Thời gian sửa chữa trung bình) | Tổng thời gian sửa chữa / Số lần hỏng | Xu hướng giảm | Hàng quý |

---

# 9. Yêu cầu đặc thù hàng không vũ trụ

## 9.1 Chương trình quản lý ESD

### 9.1.1 Vận hành Khu vực bảo vệ ESD (EPA)

Vận hành chương trình quản lý ESD dựa trên ANSI/ESD S20.20 để ngăn ngừa hư hỏng ESD đối với linh kiện điện tử hàng không vũ trụ.

**Yêu cầu lắp đặt EPA**:
- Lắp đặt sàn dẫn điện/tiêu tán tĩnh điện
- Bàn làm việc ESD có nối đất (điện trở bề mặt: 1,0 × 10⁶ ~ 1,0 × 10⁹ Ω)
- Lắp đặt máy ion hóa (trung hòa vật thể không nối đất)
- Dán biển cảnh báo ESD
- Bắt buộc mặc thiết bị bảo vệ ESD khi vào EPA (áo choàng ESD, dây đeo cổ tay nối đất, giày ESD)

### 9.1.2 Kiểm tra và ghi chép ESD

| Mục kiểm tra | Phương pháp | Chu kỳ | Tiêu chí đạt | Hồ sơ |
|-------------|-----------|-------|------------|-------|
| Dây đeo cổ tay | Máy kiểm tra nối đất | Hàng ngày trước khi sử dụng | < 35 MΩ | QF-701-08 |
| Nối đất bàn làm việc | Đo điện trở bề mặt | 1 lần/tháng | 10⁶~10⁹ Ω | QF-701-08 |
| Điện trở sàn | Đo điện trở bề mặt/thể tích | 1 lần/quý | 10⁶~10⁹ Ω | QF-701-08 |
| Máy ion hóa | Thời gian phóng điện/Điện áp cân bằng | 1 lần/tháng | Trong phạm vi tiêu chuẩn | QF-701-08 |
| Bao bì ESD | Đo điện trở bề mặt | Khi nhập/1 lần/năm | 10⁴~10¹¹ Ω | QF-701-08 |

### 9.1.3 Đào tạo ESD

- Nhân viên mới: Đào tạo cơ bản về ESD khi nhận việc (≥ 2 giờ)
- Tất cả công nhân làm việc trong EPA: Đào tạo lại ESD ≥ 1 lần/năm
- Hồ sơ đào tạo được duy trì theo **QP-703 Thủ tục quản lý năng lực và đào tạo**

## 9.2 Quản lý phòng sạch/khu vực kiểm soát

### 9.2.1 Vận hành phòng sạch (khi áp dụng)

Khi phòng sạch đang hoạt động, áp dụng các tiêu chuẩn sau:

| Mục quản lý | Tiêu chuẩn | Chu kỳ theo dõi |
|------------|---------|--------------|
| Hạt bụi (0,5μm) | Tiêu chuẩn cho phép theo ISO Class | 1 lần/ngày / Liên tục |
| Chênh áp (áp dương) | ≥ 10 Pa (so với khu vực liền kề) | Liên tục (đồng hồ đo áp suất) |
| Nhiệt độ | 23 ± 2°C | Theo dõi liên tục |
| Độ ẩm | 45 ± 10% RH | Theo dõi liên tục |
| Số lần thay đổi không khí | Tiêu chuẩn theo Class | Khi lắp đặt/1 lần/năm |
| Bộ lọc HEPA | Xác nhận hiệu quả lọc | 2 lần/năm |

### 9.2.2 Thủ tục vào phòng sạch

1. Mặc đồ phòng sạch, giày phòng sạch, mũ đầu, găng tay tại phòng mặc đồ được chỉ định
2. Đi qua Air Shower (khi được lắp đặt)
3. Vật phẩm đưa vào: Chỉ được phép dùng giấy chuyên dụng phòng sạch và bút chuyên dụng phòng sạch
4. Cấm mang vào thức ăn, giấy thông thường, bút chì, đồ cá nhân
5. Khi rời phòng, cởi đồ theo thứ tự ngược lại

### 9.2.3 Chỉ định và quản lý khu vực kiểm soát

Chỉ định các khu vực cần kiểm soát điều kiện môi trường ảnh hưởng đến chất lượng là "khu vực kiểm soát" và quản lý:
- Soạn thảo và đăng bản đồ (layout) khu vực kiểm soát
- Ghi rõ tiêu chuẩn môi trường theo từng khu vực (nhiệt độ, độ ẩm, độ sáng, độ sạch, v.v.)
- Thủ tục kiểm soát ra vào và tiêu chí năng lực ra vào
- Lắp đặt và duy trì hiệu chuẩn thiết bị theo dõi môi trường
- Vận hành hệ thống cảnh báo (Alarm) khi bất thường (khi áp dụng)

## 9.3 Quản lý hồ sơ theo dõi môi trường

### 9.3.1 Quản lý dữ liệu theo dõi

- Tất cả dữ liệu theo dõi môi trường được ghi vào **Biểu mẫu ghi chép theo dõi môi trường (QF-701-03, QF-701-04)**
- Khi có hệ thống theo dõi tự động, lưu trữ dữ liệu điện tử và sao lưu định kỳ
- Hồ sơ theo dõi môi trường được lưu giữ **tối thiểu 5 năm** (yêu cầu truy xuất hàng không vũ trụ)
- Quản lý có hệ thống để có thể tìm kiếm và xuất trình hồ sơ ngay trong kiểm toán

### 9.3.2 Hiệu chuẩn thiết bị theo dõi

Thiết bị đo sử dụng trong theo dõi môi trường (nhiệt ẩm kế, máy đo độ sáng, máy đo hạt bụi, máy kiểm tra ESD, v.v.) được duy trì hiệu chuẩn theo **QP-702 Thủ tục quản lý thiết bị đo lường và dụng cụ đo**.

### 9.3.3 Phân tích xu hướng

- Phân tích xu hướng dữ liệu theo dõi môi trường hàng quý để phát hiện dấu hiệu bất thường từ sớm.
- Khi phân tích xu hướng xác nhận có sự xấu đi dần dần của điều kiện môi trường, chủ động thực hiện PM hoặc cải tiến cơ sở vật chất.
- Kết quả phân tích xu hướng được sử dụng làm tài liệu đầu vào xem xét lãnh đạo.

## 9.4 Môi trường bảo quản sản phẩm hàng không vũ trụ

Duy trì các điều kiện môi trường sau khi bảo quản vật liệu và sản phẩm hàng không vũ trụ:

| Đối tượng bảo quản | Nhiệt độ | Độ ẩm | Điều kiện bổ sung |
|-------------------|---------|-------|-----------------|
| Linh kiện điện tử | 20~30°C | 30~60% RH | Duy trì bao bì ESD, quản lý cấp MSL |
| Linh kiện kim loại | 20~30°C | < 60% RH | Xử lý chống gỉ, phòng ngưng tụ |
| Vật liệu hóa học | Điều kiện khuyến nghị của nhà sản xuất | Điều kiện khuyến nghị của nhà sản xuất | Đặt sẵn MSDS, bảo quản cách ly |
| Vật liệu có hạn sử dụng | Tiêu chuẩn áp dụng | Tiêu chuẩn áp dụng | Áp dụng FIFO, quản lý hạn sử dụng |

---

# 10. Quản lý hồ sơ

## 10.1 Danh sách hồ sơ

| Tên hồ sơ | Mã biểu mẫu | Chu kỳ lập | Thời hạn lưu | Phụ trách |
|----------|-----------|----------|------------|----------|
| Danh mục thiết bị tổng hợp | QF-701-01 | Cập nhật khi thay đổi | Vĩnh viễn | Quản lý cơ sở vật chất |
| Phiếu kiểm tra hàng ngày thiết bị | QF-701-02 | Hàng ngày | 3 năm | BP Sản xuất |
| Biểu mẫu ghi chép theo dõi môi trường (Nhiệt độ/Độ ẩm) | QF-701-03 | Hàng ngày | 5 năm | BP Sản xuất/Quản lý cơ sở vật chất |
| Biểu mẫu ghi chép đo độ sáng | QF-701-04 | Hàng quý | 5 năm | Quản lý cơ sở vật chất |
| Bảng kế hoạch PM hàng năm | QF-701-05 | Hàng năm | 5 năm | Quản lý cơ sở vật chất |
| Biểu mẫu ghi chép thực hiện PM | QF-701-06 | Khi thực hiện PM | 5 năm | Quản lý cơ sở vật chất |
| Phiếu lịch sử thiết bị | QF-701-07 | Khi xảy ra sự kiện | 3 năm sau khi thải loại | Quản lý cơ sở vật chất |
| Biểu mẫu kiểm tra ESD | QF-701-08 | Theo chu kỳ kiểm tra | 5 năm | BP Chất lượng/Quản lý cơ sở vật chất |
| Báo cáo sai lệch môi trường | QF-701-09 | Khi xảy ra sai lệch | 5 năm | BP Chất lượng |
| Hồ sơ đầu tư/đưa vào sử dụng cơ sở hạ tầng | QF-701-10 | Khi đưa vào sử dụng | Vĩnh viễn | Quản lý cơ sở vật chất |

## 10.2 Nguyên tắc quản lý hồ sơ

- Tất cả hồ sơ được quản lý theo **QP-706 Thủ tục quản lý thông tin được lập thành văn bản**.
- Hồ sơ theo dõi môi trường được lưu giữ **tối thiểu 5 năm** theo yêu cầu truy xuất hàng không vũ trụ.
- Đối với hồ sơ điện tử, đảm bảo tính toàn vẹn dữ liệu và thực hiện sao lưu định kỳ.
- Khi sửa hồ sơ, ghi rõ người sửa đổi và ngày sửa đổi sao cho nội dung trước khi sửa có thể nhận biết được.

---

# 11. Tài liệu và biểu mẫu liên quan

## 11.1 Thủ tục/Hướng dẫn liên quan

| Mã tài liệu | Tên tài liệu | Liên kết |
|------------|-------------|---------|
| QM-001 | Sổ tay chất lượng | Tài liệu cấp trên (§7.1.3, §7.1.4) |
| QP-601 | Thủ tục quản lý rủi ro và cơ hội | Nhận diện rủi ro cơ sở hạ tầng/môi trường |
| QP-702 | Thủ tục quản lý thiết bị đo lường và dụng cụ đo | Hiệu chuẩn thiết bị theo dõi môi trường |
| QP-703 | Thủ tục quản lý năng lực và đào tạo | Hồ sơ đào tạo ESD/phòng sạch/an toàn |
| QP-706 | Thủ tục quản lý thông tin được lập thành văn bản | Nguyên tắc quản lý hồ sơ |
| QP-810 | Thủ tục quản lý sản xuất và cung cấp dịch vụ | Liên kết điều kiện quản lý môi trường sản xuất |
| QP-819 | Thủ tục quản lý phòng chống FOD | Quản lý độ sạch, liên kết khu vực kiểm soát FOD |
| QP-903 | Thủ tục quản lý kiểm toán nội bộ | Tiêu chí kiểm toán cơ sở hạ tầng/môi trường |
| QP-1001 | Thủ tục quản lý không phù hợp và hành động khắc phục | Xử lý không phù hợp khi sai lệch môi trường |
| WI-701-01 | Hướng dẫn quản lý ESD | Chi tiết vận hành khu vực bảo vệ ESD |

## 11.2 Danh sách biểu mẫu

| Mã biểu mẫu | Tên biểu mẫu | Mục đích sử dụng |
|------------|-------------|----------------|
| QF-701-01 | Danh mục thiết bị tổng hợp | Quản lý tình trạng tổng thể thiết bị |
| QF-701-02 | Phiếu kiểm tra hàng ngày thiết bị | Ghi chép kiểm tra thiết bị hàng ngày |
| QF-701-03 | Biểu mẫu ghi chép theo dõi môi trường (Nhiệt độ/Độ ẩm) | Ghi chép đo nhiệt độ/độ ẩm |
| QF-701-04 | Biểu mẫu ghi chép đo độ sáng | Ghi chép đo độ sáng theo khu vực |
| QF-701-05 | Bảng kế hoạch PM hàng năm | Lịch bảo dưỡng phòng ngừa hàng năm |
| QF-701-06 | Biểu mẫu ghi chép thực hiện PM | Ghi chép kết quả thực hiện PM riêng lẻ |
| QF-701-07 | Phiếu lịch sử thiết bị | Lịch sử bảo trì/hỏng hóc theo thiết bị |
| QF-701-08 | Biểu mẫu kiểm tra ESD | Ghi chép kiểm tra khu vực bảo vệ ESD |
| QF-701-09 | Báo cáo sai lệch môi trường | Báo cáo khi điều kiện môi trường sai lệch |
| QF-701-10 | Hồ sơ đầu tư/đưa vào sử dụng cơ sở hạ tầng | Lịch sử đưa thiết bị/cơ sở vật chất vào sử dụng |

---

> **Kết thúc tài liệu (End of Document)**
>
> Thủ tục này áp dụng cho việc quản lý cơ sở hạ tầng và môi trường làm việc của M&C Electronics VINA, đảm bảo đáp ứng yêu cầu của AS9100D Rev D điều 7.1.3 và 7.1.4. Việc thay đổi thủ tục này được quản lý theo QP-706 Thủ tục quản lý thông tin được lập thành văn bản.
