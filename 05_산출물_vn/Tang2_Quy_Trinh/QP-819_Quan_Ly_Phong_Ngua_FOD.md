# QP-819 Quản Lý Phòng Ngừa FOD
## FOD (Foreign Object Debris/Damage) Prevention Management Procedure

| Mục | Nội dung |
|------|------|
| Mã tài liệu | QP-819 |
| Phiên bản | Rev. 0 |
| Ngày ban hành | Tháng 4 năm 2026 ___ |
| Tiêu chuẩn áp dụng | AS9100D Rev D, 8.5.1 (Yêu cầu ngành hàng không vũ trụ) |
| Cấp độ bảo mật | Thông thường (General) |
| Tài liệu cấp trên | QM-001 Sổ tay chất lượng §8.5.1 |

| Phân loại | Chức danh | Họ tên | Chữ ký | Ngày |
|------|------|------|------|------|
| Soạn thảo | Nhân viên Bộ phận Sản xuất (Sản xuất) | | | |
| Xem xét | Trưởng Bộ phận Chất lượng | | | |
| Phê duyệt | Đại diện lãnh đạo về chất lượng (QMR) | | | |

---

## Lịch sử thay đổi

| Rev. | Ngày | Nội dung thay đổi | Người soạn | Người phê duyệt |
|------|------|----------|--------|--------|
| 0 | 2026-04-__ | Ban hành lần đầu (Xây dựng hoàn toàn mới trên cơ sở AS9100D Rev D, phản ánh hành động khắc phục CAR-011) | | |

---

## Mục lục

1. [Mục đích](#1-mục-đích)
2. [Phạm vi áp dụng](#2-phạm-vi-áp-dụng)
3. [Tài liệu tham chiếu/Tiêu chuẩn](#3-tài-liệu-tham-chiếutiêu-chuẩn)
4. [Thuật ngữ và định nghĩa](#4-thuật-ngữ-và-định-nghĩa)
5. [Trách nhiệm và quyền hạn](#5-trách-nhiệm-và-quyền-hạn)
6. [Chương trình phòng ngừa FOD](#6-chương-trình-phòng-ngừa-fod)
7. [Hoạt động phòng ngừa FOD](#7-hoạt-động-phòng-ngừa-fod)
8. [Quản lý khu vực FOD](#8-quản-lý-khu-vực-fod)
9. [Kiểm tra FOD](#9-kiểm-tra-fod)
10. [Đào tạo/Nhận thức về FOD](#10-đào-tạonhận-thức-về-fod)
11. [Ứng phó khi xảy ra FOD](#11-ứng-phó-khi-xảy-ra-fod)
12. [Quản lý hồ sơ](#12-quản-lý-hồ-sơ)
13. [Tài liệu liên quan và biểu mẫu](#13-tài-liệu-liên-quan-và-biểu-mẫu)

---

# 1. Mục đích

Quy trình này quy định các thủ tục có hệ thống để phòng ngừa và quản lý FOD (Foreign Object Debris/Damage, thiệt hại do vật thể lạ) trong toàn bộ quá trình sản xuất, kiểm tra, bảo quản và vận chuyển sản phẩm hàng không vũ trụ tại M&C Electronics VINA.

Mục đích của quy trình này:
- Thiết lập và vận hành chương trình phòng ngừa FOD theo yêu cầu hàng không vũ trụ AS9100D 8.5.1
- Ngăn ngừa ô nhiễm và thiệt hại do vật thể lạ đối với sản phẩm, linh kiện, bộ phận lắp ráp
- Chỉ định và thiết lập tiêu chuẩn quản lý khu vực kiểm soát FOD (FOD Critical Zone)
- Vận hành hệ thống quản lý số lượng công cụ (Tool Accountability) và quản lý số lượng linh kiện (Hardware Accountability)
- Thực hiện đào tạo nhận thức FOD và xây dựng văn hóa phòng ngừa cho toàn thể nhân viên
- **Phản ánh hành động khắc phục CAR-011 (Không có chương trình quản lý FOD, không chỉ định khu vực kiểm soát FOD, không đào tạo)**

> **Liên kết CAR-011**: Trong phân tích khoảng cách, đã xác định sự không phù hợp Major "Không có chương trình quản lý FOD, không chỉ định khu vực kiểm soát FOD, không đào tạo". Quy trình này được ban hành là hành động khắc phục đối với nguyên nhân gốc rễ được xác định thông qua phân tích Fishbone (6M) (Thiếu nhận thức về yêu cầu FOD hàng không vũ trụ, không xem xét đầy đủ yêu cầu của khách hàng).

---

# 2. Phạm vi áp dụng

Quy trình này áp dụng cho tất cả các lĩnh vực sản xuất, kiểm tra, bảo quản, vận chuyển liên quan đến sản phẩm hàng không vũ trụ của M&C Electronics VINA.

| Phân loại | Đối tượng áp dụng |
|------|----------|
| Khu vực sản xuất | Tất cả quy trình sản xuất: gia công CNC, dập, lắp ráp, đi dây, hàn thiếc |
| Khu vực kiểm tra | Kiểm tra đầu vào, kiểm tra trong quy trình, kiểm tra cuối, FAI |
| Khu vực bảo quản | Kho nguyên liệu, kho bán thành phẩm, kho thành phẩm, kho dụng cụ |
| Khu vực vận chuyển | Logistics nội bộ (di chuyển giữa các công đoạn), đóng gói xuất hàng, vận chuyển bên ngoài |
| Khu vực ngoài gia công | Truyền đạt yêu cầu FOD khi ủy thác xử lý bên ngoài như mạ điện, xử lý nhiệt, kiểm tra không phá hủy |
| Khu vực cơ sở hạ tầng | Phòng sạch, khu vực sản xuất, phòng thử nghiệm, khu vực sản xuất liền kề văn phòng |

**Ngoại lệ**: Khu vực văn phòng thông thường (không gian văn phòng thuần túy tách biệt khỏi khu vực sản xuất) không thuộc đối tượng áp dụng của quy trình này, nhưng đào tạo nhận thức FOD áp dụng cho toàn thể nhân viên.

---

# 3. Tài liệu tham chiếu/Tiêu chuẩn

| Tài liệu/Tiêu chuẩn | Nội dung |
|----------|------|
| AS9100D Rev D | Yêu cầu hệ thống quản lý chất lượng hàng không vũ trụ (Điều 8.5.1 — Điều kiện quản lý sản xuất/dịch vụ) |
| NAS 412 | FOD Prevention (Tiêu chuẩn phòng ngừa FOD quốc phòng/hàng không vũ trụ Mỹ) |
| SAE AS9146 | FOD Prevention Program — Requirements for Aviation, Space, and Defense Organizations |
| 9S Quality Standard | Boeing FOD Prevention Requirements (khi áp dụng) |
| QM-001 | Sổ tay chất lượng §8.5.1 |
| QP-810 | Quản lý sản xuất và cung cấp dịch vụ |
| QP-812 | Quản lý nhận dạng/truy xuất nguồn gốc |
| QP-1001 | Quản lý sự không phù hợp/hành động khắc phục |
| QP-703 | Quản lý năng lực/đào tạo |
| QP-706 | Quản lý thông tin được lập thành văn bản |

---

# 4. Thuật ngữ và định nghĩa

| Thuật ngữ | Định nghĩa |
|------|------|
| FOD (Foreign Object Debris) | Vật thể lạ có thể gây thiệt hại tiềm ẩn cho sản phẩm, hệ thống hoặc thiết bị (mảnh kim loại, đầu dây thừa, bu-lông/đai ốc, công cụ, vật dụng cá nhân, mảnh vỡ bao bì, bụi bẩn, v.v.) |
| FOD (Foreign Object Damage) | Thiệt hại gây ra cho sản phẩm, hệ thống hoặc thiết bị bởi vật thể lạ (Foreign Object Debris) |
| Khu vực FOD (FOD Area) | Khu vực làm việc thông thường nơi áp dụng các hoạt động phòng ngừa FOD, là khu vực thực thi tiêu chuẩn vệ sinh cơ bản và biện pháp phòng ngừa FOD |
| FOD Critical Zone | Khu vực rủi ro cao có thể ảnh hưởng trực tiếp đến an toàn hoặc chức năng sản phẩm khi xảy ra FOD. Áp dụng tiêu chuẩn kiểm soát tăng cường (ví dụ: dây chuyền lắp ráp chính xác, phòng sạch, khu vực làm việc với miệng mở) |
| Tool Accountability (Quản lý số lượng công cụ) | Hoạt động xác nhận số lượng công cụ trước và sau công việc để đảm bảo công cụ không bị thất lạc bên trong sản phẩm |
| Hardware Accountability (Quản lý số lượng linh kiện) | Hoạt động xác nhận số lượng linh kiện nhỏ như bu-lông, đai ốc, vòng đệm, đinh tán, v.v. đầu vào công việc trước và sau để đảm bảo linh kiện chưa sử dụng không tồn lại bên trong sản phẩm |
| FOD Walk-down | Hoạt động kiểm tra vật thể lạ bằng cách tuần tra có hệ thống khu vực làm việc |
| Bảo vệ miệng mở (Opening Protection) | Hoạt động bịt kín miệng mở của sản phẩm (lỗ hổng, ống, đầu nối, v.v.) bằng nắp đậy, phích cắm, mũ bảo vệ, băng keo để ngăn chặn vật thể lạ xâm nhập |
| Thẻ FOD (FOD Tag) | Nhãn nhận dạng dán vào vật bảo vệ miệng mở (nắp đậy/phích cắm), ghi ngày bảo vệ, người phụ trách, điều kiện tháo dỡ |

---

# 5. Trách nhiệm và quyền hạn

| Vai trò | Trách nhiệm |
|------|------|
| **Đại diện lãnh đạo về chất lượng (QMR) — Quản lý FOD** | Quản lý tổng thể chương trình phòng ngừa FOD; Phê duyệt chính sách FOD; Báo cáo FOD trong xem xét của lãnh đạo; Đánh giá hiệu quả chương trình FOD; Ứng phó đánh giá bên ngoài |
| **Trưởng Bộ phận Chất lượng — Điều phối viên FOD** | Vận hành thực tế chương trình phòng ngừa FOD; Thiết lập tiêu chuẩn chỉ định/quản lý khu vực FOD; Lập lịch/thực hiện kiểm tra FOD; Lập kế hoạch chương trình đào tạo FOD; Chủ trì phân tích nguyên nhân khi xảy ra FOD; Quản lý hồ sơ FOD |
| **Trưởng Bộ phận Sản xuất** | Thực hiện hoạt động phòng ngừa FOD tại khu vực sản xuất; Quản lý kiểm tra FOD trước/sau công việc; Trách nhiệm thực hiện Tool/Hardware Accountability; Xác nhận thực hiện đào tạo FOD cho nhân viên |
| **Trưởng Bộ phận Kỹ thuật** | Phản ánh yêu cầu phòng ngừa FOD vào tiêu chuẩn công việc; Xem xét rủi ro FOD khi thiết kế quy trình; Hỗ trợ kỹ thuật phương pháp bảo vệ miệng mở |
| **Trưởng Bộ phận Mua hàng/Vật tư** | Kiểm tra FOD vật liệu nhập kho; Quản lý FOD khu vực bảo quản; Áp dụng yêu cầu phòng ngừa FOD khi đóng gói/vận chuyển; Truyền đạt yêu cầu FOD cho đơn vị gia công ngoài |
| **Toàn thể nhân viên** | Tuân thủ quy định phòng ngừa FOD; Quản lý vật dụng cá nhân; Báo cáo ngay khi phát hiện FOD; Hoàn thành đào tạo FOD; Duy trì vệ sinh khu vực làm việc |
| **Khách thăm/Nhân lực gia công ngoài** | Hoàn thành đào tạo FOD (rút gọn) trước khi vào; Tuân thủ quy định khu vực FOD; Cấm mang vật dụng cá nhân vào |

---

# 6. Chương trình phòng ngừa FOD

## 6.1 Chính sách phòng ngừa FOD

M&C Electronics VINA thiết lập và thực hiện chính sách phòng ngừa FOD sau đây để đảm bảo an toàn và chất lượng sản phẩm hàng không vũ trụ:

- Ưu tiên hoạt động phòng ngừa để không xảy ra FOD trong toàn bộ quá trình sản xuất, kiểm tra, bảo quản, vận chuyển sản phẩm hàng không vũ trụ
- Phòng ngừa FOD là trách nhiệm của toàn thể nhân viên, ban lãnh đạo cung cấp nguồn lực và môi trường cho điều đó
- Báo cáo ngay khi xảy ra FOD, che giấu hoặc bỏ qua sẽ là đối tượng kỷ luật
- Định kỳ đánh giá và cải tiến hiệu quả chương trình phòng ngừa FOD

## 6.2 Đào tạo nhận thức FOD

| Phân loại đào tạo | Đối tượng | Chu kỳ | Nội dung |
|----------|------|------|------|
| Đào tạo nhân viên mới | Tất cả nhân viên mới | Khi nhận việc (Bắt buộc trước khi phân công) | Định nghĩa FOD, nguy hiểm, ví dụ thực tế, quy định cơ bản |
| Đào tạo định kỳ | Toàn thể nhân viên | Ít nhất 1 lần/năm | Thủ tục phòng ngừa FOD, chia sẻ ví dụ thực tế, thay đổi quy định |
| Đào tạo bổ sung | Người liên quan đến FOD | Khi xảy ra FOD | Phân tích ví dụ thực tế, biện pháp phòng ngừa tái phát |
| Đào tạo khách thăm/gia công ngoài | Khách thăm, nhân lực gia công ngoài | Khi vào (rút gọn) | Quy định khu vực FOD, quản lý vật dụng cá nhân, điều cấm |

## 6.3 Chỉ định khu vực FOD

### 6.3.1 Phân loại khu vực FOD

| Cấp độ | Khu vực | Mức kiểm soát | Ký hiệu |
|------|------|----------|------|
| **Level 1 — FOD Critical Zone** | Dây chuyền lắp ráp chính xác, phòng sạch, khu vực làm việc với miệng mở, khu vực kiểm tra cuối | Kiểm soát tăng cường (Hạn chế vào ra, Cấm hoàn toàn vật dụng cá nhân, Bắt buộc FOD walk-down trước/sau công việc) | Biển hiệu đỏ + Vạch sàn đỏ |
| **Level 2 — FOD Controlled Area** | Dây chuyền sản xuất thông thường, gia công CNC, dập, hàn thiếc | Kiểm soát cơ bản (Hạn chế vật dụng cá nhân, Kiểm tra FOD định kỳ, Bắt buộc vệ sinh sau công việc) | Biển hiệu vàng + Vạch sàn vàng |
| **Level 3 — FOD Awareness Area** | Kho nguyên liệu, kho thành phẩm, khu vực đóng gói, phòng thử nghiệm | Mức độ nhận thức (Duy trì vệ sinh cơ bản, Kiểm tra tuần tra định kỳ) | Biển hiệu xanh dương |

### 6.3.2 Yêu cầu ký hiệu khu vực FOD

- Lắp đặt biển hiệu cấp độ FOD tại lối vào mỗi khu vực FOD
- Ký hiệu ranh giới khu vực bằng băng keo vạch sàn (Level 1: đỏ, Level 2: vàng)
- Dán "Quy tắc phòng ngừa FOD" trong khu vực FOD
- Sơ đồ khu vực FOD (Site Map) được đăng trong công ty và sử dụng khi đào tạo

## 6.4 Tiêu chuẩn vệ sinh

| Cấp độ khu vực | Chu kỳ vệ sinh | Tiêu chuẩn vệ sinh |
|----------|----------|----------|
| Level 1 | Trước/sau khi bắt đầu công việc, khi giao ca, khi dừng công việc | Không phát hiện vật thể lạ bằng mắt thường; Không có tàn dư trên sàn, bàn làm việc; Vật bảo vệ miệng mở bình thường |
| Level 2 | Sau khi kết thúc công việc, khi giao ca | Loại bỏ tàn dư phoi kim loại/dầu cắt; Hoàn thành vệ sinh bàn làm việc/sàn |
| Level 3 | Ít nhất 1 lần/ngày | Hoàn thành sắp xếp khu vực đi lại/bảo quản; Loại bỏ bao bì hỏng/bụi bẩn |

---

# 7. Hoạt động phòng ngừa FOD

## 7.1 Quản lý vật dụng cá nhân

| Phân loại | FOD Critical Zone (Level 1) | FOD Controlled Area (Level 2) | FOD Awareness Area (Level 3) |
|------|---------------------------|------------------------------|------------------------------|
| Điện thoại di động | Cấm mang vào | Bảo quản tại tủ khóa chỉ định | Mang cẩn thận |
| Thức ăn/Đồ uống | Cấm mang vào | Cấm mang vào | Chỉ ở nơi chỉ định |
| Phụ kiện (nhẫn, vòng cổ, v.v.) | Cấm đeo | Cấm đeo | Cẩn thận |
| Vật phẩm trong túi | Tất cả lấy ra (Sử dụng túi trong suốt) | Biện pháp chống rơi | Cẩn thận |
| Bút viết | Gắn dây hoặc cấm mang vào | Khuyến nghị gắn dây | Tự do |

## 7.2 Quản lý công cụ (Tool Accountability)

### 7.2.1 Thủ tục xác nhận số lượng công cụ

```
┌──────────────────────┐
│ 1. Trước khi bắt     │
│    đầu công việc     │
│    Xác nhận danh     │
│    sách công cụ      │
│    (Shadow Board     │
│     hoặc Phiếu       │
│     kiểm tra công cụ)│
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ 2. Ghi lại số lượng  │
│    công cụ           │
│    (Tổng số lượng,   │
│     tên vật phẩm)    │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ 3. Thực hiện công    │
│    việc              │
│    (Khi sử dụng      │
│     công cụ trả lại  │
│     vị trí chỉ định) │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ 4. Sau khi hoàn      │
│    thành công việc   │
│    Xác nhận lại số   │
│    lượng công cụ     │
└──────────┬───────────┘
           │
     ┌─────┴─────┐
     │           │
     ▼           ▼
┌─────────┐  ┌──────────────────┐
│ Khớp   │  │ Không khớp        │
│ → Hoàn  │  │ → Dừng công việc  │
│   thành │  │ → Tìm kiếm ngay  │
│   hồ sơ │  │ → Lập báo cáo FOD│
└─────────┘  │ → Cách ly sản    │
             │   phẩm           │
             └──────────────────┘
```

### 7.2.2 Yêu cầu quản lý công cụ

- **Shadow Board**: Sử dụng bảng lưu trữ có hiển thị hình dạng công cụ (Có thể xác nhận ngay chỗ trống)
- **Phiếu kiểm tra công cụ (F-816-01)**: Ghi lại số lượng công cụ khi bắt đầu/kết thúc công việc
- **Công cụ bị hỏng**: Xác nhận thu gom toàn bộ mảnh vỡ khi bị hỏng rồi thay thế. Khi chưa thu hồi mảnh vỡ, lập báo cáo FOD
- **Công cụ cá nhân**: Cấm sử dụng công cụ cá nhân trong khu vực FOD (Chỉ cho phép công cụ do công ty cấp)
- **Nhãn công cụ**: Dán số thứ tự hoặc nhãn nhận dạng vào mỗi công cụ

## 7.3 Quản lý số lượng linh kiện (Hardware Accountability)

| Thủ tục | Nội dung |
|------|------|
| Xác nhận số lượng trước công việc | Xác nhận và ghi lại số lượng linh kiện đầu vào (bu-lông, đai ốc, vòng đệm, đinh tán, kẹp, v.v.) theo tiêu chuẩn BOM |
| Quản lý trong công việc | Bảo quản linh kiện trong khay phân loại; Thu gom ngay linh kiện rơi xuống sàn; Quản lý riêng linh kiện dư |
| Xác nhận số lượng sau công việc | Xác nhận: Số lượng đã lắp + Số lượng còn lại = Số lượng xuất ban đầu |
| Khi không khớp | Dừng công việc → Tìm kiếm → Khi không tìm thấy, lập báo cáo FOD → Cách ly sản phẩm |

## 7.4 Bảo vệ miệng mở (Cover/Plug)

| Mục | Yêu cầu |
|------|------|
| Đối tượng bảo vệ | Tất cả miệng mở có thể xâm nhập vật thể lạ: ống, đường ống, đầu nối, cổng, lỗ, ống dẫn khí |
| Phương pháp bảo vệ | Sử dụng nắp đậy (Cap), phích cắm (Plug), nắp bảo vệ (Cover), băng bảo vệ chuyên dụng |
| Thẻ FOD | Dán thẻ FOD vào tất cả vật bảo vệ (Ghi ngày, người phụ trách, điều kiện tháo dỡ) |
| Thời điểm tháo dỡ | Chỉ tháo ngay trước công việc tiếp theo → Tái bảo vệ ngay sau khi hoàn thành công việc |
| Kiểm tra vật bảo vệ | Kiểm tra định kỳ tình trạng vật bảo vệ (hỏng hóc, rơi ra, ô nhiễm) |
| Quản lý số lượng vật bảo vệ | Xác nhận số lượng vật bảo vệ khi lắp/tháo (Để chính vật bảo vệ không trở thành FOD) |

## 7.5 Vệ sinh trước/sau công việc

| Thời điểm | Hoạt động | Người phụ trách |
|------|------|------|
| Trước khi bắt đầu công việc | Vệ sinh bàn làm việc/thiết bị/xung quanh; Xác nhận loại bỏ tàn dư từ công việc trước; Kiểm tra có FOD không | Nhân viên |
| Trong công việc | Loại bỏ định kỳ phoi/tàn dư; Trả lại/vứt bỏ ngay vật liệu đã dùng xong | Nhân viên |
| Sau khi hoàn thành công việc | Vệ sinh toàn bộ khu vực làm việc; Xác nhận số lượng công cụ/linh kiện; Thực hiện kiểm tra FOD | Nhân viên + Tổ trưởng |
| Khi giao ca | Xác nhận tình trạng FOD khi bàn giao; Ký xác nhận tình trạng vệ sinh | Người bàn giao/tiếp nhận |

## 7.6 Quản lý rác thải/phế liệu

- Bố trí thùng rác có nắp đậy kín tại mỗi khu vực làm việc (Bắt buộc có nắp)
- Phân loại thu gom riêng biệt tàn dư kim loại (phoi, bavia, mạt cưa) và rác thải thông thường
- Thay thùng rác trước khi đầy đến 70%
- Xử lý ngay vật liệu đóng gói (xốp, túi nilon, giấy) — Cấm để lại tại khu vực sản xuất
- Khi sử dụng súng khí nén, thực hiện biện pháp chống phát tán (Hạn chế sử dụng súng khí nén trong FOD Critical Zone)

---

# 8. Quản lý khu vực FOD

## 8.1 Chỉ định FOD Critical Zone

### 8.1.1 Tiêu chí chỉ định

Chỉ định khu vực đáp ứng các điều kiện sau là FOD Critical Zone (Level 1):

| Tiêu chí chỉ định | Ví dụ |
|----------|------|
| Khu vực làm việc với miệng mở đang lộ ra | Bàn lắp ráp đường ống, công việc kết nối đầu nối |
| Khu vực xử lý linh kiện an toàn trọng yếu hàng không (Safety-Critical Item) | Lắp ráp linh kiện liên quan điều khiển bay |
| Khu vực lắp ráp cuối trước khi bịt kín/niêm phong | Lắp ráp vỏ, công việc niêm phong kín |
| Khu vực lắp ráp/thử nghiệm linh kiện điện tử chính xác | Lắp ráp PCB, chế tạo dây điện |
| Khu vực khách hàng yêu cầu chỉ định FOD Critical Zone | Khi được ghi trong thông số kỹ thuật của khách hàng |

### 8.1.2 Thủ tục chỉ định

1. Điều phối viên FOD (Trưởng Bộ phận Chất lượng) thực hiện đánh giá hiện trường
2. Quyết định cấp độ khu vực (Level 1/2/3) theo mức độ rủi ro FOD
3. Công bố chỉ định khu vực sau khi QMR phê duyệt
4. Lắp đặt ký hiệu khu vực (biển hiệu, vạch sàn)
5. Thực hiện đào tạo đặc biệt cho nhân viên làm việc tại khu vực liên quan

## 8.2 Kiểm soát ra vào

| Khu vực | Tiêu chí kiểm soát ra vào |
|------|--------------|
| Level 1 (Critical Zone) | Bắt buộc ghi nhật ký ra vào; Chỉ nhân viên được phê duyệt mới được vào; Khách thăm bắt buộc đi kèm; Kiểm tra vật dụng cá nhân trước khi vào; Kiểm tra FOD khi ra vào (tạp chất trên giày dép, v.v.) |
| Level 2 (Controlled Area) | Chỉ người liên quan đến công việc; Khuyến nghị đi kèm cho khách thăm; Cấm mang thức ăn/đồ uống vào |
| Level 3 (Awareness Area) | Ra vào tự do; Xác nhận biển hiệu nhận thức FOD |

## 8.3 Quản lý môi trường

| Mục quản lý | Tiêu chuẩn |
|----------|------|
| Ánh sáng | Đảm bảo độ chiếu sáng đủ để nhận dạng vật thể lạ bằng mắt thường (Tối thiểu 500 lux trên bề mặt làm việc) |
| Sàn nhà | Vật liệu sàn nhẵn, không có vết nứt, hỏng; Chất liệu dễ vệ sinh; Kiểm tra định kỳ |
| Bàn làm việc | Bề mặt nhẵn; Lắp gờ mép để ngăn linh kiện rơi |
| Thông gió | Hệ thống áp suất dương hoặc lọc giảm thiểu bụi/hạt xâm nhập (Level 1) |
| Cống thoát | Lắp nắp lưới; Áp dụng lưới ngăn thất thoát linh kiện |

---

# 9. Kiểm tra FOD

## 9.1 FOD Walk-down

| Mục | Nội dung |
|------|------|
| Định nghĩa | Hoạt động kiểm tra vật thể lạ bằng cách tuần tra có hệ thống khu vực làm việc theo tuyến đường chỉ định |
| Chu kỳ | Level 1: Mỗi lần trước/sau công việc, Level 2: 1 lần/ngày, Level 3: 1 lần/tuần |
| Người thực hiện | Nhân viên kiểm tra do Điều phối viên FOD chỉ định hoặc tổ trưởng khu vực |
| Phương pháp | Kiểm tra bằng mắt thường theo tuyến Walk-down đã định; Sử dụng gương, đèn pin, nội soi khi cần |
| Hồ sơ | Ghi thời gian kiểm tra, khu vực, kết quả, chữ ký nhân viên kiểm tra vào Hồ sơ kiểm tra FOD F-816-01 |

## 9.2 Kiểm tra trước/sau công việc

| Thời điểm | Nội dung kiểm tra |
|------|----------|
| Trước khi bắt đầu công việc | Có vật thể lạ trên bàn làm việc/thiết bị không; Tình trạng vật bảo vệ miệng mở; Số lượng công cụ/linh kiện |
| Sau khi hoàn thành công việc | Có vật thể lạ bên trong/ngoài sản phẩm không; Tái bảo vệ miệng mở; Số lượng công cụ/linh kiện khớp; Tình trạng hoàn thành vệ sinh |
| Trước khi bịt kín/niêm phong | Kiểm tra FOD cuối cùng bên trong đối tượng bịt kín (Bắt buộc — Nhân viên kiểm tra chất lượng ký xác nhận) |

## 9.3 Báo cáo khi phát hiện FOD

```
┌──────────────────┐
│ Phát hiện FOD    │
│ (Ai cũng ngay    │
│  lập tức)        │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Dừng công việc   │
│ ngay lập tức     │
│ Thu gom/bảo quản │
│ vật thể lạ       │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Báo cáo tổ       │
│ trưởng/giám sát  │
│ (Miệng ngay)     │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Thông báo Điều   │
│ phối viên FOD    │
│ (Trưởng BP CL)   │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐     ┌──────────────────┐
│ Lập Hồ sơ kiểm  │     │ Đánh giá tác     │
│ tra FOD          │────→│ động sản phẩm    │
│ (F-816-01)       │     │ Xác nhận thiệt   │
└──────────────────┘     │ hại              │
                         └────────┬─────────┘
                                  │
                           ┌──────┴──────┐
                           │             │
                           ▼             ▼
                    ┌───────────┐  ┌──────────────┐
                    │ Không có  │  │ Xác nhận     │
                    │ thiệt hại │  │ thiệt hại    │
                    │ → Vệ sinh │  │ → Xử lý      │
                    │   rồi tái │  │   không phù  │
                    │   khởi    │  │   hợp        │
                    │   động    │  │   (QP-1001)  │
                    └───────────┘  └──────────────┘
```

---

# 10. Đào tạo/Nhận thức về FOD

## 10.1 Kế hoạch đào tạo hàng năm

| Mục đào tạo | Đối tượng | Chu kỳ | Thời gian | Nội dung đào tạo |
|----------|------|------|------|----------|
| Đào tạo FOD cơ bản | Toàn thể nhân viên | 1 lần/năm | 2 giờ | Định nghĩa/nguy hiểm FOD, thủ tục phòng ngừa, quy định khu vực, trách nhiệm cá nhân, thủ tục báo cáo |
| Đào tạo FOD nâng cao | Nhân viên làm việc tại khu vực FOD | 1 lần/năm | 4 giờ | Tool/Hardware Accountability, bảo vệ miệng mở, Walk-down, phân tích ví dụ thực tế |
| Đào tạo Điều phối viên FOD | Điều phối viên FOD | 1 lần/năm | 8 giờ | Quản lý chương trình FOD, kỹ thuật kiểm toán, yêu cầu NAS 412/SAE AS9146, phân tích nguyên nhân |

## 10.2 Đào tạo nhân viên mới

- Bắt buộc hoàn thành trước khi phân công (Khi chưa hoàn thành không được vào khu vực FOD)
- Nội dung đào tạo: Định nghĩa FOD, nguy hiểm, ví dụ tai nạn thực tế (hình ảnh/video), quy định cơ bản, thủ tục báo cáo
- Xác nhận mức độ hiểu biết sau đào tạo (Bài kiểm tra hoặc thực hành)
- Hồ sơ hoàn thành đào tạo: Quản lý kết hợp với QP-703 (Quản lý năng lực/đào tạo)

## 10.3 Chia sẻ ví dụ thực tế về FOD

| Hoạt động | Chu kỳ | Nội dung |
|------|------|------|
| Đăng ví dụ thực tế FOD | Ngay khi xảy ra + Hàng tháng | Chia sẻ ví dụ thực tế tại công ty và ví dụ tai nạn trong ngành lên bảng thông báo |
| Cuộc họp bài học FOD | 1 lần/quý | Xem xét tình hình xảy ra FOD trong quý, rút ra bài học, thảo luận về cải tiến |
| Khen thưởng ví dụ tốt về FOD | 1 lần/năm | Khen thưởng bộ phận/cá nhân xuất sắc về phòng ngừa FOD (Nâng cao nhận thức) |

## 10.4 Chiến dịch nhận thức FOD

- Dán poster phòng ngừa FOD tại mỗi khu vực sản xuất, lối ra vào, phòng nghỉ
- Áp dụng khẩu hiệu "Clean As You Go"
- Tổ chức Tháng nhận thức FOD (1 lần/năm)
- Phân phát Thẻ tự kiểm tra FOD (Dành cho nhân viên mang theo)

---

# 11. Ứng phó khi xảy ra FOD

## 11.1 Thủ tục ứng phó ngay lập tức

| Bước | Hoạt động | Người phụ trách | Thời hạn |
|------|------|------|------|
| 1 | Dừng công việc ngay khi phát hiện FOD, thu gom/bảo quản vật thể lạ | Người phát hiện | Ngay lập tức |
| 2 | Báo cáo miệng cho tổ trưởng/giám sát | Người phát hiện | Trong 5 phút |
| 3 | Thông báo cho Điều phối viên FOD (Trưởng Bộ phận Chất lượng) | Tổ trưởng | Trong 30 phút |
| 4 | Cách ly sản phẩm liên quan (Dán thẻ sản phẩm không phù hợp) | Bộ phận Chất lượng | Trong 1 giờ |
| 5 | Lập Hồ sơ kiểm tra FOD (F-816-01) | Người phát hiện + Bộ phận Chất lượng | Trong ngày |

## 11.2 Phân tích nguyên nhân

| Mục | Nội dung |
|------|------|
| Phương pháp phân tích | Sử dụng phương pháp thích hợp: 5-Why, Fishbone (6M), Fault Tree, v.v. |
| Phạm vi phân tích | Nguyên nhân xảy ra FOD, đường dẫn xâm nhập, nguyên nhân thất bại kiểm soát |
| Trách nhiệm phân tích | Điều phối viên FOD (Trưởng Bộ phận Chất lượng) chủ trì, các bộ phận liên quan tham gia |
| Thời hạn phân tích | Trong 5 ngày làm việc sau khi phát hiện FOD |

## 11.3 Hành động khắc phục (Liên kết QP-1001)

| Thủ tục | Nội dung |
|------|------|
| Phát hành CAR | Phát hành CAR theo QP-1001 khi tái diễn, thiệt hại sản phẩm, ảnh hưởng an toàn |
| Sửa chữa (Correction) | Chỉ thực hiện sửa chữa (Correction) và ghi lại hồ sơ đối với trường hợp đơn lẻ, nhỏ |
| Kế hoạch hành động khắc phục | Lập kế hoạch biện pháp để loại bỏ nguyên nhân gốc rễ (Ghi rõ người phụ trách, thời hạn) |
| Thực hiện hành động khắc phục | Thực hiện biện pháp theo kế hoạch |
| Xác minh hiệu quả | Theo dõi tái phát sau khi hoàn thành biện pháp (Tối thiểu 3 tháng) |

## 11.4 Lưu đồ ứng phó FOD

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  1. Phát     │     │  2. Cách ly/ │     │  3. Báo cáo  │
│  hiện FOD    │────→│  bảo quản    │────→│  (Tổ trưởng  │
│  Dừng CV     │     │  ngay lập    │     │  → CL)       │
└──────────────┘     │  tức         │     └──────────────┘
                     └──────────────┘           │
                                   ┌────────────┘
                                   ▼
                            ┌──────────────┐
                            │  4. Đánh giá │
                            │  tác động    │
                            │  sản phẩm    │
                            └──────┬───────┘
                                   │
                            ┌──────┴──────┐
                            │             │
                            ▼             ▼
                     ┌───────────┐  ┌──────────────┐
                     │ Không ảnh │  │ Có ảnh       │
                     │ hưởng     │  │ hưởng        │
                     │           │  │ → Xử lý      │
                     │           │  │   không phù  │
                     │           │  │   hợp        │
                     └─────┬─────┘  └──────┬───────┘
                           │               │
                           └───────┬───────┘
                                   ▼
                            ┌──────────────┐
                            │  5. Phân     │
                            │  tích nguyên │
                            │  nhân (RCA)  │
                            └──────┬───────┘
                                   │
                                   ▼
                            ┌──────────────┐
                            │  6. Lập/thực │
                            │  hiện hành   │
                            │  động khắc   │
                            │  phục        │
                            │  (QP-1001)   │
                            └──────┬───────┘
                                   │
                                   ▼
                            ┌──────────────┐
                            │  7. Xác minh │
                            │  hiệu quả    │
                            │  (3 tháng)   │
                            └──────┬───────┘
                                   │
                                   ▼
                            ┌──────────────┐
                            │  8. Đóng     │
                            │  hồ sơ lưu   │
                            │  trữ         │
                            └──────────────┘
```

---

# 12. Quản lý hồ sơ

## 12.1 Hồ sơ liên quan đến FOD

| Hồ sơ | Số biểu mẫu | Thời hạn lưu trữ | Trách nhiệm lưu trữ |
|------|----------|----------|----------|
| Hồ sơ kiểm tra FOD | F-816-01 | 7 năm | Bộ phận Chất lượng |
| Hồ sơ xác nhận số lượng công cụ | Trong F-816-01 | 7 năm | Bộ phận Sản xuất |
| Hồ sơ xác nhận số lượng linh kiện | Trong F-816-01 | 7 năm | Bộ phận Sản xuất |
| Hồ sơ đào tạo FOD | Liên kết QP-703 | 7 năm | Bộ phận Nhân sự/Chất lượng |
| Báo cáo xảy ra FOD | Trong F-816-01 | 10 năm | Bộ phận Chất lượng |
| Hồ sơ hành động khắc phục FOD | Liên kết QP-1001 | 10 năm | Bộ phận Chất lượng |
| Hồ sơ chỉ định/thay đổi khu vực FOD | Quản lý riêng | Vĩnh viễn | Bộ phận Chất lượng |
| Sổ quản lý vật bảo vệ miệng mở | Trong F-816-01 | 7 năm | Bộ phận Sản xuất |

## 12.2 Nguyên tắc quản lý hồ sơ

- Tất cả hồ sơ liên quan đến FOD được quản lý theo QP-706 (Quản lý thông tin được lập thành văn bản)
- Đối với hồ sơ liên quan đến sản phẩm hàng không vũ trụ, áp dụng thời hạn lưu trữ theo yêu cầu của khách hàng hoặc quy định, tối thiểu 7 năm
- Quản lý song song hồ sơ điện tử và hồ sơ giấy, đảm bảo tính nguyên bản
- Dữ liệu lịch sử xảy ra FOD được sử dụng trong phân tích xu hướng xảy ra FOD hàng năm

---

# 13. Tài liệu liên quan và biểu mẫu

## 13.1 Quy trình liên quan

| Mã tài liệu | Tên tài liệu | Liên quan |
|----------|--------|--------|
| QM-001 | Sổ tay chất lượng | Tài liệu cấp trên (§8.5.1 Yêu cầu phòng ngừa FOD) |
| QP-810 | Quản lý sản xuất và cung cấp dịch vụ | Liên kết yêu cầu FOD trong điều kiện quản lý sản xuất |
| QP-812 | Quản lý nhận dạng/truy xuất nguồn gốc | Liên kết truy xuất lô khi xảy ra FOD |
| QP-1001 | Quản lý sự không phù hợp/hành động khắc phục | Liên kết phát hành CAR khi xảy ra FOD |
| QP-703 | Quản lý năng lực/đào tạo | Liên kết hồ sơ đào tạo FOD |
| QP-706 | Quản lý thông tin được lập thành văn bản | Liên kết lưu trữ/quản lý hồ sơ FOD |
| QP-804 | Quản lý an toàn sản phẩm và dịch vụ | Liên kết quản lý FOD đối với mục an toàn trọng yếu |

## 13.2 Biểu mẫu liên quan

| Số biểu mẫu | Tên biểu mẫu | Mục đích |
|----------|--------|------|
| F-816-01 | Hồ sơ kiểm tra FOD | Ghi kết quả FOD Walk-down, xác nhận số lượng công cụ/linh kiện, báo cáo phát hiện FOD, hồ sơ quản lý vật bảo vệ miệng mở |

## 13.3 Hướng dẫn công việc liên quan

| Mã tài liệu | Tên tài liệu | Nội dung |
|----------|--------|------|
| WI-804-01 | Hướng dẫn công việc phòng ngừa FOD | Hướng dẫn chi tiết hoạt động phòng ngừa FOD dành cho nhân viên (Quản lý công cụ, thủ tục vệ sinh, bảo vệ miệng mở, v.v.) |

---

**Kết thúc tài liệu — QP-819 Rev. 0**

---

*Tài liệu này là tài sản của M&C Electronics VIỆT NAM. Nghiêm cấm sao chép hoặc tiết lộ cho bên thứ ba khi chưa có sự đồng ý bằng văn bản.*
