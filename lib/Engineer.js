const Employee = require('./Employee'); 

class Engineer extends Employee {
    constructor(name, id, email, github = '') {
        // means parent constructor called 
        super(name, id, email); 
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

    getGithub() {
        return `The engineer's Github username is ${this.github}`
    }

    getRole() {
        return Engineer();
    }
}
 
module.exports = Engineer; 