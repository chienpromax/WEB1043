setTimeout(() => {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    document.write(h + ':' + m + ':' + s);
    location.reload();
}, 1000);
