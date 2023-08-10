import fs from 'fs';
import inquirer from 'inquirer';
import qr from 'qr-image';

inquirer
    .prompt([{
        "message": "Enter the URL: ",
        "name": "URL",
    }
  ])
  .then((answers) => {
      const url = answers.URL;
      var qr_svg = qr.image(url);
      qr_svg.pipe(fs.createWriteStream("qr-img.png"));
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });