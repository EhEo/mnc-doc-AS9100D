# Quy Trình Quản Lý Thiết Kế và Phát Triển
## Design and Development Management Procedure

| Mục | Nội dung |
|-----|----------|
| Mã tài liệu | QP-807 |
| Số lần sửa đổi | Rev. 0 |
| Ngày ban hành | Tháng 4 năm 2026, ngày ___ |
| Tiêu chuẩn áp dụng | AS9100D Rev D, 8.3 |
| Mức độ bảo mật | Tài liệu nội bộ (Confidential) |
| Tài liệu cấp trên | QM-001 Sổ tay chất lượng §8.3 |

| Phân loại | Chức danh | Họ tên | Chữ ký | Ngày |
|-----------|-----------|--------|--------|------|
| Soạn thảo | Nhân viên bộ phận Phát triển | | | |
| Kiểm tra | Trưởng bộ phận Chất lượng | | | |
| Phê duyệt | Đại diện lãnh đạo chất lượng (QMR) | | | |

---

## Lịch sử sửa đổi

| Rev. | Ngày | Nội dung sửa đổi | Người soạn | Người phê duyệt |
|------|------|-----------------|------------|----------------|
| 0 | 2026-04-__ | Ban hành lần đầu (Soạn thảo mới hoàn toàn dựa trên AS9100D Rev D, phản ánh hành động khắc phục CAR-017) | | |

---

## Mục lục

1. [Mục đích](#1-mục-đích)
2. [Phạm vi áp dụng](#2-phạm-vi-áp-dụng)
3. [Tài liệu/tiêu chuẩn tham chiếu](#3-tài-liệutiêu-chuẩn-tham-chiếu)
4. [Thuật ngữ và định nghĩa](#4-thuật-ngữ-và-định-nghĩa)
5. [Trách nhiệm và quyền hạn](#5-trách-nhiệm-và-quyền-hạn)
6. [Hoạch định thiết kế/phát triển (8.3.1)](#6-hoạch-định-thiết-kếphát-triển-831)
7. [Đầu vào thiết kế/phát triển (8.3.3)](#7-đầu-vào-thiết-kếphát-triển-833)
8. [Kiểm soát thiết kế/phát triển (8.3.4)](#8-kiểm-soát-thiết-kếphát-triển-834)
9. [Đầu ra thiết kế/phát triển (8.3.5)](#9-đầu-ra-thiết-kếphát-triển-835)
10. [Thay đổi thiết kế/phát triển (8.3.6)](#10-thay-đổi-thiết-kếphát-triển-836)
11. [Yêu cầu đặc thù hàng không vũ trụ](#11-yêu-cầu-đặc-thù-hàng-không-vũ-trụ)
12. [Quản lý hồ sơ](#12-quản-lý-hồ-sơ)
13. [Tài liệu và biểu mẫu liên quan](#13-tài-liệu-và-biểu-mẫu-liên-quan)

---

# 1. Mục đích

Quy trình này quy định các thủ tục để hoạch định, thực hiện và quản lý một cách có hệ thống quá trình thiết kế và phát triển (Design and Development) sản phẩm hàng không vũ trụ tại Công ty TNHH M&C ELECTRONICS VIỆT NAM (sau đây gọi là M&C Electronics VINA).

Mục đích của quy trình này:
- Thiết lập quy trình quản lý thiết kế/phát triển theo yêu cầu AS9100D 8.3.1~8.3.6
- Hoạch định và quản lý từng giai đoạn thiết kế/phát triển dựa trên Nhóm chức năng chéo (CFT, Cross-Functional Team)
- Thiết lập hệ thống hồ sơ và thực hiện riêng biệt công việc xem xét thiết kế (DR), xác nhận thiết kế (DV) và xác nhận tính hợp lệ của thiết kế (Validation)
- Nhận dạng Đặc tính trọng yếu (KC, Key Characteristics) và quản lý xuyên suốt toàn bộ giai đoạn thiết kế
- Kiểm tra/xác nhận thiết kế có hệ thống dựa trên DVP&R (Design Verification Plan & Report)
- Vận hành quy trình phát triển tham chiếu giai đoạn APQP (Advanced Product Quality Planning)
- **Phản ánh hành động khắc phục CAR-017** (hồ sơ xem xét, xác nhận, kiểm tra tính hợp lệ thiết kế không đầy đủ; không có DVP&R; thói quen phê duyệt bằng lời)

> **Nội dung hành động khắc phục CAR-017**:
> - Nguyên nhân gốc rễ: Văn hóa xem xét/hồ sơ chính thức chưa được thiết lập trong giai đoạn thiết kế phát triển, thói quen phê duyệt bằng lời
> - Hành động khắc phục 1: Ban hành mới quy trình thiết kế phát triển (tài liệu này QP-807)
> - Hành động khắc phục 2: Ban hành biểu mẫu biên bản họp xem xét thiết kế (QF-807-03)
> - Hành động khắc phục 3: Soạn thảo hồ sơ hồi tố cho các sản phẩm đang phát triển

---

# 2. Phạm vi áp dụng

Quy trình này áp dụng cho tất cả các hoạt động thiết kế/phát triển sản phẩm hàng không vũ trụ và dịch vụ liên quan được thực hiện tại M&C Electronics VINA.

| Phân loại | Đối tượng áp dụng |
|-----------|------------------|
| Thiết kế mới | Thiết kế và phát triển sản phẩm/bộ phận mới theo yêu cầu khách hàng |
| Thay đổi thiết kế | Thay đổi thiết kế sản phẩm hiện có (dựa trên ECR/ECN) |
| Thiết kế phái sinh | Phát triển sản phẩm phái sinh/biến thể dựa trên thiết kế hiện có |
| Thiết kế công nghệ | Thiết kế quy trình sản xuất, khuôn/đồ gá/dụng cụ cố định |
| Thiết kế phần mềm | Thiết kế phần mềm nhúng, chương trình kiểm tra (khi áp dụng) |
| Chuyển giao thiết kế | Chuyển giao sản xuất hàng loạt từ kết quả thiết kế của khách hàng hoặc bên ngoài |

**Bộ phận áp dụng**: Phát triển (R&D), Sản xuất, Khuôn (MO), Kế hoạch sản xuất (KHSX/PP), Chất lượng (QM), Mua hàng (PUR), Kinh doanh (SAL), Nhân sự (HR_GA)

**Cấu thành Nhóm chức năng chéo (CFT)**: Gồm đại diện các bộ phận Kinh doanh (SAL), Phát triển (R&D), Chất lượng (QM), và các bộ phận liên quan đến sản xuất. Các thành viên CFT bắt buộc hoàn thành đào tạo các công cụ cốt lõi APQP, FMEA, MSA, PPAP, SPC. Tài liệu cuộc họp (BOM, sơ đồ quy trình sản xuất, bản vẽ, yêu cầu đặc biệt của khách hàng) phải được chia sẻ tối thiểu 2 ngày trước cuộc họp.

**Loại trừ**: Đối với sản xuất gia công thuần túy (OEM) mà khách hàng cung cấp hoàn toàn thiết kế và không có hoạt động thiết kế nào của công ty, phạm vi áp dụng được xác định trong giai đoạn hoạch định thiết kế/phát triển của dự án đó.

---

# 3. Tài liệu/tiêu chuẩn tham chiếu

| Tài liệu/Tiêu chuẩn | Nội dung |
|---------------------|----------|
| AS9100D Rev D | Yêu cầu hệ thống quản lý chất lượng hàng không vũ trụ (điều khoản 8.3.1~8.3.6) |
| AS9102 Rev C | Yêu cầu kiểm tra bộ phận đầu tiên hàng không vũ trụ (First Article Inspection) |
| SAE ARP4754A | Hướng dẫn quy trình phát triển máy bay dân dụng và hệ thống |
| SAE ARP4761 | Hướng dẫn quy trình và phương pháp đánh giá an toàn |
| AIAG APQP | Hoạch định chất lượng sản phẩm tiên tiến (Advanced Product Quality Planning) |
| AIAG PPAP | Quy trình phê duyệt bộ phận sản xuất (Production Part Approval Process) |
| QM-001 | Sổ tay chất lượng §8.3 Thiết kế/phát triển |
| QP-803 | Quy trình quản lý cấu hình (bao gồm CCB) |
| QP-802 | Quy trình quản lý rủi ro vận hành (bao gồm FMEA) |
| QP-804 | Quy trình quản lý an toàn sản phẩm/dịch vụ |
| QP-806 | Quy trình xem xét hợp đồng |
| QP-706 | Quy trình quản lý thông tin dạng văn bản |

---

# 4. Thuật ngữ và định nghĩa

| Thuật ngữ | Định nghĩa |
|-----------|-----------|
| Thiết kế/Phát triển (Design & Development) | Tập hợp các quy trình chuyển đổi các yêu cầu thành các đặc tính được quy định của sản phẩm, quy trình hoặc hệ thống |
| DVP&R (Design Verification Plan & Report) | Kế hoạch và báo cáo xác nhận thiết kế — Tài liệu ghi chép có hệ thống phương pháp xác nhận, tiêu chí đánh giá và kết quả cho từng yêu cầu thiết kế |
| APQP (Advanced Product Quality Planning) | Hoạch định chất lượng sản phẩm tiên tiến — Phương pháp luận có hệ thống gồm 5 giai đoạn để phát triển sản phẩm đáp ứng yêu cầu khách hàng |
| PPAP (Production Part Approval Process) | Quy trình phê duyệt bộ phận sản xuất — Thủ tục chứng minh nhà cung cấp có thể sản xuất nhất quán các bộ phận đáp ứng yêu cầu khách hàng |
| Xác nhận thiết kế (Design Verification) | Hoạt động xác nhận đầu ra thiết kế/phát triển có đáp ứng yêu cầu đầu vào thiết kế/phát triển (quan điểm kỹ thuật nội bộ, "Chúng ta có tạo ra đúng cách không?") |
| Xác nhận tính hợp lệ (Design Validation) | Hoạt động xác nhận sản phẩm cuối cùng đáp ứng yêu cầu sử dụng dự định hoặc mục đích cụ thể (quan điểm khách hàng/người dùng, "Chúng ta có tạo ra đúng thứ không?") |
| Xem xét thiết kế (Design Review, DR) | Hoạt động kiểm tra chính thức và có hệ thống để đánh giá tính phù hợp, đầy đủ và hiệu quả của thiết kế/phát triển |
| Đặc tính trọng yếu (Key Characteristics, KC) | Đặc tính mà sự biến động của nó có ảnh hưởng đáng kể đến sự phù hợp, chức năng, hiệu suất, tuổi thọ hoặc khả năng sản xuất của sản phẩm |
| CFT (Cross-Functional Team) | Nhóm chức năng chéo — Nhóm dự án gồm các chuyên gia từ các bộ phận liên quan được thành lập trong hoạch định thiết kế/phát triển |
| Đầu vào thiết kế (Design Input) | Tất cả các yêu cầu làm cơ sở cho thiết kế/phát triển (chức năng, hiệu suất, quy định, an toàn, yêu cầu khách hàng, v.v.) |
| Đầu ra thiết kế (Design Output) | Kết quả của quá trình thiết kế/phát triển (bản vẽ, BOM, tài liệu kỹ thuật, kế hoạch kiểm tra, danh sách KC, FMEA, v.v.) |
| ECR (Engineering Change Request) | Yêu cầu thay đổi kỹ thuật |
| ECN (Engineering Change Notice) | Thông báo thay đổi kỹ thuật |
| Gate (Cổng) | Điểm xem xét chính thức để quyết định có tiến hành giữa các giai đoạn thiết kế/phát triển không |
| DR (Design Review) | Xem xét thiết kế — Cuộc họp xem xét chính thức theo từng giai đoạn thiết kế/phát triển |
| PDR (Preliminary Design Review) | Xem xét thiết kế sơ bộ |
| CDR (Critical Design Review) | Xem xét thiết kế chi tiết (quan trọng) |

---

# 5. Trách nhiệm và quyền hạn

## 5.1 Trách nhiệm theo tổ chức

| Vai trò | Trách nhiệm |
|---------|------------|
| **Đại diện lãnh đạo chất lượng (QMR)** | Giám sát sự phù hợp của hệ thống quản lý chất lượng trong toàn bộ quá trình thiết kế/phát triển; Phê duyệt cuối cùng kết quả xác nhận tính hợp lệ (Validation); Giám sát hệ thống quản lý đặc tính trọng yếu (KC) |
| **Trưởng bộ phận kỹ thuật (Phát triển)** | Phụ trách tổng thể dự án thiết kế/phát triển; Chủ tịch CFT; Xác định hoạch định thiết kế, đầu vào, phê duyệt đầu ra; Chủ trì DR/DV; Phụ trách tổng hợp soạn thảo DVP&R; Nhận dạng đặc tính trọng yếu |
| **Trưởng bộ phận chất lượng (Chất lượng)** | Tham gia xem xét thiết kế (DR); Đảm bảo tính độc lập của hoạt động xác nhận/kiểm tra tính hợp lệ; Xác nhận phương pháp kiểm tra đặc tính trọng yếu; Tham gia FMEA; Chủ trì FAI |
| **Trưởng bộ phận sản xuất (Sản xuất)** | Tham gia CFT; Xem xét khả năng sản xuất (DFM) của thiết kế; Xác nhận quy trình khi chuyển giao sản xuất hàng loạt; Chế tạo mẫu thử (Prototype) |
| **Trưởng bộ phận khuôn (Khuôn)** | Tham gia CFT; Thiết kế và chế tạo khuôn/đồ gá/dụng cụ cố định; Xem xét khuôn mẫu thử; Kết nối quản lý cấu hình khuôn |
| **Trưởng bộ phận mua hàng (PUR)** | Tham gia CFT; Xem xét tính sẵn có của linh kiện/vật liệu trong giai đoạn đầu vào thiết kế; Hỗ trợ đánh giá nhà cung cấp linh kiện mới |
| **Trưởng bộ phận kế hoạch sản xuất (KHSX)** | Tham gia CFT; Kết nối tiến độ phát triển với kế hoạch sản xuất hàng loạt; Xây dựng tiến độ chuyển đổi mẫu thử/sản xuất hàng loạt |
| **Trưởng bộ phận kinh doanh (Kinh doanh)** | Truyền đạt yêu cầu khách hàng; Xác nhận yêu cầu phê duyệt của khách hàng; Liên lạc với khách hàng khi thay đổi thiết kế |
| **Bộ phận nhân sự (HR_GA)** | Quản lý năng lực nhân lực thiết kế/phát triển; Hỗ trợ đào tạo |

## 5.2 Ma trận vai trò thiết kế/phát triển (RACI)

| Hoạt động | Phát triển | Chất lượng | Sản xuất | Khuôn | Mua hàng | KHSX | Kinh doanh | QMR |
|-----------|-----------|-----------|---------|-------|---------|------|-----------|-----|
| Hoạch định thiết kế | **R** | C | C | C | C | C | I | **A** |
| Xác định đầu vào thiết kế | **R** | C | I | I | C | I | **C** | A |
| Thực hiện thiết kế | **R** | I | C | **R** | I | I | I | I |
| Xem xét thiết kế (DR) | **R** | **C** | C | C | C | I | I | A |
| Xác nhận thiết kế (DV) | **R** | **C** | I | I | I | I | I | A |
| Xác nhận tính hợp lệ (Val.) | C | **R** | C | I | I | I | C | **A** |
| Soạn thảo FMEA | **R** | **C** | C | C | I | I | I | A |
| FAI | C | **R** | C | I | I | I | I | A |
| Thay đổi thiết kế (ECR/ECN) | **R** | C | C | C | C | C | C | **A** |

> R = Responsible (thực hiện), A = Accountable (chịu trách nhiệm/phê duyệt), C = Consulted (tư vấn), I = Informed (thông báo)

---

# 6. Hoạch định thiết kế/phát triển (8.3.1)

## 6.1 Giai đoạn và cổng thiết kế/phát triển

Quy trình thiết kế/phát triển được cấu thành tham chiếu 5 giai đoạn APQP như sau, và thực hiện xem xét cổng khi hoàn thành từng giai đoạn.

```
┌─────────────────────────────────────────────────────────────────────┐
│         Sơ đồ luồng quy trình thiết kế/phát triển                    │
│         Design and Development Process Flow                          │
└─────────────────────────────────────────────────────────────────────┘

  Yêu cầu khách hàng / Hoạch định sản phẩm mới
     │
     ▼
  ┌──────────────────────────────────────────┐
  │  Phase 0: Xem xét tính khả thi (Feasibility) │
  │  · Xem xét hợp đồng (QP-806)            │
  │  · Đánh giá tính khả thi kỹ thuật/khả năng sản xuất │
  │  · Phân tích rủi ro sơ bộ               │
  │  · Quyết định Go/No-Go                  │
  └──────────────────────────────────────────┘
     │
     ▼  ◆ Gate 0: Phê duyệt khởi động dự án
     │
  ┌──────────────────────────────────────────┐
  │  Phase 1: Hoạch định (Planning) — APQP giai đoạn 1 │
  │  · Thành lập CFT và họp khởi động       │
  │  · Xác định đầu vào thiết kế (§7)       │
  │  · Xây dựng tiến độ/WBS dự án           │
  │  · Nhận dạng ban đầu đặc tính trọng yếu (KC) │
  │  · Soạn thảo ban đầu DFMEA             │
  │  · Xây dựng kế hoạch DVP&R             │
  └──────────────────────────────────────────┘
     │
     ▼  ◆ Gate 1: Xem xét hoàn thành hoạch định (Planning Review)
     │
  ┌──────────────────────────────────────────┐
  │  Phase 2: Thực hiện thiết kế/phát triển — APQP giai đoạn 2~3 │
  │  · Thiết kế ý tưởng → Thiết kế chi tiết │
  │  · DR-1: Xem xét thiết kế ý tưởng (Concept DR) │
  │  · PDR: Xem xét thiết kế sơ bộ         │
  │  · CDR: Xem xét thiết kế chi tiết       │
  │  · Soạn thảo bản vẽ/BOM/tài liệu kỹ thuật │
  │  · Hoàn thành DFMEA, bắt đầu PFMEA     │
  │  · Chi tiết hóa DVP&R                  │
  └──────────────────────────────────────────┘
     │
     ▼  ◆ Gate 2: Đóng băng thiết kế (Design Freeze)
     │
  ┌──────────────────────────────────────────┐
  │  Phase 3: Xác nhận thiết kế (Verification) │
  │  · Chế tạo mẫu thử (Prototype)          │
  │  · Thực hiện DVP&R — Thử nghiệm xác nhận thiết kế │
  │  · Xác nhận kết quả phân tích/mô phỏng  │
  │  · Xác nhận đặc tính trọng yếu          │
  │  · Ghi chép kết quả xác nhận thiết kế   │
  └──────────────────────────────────────────┘
     │
     ▼  ◆ Gate 3: Hoàn thành xác nhận thiết kế (DV Complete)
     │
  ┌──────────────────────────────────────────┐
  │  Phase 4: Xác nhận tính hợp lệ (Validation) │
  │  · Thử nghiệm điều kiện sản xuất hàng loạt (mô phỏng môi trường sử dụng) │
  │  · Xác nhận đáp ứng yêu cầu khách hàng  │
  │  · Xác nhận sự phù hợp với yêu cầu quy định/chứng nhận │
  │  · Phê duyệt khách hàng (khi áp dụng)   │
  │  · Hoàn thành DVP&R                     │
  └──────────────────────────────────────────┘
     │
     ▼  ◆ Gate 4: Hoàn thành xác nhận tính hợp lệ (Validation Complete)
     │
  ┌──────────────────────────────────────────┐
  │  Phase 5: Chuyển giao sản xuất hàng loạt — APQP giai đoạn 4~5 │
  │  · Nộp PPAP (khi áp dụng)               │
  │  · Thực hiện FAI (AS9102)               │
  │  · Phê duyệt chuyển đổi sản xuất hàng loạt │
  │  · Theo dõi sản xuất hàng loạt ban đầu  │
  │  · Chuyển giao và lưu giữ hồ sơ thiết kế │
  └──────────────────────────────────────────┘
     │
     ▼  ◆ Gate 5: Hoàn thành chuyển giao sản xuất hàng loạt (Production Transfer)

  ※ Chung cho tất cả các giai đoạn:
     - Phán định Go/Conditional Go/No-Go tại mỗi Gate
     - Khi có thay đổi thiết kế → Thủ tục ECR/ECN (§10)
     - Kết nối quản lý cấu hình (QP-803)
```

## 6.2 Cấu thành CFT (Nhóm chức năng chéo)

Khi khởi động dự án thiết kế/phát triển, thành lập Nhóm chức năng chéo (CFT).

| Phân loại | Cấu thành | Vai trò |
|-----------|-----------|---------|
| Trưởng nhóm | Trưởng bộ phận kỹ thuật (Trưởng phòng Phát triển) | Phụ trách tổng thể dự án, quản lý tiến độ/nguồn lực/chất lượng |
| Phụ trách thiết kế | Kỹ sư Phát triển | Thực hiện thiết kế, soạn thảo bản vẽ/BOM/tài liệu kỹ thuật |
| Phụ trách chất lượng | Kỹ sư Chất lượng | Tham gia FMEA, xây dựng kế hoạch kiểm tra, FAI |
| Kỹ thuật sản xuất | Kỹ sư Sản xuất | Xem xét DFM, thiết kế quy trình, chuyển giao sản xuất hàng loạt |
| Phụ trách khuôn | Kỹ sư Khuôn | Thiết kế và chế tạo khuôn/đồ gá, quản lý tiến độ chế tạo |
| Phụ trách mua hàng | Nhân viên Mua hàng (PUR) | Thu mua linh kiện/vật liệu, đánh giá nhà cung cấp |
| Liên hệ khách hàng | Nhân viên Kinh doanh | Xác nhận yêu cầu khách hàng, tiến hành phê duyệt |

Khi cấu thành CFT, xem xét các điểm sau:
- Có thể điều chỉnh thành viên tùy theo quy mô và độ phức tạp của dự án
- Có thể mời chuyên gia bên ngoài (tư vấn, đại diện khách hàng) tham gia
- Xác định rõ vai trò, trách nhiệm, kênh liên lạc trong cuộc họp khởi động CFT
- Điền biểu mẫu **QF-807-01 (Kế hoạch thiết kế/phát triển)** khi khởi động dự án

## 6.3 Các vấn đề cần xem xét trong hoạch định thiết kế/phát triển

Khi hoạch định thiết kế/phát triển, quyết định các vấn đề sau theo AS9100D 8.3.1:

| Vấn đề xem xét | Nội dung chi tiết |
|----------------|------------------|
| Tính chất, thời gian, độ phức tạp của hoạt động thiết kế/phát triển | WBS dự án, các mốc quan trọng, thời gian dự kiến |
| Các giai đoạn quy trình yêu cầu (bao gồm xem xét) | Kế hoạch xem xét cổng, kế hoạch DR/DV/Validation |
| Các hoạt động xác nhận/kiểm tra tính hợp lệ cần thiết | Kế hoạch DVP&R, các hạng mục và phương pháp thử nghiệm |
| Trách nhiệm và quyền hạn | Ma trận RACI, cấu thành CFT |
| Yêu cầu nguồn lực bên trong/bên ngoài | Nhân lực, thiết bị, cơ sở thử nghiệm, yêu cầu gia công bên ngoài |
| Quản lý giao diện giữa những người tham gia | Kế hoạch liên lạc giữa các bộ phận, cuộc họp định kỳ |
| Yêu cầu sự tham gia của khách hàng và người dùng | Các điểm xem xét/phê duyệt của khách hàng |
| Yêu cầu cung cấp sản phẩm/dịch vụ tiếp theo | Sản xuất hàng loạt, bảo hành, sửa chữa, phụ tùng thay thế |
| Mức độ kiểm soát mà các bên liên quan mong đợi | Yêu cầu đặc biệt của từng khách hàng (CSR) |
| Chứng minh hiệu quả của quy trình thiết kế/phát triển | Phản ánh bài học từ các dự án tương tự trước đây |

---

# 7. Đầu vào thiết kế/phát triển (8.3.3)

## 7.1 Các hạng mục đầu vào thiết kế

Trước khi bắt đầu thiết kế/phát triển, nhận dạng và lập tài liệu các hạng mục đầu vào sau. Giải quyết các mâu thuẫn giữa các hạng mục đầu vào.

| Danh mục đầu vào | Hạng mục chi tiết | Nguồn |
|-----------------|------------------|-------|
| **Yêu cầu chức năng/hiệu suất** | Đặc tính điện, đặc tính cơ học, điều kiện môi trường (nhiệt độ, độ ẩm, rung động), mục tiêu tuổi thọ/độ tin cậy | Tài liệu kỹ thuật khách hàng, hợp đồng |
| **Yêu cầu pháp lý/quy định** | Yêu cầu đủ điều kiện bay, quy định môi trường (RoHS, REACH), quy định kiểm soát xuất khẩu | Cơ quan quản lý, pháp lý |
| **Yêu cầu đặc biệt của khách hàng** | Tiêu chuẩn chất lượng của từng khách hàng, yêu cầu kiểm tra đặc biệt, yêu cầu đóng gói/ghi nhãn, điều kiện giao hàng | Xem xét hợp đồng (QP-806) |
| **Bài học từ thiết kế trước** | Các vấn đề xảy ra trong thiết kế sản phẩm tương tự, lịch sử hành động khắc phục, bài học FMEA | Hồ sơ dự án trước |
| **Yêu cầu an toàn** | Chức năng an toàn trọng yếu, phân tích chế độ hỏng hóc, hệ số an toàn | QP-804, phân tích an toàn |
| **Tiêu chuẩn/quy chuẩn áp dụng** | Tiêu chuẩn ngành (IPC, SAE, v.v.), quy chuẩn vật liệu, quy chuẩn thử nghiệm | Gói dữ liệu kỹ thuật |
| **Khả năng sản xuất** | Yêu cầu DFM (Design for Manufacturing), DFA (Design for Assembly) | Bộ phận sản xuất, bộ phận khuôn |
| **Ứng cử viên đặc tính trọng yếu (KC)** | KC do khách hàng chỉ định, KC tạm thời liên quan đến an toàn/chức năng | Bản vẽ khách hàng, tài liệu kỹ thuật |

## 7.2 Xem xét đầu vào thiết kế

- CFT xem xét tính đầy đủ, rõ ràng và không mâu thuẫn của đầu vào thiết kế
- Làm rõ các yêu cầu không rõ ràng với khách hàng hoặc các bên liên quan, sau đó lập tài liệu
- Ghi chép kết quả xem xét đầu vào thiết kế vào biểu mẫu **QF-807-02 (Danh sách kiểm tra đầu vào thiết kế)**
- Khi xác nhận đầu vào thiết kế, trưởng bộ phận kỹ thuật phê duyệt; các thay đổi sau đó tuân theo thủ tục ECR

---

# 8. Kiểm soát thiết kế/phát triển (8.3.4)

## 8.1 Xem xét thiết kế (Design Review, DR)

> **Hành động khắc phục CAR-017**: Tất cả các xem xét thiết kế phải được thực hiện như cuộc họp chính thức và ghi chép vào biểu mẫu **QF-807-03 (Biên bản họp xem xét thiết kế)**. Không cho phép phê duyệt bằng lời.

### 8.1.1 Các loại xem xét thiết kế

| Giai đoạn xem xét | Thời điểm | Chủ trì | Người tham gia | Nội dung xem xét |
|------------------|-----------|---------|---------------|-----------------|
| DR-0: Xem xét tính khả thi | Hoàn thành Phase 0 | Trưởng bộ phận kỹ thuật | CFT + QMR | Tính khả thi kỹ thuật/sản xuất/thương mại, Go/No-Go |
| DR-1: Xem xét thiết kế ý tưởng | Hoàn thành thiết kế ý tưởng | Trưởng bộ phận kỹ thuật | CFT | Tính phù hợp của ý tưởng thiết kế, hướng đáp ứng đầu vào |
| PDR: Xem xét thiết kế sơ bộ | Hoàn thành thiết kế sơ bộ | Trưởng bộ phận kỹ thuật | CFT + QMR | Hướng thiết kế, giao diện, nhận dạng KC, rủi ro |
| CDR: Xem xét thiết kế chi tiết | Hoàn thành thiết kế chi tiết | Trưởng bộ phận kỹ thuật | CFT + QMR | Tính hoàn chỉnh thiết kế, tính phù hợp BOM/bản vẽ, FMEA |
| Xem xét thiết kế cuối cùng | Trước khi đóng băng thiết kế | Trưởng bộ phận kỹ thuật | CFT + QMR | Khả năng đóng băng thiết kế, tính phù hợp của kế hoạch xác nhận |

### 8.1.2 Thủ tục thực hiện xem xét thiết kế

1. Trưởng bộ phận kỹ thuật thông báo trước chương trình, người tham dự, lịch họp (tối thiểu 3 ngày làm việc trước)
2. Phân phát trước các đầu ra thiết kế của giai đoạn tương ứng
3. Đánh giá tính phù hợp, đầy đủ và hiệu quả của thiết kế trong cuộc họp xem xét
4. Ghi chép kết quả xem xét và các hành động cần thực hiện vào **QF-807-03**
5. Chỉ định người phụ trách và hạn hoàn thành cho các hành động cần thực hiện
6. Trưởng bộ phận kỹ thuật ký xác nhận sau khi hoàn thành các hành động
7. Phán định cổng: **Go / Conditional Go / No-Go**

### 8.1.3 Yêu cầu đối với người tham gia xem xét thiết kế

- Đại diện chức năng liên quan đến giai đoạn thiết kế được xem xét phải tham gia bắt buộc
- Người xem xét phải bao gồm nhân viên độc lập với người phụ trách thực hiện thiết kế
- Phối hợp trước nếu yêu cầu sự tham gia của đại diện khách hàng

## 8.2 Xác nhận thiết kế (Design Verification, DV)

Xác nhận thiết kế là hoạt động xác nhận đầu ra thiết kế/phát triển có đáp ứng yêu cầu đầu vào thiết kế/phát triển.

> **Yêu cầu AS9100D**: Xác nhận thiết kế (Verification) và xác nhận tính hợp lệ (Validation) phải được thực hiện như **các hoạt động riêng biệt** (tham chiếu Ghi chú 8.3.4).

### 8.2.1 Phương pháp xác nhận thiết kế

| Phương pháp | Ví dụ áp dụng | Hồ sơ |
|-------------|--------------|-------|
| Thử nghiệm/đo lường (Test) | Thử nghiệm điện, thử nghiệm môi trường, thử nghiệm tuổi thọ, thử nghiệm độ bền | Báo cáo thử nghiệm |
| Phân tích/mô phỏng (Analysis) | FEA, phân tích nhiệt, mô phỏng mạch, phân tích dung sai | Báo cáo phân tích |
| Kiểm tra (Inspection) | Đo kích thước, kiểm tra ngoại quan, kiểm tra không phá hủy | Biên bản kiểm tra |
| Thử nghiệm thực tế (Demonstration) | Thử nghiệm chức năng, xác nhận tính lắp ráp, thử nghiệm vận hành | Hồ sơ thử nghiệm |
| So sánh thiết kế (Comparison) | Phân tích so sánh với sản phẩm có thành tích tương tự | Bản phân tích so sánh |

### 8.2.2 Quản lý DVP&R (Kế hoạch và báo cáo xác nhận thiết kế)

> **Hành động khắc phục CAR-017**: Áp dụng bắt buộc DVP&R cho tất cả các dự án thiết kế/phát triển.

DVP&R sử dụng biểu mẫu **QF-807-04 (Biểu mẫu DVP&R)** và bao gồm các nội dung sau:

| Hạng mục DVP&R | Nội dung |
|---------------|----------|
| Yêu cầu thiết kế | Yêu cầu cần xác nhận (xuất phát từ đầu vào thiết kế) |
| Phương pháp xác nhận | Chọn từ thử nghiệm / phân tích / kiểm tra / thử nghiệm thực tế / so sánh |
| Tiêu chí đánh giá | Tiêu chí đạt/không đạt (ưu tiên tiêu chí định lượng) |
| Số lượng/điều kiện mẫu | Số lượng mẫu thử nghiệm, điều kiện thử nghiệm (nhiệt độ, độ ẩm, rung động, v.v.) |
| Người phụ trách | Người phụ trách thực hiện hoạt động xác nhận |
| Tiến độ kế hoạch | Ngày hoàn thành kế hoạch của hoạt động xác nhận |
| Kết quả | Đạt / Không đạt / Đạt có điều kiện |
| Ghi chú | Hành động khi không đạt, kế hoạch thử nghiệm lại |

### 8.2.3 Xử lý kết quả xác nhận thiết kế

- **Đạt**: Ghi chép kết quả vào DVP&R, tiến hành bước tiếp theo
- **Không đạt**: Phân tích nguyên nhân gốc rễ → Sửa đổi thiết kế → Xác nhận lại (ghi thêm kết quả vào DVP&R)
- **Đạt có điều kiện**: Ghi chép và ghi lại các điều kiện và hành động tiếp theo, cho phép tiến hành giai đoạn có giới hạn

## 8.3 Xác nhận tính hợp lệ (Design Validation)

Xác nhận tính hợp lệ là hoạt động xác nhận sản phẩm cuối cùng đáp ứng yêu cầu sử dụng dự định hoặc mục đích cụ thể.

### 8.3.1 Yêu cầu xác nhận tính hợp lệ

| Hạng mục | Yêu cầu |
|----------|---------|
| Thời điểm thực hiện | Sau khi hoàn thành xác nhận thiết kế, trước khi chuyển giao sản xuất hàng loạt |
| Điều kiện thực hiện | Thực hiện trong điều kiện sử dụng thực tế hoặc điều kiện mô phỏng |
| Tính độc lập | Người độc lập với người phụ trách thực hiện thiết kế chủ trì (Trưởng bộ phận chất lượng chủ trì) |
| Sự tham gia của khách hàng | Khách hàng tham gia/chứng kiến khi có yêu cầu của khách hàng hoặc yêu cầu hợp đồng |
| Phù hợp quy định | Bao gồm xác nhận sự phù hợp với yêu cầu quy định về đủ điều kiện bay, an toàn |

### 8.3.2 Hoạt động xác nhận tính hợp lệ

- Thử nghiệm mô phỏng điều kiện sản xuất hàng loạt (sử dụng thiết bị sản xuất, vật liệu sản xuất hàng loạt)
- Thử nghiệm môi trường (xác nhận chức năng/hiệu suất trong điều kiện môi trường sử dụng)
- Thử nghiệm quy định/chứng nhận (đủ điều kiện bay, EMC, quy định môi trường, v.v.)
- Thử nghiệm phê duyệt khách hàng (thử nghiệm theo tài liệu kỹ thuật thử nghiệm của khách hàng)
- Thực hiện các hạng mục xác nhận tính hợp lệ (Validation) trong DVP&R và ghi chép kết quả

### 8.3.3 Phân tách xác nhận tính hợp lệ và xác nhận thiết kế

> **Yêu cầu bắt buộc hàng không vũ trụ**: Xác nhận tính hợp lệ (Validation) phải được thực hiện như hoạt động riêng biệt với xác nhận thiết kế (Verification).

| Phân loại | Xác nhận thiết kế (Verification) | Xác nhận tính hợp lệ (Validation) |
|-----------|--------------------------------|----------------------------------|
| Câu hỏi | "Chúng ta có tạo ra đúng cách không?" | "Chúng ta có tạo ra đúng thứ không?" |
| Tiêu chuẩn | Yêu cầu đầu vào thiết kế | Yêu cầu sử dụng dự định |
| Chủ trì | Trưởng bộ phận kỹ thuật (Phát triển) | Trưởng bộ phận chất lượng (độc lập) |
| Thời điểm | Phase 3 (Giai đoạn xác nhận thiết kế) | Phase 4 (Giai đoạn xác nhận tính hợp lệ) |
| Điều kiện | Môi trường phòng thử nghiệm/phân tích | Điều kiện sử dụng thực tế hoặc điều kiện mô phỏng |
| Hồ sơ | DVP&R — Phần Verification | DVP&R — Phần Validation |

## 8.4 Quản lý đặc tính trọng yếu (Key Characteristics, KC)

### 8.4.1 Nhận dạng đặc tính trọng yếu

Nhận dạng các đặc tính đáp ứng tiêu chí sau là đặc tính trọng yếu (KC):

| Tiêu chí | Mô tả |
|----------|-------|
| Trọng yếu về an toàn | Đặc tính ảnh hưởng trực tiếp đến an toàn/đủ điều kiện bay |
| Trọng yếu về chức năng | Đặc tính có ảnh hưởng quyết định đến chức năng/hiệu suất cốt lõi của sản phẩm |
| Do khách hàng chỉ định | Đặc tính mà khách hàng đã chỉ định là đặc tính trọng yếu |
| Trọng yếu về quy trình | Thông số quy trình mà khi biến động có ảnh hưởng đáng kể đến sự phù hợp của sản phẩm |

### 8.4.2 Quy trình quản lý đặc tính trọng yếu

1. Nhận dạng ứng cử viên KC trong giai đoạn đầu vào thiết kế
2. Xác nhận KC trong xem xét thiết kế (DR) và đăng ký vào **QF-807-05 (Danh sách đặc tính trọng yếu)**
3. Ghi ký hiệu KC (◇, △, v.v.) trên bản vẽ, BOM, tài liệu kỹ thuật
4. Phân tích chế độ hỏng hóc liên quan đến KC trong DFMEA và xây dựng biện pháp quản lý
5. Bao gồm các hạng mục xác nhận/kiểm tra tính hợp lệ KC trong DVP&R
6. Áp dụng SPC (kiểm soát quy trình thống kê) hoặc kiểm tra 100% cho KC trong sản xuất hàng loạt
7. Khi thay đổi KC cần có thủ tục ECR/ECN và phê duyệt khách hàng

---

# 9. Đầu ra thiết kế/phát triển (8.3.5)

## 9.1 Các hạng mục đầu ra bắt buộc

Đầu ra thiết kế/phát triển được soạn thảo dưới dạng có thể xác nhận đối với yêu cầu đầu vào, và bao gồm các hạng mục sau:

| Hạng mục đầu ra | Nội dung | Biểu mẫu/Định dạng |
|----------------|----------|-------------------|
| Bản vẽ thiết kế | Bản vẽ bộ phận, bản vẽ lắp ráp, bản vẽ bố trí, sơ đồ mạch (2D/3D) | Tệp CAD + PDF |
| BOM (Danh mục vật tư) | Danh sách linh kiện, quy cách, số lượng, nhà cung cấp | QF-807-06 hoặc ERP |
| Tài liệu kỹ thuật sản phẩm | Quy cách chức năng/hiệu suất, quy cách vật liệu, quy cách môi trường | QF-807-07 |
| Kế hoạch thử nghiệm / DVP&R | Kế hoạch và kết quả xác nhận/kiểm tra tính hợp lệ | QF-807-04 |
| Danh sách đặc tính trọng yếu | Danh sách KC, tiêu chuẩn quản lý, phương pháp kiểm tra | QF-807-05 |
| DFMEA | Phân tích tác động chế độ hỏng hóc thiết kế | Tham chiếu biểu mẫu QP-802 |
| Tiêu chuẩn kiểm tra | Tiêu chuẩn kiểm tra đầu vào/quy trình/xuất xưởng | QF-807-08 |
| Quy cách đóng gói | Phương pháp đóng gói, ghi nhãn, chú ý xử lý | Khi có yêu cầu khách hàng |
| Tài liệu phần mềm | Yêu cầu phần mềm, tài liệu thiết kế, kế hoạch thử nghiệm (khi áp dụng) | Xác định theo dự án |

## 9.2 Yêu cầu đầu ra thiết kế

Theo AS9100D 8.3.5, đầu ra thiết kế/phát triển đáp ứng các yêu cầu sau:

- Đáp ứng yêu cầu đầu vào thiết kế/phát triển
- Cung cấp thông tin phù hợp cho các quy trình tiếp theo (mua hàng, sản xuất, cung cấp dịch vụ)
- Bao gồm hoặc trích dẫn yêu cầu giám sát và đo lường và tiêu chí chấp nhận
- Quy định các đặc tính của sản phẩm cần thiết cho mục đích dự định và sử dụng an toàn/phù hợp
- Nhận dạng đặc tính trọng yếu (KC) và quy định phương pháp quản lý

## 9.3 Phê duyệt đầu ra thiết kế

- Trưởng bộ phận kỹ thuật xem xét và QMR phê duyệt đầu ra thiết kế
- Đầu ra thiết kế được phê duyệt được đưa vào đường cơ sở (Baseline) như đối tượng quản lý cấu hình (QP-803)
- Việc phân phối và quản lý đầu ra thiết kế tuân theo quy trình quản lý thông tin dạng văn bản (QP-706)

---

# 10. Thay đổi thiết kế/phát triển (8.3.6)

## 10.1 Quy trình quản lý thay đổi thiết kế

```
┌─────────────────────────────────────────────────────────────────┐
│          Sơ đồ luồng quy trình quản lý thay đổi thiết kế/phát triển │
│          Design/Development Change Management Flow               │
└─────────────────────────────────────────────────────────────────┘

  Phát sinh nhu cầu thay đổi (lỗi thiết kế, yêu cầu khách hàng, cải tiến, không phù hợp)
     │
     ▼
  ① Soạn thảo ECR (Yêu cầu thay đổi kỹ thuật)
     │  · Mô tả lý do thay đổi, nội dung thay đổi, phạm vi ảnh hưởng
     │  · Người yêu cầu → Nộp cho Trưởng bộ phận kỹ thuật
     │
     ▼
  ② Phân tích ảnh hưởng (Impact Analysis)
     │  · Ảnh hưởng kỹ thuật: chức năng, hiệu suất, an toàn, ảnh hưởng KC
     │  · Ảnh hưởng sản xuất: quy trình, khuôn, sản phẩm dở dang, tồn kho
     │  · Ảnh hưởng chi phí: chi phí linh kiện, chi phí quy trình, chi phí khuôn
     │  · Ảnh hưởng tiến độ: thời hạn giao hàng, kế hoạch sản xuất
     │  · Ảnh hưởng quản lý cấu hình: đường cơ sở, thay đổi CI
     │
     ▼
  ③ Thẩm định/phê duyệt CCB (Kết nối QP-803)
     │  · CCB thẩm định tính hợp lý của thay đổi
     │  · Xác định có cần phê duyệt khách hàng không
     │
     ├──→ [Từ chối] → Bổ sung ECR hoặc kết thúc
     │
     ▼
  ④ Phê duyệt khách hàng (khi áp dụng)
     │  · Thông báo và lấy phê duyệt của khách hàng
     │  · Lưu giữ hồ sơ phê duyệt khách hàng
     │
     ▼
  ⑤ Phát hành ECN (Thông báo thay đổi kỹ thuật)
     │  · Chỉ thị thực hiện thay đổi
     │  · Phân phối cho các bộ phận liên quan
     │
     ▼
  ⑥ Thực hiện thay đổi
     │  · Sửa đổi bản vẽ/BOM/tài liệu kỹ thuật
     │  · Thay đổi khuôn/đồ gá (khi áp dụng)
     │  · Xác định điểm chuyển đổi sản xuất (Effectivity)
     │  · Quyết định xử lý sản phẩm dở dang/tồn kho
     │
     ▼
  ⑦ Xác nhận thay đổi
     │  · Xác nhận lại thiết kế đã thay đổi (cập nhật DVP&R)
     │  · Cập nhật đường cơ sở cấu hình (QP-803)
     │  · Ghi chép lịch sử thay đổi
     │
     ▼
  ⑧ Hoàn thành thay đổi và lưu giữ hồ sơ
     · Lưu giữ lịch sử ECR/ECN
     · Cập nhật hồ sơ quản lý cấu hình
```

## 10.2 Phân loại thay đổi thiết kế

| Phân loại | Tiêu chí | Quyền phê duyệt | Thông báo khách hàng |
|-----------|----------|----------------|---------------------|
| Class I (Thay đổi quan trọng) | Ảnh hưởng đến chức năng/hiệu suất/an toàn/tính phù hợp | CCB + QMR + Phê duyệt khách hàng | Bắt buộc |
| Class II (Thay đổi nhỏ) | Thay đổi không ảnh hưởng đến chức năng/hiệu suất | CCB + Trưởng bộ phận kỹ thuật | Khi có yêu cầu khách hàng |
| Class III (Thay đổi hành chính) | Sửa lỗi đánh máy, thay đổi định dạng, v.v. | Trưởng bộ phận kỹ thuật | Không cần thiết |

## 10.3 Yêu cầu xác nhận/kiểm tra tính hợp lệ lại khi thay đổi

- Thay đổi Class I: Thực hiện lại các hoạt động xác nhận thiết kế và kiểm tra tính hợp lệ tương ứng với phạm vi thay đổi
- Thay đổi Class II: Thực hiện lại xác nhận thiết kế tương ứng với phạm vi thay đổi
- Thay đổi liên quan đến đặc tính trọng yếu (KC): Bắt buộc phê duyệt trước của khách hàng, cập nhật DVP&R

## 10.4 Kết nối quản lý cấu hình

- Tất cả các thay đổi thiết kế đều phải qua thẩm định CCB theo QP-803 (quy trình quản lý cấu hình)
- Sau khi phê duyệt thay đổi, cập nhật đường cơ sở của hạng mục cấu hình tương ứng
- Duy trì mối quan hệ truy xuất giữa số ECR/ECN và số hạng mục cấu hình (CI)

---

# 11. Yêu cầu đặc thù hàng không vũ trụ

## 11.1 Phân tách xác nhận thiết kế và kiểm tra tính hợp lệ (AS9100D 8.3.4)

- Xác nhận thiết kế (Verification) và xác nhận tính hợp lệ (Validation) được hoạch định, thực hiện và ghi chép như các hoạt động riêng biệt
- Bộ phận kỹ thuật (phòng phát triển) chủ trì xác nhận thiết kế, bộ phận chất lượng chủ trì xác nhận tính hợp lệ để đảm bảo tính độc lập
- Phân biệt các hạng mục Verification và các hạng mục Validation trong DVP&R để quản lý
- Xác định riêng biệt tiêu chí hoàn thành, người phụ trách, tiến độ cho từng hoạt động

## 11.2 Quản lý đặc tính trọng yếu (Key Characteristics)

- Nhận dạng và lập tài liệu đặc tính trọng yếu (KC) khi thiết kế tất cả các sản phẩm hàng không vũ trụ
- Ghi ký hiệu đặc biệt (◇) trên bản vẽ cho KC, đăng ký vào danh sách đặc tính trọng yếu (QF-807-05)
- Phân tích chế độ hỏng hóc cho KC trong DFMEA và xây dựng biện pháp quản lý phát hiện/phòng ngừa
- Lấy phê duyệt trước của khách hàng khi thay đổi liên quan đến KC
- Áp dụng SPC hoặc kiểm tra tăng cường cho KC khi sản xuất hàng loạt

## 11.3 Áp dụng bắt buộc DVP&R

- Soạn thảo DVP&R (QF-807-04) cho tất cả các dự án thiết kế/phát triển
- Soạn thảo ban đầu DVP&R trong giai đoạn hoạch định thiết kế và chi tiết hóa theo tiến độ thiết kế
- Ghi chép và quản lý kết quả xác nhận/kiểm tra tính hợp lệ theo thời gian thực trong DVP&R
- Hoàn thành DVP&R là điều kiện tiên quyết bắt buộc để chuyển giao sản xuất hàng loạt

## 11.4 Phê duyệt và thông báo khách hàng

Trong các trường hợp sau, thông báo trước và lấy phê duyệt của khách hàng:

| Tình huống | Biện pháp |
|-----------|----------|
| Kết quả thiết kế mới | Phê duyệt thiết kế của khách hàng (theo điều kiện hợp đồng tương ứng) |
| Thay đổi liên quan đến đặc tính trọng yếu (KC) | Bắt buộc phê duyệt trước của khách hàng |
| Thay đổi thiết kế Class I | Bắt buộc phê duyệt trước của khách hàng |
| Thay đổi vật liệu/quy trình | Thông báo khách hàng (cần phê duyệt theo điều kiện hợp đồng) |
| Thay đổi nhà cung cấp | Thông báo khách hàng (cần phê duyệt theo điều kiện hợp đồng) |
| Chuyển giao thiết kế (thay đổi địa điểm sản xuất) | Bắt buộc phê duyệt trước của khách hàng |

## 11.5 Kết nối APQP/PPAP

- Quản lý đầu ra APQP theo từng giai đoạn và ghi rõ giai đoạn APQP tương ứng trong kế hoạch thiết kế/phát triển (QF-807-01)
- Chuẩn bị gói nộp PPAP khi khách hàng yêu cầu (bản vẽ, BOM, FMEA, DVP&R, FAI, kế hoạch kiểm soát, v.v.)
- Mức phê duyệt PPAP (Level 1~5) theo chỉ định của khách hàng

## 11.6 Xem xét an toàn trong thiết kế

- Quản lý các hạng mục thiết kế trọng yếu về an toàn kết nối với QP-804 (quản lý an toàn sản phẩm/dịch vụ)
- Bắt buộc thực hiện đánh giá ảnh hưởng an toàn cho các thay đổi thiết kế liên quan đến an toàn
- Quản lý riêng biệt đặc tính trọng yếu về an toàn trong danh sách đặc tính trọng yếu (KC an toàn)

---

# 12. Quản lý hồ sơ

## 12.1 Hồ sơ cần lưu giữ

| Loại hồ sơ | Số biểu mẫu | Thời hạn lưu giữ |
|-----------|------------|-----------------|
| Kế hoạch thiết kế/phát triển | QF-807-01 | Tuổi thọ sản phẩm + 10 năm |
| Danh sách kiểm tra đầu vào thiết kế | QF-807-02 | Tuổi thọ sản phẩm + 10 năm |
| Biên bản họp xem xét thiết kế | QF-807-03 | Tuổi thọ sản phẩm + 10 năm |
| DVP&R (Kế hoạch và báo cáo xác nhận thiết kế) | QF-807-04 | Tuổi thọ sản phẩm + 10 năm |
| Danh sách đặc tính trọng yếu | QF-807-05 | Tuổi thọ sản phẩm + 10 năm |
| BOM (Danh mục vật tư) | QF-807-06 | Tuổi thọ sản phẩm + 10 năm |
| Tài liệu kỹ thuật sản phẩm | QF-807-07 | Tuổi thọ sản phẩm + 10 năm |
| Tiêu chuẩn kiểm tra | QF-807-08 | Tuổi thọ sản phẩm + 10 năm |
| ECR (Yêu cầu thay đổi kỹ thuật) | QF-807-09 | Tuổi thọ sản phẩm + 10 năm |
| ECN (Thông báo thay đổi kỹ thuật) | QF-807-10 | Tuổi thọ sản phẩm + 10 năm |
| DFMEA | Biểu mẫu QP-802 | Tuổi thọ sản phẩm + 10 năm |
| Báo cáo thử nghiệm | Theo dự án | Tuổi thọ sản phẩm + 10 năm |
| Hồ sơ phê duyệt khách hàng | Theo dự án | Tuổi thọ sản phẩm + 10 năm |

## 12.2 Nguyên tắc quản lý hồ sơ

- Tất cả hồ sơ thiết kế/phát triển được quản lý theo QP-706 (quản lý thông tin dạng văn bản)
- Hồ sơ điện tử được lưu giữ ở trạng thái có thể đọc được bao gồm cả bản sao lưu
- Thời hạn lưu giữ hồ sơ cơ bản là **tuổi thọ sản phẩm + 10 năm**; áp dụng thời hạn dài hơn nếu yêu cầu của khách hàng hoặc quy định dài hơn
- Trưởng bộ phận kỹ thuật quản lý quyền truy cập vào hồ sơ thiết kế
- Cũng soạn thảo hồ sơ hồi tố cho các sản phẩm đang phát triển hiện tại sau khi ban hành quy trình này (Hành động khắc phục CAR-017 số 3)

---

# 13. Tài liệu và biểu mẫu liên quan

## 13.1 Quy trình liên quan

| Mã tài liệu | Tên tài liệu | Sự liên quan |
|------------|-------------|-------------|
| QM-001 | Sổ tay chất lượng | §8.3 Yêu cầu cấp trên về thiết kế/phát triển |
| QP-802 | Quản lý rủi ro vận hành (FMEA) | Thủ tục soạn thảo DFMEA/PFMEA |
| QP-803 | Quản lý cấu hình (CCB) | Thủ tục ECR/ECN, quản lý đường cơ sở, vận hành CCB |
| QP-804 | Quản lý an toàn sản phẩm/dịch vụ | Yêu cầu thiết kế trọng yếu về an toàn |
| QP-805 | Liên lạc/yêu cầu khách hàng | Tiếp nhận yêu cầu khách hàng, CSR |
| QP-806 | Xem xét hợp đồng | Xem xét hợp đồng thiết kế/phát triển |
| QP-706 | Quản lý thông tin dạng văn bản | Quản lý, phân phối, lưu giữ hồ sơ thiết kế |
| QP-810 | Quản lý sản xuất/cung cấp dịch vụ | Chuyển giao sản xuất hàng loạt, quản lý quy trình |

## 13.2 Danh sách biểu mẫu

| Số biểu mẫu | Tên biểu mẫu | Mục đích sử dụng |
|------------|-------------|----------------|
| QF-807-01 | Kế hoạch thiết kế/phát triển (Design & Development Plan) | Cấu thành CFT, tiến độ, WBS, kế hoạch cổng |
| QF-807-02 | Danh sách kiểm tra đầu vào thiết kế (Design Input Checklist) | Xem xét tính đầy đủ của các hạng mục đầu vào thiết kế |
| QF-807-03 | Biên bản họp xem xét thiết kế (Design Review Minutes) | Ghi chép kết quả xem xét DR/PDR/CDR (CAR-017) |
| QF-807-04 | DVP&R (Design Verification Plan & Report) | Kế hoạch và kết quả xác nhận/kiểm tra tính hợp lệ thiết kế |
| QF-807-05 | Danh sách đặc tính trọng yếu (Key Characteristics List) | Nhận dạng KC, tiêu chuẩn quản lý, phương pháp kiểm tra |
| QF-807-06 | BOM (Bill of Materials) | Danh mục vật tư |
| QF-807-07 | Tài liệu kỹ thuật sản phẩm (Product Specification) | Quy cách chức năng/hiệu suất/môi trường |
| QF-807-08 | Tiêu chuẩn kiểm tra (Inspection Standard) | Tiêu chuẩn kiểm tra đầu vào/quy trình/xuất xưởng |
| QF-807-09 | ECR (Engineering Change Request) | Yêu cầu thay đổi kỹ thuật |
| QF-807-10 | ECN (Engineering Change Notice) | Thông báo thay đổi kỹ thuật |

---

**Kết thúc tài liệu — QP-807 Rev. 0**
