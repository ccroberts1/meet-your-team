const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");

//Function which dynamically creates Bootstrap cards based on the type of role
function createTeamCard(member) {
  if (member.getRole() === "Engineer") {
    return `<div class="card text-white m-3 shadow" style="max-width: 18rem">
              <div class="card-header bg-primary">
                <h2>${member.name}</h2>
               <h3>Engineer</h3>
              </div>
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item">ID: ${member.id}</li>
                  <li class="list-group-item">
                    Email: <a href="mailto:${member.email}">${member.email}</a>
                  </li>
                  <li class="list-group-item">
                    Github: <a href="${member.getGithub()}" target="_blank">${
      member.github
    }</a>
                  </li>
                </ul>
              </div>
            </div>`;
  } else {
    return `<div class="card text-white m-3 shadow" style="max-width: 18rem">
              <div class="card-header bg-primary">
                <h2>${member.name}</h2>
                <h3>Intern</h3>
              </div>
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item">ID: ${member.id}</li>
                  <li class="list-group-item">
                    Email: <a href="mailto:${member.email}">${member.email}</a>
                  </li>
                  <li class="list-group-item">School: ${member.getSchool()}</li>
                </ul>
              </div>
            </div>`;
  }
}

//Function which dynamically generates Bootstrap HTML and creates manager and team cards
function generateHTML(manager, team) {
  let teamCardsArray = [];
  team.forEach((element) => {
    teamCardsArray.push(createTeamCard(element));
  });
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <title>My Team</title>
  </head>
  <body>
    <div class="container">
      <header>
        <div class="row">
          <div class="col text-center bg-dark text-light">
            <h1>My Team</h1>
          </div>
        </div>
      </header>
      <main>
        <div class="row">
          <div
            class="
              col
              card-container
              my-3
              d-flex
              flex-wrap
              justify-content-center
            "
          >
            <!--Manager Card-->
            <div class="card text-white m-3 shadow" style="max-width: 18rem">
              <div class="card-header bg-primary">
                <h2>${manager.name}</h2>
                <h3>Manager</h3>
              </div>
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item">ID: ${manager.id}</li>
                  <li class="list-group-item">
                    Email: <a href="mailto:${manager.email}">${
    manager.email
  }</a>
                  </li>
                  <li class="list-group-item">Office Number: ${manager.getOffice()}</li>
                </ul>
              </div>
            </div>
            ${teamCardsArray}
            </div>
        </div>
      </main>
    </div>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
  </body>
</html>`;
}

module.exports = generateHTML;
