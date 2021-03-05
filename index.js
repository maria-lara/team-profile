const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const Employee = require ('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const createHTML = require('./src/createHTML');
const cardsHTML = require('./src/createcards')

let employeeProfiles = [];

const userPrompts = () =>{
     return inquirer.prompt([
          {
          type: 'list',
          name: 'role',
          message:"What is this employee's role?",
          choices: ['Manager', 'Engineer', 'Intern']
          },
          {
          type:'text',
          name: 'employee',
          message: "Please enter the employee's name:"
          },
          {
          type:'text',
          name: 'id',
          message: "Please enter the employee's ID number:"
          },
          {
          type: 'text',
          name: 'email',
          message: "Please enter the employee's email address:"
          }])
          .then(({employee, id, email, role}) => {
          if (role === "Engineer") {
               return inquirer

                    .prompt([{
                         type: 'text',
                         name: 'github',
                         message: "What is the Engineer's Github username?"
                    },
                    {
                         type:'confirm',
                         name:'anotherEntry',
                         message: "What you like to add another employee?",
                         default: false
                    }])

          } else if (role === 'Intern') {
               return inquirer

                    .prompt([{
                         type:'text',
                         name:'school',
                         message: "What is the Intern's school?"
                    },
                    {
                         type:'confirm',
                         name:'anotherEntry',
                         message: "What you like to add another employee?",
                         default: false
                    }])
          } else if (role === "Manager") {
               return inquirer

                    .prompt([{
                         type:'text',
                         name: 'office',
                         message:"Please enter the manager's office number:"
                    },
                    {
                         type:'confirm',
                         name:'anotherInput',
                         message: "What you like to add another employee?",
                         default: false
                    }])
          }
     }).then((answers) => {
          employeeProfiles.push(answers);
  
          if (answers.confirm === 'yes') {
              userPrompt();
          } else {
              let answerInputs = {
                  engineerCards: '',
                  internCards: '',
                  managerCards: '',
              };
              for (let i = 0; i < employeeProfiles.length; i++) {
                  let employees = cardsHTML(employeeProfiles[i]);
                  switch (employeeProfiles[i].role) {
                    case 'Engineer':
                         answerInputs.engineerCards += employees;
                         break;
                    case 'Intern':
                         answerInputs.internCards += employees;
                         break;
                    case 'Manager':
                         answerInputs.managerCards += employees;
                         break;
                    default:
                         break;
                  }
  
              }
  
              init(answerInputs);
          }
      })
};

const writeHTML = util.promisify(fs.writeFile);

const init = (answers) => {
    writeHTML(`${__dirname}/dist/index.html`, createHTML(answers))
        .then(() => console.log('Successfully created an index.html file.'))
        .catch((err) => console.log(err));
}



userPrompts()
