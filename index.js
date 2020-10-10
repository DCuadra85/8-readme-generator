const inquirer = require("inquirer");
const axios = require("axios")
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
            message: "What is the title of your project? Remember, don't use spaces.",
            name: "title"
        },
        {
            type: "input",
            message: "Please enter a brief description of your project.",
            name: "description"
        },
        {
            type: "input",
            message: "What is the usage of this program?",
            name: "usage"
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

function generateMD(answers) {
    return `
# ${answers.title}

## Description
${answers.description}

##Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)

##Installation

${answers.installationInstructions}

## Usage
${answers.usage}

## License
* ${answers.license} license

## Tests   
${answers.tests}

## Contributing
* **${answers.name}** 

## Questions
![GithubImage](https://github.com/${answers.githubname}.png)

[GithubEmail](mailto:${answers.githubemail})    

## Badge
![badge](https://img.shields.io/github/license/${answers.githubname}/${answers.title})

`
};


questionPrompt().then(function (answers) {
    console.log(answers)
    const readme = generateMD(answers);
    return writeFileAsync("./readmeoutput/README.md", readme, "utf8")
})
    .then(function () {
        console.log("Success writing README")
    })
    .catch(function (err) {
        console.log(err);
    });