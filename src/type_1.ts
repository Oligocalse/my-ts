// 类型兼容，源类型必须具备目标类型的全部属性

interface X {
    name: string,
    age: number
}

interface Y {
    name: string,
    age: number,
    address: string
}

let x: X = {
    name: '1',
    age: 1
}

let y: Y = {
    name: '1',
    age: 1,
    address: '2'
}

x = y;  // X（目标类型）兼容 Y（源类型），因为 Y（源类型）中有 X（目标类型）上的全部属性

// y = x; //  Y（目标类型）不兼容 X（源类型），因为 X（源类型）中没有 Y（目标类型）的全部属性，缺少了 address

// TODO:成员少的接口会 兼容 成员多的接口
