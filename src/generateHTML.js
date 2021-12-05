function generateHTML(data) {
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
            <div class="card text-white m-3" style="max-width: 18rem">
              <div class="card-header bg-primary">
                <h2>${data.managerName}</h2>
                <h3>Manager</h3>
              </div>
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item">ID: ${data.managerID}</li>
                  <li class="list-group-item">
                    Email: <a href="mailto:${data.managerEmail}">${data.managerEmail}</a>
                  </li>
                  <li class="list-group-item">Office Number: ${data.managerOffice}</li>
                </ul>
              </div>
            </div>
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
