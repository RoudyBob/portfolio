const html5Badge = document.querySelector('.fa-html5');
const javascriptBadge = document.querySelector('.fa-js');
const githubBadge = document.querySelector('.fa-github-square');
const windowsBadge = document.querySelector('.fa-microsoft');
const googleBadge = document.querySelector('.fa-google');

const skillParagraph = document.querySelector('.skillDescription');

// Default state of skill badges
html5Badge.setAttribute("style", "color: #233453;transition: all 0.3s ease 0s;");
skillParagraph.innerText = "I'm proficient in HTML & CSS, using them to build dynamic web applications including experience designing responsive sites based on Bootstrap.";

html5Badge.addEventListener("mouseover", displaySkill);
javascriptBadge.addEventListener("mouseover", displaySkill);
githubBadge.addEventListener("mouseover", displaySkill);
windowsBadge.addEventListener("mouseover", displaySkill);
googleBadge.addEventListener("mouseover", displaySkill);

function resetBadges() {
    html5Badge.setAttribute("style", "color: grey; transition: all 0.3s ease 0s;");
    javascriptBadge.setAttribute("style", "color: grey; transition: all 0.3s ease 0s;");
    githubBadge.setAttribute("style", "color: grey; transition: all 0.3s ease 0s;");
    windowsBadge.setAttribute("style", "color: grey; transition: all 0.3s ease 0s;");
    googleBadge.setAttribute("style", "color: grey; transition: all 0.3s ease 0s;");
};

function displaySkill(e) {
    resetBadges();
    e.target.setAttribute("style", "color: #233453; transition: all 0.3s ease 0s;");
    if (e.target.className == "fab fa-google fa-4x") {
        skillParagraph.innerText = "Certified Google Cloud Professional Architect with 3+ years experience helping customers architect solutions on Google Cloud.";
    } else if (e.target.className == "fab fa-html5 fa-4x") {
        skillParagraph.innerText = "I'm proficient in HTML & CSS, using them to build dynamic web applications including experience designing responsive sites based on Bootstrap.";
    } else if (e.target.className == "fab fa-github-square fa-4x") {
        skillParagraph.innerText = "I have helped organizations build automated DevOps pipelines leveraging tools like Github, Docker, and platforms like Microsoft Azure and Google Cloud.";
    } else if(e.target.className == "fab fa-microsoft fa-4x") {
        skillParagraph.innerText = "Multiple Microsoft Azure certifications with several years' experience deploying enterprise applications on Microsoft Azure Cloud.";
    } else {
        skillParagraph.innerText = "When I first understood the power of HTML, CSS and JS together, I was instantly hooked. I love building software and solving problems with streamlined, functional JS code."
    };
};