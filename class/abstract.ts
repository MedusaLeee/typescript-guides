abstract class Human {
    public sayHello(): void {
        console.log('Hello...');
    }
}
// 抽象类可以继承抽象类，也可以实现接口
abstract class Ancestor extends Human{
    // 祖先的姓氏，如果设置为private子类将无法继承此成员变量
    public lastName: string = '李';

    constructor() {
        super();
    }

    // 祖先的说姓氏方法
    public sayLastName(): void {
        console.log(`我姓 ${this.lastName}.`);
    }

    // 祖先给定义了说名字的方法，子类必须实现抽象方法，这是public子类中也必须是public
    public abstract sayFullName(): void;
}

// 继承祖先的姓氏lastName，说姓氏的方法sayLastName，并实现祖先给的sayFullName的方法
class Man extends Ancestor {
    public firstName: string;

    constructor(firstName: string) {
        super();
        this.firstName = firstName;
    }

    sayFullName(): void {
        console.log(`我姓 ${this.lastName}, 叫 ${this.firstName}`);
    }
}

// const ancestor: Ancestor = new Ancestor(); // 抽象类不能实例化！！！只能被继承
let ancestor: Ancestor; // 但是可以声明为变量的类型

// 声明为Man可以调用所有父类和自己中的方法
const man1: Man = new Man('建勋');
// 调用人类的的sayHello方法
man1.sayHello();
// 调用继承自祖先的说姓氏方法
man1.sayLastName();
// 调用自己实现的说全名方法
man1.sayFullName();

// 声明为Ancestor可以调用所有父类和自己中的方法
const man2: Ancestor = new Man('建勋');
// 调用人类的的sayHello方法
man2.sayHello();
// 调用继承自祖先的说姓氏方法
man2.sayLastName();
// 调用自己实现的说全名方法
man2.sayFullName();

// 声明为Human只能调用Human中的方法，因为Human中没有sayLastName和sayFullName方法
const man3: Human = new Man('建勋');
// 调用人类的的sayHello方法
man3.sayHello();
// man3.sayLastName(); // 错误
// man3.sayFullName(); // 错误