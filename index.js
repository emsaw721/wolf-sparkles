const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const fs = require('fs'); 

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const internArr = [] 
const engineerArr = []
const managerArr = [] 

const promptQuestions = employeeData => {
return inquirer
.prompt([
{
    type: 'list',
    name:'add',
    message:'What type of employee would you like to add?',
    choices:['Intern', 'Engineer', 'Manager', 'Finish team'],
   
}
])
.then(function(userInput) {
    // switch does a strict comparison between input expression and case expression 
    switch(userInput.add){
        case 'Intern':
            addIntern();
            break; 
        case'Engineer':
            addEngineer();
            break; 
        case 'Manager':
            addManager();
            break; 
        case 'Finish team':
            createPage();
            break; 

    }
})
}


function addIntern() {
return inquirer 
.prompt ([
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
        }
    ])   
     .then(result => {
        const intern = new Intern(result.name, result.id, result.email, result.school); 
        internArr.push(intern); 
        console.log(internArr) 
        promptQuestions(); 
    })
  
} 
    
function addEngineer() {
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
        }
    ])
    .then(result => {
            const engineer = new Engineer(result.name, result.id, result.email, result.github); 
            engineerArr.push(engineer); 
            console.log(engineerArr)
            promptQuestions(); 
        })
    }

function addManager() {
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
            name: 'officeNumber',
            message: "What is the manager's office number?"
        }
    ])
    .then(result => {
        const manager = new Manager(result.name, result.id, result.email, result.officeNumber);
        managerArr.push(manager);
        console.log(managerArr); 
        promptQuestions(); 
    })
} 

function createPage() {
 // generatePage is the function that is page-template.js 
        const pageTemplate= generatePage(internArr, engineerArr, managerArr);
        fs.writeFile('./dist/index.html', pageTemplate, err => {
            if(err) {
               return console.log(err); 
            }
           console.log('File saved!')
        })
        
}

promptQuestions(); 
