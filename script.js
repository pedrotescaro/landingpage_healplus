const STORAGE_KEY = "healplus-language";
const SUPPORTED_LANGUAGES = ["pt", "en", "es"];

const header = document.getElementById("site-header");
const navToggle = document.getElementById("nav-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];
const copyButtons = document.querySelectorAll("[data-copy-target]");
const descriptionMeta = document.querySelector('meta[name="description"]');
const skipLink = document.querySelector(".skip-link");
const topBrand = document.querySelector("header .brand");
const footerBrand = document.querySelector(".footer-brand");
const localeSwitches = document.querySelectorAll(".locale-switch");
const localeButtons = document.querySelectorAll(".locale-switch-option[data-lang]");
const desktopNavLinks = document.querySelectorAll(".nav-links a");
const mobileNavLinks = document.querySelectorAll("#mobile-menu > a");
const navCtaLabel = document.querySelector(".nav-cta span");
const heroEyebrow = document.querySelector(".hero-copy .eyebrow");
const heroTitle = document.querySelector(".hero-copy h1");
const heroText = document.querySelector(".hero-text");
const heroPrimaryCta = document.querySelector(".hero-actions .button-primary span");
const heroSecondaryCta = document.querySelector(".hero-actions .button-secondary span");
const heroBadges = document.querySelectorAll(".hero-badge-label");
const heroBadgesContainer = document.querySelector(".hero-badges");
const heroVisual = document.querySelector(".hero-visual");
const heroScreens = document.querySelectorAll(".screen-photo-image");
const introGrid = document.querySelector(".intro-grid");
const introCards = document.querySelectorAll(".intro-cards .intro-card");
const contrastCards = document.querySelectorAll(".contrast-section .contrast-card");
const featureCards = document.querySelectorAll(".feature-grid .feature-card");
const workflowSection = document.querySelector(".workflow-section");
const workflowCards = document.querySelectorAll(".workflow-grid .workflow-card");
const techSection = document.getElementById("tecnologia");
const techCards = document.querySelectorAll(".tech-showcase-grid .tech-stack-card");
const supportSection = document.getElementById("contribuicao");
const supportSpecs = supportSection ? supportSection.querySelectorAll(".support-spec-row") : [];
const supportDownloadLink = supportSection ? supportSection.querySelector(".support-download-link") : null;
const supportCopyButton = document.querySelector(".support-copy-button");
const supportCopyLabel = document.querySelector(".support-copy-label");
const authorSection = document.getElementById("integrantes");
const faqSection = document.getElementById("faq");
const faqItems = document.querySelectorAll(".faq-item");
const contactSection = document.getElementById("contato");
const contactCards = document.querySelectorAll(".contact-card");
const footer = document.querySelector(".site-footer");
const footerKickers = footer ? footer.querySelectorAll(".footer-kicker") : [];
const footerColumnTitle = footer ? footer.querySelector(".footer-column-title") : null;
const footerLinks = footer ? footer.querySelectorAll(".footer-column .footer-link") : [];
const footerLegalItems = footer ? footer.querySelectorAll(".footer-legal-item span") : [];
const footerStatusChips = footer ? footer.querySelectorAll(".footer-status-chip") : [];
const footerStatusChipsWrap = footer ? footer.querySelector(".footer-status-chips") : null;
const footerBannerText = footer ? footer.querySelector(".footer-banner span") : null;

const syncHeaderState = () => {
  header.classList.toggle("scrolled", window.scrollY > 12);
};

const setMenuState = open => {
  header.classList.toggle("menu-open", open);

  if (navToggle) {
    navToggle.setAttribute("aria-expanded", String(open));
  }
};

const fallbackCopy = text => {
  const input = document.createElement("textarea");
  input.value = text;
  input.setAttribute("readonly", "");
  input.style.position = "absolute";
  input.style.left = "-9999px";
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
};

const setText = (node, value) => {
  if (node && value !== undefined) {
    node.textContent = value;
  }
};

const setTexts = (nodes, values) => {
  nodes.forEach((node, index) => {
    if (values[index] !== undefined) {
      node.textContent = values[index];
    }
  });
};

const setCardContent = (cards, items) => {
  cards.forEach((card, index) => {
    const item = items[index];

    if (!item) {
      return;
    }

    setText(card.querySelector("strong"), item.title);
    setText(card.querySelector("p"), item.text);
  });
};

const setWorkflowContent = (cards, items) => {
  cards.forEach((card, index) => {
    const item = items[index];

    if (!item) {
      return;
    }

    setText(card.querySelector(".workflow-step"), item.step);
    setText(card.querySelector("strong"), item.title);
    setText(card.querySelector("p"), item.text);
  });
};

const setFaqContent = items => {
  faqItems.forEach((item, index) => {
    const current = items[index];

    if (!current) {
      return;
    }

    setText(item.querySelector(".faq-question"), current.question);
    setText(item.querySelector(".faq-answer p"), current.answer);
  });
};

const setLocaleButtons = activeLanguage => {
  localeButtons.forEach(button => {
    const isActive = button.dataset.lang === activeLanguage;
    button.classList.toggle("locale-switch-option-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const readCardContent = cards =>
  Array.from(cards).map(card => ({
    title: card.querySelector("strong")?.textContent.trim() || "",
    text: card.querySelector("p")?.textContent.trim() || "",
  }));

const readWorkflowContent = cards =>
  Array.from(cards).map(card => ({
    step: card.querySelector(".workflow-step")?.textContent.trim() || "",
    title: card.querySelector("strong")?.textContent.trim() || "",
    text: card.querySelector("p")?.textContent.trim() || "",
  }));

const readFaqContent = items =>
  Array.from(items).map(item => ({
    question: item.querySelector(".faq-question")?.textContent.trim() || "",
    answer: item.querySelector(".faq-answer p")?.textContent.trim() || "",
  }));

const readTextArray = nodes => Array.from(nodes).map(node => node.textContent.trim());

const captureBaseContent = () => {
  const introCopy = introGrid ? introGrid.querySelectorAll(".section-copy p") : [];
  const introLabel = introGrid ? introGrid.querySelector(".section-label") : null;
  const introTitle = introGrid ? introGrid.querySelector(".section-title") : null;
  const problemCard = contrastCards[0];
  const solutionCard = contrastCards[1];
  const resourcesLabel = document.querySelector("#recursos .section-label");
  const resourcesTitle = document.querySelector("#recursos .section-title");
  const resourcesCopy = document.querySelector("#recursos .section-copy");
  const workflowLabel = workflowSection ? workflowSection.querySelector(".section-label") : null;
  const workflowTitle = workflowSection ? workflowSection.querySelector(".section-title") : null;
  const workflowCopy = workflowSection ? workflowSection.querySelector(".section-copy") : null;
  const techLabel = techSection ? techSection.querySelector(".tech-showcase-label") : null;
  const techTitle = techSection ? techSection.querySelector(".tech-showcase-title") : null;
  const techCopy = techSection ? techSection.querySelector(".tech-showcase-copy") : null;
  const supportLabel = supportSection ? supportSection.querySelector(".support-label") : null;
  const supportTitle = supportSection ? supportSection.querySelector(".support-title") : null;
  const supportCopy = supportSection ? supportSection.querySelector(".support-copy") : null;
  const supportDownloadHeading = supportSection ? supportSection.querySelector(".support-panel-head h3") : null;
  const supportDownloadCopy = supportSection ? supportSection.querySelector(".support-panel-copy") : null;
  const supportPixLabel = supportSection ? supportSection.querySelector(".support-pix-label") : null;
  const supportPixChip = supportSection ? supportSection.querySelector(".support-pix-chip") : null;
  const supportFootnote = supportSection ? supportSection.querySelector(".support-footnote") : null;
  const authorLabel = authorSection ? authorSection.querySelector(".author-label") : null;
  const authorTitle = authorSection ? authorSection.querySelector(".author-title") : null;
  const authorCopies = authorSection ? authorSection.querySelectorAll(".author-copy") : [];
  const authorGroupTitles = authorSection ? authorSection.querySelectorAll(".author-group-title") : [];
  const authorGroups = authorSection ? authorSection.querySelectorAll(".author-group") : [];
  const officialCards = authorGroups[0] ? authorGroups[0].querySelectorAll(".author-card") : [];
  const teamCards = authorGroups[1] ? authorGroups[1].querySelectorAll(".author-card-static") : [];
  const authorNotes = authorSection ? authorSection.querySelectorAll(".author-note span") : [];
  const faqLabel = faqSection ? faqSection.querySelector(".faq-transition-label") : null;
  const faqTitle = faqSection ? faqSection.querySelector(".faq-transition-title") : null;
  const faqIntro = faqSection ? faqSection.querySelector(".faq-transition-intro") : null;
  const contactLabel = contactSection ? contactSection.querySelector(".contact-label") : null;
  const contactTitle = contactSection ? contactSection.querySelector(".contact-title") : null;
  const contactCopy = contactSection ? contactSection.querySelector(".contact-copy") : null;

  return {
    meta: {
      htmlLang: document.documentElement.lang,
      title: document.title,
      description: descriptionMeta?.getAttribute("content") || "",
      skipLink: skipLink?.textContent.trim() || "",
      brandHomeAria: topBrand?.getAttribute("aria-label") || "",
      footerBrandAria: footerBrand?.getAttribute("aria-label") || "",
      menuAria: navToggle?.getAttribute("aria-label") || "",
      localeAria: localeSwitches[0]?.getAttribute("aria-label") || "",
      heroBadgesAria: heroBadgesContainer?.getAttribute("aria-label") || "",
      heroVisualAria: heroVisual?.getAttribute("aria-label") || "",
      footerStatusAria: footerStatusChipsWrap?.getAttribute("aria-label") || "",
      screenAlts: Array.from(heroScreens).map(image => image.alt),
    },
    nav: {
      links: readTextArray(desktopNavLinks),
      mobileLinks: readTextArray(mobileNavLinks),
      cta: navCtaLabel?.textContent.trim() || "",
    },
    hero: {
      eyebrow: heroEyebrow?.textContent.trim() || "",
      titleMain: heroTitle?.childNodes[0]?.textContent.trim() || "",
      titleAccent: heroTitle?.querySelector("span")?.textContent.trim() || "",
      text: heroText?.textContent.trim() || "",
      primaryCta: heroPrimaryCta?.textContent.trim() || "",
      secondaryCta: heroSecondaryCta?.textContent.trim() || "",
      badges: readTextArray(heroBadges),
    },
    intro: {
      label: introLabel?.textContent.trim() || "",
      title: introTitle?.textContent.trim() || "",
      copy: readTextArray(introCopy),
      cards: readCardContent(introCards),
    },
    contrast: {
      problemLabel: problemCard?.querySelector(".section-label")?.textContent.trim() || "",
      problemTitle: problemCard?.querySelector(".section-title")?.textContent.trim() || "",
      problemBullets: readTextArray(problemCard ? problemCard.querySelectorAll(".bullet-list li") : []),
      solutionLabel: solutionCard?.querySelector(".section-label")?.textContent.trim() || "",
      solutionTitle: solutionCard?.querySelector(".section-title")?.textContent.trim() || "",
      solutionBullets: readTextArray(solutionCard ? solutionCard.querySelectorAll(".bullet-list li") : []),
    },
    resources: {
      label: resourcesLabel?.textContent.trim() || "",
      title: resourcesTitle?.textContent.trim() || "",
      copy: resourcesCopy?.textContent.trim() || "",
      cards: readCardContent(featureCards),
    },
    workflow: {
      label: workflowLabel?.textContent.trim() || "",
      title: workflowTitle?.textContent.trim() || "",
      copy: workflowCopy?.textContent.trim() || "",
      steps: readWorkflowContent(workflowCards),
    },
    tech: {
      label: techLabel?.textContent.trim() || "",
      title: techTitle?.textContent.trim() || "",
      copy: techCopy?.textContent.trim() || "",
      cards: readCardContent(techCards),
    },
    support: {
      label: supportLabel?.textContent.trim() || "",
      title: supportTitle?.textContent.trim() || "",
      copy: supportCopy?.textContent.trim() || "",
      downloadHeading: supportDownloadHeading?.textContent.trim() || "",
      downloadButton: supportDownloadLink?.textContent.trim() || "",
      downloadCopy: supportDownloadCopy?.textContent.trim() || "",
      specs: Array.from(supportSpecs).map(row => ({
        label: row.querySelector("span")?.textContent.trim() || "",
        value: row.querySelector("strong")?.textContent.trim() || "",
      })),
      pixLabel: supportPixLabel?.textContent.trim() || "",
      pixChip: supportPixChip?.textContent.trim() || "",
      copyButton: supportCopyButton?.getAttribute("data-default-label") || "",
      copySuccess: supportCopyButton?.getAttribute("data-success-label") || "",
      footnote: supportFootnote?.textContent.trim() || "",
    },
    author: {
      label: authorLabel?.textContent.trim() || "",
      title: authorTitle?.textContent.trim() || "",
      copy: readTextArray(authorCopies),
      groupTitles: readTextArray(authorGroupTitles),
      officialCards: Array.from(officialCards).map(card => ({
        label: card.querySelector("small")?.textContent.trim() || "",
        value: card.querySelector("strong")?.textContent.trim() || "",
      })),
      teamRoles: Array.from(teamCards).map(card => card.querySelector("small")?.textContent.trim() || ""),
      notes: readTextArray(authorNotes),
    },
    faq: {
      label: faqLabel?.textContent.trim() || "",
      title: faqTitle?.textContent.trim() || "",
      intro: faqIntro?.textContent.trim() || "",
      items: readFaqContent(faqItems),
    },
    contact: {
      label: contactLabel?.textContent.trim() || "",
      title: contactTitle?.textContent.trim() || "",
      copy: contactCopy?.textContent.trim() || "",
      cards: readCardContent(contactCards),
    },
    footer: {
      tagline: footer?.querySelector(".footer-tagline")?.textContent.trim() || "",
      description: footer?.querySelector(".footer-description")?.textContent.trim() || "",
      meta: footer?.querySelector(".footer-meta")?.textContent.trim() || "",
      columnTitle: footerColumnTitle?.textContent.trim() || "",
      kickers: readTextArray(footerKickers),
      links: footerLinks.length
        ? [
            footerLinks[0].querySelector("span")?.textContent.trim() || "",
            ...Array.from(footerLinks)
              .slice(1)
              .map(link => link.textContent.trim()),
          ]
        : [],
      legal: readTextArray(footerLegalItems),
      copyright: footer?.querySelector(".footer-copyright")?.textContent.trim() || "",
      chips: readTextArray(footerStatusChips),
      banner: footerBannerText?.textContent.trim() || "",
    },
  };
};

const mergeContent = (base, overrides) => {
  if (Array.isArray(base) || Array.isArray(overrides)) {
    return overrides !== undefined ? overrides : base;
  }

  if (
    base &&
    typeof base === "object" &&
    overrides &&
    typeof overrides === "object"
  ) {
    const merged = { ...base };

    Object.keys(overrides).forEach(key => {
      merged[key] = mergeContent(base[key], overrides[key]);
    });

    return merged;
  }

  return overrides !== undefined ? overrides : base;
};

const baseContent = captureBaseContent();
const translations = {};

Object.assign(translations, {
  en: {
    meta: {
      htmlLang: "en",
      title: "Heal+ | Smarter care. Visible progress.",
      description:
        "Official landing page for Heal+, an app for patient follow-up, wound assessment, clinical scheduling, reports and a local assistant.",
      skipLink: "Skip to content",
      brandHomeAria: "Heal+ - home",
      footerBrandAria: "Heal+ - back to top",
      menuAria: "Open menu",
      localeAria: "Page language",
      heroBadgesAria: "Heal+ highlights",
      heroVisualAria: "Real Heal+ screens",
      footerStatusAria: "Footer languages",
      screenAlts: [
        "Real Heal+ login screen",
        "Real Heal+ home screen",
        "Real Heal+ patients screen",
      ],
    },
    nav: {
      links: ["Features", "Technology", "Support", "Credits"],
      mobileLinks: ["Features", "Technology", "Support", "Credits", "Contact"],
      cta: "Download APK",
    },
    hero: {
      eyebrow: "Mobile app | Clinical | Local database",
      titleMain: "Smarter care.",
      titleAccent: "Visible progress.",
      text:
        "Heal+ organizes patients, assessments, images, clinical scheduling and reports in a direct, secure experience built for the daily wound care routine.",
      primaryCta: "Download APK free",
      secondaryCta: "View features",
      badges: [
        "Patient records ready",
        "Structured assessment",
        "Photo comparison",
        "PDF reports",
        "Local assistant",
        "Stored on device",
      ],
    },
    intro: {
      label: "What is Heal+",
      title: "A clinical hub for wound follow-up with more clarity, consistency and safety.",
      copy: [
        "Heal+ was designed for professionals who need less rework, better organization and faster clinical insight.",
        "Instead of a generic screen, the system brings registration, assessment, images, scheduling, reports and assisted consultation into one environment.",
      ],
      cards: [
        {
          title: "Organized patients",
          text: "Personal data, assessment history and follow-up always easy to access.",
        },
        {
          title: "Progress with images and data",
          text: "Photos, measurements, infection signs and comparisons in just a few taps.",
        },
        {
          title: "Professional flow",
          text: "Clinical scheduling, planned returns, reports and PDF export.",
        },
        {
          title: "Local-first base",
          text: "Everything saved on the device, with fast response and no internet dependency.",
        },
      ],
    },
    contrast: {
      problemLabel: "The problem",
      problemTitle: "Care becomes heavy when information is scattered everywhere.",
      problemBullets: [
        "Registrations, photos and notes end up spread across too many places.",
        "Returns and reassessments demand too much mental tracking.",
        "Comparing progress between visits turns into rework.",
        "Generating reports and sharing information takes too long.",
      ],
      solutionLabel: "The solution",
      solutionTitle: "Heal+ organizes clinical reasoning into a clearer flow.",
      solutionBullets: [
        "Centralized registration with patient history always within reach.",
        "Guided assessment with structured fields and faster reading.",
        "Comparison of photos, measurements and signs in just a few steps.",
        "Scheduling, reports and a local assistant supporting follow-up.",
      ],
    },
    resources: {
      label: "Features",
      title: "Everything Heal+ needs to show, without visual overload.",
      copy:
        "Essential features designed to register, track and document clinical progress with clarity in everyday use.",
      cards: [
        {
          title: "Patient registration",
          text: "Name, contact, history and quick access for new assessments and reviews.",
        },
        {
          title: "Structured assessment",
          text: "Clinical fields organized to record tissue, moisture, edges, pain and infection.",
        },
        {
          title: "Clinical scheduling",
          text: "Returns, follow-ups, dressing changes and photo-based visits in one flow.",
        },
        {
          title: "Progress comparison",
          text: "View before and now with image support, compared area and improvement indicators.",
        },
        {
          title: "PDF reports",
          text: "Visit export and comparison reports for documentation and sharing.",
        },
        {
          title: "Local assistant",
          text: "Ask about patients, schedule and internal data with no token cost and no cloud dependency.",
        },
      ],
    },
    workflow: {
      label: "App flow",
      title: "From registration to reporting, the experience was designed for real use.",
      copy: "Heal+ values a logical sequence: register, assess, follow up and document.",
      steps: [
        {
          step: "Step 1",
          title: "Register the case",
          text: "Create the patient record, organize the initial data and leave the history ready for future reassessments.",
        },
        {
          step: "Step 2",
          title: "Track progress",
          text: "Capture images, update clinical signs, compare measurements and monitor treatment response.",
        },
        {
          step: "Step 3",
          title: "Define conduct and return",
          text: "Close the assessment, schedule the next visit and export a report whenever you need to share it.",
        },
      ],
    },
    tech: {
      label: "Technologies",
      title: "Modern stack. Solid foundation.",
      copy:
        "Heal+ uses a lean and reliable base, aligned with the real mobile app and ready for continuous evolution without losing interface clarity.",
      cards: [
        {
          title: "Expo",
          text: "Cross-platform base used for packaging, runtime and development workflow.",
        },
        {
          title: "React 19",
          text: "Main layer for interface composition and the declarative logic of the project.",
        },
        {
          title: "React Native",
          text: "Foundation of the mobile experience used to render the app screens.",
        },
        {
          title: "AsyncStorage",
          text: "Local persistence used to keep information available on the device.",
        },
        {
          title: "React Native Paper",
          text: "Component library that helps maintain visual consistency and productivity.",
        },
        {
          title: "Expo Image Picker",
          text: "Support for capturing clinical images and progress comparisons during follow-up.",
        },
        {
          title: "Expo Print",
          text: "Printable content generation for reports and care documentation.",
        },
        {
          title: "Expo Sharing",
          text: "Native sharing of files and outputs generated by the application itself.",
        },
      ],
    },
    support: {
      label: "Support the project",
      title: "Help Heal+ keep evolving.",
      copy:
        "Heal+ is an independent project. If the app makes sense in your daily work, your support helps keep interface improvements, clinical refinement and new deliveries moving forward.",
      downloadHeading: "Official download",
      downloadButton: "Download APK",
      downloadCopy:
        "Use only the official link on this page to provide the Heal+ APK. Once the final file is placed in the landing folder, this will be the official download channel for the app.",
      specs: [
        { label: "File", value: "healplus.apk" },
        { label: "Status", value: "Link ready" },
        { label: "Platform", value: "Android" },
        { label: "Official channel", value: "This Heal+ landing page" },
      ],
      pixLabel: "Pix key",
      pixChip: "Pix",
      copyButton: "Copy key",
      copySuccess: "Key copied",
      footnote: "100% voluntary support. The app will remain free.",
    },
    author: {
      label: "Credits",
      title: "Built by Pedro Antônio Silvestre Tescaro.",
      copy: [
        "Heal+ was structured to present the application with more credibility, clinical clarity and a consistent visual identity from the beginning to the end of the experience.",
        "The team highlighted on this landing also includes Guilherme Alves de Campos and Paulo Henrique Leal dos Santos, reinforcing the shared authorship of the project.",
      ],
      groupTitles: ["Official channels", "Project team"],
      officialCards: [
        { label: "Email", value: "healgrupo@gmail.com" },
        { label: "GitHub", value: "github.com/pedrotescaro" },
        { label: "Official download", value: "Heal+ APK" },
      ],
      teamRoles: ["Lead", "Member", "Member"],
      notes: [
        "The official Heal+ and project authorship channels are listed on this page.",
      ],
    },
    faq: {
      label: "FAQ",
      title: "Frequently asked questions.",
      intro:
        "Quick answers for anyone who wants to understand Heal+, download the APK with confidence and know how the project works in practice.",
      items: [
        {
          question: "Does Heal+ work offline?",
          answer:
            "Yes. The app was designed for daily use with a local database on the device, keeping the clinical routine agile even without internet.",
        },
        {
          question: "Where do I get the official APK?",
          answer:
            "The official download happens through this very landing page, using the APK buttons and the institutional project area.",
        },
        {
          question: "Are the data stored on the device?",
          answer:
            "Heal+ prioritizes local data, offering more control over the clinical routine and less dependence on external services in everyday use.",
        },
        {
          question: "Was Heal+ designed for real clinical routine?",
          answer:
            "Yes. The landing and the application highlight patient registration, assessments, image follow-up, scheduling and reports in a direct flow.",
        },
        {
          question: "How can I support the project?",
          answer:
            "You can support it by using the official Pix key shown in the support section, helping keep Heal+ improving over time.",
        },
        {
          question: "Who is behind Heal+?",
          answer:
            "The credits shown on this page bring together Pedro Antônio Silvestre Tescaro, Guilherme Alves de Campos and Paulo Henrique Leal dos Santos.",
        },
        {
          question: "How do I get in touch?",
          answer:
            "In the contact section you will find the official project channels, including LinkedIn, email and GitHub.",
        },
        {
          question: "Will the app keep evolving?",
          answer:
            "This landing already presents Heal+ as a living project, with its own identity, continuous improvements and a focus on product credibility.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let's talk.",
      copy:
        "If you want to talk about Heal+, send feedback, discuss improvements or follow the project's credits, these are the official channels.",
      cards: [
        {
          title: "LinkedIn",
          text: "Professional profile, networking and institutional presentation of the project.",
        },
        {
          title: "Email",
          text: "Bugs, feedback, questions and direct contact about Heal+.",
        },
        {
          title: "GitHub",
          text: "Code, repositories, technical history and project evolution.",
        },
      ],
    },
    footer: {
      tagline: "Smarter care. Visible progress.",
      description:
        "Official Heal+ landing page with clinical focus, its own identity and a professional presentation of the application.",
      meta: "Independent project | Interface aligned with the mobile app | Local database",
      columnTitle: "Official channels",
      kickers: ["Links", "Legal"],
      links: ["Download APK", "Features", "Technology", "Support", "Credits", "Email"],
      legal: [
        "Local data and use without external tracking in the main flow.",
        "Visual identity, palette and message aligned with the Heal+ project.",
        "Independent project with a presentation focused on credibility and clarity.",
      ],
      copyright: "\u00A9 2026 Heal+. Independent project.",
      chips: ["PT", "EN", "ES"],
      banner: "Official Pix support channel: pedroatescaro@gmail.com.",
    },
  },
});

translations.es = {
  meta: {
    htmlLang: "es",
    title: "Heal+ | Cuidado inteligente. Evolución visible.",
    description:
      "Landing oficial de Heal+, aplicación para seguimiento de pacientes, evaluación de heridas, agenda clínica, reportes y asistente local.",
    skipLink: "Ir al contenido",
    brandHomeAria: "Heal+ - inicio",
    footerBrandAria: "Heal+ - volver arriba",
    menuAria: "Abrir menú",
    localeAria: "Idioma de la página",
    heroBadgesAria: "Puntos clave de Heal+",
    heroVisualAria: "Pantallas reales de Heal+",
    footerStatusAria: "Idiomas del pie",
    screenAlts: [
      "Pantalla real de inicio de sesión de Heal+",
      "Pantalla real inicial de Heal+",
      "Pantalla real de pacientes de Heal+",
    ],
  },
  nav: {
    links: ["Recursos", "Tecnología", "Apoyo", "Autoría"],
    mobileLinks: ["Recursos", "Tecnología", "Apoyo", "Autoría", "Contacto"],
    cta: "Descargar APK",
  },
  hero: {
    eyebrow: "App móvil | Clínico | Base local",
    titleMain: "Cuidado inteligente.",
    titleAccent: "Evolución visible.",
    text:
      "Heal+ organiza pacientes, evaluaciones, imágenes, agenda clínica e informes en una experiencia directa, segura y pensada para la rutina diaria del seguimiento de heridas.",
    primaryCta: "Descargar APK gratis",
    secondaryCta: "Ver recursos",
    badges: [
      "Pacientes en orden",
      "Evaluación estructurada",
      "Comparación fotográfica",
      "Informes en PDF",
      "Asistente local",
      "Todo guardado en el dispositivo",
    ],
  },
  intro: {
    label: "Qué es Heal+",
    title: "Un centro clínico para acompañar heridas con más claridad, consistencia y seguridad.",
    copy: [
      "Heal+ fue pensado para quienes necesitan menos retrabajo, mejor organización y una visión clínica más rápida.",
      "En lugar de una pantalla genérica, el sistema reúne registro, evaluación, imágenes, agenda, informes y consulta asistida en un mismo entorno.",
    ],
    cards: [
      {
        title: "Pacientes organizados",
        text: "Datos personales, historial de evaluaciones y seguimiento siempre accesibles.",
      },
      {
        title: "Evolución con imagen y datos",
        text: "Fotos, medidas, signos de infección y comparaciones en pocos toques.",
      },
      {
        title: "Flujo profesional",
        text: "Agenda clínica, retorno planificado, informes y exportación en PDF.",
      },
      {
        title: "Base local",
        text: "Todo guardado en el dispositivo, con respuesta rápida y sin depender de internet.",
      },
    ],
  },
  contrast: {
    problemLabel: "El problema",
    problemTitle: "El cuidado se vuelve pesado cuando la información queda dispersa.",
    problemBullets: [
      "Registros, fotos y observaciones terminan repartidos en muchos lugares.",
      "Los retornos y reevaluaciones exigen demasiada memoria operativa.",
      "Comparar la evolución entre visitas se vuelve retrabajo.",
      "Generar informes y compartir información consume demasiado tiempo.",
    ],
    solutionLabel: "La solución",
    solutionTitle: "Heal+ organiza el razonamiento clínico en un flujo más claro.",
    solutionBullets: [
      "Registro centralizado con historial del paciente siempre a mano.",
      "Evaluación guiada con campos estructurados y lectura más rápida.",
      "Comparación de fotos, medidas y signos en pocos pasos.",
      "Agenda, informes y asistente local apoyando el seguimiento.",
    ],
  },
  resources: {
    label: "Recursos",
    title: "Todo lo que Heal+ necesita mostrar, sin exceso visual.",
    copy:
      "Funciones esenciales pensadas para registrar, acompañar y documentar la evolución clínica con claridad en el día a día.",
    cards: [
      {
        title: "Registro de pacientes",
        text: "Nombre, contacto, historial y accesos rápidos para nuevas evaluaciones y revisiones.",
      },
      {
        title: "Evaluación estructurada",
        text: "Campos clínicos organizados para registrar tejido, humedad, bordes, dolor e infección.",
      },
      {
        title: "Agenda clínica",
        text: "Retornos, seguimientos, cambios de curación y consultas fotográficas en un solo flujo.",
      },
      {
        title: "Comparación de evolución",
        text: "Visualiza antes y ahora con apoyo de imágenes, área comparada e indicadores de mejora.",
      },
      {
        title: "Informes en PDF",
        text: "Exportación de atención y comparativos para documentación y compartición.",
      },
      {
        title: "Asistente local",
        text: "Consulta pacientes, agenda y base interna sin costo por token y sin nube.",
      },
    ],
  },
  workflow: {
    label: "Flujo de la app",
    title: "Desde el registro hasta el informe, la experiencia fue pensada para el uso real.",
    copy: "Heal+ valora una secuencia lógica: registrar, evaluar, acompañar y documentar.",
    steps: [
      {
        step: "Paso 1",
        title: "Registrar el caso",
        text: "Crea el registro del paciente, organiza los datos iniciales y deja el historial listo para futuras reevaluaciones.",
      },
      {
        step: "Paso 2",
        title: "Acompañar la evolución",
        text: "Captura imágenes, actualiza signos clínicos, compara medidas y monitorea la respuesta al tratamiento.",
      },
      {
        step: "Paso 3",
        title: "Definir conducta y retorno",
        text: "Cierra la evaluación, programa la próxima visita y exporta un informe cuando necesites compartirlo.",
      },
    ],
  },
  tech: {
    label: "Tecnologías",
    title: "Stack moderna. Base sólida.",
    copy:
      "Heal+ usa una base ligera y confiable, alineada con la app móvil real y preparada para evolución continua sin perder claridad de interfaz.",
    cards: [
      {
        title: "Expo",
        text: "Base multiplataforma usada para empaquetado, runtime y flujo de desarrollo.",
      },
      {
        title: "React 19",
        text: "Capa principal de composición de interfaz y de la lógica declarativa del proyecto.",
      },
      {
        title: "React Native",
        text: "Fundamento de la experiencia móvil usado para renderizar las pantallas de la app.",
      },
      {
        title: "AsyncStorage",
        text: "Persistencia local usada para mantener la información disponible en el dispositivo.",
      },
      {
        title: "React Native Paper",
        text: "Biblioteca de componentes que ayuda a mantener consistencia visual y productividad.",
      },
      {
        title: "Expo Image Picker",
        text: "Soporte para registrar imágenes clínicas y comparativos de evolución en el seguimiento.",
      },
      {
        title: "Expo Print",
        text: "Generación de contenido imprimible para informes y documentación de atención.",
      },
      {
        title: "Expo Sharing",
        text: "Compartición nativa de archivos y salidas generadas por la propia aplicación.",
      },
    ],
  },
  support: {
    label: "Apoye el proyecto",
    title: "Ayude a Heal+ a seguir evolucionando.",
    copy:
      "Heal+ es un proyecto independiente. Si la app tiene sentido en tu día a día, tu apoyo ayuda a mantener mejoras de interfaz, refinamiento clínico y nuevas entregas para la experiencia del producto.",
    downloadHeading: "Descarga oficial",
    downloadButton: "Descargar APK",
    downloadCopy:
      "Usa solo el enlace oficial de esta página para obtener el APK de Heal+. Cuando el archivo final esté en la carpeta de la landing, este será el canal oficial de descarga de la app.",
    specs: [
      { label: "Archivo", value: "healplus.apk" },
      { label: "Estado", value: "Enlace preparado" },
      { label: "Plataforma", value: "Android" },
      { label: "Canal oficial", value: "Esta landing de Heal+" },
    ],
    pixLabel: "Clave Pix",
    pixChip: "Pix",
    copyButton: "Copiar clave",
    copySuccess: "Clave copiada",
    footnote: "Apoyo 100% voluntario. La app seguirá siendo gratuita.",
  },
  author: {
    label: "Autoría",
    title: "Desarrollado por Pedro Antônio Silvestre Tescaro.",
    copy: [
      "Heal+ fue estructurado para presentar la aplicación con más credibilidad, claridad clínica y una identidad visual consistente de principio a fin.",
      "El equipo destacado en esta landing también incluye a Guilherme Alves de Campos y Paulo Henrique Leal dos Santos, reforzando la autoría colectiva del proyecto.",
    ],
    groupTitles: ["Canales oficiales", "Equipo del proyecto"],
    officialCards: [
      { label: "Correo", value: "healgrupo@gmail.com" },
      { label: "GitHub", value: "github.com/pedrotescaro" },
      { label: "Descarga oficial", value: "APK de Heal+" },
    ],
    teamRoles: ["Coordinación", "Integrante", "Integrante"],
    notes: [
      "Los canales oficiales de Heal+ y de la autoría del proyecto están listados en esta página.",
    ],
  },
  faq: {
    label: "FAQ",
    title: "Preguntas frecuentes.",
    intro:
      "Respuestas rápidas para quien quiere entender Heal+, descargar el APK con confianza y saber cómo funciona el proyecto en la práctica.",
    items: [
      {
        question: "¿Heal+ funciona sin conexión?",
        answer:
          "Sí. La app fue pensada para el uso diario con base local en el dispositivo, manteniendo agilidad en la rutina clínica incluso sin internet.",
      },
      {
        question: "¿Dónde descargo el APK oficial?",
        answer:
          "La descarga oficial ocurre en esta misma landing, usando los botones de APK y el área institucional del proyecto.",
      },
      {
        question: "¿Los datos quedan guardados en el dispositivo?",
        answer:
          "Heal+ prioriza datos locales, ofreciendo más control sobre la rutina clínica y menos dependencia de servicios externos en el uso cotidiano.",
      },
      {
        question: "¿Heal+ fue pensado para una rutina clínica real?",
        answer:
          "Sí. La landing y la aplicación destacan registro de pacientes, evaluaciones, seguimiento por imágenes, agenda e informes en un flujo directo.",
      },
      {
        question: "¿Cómo puedo apoyar el proyecto?",
        answer:
          "Puedes apoyar usando la clave Pix oficial mostrada en la sección de apoyo, ayudando a mantener la mejora continua de Heal+.",
      },
      {
        question: "¿Quién está detrás de Heal+?",
        answer:
          "La autoría presentada en esta página reúne a Pedro Antônio Silvestre Tescaro, Guilherme Alves de Campos y Paulo Henrique Leal dos Santos.",
      },
      {
        question: "¿Cómo entro en contacto?",
        answer:
          "En la sección de contacto encontrarás los canales oficiales del proyecto, incluyendo LinkedIn, correo y GitHub.",
      },
      {
        question: "¿La app seguirá evolucionando?",
        answer:
          "Esta landing ya presenta a Heal+ como un proyecto vivo, con identidad propia, mejoras continuas y foco en credibilidad del producto.",
      },
    ],
  },
  contact: {
    label: "Contacto",
    title: "Vamos a conversar.",
    copy:
      "Si quieres hablar sobre Heal+, enviar feedback, discutir mejoras o seguir la autoría del proyecto, estos son los canales oficiales.",
    cards: [
      {
        title: "LinkedIn",
        text: "Perfil profesional, networking y presentación institucional del proyecto.",
      },
      {
        title: "Correo",
        text: "Bugs, feedback, dudas y contacto directo sobre Heal+.",
      },
      {
        title: "GitHub",
        text: "Código, repositorios, historial técnico y evolución del proyecto.",
      },
    ],
  },
  footer: {
    tagline: "Cuidado inteligente. Evolución visible.",
    description:
      "Landing oficial de Heal+ con foco clínico, identidad propia y presentación profesional de la aplicación.",
    meta: "Proyecto independiente | Interfaz alineada con la app móvil | Base local",
    columnTitle: "Canales oficiales",
    kickers: ["Enlaces", "Legal"],
    links: ["Descargar APK", "Recursos", "Tecnología", "Apoyo", "Autoría", "Correo"],
    legal: [
      "Datos locales y uso sin rastreo externo en el flujo principal.",
      "Identidad visual, paleta y mensaje alineados con el proyecto Heal+.",
      "Proyecto independiente con una presentación enfocada en credibilidad y claridad.",
    ],
    copyright: "\u00A9 2026 Heal+. Proyecto independiente.",
    chips: ["PT", "EN", "ES"],
    banner: "Canal oficial de apoyo vía Pix: pedroatescaro@gmail.com.",
  },
};

const getInitialLanguage = () => {
  try {
    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);

    if (SUPPORTED_LANGUAGES.includes(storedLanguage)) {
      return storedLanguage;
    }
  } catch (error) {
    // Ignore storage issues in restricted environments.
  }

  const browserLanguage = (navigator.language || "pt").slice(0, 2).toLowerCase();
  return SUPPORTED_LANGUAGES.includes(browserLanguage) ? browserLanguage : "pt";
};

const applyLanguage = language => {
  const content =
    language === "pt"
      ? baseContent
      : mergeContent(baseContent, translations[language] || {});

  const introCopy = introGrid ? introGrid.querySelectorAll(".section-copy p") : [];
  const introLabel = introGrid ? introGrid.querySelector(".section-label") : null;
  const introTitle = introGrid ? introGrid.querySelector(".section-title") : null;
  const problemCard = contrastCards[0];
  const solutionCard = contrastCards[1];
  const resourcesLabel = document.querySelector("#recursos .section-label");
  const resourcesTitle = document.querySelector("#recursos .section-title");
  const resourcesCopy = document.querySelector("#recursos .section-copy");
  const workflowLabel = workflowSection ? workflowSection.querySelector(".section-label") : null;
  const workflowTitle = workflowSection ? workflowSection.querySelector(".section-title") : null;
  const workflowCopy = workflowSection ? workflowSection.querySelector(".section-copy") : null;
  const techLabel = techSection ? techSection.querySelector(".tech-showcase-label") : null;
  const techTitle = techSection ? techSection.querySelector(".tech-showcase-title") : null;
  const techCopy = techSection ? techSection.querySelector(".tech-showcase-copy") : null;
  const supportLabel = supportSection ? supportSection.querySelector(".support-label") : null;
  const supportTitle = supportSection ? supportSection.querySelector(".support-title") : null;
  const supportCopy = supportSection ? supportSection.querySelector(".support-copy") : null;
  const supportDownloadHeading = supportSection ? supportSection.querySelector(".support-panel-head h3") : null;
  const supportDownloadCopy = supportSection ? supportSection.querySelector(".support-panel-copy") : null;
  const supportPixLabel = supportSection ? supportSection.querySelector(".support-pix-label") : null;
  const supportPixChip = supportSection ? supportSection.querySelector(".support-pix-chip") : null;
  const supportFootnote = supportSection ? supportSection.querySelector(".support-footnote") : null;
  const authorLabel = authorSection ? authorSection.querySelector(".author-label") : null;
  const authorTitle = authorSection ? authorSection.querySelector(".author-title") : null;
  const authorCopies = authorSection ? authorSection.querySelectorAll(".author-copy") : [];
  const authorGroupTitles = authorSection ? authorSection.querySelectorAll(".author-group-title") : [];
  const authorGroups = authorSection ? authorSection.querySelectorAll(".author-group") : [];
  const officialCards = authorGroups[0] ? authorGroups[0].querySelectorAll(".author-card") : [];
  const teamCards = authorGroups[1] ? authorGroups[1].querySelectorAll(".author-card-static") : [];
  const authorNotes = authorSection ? authorSection.querySelectorAll(".author-note span") : [];
  const faqLabel = faqSection ? faqSection.querySelector(".faq-transition-label") : null;
  const faqTitle = faqSection ? faqSection.querySelector(".faq-transition-title") : null;
  const faqIntro = faqSection ? faqSection.querySelector(".faq-transition-intro") : null;
  const contactLabel = contactSection ? contactSection.querySelector(".contact-label") : null;
  const contactTitle = contactSection ? contactSection.querySelector(".contact-title") : null;
  const contactCopy = contactSection ? contactSection.querySelector(".contact-copy") : null;

  document.documentElement.lang = content.meta.htmlLang;
  document.title = content.meta.title;

  if (descriptionMeta) {
    descriptionMeta.setAttribute("content", content.meta.description);
  }

  setText(skipLink, content.meta.skipLink);

  if (topBrand) {
    topBrand.setAttribute("aria-label", content.meta.brandHomeAria);
  }

  if (footerBrand) {
    footerBrand.setAttribute("aria-label", content.meta.footerBrandAria);
  }

  if (navToggle) {
    navToggle.setAttribute("aria-label", content.meta.menuAria);
  }

  localeSwitches.forEach(group => {
    group.setAttribute("aria-label", content.meta.localeAria);
  });

  setTexts(desktopNavLinks, content.nav.links);
  setTexts(mobileNavLinks, content.nav.mobileLinks);
  setText(navCtaLabel, content.nav.cta);

  if (heroEyebrow) {
    heroEyebrow.innerHTML = `<span></span>${content.hero.eyebrow}`;
  }

  if (heroTitle) {
    heroTitle.innerHTML = `${content.hero.titleMain}<span>${content.hero.titleAccent}</span>`;
  }

  setText(heroText, content.hero.text);
  setText(heroPrimaryCta, content.hero.primaryCta);
  setText(heroSecondaryCta, content.hero.secondaryCta);
  setTexts(heroBadges, content.hero.badges);

  if (heroBadgesContainer) {
    heroBadgesContainer.setAttribute("aria-label", content.meta.heroBadgesAria);
  }

  if (heroVisual) {
    heroVisual.setAttribute("aria-label", content.meta.heroVisualAria);
  }

  heroScreens.forEach((image, index) => {
    if (content.meta.screenAlts[index]) {
      image.alt = content.meta.screenAlts[index];
    }
  });

  setText(introLabel, content.intro.label);
  setText(introTitle, content.intro.title);
  setTexts(introCopy, content.intro.copy);
  setCardContent(introCards, content.intro.cards);

  if (problemCard) {
    setText(problemCard.querySelector(".section-label"), content.contrast.problemLabel);
    setText(problemCard.querySelector(".section-title"), content.contrast.problemTitle);
    setTexts(problemCard.querySelectorAll(".bullet-list li"), content.contrast.problemBullets);
  }

  if (solutionCard) {
    setText(solutionCard.querySelector(".section-label"), content.contrast.solutionLabel);
    setText(solutionCard.querySelector(".section-title"), content.contrast.solutionTitle);
    setTexts(solutionCard.querySelectorAll(".bullet-list li"), content.contrast.solutionBullets);
  }

  setText(resourcesLabel, content.resources.label);
  setText(resourcesTitle, content.resources.title);
  setText(resourcesCopy, content.resources.copy);
  setCardContent(featureCards, content.resources.cards);

  setText(workflowLabel, content.workflow.label);
  setText(workflowTitle, content.workflow.title);
  setText(workflowCopy, content.workflow.copy);
  setWorkflowContent(workflowCards, content.workflow.steps);

  setText(techLabel, content.tech.label);
  setText(techTitle, content.tech.title);
  setText(techCopy, content.tech.copy);
  setCardContent(techCards, content.tech.cards);

  setText(supportLabel, content.support.label);
  setText(supportTitle, content.support.title);
  setText(supportCopy, content.support.copy);
  setText(supportDownloadHeading, content.support.downloadHeading);
  setText(supportDownloadLink, content.support.downloadButton);
  setText(supportDownloadCopy, content.support.downloadCopy);
  setText(supportPixLabel, content.support.pixLabel);
  setText(supportPixChip, content.support.pixChip);
  setText(supportFootnote, content.support.footnote);

  supportSpecs.forEach((row, index) => {
    const item = content.support.specs[index];

    if (!item) {
      return;
    }

    setText(row.querySelector("span"), item.label);
    setText(row.querySelector("strong"), item.value);
  });

  if (supportCopyButton) {
    supportCopyButton.setAttribute("data-default-label", content.support.copyButton);
    supportCopyButton.setAttribute("data-success-label", content.support.copySuccess);
  }

  setText(supportCopyLabel, content.support.copyButton);

  setText(authorLabel, content.author.label);
  setText(authorTitle, content.author.title);
  setTexts(authorCopies, content.author.copy);
  setTexts(authorGroupTitles, content.author.groupTitles);

  officialCards.forEach((card, index) => {
    const item = content.author.officialCards[index];

    if (!item) {
      return;
    }

    setText(card.querySelector("small"), item.label);
    setText(card.querySelector("strong"), item.value);
  });

  teamCards.forEach((card, index) => {
    if (content.author.teamRoles[index] !== undefined) {
      setText(card.querySelector("small"), content.author.teamRoles[index]);
    }
  });

  setTexts(authorNotes, content.author.notes);

  setText(faqLabel, content.faq.label);
  setText(faqTitle, content.faq.title);
  setText(faqIntro, content.faq.intro);
  setFaqContent(content.faq.items);

  setText(contactLabel, content.contact.label);
  setText(contactTitle, content.contact.title);
  setText(contactCopy, content.contact.copy);
  setCardContent(contactCards, content.contact.cards);

  setText(footer.querySelector(".footer-tagline"), content.footer.tagline);
  setText(footer.querySelector(".footer-description"), content.footer.description);
  setText(footer.querySelector(".footer-meta"), content.footer.meta);
  setText(footerColumnTitle, content.footer.columnTitle);
  setTexts(footerKickers, content.footer.kickers);

  if (footerLinks.length >= 6) {
    setText(footerLinks[0].querySelector("span"), content.footer.links[0]);

    footerLinks.forEach((link, index) => {
      if (index === 0) {
        return;
      }

      setText(link, content.footer.links[index]);
    });
  }

  setTexts(footerLegalItems, content.footer.legal);
  setText(footer.querySelector(".footer-copyright"), content.footer.copyright);
  setTexts(footerStatusChips, content.footer.chips);
  setText(footerBannerText, content.footer.banner);

  footerStatusChips.forEach(chip => {
    const isActive = chip.dataset.lang === language;
    chip.classList.toggle("footer-status-chip-active", isActive);
  });

  if (footerStatusChipsWrap) {
    footerStatusChipsWrap.setAttribute("aria-label", content.meta.footerStatusAria);
  }

  setLocaleButtons(language);

  try {
    window.localStorage.setItem(STORAGE_KEY, language);
  } catch (error) {
    // Ignore storage issues in restricted environments.
  }
};

window.addEventListener("scroll", syncHeaderState, { passive: true });
window.addEventListener("load", () => {
  syncHeaderState();
  applyLanguage(getInitialLanguage());
});

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.contains("menu-open");
    setMenuState(!isOpen);
  });
}

mobileLinks.forEach(link => {
  link.addEventListener("click", () => setMenuState(false));
});

localeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const language = button.dataset.lang;

    if (SUPPORTED_LANGUAGES.includes(language)) {
      applyLanguage(language);
    }
  });
});

copyButtons.forEach(button => {
  button.addEventListener("click", async () => {
    const targetId = button.getAttribute("data-copy-target");
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    const labelNode = button.querySelector(".support-copy-label");
    const defaultLabel =
      button.getAttribute("data-default-label") ||
      (labelNode ? labelNode.textContent : button.textContent.trim());
    const successLabel = button.getAttribute("data-success-label") || "Copied";
    const text = target.textContent.trim();

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        fallbackCopy(text);
      }
    } catch (error) {
      fallbackCopy(text);
    }

    if (labelNode) {
      labelNode.textContent = successLabel;
    } else {
      button.textContent = successLabel;
    }

    window.setTimeout(() => {
      if (labelNode) {
        labelNode.textContent = defaultLabel;
      } else {
        button.textContent = defaultLabel;
      }
    }, 1800);
  });
});
