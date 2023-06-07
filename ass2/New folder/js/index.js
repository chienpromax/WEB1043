var images = [
  "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/03/banner/mi12-720-220-720x220.png",
  "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/03/banner/oppo-flip-720-220-720x220-2.png",
  "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/03/banner/D13B1901-57CE-48D5-9237-7A52A387A645-720x220.png",
  "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/03/banner/a54-720-220-720x220-19.png",
  "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/03/banner/720x220-720x220-9.jpg",
  "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/03/banner/chungr-MSI-720-220-720x220-1.png",
];
var num = 0;
var t;
function aotu() {
  t = window.setInterval(next, 3000);
}

function next() {
  var slider = document.getElementById("slider");
  num++;
  if (num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
}

function prev() {
  var slider = document.getElementById("slider");
  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  slider.src = images[num];
}
function Search() {
  var tim = document.getElementsByName("tim")[0];
  alert(`thông tin: ${tim.value} chưa cập nhật`);
}

// Thiết lập thời gian đích mà ta sẽ đếm
var countDownDate = new Date("Apr 18, 2023 15:37:25").getTime();
// cập nhập thời gian sau mỗi 1 giây
var x = setInterval(function () {
  // Lấy thời gian hiện tại
  var now = new Date().getTime();
  // Lấy số thời gian chênh lệch
  var distance = countDownDate - now;
  // Tính toán số ngày, giờ, phút, giây từ thời gian chênh lệch
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // HIển thị chuỗi thời gian trong thẻ p
  document.getElementById("time").innerHTML =
    "GIỜ VÀNG DEAL SỐC " +
    "còn: " +
    hours +
    "H : " +
    minutes +
    "P : " +
    seconds +
    " S";
  // Nếu thời gian kết thúc, hiển thị chuỗi thông báo
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "Thời gian sale kết thúc";
  }
}, 1000);
