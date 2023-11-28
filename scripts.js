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

const workExperienceView = {
    Summary: "summary",
    Detailed: "detailed"
}

const renderWorkExperience = (view) => {
    const workExperience = [
        {
            order: 1,
            title: "Sr. Software Engineer",
            company: "Health Catalyst, South Jordan UT",
            date: "March 2021 - Present",
            bullets: [
                "Worked on the development of user interfaces for web applications.",
                "Implemented responsive designs to ensure a seamless user experience."
            ],
            summaryBullets: [
                "Worked on the development of user interfaces for web applications."
            ]
        },
        {
            order: 2,
            title: "Software Engineer",
            company: "Health Catalyst, South Jordan UT",
            date: "December 2018 - March 2021",
            bullets: [
                "Worked on the development of user interfaces for web applications.",
                "Implemented responsive designs to ensure a seamless user experience."
            ],
            summaryBullets: [
                "Worked on the development of user interfaces for web applications."
            ]
        },
        {
            order: 3,
            title: "Software Engineer Intern",
            company: "Health Catalyst, South Jordan UT",
            date: "July 2018 - December 2018",
            bullets: [
                "Worked on the development of user interfaces for web applications.",
                "Implemented responsive designs to ensure a seamless user experience."
            ],
            summaryBullets: [
                "Worked on the development of user interfaces for web applications."
            ]
        }
    ];

    const timelineElement = this.document.getElementById("timeline");
    timelineElement.innerHTML = "";

    const sortAscending = (a, b) => (a.order - b.order);

    for (let exp of workExperience.sort(sortAscending)) {
        const containerDiv = this.document.createElement("div");
        containerDiv.classList.add("flex", "items-center");

        const bulletDiv = this.document.createElement("div");
        bulletDiv.classList.add("bg-primary", "w-2", "h-2", "rounded-full", "mr-4")

        containerDiv.appendChild(bulletDiv);

        const contentDiv = this.document.createElement("div");

        const title = this.document.createElement("p")
        title.classList.add("text-lg", "font-semibold");
        const titleTextNode = this.document.createTextNode(exp.title);
        title.appendChild(titleTextNode);
        
        contentDiv.appendChild(title);

        const company = this.document.createElement("p")
        const companyTextNode = this.document.createTextNode(exp.company);
        company.appendChild(companyTextNode);

        contentDiv.appendChild(company);

        const date = this.document.createElement("p")
        date.classList.add("text-secondary");
        const dateTextNode = this.document.createTextNode(exp.date);
        date.appendChild(dateTextNode);

        contentDiv.appendChild(date);

        const bulletList = this.document.createElement("ul")
        bulletList.classList.add("list-disc", "ml-6");

        let bulletsToRender = [];

        if (view == workExperienceView.Detailed) {
            bulletsToRender = exp.bullets;
        }
        else {
            bulletsToRender = exp.summaryBullets;
        }

        for (let bulletTxt of bulletsToRender) {
            const bullet = this.document.createElement("li");
            const bulletTextNode = this.document.createTextNode(bulletTxt);
            bullet.appendChild(bulletTextNode);

            bulletList.appendChild(bullet);
        }

        contentDiv.appendChild(bulletList);
        containerDiv.appendChild(contentDiv);   
        timelineElement.appendChild(containerDiv);
    }
};

const toggleDetailedView = () => {
    if (currentWorkExperienceView == workExperienceView.Summary) {
        currentWorkExperienceView = workExperienceView.Detailed;
    }
    else {
        currentWorkExperienceView = workExperienceView.Summary;
    }
    renderWorkExperience(currentWorkExperienceView);

};

const listenToToggleDetailedView = () => {
    const toggleDetailedViewButton = this.document.getElementById("toggle-detailed-view");
    toggleDetailedViewButton.addEventListener("click", toggleDetailedView);
};

let currentWorkExperienceView = workExperienceView.Summary;

window.addEventListener("load", function () {
    addSkillBadges();
    renderWorkExperience(currentWorkExperienceView);
    listenToToggleDetailedView();
});
