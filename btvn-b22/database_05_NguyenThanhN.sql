CREATE DATABASE database_05_NguyenThanhNam;

USE database_05_NguyenThanhNam;
CREATE TABLE `KHACH_HANG` (
  `MaKH` varchar(10) PRIMARY KEY,
  `TenKH` varchar(50),
  `DiaChi` varchar(50),
  `SoDT` varchar(15) UNIQUE
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

ALTER DATABASE database_04_NguyenThanhNam CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

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
INSERT INTO DAT_PHONG(MaDatPhong, MaPhong, MaKH, NgayDat, GioBatDau, GioKetThuc, TienDatCoc, TrangThaiDat) VALUES('DP0005', 'P0001', 'KH0002', '2018-03-26', '11:00:00', '13:40:00', 100000, 'Da dat');
INSERT INTO DAT_PHONG(MaDatPhong, MaPhong, MaKH, NgayDat, GioBatDau, GioKetThuc, TienDatCoc, TrangThaiDat) VALUES('DP0006', 'P0001', 'KH0002', '2018-02-26', '11:00:00', '13:40:00', 100000, 'Da dat');

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


-- CÂU 1
SELECT 
    DP.MaDatPhong,
    DP.MaPhong,
    P.LoaiPhong,
    P.GiaPhong,
    KH.TenKH,
    DP.NgayDat,
    TIME_TO_SEC(TIMEDIFF(DP.GioKetThuc, DP.GioBatDau)) / (60 * 60) * P.GiaPhong AS `TỔNG TIỀN HÁT`,
    if(SUM(DVDK.DonGia * CTSD.SoLuong) , SUM(DVDK.DonGia * CTSD.SoLuong), 0 ) AS `tiền sử dụng dv`,
    TIME_TO_SEC(TIMEDIFF(DP.GioKetThuc, DP.GioBatDau)) / (60 * 60) * P.GiaPhong + if(SUM(DVDK.DonGia * CTSD.SoLuong) , SUM(DVDK.DonGia * CTSD.SoLuong), 0 ) as `tổng tiền`
    
FROM
    DAT_PHONG AS DP
    JOIN PHONG AS P ON DP.MaPhong = P.MaPhong
    JOIN KHACH_HANG AS KH ON DP.MaKH = KH.MaKH
    LEFT JOIN CHI_TIET_SU_DUNG_DV AS CTSD ON DP.MaDatPhong = CTSD.MaDatPhong
    LEFT JOIN DICH_VU_DI_KEM AS DVDK ON CTSD.MaDV = DVDK.MaDV

GROUP BY DP.MaDatPhong;


-- CAU 2
SELECT
    KH.*
FROM
    KHACH_HANG AS KH
    JOIN DAT_PHONG AS DP ON KH.MaKH = DP.MaKH
WHERE KH.DiaChi = 'Hoa Xuan';
-- CÂU 3
SELECT
    P.*,
    COUNT(DP.MaPhong) AS SoLanDat
FROM
    PHONG AS P
    JOIN DAT_PHONG AS DP ON P.MaPhong = DP.MaPhong

WHERE DP.TrangThaiDat LIKE 'Da dat'
GROUP BY
P.MaPhong
HAVING SoLanDat > 2;