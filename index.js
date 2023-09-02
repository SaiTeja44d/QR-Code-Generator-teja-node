import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([
    {
        message : "Enter your URL:",
        name : "URL",
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_png = qr.image(url);
    const loc = fs.createWriteStream("qr_image.png");
    qr_png.pipe(loc);
  })
  .catch( (error) =>{
    console.log(error.message);
  });
