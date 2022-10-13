const Employee = require('../lib/Employee');



test('Creates an intern object', () => {
    const intern = new Employee('');
    
    expect(intern.name).toBe(expect.any(String));
    expect(intern.id).toBe(expect.any(String));
    expect(intern.email).toBe(expect.any(String));
});

test("gets interns's id", () => {
    const intern = new Employee('');

    expect(intern.getId()).toBe(expect.stringContaining(employee.id.toString()));
}); 

test("gets intern's email", () => {
    const intern = new Employee('');

    expect(intern.getEmail()).toBe(expect.stringContaining(employee.email.toString()));
});

test("gets inter's school name", () => {
    const intern = new Employee('');

    expect(intern.getSchool()).toBe(expect.stringContaining(intern.school.toString())); 
})