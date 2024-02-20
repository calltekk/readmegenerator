const { generateBadges, generateLicenseBadge } = require("./generateBadges");

// Function to generate markdown for README
const generateMarkdown = (answers) => {
  return `# ${answers.project}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Credits](#credits)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
- [Badges](#badges)

## Installation 
To install the necessary dependencies, run the following command: 
\`\`\`
${answers.dependencies}
\`\`\`

## Contributors
${answers.contribution}

## Tests
To run tests, use the following command: 
\`\`\`
${answers.tests}
\`\`\`

## Questions
If you run into any issues about this project, please reach out to me at:
- GitHub: [${answers.username}](https://github.com/${answers.username})
- Email: ${answers.email}

## Technologies used
${generateBadges(answers.badges)}

## License
This project is licensed under the ${answers.license} license.
${generateLicenseBadge(answers.license)}`;
};


module.exports = generateMarkdown;
