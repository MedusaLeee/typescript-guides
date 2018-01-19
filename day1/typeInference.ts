/*类型推导*/
// 只声明变量不指定类型 默认类型是any, 可以随意赋值不会出错，相当于let param: any
let param;
param = 1;
param = 'aa';
console.log(param);

// 指明变量类型后赋值其他类型编译将会出错
let param2 : number;

param2 = 1; // 没问题
// param2 = 'aa'; // 报错，无法编译成功