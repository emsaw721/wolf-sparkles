const Employee = require('../lib/Employee');


test('Creates an engineer object', () => {
    const engineer = new Employee('');
    
    expect(engineer.name).toStrictEqual(expect.any(String));
    expect(engineer.id).toStrictEqual(expect.any(String));
    expect(engineer.email).toStrictEqual(expect.any(String));
});

test("gets engineer's id", () => {
    const engineer = new Employee('');

    expect(engineer.id).toBe(engineer.id);
}); 

test("gets engineer's email", () => {
    const engineer = new Employee('');

    expect(engineer.email).toBe(engineer.email);
});

test("gets engineer's github username", () => {
    const engineer = new Employee('');

    expect(engineer.guthub).toBe(engineer.github); 
}); 
