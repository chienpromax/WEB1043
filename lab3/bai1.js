var a = prompt("toán hạng a");
var b = prompt("toán hạng b");
var o = prompt("toán tử o");
switch (o) {
  case "+":
    var kq =Number(a) + Number(b);
    alert("tổng:" + kq);
    break;
  case "-":
    var kq = a - b;
    alert("hiệu:" + kq);
    break;
  case "*":
    var kq = a * b;
    alert("tích:" + kq);
    break;
  case "/":
    var kq = a / b;
    alert("thương:" + kq);
    break;
  default:
    alert(o + "không phải toán tử");
    break;
}
