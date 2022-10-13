const Employee = require('../lib/Employee');


test('Creates an engineer object', () => {
    const engineer = new Employee('');
    
    expect(engineer.name).toBe(expect.any(String));
    expect(engineer.id).toBe(expect.any(String));
    expect(engineer.email).toBe(expect.any(String));
});

test("gets engineer's id", () => {
    const engineer = new Employee('');

    expect(engineer.getId()).toBe(expect.stringContaining(employee.id.toString()));
}); 

test("gets engineer's email", () => {
    const engineer = new Employee('');

    expect(engineer.getEmail()).toBe(expect.stringContaining(employee.email.toString()));
});

test("gets engineer's github username", () => {
    const engineer = new Employee('');

    expect(engineer.getGithub()).toBe(expect.stringContaining(engineer.github.toString())); 
}); 
