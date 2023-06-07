alert("chuong trinh tinh canh huyen cua tam giac:");
var a = prompt("hay nhap vao a:");
var b = prompt("hay nhap vao b:");
if (isNaN(a || b)) {
    alert("hay nhap vao so");
} else {
    var c = (a * a + b * b);
    const canh = Math.sqrt(c, 2);
    alert("canh huyen tam giac la: " + canh);
}