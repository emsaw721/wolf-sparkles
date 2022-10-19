// this page is generatePage function 
// only one return per function 
// define function assign parameter 
// internDisplay = data store 
const generateIntern = internDisplay => {
    const template= []
    console.log(internDisplay)
    // array 
    //.forEach
    internDisplay.forEach((data)=> {
        template.push(`
        <div class="card flex-column text-light bg-success">
        <h3 class="flex-column employee-name text-light">${data.name}</h3>
        <h5 class="flex-column employee-info text-light">
            ID: ${data.id} <br> 
            Email: <a href="mailto:${data.email}">${data.email}</a> 
            School: ${data.school}
        </h5> 
        </div>
        `)
    })
   
        const templateStr = template.join('')
        console.log(templateStr) 
        return templateStr; 
        
}; 
// lexical scope : whatever function has access to / google this 
const generateEngineer = engineerDisplay => {
    // can reuse const template because local 
    const template= []
    engineerDisplay.forEach((data) => { 
        template.push(
            `
            <div class="card flex-column text-light bg-success">
            <h3 class="flex-column employee-name text-light">${data.name}</h3>
            <h5 class="flex-column employee-info text-light">
                ID: ${data.id} <br>
                Email: <a href="mailto:${data.email}">${data.email}</a>
                Github: <a href= "https://github.com/${data.github}">${data.github}</a>
            </h5> 
            </div>
            `)
    })
        const templateStr = template.join('')
        console.log(templateStr)
        return templateStr; 
    
}; 
    
const generateManager = managerDisplay => {
    const template = []
    managerDisplay.forEach((data) => {
        template.push(
            `
            <div class="card flex-column bg-success text-light">
            <h3 class="flex-column employee-name text-light">${data.name}</h3>
            <h5 class="flex-column employee-info text-light">
                ID: ${data.id} <br>
                Email: <a href="mailto:${data.email}">${data.email}</a>
                Office Number: ${data.officeNumber}
            </h5>
            </div>
            `
        )
    })
        const templateStr = template.join('')
        console.log(templateStr)
        return templateStr; 

}
// internArr (argument- values declared within function when function called) and internData(parameter = data store) have same contents, but are different things 
module.exports = (internData, engineerData, managerData) => {
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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="page.css">
      </head>
      
      <body>
        <header>
            <div class="flex-row justify-space-between align-center">
                <h1 class="bg-danger page-title align-center">My Team</h1>
            </div>
        </header>
        
        <main class="bg-light container flex-column">
        <section id="intern">
        <h2 class="text-dark bg-info display-inline-block">Interns</h2>
        <div class="flex-row justify-space-between bg-light">
            ${generateIntern(internData)}
        </div>
        </section> 
        <section id="engineer">
        <h2 class="text-dark bg-info display-inline-block">Engineers</h2>
        <div class="flex-row justify-space-between bg-light">
            ${generateEngineer(engineerData)}
        </div>
        </section>

        <section id="manager">
            <h2 class="text-dark bg-info display-inline-block">Managers</h2>
            <div class="flex-row justify-space-between bg-light">
            ${generateManager(managerData)}
            </div>
         </section>
        </main>
        </body>
        </html>
        `;
}
