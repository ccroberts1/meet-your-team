const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const generateHTML = require("./src/generateHTML.js");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

//Prompt Array of general questions
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

//Prompt area of team-specific questions that can be looped
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
//VARIABLE DECLARATIONS
//Global variables to creat team array and manager
const team = [];
let manager;

//FUNCTION DECLARATIONS

//Function which writes HTML to file
function writeToFile(fileName, data, callback) {
  fs.writeFile(`${fileName}.html`, data, callback);
}

//Function which asks initial manager questions
function init() {
  inquirer.prompt(questions).then((response) => {
    manager = new Manager(
      response.managerName,
      response.managerID,
      response.managerEmail,
      response.managerOffice
    );
    inquirer.prompt(teamQuestions).then(askTeam);
  });
}

//Function which creates team card objects
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

//Function which generates HTML and then calls the function that writes it to file
function writeHTML() {
  const result = generateHTML(manager, team);
  writeToFile("myteam", result, (err) => {
    err
      ? console.log("Oops, something went wrong! Please try again")
      : console.log("Generating page...");
  });
}

//Function call to initialize app
init();
