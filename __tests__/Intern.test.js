const Employee = require('../lib/Employee');



test('Creates an intern object', () => {
    const intern = new Employee('');
    
    expect(intern.name).toStrictEqual(expect.any(String));
    expect(intern.id).toStrictEqual(expect.any(String));
    expect(intern.email).toStrictEqual(expect.any(String));
});

test("gets interns's id", () => {
    const intern = new Employee('');

    expect(intern.id).toBe(intern.id);
}); 

test("gets intern's email", () => {
    const intern = new Employee('');

    expect(intern.email).toBe(intern.email); 
});

test("gets inter's school name", () => {
    const intern = new Employee('');

    expect(intern.school).toBe(intern.school); 
})