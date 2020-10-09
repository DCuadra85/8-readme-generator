const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function questionPrompt() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "input",
            message: "Where do you live?",
            name: "location"
        },
        {
            type: "input",
            message: "What is your LinkedIn URL?",
            name: "linkedin"
        },
        {
            type: "input",
            message: "Do you have a GitHub URL?",
            name: "github"
        }
    ])}

    questionPrompt().then(function(userReply){
        console.log(userReply)
        const readme = generateMD(userReply);

        return writeFileAsync("README.md", readme)
    })
    .then(function() {
        console.log("Success writing README")
    })
    .catch(function(err) {
        console.log(err);
    })

      
   