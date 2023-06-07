var bieuThuc = "";
function lamLai() {
  thucHienLai();
}
function hamToanTu(pt) {
  bieuThuc = bieuThuc + pt;
}
function hamToanHam(x) {
  bieuThuc = bieuThuc + x;
}
function thucHien() {
  var kq = eval(bieuThuc);
  bieuThuc = "";
  alert("kết quả : " + kq);
}
function thucHienLai() {
  var kq = eval(bieuThuc);
  bieuThuc = "";
  alert("hay nhập lại");
}

