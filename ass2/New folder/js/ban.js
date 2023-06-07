var giohang = new Array();
function themvaogiohang(x) {
  var boxsp = x.parentElement.children;
  var hinh = boxsp[0].children[0].src;
  var gia = boxsp[1].children[0].innerText;
  var tensp = boxsp[2].innerText;
  var soluong = parseInt(boxsp[3].value);
  var sp = new Array(hinh, gia, tensp, soluong);

  //kiểm tra san phẩm
  var kt = 0;
  for (let i = 0; i < giohang.length; i++) {
    if (giohang[i][2] == tensp) {
      kt = 1;
      soluong += parseInt(giohang[i][3]);
      giohang[i][3] = soluong;
      break;
    }
  }
  if (kt == 0) {
    giohang.push(sp);
  }

  console.log(giohang);
  showcountsp();

  //lưu giỏ hàng

  sessionStorage.setItem("giohang", JSON.stringify(giohang));
}
function showcountsp() {
  document.getElementById("countsp").innerHTML = giohang.length;
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
  var tensp = tr.children[2].innerText;
  //alert(tensp);
  tr.remove();
  // //xoasptrongmang
  for (let i = 0; i < giohang.length; i++) {
    if(giohang[i][2] == tensp){
      //xoa 1 phan tu
      giohang.splice(i, 1);
    }
  }
  showmycart();
}

function showgiohang_thanhtoan() {
  var gh = sessionStorage.getItem("giohang");
  var giohang = JSON.parse(gh);
  var ttgh = "";
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
      "<div>" +tt +"</div>" +
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
  var ttnh = document.getElementById("thongtinnhanhang").children;
  var hoten = ttnh[0].children[1].children[0].value;
  var diachi = ttnh[1].children[1].children[0].value;
  var dienthoai = ttnh[2].children[1].children[0].value;
  var email = ttnh[3].children[1].children[0].value;

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
