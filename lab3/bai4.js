function chon(value) {
  var arrRPS = ['Rock', 'Paper', 'Scissors'];
  var s = arrRPS[Math.floor(Math.random() * 3)];
  var c = arrRPS[value];
  if (c == s) {
      alert(`Bạn: ${c}; Máy: ${s}; Kết quả: Hòa`);
  } else if (c == 'Rock' && s == 'Scissors') {
      alert(`Bạn: ${c}; Máy: ${s}; Kết quả: Bạn thắng`);
  } else if (c == 'Rock' && s == 'Paper') {
      alert(`Bạn: ${c}; Máy: ${s}; Kết quả: Bạn thua`);
  } else if (c == 'Paper' && s == 'Rock') {
      alert(`Bạn: ${c}; Máy: ${s}; Kết quả: Bạn thắng`);
  } else if (c == 'Paper' && s == 'Scissors') {
      alert(`Bạn: ${c}; Máy: ${s}; Kết quả: Bạn thua`);
  } else if (c == 'Scissors' && s == 'Paper') {
      alert(`Bạn: ${c}; Máy: ${s}; Kết quả: Bạn thắng`);
  } else if (c == 'Scissors' && s == 'Rock') {
      alert(`Bạn: ${c}; Máy: ${s}; Kết quả: Bạn thua`);
  }
}
