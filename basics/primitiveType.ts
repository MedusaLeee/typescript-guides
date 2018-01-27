/* 基本类型，只列举和javascript不同之处 */
// 所有ts中的基本类型都是any类型的子类,赋值可以是任意类型的值
// 但是无非特殊需要应避免使用any，我们应该准确知道数据的类型
let anyParam: any = 1;
anyParam = 'a'; // ok
anyParam = true; // ok

// array,两种声明方式
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
// list2.push('aa'); 试图将字符串push到number数组中是不允许的

// 类型可以为any，但是这样失去了类型限制的优势
let anyList: Array<any> = [1, 'aa', true];

// 还有一种ReadonlyArray，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改

let readOnlyArr: ReadonlyArray<number> = [1, 2, 3, 4];

// readOnlyArr[1] = 2; // 不能更改

// readOnlyArr.push(5); // 不允许push

// void 类型，理论上any的对立面是void，即所有类型都不存在的时候
// 一般用在函数无返回值时，其实js中的函数都有返回值，默认是undefined

function fun(): void {
    console.log('I have no return value.');
}

// undefined 与 null
// 在js中undefined是全局作用域的一个属性，它会被赋值给哪些被声明但未被初始化的变量
// null不是全局作用域的一个属性，它可以被赋值给那些表示没有值的变量
// 但是在ts中，null和undefined是所有类型的子类型
// --strictNullChecks标记，null和undefined只能赋值给void和它们各自。 这能避免很多常见的问题
// tsc --strictNullChecks primitiveType.js 会异常

let undefinedParam: null;
let nullParam: undefined;

// never类型，是任何类型的子类, 即使 any也不可以赋值给never
// let anyParam2: any = 1;
// let neverParam1: never = anyParam2; // 不能赋值

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

// 类型断言 2种写法
// 定义一个any类型的变量，我在使用时明确知道他是什么类型变量，并进行类型转换，其实只在编译阶段起作用
// 第一种类似java中的类型转换
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// 第二种 as 关键字，个人还是比较喜欢第一种
let someValue2: any = "this is a string";
let strLength2: number = (someValue as string).length;