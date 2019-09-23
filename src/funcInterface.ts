// let minus = (x: number, y: number): number => x - y;    // 声明函数的一种方式

// interface Add {
//     (x: number, y: number): number;     // 接收两个number类型的参数 x, y ，并且这个函数的返回值是number 类型
// }

// 或者是使用 类型别名声明一种函数类型，

type Minus = (x: number, y: number) => string;

// 再通过这个函数类型实现具体的函数

let minus: Minus = (a, b) => `${a}` + b;     // 指定 minus 是 Minus 类型的函数, 且无法改变参数的类型和函数的返回值，否则报错

// 混合类型接口
// 指的是一个接口既可以像函数一样拥有返回值，也可以像对象一样，拥有自己的属性和方法

interface Lib {
    (): void;
    version: string;
    logVersion(): string;
}

function getLib() {
    let lib: Lib = (() => { }) as Lib;  // 使用类型断言保证不会报错
    lib.version = '1.0';
    lib.logVersion = () => lib.version || '';

    return lib;
}

console.log(getLib().logVersion());     // 1.0