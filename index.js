// TODO: Include packages needed for this application
const fs = require("fs");
const { writeFile } = require("fs").promises;
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the project title?",
    },
    {
      type: "input",
      name: "description",
      message: "What is the project description?",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the installation instructions?",
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use this project?",
    },
    {
      type: "input",
      name: "contribution",
      message: "How can users contribute to the project?",
    },
    {
      type: "input",
      name: "github",
      message: "Enter a link to your GitHub.",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email.",
    },
    {
      type: "input",
      name: "test",
      message: "How to test the application?",
    },
    {
      type: "list",
      name: "license",
      message: "What is the license you are using?",
      choices: ["MIT", "ISC", "NONE"],
      filter(val) {
        return val.toLowerCase();
      },
    },
  ]);
};

// TODO: Create a function to initialize app
const init = () => {
  questions()
    .then((answers) => writeFile("README.md", generateMarkdown(answers)))
    .then(() => console.log("Created readme file"))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
