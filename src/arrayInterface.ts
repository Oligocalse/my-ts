// 数组泛型

let array1: Array<Number> = [1, 2, 3, 4, 5];    // 数组内元素的类型必须与泛型中规定的类型一致，或者在泛型中使用联合类型

let array2: Array<Number | String> = [1, 2, 3, '4', 5];

let array3: Array<Number | Number[] | Array<String | Boolean>> = [1, 2, 3, [4, 5, 6], ['4', '5', '6'], 7];
// 中间的泛型表示 Number[] 嵌套的number数组
// 最后一个表示嵌套的数组泛型