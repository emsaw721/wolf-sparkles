const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const fs = require('fs'); 

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const promptEmployee = employeeData => {
    return inquirer
    .prompt([
        // first ask do you want to add an employee
// then ask what kind of employee, based on answer, call function to save the data about to be created 
{
    type: 'checkbox',
    name:'type',
    message:'What type of employee is this?',
    choices:['Intern', 'Engineer', 'Manager'] 
},
// then ask questions for employee and for specific type of employee based on response 
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
            name: 'github',
            message: "What is the engineer's Github username?"
        },
        {
            type: 'text',
            name: 'school',
            message: "What is the intern's school name?"
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: "What is the manager's office number?"
        }
    ])
    // ask if want to add any more employee's 
    // based on response, either move on or rerun prompt. 
    .then(employeeData => {
        //convert into classes, into arr 
        //create team 
        console.log(employeeData)
        const pageTemplate= generatePage(employeeData);
        fs.writeFile('./dist/index.html', pageTemplate, err => {
            if(err) {
               return console.log(err); 
            }
           console.log('File saved!')
        });
        
    })
    .catch(err => {
        console.log(err)
    })

}; 

promptEmployee()
