const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const fs = require('fs'); 

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const internQuestions = [
    {
        type: 'text',
        name: 'name',
        message: 'What is the employee name?(Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log("Please type the employee's name.");
                return false; 
            }
        }
    },
    { 
        type: 'text',
        name: 'id',
        message: "What is the employee's ID?(Required)",
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please type an ID.')
                return false; 
            }
        }
    },
    {
        type: 'text',
        name: 'email',
        message: "What is the employee's email?"
    },
    {
        type: 'text',
        name: 'school',
        message: "What is the intern's school name?"
    },
]

const engineerQuestions = [
    {
        type: 'text',
        name: 'name',
        message: 'What is the employee name?(Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log("Please type the employee's name.");
                return false; 
            }
        }
    },
    { 
        type: 'text',
        name: 'id',
        message: "What is the employee's ID?(Required)",
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please type an ID.')
                return false; 
            }
        }
    },    { 
        type: 'text',
        name: 'id',
        message: "What is the employee's ID?(Required)",
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please type an ID.')
                return false; 
            }
        }
    },
    {
        type: 'text',
        name: 'email',
        message: "What is the employee's email?"
    },   
    {
        type: 'text',
        name: 'github',
        message: "What is the engineer's Github username?"
    },
]

const managerQuestions = [
    {
        type: 'text',
        name: 'name',
        message: 'What is the employee name?(Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log("Please type the employee's name.");
                return false; 
            }
        }
    },
    { 
        type: 'text',
        name: 'id',
        message: "What is the employee's ID?(Required)",
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please type an ID.')
                return false; 
            }
        }
    },
    {
        type: 'text',
        name: 'email',
        message: "What is the employee's email?"
    },
    {
        type: 'text',
        name: 'officeNumber',
        message: "What is the manager's office number?"
    }
]

const promptEmployee = employeeData => {
    return inquirer
    .prompt([
{
    type: 'confirm',
    name:'add',
    message:'Would you like to add an employee?',
 
},
{
    type: 'checkbox',
    name:'type',
    message:'What type of employee is this?',
    choices:['Intern', 'Engineer', 'Manager'],
    when: (answers) => {
        if(answers.type === 'Intern') {
            internQuestions; 
        }
        else if (answers.type === 'Engineer') {
            engineerQuestions; 
        }
        else{
            managerQuestions; 
        }
    }
},
{
    type:'confirm',
    name:'more',
    message:'Would you like to add another employee?',
    when: (answers) => {
        if(answers.more === 'Yes') {
            return inquirer
        }
    }
}
    ])
    .then(employeeData => {
        //convert into classes, into arr 
        //create team 
        console.log(employeeData)
        // const pageTemplate= generatePage(employeeData);
        // fs.writeFile('./dist/index.html', pageTemplate, err => {
        //     if(err) {
        //        return console.log(err); 
        //     }
        //    console.log('File saved!')
        // });
        
    })
    .catch(err => {
        console.log(err)
    })

    }

promptEmployee();
