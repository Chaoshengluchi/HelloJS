/*
* 表达式语句/赋值语句
*/

var age = 18;
var myLikeColorsList = ['blue', 'green', 'black', 'write'];// 数组输出结果会带[]
var myLikeColorList = ('blue', 'green', 'black', 'white');// 输出结果是“white”，此时相当于赋值变量，并且取的是最后一个数据
//变量名不可以是特殊字符，但是可以是$，_proto_ ，一个下划线也可以

console.log('\n');// 引号必不可少，\n是换行符
/*
* 条件语句 -- if
*/

if (age >= 18) {
  console.log('已成年');
} else {
  console.log('未成年');
}
//表达式？语句？意思是：如果age >= 18为true就运行花括号里面的内容，如果age >= 18为false就运行else后面的内容
//这里的花括号的语义是组织复合语句
//分号是不是必要的？分号的作用是结束一个语句。花括号里最后一个语句可以分号也可以不分号。html没有标点，css没有分号，.用于调用方法，如console.log
//else前面可以空格也可以不空格

console.log('\n');
/*
* 条件语句 -- switch
*/

//一个等号=，是赋值；两个等号==，是值相等；三个等号===，是指类型和值都相等

switch (age >= 18) {
  case true:
    console.log('已成年');
    break; // 退出循环
  case false:
    console.log('未成年');
    break; // 退出循环
  default:
    console.log('not a human');
}

// 上面的switch代码是否存在逻辑问题？//有逻辑错误，如果age等于一个负数，会得到“未成年”的答案，而显然age不能为负。

var age = 18;
switch (age >= 18) {
  case true:
    console.log('已成年');
    break; // 退出循环 // break的意思就是跳出语句，也就是如果age >= 18为true将输出结果“已成年”，此时不再继续执行下一个代码
  case false:
   switch (age > 0){
    case true:
     console.log('未成年');
     break;
    case false:
     console.log('not a human');
     break; 
   }
    break; // 退出循环
  default:
    console.log('not a human');//这段代码还有必要吗？
}

//  换个例子：
var a = 1;
var b = 3;
if( a == 1){
 console.log(a + b);
}else if(a == 2){
 console.log(a * b);
}else if( a == 3){
 console.log(a / b);
}

switch(a){
 case 1:
  console.log(a + b);
  break;
 case 2：
  console.log(a * b);
  break;
 case 3:
  console.log(a / b);
  break;
 default:
  continue;  
}


console.log('\n');
/*
* 循环语句-for
*
* 循环语句的三要素
* 1. 循环开始的初始化变量 var i = 0; 
* 2. 循环条件 i < myLikeColorsList.length;
* 3. 计数器变量更新 i++;
*/

for (var i = 0; i < myLikeColorsList.length; i++) {
  console.log(myLikeColorsList[i]);
}
 // for函数的格式是for () {}, 小括号里面包括三个表达式，第一个是申明变量，第二个是判断条件，第三个是运算（累加累减），中间用分号隔开

// 等价于下面(把初始化变量提前)

var i = 0;// 小括号里面的申明是可以拿出来的，但是判断条件是不能拿出来的
for (; i < myLikeColorsList.length; i++) {
  console.log(myLikeColorsList[i]);
}

// 等价于下面(把初始化变量提前，把计数器的自增放在循环体内)

var i = 0;
for (; i < myLikeColorsList.length;) {
  console.log(myLikeColorsList[i]);
  i = i + 1; // i++;
}
//这里用了length，意思是把colorlist里面的全部数据都运行一遍。如果只运行前三个可以直接写成i < myLikeColorList.length-1或者i < 3
//意思是将满足条件的数据都执行一遍，每次都会输出一个结果，所以最后会输出所有的颜色，逻辑是先判断再执行语句块再累加累减

// 初始化变量可以是多个，计数器变量更新也可以是多个
for (var i =0, j = 0; i < myLikeColorsList.length; i++, j++) {
  console.log('种类' + j);
  console.log(myLikeColorsList[i]);
}

// 创新的轮询数组的技巧
// 两头同时轮询，轮询时间只用到了一半。
for (var i =0, j = myLikeColorsList.length - 1; i < myLikeColorsList.length /2 ; i++, j--) {
  console.log(myLikeColorsList[i]);
  console.log(myLikeColorsList[j]);
}
// 索引从0开始，先执行一次结果，再累加累减。此代码中循环共运行了两次，第一次是i = 0， j =3，第二次是i = 0 + 1，j == 3 - 1

console.log('\n');

/*
* 循环语句 -- while
* 只要满足while的条件，就会循环执行循环体的代码
*/

var i = 0;
while (i < myLikeColorsList.length) {
  console.log(myLikeColorsList[i]);
  i = i + 1; // i++;
}

/*
* 循环语句 -- do while
* 只要满足while的条件，就会循环执行循环体的代码
*/

var a = 0 , sum = 0;
do{
 var sum = sum+a;
 a++;
}while(a < 101)
console.log(sum);

var a = 0, sum = 0;
while (a < 101) {
  sum = sum + a;
  a = a + 1;
}
console.log(sum);

// do while是先执行大括号，再执行while。while是先执行小括号
