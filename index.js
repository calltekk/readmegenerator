const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const util = require("util");
const emailValidator = require("email-validator");

const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// Function to validate user email address
const isValidEmail = (email) => {
  return emailValidator.validate(email) || "Please enter a valid email address.";
};

// Array of questions for user
const questions = [
  {
    type: "input",
    name: "username",
    message: "Please enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address:",
    validate: isValidEmail,
  },
  {
    type: "input",
    name: "project",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project:",
  },
  {
    type: "list",
    name: "license",
    message: "Which license does your project use?",
    choices: [
      "Academic", "Apache", "Artistic", "Boost-1.0", "BSD-2-Clause", "BSD_3_Clause",
      "BSD_3_Clause_Clear", "Creative", "Creative_Attribution", "Educational", "Eclipse",
      "GPL", "LGPL", "ISC", "LaTeX", "Microsoft", "MIT", "Mozilla", "OSL", "PostgreSQL",
      "NCSA", "Unlicense", "zLib", "None",
    ],
  },
  {
    type: "input",
    name: "dependencies",
    message: "What command should be run to install the dependencies?",
    default: "`npm install`",
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
    default: "`npm test`",
  },
  {
    type: "input",
    name: "contribution",
    message: "What does the user need to know about contributions?",
  },
  {
    type: "input",
    name: "credits",
    message: "If you have collaborators, please list their GitHub usernames:",
  },
  {
    type: "checkbox",
    name: "badges",
    message: "Please select which languages and tools you used to create this project:",
    choices: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "NodeJS", "JSON", "Git", "GitHub", "npm", "React"],
  },
];

// Function to prompt user
const promptUser = async () => {
  return inquirer.prompt(questions);
};

// Function to generate README.md
const init = async () => {
  try {
    const answers = await promptUser();
    const markdown = generateMarkdown(answers);

    if (!fs.existsSync("generated")) {
      fs.mkdirSync("generated");
    }

    await writeFileAsync(path.join(process.cwd(), "README.md"), markdown);

    console.info("Successfully wrote to README.md");
  } catch (error) {
    console.error(error);
  }
};

// Function call to initialise program
init();
