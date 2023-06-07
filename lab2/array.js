const theList = ['Lauren', 'Kevin', true, 35, null, undefined, ['one', 'two']];
//xoa phan tu dau
theList.shift();
//xoa phan tu cuoi
theList.pop();
//xoa phan tu cuoi
theList.splice(0,1,"FIRST");
//spiile(vi tri bat dau xoa, so luong phan tu xoa)
theList.splice(4,1,"hello");
theList.splice(3,1,"middle");
theList.push("last");
//them phan tu vao cuoi bang
document.write(theList);
