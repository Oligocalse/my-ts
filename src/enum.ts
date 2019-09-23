// ts的枚举类型

// 数字枚举
enum Role {
    worker = 100,
    manager,
    boss,
    wife,
    money
}

// console.log(Role.worker)    // 100
// console.log(Role[100])      // 'worker'
// console.log(Role[0])        // 'undefined'
// console.log(Role)

// 枚举成员的值在定义之后无法修改！！ read-only
// Role.worker = 1 //  报错

// 字符串枚举   在字符串枚举中，不能使用反向映射取值，因为字符串枚举值的不确定性，所以反向映射取值没有意义
enum Message {
    SUCCESS = '你成功了',
    FAIL = '你失败了'
}

// console.log(Message)
// console.log(Message.SUCCESS)    // '你成功了'

// 异构枚举
enum Diff {
    N,
    Y = 'YES'
}

// console.log(Diff)
// console.log(Diff.N)     // 0
// console.log(Diff.Y)     // 'YES'

// 枚举成员
enum Char {
    // const member => 常量
    a,
    b = 0,
    c = Char.a,
    d = 1 + 2,
    g,

    // computed member => 需要计算的值【非常量的表达式】
    e = Math.random(),
    f = '123'.length,

    // 在 computed member 之后不可以再添加 const member, 否则会提示需要一个初始值；
    // 所以需要将 const member 统一写在 computed member 之前
}

// console.log(Char)

// 常量枚举  特性是在编译之后就会消失，只能在 属性、索引访问表达式、导入声明的右侧或导出分配中使用。 
// 可以节省编译后的代码空间
const enum Month {
    Jan,
    Feb,
    Mar
}

// console.log(Month);
const month = [Month.Jan, Month.Feb, Month.Mar];    // 会被直接替换为常量
// console.log(month);