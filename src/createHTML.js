const createHTML = (answers) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
            integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
            crossorigin="anonymous"></script>
    
        <link rel="stylesheet" href="style.css" />
    
        <title>Meet the Team</title>
    </head>
    
    <body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container-top">
          <h2 class="display-4">Meet the Team</h2>
          <p class="lead">Our hardworking team works together to meet our mission while embracing our company values.</p>
        </div>
      </div>
    
        <div class='container'>
        <div class="col-4">
            <div class='row m-3'>
                ${answers.managerCards}
            </div>
        </div>
        <div class="col-4">
            <div class='row m-3'>
                ${answers.engineerCards}
            </div>
        </div>
        <div class="col-4">
            <div class='row m-3'>
                ${answers.internCards}
            </div>
        </div>
        </div>
        <script src="https://kit.fontawesome.com/257de25400.js" crossorigin="anonymous"></script>       
    </body>
    </html>`
}

module.exports = createHTML;