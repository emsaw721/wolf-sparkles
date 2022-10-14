const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const fs = require('fs'); 

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

function promptEmployee() {
inquirer
    .prompt([
{
    type: 'confirm',
    name:'add',
    message:'Would you like to add an employee?',
    when: (answers) => {
        if(answers.add === 'No') {
            return; 
        }
    }
},
{
    type: 'checkbox',
    name:'type',
    message:'What type of employee is this?',
    choices:['Intern', 'Engineer', 'Manager'],
    when: (answers) => {
        if(answers.type == 'Intern') {
            addIntern();
        }
        else if (answers.type == 'Engineer') {
            addEngineer();
        }
        else{
            addManager(); 
        }
    }
}
    ])
    .then(employeeData => {
        const intern = new Intern(addIntern.name, addIntern.id, addIntern.email, addIntern.school); 
        internArr.push(intern); 

        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        engineerArr.push(engineer);
        
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        managerArr.push(manager); 

        teamArr= [internArr, engineerArr, managerArr];

        let internArr = []
        let engineerArr = [] 
        let managerArr = []

        console.log(teamArr)
        //convert into classes, into arr 
        //create team 
        console.log(employeeData)
        const pageTemplate= generatePage(teamArr);
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
}

function addIntern()  {
  
    [
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
    ]
    }
    
function addEngineer() {
    [
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
            type:'confirm',
            name:'more',
            message:'Would you like to add another employee?',
            when: (answers) => {
                if(answers.more === 'Yes') {
                    return inquirer
                }
            }
        }
    ]
    }
    
function addManager() {
    [
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
    ]
    }

promptEmployee(); 