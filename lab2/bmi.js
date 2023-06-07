alert("chuong trinh tinh chi so bmi:");
var kg = prompt("hay nhap vao trong luong co the(kg):");
var cao = prompt("hay nhap vao chieu cao(cm):");
var cao1 = cao / 100; //đỏi ra m
var bmi = kg / (cao1 * cao1);
if (isNaN(kg || cao)) {
  alert("hẫy nhập vào số");
} else if (bmi < 18.5) {
  alert("bạn thiếu cân, chỉ số bmi:" + bmi);
} else if (bmi >= 18.5 && bmi < 24.99) {
  alert("bạn bình thường, chỉ số bmi:" + bmi);
} else if (bmi >= 25 && bmi < 29.99) {
  alert("bạn thừa cân:" + bmi);
} else alert(" bạn béo phì, chỉ số bmi:" + bmi);
