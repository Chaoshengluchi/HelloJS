var arr = [2,'str',true];
arr.push("abc")//增加元素到数组末尾
arr.pop();//删除数组末尾元素
arr.shift();//删除数组最前面的元素
arr.unshift("qwe");//增加元素到数组前端
arr.splice(0,0,"asd");//在索引之间插入数组数据
arr.splice(0,2);//删掉索引1到2，0代表索引0
arr.splice(3,0,"werty");//在索引3的数据后面插入“werty”，0的意思是不删除
console.log(arr);

//在输出结果语句之前，所有语句会顺序执行一遍

var index = arr.indexOf(true);//找到元素2在数组中的索引（游标）
console.log(index);

var arr = false;
console.log(arr.toString());

var arr = new Boolean(true);
console.log(arr);//为什么输出的值是[Boolean: true]?

var age = 18;
console.log(age);
console.log(age.toString());//为什么输出的值是18，难道这个18跟赋值的18是不一样，这是一个字符串，在用到字符串的情况下可以引用？

var config = {
    height: 170,
    weight: 120,
    sex: 'man',
    age: 18
} // 对象里面的各个属性
console.log('-----  小明的基本信息 -----');
console.log(config)// 对象输出有花括号，如果不用花括号需要用到if语句？怎么写？

console.log('\n----- 修改小明的性别 -----');
config.sex = 'woman';//修改对象属性值的方法，对象名.属性名 = 修改值，如果没有对象，则变成单一的定义变量赋值
console.log(config);

console.log('\n-----  增加小明的属性（血型）');
config.bloodType = 'A';
console.log(config);
// vscode的终端运行log怎么一键清理？

console.log('\n----- 删除小明的年龄 -----');
delete config.age;
console.log(config);
// 语句后面的分号实际运行过程中没有发现有什么作用，分号表示语句结束

config.run = function () {
    console.log('\n##### function #####');
    console.log('I am running');
}
config.run();//为什么不写成console.log(config.run());？
console.log(config.run());
// 为什么定义了一个变量run 不写成var config.run = function () {}?
// 为什么在输出结果时console.log后面的括号里面不是config.run而是config.run()

console.log('\n----- config -----');
console.log(config);
//为什么输出的结果里run: [Function] ？不是I am running？
//为什么输出的结果有大括号，而且是按照代码格式排列的？

console.log('\n##########');
console.log('我是分界线');
console.log('############');

var config2 = {
    height: 170,
    weight: 120,
    sex: 'man',
    age: 18,
    run: function () {
        console.log('\n##### function #####');
        console.log('I am running');
    }
}
//这个是一个嵌套函数吗？跟直接返回间接返回？异步函数？()到底是什么意思？
config2.run();//为什么不用console.log(config2.run);?

console.log('\n');

console.log(config2.run());//为什么既有正确的返回值又有undefined?

console.log('\n');

function callback() {
    console.log('我跑完了');
}// 定义函数callback

function run(cb) {
    console.log('lalalala');
    cb();
}//定义函数run，run接收一个函数类型的参数，当执行完动作后，调用该函数
//什么叫一个函数类型的参数？什么是参数？括号里面的就是参数？该参数实际是一个函数，所以叫函数类型的参数？

run(callback);//为什么可以直接奏效
//为什么可以直接用cb代替callback？
//为什么没有下一段代码时结果是lalala,我跑完啦，有了下一段代码就变成了lalala,我终于被调用了？

console.log('\n');

function callback(){
    console.log('我终于被调用了');
}
setTimeout(callback,5000);//setTimeout可以不用定义就可以用？
//为什么是5000不是5s？

function checkFlightSchedule() {
    console.log('开始查航班信息');
//如下面这段代码，定义了一个对象，对象名scheduleInfo后面是没有括号的，而checkFlightSchedule后面却有括号，括号的作用到底是什么？
var scheduleInfo = {
    start: '8/23 8:00',
    end: '8/23 10:30',
    from: 'beijing',
    to: 'hangzhou'
};//花括号后面要不要写分号？
//return scheduletInfo.start; 
}
// 这跟console.log(scheduleInfo.start)有什么区别？直接运行无效

//console.log(scheduleInfo.start); 
//为什么返回结果里面多了一句：我终于被调用了？为啥这句备注写在代码后面会被程序运行到？

var startTime = checkFlightSchedule();
console.log(startTime);

function checkFlightSchedule(callback){
    console.log('开始查航班信息');
    var scheduleInfo = {
        start: '8/23 8:00',
        end: '8/23 10:30',
        from: 'beijing',
        to: 'hangzhou'
    };
    return(scheduleInfo.start);
}//var部分能否提到外面来写？
function callback(startTime) {
    console.log(startTime)
}
checkFlightSchedule(callback);
