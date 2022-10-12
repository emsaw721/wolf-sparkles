const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const fs = require('fs'); 

const promptEmployee = employeeData => {

    return inquirer
    .prompt([
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
    .then(employeeData => {
        console.log(employeeData)
        const pageTemplate= generatePage(employeeData);
        fs.writeFile('./dist/index.html', pageTemplate, err => {
            if(err) {
               return console.log(err); 
            }
           console.log('File saved!')
        });

        fs.copyfile('./src/style.css', './dist/style.css', err => {
            if(err) {
                return console.log(err)
            }
            console.log('Stylesheet created!')
        });
        
    })
    .catch(err => {
        console.log(err)
    })

}; 

promptEmployee()
