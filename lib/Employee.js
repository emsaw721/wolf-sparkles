class Employee {
    constructor() {
        this.name = ''; 
        this.id = ''; 
        this.email = ''; 
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