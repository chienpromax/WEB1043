alert("truong trinh doi don vi");
var m = prompt("hay nhap vao met vuong: ");
var sao = m / 360;
var mau = m / 3600;
var ha = mau;
if (isNaN(m)) {
  alert("hay nhap vao so");
} else if (m < 0) {
  alert("nhap lai");
} else
  alert(m + " :m2 | đổi ra sào= " + sao + "| đổi ra mẫu= " + mau + "| đổi ra hecta= " + ha);
