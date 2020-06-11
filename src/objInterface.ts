interface List {
    name: string,
    readonly id: number,    // readonly 前缀表示只读
    // [x: string]: any,
    age?: number,  // 在属性后面添加问号表示，这个属性可有可无
}

interface Person {
    name: string,
    readonly age: number,
    address?: string | boolean,
    work?: string,
    [prop: string]: any,   // 使用 [prop:string]: string 表示对象内任意属性的值都必须是 string 类型
    // 如果对象内有其他类型属性值的属性，则需要使用 [prop:string]: any
}

let person: Person = {  // 第一次创建对象的时候使用 接口，后续对对象进行修改的时候，直接修改即可，不需要加接口
    name: 'xiaowang',
    age: 20,
    address: false,
    work: undefined,    // undefined 和 null 是所有类型的子类。
}

person = {
    name: 'xiaowang',
    age: 10,
}

// person.age = 22;

interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach(item => {
        // console.log(item.id, item.name);
        if (item.age) {
            // console.log(item.age);
        }
        // item.id++;  会报错，因为声明了只读属性
    })
}

let result = {
    data: [
        {
            id: 1,
            name: 'jack',
            gender: 'male'
        },
        {
            id: 2,
            name: 'tom'
        }
    ]
}

render(result)


// 如果直接将对象字面量传入，并且对象字面量中有 interface 中没有声明的属性，ts会报错
// 解决办法有一下三种： 
// 1、将对象字面量赋值给一个变量，并将变量作为参数传入
// 2、使用类型断言，在对象字面量后面添加 as Result，指定这个对象字面量的类型是Result，绕过类型检查

//      render({
//          data: [
//              {
//                  id: 1,
//                  name: 'jack',
//                  gender: 'male'
//              },
//              {
//                  id: 2,
//                  name: 'tom'
//              }
//          ]
//      } as Result)

// 类型断言还有一种写法，在对象字面量前使用 <> 指定类型，但是不推荐这种写法，因为会和 React 中的组件混淆

//      render(<Result>{
//          data: [
//              {
//                  id: 1,
//                  name: 'jack',
//                  gender: 'male'
//              },
//              {
//                  id: 2,
//                  name: 'tom'
//              }
//          ]
//      })

// 3、使用字符串索引签名

//      interface List {
//          name: string,
//          id: number,
//          [x: string] : any,
//      }

// 字符串索引签名的含义是：用任意的字符串去 List 中取值，能够得到任意类型的返回值
// 这样的话即使存在着 interface 中没有的属性，ts 都会将其归为字符串索引签名中的属性

// 当不确定对象中属性的个数时，可以使用 字符串索引 或者 数字索引 来兼容，

interface StringArray {
    [props: string]: string,    // 表示 => 可以用任意字符串去索引这个对象，都会返回一个字符串的值
    [index: number]: string,    // 字符串索引 和 数字索引可以共存，但是 后一个索引的返回值类型 必须是 前一个索引返回值类型 的子类型【必须兼容】
}                               // number 不兼容于 string， 所以可以写成 string -> 即返回string形式的数字； 
// 或者将前一个写成any， 那么任意类型都是它的子类型


interface Obj {
    [name: string]: string,
    age: string,
    // age: number,        // 当一个接口中声明了字符串注解时，就不能再声明返回number类型的属性
}                       // 因为字符串注解的含义就是，不管有用什么字符串去索引这个对象，都只会返回一个字符串，不会返回其他类型的值