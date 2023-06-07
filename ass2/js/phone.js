var images = [
    "https://cdn.tgdd.vn/Products/Images/42/251192/Slider/iphone-14-pro-max-thumb-1020x570.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/251192/Slider/iphone-14-pro-max-tong-quan-1020x570.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/251192/Slider/vi-vn-iphone-14-pro-max-2.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/251192/Slider/iphone-14-pro-max-camera-1020x570.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/251192/Slider/vi-vn-iphone-14-pro-max-4.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/251192/Slider/iPhone-14-Pro-slide-1020x570.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/251192/Slider/vi-vn-iphone-14-pro-max-6.jpg"
];
var num = 0;
var t;
function aotu(){
    t = window.setInterval(next, 3000);
}

function next() {
    var slider = document.getElementById("slider");
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}

function prev() {
    var slider = document.getElementById("slider");
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}

var newWindows;
function openWin() {
    newWindows = window.open(
        'https://www.youtube.com/watch?v=8mEsqRWPGWg&t=1s',
        '',
        'menubar = yes, menu = yes, width = 1000, height = 1000',
    );
}