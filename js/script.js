/*Dépend de js/translations.js (objet `translations`), chargé avant ce fichier. */

const STORAGE_KEY = "portfolio-language";
const DEFAULT_LANGUAGE = "fr";

/* Attributs traduisibles : [sélecteur, clé dataset, attribut HTML cible] */
const attributeBindings = [
    ["data-i18n-aria-label", "i18nAriaLabel", "aria-label"],
    ["data-i18n-alt", "i18nAlt", "alt"],
    ["data-i18n-content", "i18nContent", "content"]
];


/* ---------- Éléments ---------- */

const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");
const languageToggle = document.querySelector("#language-toggle");

let currentLanguage = DEFAULT_LANGUAGE;

const translate = (key) => translations[currentLanguage][key];


/* Menu mobile */

function setMenuOpen(isOpen) {
    navLinks.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", translate(isOpen ? "menu-close" : "menu-open"));
}

menuToggle.addEventListener("click", () => {
    setMenuOpen(!navLinks.classList.contains("active"));
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("click", (event) => {
    const isOutside = !navLinks.contains(event.target) && !menuToggle.contains(event.target);

    if (isOutside) {
        setMenuOpen(false);
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        setMenuOpen(false);
    }
});


/* Langue */

function getStoredLanguage() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return translations[stored] ? stored : DEFAULT_LANGUAGE;
    } catch {
        return DEFAULT_LANGUAGE;
    }
}

function storeLanguage(language) {
    try {
        localStorage.setItem(STORAGE_KEY, language);
    } catch {
        /* Stockage indisponible (navigation privée, par exemple) : la langue ne sera pas mémorisée. */
    }
}

function applyLanguage(language) {
    currentLanguage = language;

    document.documentElement.lang = language;
    document.title = translate("page-title");

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        element.textContent = translate(element.dataset.i18n) ?? element.textContent;
    });

    attributeBindings.forEach(([selector, datasetKey, attribute]) => {
        document.querySelectorAll(`[${selector}]`).forEach((element) => {
            const text = translate(element.dataset[datasetKey]);

            if (text) {
                element.setAttribute(attribute, text);
            }
        });
    });

    languageToggle.querySelectorAll("[data-lang]").forEach((element) => {
        element.classList.toggle("is-active", element.dataset.lang === language);
    });

    /* Resynchronise le libellé du bouton de menu avec son état */
    setMenuOpen(navLinks.classList.contains("active"));

    storeLanguage(language);
}

languageToggle.addEventListener("click", () => {
    applyLanguage(currentLanguage === "fr" ? "en" : "fr");
});


/* Initialisation */

document.querySelector("#current-year").textContent = new Date().getFullYear();

applyLanguage(getStoredLanguage());