import "./styles.css";
import { skills } from "./skills";
import { workExperience } from "./experience";
import { education } from "./education";

const sortAscending = (a, b) => a.order - b.order;

const addSkillBadges = () => {
  const skillsElement = document.getElementById("skill-badges");

  for (let key of Object.keys(skills)) {
    for (let skill of skills[key].list) {
      const div = document.createElement("div");
      div.classList.add("badge", skills[key].color);
      const textNode = document.createTextNode(skill);
      div.appendChild(textNode);
      skillsElement.appendChild(div);
    }
  }
};

const workExperienceView = {
  Summary: "summary",
  Detailed: "detailed",
};

const renderWorkExperience = (view) => {
  const timelineElement = document.getElementById("timeline");
  timelineElement.innerHTML = "";

  for (let exp of workExperience.sort(sortAscending)) {
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("flex", "items-center");

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("flex-1");

    const overviewDiv = document.createElement("div");
    overviewDiv.classList.add("flex", "mb-2");

    const avatarDiv = document.createElement("div");
    avatarDiv.classList.add(
      "w-6",
      "rounded-full",
      "border-solid",
      "border-primary",
      "mr-4",
      "ml-4",
      "self-center"
    );

    const imgElement = document.createElement("img");
    imgElement.src = exp.logo;

    avatarDiv.appendChild(imgElement);
    overviewDiv.appendChild(avatarDiv);

    const descriptionDiv = document.createElement("div");

    const title = document.createElement("p");
    title.classList.add("text-lg", "font-semibold");
    const titleTextNode = document.createTextNode(exp.title);
    title.appendChild(titleTextNode);

    descriptionDiv.appendChild(title);

    const company = document.createElement("p");
    const companyTextNode = document.createTextNode(exp.company);
    company.appendChild(companyTextNode);

    descriptionDiv.appendChild(company);

    const date = document.createElement("p");
    date.classList.add("text-secondary");
    const dateTextNode = document.createTextNode(exp.date);
    date.appendChild(dateTextNode);

    descriptionDiv.appendChild(date);

    overviewDiv.appendChild(descriptionDiv);
    contentDiv.appendChild(overviewDiv);

    const bulletList = document.createElement("ul");
    bulletList.classList.add("list-disc", "ml-6");

    let bulletsToRender = [];

    if (view == workExperienceView.Detailed) {
      bulletsToRender = exp.bullets;
    } else {
      bulletsToRender = exp.summaryBullets;
    }

    for (let bulletTxt of bulletsToRender) {
      const bullet = document.createElement("li");
      const bulletTextNode = document.createTextNode(bulletTxt);
      bullet.appendChild(bulletTextNode);

      bulletList.appendChild(bullet);
    }

    contentDiv.appendChild(bulletList);
    containerDiv.appendChild(contentDiv);
    timelineElement.appendChild(containerDiv);
  }
};

const renderEducation = () => {
  const educationElement = document.getElementById("education");

  for (let edu of education.sort(sortAscending)) {
    const educationDivElement = document.createElement("div");

    const credentialP = document.createElement("p");
    credentialP.classList.add("text-lg", "font-semibold");
    credentialP.innerText = edu.credential;

    const institutionP = document.createElement("p");
    institutionP.innerText = edu.institution;

    const completionP = document.createElement("p");
    completionP.classList.add("text-secondary");
    completionP.innerText = edu.completionText;

    educationDivElement.appendChild(credentialP);
    educationDivElement.appendChild(institutionP);
    educationDivElement.appendChild(completionP);

    educationElement.appendChild(educationDivElement);
  }
};

const toggleDetailedView = () => {
  if (currentWorkExperienceView == workExperienceView.Summary) {
    currentWorkExperienceView = workExperienceView.Detailed;
  } else {
    currentWorkExperienceView = workExperienceView.Summary;
  }
  renderWorkExperience(currentWorkExperienceView);
};

const listenToToggleDetailedView = () => {
  const toggleDetailedViewButton = document.getElementById(
    "toggle-detailed-view"
  );
  toggleDetailedViewButton.addEventListener("click", toggleDetailedView);
};

let currentWorkExperienceView = workExperienceView.Summary;

window.addEventListener("load", function () {
  addSkillBadges();
  renderWorkExperience(currentWorkExperienceView);
  renderEducation();
  listenToToggleDetailedView();
});
