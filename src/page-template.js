// only one return per function 

const generateIntern = internArr => {
 
        return `
        <div class="col-12 mb-2 bg-dark text-light p-3>
        <h3 class="employee-name text-light">${teamArr.name}</h3>
        <h5 class="employee-info">
        // maybe try using prototype here? because need to get the stuff from employee 
            ID: ${id}
            Email: ${email}
            School: ${school}
        </div>
        `; 
}; 

const generateEngineer = engineerArr => {

            return `
            <div class="col-12 mb-2 bg-dark text-light p-3>
            <h3 class="employee-name text-light">${teamArr.name}</h3>
            <h5 class="employee-info">
                ID: ${id}
                Email: ${email}
                Github: ${github}
            </div>
            `; 
        }
     
    

const generateManager = managerArr => {
      
                return `
                <div class="col-12 mb-2 bg-dark text-light p-3>
                <h3 class="employee-name text-light">${teamArr.name}</h3>
                <h5 class="employee-info">
                    ID: ${id}
                    Email: ${email}
                    Office Number: ${officeNumber}
                </div>
                `; 
            }

module.exports = templateData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie-edge">
        <title>Employee Page</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
      </head>
      
      <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title text-secondary bg-dark py-2 px-3">Employee Page</h1>
        </header>
        
        <main class="container my-5">
        <section class="my-3" id="intern">
        <h2 class="text-dark bg-primary p-2 display-inline-block">Interns</h2>
        <div class="flex-row justify-space-between">
            ${generateIntern(internArr)}
        </div>
        </section> 
        <section class="my-3" id="engineer">
        <h2 class="text-dark bg-primary p-2 display-inline-block">Engineers</h2>
        <div class="flex-row justify-space-between">
            ${generateEngineer(engineerArr)}
            </div>
            </section>
            <section class="my-3" id="manager">
            <h2 class="text-dark bg-primary p-2 display-inline-block">Managers</h2>
            <div class="flex-row justify-space-between">
            ${generateManager(managerArr)}
            </div>
            </section>
        </main>
        </body>
        </html>
        `;
}; 