const addSkillBadges = () => {
  const skills = {
    languages: {
      color: "bg-green-400",
      list: [
        "Typescript",
        "Javascript",
        "C#",
        "Powershell",
        "HTML",
        "CSS/SCSS",
        "SQL",
        "Python",
      ],
    },
    frameworks: {
      color: "bg-blue-400",
      list: ["Angular", "ASP.NET Core", "Flask"],
    },
    cloud: {
      color: "bg-yellow-400",
      list: [
        "Azure Cloud",
        "Az Functions",
        "Service Bus",
        "Event Grid",
        "Storage Accounts",
        "App Insights",
        "Log Analytics",
        "SQL DB",
        "Databricks",
      ],
    },
    deploy: {
      color: "bg-indigo-400",
      list: ["Terraform", "ARM Templates", "CI/CD YAML"],
    },
    misc: {
      color: "bg-orange-400",
      list: ["JSON Schema"],
    },
    soft: {
      color: "bg-pink-400",
      list: [
        "Mentoring",
        "Code Pairing",
        "Empathy",
        "Quick Learner",
        "Adventurous",
        "Resilient",
      ],
    },
  };

  const skillsElement = this.document.getElementById("skill-badges");

  for (let key of Object.keys(skills)) {
    for (let skill of skills[key].list) {
      const div = this.document.createElement("div");
      div.classList.add("badge", skills[key].color);
      const textNode = this.document.createTextNode(skill);
      div.appendChild(textNode);
      skillsElement.appendChild(div);
    }
  }
};

window.addEventListener("load", function () {
  addSkillBadges();
});
