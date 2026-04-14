# Quy trình Quản lý Rủi ro Vận hành (Bao gồm FMEA)
## Operational Risk Management Procedure (Including FMEA)

| Mục | Nội dung |
|-----|---------|
| Số tài liệu | QP-802 |
| Số hiệu chỉnh | Rev. 0 |
| Ngày ban hành | Tháng 4 năm 2026, ngày ___ |
| Tiêu chuẩn áp dụng | AS9100D Rev D, 8.1.2 |
| Cấp độ bảo mật | Tài liệu mật (Confidential) |
| Tài liệu cấp trên | QM-001 Sổ tay chất lượng §8.1.2 |

| Phân loại | Chức vụ | Họ tên | Chữ ký | Ngày |
|-----------|---------|--------|--------|------|
| Soạn thảo | Nhân viên bộ phận Chất lượng | | | |
| Kiểm tra | Trưởng bộ phận Kỹ thuật | | | |
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
6. [Hệ thống quản lý rủi ro vận hành](#6-hệ-thống-quản-lý-rủi-ro-vận-hành)
7. [Thực hiện FMEA](#7-thực-hiện-fmea)
8. [Giảm thiểu và quản lý rủi ro](#8-giảm-thiểu-và-quản-lý-rủi-ro)
9. [Yêu cầu đặc thù hàng không vũ trụ](#9-yêu-cầu-đặc-thù-hàng-không-vũ-trụ)
10. [Quản lý hồ sơ](#10-quản-lý-hồ-sơ)
11. [Tài liệu và biểu mẫu liên quan](#11-tài-liệu-và-biểu-mẫu-liên-quan)

---

# 1. Mục đích

Quy trình này quy định thủ tục để xác định, đánh giá và giảm thiểu có hệ thống các rủi ro có thể phát sinh trong quá trình thực hiện sản phẩm (vận hành) tại M&C Electronics VINA.

Mục đích của quy trình này:
- Xây dựng quy trình quản lý rủi ro vận hành theo yêu cầu AS9100D 8.1.2
- Đánh giá rủi ro có hệ thống bằng FMEA (Phân tích chế độ hỏng hóc và ảnh hưởng)
- Biện pháp giảm thiểu rủi ro để đảm bảo sự phù hợp của sản phẩm/quy trình/dịch vụ
- Phản ánh hành động khắc phục CAR-001, CAR-002 (Hệ thống quản lý rủi ro vận hành không đầy đủ)

> **Lưu ý**: Rủi ro/cơ hội chiến lược (AS9100D 6.1) được quản lý tại QP-601. Quy trình này tập trung vào **rủi ro vận hành và kỹ thuật** (8.1.2).

---

# 2. Phạm vi áp dụng

Quy trình này áp dụng cho toàn bộ quá trình thực hiện sản phẩm (vận hành) của M&C Electronics VINA.

| Phân loại | Đối tượng áp dụng |
|-----------|------------------|
| Thiết kế/phát triển | DFMEA (Design FMEA) — Rủi ro thiết kế sản phẩm |
| Sản xuất/chế tạo | PFMEA (Process FMEA) — Rủi ro quy trình sản xuất |
| Mua hàng/cung ứng | Rủi ro chuỗi cung ứng — Chất lượng nhà cung cấp, ngày giao, linh kiện giả |
| Kiểm tra/thử nghiệm | Rủi ro phát hiện lỗi — Quy trình đo lường/kiểm tra |
| Giao hàng/hậu cần | Rủi ro giao hàng — Vận chuyển, bảo quản, hư hỏng |
| Quy trình đặc biệt | Rủi ro quy trình đặc biệt — Năng lực quy trình, chứng nhận nhân viên |

---

# 3. Tài liệu/tiêu chuẩn tham chiếu

| Tài liệu/tiêu chuẩn | Nội dung |
|--------------------|---------|
| AS9100D Rev D | Yêu cầu hệ thống quản lý chất lượng hàng không vũ trụ (điều khoản 8.1.2) |
| SAE ARP4761 | Hướng dẫn quy trình đánh giá an toàn hệ thống máy bay dân dụng |
| SAE J1739 | Sổ tay tham chiếu FMEA |
| AIAG & VDA FMEA Handbook | Hướng dẫn thực hiện FMEA (2019) |
| QM-001 | Sổ tay chất lượng §8.1.2 Quản lý rủi ro vận hành |
| QP-601 | Quy trình quản lý rủi ro và cơ hội (Rủi ro chiến lược) |
| QP-804 | Quy trình quản lý an toàn sản phẩm/dịch vụ |

---

# 4. Thuật ngữ và định nghĩa

| Thuật ngữ | Định nghĩa |
|-----------|-----------|
| Rủi ro vận hành (Operational Risk) | Khả năng xảy ra kết quả không mong muốn trong quá trình thực hiện sản phẩm |
| FMEA (Failure Mode and Effects Analysis) | Phân tích chế độ hỏng hóc và ảnh hưởng — Phương pháp phân tích có hệ thống các chế độ hỏng hóc tiềm ẩn, nguyên nhân và ảnh hưởng |
| DFMEA (Design FMEA) | FMEA thiết kế — Phân tích hỏng hóc thực hiện trong giai đoạn thiết kế sản phẩm |
| PFMEA (Process FMEA) | FMEA quy trình — Phân tích hỏng hóc thực hiện trong quy trình sản xuất |
| Chế độ hỏng hóc (Failure Mode) | Cách thức mà linh kiện/quy trình không thực hiện được chức năng yêu cầu |
| RPN (Risk Priority Number) | Số ưu tiên rủi ro = Mức độ nghiêm trọng (S) × Tần suất xảy ra (O) × Khả năng phát hiện (D) |
| AP (Action Priority) | Mức độ ưu tiên hành động theo phương pháp AIAG-VDA (High/Medium/Low) |
| Mức độ nghiêm trọng (Severity) | Mức độ nghiêm trọng của ảnh hưởng hỏng hóc (1~10) |
| Tần suất xảy ra (Occurrence) | Xác suất xảy ra nguyên nhân hỏng hóc (1~10) |
| Khả năng phát hiện (Detection) | Khả năng phát hiện hỏng hóc bằng phương pháp kiểm soát hiện tại (1~10, càng thấp càng tốt) |
| Rủi ro tồn dư (Residual Risk) | Rủi ro còn lại sau khi thực hiện biện pháp giảm thiểu |

---

# 5. Trách nhiệm và quyền hạn

| Vai trò | Trách nhiệm |
|---------|------------|
| **Đại diện lãnh đạo về chất lượng (QMR)** | Tổng quản lý hệ thống quản lý rủi ro vận hành; Phê duyệt kết quả FMEA; Xem xét cuối cùng Sổ đăng ký rủi ro; Báo cáo xem xét lãnh đạo |
| **Trưởng bộ phận Phát triển (R&D)** | Chủ trì cuộc họp FMEA (Trưởng nhóm CFT chủ trì họp); Chủ trì DFMEA; Đồng chủ trì PFMEA; Phân phối tài liệu liên quan (sơ đồ dòng chảy sản xuất, bản vẽ, yêu cầu kỹ thuật, dữ liệu phân tích lỗi trước đây) cho các thành viên nhóm trước ít nhất 1 ngày |
| **Trưởng bộ phận Sản xuất** | Đồng chủ trì PFMEA; Xác định và thực hiện biện pháp giảm thiểu rủi ro quy trình; Quản lý năng lực quy trình |
| **Trưởng bộ phận Chất lượng (QC)** | Vai trò Người hỗ trợ (Facilitator) FMEA; Đánh giá kiểm soát phát hiện; Duy trì Sổ đăng ký rủi ro; Phân tích dữ liệu rủi ro |
| **Trưởng bộ phận Mua hàng** | Xác định rủi ro chuỗi cung ứng; Đánh giá rủi ro nhà cung cấp; Đảm bảo nguồn cung thay thế |
| **Nhóm đa chức năng (CFT — Đại diện bộ phận Phát triển/Khuôn/QC/Sản xuất)** | Tham gia hội thảo FMEA; Cung cấp ý kiến chuyên môn về quy trình phụ trách; Thực hiện biện pháp giảm thiểu; Hoàn thành đào tạo về công cụ APQP/FMEA/MSA/PPAP/SPC |

**Nguyên tắc áp dụng FMEA** (dựa trên R&D.02.06.07 hiện có):
- Áp dụng PFMEA làm cơ sở, và cũng thực hiện DFMEA khi có đề xuất thay đổi thiết kế nội bộ
- FMEA phải là hành động phòng ngừa "trước khi sự kiện xảy ra" chứ không phải "sau khi sự kiện xảy ra"
- Dựa trên kiến thức tập thể của toàn nhóm, tiến hành theo đồng thuận của nhóm chứ không phải phán đoán cá nhân
- Phân tích khách quan dựa trên lịch sử lỗi trước đây, dữ liệu thống kê và bằng chứng thực tế

---

# 6. Hệ thống quản lý rủi ro vận hành

## 6.1 Quy trình quản lý rủi ro

```
① Xác định rủi ro (Identify)
    │
    ▼
② Phân tích rủi ro (Analyze) ──→ FMEA, Ma trận rủi ro
    │
    ▼
③ Đánh giá rủi ro (Evaluate) ──→ Tính toán RPN/AP, xác định ưu tiên
    │
    ▼
④ Giảm thiểu rủi ro (Treat) ──→ Xây dựng/thực hiện biện pháp giảm thiểu
    │
    ▼
⑤ Giám sát/Xem xét (Monitor) ──→ Xác nhận rủi ro tồn dư, đánh giá lại định kỳ
    │
    ▼
⑥ Ghi chép/Báo cáo (Record) ──→ Cập nhật Sổ đăng ký rủi ro
```

## 6.2 Yếu tố kích hoạt xác định rủi ro

| Yếu tố kích hoạt | Thời điểm | Loại FMEA |
|-----------------|----------|----------|
| Sản phẩm/thiết kế mới | Trước khi xác minh thiết kế | DFMEA |
| Quy trình/dây chuyền mới | Trước khi bắt đầu sản xuất hàng loạt | PFMEA |
| Thay đổi thiết kế (ECN) | Trước khi thực hiện thay đổi | Cập nhật DFMEA |
| Thay đổi quy trình (4M) | Trước khi thực hiện thay đổi | Cập nhật PFMEA |
| Không phù hợp/khiếu nại khách hàng | Ngay khi phát sinh | Cập nhật DFMEA/PFMEA |
| Thay đổi nhà cung cấp | Trước khi phê duyệt thay đổi | Đánh giá rủi ro chuỗi cung ứng |
| Đánh giá lại định kỳ | 1 lần/năm | Xem xét toàn bộ FMEA |

## 6.3 Tiêu chí đánh giá rủi ro

### Tiêu chí Mức độ nghiêm trọng (Severity)

| Cấp độ | Ảnh hưởng | Tiêu chí |
|--------|---------|---------|
| 10 | Nguy hiểm an toàn (không có cảnh báo) | Ảnh hưởng đến an toàn tính mạng, vi phạm quy định, không có cảnh báo trước |
| 9 | Nguy hiểm an toàn (có cảnh báo) | Ảnh hưởng đến an toàn tính mạng, có thể cảnh báo trước |
| 8 | Mất chức năng | Mất hoàn toàn chức năng chính của sản phẩm, không thể vận hành |
| 7 | Giảm chức năng (nghiêm trọng) | Hiệu suất sản phẩm giảm nghiêm trọng, khách hàng rất không hài lòng |
| 6 | Giảm chức năng (trung bình) | Hiệu suất sản phẩm giảm, khách hàng không hài lòng |
| 5 | Giảm chức năng (nhẹ) | Một phần hiệu suất giảm, khách hàng có phần bất tiện |
| 4 | Ảnh hưởng ngoại quan/tiếng ồn | Vấn đề ngoại quan mà đa số khách hàng nhận thấy |
| 3 | Ngoại quan/tiếng ồn (nhẹ) | Vấn đề nhẹ mà một số khách hàng nhận thấy |
| 2 | Hầu như không ảnh hưởng | Vấn đề nhỏ chỉ khách hàng cẩn thận mới nhận thấy |
| 1 | Không ảnh hưởng | Không có ảnh hưởng dù xảy ra hỏng hóc |

### Tiêu chí Tần suất xảy ra (Occurrence)

| Cấp độ | Tần suất xảy ra | Tham chiếu Cpk |
|--------|---------------|---------------|
| 10 | Rất cao (≥ 100/1.000) | < 0,33 |
| 9 | Cao (50/1.000) | ≈ 0,33 |
| 8 | Cao (20/1.000) | ≈ 0,51 |
| 7 | Khá cao (10/1.000) | ≈ 0,67 |
| 6 | Trung bình (5/1.000) | ≈ 0,83 |
| 5 | Trung bình (2/1.000) | ≈ 1,00 |
| 4 | Khá thấp (1/1.000) | ≈ 1,17 |
| 3 | Thấp (0,1/1.000) | ≈ 1,33 |
| 2 | Rất thấp (≤ 0,01/1.000) | ≈ 1,67 |
| 1 | Hầu như không có | ≥ 2,00 |

### Tiêu chí Khả năng phát hiện (Detection)

| Cấp độ | Khả năng phát hiện | Phương pháp kiểm soát |
|--------|------------------|----------------------|
| 10 | Không thể phát hiện | Không có phương pháp kiểm soát, không có phương tiện phát hiện |
| 9 | Hầu như không thể | Chỉ có thể kiểm tra gián tiếp hoặc ngẫu nhiên |
| 8 | Rất khó khăn | Chỉ có thể phát hiện bằng kiểm tra bằng mắt |
| 7 | Khó khăn | Kiểm tra thủ công (thước đo/công cụ) |
| 6 | Khá khó khăn | Đo lường thủ công (đo biến số) |
| 5 | Trung bình | Kiểm soát thống kê như biểu đồ SPC |
| 4 | Khá cao | Kiểm tra tự động + xác nhận thủ công |
| 3 | Cao | Kiểm tra tự động (cảm biến, thị giác máy) |
| 2 | Rất cao | Phát hiện tự động đa lớp + tự động dừng |
| 1 | Gần như chắc chắn | Không thể xảy ra hỏng hóc theo thiết kế (Poka-Yoke) |

---

# 7. Thực hiện FMEA

## 7.1 Loại và áp dụng FMEA

| Loại | Thời điểm áp dụng | Chủ trì | Mục đích |
|------|------------------|---------|---------|
| **DFMEA** | Trước khi xác minh thiết kế (DVP&R) | Trưởng bộ phận Kỹ thuật | Xác định chế độ hỏng hóc thiết kế, đảm bảo tính bền vững thiết kế |
| **PFMEA** | Trước khi bắt đầu sản xuất hàng loạt / Khi thay đổi quy trình | Trưởng bộ phận Sản xuất | Xác định chế độ hỏng hóc quy trình, tối ưu hóa kiểm soát quy trình |
| **FMEA chuỗi cung ứng** | Khi lựa chọn/thay đổi nhà cung cấp | Trưởng bộ phận Mua hàng | Xác định rủi ro cung ứng, đảm bảo phương án thay thế |

## 7.2 Thủ tục thực hiện FMEA

| Bước | Hoạt động | Kết quả |
|------|----------|--------|
| 1 | Thành lập nhóm đa chức năng (CFT) (Thiết kế/Sản xuất/Chất lượng/Mua hàng) | Bảng thành lập nhóm |
| 2 | Xác định phạm vi phân tích (Sản phẩm/Quy trình/Hệ thống) | Tài liệu xác định phạm vi |
| 3 | Xác định chức năng/yêu cầu | Bảng phân tích chức năng |
| 4 | Xác định chế độ hỏng hóc tiềm ẩn | Danh sách chế độ hỏng hóc |
| 5 | Phân tích ảnh hưởng của từng chế độ hỏng hóc → Đánh giá Mức độ nghiêm trọng (S) | Đánh giá S |
| 6 | Xác định nguyên nhân tiềm ẩn → Đánh giá Tần suất xảy ra (O) | Đánh giá O |
| 7 | Xác định phương pháp kiểm soát hiện tại (phòng ngừa/phát hiện) → Đánh giá Khả năng phát hiện (D) | Đánh giá D |
| 8 | Tính RPN hoặc xác định AP (Action Priority) | RPN/AP |
| 9 | Xây dựng biện pháp giảm thiểu theo mức độ ưu tiên hành động | Kế hoạch hành động |
| 10 | Thực hiện biện pháp giảm thiểu và xác nhận hiệu quả | Đánh giá lại S/O/D sau cải tiến |
| 11 | Cập nhật và phê duyệt tài liệu FMEA | FMEA đã cập nhật |

## 7.3 Tiêu chí hành động dựa trên RPN

| Phạm vi RPN | Mức độ rủi ro | Yêu cầu hành động |
|------------|--------------|------------------|
| **Từ 200 trở lên** hoặc S≥9 | **Cao (High)** | **Hành động ngay lập tức** — Xây dựng/thực hiện biện pháp giảm thiểu, không được sản xuất hàng loạt trước khi xác nhận hiệu quả |
| **100~199** | **Trung bình (Medium)** | Cần xây dựng biện pháp giảm thiểu — Thiết lập kế hoạch thực hiện và thời hạn |
| **50~99** | **Thấp (Low)** | Duy trì mức kiểm soát hiện tại — Tiếp tục giám sát, cải tiến nếu cần |
| **1~49** | **Rất thấp** | Chấp nhận được — Xác nhận lại khi xem xét định kỳ |

> **Quan trọng**: Khi Mức độ nghiêm trọng (S) ≥ 9 (liên quan đến an toàn), **bắt buộc phải có hành động** bất kể giá trị RPN.

---

# 8. Giảm thiểu và quản lý rủi ro

## 8.1 Chiến lược giảm thiểu

| Chiến lược | Mô tả | Ví dụ áp dụng |
|-----------|-------|--------------|
| **Tránh (Avoid)** | Loại bỏ nguyên nhân rủi ro | Thay đổi thiết kế nguy hiểm, thay thế vật liệu nguy hiểm |
| **Giảm (Reduce)** | Giảm khả năng xảy ra hoặc ảnh hưởng | Poka-Yoke, kiểm tra tự động, cải tiến quy trình |
| **Chuyển giao (Transfer)** | Chuyển rủi ro cho bên thứ ba | Bảo hiểm, gia công ngoài (nhưng vẫn duy trì trách nhiệm) |
| **Chấp nhận (Accept)** | Chấp nhận rủi ro tồn dư | Đánh giá là rủi ro thấp rồi giám sát |

## 8.2 Sổ đăng ký rủi ro (Risk Register)

Ghi chép và duy trì các thông tin sau trong Sổ đăng ký rủi ro (F-814-01):

| Hạng mục | Nội dung |
|----------|---------|
| ID rủi ro | Số nhận dạng duy nhất |
| Nguồn rủi ro | DFMEA/PFMEA/Chuỗi cung ứng/Khác |
| Mô tả rủi ro | Mô tả chế độ hỏng hóc/tình huống nguy hiểm |
| S / O / D | Mức độ nghiêm trọng, Tần suất xảy ra, Khả năng phát hiện |
| RPN / AP | Mức độ ưu tiên rủi ro |
| Phương pháp kiểm soát hiện tại | Biện pháp phòng ngừa/phát hiện |
| Biện pháp giảm thiểu | Nội dung biện pháp bổ sung, người phụ trách, thời hạn |
| Rủi ro tồn dư | Kết quả đánh giá lại sau biện pháp |
| Trạng thái | Mở / Đang xử lý / Đóng |

## 8.3 Giám sát rủi ro

| Hoạt động | Chu kỳ | Người phụ trách |
|----------|--------|----------------|
| Xem xét Sổ đăng ký rủi ro | 1 lần/quý | QMR |
| Đánh giá lại FMEA định kỳ | 1 lần/năm | Trưởng bộ phận KT/Trưởng bộ phận SX |
| Theo dõi hạng mục rủi ro cao | 1 lần/tháng | Trưởng bộ phận Chất lượng |
| Báo cáo xem xét lãnh đạo | Nửa năm | QMR |

---

# 9. Yêu cầu đặc thù hàng không vũ trụ

## 9.1 Yêu cầu riêng của AS9100D 8.1.2

AS9100D yêu cầu riêng **Quản lý rủi ro vận hành** không có trong ISO 9001:

| Yêu cầu | Phương pháp quản lý |
|---------|-------------------|
| Quản lý rủi ro khi lập kế hoạch thực hiện sản phẩm | Bắt buộc thực hiện FMEA khi bắt đầu sản phẩm/quy trình mới |
| Phân công trách nhiệm quản lý rủi ro | Chỉ định Chủ sở hữu rủi ro (Risk Owner) theo từng quy trình |
| Tiêu chí chấp nhận rủi ro | Lập tài liệu tiêu chí mức độ rủi ro có thể chấp nhận |
| Biện pháp giảm thiểu rủi ro | Bắt buộc xây dựng kế hoạch giảm thiểu đối với rủi ro cao/trung bình |

## 9.2 Rủi ro liên quan đến an toàn

Rủi ro liên quan đến an toàn có Mức độ nghiêm trọng (S) ≥ 9 được quản lý bổ sung liên kết với QP-804 (Quản lý an toàn sản phẩm/dịch vụ):

- Chế độ hỏng hóc liên quan đến an toàn được đánh dấu riêng (Safety Critical)
- Rủi ro an toàn không thể chấp nhận (Accept) — bắt buộc phải tránh hoặc giảm thiểu
- Cần thông báo cho khách hàng/cơ quan quản lý khi thay đổi rủi ro liên quan đến an toàn
- Hồ sơ rủi ro liên quan đến an toàn được lưu trữ trong vòng đời sản phẩm + 15 năm

## 9.3 Rủi ro quy trình đặc biệt

Rủi ro của quy trình đặc biệt (xử lý nhiệt, mạ, hàn, NDT, v.v.):
- Tăng cường quản lý rủi ro vì không thể xác minh hoàn toàn kết quả quy trình bằng kiểm tra sau
- Xác định rủi ro về thông số quy trình, chứng nhận nhân viên, trạng thái thiết bị
- Liên kết với giám sát năng lực quy trình (Cpk)

## 9.4 Rủi ro chuỗi cung ứng

| Loại rủi ro | Hạng mục đánh giá |
|-----------|-----------------|
| Rủi ro chất lượng | Kết quả chất lượng nhà cung cấp, lịch sử không phù hợp, trạng thái chứng nhận |
| Rủi ro tiến độ | Tỷ lệ giao đúng hạn, tính ổn định thời gian thực hiện |
| Rủi ro linh kiện giả | Có mua linh kiện được chứng nhận không, khả năng truy xuất chuỗi cung ứng |
| Rủi ro nguồn cung đơn lẻ | Có đảm bảo nhà cung cấp thay thế không |
| Rủi ro tài chính | Sự ổn định tài chính của nhà cung cấp |

---

# 10. Quản lý hồ sơ

| Loại hồ sơ | Thời gian lưu trữ | Phương pháp quản lý |
|-----------|------------------|---------------------|
| DFMEA | Vòng đời sản phẩm + 10 năm | Đăng ký DMS, quản lý theo sản phẩm |
| PFMEA | Vòng đời sản phẩm + 10 năm | Đăng ký DMS, quản lý theo quy trình |
| Sổ đăng ký rủi ro | Trong thời gian duy trì QMS | Đăng ký DMS, cập nhật thường xuyên |
| Hồ sơ biện pháp giảm thiểu rủi ro | 5 năm | Liên kết Sổ đăng ký rủi ro |
| Đánh giá rủi ro chuỗi cung ứng | Thời gian giao dịch + 3 năm | Liên kết QP-808 |
| Hồ sơ rủi ro liên quan đến an toàn | Vòng đời sản phẩm + 15 năm | Liên kết QP-804 |

---

# 11. Tài liệu và biểu mẫu liên quan

## 11.1 Quy trình liên quan

| Số tài liệu | Tên tài liệu | Liên quan |
|------------|-------------|----------|
| QM-001 | Sổ tay chất lượng | Tài liệu cấp trên (§8.1.2) |
| QP-601 | Quản lý rủi ro/cơ hội | Rủi ro chiến lược (6.1) |
| QP-804 | An toàn sản phẩm/dịch vụ | Liên kết rủi ro an toàn (S≥9) |
| QP-807 | Thiết kế/phát triển | Liên kết DFMEA |
| QP-810 | Quản lý sản xuất/dịch vụ | Liên kết PFMEA |
| QP-808 | Quản lý nhà cung cấp bên ngoài | Liên kết rủi ro chuỗi cung ứng |

## 11.2 Biểu mẫu liên quan

| Số biểu mẫu | Tên biểu mẫu | Mục đích |
|------------|-------------|---------|
| F-802-01 | Bảng tính DFMEA | Ghi chép phân tích DFMEA |
| F-802-02 | Bảng tính PFMEA | Ghi chép phân tích PFMEA |
| F-802-03 | Phiếu đánh giá rủi ro chuỗi cung ứng | Ghi chép đánh giá rủi ro nhà cung cấp |
| F-814-01 | Sổ đăng ký rủi ro | Quản lý tích hợp rủi ro toàn công ty (Dùng chung QP-601) |

---

**Hết tài liệu — QP-802 Rev. 0**
