CREATE DATABASE database_04_NguyenThanhNam;
USE database_04_NguyenThanhNam;
CREATE TABLE `KHACH_HANG` (
  `MaKH` varchar(10) PRIMARY KEY,
  `TenKH` varchar(50),
  `DiaChi` varchar(50),
  `SoDT` varchar(15)
);

CREATE TABLE `PHONG` (
  `MaPhong` varchar(10) PRIMARY KEY,
  `LoaiPhong` varchar(20),
  `SoKhachToiDa` integer,
  `GiaPhong` integer,
  `MoTa` text
);

CREATE TABLE `DAT_PHONG` (
  `MaDatPhong` varchar(10) PRIMARY KEY,
  `Maphong` varchar(10),
  `MaKH` varchar(10),
  `NgayDat` date,
  `GioBatDau` time,
  `GioKetThuc` time,
  `TienDatCoc` integer,
  `GhiChu` text,
  `TrangThaiDat` varchar(10)
);

CREATE TABLE `DICH_VU_DI_KEM` (
  `MaDV` varchar(10) PRIMARY KEY,
  `TenDV` varchar(50),
  `DonViTinh` varchar(15),
  `DonGia` integer
);

CREATE TABLE `CHI_TIET_SU_DUNG_DV` (
  `MaDatPhong` varchar(10),
  `MaDV` varchar(10),
  `SoLuong` integer
);

ALTER TABLE `DAT_PHONG` ADD FOREIGN KEY (`MaKH`) REFERENCES `KHACH_HANG` (`MaKH`);

ALTER TABLE `DAT_PHONG` ADD FOREIGN KEY (`Maphong`) REFERENCES `PHONG` (`MaPhong`);

ALTER TABLE `CHI_TIET_SU_DUNG_DV` ADD FOREIGN KEY (`MaDV`) REFERENCES `DICH_VU_DI_KEM` (`MaDV`);

ALTER TABLE `CHI_TIET_SU_DUNG_DV` ADD FOREIGN KEY (`MaDatPhong`) REFERENCES `DAT_PHONG` (`MaDatPhong`);

INSERT INTO KHACH_HANG(MaKH, TenKH, DiaChi, SoDT) VALUES ('KH0001', 'Nguyen Van A', 'Hoa Xuan', '1111111111');
INSERT INTO KHACH_HANG(MaKH, TenKH, DiaChi, SoDT) VALUES ('KH0002', 'Nguyen Van B', 'Hoa hai', '1111111112');
INSERT INTO KHACH_HANG(MaKH, TenKH, DiaChi, SoDT) VALUES ('KH0003', 'Nguyen Van A', 'Cam le', '1111111113');
INSERT INTO KHACH_HANG(MaKH, TenKH, DiaChi, SoDT) VALUES ('KH0004', 'Nguyen Van A', 'Hoa Xuan', '1111111114');

INSERT INTO PHONG(MaPhong, LoaiPhong, SoKhachToiDa, GiaPhong) VALUES('P0001', 'Loai 1', 20, 60000);
INSERT INTO PHONG(MaPhong, LoaiPhong, SoKhachToiDa, GiaPhong) VALUES('P0002', 'Loai 1', 25, 80000);
INSERT INTO PHONG(MaPhong, LoaiPhong, SoKhachToiDa, GiaPhong) VALUES('P0003', 'Loai 2', 15, 50000);
INSERT INTO PHONG(MaPhong, LoaiPhong, SoKhachToiDa, GiaPhong) VALUES('P0004', 'Loai 3', 20, 50000);

INSERT INTO DAT_PHONG(MaDatPhong, MaPhong, MaKH, NgayDat, GioBatDau, GioKetThuc, TienDatCoc, TrangThaiDat) VALUES('DP0001', 'P0001', 'KH0002', '2018-03-26', '11:00:00', '13:30:00', 100000, 'Da dat');
INSERT INTO DAT_PHONG(MaDatPhong, MaPhong, MaKH, NgayDat, GioBatDau, GioKetThuc, TienDatCoc, TrangThaiDat) VALUES('DP0002', 'P0001', 'KH0003', '2018-03-27', '17:15:00', '19:15:00', 50000, 'Da huy');
INSERT INTO DAT_PHONG(MaDatPhong, MaPhong, MaKH, NgayDat, GioBatDau, GioKetThuc, TienDatCoc, TrangThaiDat) VALUES('DP0003', 'P0002', 'KH0002', '2018-03-26', '20:30:00', '22:15:00', 100000, 'Da dat');
INSERT INTO DAT_PHONG(MaDatPhong, MaPhong, MaKH, NgayDat, GioBatDau, GioKetThuc, TienDatCoc, TrangThaiDat) VALUES('DP0004', 'P0003', 'KH0001', '2018-04-01', '19:30:00', '21:15:00', 200000, 'Da dat');

INSERT INTO DICH_VU_DI_KEM(MaDV, TenDV, DonViTinh, DonGia) VALUES ('DV0001', 'Beer', 'lon', 10000);
INSERT INTO DICH_VU_DI_KEM(MaDV, TenDV, DonViTinh, DonGia) VALUES ('DV0002', 'Nuoc ngot', 'lon', 8000);
INSERT INTO DICH_VU_DI_KEM(MaDV, TenDV, DonViTinh, DonGia) VALUES ('DV0003', 'Trai Cay', 'dia', 35000);
INSERT INTO DICH_VU_DI_KEM(MaDV, TenDV, DonViTinh, DonGia) VALUES ('DV0004', 'Khan uot', 'cai', 2000);


INSERT INTO CHI_TIET_SU_DUNG_DV(MaDatPhong, MaDV, SoLuong) VALUES ('DP0001', 'DV0001', 20);
INSERT INTO CHI_TIET_SU_DUNG_DV(MaDatPhong, MaDV, SoLuong) VALUES ('DP0001', 'DV0003', 3);
INSERT INTO CHI_TIET_SU_DUNG_DV(MaDatPhong, MaDV, SoLuong) VALUES ('DP0001', 'DV0002', 10);
INSERT INTO CHI_TIET_SU_DUNG_DV(MaDatPhong, MaDV, SoLuong) VALUES ('DP0002', 'DV0002', 10);
INSERT INTO CHI_TIET_SU_DUNG_DV(MaDatPhong, MaDV, SoLuong) VALUES ('DP0002', 'DV0003', 1);
INSERT INTO CHI_TIET_SU_DUNG_DV(MaDatPhong, MaDV, SoLuong) VALUES ('DP0003', 'DV0003', 2);
INSERT INTO CHI_TIET_SU_DUNG_DV(MaDatPhong, MaDV, SoLuong) VALUES ('DP0003', 'DV0004', 10);
INSERT INTO CHI_TIET_SU_DUNG_DV(MaDatPhong, MaDV, SoLuong) VALUES ('DP0003', 'DV0004', 9);

-- Câu 1: Liệt kê MaDatPhong, MaDV, SoLuong của tất cả các dịch vụ có số lượng lớn hơn 3 và nhỏ hơn 10


SELECT * FROM CHI_TIET_SU_DUNG_DV WHERE SoLuong > 3 AND
 SoLuong < 10;

-- Câu 2: Cập nhật dữ liệu trên trường GiaPhong thuộc bảng PHONG tăng lên 10,000 VNĐ so với giá phòng hiện tại, chỉ cập nhật giá phòng của những phòng có số khách tối đa lớn hơn 10

UPDATE PHONG SET GiaPhong = GiaPhong + 10000 WHERE SoKhachToiDa > 10;

-- Câu 3: Xóa tất cả những đơn đặt phòng (từ bảng DAT_PHONG) có trạng thái đặt (TrangThaiDat) là “Da huy”

DELETE FROM CHI_TIET_SU_DUNG_DV WHERE MaDatPhong IN (
    SELECT MaDatPhong FROM DAT_PHONG WHERE TrangThaiDat = 'Da huy'
);
DELETE FROM DAT_PHONG WHERE TrangThaiDat = 'Da huy';
-- Câu 4: Hiển thị TenKH của những khách hàng có tên bắt đầu là một trong các ký tự “H”, “N”, “M” và có độ dài tối đa là 20 ký tự
SELECT TenKH FROM KHACH_HANG WHERE (TenKH LIKE 'H%' or TenKH LIKE 'N%' or TenKH LIKE 'M%') AND LENGTH(TenKH) <= 20;

-- Câu 5: Hiển thị TenKH của tất cả các khách hàng có trong hệ thống, TenKH nào trùng nhau thì chỉ hiển thị một lần

SELECT DISTINCT TenKH FROM KHACH_HANG;


-- Câu 6: Hiển thị MaDV, TenDV, DonViTinh, DonGia của những dịch vụ đi kèm có DonViTinh là “lon” và có DonGia lớn hơn 10,000 VNĐ hoặc những dịch vụ đi kèm có DonViTinh là “Cai” và có DonGia nhỏ hơn 5,000 VNĐ

SELECT *
FROM
  DICH_VU_DI_KEM
WHERE
  (
    DonViTinh = 'lon'
    AND DonGia > 10000
  )
  OR (
    DonViTinh = 'Cai'
    AND DonGia < 5000
  );

-- Câu 7: Hiển thị MaDatPhong, MaPhong, LoaiPhong, SoKhachToiDa, GiaPhong, MaKH, TenKH, SoDT, NgayDat, GioBatDau, GioKetThuc, MaDichVu, SoLuong, DonGia của những đơn đặt phòng có năm đặt phòng là “2016”, “2017” và đặt những phòng có giá phòng > 50,000 VNĐ/ 1 giờ


SELECT
  DP.MaDatPhong,
  DP.MaPhong,
  P.LoaiPhong,
  P.SoKhachToiDa,
  P.GiaPhong,
  DP.MaKH,
  KH.TenKH,
  KH.SoDT,
  DP.NgayDat,
  DP.GioBatDau,
  DP.GioKetThuc,
  CTDV.MaDV,
  CTDV.SoLuong,
  DV.DonGia
FROM
  DAT_PHONG AS DP
  JOIN PHONG AS P ON DP.MaPhong = P.MaPhong
  JOIN KHACH_HANG AS KH ON DP.MaKH = KH.MaKH
  JOIN CHI_TIET_SU_DUNG_DV AS CTDV ON DP.MaDatPhong = CTDV.MaDatPhong
  JOIN DICH_VU_DI_KEM AS DV ON CTDV.MaDV = DV.MaDV
WHERE
  YEAR (DP.NgayDat) IN (2016, 2017)
  AND P.GiaPhong > 50000;