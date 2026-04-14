# Quy trình Quản lý Thiết bị Đo lường và Kiểm tra
## Monitoring and Measuring Equipment Control Procedure

| Mục | Nội dung |
|-----|---------|
| Số tài liệu | QP-702 |
| Số hiệu chỉnh | Rev. 0 |
| Ngày ban hành | Tháng 4 năm 2026, ngày ___ |
| Tiêu chuẩn áp dụng | AS9100D Rev D, 7.1.5 |
| Cấp độ bảo mật | Thông thường (General) |
| Tài liệu cấp trên | QM-001 Sổ tay chất lượng §7.1.5 |

| Phân loại | Chức vụ | Họ tên | Chữ ký | Ngày |
|-----------|---------|--------|--------|------|
| Soạn thảo | Nhân viên Bộ phận Chất lượng | | | |
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
3. [Tài liệu/tiêu chuẩn tham chiếu](#3-tài-liệu-tiêu-chuẩn-tham-chiếu)
4. [Thuật ngữ và định nghĩa](#4-thuật-ngữ-và-định-nghĩa)
5. [Trách nhiệm và quyền hạn](#5-trách-nhiệm-và-quyền-hạn)
6. [Hệ thống quản lý thiết bị đo lường](#6-hệ-thống-quản-lý-thiết-bị-đo-lường)
7. [Quản lý hiệu chuẩn](#7-quản-lý-hiệu-chuẩn)
8. [Quản lý độ không đảm bảo đo](#8-quản-lý-độ-không-đảm-bảo-đo)
9. [Xử lý thiết bị không phù hợp](#9-xử-lý-thiết-bị-không-phù-hợp)
10. [Yêu cầu đặc thù hàng không vũ trụ](#10-yêu-cầu-đặc-thù-hàng-không-vũ-trụ)
11. [Quản lý hồ sơ](#11-quản-lý-hồ-sơ)
12. [Tài liệu và biểu mẫu liên quan](#12-tài-liệu-và-biểu-mẫu-liên-quan)

---

# 1. Mục đích

Quy trình này quy định các thủ tục về quản lý, hiệu chuẩn và bảo trì tất cả thiết bị giám sát và đo lường được sử dụng để đánh giá sự phù hợp của sản phẩm tại M&C Electronics VINA.

Mục đích của quy trình này:
- Quản lý hệ thống thiết bị đo lường theo yêu cầu AS9100D 7.1.5
- Đảm bảo tính hợp lệ và độ tin cậy của kết quả đo lường
- Quản lý phù hợp Độ không đảm bảo đo (Measurement Uncertainty)
- Đảm bảo tính truy xuất nguồn gốc (Traceability) trạng thái hiệu chuẩn
- Phản ánh biện pháp khắc phục CAR-012 (Hệ thống quản lý thiết bị đo lường chưa đầy đủ)

---

# 2. Phạm vi áp dụng

Quy trình này áp dụng cho tất cả các thiết bị giám sát và đo lường được sử dụng để đánh giá sự phù hợp của sản phẩm/quá trình trong QMS của M&C Electronics VINA.

| Phân loại | Đối tượng áp dụng |
|-----------|------------------|
| Thiết bị đo lường | Thước cặp, micrometer, thước đo chiều cao, caliper chốt, máy đo tọa độ (CMM), máy đo độ cứng, v.v. |
| Thiết bị thử nghiệm | Máy thử kéo, máy thử va đập, máy thử mỏi, v.v. |
| Thiết bị kiểm tra | Thiết bị kiểm tra không phá hủy (NDT), máy kiểm tra quang học, máy chiếu biên dạng, v.v. |
| Đo lường môi trường | Máy đo nhiệt độ/độ ẩm, máy đo độ sạch, v.v. (khi ảnh hưởng đến chất lượng) |
| Giám sát quá trình | Cờ lê lực (torque wrench), đồng hồ áp suất, cảm biến nhiệt độ, v.v. (dùng để quản lý thông số quá trình) |
| Phần mềm | Phần mềm dùng trong đo lường/kiểm tra (xác nhận tính phù hợp với mục đích sử dụng) |

**Ngoại lệ**: Thước đo văn phòng thông thường (trường hợp không yêu cầu độ chính xác theo vạch chia), thiết bị đo dùng để tham khảo (trường hợp không dùng để đánh giá chất lượng)

---

# 3. Tài liệu/tiêu chuẩn tham chiếu

| Tài liệu/tiêu chuẩn | Nội dung |
|--------------------|---------|
| AS9100D Rev D | Yêu cầu hệ thống quản lý chất lượng hàng không vũ trụ (điều khoản 7.1.5) |
| ISO 9001:2015 | Yêu cầu hệ thống quản lý chất lượng (điều khoản 7.1.5) |
| ISO 10012:2003 | Hệ thống quản lý đo lường — Yêu cầu đối với quá trình đo lường và thiết bị đo |
| ISO/IEC 17025 | Yêu cầu chung về năng lực của phòng thử nghiệm và hiệu chuẩn |
| ILAC-G8 | Hướng dẫn đánh giá độ không đảm bảo đo |
| QM-001 | Sổ tay chất lượng §7.1.5 Nguồn lực giám sát và đo lường |
| QP-812 | Quy trình quản lý nhận dạng và truy xuất nguồn gốc |

---

# 4. Thuật ngữ và định nghĩa

| Thuật ngữ | Định nghĩa |
|-----------|-----------|
| Hiệu chuẩn (Calibration) | Tập hợp các thao tác xác định mối quan hệ giữa giá trị hiển thị của thiết bị đo và giá trị thực theo chuẩn đo lường trong điều kiện quy định |
| Kiểm định (Verification) | Hoạt động xác nhận bằng bằng chứng khách quan rằng các yêu cầu quy định đã được đáp ứng |
| Độ không đảm bảo đo (Measurement Uncertainty) | Thông số gắn với kết quả đo lường mô tả một cách hợp lý sự phân tán của các giá trị đo |
| Truy xuất nguồn gốc (Traceability) | Đặc tính kết nối không bị gián đoạn (unbroken chain) từ chuẩn đo quốc gia hoặc quốc tế |
| MSA (Measurement System Analysis) | Phân tích hệ thống đo lường — Phân tích biến động của hệ thống đo, bao gồm Tính lặp lại (Repeatability), Tính tái tạo (Reproducibility) |
| GR&R (Gage Repeatability & Reproducibility) | Phương pháp phân tích định lượng tính lặp lại và tái tạo của hệ thống đo lường |
| Chu kỳ hiệu chuẩn | Khoảng thời gian hiệu chuẩn được thiết lập có tính đến tần suất sử dụng, môi trường và độ chính xác của thiết bị |
| Nhãn trạng thái hiệu chuẩn | Nhãn dán lên thiết bị để hiển thị trực quan trạng thái hiệu chuẩn (Đạt/Không phù hợp/Hạn chế sử dụng) |

---

# 5. Trách nhiệm và quyền hạn

| Vai trò | Trách nhiệm |
|---------|------------|
| **Đại diện lãnh đạo về chất lượng (QMR) / Giám đốc Chất lượng** | Phê duyệt tổng thể hệ thống quản lý thiết bị đo lường; Phê duyệt ngân sách hiệu chuẩn; Phán quyết cuối cùng về xử lý thiết bị không phù hợp; Xác nhận kế hoạch mua sắm và báo cáo phê duyệt lên Tổng Giám đốc |
| **Bộ phận Chất lượng (Bộ phận Chất lượng)** | Lập kế hoạch và quản lý thực hiện hiệu chuẩn; Duy trì danh sách thiết bị đo lường (Master List); Lựa chọn và đánh giá tổ chức hiệu chuẩn; Dán/quản lý nhãn trạng thái hiệu chuẩn; Duy trì hồ sơ hiệu chuẩn; Thực hiện hiệu chuẩn nội bộ; Thông báo cho tổ chức hiệu chuẩn bên ngoài trước 30 ngày khi hết hiệu lực; Giám sát việc sử dụng thiết bị đo lường của Bộ phận Sản xuất |
| **Bộ phận Sản xuất (Bộ phận Sản xuất)** | Xử lý, bảo quản và bảo trì hàng ngày thiết bị đo lường dùng trong quá trình sản xuất; Báo cáo ngay cho Bộ phận Chất lượng khi phát hiện thiết bị bất thường |
| **Trưởng các bộ phận** | Đảm bảo sử dụng đúng thiết bị đo lường thuộc bộ phận; Quản lý bảo vệ vật lý thiết bị; Lập "Sổ nhận, mượn dụng cụ" |
| **Người sử dụng thiết bị** | Kiểm tra trạng thái hiệu chuẩn và tình trạng bình thường trước khi sử dụng; Tuân thủ chú ý khi xử lý thiết bị; Không sử dụng thiết bị chưa dán nhãn hiệu chuẩn; Báo cáo ngay Bộ phận Chất lượng khi phát hiện bất thường; Không được điều chỉnh khi chưa được phép |

---

# 6. Hệ thống quản lý thiết bị đo lường

## 6.1 Đăng ký và nhận dạng thiết bị

### 6.1.1 Đăng ký thiết bị

Tất cả thiết bị đo lường cần hiệu chuẩn phải được đăng ký vào Danh sách thiết bị đo lường (Calibration Master List).

| Thông tin đăng ký | Nội dung |
|------------------|---------|
| Mã quản lý thiết bị | Cấp số nhận dạng duy nhất (ví dụ: CAL-2026-001) |
| Tên thiết bị/Model | Nhà sản xuất, model, số sê-ri |
| Dải đo | Dải đo của thiết bị |
| Độ chính xác/Độ phân giải | Giá trị đọc nhỏ nhất của thiết bị |
| Vị trí lưu trữ | Bộ phận sử dụng và nơi lưu trữ |
| Chu kỳ hiệu chuẩn | Khoảng thời gian hiệu chuẩn được thiết lập |
| Tổ chức hiệu chuẩn | Tên tổ chức hiệu chuẩn nội bộ hoặc bên ngoài |
| Ngày hiệu chuẩn gần nhất / Ngày hiệu chuẩn tiếp theo | Theo dõi lịch sử hiệu chuẩn |

### 6.1.2 Nhận dạng thiết bị (Dán nhãn)

| Trạng thái hiệu chuẩn | Màu nhãn | Nội dung hiển thị |
|----------------------|---------|-----------------|
| Hiệu chuẩn đạt | Xanh lá | Mã quản lý, ngày hiệu chuẩn, ngày hiệu chuẩn tiếp theo, người hiệu chuẩn |
| Hạn chế sử dụng | Vàng | Mã quản lý, lý do hạn chế, phạm vi sử dụng được phép |
| Không phù hợp/Đang sửa chữa | Đỏ | Mã quản lý, "Cấm sử dụng", ngày không phù hợp |

## 6.2 Thiết lập chu kỳ hiệu chuẩn

### 6.2.1 Chu kỳ hiệu chuẩn ban đầu

> **Lưu ý**: Chu kỳ hiệu chuẩn dưới đây dựa trên tiêu chuẩn vận hành thực tế của tài liệu ISO 9001/IATF 16949 hiện có (QM.02.03.12, Rev.05) và được bổ sung để phản ánh yêu cầu hàng không vũ trụ AS9100D.

| Phân loại | Loại thiết bị | Chu kỳ hiệu chuẩn | Phương pháp hiệu chuẩn | Ghi chú |
|-----------|-------------|-------------------|----------------------|--------|
| **Thiết bị đo lường (Thiết bị đo lường)** | CMM, máy đo 2D, máy phân tích thành phần (XRF), thước cặp, thước đo chiều cao, đồng hồ so, máy đo màu, máy đo nồng độ bụi, nhiệt kế, máy đo độ dày lớp phủ, máy đo độ dày, caliper chốt, máy đo độ sáng, máy đo biên dạng, v.v. | **12 tháng** | **Hiệu chuẩn bên ngoài** (Chỉ tổ chức được công nhận ISO/IEC 17025) | Rút ngắn khi có yêu cầu khách hàng |
| **Jig kiểm tra (khó mài mòn)** | Jig đo độ phẳng, khối hiệu chuẩn, v.v. | **3 tháng** | **Hiệu chuẩn nội bộ** (Tự kiểm tra theo tiêu chuẩn mài mòn) | |
| **Jig kiểm tra (dễ mài mòn)** | Tấm trượt đo độ dày, jig đo chiều rộng, chiều sâu/rộng rãnh, caliper ren, v.v. | **1 tháng** | **Hiệu chuẩn nội bộ** (Tự kiểm tra theo tiêu chuẩn mài mòn) | |
| Thiết bị thử nghiệm | Máy thử kéo, máy thử va đập, v.v. | 12 tháng | Hiệu chuẩn bên ngoài | |
| Dùng giám sát quá trình | Cờ lê lực, đồng hồ áp suất, v.v. | 6~12 tháng | Bên ngoài/Nội bộ | Tính đến tần suất sử dụng |

**Thông báo trước hết hạn hiệu chuẩn**: Khi thời hạn hiệu lực hiệu chuẩn còn lại **dưới 30 ngày**, lập danh sách thiết bị cần hiệu chuẩn và thông báo cho tổ chức hiệu chuẩn bên ngoài. (Áp dụng theo §5.2.3 QM.02.03.12 hiện có)

### 6.2.2 Điều chỉnh chu kỳ hiệu chuẩn

Điều chỉnh chu kỳ hiệu chuẩn trong các trường hợp sau:

| Điều kiện | Hướng điều chỉnh |
|-----------|----------------|
| Kết quả hiệu chuẩn đạt liên tục 3 lần + sai lệch không đáng kể | Có thể kéo dài chu kỳ (tối đa 24 tháng) |
| Kết quả hiệu chuẩn không phù hợp hoặc xu hướng sai lệch tăng | Rút ngắn chu kỳ |
| Sau khi sửa chữa/đại tu thiết bị | Hiệu chuẩn lại ngay lập tức |
| Tần suất sử dụng tăng | Xem xét rút ngắn chu kỳ |
| Yêu cầu khách hàng | Ưu tiên áp dụng chu kỳ theo yêu cầu khách hàng |
| Yêu cầu quy định hàng không vũ trụ | Ưu tiên áp dụng chu kỳ theo yêu cầu quy định |

Cần được phê duyệt của Trưởng bộ phận Chất lượng khi thay đổi chu kỳ hiệu chuẩn.

## 6.3 Xử lý và bảo quản thiết bị

| Hạng mục | Tiêu chuẩn |
|---------|-----------|
| Môi trường bảo quản | Nhiệt độ 20±5°C, Độ ẩm 40~70%RH (thiết bị đo chính xác) |
| Chống va đập | Sử dụng hộp đựng chuyên dụng hoặc đệm bảo vệ |
| Duy trì sạch sẽ | Vệ sinh trước/sau khi sử dụng; Bôi dầu chống gỉ (khi cần thiết) |
| Quản lý di chuyển | Đóng gói chống va đập khi di chuyển; Ghi lại việc di chuyển |
| Chống điều chỉnh trái phép | Dán niêm phong (Seal) hiệu chuẩn; Báo cáo ngay khi phát hiện niêm phong bị phá |

---

# 7. Quản lý hiệu chuẩn

## 7.1 Kế hoạch hiệu chuẩn

Trưởng bộ phận Chất lượng lập kế hoạch hiệu chuẩn hàng năm vào tháng 1 mỗi năm.

| Nội dung kế hoạch | Nội dung |
|-----------------|---------|
| Danh sách thiết bị cần hiệu chuẩn | Danh sách tất cả thiết bị |
| Tháng hiệu chuẩn dự kiến | Dựa trên ngày hiệu chuẩn tiếp theo |
| Phương pháp hiệu chuẩn | Hiệu chuẩn nội bộ / Thuê ngoài |
| Tổ chức hiệu chuẩn | Tên tổ chức hiệu chuẩn được công nhận |
| Ngân sách | Chi phí hiệu chuẩn bên ngoài |

## 7.2 Thực hiện hiệu chuẩn

### 7.2.1 Hiệu chuẩn bên ngoài

| Bước | Hoạt động | Người chịu trách nhiệm |
|------|-----------|----------------------|
| 1 | Xác nhận thiết bị cần hiệu chuẩn và chuẩn bị gửi đi | Cán bộ phụ trách hiệu chuẩn |
| 2 | Gửi đến tổ chức hiệu chuẩn được công nhận (ISO/IEC 17025) | Trưởng bộ phận Chất lượng |
| 3 | Nhận và kiểm tra giấy chứng nhận hiệu chuẩn | Cán bộ phụ trách hiệu chuẩn |
| 4 | Đánh giá kết quả đạt/không đạt và dán nhãn | Cán bộ phụ trách hiệu chuẩn |
| 5 | Đăng ký hồ sơ hiệu chuẩn và trả lại thiết bị | Cán bộ phụ trách hiệu chuẩn |

### 7.2.2 Hiệu chuẩn nội bộ

Hiệu chuẩn nội bộ chỉ thực hiện khi đáp ứng các điều kiện sau:
- Chuẩn đo cấp trên phải được hiệu chuẩn tại tổ chức được công nhận
- Phải có quy trình/hướng dẫn hiệu chuẩn đã được thiết lập
- Người thực hiện hiệu chuẩn phải hoàn thành đào tạo và có đủ năng lực
- Môi trường hiệu chuẩn (nhiệt độ, độ ẩm, v.v.) phải phù hợp

### 7.2.3 Yêu cầu đối với tổ chức hiệu chuẩn

| Yêu cầu | Nội dung |
|---------|---------|
| Tổ chức được công nhận | Ưu tiên tổ chức hiệu chuẩn được công nhận ISO/IEC 17025 |
| Truy xuất nguồn gốc | Có khả năng truy xuất về chuẩn đo quốc gia/quốc tế |
| Giấy chứng nhận hiệu chuẩn | Bao gồm thông tin về độ không đảm bảo đo, điều kiện hiệu chuẩn, chuẩn đo được sử dụng |
| Đánh giá định kỳ | Đánh giá tính phù hợp của tổ chức hiệu chuẩn 1 lần/năm (liên kết QP-808 Quản lý nhà cung cấp bên ngoài) |

## 7.3 Phán quyết đạt/không đạt sau hiệu chuẩn

| Kết quả | Tiêu chuẩn | Biện pháp tiếp theo |
|---------|-----------|-------------------|
| Đạt (Pass) | Kết quả hiệu chuẩn nằm trong dung sai cho phép | Dán nhãn xanh lá, phê duyệt sử dụng |
| Đạt có điều kiện | Chỉ đạt trong một phần dải đo | Dán nhãn vàng, ghi rõ phạm vi sử dụng được phép |
| Không phù hợp (Fail) | Vượt quá dung sai cho phép | Dán nhãn đỏ, cấm sử dụng → Xem mục 9 |

---

# 8. Quản lý độ không đảm bảo đo

## 8.1 Yêu cầu về độ không đảm bảo đo

Theo AS9100D 7.1.5.2, đánh giá và quản lý độ không đảm bảo đo để đảm bảo tính hợp lệ của kết quả đo lường.

| Hạng mục | Yêu cầu |
|---------|--------|
| Đánh giá độ không đảm bảo | Thực hiện đánh giá độ không đảm bảo đối với các phép đo ảnh hưởng đến quyết định đánh giá sự phù hợp của sản phẩm |
| Phản ánh vào tiêu chí phán quyết | Tính đến độ không đảm bảo đo khi đưa ra quyết định đạt/không đạt (kiểm tra tỷ lệ độ không đảm bảo so với dung sai) |
| Tài liệu hóa | Duy trì hồ sơ kết quả đánh giá độ không đảm bảo |
| Báo cáo cho khách hàng | Khi khách hàng yêu cầu, đưa độ không đảm bảo đo vào giấy chứng nhận kiểm tra |

## 8.2 Tiêu chuẩn áp dụng độ không đảm bảo đo

| Phân loại | Tiêu chuẩn |
|-----------|-----------|
| Đo lường sản phẩm thông thường | Độ không đảm bảo đo ≤ 1/4 dung sai → Không ảnh hưởng đến quyết định đạt/không đạt |
| Giá trị đo tại giới hạn | Giá trị đo nằm trong phạm vi giới hạn dung sai ± độ không đảm bảo → Cần phán quyết bổ sung |
| Đặc tính quan trọng hàng không vũ trụ | Bắt buộc phải báo cáo độ không đảm bảo đối với các đặc tính quan trọng (Key Characteristics) được khách hàng chỉ định |

## 8.3 MSA (Phân tích hệ thống đo lường)

| Hạng mục phân tích | Tiêu chuẩn | Chu kỳ |
|-------------------|-----------|--------|
| GR&R (Tính lặp lại/Tái tạo) | %GR&R ≤ 10%: Đạt, 10~30%: Đạt có điều kiện, >30%: Không phù hợp | Khi đưa thiết bị mới vào + 1 lần/năm |
| Độ lệch (Bias) | Đánh giá sai số hệ thống so với giá trị chuẩn | Khi hiệu chuẩn |
| Độ ổn định (Stability) | Biến động giá trị đo theo thời gian | 1 lần/quý |
| Tuyến tính (Linearity) | Thay đổi độ lệch theo dải đo | Khi đưa thiết bị mới vào |

---

# 9. Xử lý thiết bị không phù hợp

## 9.1 Biện pháp khẩn cấp khi phát hiện không phù hợp

```
Phát hiện không phù hợp (Hiệu chuẩn không đạt, hư hỏng, niêm phong bị phá, v.v.)
    │
    ▼
① Ngừng sử dụng ngay ──→ Dán nhãn đỏ "Cấm sử dụng"
    │
    ▼
② Cách ly bảo quản ──→ Chuyển đến khu vực bảo quản thiết bị không phù hợp
    │
    ▼
③ Báo cáo Trưởng bộ phận Chất lượng ──→ Lập Báo cáo thiết bị không phù hợp
    │
    ▼
④ Thực hiện đánh giá ảnh hưởng ──→ Đánh giá tính hợp lệ của sản phẩm đã đo bằng thiết bị đó
    │
    ▼
⑤ Quyết định xử lý ──→ Sửa chữa/Hiệu chuẩn lại/Loại bỏ
    │
    ▼
⑥ Thông báo cho khách hàng nếu cần ──→ Xác nhận yêu cầu khách hàng hàng không vũ trụ
```

## 9.2 Đánh giá ảnh hưởng (Retrospective Analysis)

Đánh giá các sản phẩm đã được đo bằng thiết bị không phù hợp:

| Hạng mục đánh giá | Nội dung |
|------------------|---------|
| Phạm vi ảnh hưởng | Xác định tất cả sản phẩm/lô hàng đã được kiểm tra bằng thiết bị đó kể từ ngày hiệu chuẩn đạt gần nhất |
| Sự cần thiết kiểm tra lại | So sánh sai lệch hiệu chuẩn với dung sai sản phẩm để xác định có cần kiểm tra lại không |
| Thông báo cho khách hàng | Thông báo ngay cho khách hàng nếu ảnh hưởng đến sản phẩm đã xuất hàng |
| Biện pháp khắc phục | Phát hành CAR theo QP-1001 (khi cần thiết) |

## 9.3 Xử lý thiết bị

| Loại xử lý | Tiêu chuẩn | Biện pháp |
|-----------|-----------|----------|
| Sửa chữa rồi hiệu chuẩn lại | Trường hợp có thể sửa chữa | Hoàn thành sửa chữa → Hiệu chuẩn lại → Đưa vào sử dụng khi đạt |
| Đổi cấp | Khi độ chính xác giảm | Phân loại lại cho mục đích đo lường ít nghiêm ngặt hơn |
| Loại bỏ | Không thể sửa chữa hoặc không kinh tế | Lập hồ sơ loại bỏ → Loại bỏ vật lý |

---

# 10. Yêu cầu đặc thù hàng không vũ trụ

## 10.1 Truy xuất nguồn gốc hiệu chuẩn

AS9100D đặc biệt nhấn mạnh tính truy xuất nguồn gốc của kết quả đo lường:

| Yêu cầu | Phương pháp quản lý |
|---------|-------------------|
| Liên kết về chuẩn đo quốc gia/quốc tế | Tất cả các hiệu chuẩn được thực hiện bằng chuẩn đo có thể truy xuất về chuẩn đo quốc gia/quốc tế |
| Tài liệu hóa chuỗi hiệu chuẩn | Xác nhận giấy chứng nhận hiệu chuẩn bao gồm thông tin truy xuất nguồn gốc của chuẩn đo được sử dụng |
| Hiệu chuẩn theo chỉ định của khách hàng | Ưu tiên áp dụng khi khách hàng chỉ định tổ chức hoặc phương pháp hiệu chuẩn |

## 10.2 Kiểm định phần mềm

Xác nhận phần mềm dùng trong đo lường/kiểm tra có phù hợp với mục đích sử dụng:

| Bước | Hoạt động |
|------|-----------|
| Kiểm định ban đầu | Nhập giá trị đã biết (Known Value) khi đưa vào sử dụng để xác nhận độ chính xác đầu ra |
| Kiểm định định kỳ | Thử nghiệm giá trị đã biết 1 lần/năm để xác nhận tính phù hợp liên tục |
| Khi thay đổi | Kiểm định lại khi cập nhật/thay đổi phần mềm |
| Hồ sơ | Duy trì hồ sơ kết quả kiểm định |

## 10.3 Thiết bị đo lường thuộc sở hữu khách hàng

Đối với thiết bị đo lường hoặc thiết bị đo do khách hàng cung cấp:
- Kiểm tra và ghi lại tình trạng khi nhận
- Áp dụng quản lý hiệu chuẩn tương tự thiết bị nội bộ
- Thông báo ngay cho khách hàng khi phát hiện hư hỏng hoặc không phù hợp
- Dán nhãn nhận dạng riêng ("Tài sản khách hàng")

## 10.4 Thiết bị của Thanh tra được ủy quyền (Delegated Inspector)

Đối với thiết bị đo lường do thanh tra được ủy quyền của khách hàng sử dụng:
- Xác nhận tính hợp lệ của hồ sơ hiệu chuẩn của thanh tra được ủy quyền
- Kiểm tra trạng thái hiệu chuẩn trước khi cho phép sử dụng
- Dừng ngay và báo cáo khi sử dụng thiết bị không phù hợp

---

# 11. Quản lý hồ sơ

## 11.1 Hồ sơ hiệu chuẩn

| Loại hồ sơ | Thời gian lưu trữ | Phương pháp quản lý |
|-----------|-----------------|-------------------|
| Danh sách thiết bị đo lường (Master List) | Thời gian duy trì QMS | Đăng ký DMS, cập nhật thường xuyên |
| Kế hoạch hiệu chuẩn hàng năm | 5 năm | Bộ phận Chất lượng quản lý |
| Giấy chứng nhận hiệu chuẩn (bên ngoài) | Thời gian sử dụng thiết bị + 3 năm | Quản lý hồ sơ theo từng thiết bị |
| Hồ sơ hiệu chuẩn nội bộ | Thời gian sử dụng thiết bị + 3 năm | Quản lý hồ sơ theo từng thiết bị |
| Báo cáo thiết bị không phù hợp | 5 năm | Liên kết QP-1001 |
| Kết quả MSA/GR&R | 5 năm | Quản lý hồ sơ theo từng thiết bị |
| Hồ sơ đánh giá tổ chức hiệu chuẩn | Thời gian giao dịch + 3 năm | Liên kết QP-808 |
| Hồ sơ kiểm định phần mềm | Thời gian sử dụng phần mềm + 3 năm | Bộ phận Chất lượng quản lý |

## 11.2 Truy xuất nguồn gốc hồ sơ

Tất cả hồ sơ hiệu chuẩn có thể truy xuất theo mã quản lý thiết bị (CAL-YYYY-NNN), và có thể tra cứu lịch sử hiệu chuẩn theo từng thiết bị trong DMS.

---

# 12. Tài liệu và biểu mẫu liên quan

## 12.1 Quy trình liên quan

| Số tài liệu | Tên tài liệu | Liên quan |
|------------|------------|---------|
| QM-001 | Sổ tay chất lượng | Tài liệu cấp trên (§7.1.5) |
| QP-706 | Quản lý thông tin được ghi chép | Quản lý hồ sơ hiệu chuẩn |
| QP-808 | Quản lý nhà cung cấp bên ngoài | Đánh giá tổ chức hiệu chuẩn |
| QP-812 | Quản lý nhận dạng và truy xuất nguồn gốc | Liên kết hệ thống nhận dạng thiết bị |
| QP-1001 | Không phù hợp/Biện pháp khắc phục | Biện pháp khắc phục thiết bị không phù hợp |
| WI-805-01 | Hướng dẫn hiệu chuẩn thiết bị đo lường | Quy trình chi tiết thực hiện hiệu chuẩn |

## 12.2 Biểu mẫu liên quan

| Số biểu mẫu | Tên biểu mẫu | Mục đích |
|------------|------------|--------|
| F-702-01 | Danh sách thiết bị đo lường (Calibration Master List) | Hiện trạng đăng ký/quản lý tất cả thiết bị |
| F-702-02 | Giấy chứng nhận hiệu chuẩn (nội bộ) | Ghi lại kết quả hiệu chuẩn nội bộ |
| F-702-03 | Báo cáo thiết bị không phù hợp | Ghi lại báo cáo/biện pháp khi phát hiện không phù hợp |
| F-702-04 | Kế hoạch hiệu chuẩn hàng năm | Quản lý lịch trình hiệu chuẩn theo năm |
| F-702-05 | Hồ sơ phân tích MSA/GR&R | Kết quả phân tích hệ thống đo lường |
| F-702-06 | Nhãn trạng thái hiệu chuẩn | Hiển thị trạng thái hiệu chuẩn dán lên thiết bị |

---

## Phụ lục A: Lưu đồ quy trình quản lý hiệu chuẩn

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Đưa thiết bị │     │  Đăng ký     │     │  Thiết lập   │
│  mới vào/    │────→│  vào danh    │────→│  chu kỳ      │
│  Mua sắm     │     │  sách        │     │  hiệu chuẩn  │
│              │     │  (F-702-01)  │     │              │
└──────────────┘     └──────────────┘     └──────────────┘
                                                │
                         ┌──────────────────────┘
                         ▼
                  ┌──────────────┐
                  │  Thực hiện   │
                  │  hiệu chuẩn  │
                  │ (Ngoài/Nội bộ)│
                  └──────────────┘
                         │
              ┌──────────┼──────────┐
              ▼          ▼          ▼
       ┌──────────┐ ┌──────────┐ ┌──────────┐
       │  Đạt     │ │  Đạt có  │ │  Không   │
       │  (Xanh)  │ │  điều    │ │  phù hợp │
       │          │ │  kiện    │ │  (Đỏ)    │
       │          │ │  (Vàng)  │ │          │
       └──────────┘ └──────────┘ └──────────┘
              │          │          │
              ▼          ▼          ▼
       ┌──────────┐ ┌──────────┐ ┌──────────┐
       │  Đưa vào │ │  Sử dụng │ │ Ngừng    │
       │  sử dụng │ │  hạn chế │ │ sử dụng  │
       │  dán nhãn│ │  ghi     │ │ →Mục 9   │
       └──────────┘ └──────────┘ └──────────┘
              │          │          │
              └──────────┴──────────┘
                         │
                         ▼
                  ┌──────────────┐
                  │  Quản lý/   │
                  │  thông báo  │
                  │  hiệu chuẩn │
                  │  tiếp theo  │
                  └──────────────┘
```

---

**Kết thúc tài liệu — QP-702 Rev. 0**
