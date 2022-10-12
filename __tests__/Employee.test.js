const Employee = require('../lib/Employee');

jest.mock('../lib/Employee');

test('Creates an employee object', () => {
    const employee = new Employee('');
    
    expect(employee.name).toBe(expect.any(String));
    expect(employee.id).toBe(expect.any(String));
    expect(employee.email).toBe(expect.any(String));
    expect(employee.role).toBe(expect.any(String)); 
});

test("gets employee's id", () => {
    const employee = new Employee('');

    expect(employee.getId()).toBe(expect.stringContaining(employee.id.toString()));
}); 

test("gets employee's email", () => {
    const employee = new Employee('');

    expect(employee.getEmail()).toBe(expect.stringContaining(employee.email.toString()));
});

test("gets employee's role", () => {
    const employee = new Employee('');

    expect(employee.getRole()).toBe(expect.stringContaining(employee.role.toString()));
}); 