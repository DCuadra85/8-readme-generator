# README File Generator

You will be asked a series of questions that need to be entered. Once you enter in all of your answers, the program will automatically generate a README.md file for you. This will have all of the basic formatting in place for you automatically

* Use of JavaScript.
* Use of Node.Js.

## Code

Prompt Code Snippet:

```
while (userPasswordLength < 8 || userPasswordLength > 128) {

  var userPasswordLengthInput = prompt("What is the password length?");
      if (isNaN(userPasswordLengthInput)) {
          alert("Please enter a number.")
          continue;
      }
      userPasswordLength = parseInt(userPasswordLengthInput)

      if (userPasswordLength < 8 || userPasswordLength > 128) {
        alert("Please enter a password length from 8-128 characters.")

          continue;
      }
}
```

Write Function Code:

```
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
```


## Usage

This page's function was create through JavaScript with Node.js. Start the program using node index.js and fill in the series of prompts will start. Your README file will generate based on what you enter.

<img src="./recording.gif">



## Credits

* https://github.com/coding-boot-camp/
* https://www.w3schools.com/
* https://stackoverflow.com/questions/
* https://www.geeksforgeeks.org/
* https://guides.github.com/features/mastering-markdown/
* https://developer.mozilla.org/en-US/docs/Web/HTML/


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Deployed Link

* https://dcuadra85.github.io/random_password_gen/


## Authors

* **Daniel Cuadra** 

- [GitHub](https://github.com/DCuadra85)
- [LinkedIn](https://www.linkedin.com/in/daniel-cuadra-3705aa39/)


## License

MIT License

Copyright (c) [2020] [DanielCuadra]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.