class Dog {
    // protected constructor(name: string) {   
    // 使用 protected 修饰的类是受保护的，只能在继承这个类的时候访问，不能用于初始化实例
    // 这样声明的类只能作为基类
    constructor(name: string) {
        this.name = name;
        this.legs = 4;
    }
    static food: string = 'bones';  // 使用 static 定义静态属性，只能在当前类和子类中访问，不能在实例中访问
    readonly legs: number;  // 只读属性与实例属性相同，一定要被初始化
    private name: string;   // 使用 private 修饰的属性或方法，只能在当前类中访问；即使是该类的实例也不能访问
    private littleBark(): string {
        return this.name;
    };
    bark(info?: string): string {
        console.log(info ? info : this.name)
        return info ? info : this.name;
    }
}

class Husky extends Dog {
    constructor(name: string, public color: string) {
        // 构造函数的参数也可以添加修饰符，将参数自动变成实例的属性。
        // eg: 在上面使用 public 修饰 color 属性，那么在这个类中，就不需要再去声明color这个属性
        super('Husky');
        // this.name = name;
        this.color = color;
    }

    static food: string = 'water'
    // color?: string
}

const dog = new Dog('Husky');
const husky = new Husky('jack', 'black and white');

// console.log(Dog, Dog.food)
console.log(dog)
dog.bark()
// console.log(dog.legs);
// dog.legs = 5;   // 无法修改在类中使用 readonly 定义的属性
// dog.name    // name 是 Dog 类的私有属性，只能在 Dog 类中访问
// dog.littleBark()    // little 是定义在 Dog 类中的私有方法，只能在 Dog 类中访问
// console.log(Husky, Husky.food)
console.log(husky)
husky.bark()