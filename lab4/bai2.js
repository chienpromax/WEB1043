var sinhVien = new Object();
sinhVien.hoTen = prompt("Họ và tên: ");
sinhVien.diem = prompt("Nhập điểm: ");
sinhVien.hienThi = function () {
  this.diem >= 5 ? (this.hocLuc = "đậu") : (this.hocLuc = "Rớt");
  document.write("<h3>Họ và tên: " + this.hoTen + "</h3>");
  document.write("<h3>Điểm TB: " + this.diem + "</h3>");
  document.write("<h3>Học lực: " + this.hocLuc + "</h3>");
};
