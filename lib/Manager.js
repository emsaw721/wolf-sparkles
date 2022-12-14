const Employee = require('./Employee'); 

class Manager extends Employee {
    constructor(name, id, email, officeNumber = '') {
        super(name, id, email); 
        this.name = name; 
        this.id = id;
        this.email = email; 
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