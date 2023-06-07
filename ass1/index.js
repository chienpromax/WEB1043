var images = [
    "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/03/banner/mi12-720-220-720x220.png",
    "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/03/banner/oppo-flip-720-220-720x220-2.png",
    "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/03/banner/D13B1901-57CE-48D5-9237-7A52A387A645-720x220.png",
    "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/03/banner/a54-720-220-720x220-19.png",
    "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/03/banner/720x220-720x220-9.jpg",
    "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/03/banner/chungr-MSI-720-220-720x220-1.png"
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