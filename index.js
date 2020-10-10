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
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Please enter a brief description of your project.",
            name: "description"
        },
        {
            type: "input",
            message: "Please enter what needs to be installed and brief instructions.",
            name: "installationInstructions"
        },
        {
            type: "input",
            message: "What kind of tests did you perform?",
            name: "tests"
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "githubname"
        },
        {
            type: "input",
            message: "What is your GitHub email?",
            name: "githubemail"
        },
        {
            type: "input",
            message: "What kind of license are you going to use?",
            name: "license"
        }
    ])
}

questionPrompt().then(function (userReply) {
    console.log(userReply)
    const readme = generateMD(userReply);

    return writeFileAsync("./readmeoutput/README.md", readme)
})
    .then(function () {
        console.log("Success writing README")
    })
    .catch(function (err) {
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
        - [Contributing](#contributing)

        ##Installation

        ${userReply.installationInstructions}

        ## Usage

        ## License
        * ${userReply.license} license

        ## Contributing
        * **${userReply.name}** 
        
        ## Tests   
        ``````
        ${userReply.tests}

        ## Questions
        ![GithubImage](https://github.com/${userReply.githubname}.png)
        [GithubEmail](mailto:${userReply.githubemail})    

        ##Badge
        ![badge](https://img.shields.io/github/license/${userReply.githubname}/${userReply.title})

        `
}