class MyClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, ${this.name}${this.age}!`;
    }
}

module.exports = MyClass;