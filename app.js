const siteData = {
  name: "Weimin Yuan",
  title: "Ph.D. Candidate | Computer Science | AI & Game Theory",
  photo: "assets/ywm.jpeg?v=hires-2644",
  bio:
    "Hi 👋, My name is Weimin Yuan (Chinese name: 袁伟民). I am currently working on AI-related technologies and Game Theory. This homepage collects my research interests, publications, projects, and contact information.",
  about:
    "A person who remains curious about both technology and the world. Passionate about basketball 🏀, poker 🃏, and independent thinking, and enjoys finding clear answers within complex problems. Believes in long-termism and that real growth comes from consistent accumulation over time. Still learning, exploring, and trying to create things that are truly valuable.",
  actions: [
    { label: "Email", icon: "✉️", href: "mailto:gin990820@gmail.com", primary: true },
    { label: "CV", icon: "📄", href: "assets/cv/Ywm_resume_all_information_version.pdf" },
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
    "assets/pic/2A3DD1FE-7858-4B09-B578-1AD2A7C981CB_1_105_c.jpeg",
    "assets/pic/B2303B8D-CBF5-49EE-B157-B3EDCBC1FD6C_1_102_o.jpeg",
    "assets/pic/22A7BD5E-6B17-44A0-BBAF-D6CE10E3C32A_1_105_c.jpeg",
    "assets/pic/2701302B-E757-47F3-893E-A7229D0176E8_1_105_c.jpeg",
    "assets/pic/CA58FB71-EDB9-4784-8602-48DC7783CC78_1_105_c.jpeg",
    "assets/pic/3DCBB1A0-B9D8-4874-9EBB-6DE349C7FC80_1_105_c.jpeg",
    "assets/pic/20F9FA7A-8F85-452D-85F0-E90135863D72_1_105_c.jpeg",
    "assets/pic/9C6DF1B5-F411-4339-92B6-CED09A5370AB_1_105_c.jpeg"
  ],
  interests: [
    {
      title: "Artificial Intelligence",
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
      title: "Game Theory",
      icon: "🧩",
      description:
        "Mathematical models of strategic decision-making that help analyze interactions, incentives, and learning dynamics in intelligent systems."
    }
  ],
  projects: [
    {
      type: "Competition",
      title: "SMP Challenge @ ACM Multimedia",
      period: "ACM MM / CCF-A",
      description:
        "Participated in the 4th–6th SMP Challenge as Team Leader, focusing on large-scale social multimodal prediction tasks. Our team achieved Top Performance (Second Prize) awards in all three consecutive competitions.",
      tags: ["ACM MM", "SMP", "Multimedia", "Competition"],
      link: "https://smp-challenge.com/",
      image: "assets/fig12.jpg",
      imageAlt: "SMP competition result or certificate",
      mediaLabel: "Result / Certificate"
    },
    {
      type: "Competition",
      title: "Kaggle Competition Silver Medal",
      period: "Kaggle",
      description:
        "Independently participated in the AMP®PD Parkinson’s Disease Progression Prediction Competition, developing models to predict longitudinal MDS-UPDRS scores from protein and peptide-level data. Ranked 37th out of 1,805 (37/1805) teams and received a Silver Medal.",
      tags: ["Kaggle", "Silver Medal", "Data Science", "Machine Learning"],
      link: "https://www.kaggle.com/competitions/amp-parkinsons-disease-progression-prediction",
      image: "assets/fig13.png",
      imageAlt: "Kaggle silver medal result",
      mediaLabel: "Medal / Leaderboard"
    },
    {
      type: "Competition",
      title: "Spatial Dynamic Wind Power Forecasting @ KDD CUP",
      period: "KDD CUP / CCF-A",
      description:
        "Participated in the KDD Cup challenge on Spatial Dynamic Wind Power Forecasting, developing deep learning models to predict wind power generation using large-scale SCADA data from 134 spatially distributed wind turbines. Served as Team Leader and achieved Rank 40/2490, addressing spatiotemporal forecasting challenges involving turbine interactions, weather dynamics, and power grid stability.",
      tags: ["KDD CUP", "Wind Power Forecasting", "Spatial-Temporal", "Deep Learning"],
      link: "https://github.com/LongxingTan/KDDCup2022-WPF",
      image: "assets/fig14.png",
      imageAlt: "KDD Cup wind power forecasting project result",
      mediaLabel: "Result / Certificate"
    },
    {
      type: "Project",
      title: "Project of State Grid Electric Power Company of China",
      period: "Projects",
      description:
        "Led a State Grid Hunan Electric Power Company project on power grid load forecasting, covering abnormal data detection, anomaly correction, and missing data completion. Applied box plots, K-means, interpolation, RNN, LSTM, and GRU methods, and designed a UI for program execution.",
      tags: ["Machine Learning", "Time Series", "Wind Power Forecasting"],
      image: "assets/fig15.jpg",
      imageAlt: "State Grid electric power forecasting project preview",
      mediaLabel: "Project Preview"
    },
  ],
  papers: [
    {
      year: "2026",
      title: "Mean-Field Reinforcement Learning for Large-Scale Populations",
      authors: "Weimin Yuan, Dingwen Pan, Hien Van Nguyen, Yifei Zhu, Dan Wang, Han Yang, and Zhu Han",
      venue: "under review at NeurIPS 2026",
      description:
        "Still under review.",
      tags: ["Mean Field Game", "Reinforcement Learning", "Control"],
      links: [
        { label: "PDF", href: "#" },
        { label: "Code", href: "#" },
      ],
      image: "",
      imageAlt: "Paper figure preview",
      mediaLabel: "Waiting for Publication"
    },
    {
      year: "2026",
      title: "Learning Collusion-Resistant Auctions via Coalition Regret Minimization",
      authors: "Dingwen Pan, Weimin Yuan*, Chenye Wu, Dan Wang, Hien Van Nguyen, and Zhu Han",
      venue: "under review at NeurIPS 2026",
      description:
        "Still under review.",
      tags: ["Auction Theory", "Anti-Collusion", "Machine Learning"],
      links: [
        { label: "PDF", href: "#" },
        { label: "Code", href: "#" },
      ],
      image: "",
      imageAlt: "Paper figure preview",
      mediaLabel: "Waiting for Publication"
    },
    {
      year: "2026",
      title: "ROAD-Former: A Robust Observation-Attribute Decoupling Transformer for Network-Level Pavement Deterioration Forecasting",
      authors: "Weimin Yuan, Lu Gao, and Zhu Han",
      venue: "under review at Transportation Research Part C",
      description:
        "Still under review.",
      tags: ["Deep Learning", "Time Series Forecasting", "Pavement Deterioration"],
      links: [
        { label: "PDF", href: "#" },
        { label: "Slides", href: "#" }
      ],
      image: "",
      imageAlt: "Paper figure preview",
      mediaLabel: "Waiting for Publication"
    },
    {
      year: "2025",
      title: "Deception in Large Language Models: An Audit Game–Theoretic Analysis",
      authors: "Weimin Yuan, Dingwen Pan, Hien Van Nguyen, Yifei Zhu, Dan Wang, Han Yang, and Zhu Han",
      venue: "under review at IEEE Transactions on Network Science and Engineering",
      description:
        "Still under review.",
      tags: ["LLM", "Audit Game", "LLM deception"],
      links: [
        { label: "PDF", href: "#" },
        { label: "Slides", href: "#" }
      ],
      image: "",
      imageAlt: "Paper figure preview",
      mediaLabel: "Waiting for Publication"
    },
    {
      year: "2025",
      title: "Spatio-Temporal Latent Diffusion Inpainting for UAV Radio Map Reconstructions",
      authors: "Alexander Tang, Weimin Yuan, Shiwen Mao, Dusit Niyato, and Zhu Han",
      venue: "Accepted by IEEE Transactions on Vehicular Technology",
      description:
        "This paper proposes a spatio-temporal latent diffusion inpainting framework for reconstructing complete UAV radio maps from sparse partial observations.",
      tags: ["Spatio-Temporal", "Latent Diffusion", "UAV"],
      links: [
        { label: "PDF", href: "#" },
        { label: "Slides", href: "#" }
      ],
      image: "assets/fig1.png",
      imageAlt: "Spatio-temporal latent diffusion paper figure",
      mediaLabel: "Publication"
    },
    {
      year: "2025",
      title: "Enhancing wind power forecasting accuracy under extreme weather: Leveraging a dual-model approach with condition-based classification",
      authors: "Weimin Yuan, Han Yang, Yanru Zhang, and Zhu Han",
      venue: "Accepted by Engineering Applications of Artificial Intelligence",
      description:
        "This paper develops an extreme-weather-aware wind power forecasting framework based on corrected Numerical Weather Prediction (NWP) data. It uses a dual-model architecture to separately model normal and extreme weather regimes, capturing their distinct meteorological and temporal patterns in wind power generation.",
      tags: ["Deep Learning", "Time Series Forecasting", "Wind Power", "Extreme Weather"],
      links: [
        { label: "PDF", href: "https://www.sciencedirect.com/science/article/abs/pii/S0952197625026879" },
        { label: "Slides", href: "#" }
      ],
      image: "assets/fig2.png",
      imageAlt: "Extreme weather wind power forecasting paper figure",
      mediaLabel: "Publication"
    },
    {
      year: "2025",
      title: "CPLLM-WPF: A multi-scale prompting framework for generalizable wind power forecasting with LLMs",
      authors: "Yuqi Liu, Weimin Yuan, Weilong Chen, Wenming Li, Han Yang, and Yanru Zhang",
      venue: "Accepted by Applied Energy",
      description:
        "This paper proposes CPLLM-WPF, a prompt-enhanced LLM framework for wind power forecasting that combines CEEMDAN-based signal decomposition, numerical-to-token reprogramming, and task-aware prompts.",
      tags: ["Time Series Forecasting", "LLM", "Wind Power"],
      links: [
        { label: "PDF", href: "https://www.sciencedirect.com/science/article/pii/S0306261925016423" },
        { label: "Slides", href: "#" }
      ],
      image: "assets/fig3.jpg",
      imageAlt: "Paper figure preview",
      mediaLabel: "Publication"
    },
    {
      year: "2025",
      title: "Integrating Mean-Field Game Theory with Diffusion Model",
      authors: "Weimin Yuan, Weilong Chen, Hien Nguyen, Yifei Zhu, Dan Wang, and Zhu Han",
      venue: "Accepted by IEEE SPAWC 2025",
      description:
        "This work explores an MFG-based view of generative modeling by rewriting diffusion reverse dynamics as optimal path learning. This work leads naturally to a saddle-point formulation, a coupled HJB–FPK system, and two network-style neural parameterizations.",
      tags: ["Mean-Field Game", "Diffusion Model"],
      links: [
        { label: "PDF", href: "https://ieeexplore.ieee.org/iel8/11143241/11143242/11143466.pdf" },
        { label: "Slides", href: "#" }
      ],
      image: "assets/fig4.png",
      imageAlt: "Paper figure preview",
      mediaLabel: "Publication"
    },
      {
      year: "2025",
      title: "Feature Disentangling Dual-stream Network for User Bias Alleviation in Social Media Prediction",
      authors: "Wenhao Hu, Weilong Chen, Weimin Yuan, Xiaolu Chen, Han Yang, Yanru Zhang, and Zhu Han",
      venue: "Accepted by IEEE ICASSP 2025",
      description:
        "This paper identifies user bias in social media popularity prediction, where models over-rely on user features and underuse post content. It proposes FDDN, a feature-disentangling dual-stream network that separates user popularity from multimodal post representations to produce more balanced popularity predictions.",
      tags: ["Deep Learning", "Multimodal", "Social Media Prediction"],
      links: [
        { label: "PDF", href: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10890121" },
        { label: "Slides", href: "#" }
      ],
      image: "assets/fig5.jpg",
      imageAlt: "Paper figure preview",
      mediaLabel: "Publication"
    },
    {
      year: "2024",
      title: "Dual-stream pre-training transformer to enhance multimodal learning for social media prediction",
      authors: "Wenhao Hu, Weilong Chen, Weimin Yuan, Yan Wang, Shimin Cai, and Yanru Zhang",
      venue: "Accepted by ACMMM 2024",
      description:
        "This paper proposes DSPT, a dual-stream pre-training transformer for social media popularity prediction that separately learns visual features and text-structured features to reduce the impact of image-text mismatch. It further uses incremental pre-training and an ensemble regression module to improve multimodal feature representation and prediction accuracy.",
      tags: ["Deep Learning", "Multimodal", "Social Media Prediction", "CLIP"],
      links: [
        { label: "PDF", href: "https://dl.acm.org/doi/epdf/10.1145/3664647.3688998" },
        { label: "Slides", href: "#" }
      ],
      image: "assets/fig6.jpg",
      imageAlt: "Paper figure preview",
      mediaLabel: "Publication"
    },
    {
      year: "2024",
      title: "Tri-modal transformers with mixture-of-modality-experts for social media prediction",
      authors: "Weilong Chen, Wenhao Hu, Xiaolu Chen, Weimin Yuan, Yan Wang, Yanru Zhang, and Zhu Han",
      venue: "Accepted by IEEE Transactions on Circuits and Systems for Video Technology",
      description:
        "This paper studies Social Media Popularity Prediction (SMPP) using tri-modal information, including visual, textual, and structured data. We propose TTME, a Tri-Modal Transformer framework with a Mixture-of-Modality-Experts, which leverages AI-generated content to reduce noise and better integrate heterogeneous modalities during pre-training.",
      tags: ["Deep Learning", "Multimodal", "Social Media Prediction", "AIGC"],
      links: [
        { label: "PDF", href: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10705363" },
        { label: "Slides", href: "#" }
      ],
      image: "assets/fig7.jpg",
      imageAlt: "Paper figure preview",
      mediaLabel: "Publication"
    },
    {
      year: "2024",
      title: "Wind turbine airfoil noise prediction using dedicated airfoil database and deep learning technology",
      authors: "Han Yang, Weimin Yuan*, Weijun Zhu, Zhenye Sun, Yanru Zhang, and Yingjie Zhou",
      venue: "Accepted by Applied Energy",
      description:
        "This paper develops a CNN-based model to efficiently predict aerodynamic noise from wind turbine airfoils. By building a large airfoil database, the study enables accurate and low-cost noise evaluation for low-noise airfoil design.",
      tags: ["Deep Learning", "Computer Vision"],
      links: [
        { label: "PDF", href: "https://www.sciencedirect.com/science/article/pii/S0306261924005488" },
        { label: "Slides", href: "#" }
      ],
      image: "assets/fig8.jpg",
      imageAlt: "Paper figure preview",
      mediaLabel: "Publication"
    },
    {
      year: "2022",
      title: "Inference-Based Deep Reinforcement Learning for Physics-Based Character Control",
      authors: "Yuxi Chen, Chenghao Huang, Weimin Yuan, Yutong Wu, Ziyi Zhang, Hao Tang, and Yanru Zhang",
      venue: "Accepted by IEEE DependSys 2022 (Best Paper Award)",
      description:
        "This paper proposes an inference-based deep reinforcement learning framework for physics-based character control, introducing a Redirection Factor to generate more natural turning trajectories toward target locations. By decoupling trajectory redirection from the DRL network and simplifying skeletal feature representation, the method improves motion fidelity while reducing training instability, resource cost, and time consumption.",
      tags: ["Reinforcement Learning", "Character Control"],
      links: [
        { label: "PDF", href: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10074844" },
        { label: "Slides", href: "#" }
      ],
      image: "assets/fig9.jpg",
      imageAlt: "Paper figure preview",
      mediaLabel: "Publication"
    },
    {
      year: "2022",
      title: "Title-and-Tag Contrastive Vision-and-Language Transformer for Social Media Popularity Prediction",
      authors: "Weilong Chen, Chenghao Huang, Weimin Yuan, Xiaolu Chen, Wenhao Hu, Xinran Zhang, Yanru Zhang",
      venue: "Accepted by ACMMM",
      description:
        "This paper proposes TTC-VLT, a vision-language framework for social media popularity prediction that separately models title-visual and tag-visual relationships through contrastive learning. It also incorporates transformed user features as embeddings, achieving strong performance and ranking 2nd in the Social Media Prediction Challenge 2022.",
      tags: ["Deep Learning", "Multimodal", "Social Media Prediction"],
      links: [
        { label: "PDF", href: "https://dl.acm.org/doi/epdf/10.1145/3503161.3551568" },
        { label: "Slides", href: "#" }
      ],
      image: "assets/fig10.jpg",
      imageAlt: "Paper figure preview",
      mediaLabel: "Publication"
    },
    {
      year: "2022",
      title: "A generic pre-trained BERT-based framework for social media health text classification",
      authors: "Chenghao Huang, Xiaolu Chen, Yuxi Chen, Yutong Wu, Weimin Yuan, Yan Wang, and Yanru Zhang",
      venue: "Accepted by Proceedings of The Seventh Workshop on Social Media Mining for Health Applications, Workshop & Shared Task",
      description:
        "This paper presents a generic BERT-based framework for social media health text classification across 10 SMM4H 2022 tasks, using R-drop, EMA, focal loss, 5-fold cross-validation, ensemble prediction, and pseudo-labeling. The framework improves overall F1 performance and achieves 1st place in Task 3a, demonstrating strong generalization for noisy health-related social media texts.",
      tags: ["Deep Learning", "NLP"],
      links: [
        { label: "PDF", href: "https://aclanthology.org/2022.smm4h-1.4.pdf" },
        { label: "Slides", href: "#" }
      ],
      image: "assets/fig11.jpg",
      imageAlt: "Paper figure preview",
      mediaLabel: "Publication"
    },


  ],
  timeline: [
    {
      date: "2024 - Present",
      title: "Ph.D. Candidate at the University of Houston (UH)",
      description: "Major in Electrical Engineering. Advisor: Dr. Zhu Han."
    },
    {
      date: "2021 - 2024",
      title: "M.S. in Computer Technology, University of Electronic Science and Technology of China (UESTC)",
      description: "Major in Computer Technology. GPA: 3.84/4.0; Ranking: 32/465."
    },
    {
      date: "2017 - 2021",
      title: "B.Eng. in Computer Science and Technology, East China Jiaotong University (ECJTU)",
      description: "Major in Computer Science and Technology. GPA: 3.78/5.0; Ranking: 2/66."
    }
  ],
  contact: [
    { label: "Email", value: "gin990820@gmail.com", icon: "✉️", href: "mailto:gin990820@gmail.com" },
    { label: "GitHub", value: "Gin990820", icon: "💻", href: "https://github.com/Gin990820" },
    { label: "Google Scholar", value: "Scholar profile", icon: "🎓", href: "https://scholar.google.com/citations?user=KAtP2HUAAAAJ&hl=zh-CN" },
    { label: "Office", value: "UH ECE Department (Building 2)", icon: "🏛️", href: "#" }
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

  document.title = `${siteData.name} | Personal Homepage`;
  const description = $('meta[name="description"]');
  if (description) {
    description.content = `${siteData.name}'s personal homepage, research interests, projects, papers, and contact information.`;
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

function createMediaSlot(item, className, fallbackLabel) {
  if (item.image) {
    return `
      <figure class="${className}">
        <img src="${item.image}" alt="${item.imageAlt || fallbackLabel}">
      </figure>
    `;
  }

  return `
    <figure class="${className} media-placeholder">
      <span>${item.mediaLabel || fallbackLabel}</span>
    </figure>
  `;
}

function formatPaperVenue(venue) {
  if (!venue) return "";

  const normalizedVenue = venue.replace(/\s*🎉\s*$/u, "");
  const highlightedVenue = normalizedVenue.replace(
    "(Best Paper Award)",
    '<span class="paper-award">(Best Paper Award)</span>'
  );
  if (/^accept(?:ed)?\b/i.test(normalizedVenue.trim())) {
    return `<strong class="paper-accepted">${highlightedVenue} 🎉</strong>`;
  }

  return highlightedVenue;
}

function getPaperLinkIcon(label) {
  const normalizedLabel = label.toLowerCase();
  if (normalizedLabel.includes("pdf")) return "📄";
  if (normalizedLabel.includes("slide")) return "🖥️";
  return "🔗";
}

function createPaperLink(link) {
  const icon = getPaperLinkIcon(link.label);
  if (!link.href || link.href === "#") {
    return `<span class="paper-link disabled" aria-disabled="true"><span aria-hidden="true">${icon}</span><span>${link.label}</span></span>`;
  }

  const isExternal = link.href && !link.href.startsWith("#");
  const targetAttributes = isExternal ? ' target="_blank" rel="noreferrer"' : "";
  return `<a class="paper-link" href="${link.href}"${targetAttributes}><span aria-hidden="true">${icon}</span><span>${link.label}</span></a>`;
}

function createProjectTitle(project) {
  if (!project.link) return project.title;

  return `<a class="project-title-link" href="${project.link}" target="_blank" rel="noreferrer">${project.title}<span aria-hidden="true">↗</span></a>`;
}

function renderProjects() {
  const grid = $("#project-grid");
  siteData.projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";
    const tags = project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
    const media = createMediaSlot(project, "project-media", "Result / Certificate");
    const title = createProjectTitle(project);
    card.innerHTML = `
      <div class="project-main">
        <div class="project-topline">
          <span class="project-type">${project.type}</span>
          <span class="project-meta">${project.period}</span>
        </div>
        <h3>${title}</h3>
        <p>${project.description}</p>
        <div class="tag-row">${tags}</div>
      </div>
      ${media}
    `;
    grid.append(card);
  });
}

function renderPapers() {
  const list = $("#paper-list");
  siteData.papers.forEach((paper, index) => {
    const card = document.createElement("article");
    card.className = "paper-card";
    const tags = (paper.tags || []).map((tag) => `<span class="tag">${tag}</span>`).join("");
    const links = (paper.links || [])
      .map((link) => createPaperLink(link))
      .join("");
    const media = createMediaSlot(paper, "paper-media", "Paper Image");
    const detailId = `paper-detail-${index}`;
    const toggleId = `paper-toggle-${index}`;
    const venue = formatPaperVenue(paper.venue);
    card.innerHTML = `
      <button class="paper-summary" id="${toggleId}" type="button" aria-expanded="false" aria-controls="${detailId}">
        <span class="paper-compact-year">${paper.year}</span>
        <span class="paper-summary-title">${paper.title}</span>
        <span class="paper-toggle-icon" aria-hidden="true">⌄</span>
      </button>
      <div class="paper-detail" id="${detailId}" role="region" aria-labelledby="${toggleId}">
        <div class="paper-main">
          <div class="paper-meta">${paper.authors} · ${venue}</div>
          <p>${paper.description}</p>
          <div class="tag-row">${tags}</div>
          <div class="paper-links">${links}</div>
        </div>
        ${media}
      </div>
    `;
    const toggle = card.querySelector(".paper-summary");
    toggle.addEventListener("click", () => {
      const shouldOpen = !card.classList.contains("is-open");
      list.querySelectorAll(".paper-card.is-open").forEach((openCard) => {
        openCard.classList.remove("is-open");
        const openToggle = openCard.querySelector(".paper-summary");
        if (openToggle) {
          openToggle.setAttribute("aria-expanded", "false");
        }
      });

      card.classList.toggle("is-open", shouldOpen);
      toggle.setAttribute("aria-expanded", String(shouldOpen));
    });
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
    const hasLink = item.href && item.href !== "#";
    const anchor = document.createElement(hasLink ? "a" : "div");
    anchor.className = `contact-item${hasLink ? "" : " disabled"}`;
    if (hasLink) {
      anchor.href = item.href;
      if (!item.href.startsWith("mailto:")) {
        anchor.target = "_blank";
        anchor.rel = "noreferrer";
      }
    } else {
      anchor.setAttribute("aria-disabled", "true");
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
  renderProjects();
  renderPapers();
  renderTimeline();
  renderContact();
  $("#year").textContent = new Date().getFullYear();
}

init();
