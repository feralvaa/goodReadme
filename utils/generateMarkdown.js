
function renderLicenseBadge(license){
  if (license !== "None" ) {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`
  }
  return ''
  
}




function generateMarkdown(data) {
  return `
# ${data.title}


## Description
${data.description}


## Table of Contents

* [Installation](#installation)

${data.installation}


* [Usage](#usage)

*  ${renderLicenseBadge(data.license)}


* [Contributing](#contributing)

* [Tests](#tests)


To run test, run the this commad:


${data.test}



## Questions

## Mail
Email: ${data.email}

![Image description](${data.avatar_url})



`;
}






module.exports = generateMarkdown;
