const Employee = require('./Employee'); 

class Manager extends Employee {
    constructor(name = '') {
        super(name); 

        this.officeNumber = officeNumber; 
    }

    getOfficeNumber() {
        return `This manager's office number is ${this.officeNumber}`
    }
    
    getRole() {
       return Manager();
    }
}

module.exports= Manager; 