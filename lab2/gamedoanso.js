var a = prompt("nhap vào số ngẫu nhiên");
if(a>15 ||a<0){
    alert("ban nhap sai");
}else{
var x = 10 + Math.round(5 * Math.random());
if (a == x) {
  alert("bạn đã đoán đúng");
} else if (a > x) {
  alert("số bạn đoán lớn hơn số may mắn");
} else {
  alert("số bạn đoán nhỏ hơn số máy mắn");
}
}


