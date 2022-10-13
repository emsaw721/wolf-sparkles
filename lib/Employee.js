class Employee {
    constructor(name = '') {
        this.name = name; 
        this.id = 'A1234567'; 
        this.email = 'someemail@email.com'; 
    }

    getName() {
        return `The employee's name is ${this.name}.`

    }

    getId() {
        return `The employee's ID is ${this.id}.`

    }

    getEmail() {
        return `The employee's email is ${this.email}.`

    }

    getRole() {
        return Employee(); 
    }
}

module.exports = Employee; 