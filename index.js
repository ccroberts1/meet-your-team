const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const generateHTML = require("./src/generateHTML.js");
const Employee = require("./lib/employee");

const generalQuestions = [
  {
    type: "input",
    message: "What is the team manager's name?",
    name: "managerName",
  },
  {
    type: "input",
    message: "What is the team manager's id?",
    name: "managerID",
  },
  {
    type: "input",
    message: "What is the team manager's email?",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "What is the team manager's office number?",
    name: "managerOffice",
  },
];

const teamMenu = [
  {
    type: "list",
    message: "Which type of team member would you like to add?",
    name: "typeTeam",
    choices: ["Engineer", "Intern", "I don't want to add more team members"],
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "What is your engineer's name?",
    name: "engineerName",
  },
  {
    type: "input",
    message: "What is your engineer's id?",
    name: "engineerId",
  },
  {
    type: "input",
    message: "What is your engineer's email?",
    name: "engineerEmail",
  },
  {
    type: "input",
    message: "What is your engineer's GitHub username?",
    name: "engineerGitHub",
  },
];

const internQuestions = [
  {
    type: "input",
    message: "What is your intern's name?",
    name: "internName",
  },
  {
    type: "input",
    message: "What is your intern's id?",
    name: "internId",
  },
  {
    type: "input",
    message: "What is your intern's email?",
    name: "internEmail",
  },
  {
    type: "input",
    message: "What is your intern's school?",
    name: "internSchool",
  },
];

//Create function to write to HTML
function writeToFile(fileName, data, callback) {
  fs.writeFile(`${fileName}.html`, data, callback);
}

//Create function to initialize the app
//Will need to add logic so that if the user picks Engineer or Intern, they get those lists of questions. Check Inquirer to make sure it doesn't have that functionality built in.
//Want to ask general questions prompt first
//Then, ask team menu question
//Then create if statement to handle progressing through potential responses

function init() {
  inquirer.prompt(generalQuestions).then((response) => {
    const result = generateHTML(response);
    writeToFile("myteam", result, (err) => {
      err
        ? console.log("Oops, something went wrong! Please try again")
        : console.log("Generating page...");
    });
  });

  //Figure out what to do with the answers -> save to variable?

  // inquirer.prompt(teamMenu).then((response) => {
  //   if (response.typeTeam === "Engineer") {
  //     inquirer.prompt(engineerQuestions);
  //     //Figure out what to do with the answers -> save to variable?
  //     inquirer.prompt(teamMenu);
  //   } else if (response.typeTeam === "Intern") {
  //     inquirer.prompt(internQuestions);
  //     //Figure out what to do with the answers -> save to variable?
  //     inquirer.prompt(teamMenu);
  //   } else {
  //     let team = response;
  //   }
  // });
}

// function init() {
//   inquirer.prompt(generalQuestions).then((response) => {
//     const result = generateHTML(response);
//     writeToFile("myteam.html", result, (err) => {
//       err
//         ? console.log("Oops, something went wrong! Please try again")
//         : console.log("Generating page...");
//     });
//   });
// }

//Function call to initialize app
init();
