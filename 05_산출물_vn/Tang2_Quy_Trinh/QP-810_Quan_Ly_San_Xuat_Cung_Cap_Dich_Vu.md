# QP-810 Quản Lý Sản Xuất và Cung Cấp Dịch Vụ

**Mã tài liệu**: QP-810  
**Phiên bản**: Rev. 0  
**Ngày ban hành**: Tháng 4 năm 2026  
**Bộ phận phụ trách**: Bộ phận Sản xuất / Bộ phận Chất lượng  
**Điều khoản AS9100D**: 8.5.1

---

## 1. Mục Đích

Quy trình này thiết lập các điều kiện kiểm soát cần thiết để thực hiện sản xuất và cung cấp dịch vụ một cách nhất quán, nhằm đảm bảo sản phẩm đáp ứng tất cả các yêu cầu đã quy định (yêu cầu khách hàng, yêu cầu pháp lý, yêu cầu tiêu chuẩn AS9100D), và xác định các biện pháp phòng ngừa lỗi do con người để giảm thiểu rủi ro trong sản xuất hàng không vũ trụ.

---

## 2. Phạm Vi Áp Dụng

Quy trình này áp dụng cho tất cả các hoạt động sản xuất và cung cấp dịch vụ của M&C, bao gồm:

- Gia công linh kiện / cụm lắp ráp
- Quá trình đặc biệt (xử lý nhiệt, mạ điện, hàn, NDT, v.v.)
- Kiểm tra và thử nghiệm
- Đóng gói và giao hàng

---

## 3. Tài Liệu Tham Chiếu

| Mã tài liệu | Tên tài liệu |
|-------------|--------------|
| AS9100D | Hệ thống quản lý chất lượng hàng không vũ trụ – Điều 8.5.1 |
| QP-802 | Quản lý rủi ro / FMEA |
| QP-812 | Quản lý nhận dạng và truy xuất nguồn gốc |
| QP-814 | Quản lý bảo quản sản phẩm |
| QP-817 | Quản lý kiểm tra cuối / xuất xưởng |
| QP-819 | Phòng ngừa FOD |
| WI-810-xx | Hướng dẫn công việc từng công đoạn |
| F-810-01 | Lệnh sản xuất (Work Order) |
| F-810-02 | Nhật ký quá trình đặc biệt |
| F-810-03 | Phiếu kiểm soát SPC |
| F-810-04 | Báo cáo thay đổi 4M |
| F-810-05 | Hồ sơ phòng ngừa FOD |

---

## 4. Định Nghĩa và Thuật Ngữ

| Thuật ngữ | Định nghĩa |
|-----------|------------|
| **Quá trình đặc biệt** | Quá trình mà kết quả không thể xác minh đầy đủ bằng kiểm tra sau đó; cần quản lý bằng phương pháp xác nhận hợp lệ (ví dụ: xử lý nhiệt, mạ điện, hàn, NDT) |
| **KC (Key Characteristic – Đặc tính trọng yếu)** | Đặc tính của vật liệu, linh kiện hoặc hệ thống mà sự biến động có thể ảnh hưởng đến an toàn, sự phù hợp với quy định, hiệu năng, tổng hợp hoặc chức năng sản phẩm |
| **SPC (Statistical Process Control)** | Kiểm soát quá trình thống kê |
| **Cpk** | Chỉ số năng lực quá trình (xem xét cả giá trị trung bình và độ biến động) |
| **4M** | Biến đổi liên quan đến Man (Con người) / Machine (Máy móc) / Material (Vật liệu) / Method (Phương pháp) |
| **Poka-Yoke** | Thiết bị hoặc phương pháp phòng ngừa lỗi; chống nhầm lẫn |
| **FOD (Foreign Object Damage)** | Thiệt hại do vật thể lạ |
| **PFMEA** | Phân tích Hình thức Sai lỗi và Tác động Quá trình (Process FMEA) |
| **WI (Work Instruction)** | Hướng dẫn công việc |

---

## 5. Trách Nhiệm

| Vai trò | Trách nhiệm |
|---------|-------------|
| **Trưởng bộ phận Sản xuất** | Lập lịch sản xuất, phân công nhân sự, đảm bảo điều kiện kiểm soát |
| **Trưởng bộ phận Chất lượng** | Giám sát chất lượng trong quá trình sản xuất, quản lý hồ sơ kiểm tra |
| **Kỹ sư Quy trình** | Chuẩn bị và cập nhật hướng dẫn công việc (WI), quản lý thay đổi 4M |
| **Nhân viên sản xuất** | Thực hiện theo WI đã phê duyệt, báo cáo bất thường |
| **QMR** | Phê duyệt xác nhận hợp lệ quá trình đặc biệt, phê duyệt thay đổi 4M ảnh hưởng đến KC |

---

## 6. Luồng Thực Hiện Sản Xuất

```
Nhận vật tư (IQC – QP-808)
    ↓
Xuất vật tư (nhận dạng lô – QP-812)
    ↓
Gia công / Lắp ráp
(theo WI – điều kiện kiểm soát 8.5.1)
    ↓
Quá trình đặc biệt
(nhật ký thông số – F-810-02)
    ↓
Kiểm tra trong quá trình (IPQC)
    ↓
Kiểm tra cuối / xuất xưởng (QP-817)
    ↓
Đóng gói và giao hàng (QP-814)
```

---

## 7. Điều Kiện Kiểm Soát (AS9100D 8.5.1)

### 7.1 Thông Tin Tài Liệu

Tất cả các công đoạn sản xuất phải được thực hiện dựa trên tài liệu đã được phê duyệt. Các tài liệu cần thiết bao gồm:

| Tài liệu | Nội dung |
|----------|----------|
| **Bản vẽ kỹ thuật** | Kích thước, dung sai, vật liệu, yêu cầu bề mặt |
| **Bộ tài liệu sản xuất** | Danh sách quá trình, thứ tự công đoạn |
| **WI (Hướng dẫn công việc)** | Hướng dẫn từng bước theo từng công đoạn |
| **Tiêu chuẩn kiểm tra** | Tiêu chí chấp nhận / từ chối |
| **Kế hoạch kiểm soát** | Điểm kiểm tra KC, tần suất, phương pháp |

- **Quản lý phiên bản**: Chỉ sử dụng phiên bản mới nhất đã được phê duyệt; khi bản mới được ban hành, bản cũ phải được thu hồi và tiêu hủy ngay lập tức.
- **Vị trí tài liệu**: Hướng dẫn công việc (WI) phải được đặt tại vị trí làm việc để dễ tra cứu.

### 7.2 Nguồn Lực Giám Sát và Đo Lường

- Các thiết bị đo lường cần thiết phải được hiệu chuẩn theo QP-901.
- Thiết bị đo lường chưa được hiệu chuẩn hoặc đã hết hạn hiệu chuẩn không được sử dụng.
- Điều kiện môi trường (nhiệt độ, độ ẩm, v.v.) phải được duy trì trong phạm vi quy định khi chúng có thể ảnh hưởng đến chất lượng sản phẩm.

### 7.3 Hoạt Động Giám Sát và Đo Lường

- Các điểm kiểm tra trong quá trình phải được xác định tại kế hoạch kiểm soát và WI.
- Kiểm tra KC phải được thực hiện theo kế hoạch và kết quả phải được ghi lại.
- Phiếu kiểm soát SPC (F-810-03) phải được duy trì đối với KC và KC liên quan đến an toàn.

### 7.4 Cơ Sở Hạ Tầng

- Máy móc và thiết bị phải được bảo trì theo lịch bảo trì phòng ngừa.
- Cơ sở sản xuất phải có điều kiện ánh sáng, không gian và an toàn phù hợp.
- Vùng lưu trữ cần được phân biệt rõ ràng để ngăn sự lẫn lộn giữa sản phẩm phù hợp và không phù hợp.

### 7.5 Nhân Sự Đủ Năng Lực

- Chỉ nhân viên đã được đào tạo và chứng nhận mới được phép thực hiện sản xuất.
- Quá trình đặc biệt phải do nhân viên đã được đào tạo và chứng nhận đặc biệt thực hiện.
- Hồ sơ đào tạo phải được duy trì và xem xét thường xuyên.

### 7.6 Xác Nhận Hợp Lệ Quá Trình Đặc Biệt

→ Xem Mục 9 (Quản lý Quá trình Đặc biệt)

### 7.7 Phòng Ngừa Lỗi Do Con Người

→ Xem Mục 8 (Phòng ngừa Lỗi do Con người)

### 7.8 Tiêu Chí Phát Hành, Giao Hàng và Sau Giao Hàng

- Sản phẩm chỉ được phát hành sau khi vượt qua kiểm tra cuối (QP-817).
- Hồ sơ kiểm tra phải được ký xác nhận bởi người kiểm tra được ủy quyền.
- Các hoạt động sau giao hàng được quản lý theo QP-815.

---

## 8. Phòng Ngừa Lỗi Do Con Người

### 8.1 Nguyên Tắc Chung

Trong sản xuất hàng không vũ trụ, lỗi do con người có thể dẫn đến hậu quả nghiêm trọng về an toàn. Do đó, M&C áp dụng hệ thống phòng ngừa lỗi nhiều lớp.

### 8.2 Phương Pháp Phòng Ngừa Lỗi

| Phương pháp | Mô tả | Ví dụ áp dụng |
|-------------|-------|---------------|
| **Poka-Yoke** | Cơ chế vật lý ngăn chặn lỗi hoặc phát hiện ngay khi có lỗi | Chốt định vị, hướng dẫn lắp ráp một chiều |
| **Danh sách kiểm tra (Checklist)** | Xác minh từng bước theo thứ tự | Checklist thiết lập máy, checklist kiểm tra trước khi xuất xưởng |
| **Quản lý trực quan** | Màu sắc, nhãn, biển hiệu giúp nhận biết trạng thái ngay lập tức | Phân vùng màu cho sản phẩm phù hợp/không phù hợp, nhãn thay đổi phiên bản |
| **Phát hiện tự động** | Cảm biến, camera, thiết bị tự động phát hiện lỗi | Hệ thống kiểm tra chiều cao tự động, phát hiện bằng mã vạch |
| **Xác minh kép (Dual Verification)** | Một nhân viên thực hiện, nhân viên khác xác minh độc lập | Bắt buộc áp dụng cho KC liên quan đến an toàn và quá trình quan trọng |

### 8.3 Quản Lý Lỗi Do Con Người

- Khi xảy ra lỗi do con người, nguyên nhân gốc rễ phải được phân tích (5 Whys, Fishbone, v.v.).
- Kết quả phân tích → Cập nhật PFMEA → Cải tiến biện pháp phòng ngừa.
- Xu hướng lỗi do con người phải được xem xét định kỳ (hàng tháng hoặc hàng quý).

---

## 9. Quản Lý Quá Trình Đặc Biệt

### 9.1 Phạm Vi Quá Trình Đặc Biệt

| Loại quá trình đặc biệt | Ví dụ |
|--------------------------|-------|
| Xử lý nhiệt | Tôi, ram, ủ, thấm carbon |
| Xử lý bề mặt / Mạ điện | Mạ niken, mạ crôm, anod hóa, phủ hóa học |
| Hàn | Hàn điện, hàn TIG, hàn MIG, hàn brazing |
| NDT (Kiểm tra không phá hủy) | Kiểm tra tia X, siêu âm, từ tính, thẩm thấu thuốc nhuộm |
| Dán kết cấu / Bịt kín | Dán kết cấu, bịt kín chống ẩm |
| Phủ sơn | Sơn bảo vệ, sơn chống rỉ |

### 9.2 Quy Trình Xác Nhận Hợp Lệ Quá Trình Đặc Biệt (7 bước)

```
Bước 1: Xác định quá trình đặc biệt
(Xem xét bản vẽ, đặc tính kỹ thuật, yêu cầu khách hàng)
    ↓
Bước 2: Xác định tiêu chuẩn xác nhận hợp lệ
(Thông số kỹ thuật, tiêu chí chấp nhận)
    ↓
Bước 3: Xác nhận năng lực thiết bị / nhân sự
(Hiệu chuẩn thiết bị, chứng nhận nhân viên)
    ↓
Bước 4: Thực hiện chạy thử
(Theo thông số đã định nghĩa)
    ↓
Bước 5: Đánh giá kết quả
(So sánh với tiêu chí chấp nhận)
    ↓
Bước 6: Tái xác nhận hợp lệ khi cần
(Khi có thay đổi 4M hoặc theo định kỳ)
    ↓
Bước 7: Phê duyệt QMR và lập hồ sơ
(Ghi lại thông số xác nhận hợp lệ, điều kiện, kết quả)
```

### 9.3 Kiểm Soát Thông Số Quá Trình

Thông số quá trình đặc biệt (nhiệt độ, thời gian, dòng điện, áp suất, v.v.) phải:
- Được xác định và ghi lại trong WI
- Được giám sát liên tục trong quá trình thực hiện
- Được ghi lại vào Nhật ký quá trình đặc biệt (F-810-02)
- Được lưu trữ cho mỗi lô sản xuất

### 9.4 Nhà Cung Cấp Quá Trình Đặc Biệt Bên Ngoài

- Ưu tiên lựa chọn nhà cung cấp có chứng nhận NADCAP.
- Phải được đăng ký trong ASL và được đánh giá theo QP-808 / QP-809.
- Các yêu cầu cụ thể (thông số, hồ sơ, truy xuất) phải được chỉ định rõ ràng trong đơn đặt hàng (PO).

---

## 10. Kiểm Soát Năng Lực Quá Trình (SPC)

### 10.1 Đối Tượng Áp Dụng SPC

SPC bắt buộc áp dụng cho:
- Tất cả KC (Đặc tính trọng yếu)
- KC liên quan đến an toàn

### 10.2 Mục Tiêu Chỉ Số Năng Lực Quá Trình (Cpk)

| Loại đặc tính | Mục tiêu Cpk | Hành động khi không đạt |
|---------------|--------------|-------------------------|
| KC thông thường | ≥ 1.33 | Phân tích nguyên nhân → Cải tiến quá trình |
| KC liên quan đến an toàn | ≥ 1.67 | Dừng sản xuất → Phân tích → Phê duyệt QMR trước khi tiếp tục |

### 10.3 Quy Trình Giám Sát SPC

1. Thu thập dữ liệu đo lường KC theo kế hoạch lấy mẫu
2. Vẽ biểu đồ kiểm soát (X-bar R, X-bar S hoặc I-MR)
3. Tính toán Cpk định kỳ (hàng tuần / hàng tháng)
4. Khi Cpk < mục tiêu hoặc có dấu hiệu bất thường → Thông báo ngay cho Kỹ sư Quy trình và Trưởng bộ phận Chất lượng
5. Ghi lại vào Phiếu kiểm soát SPC (F-810-03)

---

## 11. Quản Lý Thay Đổi 4M

### 11.1 Phạm Vi Thay Đổi 4M

| Loại 4M | Ví dụ thay đổi |
|---------|----------------|
| **Man (Con người)** | Thay đổi nhân viên, thay đổi phân công công đoạn quan trọng |
| **Machine (Máy móc)** | Thay thế thiết bị, thay đổi cài đặt máy |
| **Material (Vật liệu)** | Thay đổi nhà cung cấp vật liệu, thay đổi thông số vật liệu |
| **Method (Phương pháp)** | Thay đổi quy trình, thay đổi WI |

### 11.2 Quy Trình Xử Lý Thay Đổi 4M

```
Phát hiện nhu cầu thay đổi 4M
    ↓
Lập Báo cáo thay đổi 4M (F-810-04)
    ↓
Đánh giá tác động (PFMEA → Cập nhật nếu cần)
    ↓
Xác nhận phê duyệt của khách hàng có bắt buộc không?
    ├─ Có → Gửi thông báo thay đổi kỹ thuật (ECN) → Chờ phê duyệt
    └─ Không → Phê duyệt nội bộ
    ↓
Kiểm tra FAI có cần tái thực hiện không?
(Thay đổi ảnh hưởng đến KC hoặc cấu trúc sản phẩm → FAI bắt buộc)
    ↓
Cập nhật WI / Kế hoạch kiểm soát
    ↓
Thực hiện thay đổi
    ↓
Xác minh hiệu lực thay đổi
```

### 11.3 Thay Đổi 4M Ảnh Hưởng đến KC

- Phải được phê duyệt bởi QMR.
- Cần tái đánh giá FAI theo QP-811.
- Thông báo cho khách hàng nếu hợp đồng yêu cầu.

---

## 12. Yêu Cầu Đặc Biệt Hàng Không Vũ Trụ

### 12.1 Phòng Ngừa FOD (Foreign Object Damage)

Được quản lý theo QP-819 riêng biệt. Các nguyên tắc cốt lõi:

- **Trước khi bắt đầu công việc**: Kiểm tra vùng làm việc sạch sẽ, không có vật thể lạ
- **Trong quá trình làm việc**: Các vật tư, dụng cụ phải được kiểm soát và đặt đúng vị trí
- **Kết thúc công việc**: Kiểm tra sau công việc (Post-Task FOD Check) – xác minh không có dụng cụ, linh kiện, vật liệu nào còn sót lại trong sản phẩm

**Đặc biệt chú ý đối với các bộ phận có khoang kín hoặc lỗ thông** (ống dẫn khí, buồng đốt, v.v.):
- Đậy nắp bảo vệ sau mỗi công đoạn
- Hồ sơ FOD phải được duy trì cho từng lô

### 12.2 Kiểm Soát Truy Xuất Nguồn Gốc Lô

→ Được quản lý theo QP-812 (Quản lý Nhận dạng và Truy xuất Nguồn gốc)

Yêu cầu cốt lõi:
- Nhận dạng lô bắt buộc từ khi nhận vật tư đến khi giao hàng
- Không được trộn lẫn vật tư giữa các lô
- Hồ sơ lô phải ghi lại tất cả các công đoạn

### 12.3 Quản Lý Năng Lực Nhân Sự

- Danh sách nhân viên có chứng chỉ quá trình đặc biệt phải được duy trì và cập nhật thường xuyên
- Khi chứng chỉ hết hạn, nhân viên đó không được phép thực hiện quá trình liên quan
- Kế hoạch đào tạo phải được thực hiện trước 30 ngày khi chứng chỉ hết hạn

---

## 13. Quản Lý Hồ Sơ

| Hồ sơ | Trách nhiệm | Thời hạn lưu trữ |
|-------|-------------|------------------|
| Lệnh sản xuất (F-810-01) | Trưởng bộ phận Sản xuất | Vòng đời sản phẩm + 10 năm |
| Nhật ký quá trình đặc biệt (F-810-02) | Kỹ sư Quy trình | Vòng đời sản phẩm + 10 năm |
| Phiếu kiểm soát SPC (F-810-03) | Trưởng bộ phận Chất lượng | 5 năm |
| Báo cáo thay đổi 4M (F-810-04) | Kỹ sư Quy trình | Vòng đời sản phẩm + 10 năm |
| Hồ sơ phòng ngừa FOD (F-810-05) | Trưởng bộ phận Sản xuất | Vòng đời sản phẩm + 10 năm |
| Hồ sơ xác nhận hợp lệ quá trình đặc biệt | Kỹ sư Quy trình / QMR | Vòng đời sản phẩm + 10 năm |
| Hồ sơ đào tạo nhân viên | Bộ phận Nhân sự | Thời gian làm việc + 5 năm |

---

## 14. Lịch Sử Thay Đổi

| Phiên bản | Ngày | Nội dung thay đổi | Người phê duyệt |
|-----------|------|-------------------|-----------------|
| Rev. 0 | 04/2026 | Ban hành lần đầu | QMR |

---

*Tài liệu này là tài sản của M&C Electronics VIỆT NAM. Nghiêm cấm sao chép hoặc tiết lộ cho bên thứ ba khi chưa có sự đồng ý bằng văn bản.*
