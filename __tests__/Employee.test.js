const Employee = require('../lib/Employee');

// jest.mock('../lib/Employee');

test('Creates an employee object', () => {
    const employee = new Employee('');
    
    expect(employee.name).toStrictEqual(expect.any(String));
    expect(employee.id).toStrictEqual(expect.any(String));
    expect(employee.email).toStrictEqual(expect.any(String));
});

test("gets employee's id", () => {
    const employee = new Employee('');

    expect(employee.id).toBe(employee.id);
}); 

test("gets employee's email", () => {
    const employee = new Employee('');

    expect(Employee.getEmail()).toContainString(Employee.email);
});

// test("gets employee's role", () => {
//     const employee = new Employee('');

//     expect(employee.getRole()).toBe(expect.stringContaining(Employee.role.toString()));
// }); 