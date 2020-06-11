// 泛型：不预先确定的数据类型，具体的类型在使用的时候才能确定

// 函数泛型

// 用泛型定义函数
function log<T>(value: T): T {
    console.log(value);
    return value;
}

// 在调用函数的时候，指定函数参数的数据类型
log<string[]>(['1', '2'])
// 或者利用 ts 的类型推断，不用指定参数的类型
log(['1', '2'])


// 用泛型来定义函数类型

// type Log = <T>(value: T) => T;
// let myLog: Log = <T>(value: T): T => {
//     console.log(value)
//     return value
// }

// myLog('a')

// 泛型接口
interface Log {
    <T>(value: T): T  // 使用泛型约束一个属性/方法
}

interface MyLog<T> {     // 用泛型变量约束接口中的全部成员，在实现的时候，就需要去指定类型
    // 可以给泛型指定一个默认类型，那么在实现的时候就可以不去指定类型
    (value: T): T
}

let myLog: MyLog<number> = (value) => { // 由于此处存在泛型对函数接口的约束，所以这个函数的参数类型都是number，ts可以自动推导出参数类型
    // 不指定函数参数的类型时，类型默认是 string
    return value
}

// myLog(1)    // 类型“1”的参数不能赋给类型“string”的参数
myLog(1)