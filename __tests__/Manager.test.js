const Employee = require('../lib/Employee');



test('Creates a manager object', () => {
    const manager = new Employee('');
    
    expect(manager.name).toBe(expect.any(String));
    expect(manager.id).toBe(expect.any(String));
    expect(manager.email).toBe(expect.any(String));
});

test("gets manager's id", () => {
    const manager = new Employee('');

    expect(manager.getId()).toBe(expect.stringContaining(employee.id.toString()));
}); 

test("gets manager's email", () => {
    const manager = new Employee('');

    expect(manager.getEmail()).toBe(expect.stringContaining(employee.email.toString()));
});

test("gets manager's office number", () => {
    const manager = new Employee('');

    expect(manager.getOfficeNumber()).toBe(expect.stringContaining(manager.officeNumber.toString())); 
})