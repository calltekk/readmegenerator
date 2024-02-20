// Set up individual badge URLs object
const badgeUrls = {
  HTML: "html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  CSS: "css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  JavaScript: "javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  Bootstrap: "bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
  jQuery: "jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white",
  NodeJS: "node.js-6DA55F.svg?style=for-the-badge&logo=node.js&logoColor=white",
  npm: "npm-%23000000.svg?style=for-the-badge&logo=npm",
  React: "react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  JSON: "json-%23000000.svg?style=for-the-badge&logo=json&logoColor=%23F7DF1E",
  Git: "git-%23F05032.svg?style=for-the-badge&logo=git&logoColor=white",
  GitHub: "github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
};

// Function to generate language badges based on user selection
const generateBadge = (badge) =>
  `![${badge}](https://img.shields.io/badge/${badgeUrls[badge]})`;

const generateBadges = (selectedBadges) => {
  let badges = "";
  for (const badge of selectedBadges) {
    badges += generateBadge(badge) + "\n";
  }
  return badges;
};

// Function to generate license badge based on user selection
const generateLicenseBadge = (license) => {
  if (license !== "None") {
    return `![${license}](https://img.shields.io/badge/license-${license}-white.svg)`;
  } else {
    return "";
  }
};

module.exports = { generateBadges, generateLicenseBadge };
