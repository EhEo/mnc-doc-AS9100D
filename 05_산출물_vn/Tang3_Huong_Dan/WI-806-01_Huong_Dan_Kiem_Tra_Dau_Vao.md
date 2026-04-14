# Hướng Dẫn Kiểm Tra Đầu Vào
## Incoming Quality Control (IQC) Work Instruction

| Mục | Nội dung |
|-----|----------|
| Số tài liệu | WI-806-01 |
| Số hiệu chỉnh | Rev. 0 |
| Ngày ban hành | Tháng 5 năm 2026, ngày ___ |
| Tiêu chuẩn áp dụng | AS9100D Rev D, Điều khoản 8.4.3 (Thông tin cho các nhà cung cấp bên ngoài) |
| Cấp độ bảo mật | Bảo mật nội bộ (Confidential) |
| Tài liệu cấp trên | QP-808 Quy trình Quản lý Nhà cung cấp bên ngoài |

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
5. [Phân loại đối tượng kiểm tra đầu vào](#5-phân-loại-đối-tượng-kiểm-tra-đầu-vào)
6. [Chuẩn bị trước kiểm tra](#6-chuẩn-bị-trước-kiểm-tra)
7. [Thực hiện kiểm tra](#7-thực-hiện-kiểm-tra)
8. [Hạng mục kiểm tra đặc biệt](#8-hạng-mục-kiểm-tra-đặc-biệt)
9. [Tiêu chí phán quyết đạt/không đạt](#9-tiêu-chí-phán-quyết-đạtkhông-đạt)
10. [Nhận dạng hàng đạt và xử lý nhập kho](#10-nhận-dạng-hàng-đạt-và-xử-lý-nhập-kho)
11. [Xử lý hàng không đạt](#11-xử-lý-hàng-không-đạt)
12. [Điều kiện nhập kho khẩn cấp (Dock-to-Stock)](#12-điều-kiện-nhập-kho-khẩn-cấp-dock-to-stock)
13. [Lập biên bản kiểm tra đầu vào](#13-lập-biên-bản-kiểm-tra-đầu-vào)
14. [Lưu ý quan trọng](#14-lưu-ý-quan-trọng)

---

## 1. Mục đích

Hướng dẫn này quy định phương pháp và tiêu chuẩn cụ thể cho kiểm tra đầu vào (IQC) thực hiện tại M&C (M&C Electronics VINA) nhằm đảm bảo chất lượng nguyên vật liệu, linh kiện và hàng gia công ngoài nhập từ nhà cung cấp bên ngoài, đáp ứng yêu cầu AS9100D 8.4.3.

## 2. Phạm vi áp dụng

- Tất cả nguyên vật liệu, linh kiện, hàng gia công ngoài đưa vào sản xuất
- Tất cả hạng mục mua bán sử dụng cho sản phẩm hàng không vũ trụ
- Vật liệu do khách hàng cung cấp (Customer Furnished Material)
- Miễn trừ áp dụng: Văn phòng phẩm, vật liệu phụ trợ (hạng mục không ảnh hưởng đến chất lượng)

## 3. Tài liệu tham chiếu

| Số tài liệu | Tên tài liệu |
|-------------|--------------|
| QP-808 | Quy trình Quản lý Nhà cung cấp bên ngoài |
| QP-841 | Quy trình Đánh giá/Phê duyệt Nhà cung cấp bên ngoài |
| F-804-01 | Biên bản kiểm tra đầu vào |
| ANSI/ASQ Z1.4 | Tiêu chuẩn lấy mẫu kiểm tra theo thuộc tính |
| AS9102 | First Article Inspection (FAI) |
| QP-830 | Quy trình Quản lý sự không phù hợp |

## 4. Định nghĩa thuật ngữ

| Thuật ngữ | Định nghĩa |
|-----------|------------|
| IQC | Incoming Quality Control, Kiểm tra chất lượng đầu vào |
| CoC | Certificate of Conformance, Chứng chỉ phù hợp |
| Mill Certificate | Chứng chỉ vật liệu (chứng minh thành phần vật liệu, thành phần hóa học, tính chất cơ học) |
| AQL | Acceptable Quality Level, Mức chất lượng chấp nhận được |
| SCAR | Supplier Corrective Action Request, Yêu cầu hành động khắc phục của nhà cung cấp |
| NCR | Non-Conformance Report, Báo cáo sự không phù hợp |
| ASL | Approved Supplier List, Danh sách nhà cung cấp được phê duyệt |
| Dock-to-Stock | Nhập kho trực tiếp bỏ qua kiểm tra đầu vào |

## 5. Phân loại đối tượng kiểm tra đầu vào

### 5.1 Tiêu chí phân loại

| Cấp độ | Đối tượng | Mức độ kiểm tra | Ghi chú |
|--------|-----------|----------------|---------|
| Cấp A (Quan trọng) | Nguyên vật liệu cốt lõi hàng không vũ trụ, hàng gia công ngoài quy trình đặc biệt | Kiểm tra toàn bộ hoặc lấy mẫu tăng cường | AQL 0.65 |
| Cấp B (Chính) | Linh kiện thông thường, hàng gia công ngoài tiêu chuẩn | Lấy mẫu bình thường | AQL 1.0 |
| Cấp C (Phụ) | Vật liệu đa dụng, bu lông/đai ốc và các sản phẩm tiêu chuẩn | Lấy mẫu giảm nhẹ | AQL 2.5 |

### 5.2 Phân loại theo đối tượng

| Loại | Ví dụ | Mức độ kiểm tra cơ bản |
|------|-------|----------------------|
| Nguyên vật liệu | Tấm nhôm, thép không gỉ, hợp kim đồng | Cấp A (Bắt buộc có Mill Cert) |
| Linh kiện (mua) | Đầu nối, đầu bắt chặt, gioăng, vòng O-ring | Cấp B |
| Hàng gia công ngoài | Sản phẩm gia công CNC, sản phẩm xử lý nhiệt, sản phẩm mạ | Cấp A~B (theo quy trình) |
| Vật liệu do khách hàng cung cấp | Vật liệu/linh kiện do khách hàng cung cấp | Xác nhận số lượng và ngoại quan |

## 6. Chuẩn bị trước kiểm tra

### 6.1 Kiểm tra đơn đặt hàng

1. Đối chiếu đơn mua hàng (PO) với số lượng giao hàng
2. Xác nhận thông số kỹ thuật đặt hàng (số bản vẽ, tiêu chuẩn, vật liệu)
3. Xác nhận có tuân thủ thời hạn giao hàng không

### 6.2 Kiểm tra hồ sơ giao hàng

Xác nhận các hồ sơ sau có được nộp cùng với vật liệu nhập kho không:

| STT | Hồ sơ bắt buộc | Hạng mục kiểm tra | Cấp A | Cấp B | Cấp C |
|-----|---------------|------------------|-------|-------|-------|
| 1 | Phiếu giao hàng/Bảng chi tiết giao dịch | Tên hàng, số lượng, số lô | Bắt buộc | Bắt buộc | Bắt buộc |
| 2 | CoC (Chứng chỉ phù hợp) | Tuyên bố đáp ứng tiêu chuẩn, chữ ký, ngày tháng | Bắt buộc | Bắt buộc | Tùy chọn |
| 3 | Mill Certificate | Thành phần hóa học, tính chất cơ học | Bắt buộc | Khi áp dụng | - |
| 4 | Báo cáo thử nghiệm | Độ cứng, kéo, chống ăn mòn, v.v. | Bắt buộc | Khi áp dụng | - |
| 5 | Báo cáo xử lý nhiệt/bề mặt | Nhiệt độ, thời gian, độ dày, v.v. | Khi áp dụng | Khi áp dụng | - |
| 6 | Báo cáo FAI | Biểu mẫu AS9102 cho lần giao hàng đầu tiên | Khi áp dụng | Khi áp dụng | - |
| 7 | Giấy chứng nhận xuất xứ | Xác nhận xuất xứ vật liệu nhập khẩu | Khi áp dụng | Khi áp dụng | - |

### 6.3 Xử lý khi thiếu hồ sơ

- Khi hồ sơ bắt buộc chưa nộp, xử lý **tạm giữ nhập kho**
- Yêu cầu nhà cung cấp bổ sung hồ sơ qua Phòng Mua hàng
- Cấm đưa vào sản xuất cho đến khi hoàn thiện hồ sơ

## 7. Thực hiện kiểm tra

### 7.1 Kiểm tra ngoại quan

1. Kiểm tra tình trạng đóng gói (hư hại, ô nhiễm, độ ẩm)
2. Kiểm tra ngoại quan sản phẩm:
   - Trầy xước, va đập, đổi màu, ăn mòn
   - Tình trạng mạ/sơn (bong tróc, bong bóng, vết ố)
   - Có vật thể lạ (FOD) bám không
3. Kiểm tra tình trạng nhãn/ký hiệu (số hiệu linh kiện, số lô, số lượng)

### 7.2 Kiểm tra kích thước

1. Xác nhận hạng mục đo theo bản vẽ kiểm tra và Control Plan
2. Thực hiện đo lường sử dụng thiết bị đo đã hiệu chuẩn:
   - Thước cặp: Kích thước thông thường (dung sai ±0.1mm trở lên)
   - Panme: Kích thước chính xác (dung sai ±0.05mm trở xuống)
   - CMM: Dung sai hình học như dung sai hình dạng, dung sai vị trí
3. Ghi kết quả đo vào biên bản kiểm tra

### 7.3 Thử nghiệm chức năng

- Thực hiện thử nghiệm chức năng/hiệu năng khi áp dụng:
  - Đặc tính điện: Điện trở, cách điện, chịu điện áp
  - Đặc tính cơ học: Tính phù hợp lắp ráp, lực siết chặt
  - Thử nghiệm kín khí: Có rò rỉ không

### 7.4 Tiêu chuẩn lấy mẫu AQL (ANSI/ASQ Z1.4)

| Cỡ lô | Cỡ mẫu Mức kiểm tra II | AQL 0.65 Ac/Re | AQL 1.0 Ac/Re | AQL 2.5 Ac/Re |
|-------|----------------------|---------------|---------------|---------------|
| 2~8 | 2 | 0/1 | 0/1 | 0/1 |
| 9~15 | 3 | 0/1 | 0/1 | 0/1 |
| 16~25 | 5 | 0/1 | 0/1 | 0/1 |
| 26~50 | 8 | 0/1 | 0/1 | 0/1 |
| 51~90 | 13 | 0/1 | 0/1 | 1/2 |
| 91~150 | 20 | 0/1 | 0/1 | 1/2 |
| 151~280 | 32 | 0/1 | 1/2 | 2/3 |
| 281~500 | 50 | 1/2 | 1/2 | 3/4 |
| 501~1200 | 80 | 1/2 | 2/3 | 5/6 |
| 1201~3200 | 125 | 2/3 | 3/4 | 7/8 |

> **Ac**: Số lượng phán quyết chấp nhận, **Re**: Số lượng phán quyết từ chối

### 7.5 Quy tắc chuyển đổi lấy mẫu

| Chuyển đổi | Điều kiện |
|------------|----------|
| Bình thường → Giảm nhẹ | 10 lô liên tiếp đạt + Nhà cung cấp đánh giá hạng A |
| Bình thường → Tăng cường | 2 lô không đạt trong 5 lô liên tiếp |
| Tăng cường → Bình thường | 5 lô liên tiếp đạt |
| Tăng cường → Dừng kiểm tra | Xem xét dừng giao dịch khi 10 lô liên tiếp không đạt |

## 8. Hạng mục kiểm tra đặc biệt

### 8.1 Đối chiếu chứng chỉ vật liệu (Mill Certificate)

1. Xác nhận thành phần hóa học của Mill Certificate có phù hợp với **tiêu chuẩn đặt hàng (ASTM, AMS, v.v.)** không
2. Xác nhận tính chất cơ học (độ bền kéo, giới hạn chảy, độ giãn dài) có trong phạm vi tiêu chuẩn không
3. Xác nhận Heat Number/Lot Number có khớp với ký hiệu thực tế không
4. Khi phát hiện sự không khớp, **tạm giữ nhập kho ngay** và phát hành NCR

### 8.2 Phân tích thành phần

- Sử dụng XRF (máy phân tích huỳnh quang tia X) hoặc tổ chức thử nghiệm bên ngoài
- Thực hiện phân tích thành phần trong các trường hợp sau:
  - Lô hàng đầu tiên từ nhà cung cấp mới
  - Khi thiếu hoặc nghi ngờ Mill Certificate
  - Theo yêu cầu khách hàng
  - Vật liệu cốt lõi liên quan đến an toàn hàng không vũ trụ

### 8.3 Kiểm tra độ cứng

- Thực hiện khi vật liệu/linh kiện có yêu cầu độ cứng
- Sử dụng máy đo độ cứng Rockwell (HRC/HRB), Brinell (HB), Vickers (HV)
- Vị trí đo: Đo tối thiểu 3 điểm và phán quyết bằng giá trị trung bình
- Đối với sản phẩm xử lý nhiệt, xác nhận phân bố độ cứng (bề mặt/lõi)

## 9. Tiêu chí phán quyết đạt/không đạt

### 9.1 Tiêu chí đạt

Phán quyết đạt khi đáp ứng **tất cả** các điều kiện sau:

1. Hồ sơ giao hàng đầy đủ và nội dung phù hợp
2. Kết quả kiểm tra ngoại quan không có lỗi
3. Kết quả kiểm tra kích thước tất cả giá trị đo trong dung sai bản vẽ
4. Kết quả thử nghiệm chức năng đáp ứng yêu cầu (khi áp dụng)
5. Kết quả kiểm tra đặc biệt trong phạm vi tiêu chuẩn (khi áp dụng)
6. Kết quả lấy mẫu AQL trong số lượng phán quyết chấp nhận (Ac)

### 9.2 Tiêu chí không đạt

Phán quyết không đạt khi **bất kỳ** điều nào sau đây xảy ra:

1. Thiếu hồ sơ bắt buộc hoặc nội dung không phù hợp
2. Phát hiện lỗi ngoại quan (mức không thể chấp nhận)
3. Vượt quá dung sai kích thước
4. Không đạt yêu cầu chức năng/hiệu năng
5. Thành phần/độ cứng vật liệu không đạt tiêu chuẩn
6. Kết quả lấy mẫu AQL đạt hoặc vượt số lượng phán quyết từ chối (Re)

## 10. Nhận dạng hàng đạt và xử lý nhập kho

### 10.1 Ký hiệu nhận dạng

1. Dán **nhãn dán đạt màu xanh lá** lên hàng đạt
2. Thông tin ghi trên nhãn dán:
   - Ngày kiểm tra
   - Chữ ký/con dấu của người kiểm tra
   - Số lô
   - Số lượng
3. Dán **nhãn truy xuất nguồn gốc** lên vật liệu/linh kiện (số lô, số PO, ngày nhập kho)

### 10.2 Xử lý nhập kho

1. Hoàn thành lập biên bản kiểm tra đầu vào (F-804-01)
2. Đăng ký nhập kho vào hệ thống ERP (ghi lại trạng thái đạt kiểm tra)
3. Chuyển đến nơi bảo quản được chỉ định (kho vật liệu)
4. Bảo quản theo nguyên tắc nhập trước xuất trước (FIFO)

## 11. Xử lý hàng không đạt

### 11.1 Cách ly

1. Dán **thẻ không đạt màu đỏ** lên hàng không đạt
2. Chuyển ngay đến **khu vực cách ly hàng không đạt**
3. Ghi rõ lý do không đạt trên thẻ

### 11.2 Phát hành NCR

1. Lập báo cáo sự không phù hợp (NCR).
2. Ghi các nội dung sau vào NCR:
   - Nội dung không đạt (loại lỗi, giá trị đo, tiêu chí phán quyết)
   - Số lượng không đạt
   - Phạm vi ảnh hưởng (lô khác, tình trạng đã đưa vào sử dụng)

### 11.3 Thông báo nhà cung cấp và SCAR

1. **Thông báo bằng văn bản** cho nhà cung cấp về nội dung không đạt
2. Phát hành SCAR (Yêu cầu hành động khắc phục của nhà cung cấp) trong các trường hợp sau:
   - Lỗi tương tự xảy ra lặp đi lặp lại (2 lần trở lên trong 3 tháng)
   - Lỗi nghiêm trọng ảnh hưởng đến an toàn/chức năng
   - Nghi ngờ giả mạo/làm giả hồ sơ
3. Nhà cung cấp phải nộp kết quả hành động khắc phục **trong vòng 15 ngày làm việc**.
4. Khi SCAR không được hồi âm hoặc hồi âm không phù hợp, xem xét **hạ cấp hạng ASL** hoặc dừng giao dịch

### 11.4 Xử lý hàng không đạt

| Phương án xử lý | Điều kiện | Quyền phê duyệt |
|----------------|-----------|-----------------|
| Trả lại (Return) | Do lỗi của nhà cung cấp | Trưởng Phòng Chất lượng |
| Dùng đặc cách (Concession) | Khi phán quyết có thể sử dụng | Trưởng Phòng Chất lượng + Phê duyệt khách hàng (hàng không vũ trụ) |
| Phân loại sử dụng | Khi có thể sử dụng một phần hàng đạt | Trưởng Phòng Chất lượng |
| Tiêu hủy (Scrap) | Không thể sử dụng | Trưởng Phòng Chất lượng |

> **Sản phẩm hàng không vũ trụ**: Khi dùng đặc cách (Concession) phải **xin phê duyệt trước của khách hàng**

## 12. Điều kiện nhập kho khẩn cấp (Dock-to-Stock)

### 12.1 Điều kiện áp dụng

Nhập kho khẩn cấp chỉ được phép khi đáp ứng **tất cả** các điều kiện sau:

1. Xảy ra **lý do khẩn cấp** như sắp dừng dây chuyền sản xuất
2. Nhà cung cấp đó thuộc **hạng A trong ASL** (xuất sắc)
3. **Không có lịch sử không đạt kiểm tra đầu vào** trong 6 tháng gần đây
4. **CoC và hồ sơ bắt buộc** đầy đủ
5. Có phê duyệt chung của Trưởng Phòng Chất lượng và **Trưởng Phòng Sản xuất**

### 12.2 Quy trình nhập kho khẩn cấp

1. Lập đơn yêu cầu nhập kho khẩn cấp (lý do yêu cầu, chữ ký người phê duyệt)
2. Thực hiện xem xét hồ sơ (CoC, Mill Cert, v.v.)
3. Kiểm tra ngoại quan **phải thực hiện bắt buộc**
4. Hoàn thành kiểm tra đầu vào chính thức **trong vòng 24 giờ** sau khi nhập kho
5. Khi kiểm tra không đạt, thực hiện ngay **quản lý truy hồi** phần đã đưa vào dây chuyền sản xuất

### 12.3 Hạn chế

- Hạng mục **liên quan đến an toàn** hàng không vũ trụ **không áp dụng** nhập kho khẩn cấp
- Hàng từ nhà cung cấp mới **không áp dụng** nhập kho khẩn cấp
- Khi số lần nhập kho khẩn cấp hàng tháng **vượt quá 5% tổng nhập kho**, Trưởng Phòng Chất lượng thực hiện phân tích nguyên nhân

## 13. Lập biên bản kiểm tra đầu vào

### 13.1 Biểu mẫu

Sử dụng **F-804-01 Biên bản kiểm tra đầu vào**.

### 13.2 Hạng mục ghi chép

| STT | Hạng mục | Nội dung |
|-----|---------|---------|
| 1 | Ngày kiểm tra | Ngày thực hiện kiểm tra |
| 2 | Số PO | Số đơn mua hàng |
| 3 | Tên nhà cung cấp | Nhà cung cấp giao hàng |
| 4 | Số hiệu/Tên linh kiện | Thông tin nhận dạng vật liệu/linh kiện |
| 5 | Số lô | Số lô của nhà cung cấp |
| 6 | Số lượng giao/Số lượng kiểm tra | Tổng số lượng / Số lượng mẫu |
| 7 | Hạng mục kiểm tra | Hạng mục kiểm tra ngoại quan/kích thước/chức năng/đặc biệt |
| 8 | Tiêu chí phán quyết | Giá trị chuẩn và dung sai theo bản vẽ/tiêu chuẩn |
| 9 | Kết quả đo | Ghi giá trị thực đo |
| 10 | Phán quyết | Đạt/Không đạt |
| 11 | Biện pháp khi không đạt | Số NCR, phương án xử lý |
| 12 | Người kiểm tra | Chữ ký/con dấu |
| 13 | Tài liệu đính kèm | Có/không có CoC, Mill Cert đính kèm |

### 13.3 Lưu giữ hồ sơ

- Biên bản kiểm tra đầu vào: Lưu giữ **tối thiểu 10 năm**
- Liên quan đến sản phẩm hàng không vũ trụ: Lưu giữ **tuổi thọ sản phẩm + 5 năm**
- Lưu đồng thời file điện tử và bản gốc

## 14. Lưu ý quan trọng

1. Không thể nhập kho vật liệu từ **nhà cung cấp chưa được đăng ký trong ASL**.
2. Không được bỏ qua kiểm tra đầu vào hoặc tự ý nới lỏng tiêu chuẩn kiểm tra. Bắt buộc có phê duyệt của Trưởng Phòng Chất lượng khi thay đổi.
3. Vật liệu hàng không vũ trụ nhập kho không có CoC **cấm đưa vào sản xuất**.
4. Đối với vật liệu có **hạn sử dụng (Shelf Life)**, xác nhận ngày hết hạn và từ chối nhập kho vật liệu đã hết hạn.
5. Khi phát hiện **FOD (vật thể lạ)** trong quá trình kiểm tra, cách ly và điều tra toàn bộ lô đó.
6. Thiết bị đo sử dụng trong kiểm tra phải chỉ sử dụng thiết bị **trong thời hạn hiệu lực hiệu chuẩn**.
7. Áp dụng **kiểm tra tăng cường** cho lô hàng tiếp theo từ nhà cung cấp có lịch sử không đạt.
8. **Giả mạo và chỉnh sửa kết quả kiểm tra bị nghiêm cấm** và sẽ bị xử lý kỷ luật khi bị phát hiện.
9. Vật liệu do khách hàng cung cấp cũng phải thực hiện xác nhận số lượng và kiểm tra ngoại quan, và thông báo ngay cho khách hàng khi phát hiện lỗi.
10. Dữ liệu kiểm tra đầu vào được tổng hợp hàng tháng và phản ánh vào **đánh giá nhà cung cấp**.

---

| Kết thúc tài liệu | WI-806-01 Rev. 0 |
|-------------------|------------------|
