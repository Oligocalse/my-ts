function fn(x: number, y: number) {
    return x + y
}

let fn1: (x: number, y: number) => number;      // 通过变量来定义函数类型

type fn2 = (x: number, y: number) => number;    // 通过类型别名来定义函数类型

interface fn3 {                                 // 通过接口来定义函数类型
    (x: number, y: number): number;
}

// 这是定义函数的四种方式
// 需要注意的是，只有第一种是定义了一个具体的函数
// 其它三种都是定义了一个函数类型，还需要具体的函数实现

let fnReal: fn2 = (a: number, b: number) => a + b;

// console.log(fnReal(1, 2))
// console.log(fn1(2,3))
// fn(1)    // 会报错，因为声明函数的时候要求必须传入两个参数

// 可选参数

function fn4(x: number, k: string, y?: number, z?: number) {
    // 在参数后面加 ? 表示可选参数 【需要注意的是，可选参数必须在参数列表的最后，否则报错】
    // 还有一种情况是，存在多个可选参数，那么这些参数都必须写在最后，各个可选参数之间没有顺序要求
    return y ? x + y : x;
}

// 为函数提供默认值

function fn5(x: number, y = 0, z: number, q = 1) {
    return x + y + x + q;
}

// console.log(fn5(1, undefined, 3)) // => 1 + 0 + 3 + 1 = 5   // 在必选参数之前的参数【或者本身就是必选参数】，如果需要使用默认值，则必须传入undefined

// 剩余参数
// 剩余参数的写法与es6中类似，使用 ...rest 代替 => 需要注意的是，剩余参数是一个数组【可以为这个数组指定类型】
function fn6(x: number, ...rest: number[]) {
    return x + rest.reduce((pre, cur) => pre + cur);
}

// console.log(fn6(1, 2, 3, 4, 5));    // 15

// 函数重载 => 为了解决什么问题？ => 需要声明多个函数去做功能类似的事情

// ts的函数重载要求先定义一系列名称相同的函数声明 => 声明列表 => 将参数类型约束为 string[] 和 number[]
// 声明列表的顺序需要是 最容易匹配的放在最前面，最宽泛的匹配【对类型和返回值没有要求 => any】放在最后面
// function fn7(...rest: number[]): number;
// function fn7(...rest: string[]): string;
// function fn7(...rest: any[]): any {
//     const first = rest[0];
//     if (typeof first === 'string') {
//         return rest.join('')
//     }

//     if (typeof first === 'number') {
//         return rest.reduce((pre, cur) => pre + cur);
//     }

//     if (typeof first === 'undefined') {
//         throw new Error('need params')
//     }
// }

// console.log(fn7(1, 2, 3));
// console.log(fn7('a', 'b', 'c'));
// console.log(fn7());

// 以下存疑
// function add8(...rest: number[]): number;
// function add8(...rest: string[]): string;
// function add8(...rest: number[] | string[]): number | string {
//   let first = rest[0]
//   if (typeof first === 'string') {
//     return rest.join('')
//   }
//   if (typeof first === 'number') {
//     return (rest).reduce((pre: any, cur: any) => pre + cur)
//   }
// }
// console.log(add8(1,2,3))
