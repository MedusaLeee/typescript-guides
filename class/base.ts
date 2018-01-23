// 类基本定义方法
class PersonBase {
    public name: string;
    public email: string;
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
    sayHi() {
        console.log('Hi');
    }
}

const me: PersonBase = new PersonBase('tom', 'tom@163.com')

// 错误使用类，可以正常使用但是违背了单一职责原则（SRP），负责太多就成了God对象
// 决定一个属性或方法能不能称为类的一部分，主要看个人的主观判断。语法没有错，仔细分析，可以找到更好的类的设计方式
class PersonErr {
    public name: string;
    public email: string;
    constructor(name: string, email: string) {
        this.name = name;
        if (this.validateEmail(email)) {
            this.email = email;
        } else {
            throw new Error('邮箱格式错误');
        }
    }
    validateEmail(email: string) { 
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    toString() {
        return `${this.name}: ${this.email}`;
    }
}

const ep: PersonErr = new PersonErr('tom', 'tom@163.com');
console.log(ep.toString());

// 重构1
// 声明一个Email类
class Email {
    private email: string; // 因为我们有格式检查，必须要设置成private阻止外界对他修改
    constructor(email: string) {
        if (this.validateEmail(email)) {
            this.email = email;
        } else {
            throw new Error('邮箱格式错误');
        }
    }
    private validateEmail(email: string) { 
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    get(): string { // email是private，要提供一个get方法获取email，或提供getter方法
        return this.email;
    }
}

const email: Email = new Email('tom@163.com');
console.log('email: ', email.get());
// email.eamil = 'tom2@163.com' // set 值是会出错的

// 确保每个类都是单一职责
class Person {
    public name: string;
    public email: Email;
    constructor(name: string, email: Email) {
        this.name = name;
        this.email = email;
    }
    toString() {
        return `${this.name}: ${this.email.get()}`;
    }
}
const emailIns: Email = new Email('tom3@163.com');
const p: Person = new Person('tom3', emailIns);
console.log('p: ', p.toString());