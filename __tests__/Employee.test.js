const Employee = require('../lib/Employee');

jest.mock('../lib/Employee.js');

test('Creates an employee object', () => {
    const employee = new Employee('Name');
    
    expect(employee.name).toBe(expect.any(string));
    expect(employee.id).toBe(expect.any(String));
    expect(employee.email).toBe(expect.any(String));
    expect(employee.role).toBe(expect.any(String)); 
}) 