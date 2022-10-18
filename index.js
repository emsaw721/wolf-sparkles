const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const fs = require('fs'); 

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const teamArr = [] 

const promptQuestions = employeeData => {
return inquirer
.prompt([
{
    type: 'list',
    name:'add',
    message:'What type of employee would you like to add?',
    choices:['Intern', 'Engineer', 'Manager'],
   
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
        },
        {
            type:'input',
            name:'more',
            message:'Would you like to add another employee?',
            validate: moreInput => {
                if(moreInput == 'No') {
                     return true;  
                } 
                // else {
                //     return promptQuestions(); 
                // }
            }
        }
    ])   
     .then(result => {
        const intern = new Intern(result.name, result.id, result.email, result.school); 
        teamArr.push(intern); 
        console.log(teamArr) 
        createPage(); 

        // const manager = new Manager(result.name, result.id, result.email, result.officeNumber);
        // teamArr.push(manager);
        // console.log(teamArr); 

        // const engineer = new Engineer(result.name, result.id, result.email, result.github); 
        // teamArr.push(engineer); 
        // console.log(teamArr)
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
        },
        {
            type:'input',
            name:'more',
            message:'Would you like to add another employee?',
            when: (answers) => {
                if(answers.more == 'No') {
                    return createPage(); 
                }
            }
        }
    ])
    .then(result => {
            const engineer = new Engineer(result.name, result.id, result.email, result.github); 
            teamArr.push(engineer); 
            console.log(teamArr)

            // const intern = new Intern(result.name, result.id, result.email, result.school); 
            // teamArr.push(intern); 
            // console.log(teamArr) 

            // const manager = new Manager(result.name, result.id, result.email, result.officeNumber);
            // teamArr.push(manager);
            // console.log(teamArr); 
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
        },
        {
            type:'input',
            name:'more',
            message:'Would you like to add another employee?',
            when: (answers) => {
                if(answers.more === 'No') {
                    return createPage(); 
                }
            }
        }
    ])
    .then(result => {
        const manager = new Manager(result.name, result.id, result.email, result.officeNumber);
        teamArr.push(manager);
        console.log(teamArr); 

        // const intern = new Intern(result.name, result.id, result.email, result.school); 
        // teamArr.push(intern); 
        // console.log(teamArr) 

        // const engineer = new Engineer(result.name, result.id, result.email, result.github); 
        // teamArr.push(engineer); 
        // console.log(teamArr)
    })
} 

function createPage() {
 
        const pageTemplate= generatePage(teamArr);
        fs.writeFile('./dist/index.html', pageTemplate, err => {
            if(err) {
               return console.log(err); 
            }
           console.log('File saved!')
        })
        
}

promptQuestions(); 