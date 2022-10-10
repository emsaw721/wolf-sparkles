class Employee {
    constructor(name = '') {
        this.name = name; 
        this.id = id; 
        this.email = email; 
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
        //Returns Employee
    }
}

module.exports = Employee; 