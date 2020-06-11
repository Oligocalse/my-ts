abstract class Animal {  // 使用 abstract 关键字声明一个抽象类
    eat(food: string): void {
        console.log(food);
        console.log('eat')
    }

    abstract sleep(): void;
    // 使用 abstract 定义一个抽象方法，抽象方法的好处是，明确这个方法在子类中会有不同的实现
    // 这就是 【多态】在父类中定义一个抽象方法，在子类中有不同的实现，在不同的实例对象中有不同的表现
}

// let animal = new Animal()   // 报错：因为抽象类不能用于创建实例 

class Cat extends Animal {  // 创建一个子类去继承抽象类
    constructor() { // name: string  // constructor 中接收的参数即是 在创建实例时接收的参数
        super();
        // this.name = name;   // 将接收到的参数赋值给实例对象中对应的属性
    }
    name: string = 'kaji'   // 如果在 constructor 中没有参数，那么在 【类】 中声明的 【属性】 必须有一个初始值
    sleep() {
        console.log('cat is sleeping')
    }
}

let cat = new Cat() // 'kaji'

console.log(cat);
cat.eat('vega')
cat.sleep()

class Bird extends Animal {
    constructor(canFly: boolean) {
        super();
        this.canFly = canFly
    }

    private readonly canFly: boolean = false;

    fly() {
        if (this.canFly) {
            console.log('i can fly')
        } else {
            console.log('i can\'t fly')
        }
    }
    sleep() {
        console.log('bird is sleeping')
    }
}

const bird = new Bird(true);

console.log(bird);
// console.log(bird.canFly);
bird.fly()

bird.sleep()

const animals: Animal[] = [bird, cat];

animals.forEach(item => {
    console.log(item)

    item.sleep()
})