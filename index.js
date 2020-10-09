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
        let name = userReply.name
        
        let location = userReply.location

        let html = `<h2>${name}</h2><br><h2>${location}</h2>`
        writeFileAsync("index.html", html, "utf8");
        // const userReply = {
        //     name: "",
        //     location: "",
        //     linkedin: "",
        //     github: ""
        //   };
    })

      
      // write code between the <p> tags to output the data from the music object above
    //   const songSnippet = `
    //   <div class = fun><p>${music.artist} sang ${music.song},
    //   which was widely loved by the ${music.style}!</p>
    //   `;
      
    //   const element = document.getElementById("music");
    //   element.innerHTML = songSnippet;
      
    //   console.log(music);
    //   console.log(songSnippet);