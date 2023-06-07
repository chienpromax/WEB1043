var main = [];
var item1 = {
    name: 'Sản Phẩm 1',
    module: 'laptop',
    cost: 500000,
    quantity: 50,
};
var item2 = {
    name: 'Sản Phẩm 2',
    module: 'dien thoai',
    cost: 200000,
    quantity: 10,
};
var item3 = {
    name: 'Sản Phẩm 3',
    module: 'ban phim',
    cost: 300000,
    quantity: 40,
};
main.push(item1);
main.push(item2);
main.push(item3);
function xuat(arr) {
    for (const item of arr) {
        console.log(item);
    }
}
xuat(main);
for (var i = 0; i < main.length; i++) {
    if (i == 2) {
        console.log(main[i].quantity);
    }
}
var item4 = {
    name: 'Sản Phẩm 4',
    module: 'chuot',
    cost: 100000,
    quantity: 100,
};
main.push(item4);
xuat(main);
