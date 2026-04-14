# Quy trình Hoạch định và Quản lý Vận hành
## Operations Planning and Control Procedure

| Mục | Nội dung |
|-----|---------|
| Số tài liệu | QP-801 |
| Số hiệu chỉnh | Rev. 0 |
| Ngày ban hành | Tháng 4 năm 2026, ngày ___ |
| Tiêu chuẩn áp dụng | AS9100D Rev D, 8.1 |
| Cấp độ bảo mật | Thông thường (General) |
| Tài liệu cấp trên | QM-001 Sổ tay chất lượng §8.1 |

| Phân loại | Chức vụ | Họ tên | Chữ ký | Ngày |
|-----------|---------|--------|--------|------|
| Soạn thảo | Nhân viên Kế hoạch sản xuất (KHSX/Kế hoạch) | | | |
| Kiểm tra | Trưởng bộ phận Chất lượng | | | |
| Phê duyệt | Đại diện lãnh đạo về chất lượng (QMR) | | | |

---

## Lịch sử chỉnh sửa

| Rev. | Ngày | Nội dung chỉnh sửa | Người soạn | Người phê duyệt |
|------|------|-------------------|------------|-----------------|
| 0 | 2026-04-__ | Ban hành lần đầu (Soạn thảo mới dựa trên AS9100D Rev D) | | |

---

## Mục lục

1. [Mục đích](#1-mục-đích)
2. [Phạm vi áp dụng](#2-phạm-vi-áp-dụng)
3. [Tài liệu/tiêu chuẩn tham chiếu](#3-tài-liệutieu-chuẩn-tham-chiếu)
4. [Thuật ngữ và định nghĩa](#4-thuật-ngữ-và-định-nghĩa)
5. [Trách nhiệm và quyền hạn](#5-trách-nhiệm-và-quyền-hạn)
6. [Quy trình hoạch định vận hành](#6-quy-trình-hoạch-định-vận-hành)
7. [Kế hoạch kiểm soát (Control Plan)](#7-kế-hoạch-kiểm-soát-control-plan)
8. [Quản lý lệnh sản xuất/lệnh công việc](#8-quản-lý-lệnh-sản-xuấtlệnh-công-việc)
9. [Quản lý quá trình gia công ngoài](#9-quản-lý-quá-trình-gia-công-ngoài)
10. [Yêu cầu đặc thù hàng không vũ trụ](#10-yêu-cầu-đặc-thù-hàng-không-vũ-trụ)
11. [Quản lý hồ sơ](#11-quản-lý-hồ-sơ)
12. [Tài liệu và biểu mẫu liên quan](#12-tài-liệu-và-biểu-mẫu-liên-quan)

---

# 1. Mục đích

Quy trình này quy định các thủ tục để hoạch định, thực hiện và quản lý các quá trình cần thiết cho việc thực hiện (vận hành) sản phẩm của M&C Electronics VINA.

Mục đích của quy trình này:
- Xây dựng quy trình hoạch định vận hành theo yêu cầu AS9100D 8.1
- Lập kế hoạch sản xuất có hệ thống để đảm bảo sự phù hợp của sản phẩm/dịch vụ
- Xác định và phân bổ hiệu quả nguồn lực quá trình (nhân lực, thiết bị, vật liệu, môi trường)
- Quản lý và theo dõi lệnh sản xuất thông qua hệ thống ERP
- Đáp ứng yêu cầu hoạch định vận hành trong ngành hàng không vũ trụ

---

# 2. Phạm vi áp dụng

Quy trình này áp dụng cho tất cả các hoạt động hoạch định và quản lý nhằm thực hiện sản phẩm của M&C Electronics VINA.

| Phân loại | Đối tượng áp dụng |
|-----------|------------------|
| Hoạch định sản xuất | Lập kế hoạch sản xuất, quản lý tiến độ, phân bổ nguồn lực |
| Hoạch định quy trình | Thiết kế luồng quy trình, xác định điều kiện quy trình |
| Hoạch định nguồn lực | Bố trí nhân lực, vận hành thiết bị, kế hoạch mua sắm vật liệu |
| Kế hoạch kiểm soát | Xây dựng và duy trì Control Plan |
| Lệnh sản xuất | Phát hành/theo dõi/hoàn thành lệnh sản xuất dựa trên ERP |
| Quản lý gia công ngoài | Hoạch định và quản lý quá trình gia công ngoài |

---

# 3. Tài liệu/tiêu chuẩn tham chiếu

| Tài liệu/tiêu chuẩn | Nội dung |
|--------------------|---------|
| AS9100D Rev D | Yêu cầu hệ thống quản lý chất lượng hàng không vũ trụ (điều khoản 8.1) |
| QM-001 | Sổ tay chất lượng §8.1 |
| QP-802 | Quản lý rủi ro vận hành (FMEA) |
| QP-803 | Quản lý cấu hình (CCB) |
| QP-804 | Quản lý an toàn sản phẩm/dịch vụ |
| QP-805 | Yêu cầu/truyền thông khách hàng |
| QP-806 | Xem xét hợp đồng |
| QP-810 | Quản lý sản xuất và cung cấp dịch vụ |
| QP-812 | Quản lý nhận dạng/truy xuất nguồn gốc |
| QP-814 | Quản lý bảo quản/đóng gói/vận chuyển |

---

# 4. Thuật ngữ và định nghĩa

| Thuật ngữ | Định nghĩa |
|-----------|-----------|
| Hoạch định vận hành (Operations Planning) | Hoạt động hoạch định và xây dựng các quá trình để đáp ứng yêu cầu sản phẩm/dịch vụ |
| Kế hoạch thực hiện sản phẩm (Product Realization Plan) | Kế hoạch tổng hợp về chất lượng, quy trình, nguồn lực và tiến độ cho sản phẩm/dự án cụ thể |
| Kế hoạch kiểm soát (Control Plan) | Tài liệu quy định các hạng mục kiểm soát, phương pháp kiểm soát, tần suất kiểm tra và tiêu chí chấp nhận theo từng quy trình |
| Lệnh sản xuất (Production Order) | Đơn vị lệnh sản xuất được phát hành từ hệ thống ERP. Bao gồm vật liệu, quy trình, số lượng, ngày giao hàng |
| Sơ đồ dòng chảy quy trình (Process Flow Diagram) | Tài liệu mô tả theo sơ đồ trình tự các quy trình từ khi đưa nguyên liệu thô vào đến khi xuất sản phẩm hoàn chỉnh |
| ERP (Enterprise Resource Planning) | Hệ thống quản lý nguồn lực doanh nghiệp tích hợp quản lý sản xuất, vật liệu, chất lượng và tồn kho |
| BOM (Bill of Materials) | Danh sách vật liệu/linh kiện cần thiết để sản xuất sản phẩm (bao gồm mã linh kiện, số lượng, thông số kỹ thuật) |
| Routing | Định nghĩa trình tự quy trình, trạm làm việc và thời gian tiêu chuẩn để sản xuất sản phẩm |
| Quá trình gia công ngoài (Outsourced Process) | Quá trình được thực hiện bởi tổ chức bên ngoài nhưng được bao gồm trong phạm vi quản lý QMS của công ty |
| WBS (Work Breakdown Structure) | Cấu trúc phân tách phạm vi dự án thành các đơn vị công việc có thể quản lý được |

---

# 5. Trách nhiệm và quyền hạn

| Vai trò | Trách nhiệm |
|---------|------------|
| **Nhân viên Kế hoạch sản xuất (KHSX/Kế hoạch)** | Lập kế hoạch sản xuất; Đăng ký/quản lý lệnh sản xuất ERP; Quản lý tiến độ; Điều chỉnh phân bổ nguồn lực; Quản lý ngày giao hàng |
| **Trưởng bộ phận Sản xuất** | Thực hiện kế hoạch sản xuất; Phân công công việc; Quản lý luồng quy trình; Báo cáo kết quả sản xuất |
| **Trưởng bộ phận Kỹ thuật** | Thiết kế quy trình; Xây dựng Routing; Quản lý BOM; Hỗ trợ soạn thảo Kế hoạch kiểm soát (Control Plan); Xác định điều kiện quy trình |
| **Trưởng bộ phận Chất lượng** | Kiểm tra/phê duyệt Kế hoạch kiểm soát; Lập kế hoạch kiểm tra; Quản lý chất lượng quy trình gia công ngoài; Đánh giá năng lực quy trình |
| **Trưởng bộ phận Mua hàng** | Thực hiện kế hoạch mua sắm vật liệu; Quản lý nhà thầu phụ; Quản lý ngày giao hàng |
| **Đại diện lãnh đạo về chất lượng (QMR)** | Tổng quản lý hệ thống hoạch định vận hành; Phê duyệt Kế hoạch thực hiện sản phẩm; Giám sát quản lý quá trình gia công ngoài |

---

# 6. Quy trình hoạch định vận hành

## 6.1 Hoạch định thực hiện sản phẩm (Product Realization Planning)

Theo AS9100D 8.1, khi hoạch định các quá trình cần thiết để cung cấp sản phẩm/dịch vụ, cần xác định những điều sau:

| Hạng mục hoạch định | Nội dung xác định | Tài liệu liên quan |
|--------------------|------------------|-------------------|
| **a) Mục tiêu chất lượng và yêu cầu** | Tiêu chuẩn chất lượng và yêu cầu khách hàng đối với sản phẩm/dịch vụ | QP-805, QP-806 |
| **b) Xây dựng quá trình** | Luồng quy trình, trình tự công việc, điều kiện quy trình | Routing, Sơ đồ dòng chảy quy trình |
| **c) Xác định nguồn lực** | Nhân lực, thiết bị, khuôn mẫu/đồ gá, vật liệu, môi trường làm việc | BOM, Danh sách thiết bị |
| **d) Thông tin dạng văn bản** | Tiêu chuẩn công việc, bản vẽ, bản đặc tính kỹ thuật, Kế hoạch kiểm soát | WI-xxx, Control Plan |
| **e) Hoạt động xác nhận/kiểm tra** | Điểm kiểm tra, hạng mục thử nghiệm, tiêu chí chấp nhận | Kế hoạch kiểm soát, QP-810 |
| **f) Tiêu chí chấp nhận sản phẩm** | Tiêu chí nghiệm thu, tiêu chí phán định xuất xưởng | Đặc tính kỹ thuật khách hàng, bản vẽ |
| **g) Yêu cầu hồ sơ** | Lịch sử sản xuất, hồ sơ kiểm tra, hồ sơ truy xuất nguồn gốc | QP-706, QP-812 |

## 6.2 Sơ đồ dòng chảy quy trình (Production Planning Process)

```
Nhận đơn hàng khách hàng / Hoàn thành xem xét hợp đồng (QP-806)
    │
    ▼
┌─────────────────────────────────┐
│  Tạo lệnh sản xuất ERP          │
│  (Kiểm tra mã hàng, số lượng,   │
│   ngày giao, BOM)               │
└─────────────┬───────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│  Lập kế hoạch thực hiện sản phẩm│
│  ┌──────────────────────┐       │
│  │ (1) Xác định luồng QT│       │
│  │ (2) Kiểm tra BOM/VL  │       │
│  │ (3) Xác định Routing │       │
│  │ (4) Phân bổ nguồn lực│       │
│  │ (5) Lập tiến độ      │       │
│  └──────────────────────┘       │
└─────────────┬───────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│  Đánh giá rủi ro (liên kết QP-802)│
│  - Sản phẩm/QT mới: Thực hiện FMEA│
│  - Sản phẩm hiện có: Xem xét FMEA │
└─────────────┬───────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│  Xây dựng Kế hoạch kiểm soát   │
│  (Control Plan)                 │
│  - Hạng mục/phương pháp/tần suất│
│  - Xác định điểm kiểm tra       │
└─────────────┬───────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│  Xác nhận tính sẵn có của VL (ERP)│
│  ┌───────────┐  ┌────────────┐  │
│  │ Kiểm tra  │  │ Yêu cầu    │  │
│  │ tồn kho   │  │ mua hàng   │  │
│  └───────────┘  └────────────┘  │
└─────────────┬───────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│  Xác nhận và phát hành lệnh SX ERP│
│  - Phát hành lệnh công việc     │
│  - Lệnh xuất vật liệu           │
└─────────────┬───────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│  Thực hiện sản xuất (QP-810)    │
│  - Thực hiện quy trình / KT quy trình│
│  - Nhập kết quả thực tế vào ERP │
└─────────────┬───────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│  Xác nhận hoàn thành / Đóng lệnh ERP│
│  - Xác nhận đạt kiểm tra cuối   │
│  - Tổng hợp kết quả sản xuất    │
│  - Phân tích kết quả so với tiến độ│
└─────────────────────────────────┘
```

## 6.3 Xác định nguồn lực

### 6.3.1 Nguồn nhân lực

| Hạng mục | Nội dung |
|----------|---------|
| Năng lực công nhân | Xác nhận công nhân có đủ trình độ/năng lực cần thiết để thực hiện quy trình (liên kết QP-703) |
| Bố trí nhân lực | Bố trí nhân lực phù hợp theo khối lượng sản xuất, độ phức tạp quy trình và ngày giao hàng |
| Chứng nhận quy trình đặc biệt | Kiểm tra hiệu lực chứng nhận của nhân viên thực hiện quy trình đặc biệt (hàn, NDT, v.v.) |

### 6.3.2 Thiết bị và cơ sở hạ tầng

| Hạng mục | Nội dung |
|----------|---------|
| Tính sẵn có của thiết bị | Kiểm tra công suất thiết bị sẵn có so với kế hoạch sản xuất (Phân tích tải thiết bị ERP) |
| Khuôn mẫu/đồ gá | Tính sẵn có của khuôn mẫu, đồ gá, thước đo cần thiết để sản xuất sản phẩm |
| Thiết bị đo lường | Kiểm tra hiệu lực hiệu chuẩn của thiết bị đo lường cần cho kiểm tra/thử nghiệm (liên kết QP-702) |

### 6.3.3 Vật liệu

| Hạng mục | Nội dung |
|----------|---------|
| Xác nhận BOM | Kiểm tra việc đăng ký BOM trong ERP, độ chính xác của quy cách/số lượng linh kiện |
| Kiểm tra tồn kho | Xác nhận tính sẵn có của vật liệu qua tra cứu tồn kho ERP |
| Thời gian giao hàng | Yêu cầu mua sắm vật liệu thiếu và phản ánh ngày dự kiến nhập kho |
| Vật liệu hàng không vũ trụ | Xác nhận chứng chỉ vật liệu (Mill Certificate), giấy chứng nhận sự phù hợp |

---

# 7. Kế hoạch kiểm soát (Control Plan)

## 7.1 Soạn thảo Kế hoạch kiểm soát

Kế hoạch kiểm soát quy định các hạng mục, phương pháp và tần suất cần kiểm soát trong mỗi quy trình thực hiện sản phẩm.

| Hạng mục bao gồm | Nội dung |
|-----------------|---------|
| Số/tên quy trình | Nhận dạng quy trình theo sơ đồ dòng chảy |
| Đặc tính kiểm soát | Đặc tính sản phẩm (kích thước, ngoại quan, chức năng) và đặc tính quy trình (nhiệt độ, áp suất, thời gian) |
| Cấp độ đặc tính | Phân loại Thông thường (G), Chủ chốt (K), An toàn quan trọng (SC) |
| Quy cách/dung sai | Tiêu chí chấp nhận theo bản vẽ/bản đặc tính kỹ thuật |
| Phương pháp kiểm soát | Thiết bị đo lường, phương pháp đo, cỡ mẫu |
| Tần suất kiểm soát | 100%/lấy mẫu, chu kỳ (mỗi lô, mỗi giờ, hàng ngày, v.v.) |
| Kế hoạch phản ứng | Quy trình xử lý khi xảy ra bất thường (dừng máy, cách ly, báo cáo, v.v.) |

## 7.2 Các loại Kế hoạch kiểm soát

| Loại | Thời điểm áp dụng | Mô tả |
|------|------------------|-------|
| Mẫu thử (Prototype) | Chế tạo mẫu thử | Quản lý quy trình ban đầu, chủ yếu kiểm tra 100% |
| Chuẩn bị sản xuất (Pre-launch) | Trước khi phê duyệt FAI/sản xuất hàng loạt | Tần suất kiểm soát tăng cường, xác nhận năng lực quy trình |
| Sản xuất (Production) | Sau khi sản xuất hàng loạt | Tần suất kiểm soát bình thường, áp dụng SPC |

## 7.3 Thay đổi Kế hoạch kiểm soát

Khi cần thay đổi Kế hoạch kiểm soát:
- Thay đổi 4M (Nhân lực, Thiết bị, Vật liệu, Phương pháp)
- Thay đổi yêu cầu khách hàng
- Tăng cường kiểm soát do phát sinh không phù hợp
- Điều chỉnh theo kết quả đánh giá năng lực quy trình

Khi thay đổi, áp dụng theo quy trình quản lý cấu hình QP-803 sau khi xem xét/phê duyệt.

---

# 8. Quản lý lệnh công việc/lệnh sản xuất

## 8.1 Quản lý lệnh sản xuất ERP

Công ty quản lý lệnh sản xuất thông qua hệ thống ERP.

| Bước | Hoạt động | Phụ trách | Chức năng ERP |
|------|----------|-----------|--------------|
| 1 | Tạo lệnh sản xuất | Nhân viên KHSX | Đơn hàng → Triển khai MRP → Tự động/thủ công tạo lệnh SX |
| 2 | Xác nhận BOM/Routing | Bộ phận Kỹ thuật | Triển khai BOM, xác nhận trình tự quy trình |
| 3 | Xác nhận tính sẵn có của VL | Nhân viên KHSX | Tra cứu tồn kho, liên kết yêu cầu mua hàng VL thiếu |
| 4 | Xác nhận lệnh (Release) | Nhân viên KHSX | Trạng thái lệnh: Kế hoạch → Xác nhận |
| 5 | In lệnh công việc | Nhân viên KHSX | In lệnh công việc + Lệnh xuất vật liệu |
| 6 | Xuất vật liệu | Bộ phận Vật tư | Xử lý xuất trong ERP (liên kết theo dõi lô, QP-812) |
| 7 | Thực hiện sản xuất | Bộ phận Sản xuất | Thực hiện công việc từng quy trình, nhập kết quả vào ERP |
| 8 | Kiểm tra quy trình | Bộ phận Chất lượng | Nhập kết quả kiểm tra vào ERP (Đạt/Không phù hợp) |
| 9 | Hoàn thành lệnh | Nhân viên KHSX | Xác nhận hoàn thành tất cả quy trình, đóng lệnh ERP |

## 8.2 Nội dung lệnh công việc

Lệnh công việc (dựa trên lệnh sản xuất) bao gồm các thông tin sau:

| Hạng mục | Nội dung |
|----------|---------|
| Số lệnh sản xuất | Đánh số tự động trong ERP |
| Mã hàng/Tên sản phẩm | Thông tin nhận dạng sản phẩm |
| Số lượng sản xuất | Số lượng đặt hàng, số lượng sản phẩm đạt mục tiêu |
| Ngày giao hàng | Ngày giao theo yêu cầu khách hàng, ngày giao nội bộ mục tiêu |
| BOM | Danh sách và số lượng vật liệu/linh kiện đầu vào |
| Routing | Trình tự quy trình, trạm làm việc, thời gian tiêu chuẩn |
| Tham chiếu bản vẽ/đặc tính kỹ thuật | Số bản vẽ áp dụng và số hiệu chỉnh |
| Ghi chú đặc biệt | Yêu cầu đặc biệt của khách hàng, hạng mục tăng cường quản lý, ghi chú đặc tính an toàn quan trọng |

## 8.3 Quản lý tiến độ sản xuất

| Hoạt động | Chu kỳ | Phụ trách |
|----------|--------|----------|
| Lập kế hoạch sản xuất tuần | Mỗi thứ Sáu | Nhân viên KHSX |
| Điều chỉnh kế hoạch sản xuất hàng ngày | Hàng ngày | Nhân viên KHSX |
| Giám sát tỷ lệ giao hàng đúng hạn | Hàng tuần | Nhân viên KHSX |
| Phân tích kết quả sản xuất | Hàng tháng | Trưởng bộ phận SX/Nhân viên KHSX |
| Kiểm tra tính nhất quán dữ liệu ERP | Hàng tháng | Nhân viên KHSX |

---

# 9. Quản lý quá trình gia công ngoài

## 9.1 Xác định quá trình gia công ngoài

Các quá trình do tổ chức bên ngoài thực hiện nhưng được bao gồm trong phạm vi quản lý QMS của công ty:

| Loại gia công ngoài | Ví dụ | Mức độ quản lý |
|--------------------|-------|---------------|
| Gia công ngoài quy trình đặc biệt | Xử lý nhiệt, mạ, NDT | Cao — Phê duyệt quy trình, yêu cầu NADCAP |
| Gia công cơ khí ngoài | Gia công CNC, gia công tấm | Trung bình — Kiểm tra lần đầu/định kỳ |
| Thử nghiệm ngoài | Thử nghiệm môi trường, thử nghiệm độ tin cậy | Cao — Xác nhận chứng nhận phòng thử nghiệm |
| Xử lý bề mặt ngoài | Sơn, anod hóa | Cao — Xác nhận tuân thủ đặc tính kỹ thuật quy trình |

## 9.2 Hoạch định quá trình gia công ngoài

| Hạng mục hoạch định | Nội dung |
|--------------------|---------|
| Phạm vi gia công ngoài | Xác định rõ phạm vi quy trình/công việc gia công ngoài |
| Yêu cầu kỹ thuật | Truyền đạt bản vẽ, đặc tính kỹ thuật, điều kiện quy trình cho nhà thầu |
| Yêu cầu chất lượng | Tiêu chí kiểm tra, tiêu chí phán định, yêu cầu hồ sơ |
| Quản lý ngày giao hàng | Lập tiến độ sản xuất phản ánh thời gian thực hiện gia công ngoài (liên kết ERP) |
| Nhà cung cấp được phê duyệt | Chỉ đặt hàng từ các nhà cung cấp có tên trong ASL (Approved Supplier List) (liên kết QP-808) |

## 9.3 Phương pháp quản lý quá trình gia công ngoài

| Phương pháp quản lý | Nội dung |
|---------------------|---------|
| Kiểm tra nhập hàng | Thực hiện kiểm tra nhập hàng đối với sản phẩm gia công ngoài hoàn thành |
| Kiểm toán quy trình | Kiểm toán quy trình định kỳ/đột xuất đối với nhà thầu chủ chốt |
| Đánh giá hiệu quả | Đánh giá định kỳ chất lượng/ngày giao/dịch vụ của nhà thầu |
| Thu thập hồ sơ | Thu thập/lưu trữ hồ sơ quy trình gia công ngoài (biểu đồ xử lý nhiệt, hồ sơ mạ, v.v.) |

---

# 10. Yêu cầu đặc thù hàng không vũ trụ

## 10.1 Liên kết quản lý rủi ro vận hành (AS9100D 8.1.1 → QP-802)

Khi hoạch định vận hành, đánh giá các rủi ro vận hành sau đây và xây dựng biện pháp quản lý:

| Lĩnh vực rủi ro | Hạng mục đánh giá | Quy trình quản lý |
|----------------|------------------|------------------|
| Sản phẩm/QT mới | Rủi ro do thay đổi thiết kế/quy trình | QP-802 (DFMEA/PFMEA) |
| Rủi ro chuỗi cung ứng | Mua sắm vật liệu, chất lượng nhà cung cấp, ngày giao | QP-802, QP-808 |
| Rủi ro sản xuất | Năng lực quy trình, hỏng thiết bị, lỗi con người | QP-802 (PFMEA) |
| Rủi ro tiến độ | Chậm tiến độ, thiếu nguồn lực | Giám sát ERP |

> **Lưu ý**: Thủ tục chi tiết về "Quản lý rủi ro vận hành" theo AS9100D 8.1.1 được quy định riêng tại QP-802. Quy trình này đề cập đến liên kết đánh giá rủi ro trong giai đoạn hoạch định vận hành.

## 10.2 Liên kết quản lý cấu hình (AS9100D 8.1.3 → QP-803)

| Nội dung áp dụng | Nội dung |
|-----------------|---------|
| Nhận dạng cấu hình | Nhận dạng các hạng mục cấu hình sản phẩm/tài liệu và xây dựng đường cơ sở (Baseline) |
| Thay đổi cấu hình | Quản lý thay đổi thông qua phê duyệt của CCB (Hội đồng kiểm soát cấu hình) |
| Phản ánh vào hoạch định sản xuất | Lập kế hoạch sản xuất dựa trên cấu hình được phê duyệt (bản vẽ/BOM/đặc tính kỹ thuật) |

## 10.3 Liên kết an toàn sản phẩm (AS9100D 8.1.4 → QP-804)

| Nội dung áp dụng | Nội dung |
|-----------------|---------|
| Đặc tính an toàn quan trọng | Phản ánh quản lý đặc biệt đối với Hạng mục an toàn quan trọng (Safety Critical Items) trong hoạch định sản xuất |
| Phản ánh vào Kế hoạch kiểm soát | Áp dụng tần suất kiểm tra/kiểm soát tăng cường cho đặc tính an toàn quan trọng |
| Truy xuất nguồn gốc | Đảm bảo khả năng truy xuất đầy đủ của linh kiện an toàn quan trọng (liên kết QP-812) |

## 10.4 Quản lý đặc tính chủ chốt (AS9100D 8.1.5)

Đối với đặc tính chủ chốt (Key Characteristics) của sản phẩm/quy trình:

| Hạng mục quản lý | Nội dung |
|-----------------|---------|
| Nhận dạng | Nhận dạng Đặc tính chủ chốt (KC) và Đặc tính an toàn quan trọng (SC) từ bản vẽ/đặc tính kỹ thuật |
| Kế hoạch kiểm soát | Ghi rõ KC/SC trong Control Plan và quy định phương pháp kiểm soát |
| Áp dụng SPC | Áp dụng SPC (Kiểm soát quy trình thống kê) cho KC/SC (Cpk ≥ 1,33, SC: ≥ 1,67) |
| Lệnh công việc | Ghi rõ hạng mục KC/SC trong lệnh công việc và nhắc nhở công nhân chú ý |

## 10.5 Quản lý thay đổi

Khi xảy ra thay đổi liên quan đến hoạch định vận hành (quy trình, vật liệu, thiết bị, tiến độ, v.v.):
- Thực hiện đánh giá rủi ro trước khi thay đổi (liên kết QP-802)
- Xác nhận có cần phê duyệt của khách hàng không (kiểm tra điều kiện hợp đồng với khách hàng)
- Phê duyệt theo quy trình quản lý cấu hình (liên kết QP-803)
- Cập nhật Kế hoạch kiểm soát (nếu cần)
- Quyết định có cần thực hiện lại FAI sau thay đổi không (liên kết QP-811)

---

# 11. Quản lý hồ sơ

| Loại hồ sơ | Thời gian lưu trữ | Phương pháp quản lý |
|-----------|------------------|---------------------|
| Kế hoạch thực hiện sản phẩm | Vòng đời sản phẩm + 10 năm | Quản lý theo dự án |
| Kế hoạch kiểm soát (Control Plan) | Vòng đời sản phẩm + 10 năm | Quản lý theo sản phẩm, đăng ký DMS |
| Hồ sơ lệnh sản xuất (ERP) | 10 năm | Tự động lưu trữ trong hệ thống ERP |
| Lệnh công việc | 5 năm | Quản lý theo lô |
| Sơ đồ dòng chảy quy trình | Bản hiện hành + 2 bản sửa đổi trước | Đăng ký DMS |
| Hồ sơ quản lý gia công ngoài | 5 năm | Quản lý theo nhà thầu |
| Kế hoạch phân bổ nguồn lực | 3 năm | Quản lý theo giai đoạn |

---

# 12. Tài liệu và biểu mẫu liên quan

## 12.1 Quy trình liên quan

| Số tài liệu | Tên tài liệu | Liên quan |
|------------|-------------|----------|
| QM-001 | Sổ tay chất lượng | Tài liệu cấp trên (§8.1) |
| QP-802 | Quản lý rủi ro vận hành (FMEA) | Liên kết đánh giá rủi ro vận hành (8.1.1/8.1.2) |
| QP-803 | Quản lý cấu hình (CCB) | Quản lý thay đổi cấu hình (8.1.3) |
| QP-804 | Quản lý an toàn sản phẩm/dịch vụ | Quản lý đặc tính an toàn quan trọng (8.1.4) |
| QP-805 | Yêu cầu/truyền thông khách hàng | Đầu vào yêu cầu khách hàng |
| QP-806 | Xem xét hợp đồng | Tiếp nhận/xem xét đơn hàng |
| QP-808 | Quản lý nhà cung cấp bên ngoài | Quản lý gia công ngoài/nhà cung cấp |
| QP-810 | Quản lý sản xuất và cung cấp dịch vụ | Thực hiện sản xuất |
| QP-811 | FAI (AS9102) | Kiểm tra lần đầu |
| QP-812 | Quản lý nhận dạng/truy xuất nguồn gốc | Theo dõi lô |

## 12.2 Biểu mẫu liên quan

| Số biểu mẫu | Tên biểu mẫu | Mục đích |
|------------|-------------|---------|
| F-801-01 | Kế hoạch thực hiện sản phẩm | Kế hoạch tổng hợp chất lượng·quy trình·nguồn lực cho sản phẩm/dự án mới |
| F-801-02 | Kế hoạch kiểm soát (Control Plan) | Quy định hạng mục/phương pháp/tần suất kiểm soát theo từng quy trình |
| F-801-03 | Sơ đồ dòng chảy quy trình (Process Flow Diagram) | Sơ đồ hóa trình tự quy trình và điểm kiểm tra |
| F-801-04 | Yêu cầu phát hành lệnh sản xuất | Yêu cầu khi phát hành thủ công lệnh sản xuất (bổ sung ERP) |
| F-801-05 | Phiếu yêu cầu gia công ngoài | Truyền đạt yêu cầu kỹ thuật/chất lượng khi đặt hàng gia công ngoài |
| F-801-06 | Bảng kế hoạch sản xuất tuần | Kế hoạch tiến độ sản xuất và phân bổ nguồn lực theo tuần |
| F-801-07 | Báo cáo phân tích kết quả sản xuất | Phân tích kết quả sản xuất hàng tháng, tỷ lệ giao đúng hạn, tỷ lệ vận hành |

---

**Hết tài liệu — QP-801 Rev. 0**
