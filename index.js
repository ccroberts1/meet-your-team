const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const generateHTML = "./src/generateHTML.js";
const Employee = require("./lib/employee");

//Need array of questions for inquirer
const generalQuestions = [
  {
    type: "input",
    message: "What is the team manager's name?",
    name: "managerName",
  },
  {
    type: "input",
    message: "What is the team manager's id?",
    name: "managerId",
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

//Create function to initialize the app
//Will need to add logic so that if the user picks Engineer or Intern, they get those lists of questions. Check Inquirer to make sure it doesn't have that functionality built in.

//Function call to initialize app
