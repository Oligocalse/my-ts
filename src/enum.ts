// ts的枚举类型

// 为了解决 可读性差（很难记住数字的含义）/可维护性差（硬编码，牵一发而动全身） 的问题

// 数字枚举
enum Role {
    worker = 100,
    manager,
    boss,
    wife,
    money
}

// 在数字枚举中，通过【反向映射】实现双向取值 => 可以通过枚举的成员来或者对应的值，也可以通过枚举成员的值来获取枚举成员
/**
 * var Role = {};
 * (function(){
 *      Role[Role['worker'] = 1] = 'worker'  // 反向映射，
 *                                              首先将枚举成员作为 key，将它的值作为 value，这个表达式返回的是 value   
 *                                              第二步，将这个value作为新的 key，将对应的枚举成员作为 value
 * })(Role || (Role = {}))
 */

console.log(Role.worker)    // 100
console.log(Role.manager)    // 101
// 在设置了第一个成员的初始值后，后面的成员的值会自动递增
// console.log(Role[100])      // 'worker'
// console.log(Role[0])        // 'undefined'
// console.log(Role)

// 枚举成员的值在定义之后无法修改！！ read-only
// Role.worker = 1 //  报错

// 字符串枚举   在字符串枚举中，不能使用反向映射取值，因为在字符串中，枚举的值具有不确定性，所以反向映射取值没有意义
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
const month = [Month.Jan, Month.Feb, Month.Mar];    // 会被直接替换为常量[0, 1, 2]
// console.log(month);

enum RoleType {
    Manager,
    Worker,
    Visitor,
}

function getRole(role: number) {
    switch (role) {
        case RoleType.Manager:
            console.log('you are manager');
            break;
        case RoleType.Worker:
            console.log('you are Worker');
            break;
        case RoleType.Visitor:
            console.log('you are Visitor');
            break;
        default:
            console.log('no permission');
    };
}

getRole(2)
