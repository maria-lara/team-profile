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
          },
          {
          type: 'text',
          name: 'github',
          message: "Please enter the GitHub username:",
          when: function (answers) {
               return answers.role === 'Engineer';
          }},
          { 
          type:'text',
          name:'school',
          message: "Please enter the Intern's school:",
          when: function (answers) {
               return answers.role === 'Intern';
          }},
          {
          type:'text',
          name: 'office',
          message:"Please enter the manager's office number:",
          when: function (answers) {
               return answers.role === 'Manager';
          }},
          {
          type: 'input',
          name: 'anotherInput',
          message: "Would you like to add anyone else?",
          }])

          .then((answers) => {
          employeeProfiles.push(answers);
  
          if (answers.anotherInput === 'yes') {
              userPrompts();
          } else {
              var answerInputs = {
                  engineerCards: '',
                  internCards: '',
                  managerCards: '',
              };
              for (var i = 0; i < employeeProfiles.length; i++) {
                  var employees = cardsHTML(employeeProfiles[i]);

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
        .then(() => console.log('You have created an index.html file. Please check the dist folder.'))
        .catch((err) => console.log(err));
}



userPrompts()
