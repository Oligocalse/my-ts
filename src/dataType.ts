// 原始类型

let str: string = 'str';    // string 类型
let num: number = 1;        // number 类型
let bool: boolean = true;   // boolean 类型

// str = 123; 会报错

// 数组

let arr1: number[] = [1, 2, 3];    // 数组中只允许number类型
let arr2: Array<number | string> = [1, 2, 3, '4'];  // 使用联合类型就可以在数组中存在多种类型的值

// 元组

let tuple: [number, string] = [1, '2'];     // 元组是一种特殊的数组，限定了数组的数据类型和个数 

// 元组的越界问题，可以使用数组的push 方法为元组添加元素，但是无法取得新元素的值

// tuple.push('3');    // [1, '2', '3'];

// tuple[2]    // 报错

// 函数

const add = (x: number, y: number): number => x + y;    // 为函数的参数添加类型注解之后，
// ts的类型推断功能会自动推断出函数正确的返回值 （或者也可以手动为返回值添加注解

// 函数还有一种写法
let compute: (x: number, y: number) => number;      // 这里的 compute 就是一种函数类型， 但是没有具体的实现
compute = (a, b) => a + b;                          // 此处是具体的实现，编辑器会有自动提示，（函数参数的名称可以与定义时不一样，而且不需要指定类型）


// 对象
// let obj: object = { x: 1, y: '2' };       // 这种写法是不标准的，因为ts不知道在 object 中都存在着哪些属性，会导致无法赋值
// obj.x = 2    会报错

// 正确的写法应该是
let obj: { x: number, y: string } = { x: 1, y: '2' };   // 明确 obj 中的 属性名称 和 属性的数据类型

obj.x = 3;

// symbol 表示独一无二的值
let s1: symbol = Symbol();
let s2 = Symbol();

// console.log(s1 === s2);      // false

// undefined, null
// 在 ts 的官方文档中，undefined 和 null 是其他类型的子类型，所以赋值给其他类型的变量

// num = undefined;
// num = null;

// 但是当一个元素声明了是undefined 和 null 类型之后，就无法再被赋值成为其他类型

let un: undefined = undefined;
let nu: null = null;

// un = 1; // 会报错
// nu = 1; // 会报错

// 如果一个变量需要用到多种类型的话，只需要添加多个注解

let some: undefined | string = undefined;
some = 'string some';

