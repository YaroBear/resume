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
      list: ["JSON Schema", "Open Telemetry"],
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
        "Communication"
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
                "Designed and implemented a consolidated logging solution using a combination of AppInsights and OpenTelemetry libraries across dozens of components and language runtimes in our cloud architecture. This enabled querying all logs and events using a single trace id spanning across multiple service boundaries, which helped teams to quickly pinpoint failures and bottlenecks, and laid the foundation for creating actionable alerts to be in compliance with our service level agreements.",
                "Developed a Python module that automatically integrates with essential libraries utilized in Databricks workflows. This module provided multiple teams with valuable insights into failures and exposed diverse metrics to AppInsights.",
                `Designed and implemented a cloud native auditing platform that replaced a 3rd party tool that monitored 140+ environments, resulting in million-dollar yearly cost savings in licensing, storage, and VM costs.
                The solution reduced team support burden significantly by enabling one click deployment from Azure with centralized monitoring and eliminated the need for cross-team maintenance of 70+ virtual machines.
                `,
                "Contributed to critical OpenSource projects that are used internally, including submitting issues and code changes to dsccommunity/SqlServerDsc.",
                "Collaborated closely with other teams to facilitate understanding of subjects demanding cross-team coordination. This involved conducting demonstrations, organizing pair programming sessions, adapting swiftly to incorporate specialized use cases, and generating documentation and educational materials housed in a centralized wiki.",
                "Participated in regular InnerSource library guidance meetings with engineering leads and architects."
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
                "Modernized new client deployment using ARM templates and Azure pipelines, reducing new client setup time from 1+ week to 2 hours.",
                `Revitalized the frontend for a data entry application (IDEA) to Angular from Angular.js, as well as implemented new functionality in the .NET backend and integrated OpenID Connect framework to enable customers to bring their own Identity Providers.`,
                `Designed and implemented Data Quality Dashboards in the Metadata Catalog (Atlas) including Data Profiling, which enabled users to see null, unique, non-unique, min, max, and other data metrics of the tables brought into the the Enterprise Data Warehouse (EDW).`,
                `Created a Data Quality Profiling plugin in C# that's used by the Health Catalyst Engine to automatically run profiling jobs after every ETL load so Atlas profiling data was always up-to-date.`
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
                "Implemented multiple dynamic data lineage visualizations in Angular and Graphviz/Dot language using metadata in the Enterprise Data Warehouse (EDW). This enabled technical users to visualize dependencies between table loads, and quickly spot circular references or other potential issues.",
                "Revitalized the Metadata Catalog (Atlas) to Angular from Angular.js."
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
        contentDiv.classList.add("flex-1");

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

let currentWorkExperienceView = workExperienceView.Detailed;

window.addEventListener("load", function () {
    addSkillBadges();
    renderWorkExperience(currentWorkExperienceView);
    listenToToggleDetailedView();
});
