const Employee = require('./Employee'); 

class Engineer extends Employee {
    constructor(name = '') {
        super(name); 

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