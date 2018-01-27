abstract class Ancestor {
    // 祖先的姓氏，如果设置为private子类将无法继承此成员变量
    public lastName: string = '李';

    constructor() {
    }

    // 祖先的说姓氏方法
    public sayLastName(): void {
        console.log(`我姓 ${this.lastName}.`);
    }

    // 祖先给定义了说名字的方法，子类必须实现抽象方法，这是public子类中也必须是public
    public abstract sayFullName(): void;
}

// 继承祖先的姓氏lastName，并实现祖先给的sayName的方法
class Human extends Ancestor {
    public firstName: string;

    constructor(firstName: string) {
        super();
        this.firstName = firstName;
    }

    sayFullName(): void {
        console.log(`我姓 ${this.lastName}, 叫 ${this.firstName}`);
    }
}

const human: Human = new Human('建勋');
// 调用继承自祖先的说姓氏方法
human.sayLastName();
// 调用自己实现的说全名方法
human.sayFullName();