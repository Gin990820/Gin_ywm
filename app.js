const siteData = {
  name: "Weimin Yuan",
  title: "Ph.D. Student | Computer Science | AI & Game Theory",
  photo: "assets/ywm.jpeg?v=hires-2644",
  bio:
    "Hi 👋, My name is Weimin Yuan (Chinese name: 袁伟民). I’m currently learning AI-related technologies and Game Theory. This homepage collects my research interests, publications, projects, and contact information.",
  about:
    "A person who remains curious about both technology and the world. Passionate about basketball 🏀, poker 🃏, and independent thinking, and enjoys finding clear answers within complex problems. Believes in long-termism and that real growth comes from consistent accumulation over time. Still learning, exploring, and trying to create things that are truly valuable.",
  actions: [
    { label: "Email", icon: "✉️", href: "mailto:gin990820@gmail.com", primary: true },
    { label: "CV", icon: "📄", href: "#" },
    { label: "GitHub", icon: "💻", href: "https://github.com/Gin990820" },
    { label: "Scholar", icon: "🎓", href: "https://scholar.google.com/citations?user=KAtP2HUAAAAJ&hl=zh-CN" }
  ],
  quickInfo: [
    { label: "Affiliation", value: "University of Houston", icon: "🏛️" },
    { label: "Location", value: "United States", icon: "📍" },
    { label: "Focus", value: "AI, Game Theory, ML", icon: "🧠" }
  ],
  profilePhotos: [
    "assets/pic/E38D4845-F08C-4668-BE03-8A629129A55A_1_105_c.jpeg",
    "assets/pic/B2303B8D-CBF5-49EE-B157-B3EDCBC1FD6C_1_102_o.jpeg",
    "assets/pic/22A7BD5E-6B17-44A0-BBAF-D6CE10E3C32A_1_105_c.jpeg",
    "assets/pic/2701302B-E757-47F3-893E-A7229D0176E8_1_105_c.jpeg",
    "assets/pic/CA58FB71-EDB9-4784-8602-48DC7783CC78_1_105_c.jpeg",
    "assets/pic/20F9FA7A-8F85-452D-85F0-E90135863D72_1_105_c.jpeg",
    "assets/pic/9C6DF1B5-F411-4339-92B6-CED09A5370AB_1_105_c.jpeg"
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
      authors: "Weimin Yuan, Collaborator C",
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
      authors: "Weimin Yuan et al.",
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

function renderPhotoCarousel() {
  const carousel = $("#photo-carousel");
  if (!carousel || siteData.profilePhotos.length === 0) return;

  const frame = document.createElement("div");
  frame.className = "carousel-frame";

  const track = document.createElement("div");
  track.className = "carousel-track";

  const dots = document.createElement("div");
  dots.className = "carousel-dots";

  let activeIndex = 0;
  let timerId;

  function setActiveSlide(index) {
    activeIndex = index;
    track.style.transform = `translateX(-${activeIndex * 100}%)`;
    $$(".carousel-dot", dots).forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === activeIndex);
    });
  }

  function startAutoPlay() {
    window.clearInterval(timerId);
    timerId = window.setInterval(() => {
      setActiveSlide((activeIndex + 1) % siteData.profilePhotos.length);
    }, 3200);
  }

  siteData.profilePhotos.forEach((src, index) => {
    const slide = document.createElement("figure");
    slide.className = "carousel-slide";
    slide.innerHTML = `<img src="${src}" alt="Personal photo ${index + 1}" loading="${index === 0 ? "eager" : "lazy"}">`;
    track.append(slide);

    const dot = document.createElement("button");
    dot.className = "carousel-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Show photo ${index + 1}`);
    dot.addEventListener("click", () => {
      setActiveSlide(index);
      startAutoPlay();
    });
    dots.append(dot);
  });

  frame.append(track);
  carousel.append(frame, dots);
  carousel.addEventListener("mouseenter", () => window.clearInterval(timerId));
  carousel.addEventListener("mouseleave", startAutoPlay);

  setActiveSlide(0);
  if (siteData.profilePhotos.length > 1) {
    startAutoPlay();
  }
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
  renderPhotoCarousel();
  renderInterests();
  renderPapers();
  renderTimeline();
  renderContact();
  $("#year").textContent = new Date().getFullYear();
}

init();
