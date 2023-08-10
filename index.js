import inquirer from 'inquirer';

inquirer
    .prompt([{
        "message": "Enter the URL: ",
        "name": "URL",
    }
  ])
  .then((answers) => {
      const url = answers.URL;
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });