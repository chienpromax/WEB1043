function login() {
  var useName = document.getElementsByName("usename")[0];
  var pass = document.getElementsByName("pass")[0];
  var err = document.getElementById("err");
  if (useName.value == "") {
    err.innerText = "nhập lại usename";
  }
  if (pass.value == "") {
    err.innerText = "nhập lại password";
  }
  if (useName.value != "" && pass.value != "") {
    alert('đăng nhập thành công!');
  location.reload();
  }
}
