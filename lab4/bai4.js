var newWindows;
function openWin() {
    newWindows = window.open(
        'https://www.youtube.com/@MixiGaming89',
        '',
        'menubar = yes, menu = yes, width = 1000, height = 1000',
    );
}
function closeWindow() {
    if (newWindows) {
        newWindows.close();
    }
}
function checkWindow() {
    if (newWindows) {
        if (newWindows.closed) {
            alert('Cửa sổ đã đóng');
        } else {
            alert('Cửa sổ chưa đóng');
        }
    }
}
