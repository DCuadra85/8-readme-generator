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
            message: "What is the name of your project?",
            name: "title"
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

        return writeFileAsync("./readmeoutput/README.md", readme)
    })
    .then(function() {
        console.log("Success writing README")
    })
    .catch(function(err) {
        console.log(err);
    })

    function generateMD(userReply) {
        return `
        # ${userReply.title}

        ## Description
        ${userReply.description}

        ##Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)

        ##Installation

        ## Usage

        ## License

        ## Contributing
        * **${userReply.name}** 

        ## Tests   

        ## Questions
        [GithubImage](https://github.com/${userReply.githubname}.png)
            ${userReply.githubemail}

        ##Badge
        ![badge](https://img.shields.io/github/license/${userReply.githubname}/${userReply.title})

        `
    }