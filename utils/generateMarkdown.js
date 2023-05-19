// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    mit: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    isc: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    none: " ",
  };
  return badges[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const lLink = {
    mit: "[MIT](https://choosealicense.com/licenses/mit",
    isc: "[ISC](https://choosealicense.com/licenses/isc",
    none: " ",
  };
  return lLink[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const renderLicense = {
    mit: "This project is covered under the MIT license.",
    isc: "This project is covered under the ISC license.",
    none: " ",
  };
  return renderLicense[license];
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}
  ## Table of Contents
  - [Project description](#Description)
  - [Usage](#Usage)
  - [Installation](#Installation)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  - [Project License](#License)

  ## Description
  ${data.description}

  ## Usage
  ${data.usage}

  ## Installation
  ${data.installation}

  ## Contribute
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  You can reach me with any questions below.
   - [GitHub](${data.github})
   - Email - ${data.email}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
