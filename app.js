const siteData = {
  name: "Yuanweimin",
  title: "Researcher | Computer Science | AI & Data Science",
  photo: "assets/ywm.jpeg?v=5d4b309",
  bio:
    "I study intelligent systems, data-driven methods, and human-centered computing. This homepage collects my research interests, publications, projects, and contact information.",
  about:
    "I am interested in building reliable, useful, and interpretable computational systems. My work sits around machine learning, data analysis, and applications that connect research with practice.",
  actions: [
    { label: "Email", icon: "✉️", href: "mailto:yuanweimin@university.edu", primary: true },
    { label: "CV", icon: "📄", href: "#" },
    { label: "GitHub", icon: "💻", href: "https://github.com/Gin990820" },
    { label: "Scholar", icon: "🎓", href: "https://scholar.google.com/" }
  ],
  quickInfo: [
    { label: "Affiliation", value: "University / Research Lab", icon: "🏛️" },
    { label: "Location", value: "United States", icon: "📍" },
    { label: "Focus", value: "AI, Data Science, HCI", icon: "🧠" }
  ],
  facts: [
    { label: "Name", value: "Yuanweimin", emoji: "👋" },
    { label: "Title", value: "Graduate Student / Researcher", emoji: "🎓" },
    { label: "Department", value: "Computer Science", emoji: "🏫" },
    { label: "Keywords", value: "Machine Learning, Data, Systems", emoji: "🔎" }
  ],
  interests: [
    {
      title: "Machine Learning",
      icon: "🤖",
      description:
        "Learning algorithms, robust evaluation, and model behavior in real-world data settings."
    },
    {
      title: "Data Science",
      icon: "📊",
      description:
        "Data analysis workflows, visualization, and practical methods for extracting meaningful evidence."
    },
    {
      title: "Human-Centered AI",
      icon: "🧩",
      description:
        "Interfaces, explanations, and evaluation methods that make intelligent systems more useful to people."
    }
  ],
  papers: [
    {
      year: "2026",
      title: "A Clear and Reliable Framework for Data-Driven Research",
      authors: "Yuanweimin, Collaborator A, Collaborator B",
      venue: "Conference / Journal Name",
      description:
        "This work presents a structured approach for building and evaluating data-driven research methods.",
      tags: ["Machine Learning", "Data", "Evaluation"],
      links: [
        { label: "PDF", href: "#" },
        { label: "Code", href: "#" },
        { label: "BibTeX", href: "#" }
      ]
    },
    {
      year: "2025",
      title: "Interpretable Models for Human-Centered Computational Systems",
      authors: "Yuanweimin, Collaborator C",
      venue: "Workshop / Preprint",
      description:
        "This study explores transparent model behavior and better interaction patterns for AI-assisted systems.",
      tags: ["HCI", "Interpretability", "AI"],
      links: [
        { label: "PDF", href: "#" },
        { label: "Slides", href: "#" }
      ]
    },
    {
      year: "2024",
      title: "Scalable Analysis Methods for Complex Research Data",
      authors: "Yuanweimin et al.",
      venue: "Manuscript in Preparation",
      description:
        "This project develops scalable analysis workflows for complex datasets and research-oriented visual evidence.",
      tags: ["Analysis", "Visualization", "Systems"],
      links: [{ label: "Project", href: "#" }]
    }
  ],
  timeline: [
    {
      date: "2024 - Present",
      title: "Graduate Research",
      description: "Research in computer science, machine learning, and data-driven applications."
    },
    {
      date: "2022 - 2024",
      title: "Academic Projects",
      description: "Coursework, collaborative research, teaching, and applied software projects."
    },
    {
      date: "Awards & Service",
      title: "Selected Activities",
      description: "Scholarships, reviewer service, teaching assistance, and student leadership activities."
    }
  ],
  contact: [
    { label: "Email", value: "yuanweimin@university.edu", icon: "✉️", href: "mailto:yuanweimin@university.edu" },
    { label: "GitHub", value: "Gin990820", icon: "💻", href: "https://github.com/Gin990820" },
    { label: "Google Scholar", value: "Scholar profile", icon: "🎓", href: "https://scholar.google.com/" },
    { label: "Office", value: "Department / Building", icon: "🏛️", href: "#" }
  ]
};

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function setProfileFields() {
  $$("[data-profile]").forEach((element) => {
    const key = element.dataset.profile;
    if (!(key in siteData)) return;

    if (element.tagName === "IMG") {
      element.src = siteData[key];
      element.alt = `${siteData.name} profile photo`;
      return;
    }

    element.textContent = siteData[key];
  });

  document.title = `${siteData.name} | Academic Homepage`;
  const description = $('meta[name="description"]');
  if (description) {
    description.content = `${siteData.name}'s personal academic homepage, research interests, papers, and contact information.`;
  }
}

function createLinkButton(item) {
  const anchor = document.createElement("a");
  anchor.className = `button-link${item.primary ? " primary" : ""}`;
  anchor.href = item.href;
  if (!item.href.startsWith("#") && !item.href.startsWith("mailto:")) {
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
  }
  anchor.innerHTML = `<span aria-hidden="true">${item.icon}</span><span>${item.label}</span>`;
  return anchor;
}

function renderActions() {
  const actions = $("#hero-actions");
  siteData.actions.forEach((item) => actions.append(createLinkButton(item)));
}

function renderQuickInfo() {
  const quickInfo = $("#quick-info");
  siteData.quickInfo.forEach((item) => {
    const row = document.createElement("div");
    row.className = "info-row";
    row.innerHTML = `
      <span class="info-icon" aria-hidden="true">${item.icon}</span>
      <span>
        <span class="info-label">${item.label}</span>
        <span class="info-value">${item.value}</span>
      </span>
    `;
    quickInfo.append(row);
  });
}

function renderFacts() {
  const grid = $("#fact-grid");
  siteData.facts.forEach((item) => {
    const card = document.createElement("article");
    card.className = "fact-card";
    card.innerHTML = `
      <span class="fact-emoji" aria-hidden="true">${item.emoji}</span>
      <div class="fact-label">${item.label}</div>
      <div class="fact-value">${item.value}</div>
    `;
    grid.append(card);
  });
}

function renderInterests() {
  const grid = $("#interest-grid");
  siteData.interests.forEach((item) => {
    const card = document.createElement("article");
    card.className = "interest-card";
    card.innerHTML = `
      <span class="interest-icon" aria-hidden="true">${item.icon}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    `;
    grid.append(card);
  });
}

function renderPapers() {
  const list = $("#paper-list");
  siteData.papers.forEach((paper) => {
    const card = document.createElement("article");
    card.className = "paper-card";
    const tags = paper.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
    const links = paper.links
      .map((link) => `<a class="paper-link" href="${link.href}">${link.label}</a>`)
      .join("");
    card.innerHTML = `
      <div class="paper-year">${paper.year}</div>
      <div>
        <h3>${paper.title}</h3>
        <div class="paper-meta">${paper.authors} · ${paper.venue}</div>
        <p>${paper.description}</p>
        <div class="tag-row">${tags}</div>
        <div class="paper-links">${links}</div>
      </div>
    `;
    list.append(card);
  });
}

function renderTimeline() {
  const list = $("#timeline-list");
  siteData.timeline.forEach((item) => {
    const card = document.createElement("article");
    card.className = "timeline-item";
    card.innerHTML = `
      <div class="timeline-date">${item.date}</div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    `;
    list.append(card);
  });
}

function renderContact() {
  const panel = $("#contact-panel");
  siteData.contact.forEach((item) => {
    const anchor = document.createElement("a");
    anchor.className = "contact-item";
    anchor.href = item.href;
    if (!item.href.startsWith("#") && !item.href.startsWith("mailto:")) {
      anchor.target = "_blank";
      anchor.rel = "noreferrer";
    }
    anchor.innerHTML = `
      <span class="contact-icon" aria-hidden="true">${item.icon}</span>
      <span class="contact-label">${item.label}</span>
      <span class="contact-value">${item.value}</span>
    `;
    panel.append(anchor);
  });
}

function init() {
  setProfileFields();
  renderActions();
  renderQuickInfo();
  renderFacts();
  renderInterests();
  renderPapers();
  renderTimeline();
  renderContact();
  $("#year").textContent = new Date().getFullYear();
}

init();
