interface List {
    name: string,
    id: number,
    [x: string]: any,
}

interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach(item => {
        console.log(item.id, item.name);
        if (item.age) {
            console.log(item.age);
        }
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