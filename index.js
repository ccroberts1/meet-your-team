const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const generateHTML = require("./src/generateHTML.js");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const questions = [
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

const teamQuestions = [
  {
    type: "list",
    message: "Which type of team member would you like to add?",
    name: "typeTeam",
    choices: ["Engineer", "Intern"],
  },
  {
    type: "input",
    message: "What is your engineer's name?",
    name: "engineerName",
    when: (answers) => answers.typeTeam === "Engineer",
  },
  {
    type: "input",
    message: "What is your engineer's id?",
    name: "engineerID",
    when: (answers) => answers.typeTeam === "Engineer",
  },
  {
    type: "input",
    message: "What is your engineer's email?",
    name: "engineerEmail",
    when: (answers) => answers.typeTeam === "Engineer",
  },
  {
    type: "input",
    message: "What is your engineer's GitHub username?",
    name: "engineerGithub",
    when: (answers) => answers.typeTeam === "Engineer",
  },
  {
    type: "input",
    message: "What is your intern's name?",
    name: "internName",
    when: (answers) => answers.typeTeam === "Intern",
  },
  {
    type: "input",
    message: "What is your intern's id?",
    name: "internID",
    when: (answers) => answers.typeTeam === "Intern",
  },
  {
    type: "input",
    message: "What is your intern's email?",
    name: "internEmail",
    when: (answers) => answers.typeTeam === "Intern",
  },
  {
    type: "input",
    message: "What is your intern's school?",
    name: "internSchool",
    when: (answers) => answers.typeTeam === "Intern",
  },
  {
    type: "confirm",
    message: "Would you like to add another team member?",
    name: "askAgain",
    default: true,
  },
];

const team = [];
let manager;

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
  inquirer.prompt(questions).then((response) => {
    manager = new Manager(
      response.managerName,
      response.managerID,
      response.managerEmail,
      response.managerOffice
    );
    console.log(manager);
    inquirer.prompt(teamQuestions).then(askTeam);
  });
}

function askTeam(response) {
  if (response.typeTeam === "Engineer") {
    const engineer = new Engineer(
      response.engineerName,
      response.engineerID,
      response.engineerEmail,
      response.engineerGithub
    );
    team.push(engineer);
  } else if (response.typeTeam === "Intern") {
    const intern = new Intern(
      response.internName,
      response.internID,
      response.internEmail,
      response.internSchool
    );
    team.push(intern);
  } else {
    console.log(team);
  }
  if (response.askAgain) {
    inquirer.prompt(teamQuestions).then(askTeam);
  } else {
    writeHTML();
  }
}
//Function call to initialize app
init();

function writeHTML() {
  const result = generateHTML(manager, team);
  writeToFile("myteam", result, (err) => {
    err
      ? console.log("Oops, something went wrong! Please try again")
      : console.log("Generating page...");
  });
}
