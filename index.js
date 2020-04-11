const fs = require("fs");
const path = require("path");
const axios = require("axios");
const inquirer = require("inquirer");
const api = require("./utils/api");
const generateMardown = require("./utils/generateMarkdown")

const questions = [ 
    {
     type: "input",
     name: "github",
     message: "What is your Github username?"   
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's title?"   
    },
    {
        type: "input",
        name: "description",
        message: "Brief description"   
    },
    {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", ]
    },
    {
        type: "input",
        name: "installation",
        message: "what command should be run to install dependencies?",
        default : "npm i"   
    },
    {
        type: "input",
        name: "test",
        message: "what command should be run to tests?",
        default : "node test.js"   
    },
    {
        type: "confirm",
        name: "contributing",
        message: "More than one contributor?",
          
    },
    {
        type: "confirm",
        name: "image",
        message: "Should we include your image?",
          
    },
    {
        type: "confirm",
        name: "email",
        message: "should we include your email?",
          
    },
    


];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName),data)
}

function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("Search..")
    
        
        axios
        .get(`https://api.github.com/users/${inquirerResponses.github}`)
        .then(({ data })=> {
        
        writeToFile("README.md", generateMardown({ ...inquirerResponses, ...data }))
        })
        .catch(e => console.log(e))

    })


}

init();
