const Employee = require('../lib/Employee');



test('Creates a manager object', () => {
    const manager = new Employee('');
    
    expect(manager.name).toStrictEqual(expect.any(String));
    expect(manager.id).toStrictEqual(expect.any(String));
    expect(manager.email).toStrictEqual(expect.any(String));
});

test("gets manager's id", () => {
    const manager = new Employee('');

    expect(manager.id).toBe(manager.id);
}); 

test("gets manager's email", () => {
    const manager = new Employee('');

    expect(manager.email).toBe(manager.email);
});

test("gets manager's office number", () => {
    const manager = new Employee('');

    expect(manager.officeNumber).toBe(manager.officeNumber); 
})