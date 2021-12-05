const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return `https://www.github.com/${this.github}`;
  }
  getRole() {
    return this;
  }
}

module.exports = Engineer;
