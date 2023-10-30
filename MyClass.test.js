const MyClass = require("./MyClass");

describe('MyClass', () => {
    it('should greet the user by name', () => {
        const myClass = new MyClass('John Doe', 20);
        const greeting = myClass.greet();

        expect(greeting).toBe('Hello, John Doe20!');
    });
});