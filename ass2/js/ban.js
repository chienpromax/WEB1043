var giohang = new Array();
function themvaogiohang(x) {
  //parentElement xác định cha boxsp .children gọi con
  var boxsp = x.parentElement.children;
  //con thứ 0 của boxsp
  var hinh = boxsp[0].children[0].src;
  //con thứ 1của boxsp con thu 0 cua boximg
  var gia = boxsp[1].children[0].innerText;
  var tensp = boxsp[2].innerText;
  var soluong = parseInt(boxsp[3].value);
  //parseInt chuyển đổi chuỗi thành số
  var sp = new Array(hinh, gia, tensp, soluong);

  //kiểm tra san phẩm
  var kt = 0;
  for (let i = 0; i < giohang.length; i++) {
    if (giohang[i][2] == tensp) {
      //nếu tên sp bằng thì thoát vòng lập
      kt = 1;
      soluong += parseInt(giohang[i][3]);
      giohang[i][3] = soluong;
      break;
    }
  }
  if (kt == 0) {
    giohang.push(sp);
    //push thêm sản phẩm trong mảng
  }
  showcountsp();
  //lưu giỏ hàng
  sessionStorage.setItem("giohang", JSON.stringify(giohang));
  //sessionStorage luu dữ liệu tạm thời trong tab
  //setItem Lưu key gio hang có giá trị là JSON.stringify(giohang) sessionStorage.
  //SON.stringify  chép một Object mà không ảnh hưởng đến Object cũ.
}
function showcountsp() {
  document.getElementById("countsp").innerHTML=giohang.length;
}
document.getElementById("showcart").style.display = "none";
function showcart() {
  var x = document.getElementById("showcart");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    showmycart();
  }
}
function showmycart() {
  var ttgh = "";
  var tong = 0;
  for (let i = 0; i < giohang.length; i++) {
    //parseInt(giohang[i][1]) chuyển đổi chứ thành số
    var tt = parseInt(giohang[i][1]) * parseInt(giohang[i][3]);
    tong += tt;
    ttgh +=
    //tr hàng td ô
      "<tr>" +
      "<td>" +(i + 1) +"</td>" +
      '<td><img src="' +giohang[i][0] +'" alt=""></td>' +
      "<td>" +giohang[i][2] +"</td>" +
      "<td>" +giohang[i][1] +"</td>" +
      "<td>" +giohang[i][3] +"</td>" +
      "<td>" +
      "<div>" + tt +"</div>" +
      "</td>" +
      "<td>" +'<button onclick="xoasp(this)">xóa</button>' +
      "</td>" +
      "</tr>";
  }
  ttgh +=
    "<tr>" +'<th colspan="6">tong don hang</th>' +"<th>" +
    "<div>" +tong +"</div>" +
   "</th>" +
    "</tr>";
  document.getElementById("mycart").innerHTML = ttgh;
}

function xoasp(x) {
  //xoa tr
  var tr = x.parentElement.parentElement;
  //x > parentElement = tr > parentElement = td
  var tensp = tr.children[2].innerText;
  tr.remove();
  // //xoasp trong mang
  for (let i = 0; i < giohang.length; i++) {
    if(giohang[i][2] == tensp){
      giohang.splice(i, 1);
      //splice thay đổi giá trị của một mảng, thêm các phần tử mới trong khi gỡ bỏ các phần tử cũ.
    }
  }
  showmycart();
  showcountsp();
}
function xoahet(){
  giohang = [];
  showmycart();
  showcountsp();
  location.reload();
}
function showgiohang_thanhtoan() {
  var gh = sessionStorage.getItem("giohang");
  //sessionStorage luu dữ liệu tạm thời trong tab
  //getItem Lấy dữ liệu từ sessionStorage
  var giohang = JSON.parse(gh);
  /*JSON.parse() nhận vào một chuỗi JSON và chuyển đổi (transform)
   nó thành một đối tượng JavaScript*/
  var ttgh ="";
  var tong = 0;
  for (let i = 0; i < giohang.length; i++) {
    var tt = parseInt(giohang[i][1]) * parseInt(giohang[i][3]);
    tong += tt;
    ttgh +=
      "<tr>" +
      "<td>" +(i + 1) +"</td>" +
      '<td><img src="' +giohang[i][0] +'" alt=""></td>' +
      "<td>" +giohang[i][2] +"</td>" +
      "<td>" +giohang[i][1] +"</td>" +
      "<td>" +giohang[i][3] +"</td>" +
      "<td>" +
      "<div>" + tt +"</div>" +
      "</td>" +
      "</tr>";
  }
  ttgh +=
    "<tr>" +
    '<th colspan="5">tong don hang</th>' +
    "<th>" +
    "<div>" +tong +"</div>" +
    "</th>" +
    "</tr>";
  document.getElementById("mycart").innerHTML = ttgh;
}
function dathang() {
  var hotenkh = document.getElementsByName("hoten")[0];
  var diachikh = document.getElementsByName("diachi")[0];
  var sdtkh = document.getElementsByName("dienthoai")[0];
  var emailkh = document.getElementsByName("email")[0];
  var err = document.getElementById("err");
  if (hotenkh.value == "") { 
    err.innerText = "nhập lại tên";
    return false;
  }
  if (diachikh.value == "") {
    err.innerText = "nhập lại địa chỉ";
    return false;
  }
  if (sdtkh.value == "") {
    err.innerText = "nhập lại sdt";
    return false;
  }
  if (sdtkh.value < 0) {
    err.innerText = "sdt Nhập sai";
    return false;
  }
  if (emailkh.value == "") {
    err.innerText = "nhập lại email";
    return false;
  }
  if (
    hotenkh.value != "" &&
    sdtkh.value != "" &&
    diachikh.value != "" &&
    emailkh.value != ""
  ) {
    alert(`mua thành công:
       ho ten: ${hotenkh.value}
       dia chi: ${diachikh.value}
       sdt: ${sdtkh.value}
       email: ${emailkh.value}`);
    location.reload();
    return true;
  }
}
