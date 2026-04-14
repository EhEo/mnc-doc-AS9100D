# Hướng Dẫn Hiệu Chuẩn Thiết Bị Đo Lường
## Calibration Work Instruction for Measuring Equipment

| Mục | Nội dung |
|-----|----------|
| Số tài liệu | WI-805-01 |
| Số hiệu chỉnh | Rev. 0 |
| Ngày ban hành | Tháng 5 năm 2026, ngày ___ |
| Tiêu chuẩn áp dụng | AS9100D Rev D, Điều khoản 7.1.5 (Nguồn lực theo dõi và đo lường) |
| Cấp độ bảo mật | Bảo mật nội bộ (Confidential) |
| Tài liệu cấp trên | QP-702 Quy trình Quản lý Thiết bị đo lường/Dụng cụ đo |

---

## Phê duyệt

| Phân loại | Chức vụ | Họ tên | Chữ ký | Ngày |
|-----------|---------|--------|--------|------|
| Soạn thảo | Thành viên Phòng Chất lượng | | | |
| Xem xét | Trưởng Phòng Chất lượng | | | |
| Phê duyệt | Đại diện Chất lượng (QMR) | | | |

---

## Lịch sử hiệu chỉnh

| Số hiệu chỉnh | Ngày hiệu chỉnh | Nội dung hiệu chỉnh | Người hiệu chỉnh |
|---------------|-----------------|---------------------|-----------------|
| Rev. 0 | 2026.05.__ | Ban hành lần đầu | |

---

## Mục lục

1. [Mục đích](#1-mục-đích)
2. [Phạm vi áp dụng](#2-phạm-vi-áp-dụng)
3. [Tài liệu tham chiếu](#3-tài-liệu-tham-chiếu)
4. [Định nghĩa thuật ngữ](#4-định-nghĩa-thuật-ngữ)
5. [Bảng chu kỳ hiệu chuẩn theo từng thiết bị](#5-bảng-chu-kỳ-hiệu-chuẩn-theo-từng-thiết-bị)
6. [Quy trình thực hiện hiệu chuẩn](#6-quy-trình-thực-hiện-hiệu-chuẩn)
7. [Quản lý nhãn trạng thái hiệu chuẩn](#7-quản-lý-nhãn-trạng-thái-hiệu-chuẩn)
8. [Phương pháp ghi chép lịch sử hiệu chuẩn](#8-phương-pháp-ghi-chép-lịch-sử-hiệu-chuẩn)
9. [Xử lý thiết bị hết hạn hiệu chuẩn](#9-xử-lý-thiết-bị-hết-hạn-hiệu-chuẩn)
10. [Biện pháp xử lý khi phát hiện OOT](#10-biện-pháp-xử-lý-khi-phát-hiện-oot)
11. [Lưu ý quan trọng](#11-lưu-ý-quan-trọng)

---

## 1. Mục đích

Hướng dẫn này quy định cụ thể phương pháp thực hiện hiệu chuẩn thiết bị đo lường và dụng cụ đo sử dụng tại M&C (M&C Electronics VINA) nhằm đảm bảo độ tin cậy của kết quả đo và đáp ứng yêu cầu AS9100D 7.1.5.

## 2. Phạm vi áp dụng

- Hướng dẫn này áp dụng cho tất cả thiết bị đo lường và dụng cụ đo ảnh hưởng đến chất lượng.
- Bao gồm các thiết bị sử dụng trong sản xuất, kiểm tra, thử nghiệm.
- Các thiết bị được phân loại "Chỉ tham khảo (Reference Only)" được miễn trừ khỏi đối tượng hiệu chuẩn, nhưng phải dán nhãn nhận dạng.

## 3. Tài liệu tham chiếu

| Số tài liệu | Tên tài liệu |
|-------------|--------------|
| QP-702 | Quy trình Quản lý Thiết bị đo lường/Dụng cụ đo |
| QF-710-01 | Sổ quản lý lịch sử hiệu chuẩn |
| ISO 10012 | Hệ thống quản lý đo lường — Yêu cầu đối với quá trình đo lường và thiết bị đo lường |
| ISO/IEC 17025 | Yêu cầu chung về năng lực của phòng thử nghiệm và hiệu chuẩn |
| ANSI/NCSL Z540.3 | Yêu cầu đối với tổ chức hiệu chuẩn |

## 4. Định nghĩa thuật ngữ

| Thuật ngữ | Định nghĩa |
|-----------|------------|
| Hiệu chuẩn (Calibration) | Hành động xác nhận và ghi lại độ lệch giữa giá trị hiển thị của thiết bị đo và giá trị chuẩn |
| OOT (Out of Tolerance) | Trạng thái kết quả hiệu chuẩn vượt quá dung sai cho phép |
| Truy xuất nguồn gốc (Traceability) | Chuỗi hiệu chuẩn không bị gián đoạn kết nối với tiêu chuẩn quốc gia/quốc tế |
| Hiệu chuẩn nội bộ | Hiệu chuẩn thực hiện nội bộ sử dụng thiết bị chuẩn của công ty |
| Hiệu chuẩn bên ngoài | Hiệu chuẩn ủy thác cho tổ chức hiệu chuẩn bên ngoài được công nhận ISO/IEC 17025 |
| MPE | Sai số cho phép tối đa (Maximum Permissible Error) |

## 5. Bảng chu kỳ hiệu chuẩn theo từng thiết bị

| STT | Tên thiết bị | Phạm vi đo | Chu kỳ hiệu chuẩn | Loại hiệu chuẩn | Dung sai cho phép (MPE) | Ghi chú |
|-----|-------------|-----------|-------------------|-----------------|------------------------|---------|
| 1 | Thước cặp (kỹ thuật số) | 0~150mm | 12 tháng | Nội bộ | ±0.02mm | |
| 2 | Thước cặp (kỹ thuật số) | 0~300mm | 12 tháng | Nội bộ | ±0.03mm | |
| 3 | Panme ngoài | 0~25mm | 12 tháng | Nội bộ | ±0.002mm | |
| 4 | Panme ngoài | 25~50mm | 12 tháng | Nội bộ | ±0.002mm | |
| 5 | Thước đo chiều cao (kỹ thuật số) | 0~300mm | 12 tháng | Nội bộ | ±0.03mm | |
| 6 | Thước đo chiều cao (kỹ thuật số) | 0~600mm | 12 tháng | Nội bộ | ±0.05mm | |
| 7 | CMM (Máy đo tọa độ 3 chiều) | Tất cả trục | 12 tháng | Bên ngoài | Theo thông số kỹ thuật của nhà sản xuất | Bắt buộc 1 lần/năm |
| 8 | Cân điện tử (độ chính xác cao) | 0~220g | 12 tháng | Bên ngoài | ±0.001g | |
| 9 | Cân điện tử (công nghiệp) | 0~30kg | 12 tháng | Bên ngoài | ±0.5g | |
| 10 | Cờ lê lực | 10~200 Nm | 12 tháng | Bên ngoài | ±4% | |
| 11 | Bộ căn mẫu (Grade 1) | 1.0~100mm | 24 tháng | Bên ngoài | ISO 3650 Grade 1 | Thiết bị chuẩn |
| 12 | Bộ dưỡng trụ | 0.5~10mm | 24 tháng | Nội bộ | ±0.001mm | |
| 13 | Dưỡng vòng | Theo thông số đặt hàng | 24 tháng | Bên ngoài | ±0.001mm | |
| 14 | Máy đo độ cứng (Rockwell) | HRC 20~70 | 12 tháng | Bên ngoài | ±1 HRC | |
| 15 | Máy đo nhiệt độ/độ ẩm | -20~60℃ | 12 tháng | Bên ngoài | ±0.5℃ | |

> **Lưu ý**: Chu kỳ hiệu chuẩn có thể được điều chỉnh dưới sự phê duyệt của Trưởng Phòng Chất lượng tùy theo tần suất sử dụng thiết bị, điều kiện môi trường và lịch sử hiệu chuẩn trước đây.

## 6. Quy trình thực hiện hiệu chuẩn

### 6.1 Tiêu chí phân biệt hiệu chuẩn nội bộ vs bên ngoài

| Phân loại | Hiệu chuẩn nội bộ | Hiệu chuẩn bên ngoài |
|-----------|-------------------|---------------------|
| Điều kiện | Khi có thiết bị chuẩn và năng lực hiệu chuẩn nội bộ | Khi không có thiết bị chuẩn hoặc thiết bị độ chính xác cao |
| Thiết bị chuẩn | Sử dụng thiết bị chuẩn đã được hiệu chuẩn tại tổ chức được công nhận ISO/IEC 17025 | Không áp dụng |
| Nhân viên hiệu chuẩn | Người đã hoàn thành đào tạo hiệu chuẩn nội bộ (ít nhất 1 lần/năm) | Tổ chức hiệu chuẩn được công nhận ISO/IEC 17025 |
| Thiết bị đối tượng | Thước cặp, panme, thước đo chiều cao, dưỡng trụ, v.v. | CMM, cân, cờ lê lực, máy đo độ cứng, bộ căn mẫu, v.v. |
| Chứng chỉ | Phát hành chứng chỉ hiệu chuẩn nội bộ | Nhận chứng chỉ từ tổ chức hiệu chuẩn |

### 6.2 Các điểm kiểm tra trước hiệu chuẩn

1. Xác nhận **số hiệu quản lý** của thiết bị cần hiệu chuẩn
2. Kiểm tra **tình trạng bên ngoài** của thiết bị (hư hại, biến dạng, ô nhiễm)
3. Xác nhận **lịch sử hiệu chuẩn** trước đó và **ngày hết hạn hiệu chuẩn**
4. Xác nhận **thời hạn hiệu lực hiệu chuẩn của thiết bị chuẩn** sử dụng cho hiệu chuẩn
5. Xác nhận điều kiện môi trường hiệu chuẩn:
   - Nhiệt độ: 20±2℃ (khi đo chính xác)
   - Độ ẩm: 45~75% RH
   - Loại bỏ các yếu tố can thiệp bên ngoài như rung động, bụi bẩn
6. **Đặt thiết bị trong môi trường hiệu chuẩn ít nhất 2 giờ trước** để ổn định nhiệt độ

### 6.3 Thực hiện hiệu chuẩn — Hiệu chuẩn nội bộ

#### 6.3.1 Hiệu chuẩn thước cặp/panme

1. Kiểm tra điểm không: Xác nhận trạng thái điểm không sau khi áp chặt bề mặt đo
2. Sử dụng bộ căn mẫu để xác nhận độ lệch tại các điểm đo sau:
   - Thước cặp 0~150mm: 10mm, 50mm, 100mm, 150mm (tối thiểu 4 điểm)
   - Panme 0~25mm: 5mm, 10mm, 15mm, 20mm, 25mm (5 điểm)
3. **Đo lặp lại 3 lần** tại từng điểm đo và tính giá trị trung bình
4. Phán quyết xem độ lệch có trong phạm vi MPE không
5. Ghi kết quả đo vào chứng chỉ hiệu chuẩn nội bộ

#### 6.3.2 Hiệu chuẩn thước đo chiều cao

1. Đặt thiết bị lên bàn máp và thiết lập điểm không
2. Xác nhận các điểm đo sau bằng cách kết hợp căn mẫu:
   - 0~300mm: 50mm, 100mm, 150mm, 200mm, 300mm (5 điểm)
3. **Đo lặp lại 3 lần** tại từng điểm đo
4. Phán quyết xem độ lệch có trong phạm vi MPE không

### 6.4 Thực hiện hiệu chuẩn — Hiệu chuẩn bên ngoài

1. Lập danh sách thiết bị cần hiệu chuẩn và **xin phê duyệt của Trưởng Phòng Chất lượng**
2. Ủy thác hiệu chuẩn cho tổ chức hiệu chuẩn được công nhận ISO/IEC 17025
   - Xác nhận thời hạn hiệu lực của giấy chứng nhận tổ chức hiệu chuẩn (KOLAS/ILAC, v.v.)
3. Khi gửi thiết bị đi, thực hiện **đóng gói chống va đập**
4. Sau khi nhận chứng chỉ hiệu chuẩn từ tổ chức hiệu chuẩn, kiểm tra nội dung

### 6.5 Các điểm kiểm tra chứng chỉ hiệu chuẩn

Khi nhận chứng chỉ hiệu chuẩn bên ngoài, phải kiểm tra bắt buộc các hạng mục sau:

- [ ] Tên tổ chức hiệu chuẩn và số chứng nhận
- [ ] Thông tin thiết bị hiệu chuẩn (model, số serial)
- [ ] Ngày hiệu chuẩn và thời hạn hiệu lực
- [ ] Thông tin thiết bị chuẩn sử dụng cho hiệu chuẩn và truy xuất nguồn gốc
- [ ] Ghi độ không chắc chắn đo lường (Uncertainty)
- [ ] Kết luận đạt/không đạt (khi áp dụng tiêu chí Pass/Fail)
- [ ] Chữ ký người thực hiện hiệu chuẩn

## 7. Quản lý nhãn trạng thái hiệu chuẩn

### 7.1 Loại nhãn và màu sắc

| Màu nhãn | Trạng thái | Ý nghĩa | Điều kiện sử dụng |
|----------|-----------|---------|------------------|
| **Xanh lá** | Đạt (CALIBRATED) | Hoàn thành hiệu chuẩn, có thể sử dụng bình thường | Trong phạm vi MPE |
| **Vàng** | Sử dụng hạn chế (LIMITED USE) | Chỉ được sử dụng trong phạm vi/điều kiện nhất định | Một số điểm đo OOT |
| **Đỏ** | Không đạt (DO NOT USE) | Cấm sử dụng, cần sửa chữa/tái hiệu chuẩn/tiêu hủy | Toàn bộ OOT hoặc hư hại |

### 7.2 Thông tin ghi trên nhãn

Tất cả nhãn hiệu chuẩn phải ghi các thông tin sau:

1. Số hiệu quản lý thiết bị
2. Ngày hiệu chuẩn
3. Ngày hiệu chuẩn tiếp theo theo kế hoạch
4. Người thực hiện hiệu chuẩn (chữ ký hoặc chữ viết tắt)
5. Đối với nhãn sử dụng hạn chế: ghi rõ phạm vi được phép sử dụng

### 7.3 Vị trí dán nhãn

- Dán ở **vị trí dễ thấy** trên thân thiết bị
- Cấm dán chồng lên nhãn cũ (phải bóc nhãn cũ trước khi dán)
- Đối với thiết bị nhỏ khó dán nhãn, dán lên **hộp bảo quản**

## 8. Phương pháp ghi chép lịch sử hiệu chuẩn

### 8.1 Biểu mẫu ghi chép

Lịch sử hiệu chuẩn được ghi vào **QF-710-01 Sổ quản lý lịch sử hiệu chuẩn**.

### 8.2 Các hạng mục ghi chép

| STT | Hạng mục ghi chép | Nội dung |
|-----|------------------|----------|
| 1 | Số hiệu quản lý thiết bị | Số duy nhất theo hệ thống quản lý tài sản |
| 2 | Tên thiết bị/Model | Tên và số model của thiết bị |
| 3 | Số serial | Số duy nhất do nhà sản xuất cấp |
| 4 | Bộ phận sử dụng | Bộ phận sở hữu/sử dụng thiết bị |
| 5 | Ngày hiệu chuẩn | Ngày thực hiện hiệu chuẩn |
| 6 | Ngày hiệu chuẩn tiếp theo | Ngày hiệu chuẩn tiếp theo theo chu kỳ |
| 7 | Loại hiệu chuẩn | Nội bộ/Bên ngoài |
| 8 | Tên tổ chức hiệu chuẩn | Tên tổ chức khi hiệu chuẩn bên ngoài |
| 9 | Số chứng chỉ hiệu chuẩn | Số duy nhất của chứng chỉ |
| 10 | Kết quả phán quyết | Đạt/Hạn chế/Không đạt |
| 11 | Ghi chú | Chi tiết OOT, lịch sử sửa chữa, v.v. |

### 8.3 Lưu giữ hồ sơ

- Sổ quản lý lịch sử hiệu chuẩn: Lưu file điện tử (Excel) + bản in giấy
- Chứng chỉ hiệu chuẩn gốc: Lưu trong file (lưu giữ tối thiểu **10 năm**)
- Hồ sơ hiệu chuẩn liên quan đến sản phẩm hàng không vũ trụ: Lưu giữ **tuổi thọ sản phẩm + 5 năm**

## 9. Xử lý thiết bị hết hạn hiệu chuẩn

### 9.1 Cách ly ngay lập tức

1. Khi xác nhận thiết bị hết hạn hiệu chuẩn, **dừng sử dụng ngay lập tức**.
2. Dán nhãn đỏ ("DO NOT USE").
3. Chuyển thiết bị đến **khu vực bảo quản cách ly**.
4. Báo cáo ngay cho Phòng Chất lượng.

### 9.2 Điều tra truy hồi (Recall Investigation)

1. Xác định các sản phẩm đã được đo bằng thiết bị đó **sau ngày hiệu chuẩn đạt lần cuối cùng**.
2. Xác nhận **số lô** và **tình trạng xuất hàng cho khách hàng** của các sản phẩm có thể bị ảnh hưởng.
3. Ghi lại kết quả điều tra truy hồi và khi cần thiết thực hiện các biện pháp sau:
   - Thực hiện tái kiểm tra
   - Thông báo cho khách hàng (nếu đã xuất hàng)
   - Phát hành báo cáo sự không phù hợp (NCR)
4. **Báo cáo kết quả điều tra truy hồi cho Trưởng Phòng Chất lượng**.

### 9.3 Biện pháp xử lý sau

- Có thể hiệu chuẩn: Tái sử dụng sau khi hiệu chuẩn đạt
- Cần sửa chữa: Tái hiệu chuẩn sau khi sửa chữa
- Tiêu hủy: Tiêu hủy khi kết luận không thể sửa chữa (xóa khỏi sổ tài sản)

## 10. Biện pháp xử lý khi phát hiện OOT

### 10.1 Phán quyết OOT

Phán quyết OOT khi giá trị đo từ kết quả hiệu chuẩn **vượt quá MPE**.

### 10.2 Quy trình biện pháp xử lý ngay lập tức

```
Phán quyết OOT
  │
  ├─ Bước 1: Dừng sử dụng thiết bị ngay → Dán nhãn đỏ
  │
  ├─ Bước 2: Báo cáo cho Trưởng Phòng Chất lượng
  │
  ├─ Bước 3: Thực hiện điều tra truy hồi
  │     ├─ Xác định sản phẩm đo trong giai đoạn từ ngày hiệu chuẩn đạt cuối ~ ngày phán quyết OOT
  │     ├─ Xác định phạm vi ảnh hưởng (lô, khách hàng, số lượng)
  │     └─ Quyết định có cần tái kiểm tra hoặc thông báo khách hàng không
  │
  ├─ Bước 4: Quyết định xử lý thiết bị
  │     ├─ Điều chỉnh (Adjustment) và tái hiệu chuẩn → Tái sử dụng khi đạt
  │     ├─ Ủy thác sửa chữa → Tái hiệu chuẩn sau sửa chữa
  │     └─ Quyết định tiêu hủy → Xóa khỏi sổ tài sản
  │
  └─ Bước 5: Phát hành báo cáo hành động khắc phục (CAR) khi cần thiết
```

### 10.3 Ghi chép

- Ghi lại số hiệu quản lý thiết bị OOT, ngày hiệu chuẩn, lượng độ lệch OOT
- Ghi lại kết quả điều tra truy hồi và chi tiết biện pháp xử lý
- Ghi các hồ sơ liên quan vào phần ghi chú của QF-710-01

## 11. Lưu ý quan trọng

1. **Tuyệt đối không sử dụng thiết bị đã hết hạn hiệu chuẩn.** Phải kiểm tra thời hạn hiệu lực của nhãn hiệu chuẩn trước khi sử dụng.
2. Sau khi sử dụng, bảo quản thiết bị đo lường tại **nơi bảo quản được chỉ định** và bảo vệ khỏi va đập/ô nhiễm/độ ẩm.
3. Thiết bị chuẩn (bộ căn mẫu, v.v.) sử dụng cho hiệu chuẩn nội bộ phải chỉ sử dụng loại đã được **hiệu chuẩn bởi tổ chức được công nhận bên ngoài**.
4. Kết quả hiệu chuẩn không tuân thủ điều kiện môi trường hiệu chuẩn (nhiệt độ, độ ẩm) được xử lý là **vô hiệu**.
5. Thiết bị có nhãn hiệu chuẩn bị hỏng hoặc mất, **dừng sử dụng** và báo cáo Phòng Chất lượng.
6. Khi pin thiết bị kỹ thuật số yếu có thể ảnh hưởng đến kết quả hiệu chuẩn, nên **kiểm tra tình trạng pin** trước khi hiệu chuẩn.
7. Tất cả hồ sơ hiệu chuẩn phải đảm bảo **truy xuất nguồn gốc (Traceability)** theo yêu cầu AS9100D.
8. Khi thay đổi chu kỳ hiệu chuẩn, phải **xin phê duyệt của Trưởng Phòng Chất lượng** và ghi lại lý do thay đổi.
9. Khi lựa chọn tổ chức hiệu chuẩn bên ngoài, phải **xác nhận bắt buộc việc có công nhận ISO/IEC 17025 không**.
10. Thiết bị đo lường sử dụng cho sản phẩm hàng không vũ trụ yêu cầu **quản lý nghiêm ngặt hơn** so với sản phẩm thông thường, do đó vận hành sổ quản lý riêng biệt.

---

| Kết thúc tài liệu | WI-805-01 Rev. 0 |
|-------------------|------------------|
