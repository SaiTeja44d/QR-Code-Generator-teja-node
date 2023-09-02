
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
    
  });
/*
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
