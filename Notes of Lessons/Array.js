var i = 0, sum = 0;
while (i < 101) {
  sum = sum + i;
  i = i + 1;
}
console.log(sum);
\\ while函数也可以用for来写
for (var i = 0, sum = 0; i < 101; i++){
  sum = sum + i;
}

//数组就是Array类型 JS先申明后赋值

var arr = [1,2,3,4,5]//字面量，“密集数组”,
var arr = new Array()//构造函数，申明一个空数组
var arr = new Array(1,2.3,4,5)//跟第一个一样
var arr = new Array(10)//定义一个长度为10的数组，但值是空的->稀疏数组（数据不确定）
arr.lengtch = 10
var arr = [1,2,3,,4]//稀疏数组
//增删改查

var arr = [2,'str',true];
arr.push("abc")//增加数组数据到数组末尾
arr.unshift("qwe")//增加数组数据到数组前端
arr.splice(0,0,"asd")//在索引之间插入数组数据
arr.splice(0,2)//删掉索引1到2，0代表索引0
arr.splice(3,0,"werty")//在索引3的数据后面插入“werty”，0的意思是不删除
console.log(arr)
