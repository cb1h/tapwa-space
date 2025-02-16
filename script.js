const translations = {
    en: {
        title: "WhatsApp chat with no saving contact",
        chatButton: "Chat",
        mode: "Dark/Light Mode",
        phonePlaceholder: "Type phone number",
        description: "Easily start a WhatsApp chat without saving the contact. Just enter the phone number and tap to chat.",
        keywords: "WhatsApp, chat, no contact, tap to chat"
    },
    ru: {
        title: "Чат WhatsApp без сохранения контакта",
        chatButton: "Чат",
        mode: "Темный/Светлый режим",
        phonePlaceholder: "Введите номер телефона",
        description: "Легко начните чат в WhatsApp без сохранения контакта. Просто введите номер телефона и нажмите, чтобы начать чат.",
        keywords: "WhatsApp, чат, без контакта, начать чат"
    },
    es: {
        title: "Chat de WhatsApp sin guardar contacto",
        chatButton: "Chat",
        mode: "Modo Oscuro/Claro",
        phonePlaceholder: "Escriba el número de teléfono",
        description: "Inicie fácilmente un chat de WhatsApp sin guardar el contacto. Simplemente ingrese el número de teléfono y toque para chatear.",
        keywords: "WhatsApp, chat, sin contacto, iniciar chat"
    },
    zh: {
        title: "无需保存联系人的WhatsApp聊天",
        chatButton: "聊天",
        mode: "黑暗/光明模式",
        phonePlaceholder: "输入电话号码",
        description: "轻松开始WhatsApp聊天，无需保存联系人。只需输入电话号码并点击聊天。",
        keywords: "WhatsApp, 聊天, 无需联系人, 开始聊天"
    },
    pt: {
        title: "Chat do WhatsApp sem salvar contato",
        chatButton: "Bate-papo",
        mode: "Modo Escuro/Claro",
        phonePlaceholder: "Digite o número de telefone",
        description: "Inicie facilmente um chat do WhatsApp sem salvar o contato. Basta digitar o número de telefone e tocar para conversar.",
        keywords: "WhatsApp, chat, sem contato, iniciar chat"
    }
};

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = translations[lang][key];
    });

    const placeholderElements = document.querySelectorAll('[data-lang-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-lang-placeholder');
        element.placeholder = translations[lang][key];
    });

    // Update meta tags for SEO
    document.querySelector('meta[name="description"]').setAttribute("content", translations[lang].description);
    document.querySelector('meta[name="keywords"]').setAttribute("content", translations[lang].keywords);
    document.title = translations[lang].title;

    localStorage.setItem('language', lang);
}

function getUserLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    const langCode = userLang.split('-')[0];
    return translations[langCode] ? langCode : 'en';
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language');
    const userLang = savedLang || getUserLanguage();
    setLanguage(userLang);
});

document.getElementById('sendButton').addEventListener('click', function() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const errorMessage = document.getElementById('errorMessage');
    const digitsOnly = phoneNumber.replace(/\D/g, ''); // Remove all non-digit characters

    if (digitsOnly.length >= 7) { // Minimum phone number length
        const whatsappUrl = `https://wa.me/${digitsOnly}`;
        window.location.href = whatsappUrl;
    } else {
        errorMessage.textContent = 'Invalid phone number';
    }
});

function darkModeSwitch1() {
    const body = document.body;
    const check = document.getElementById("switch-image");
    if (check.classList.contains("darkActive")) {
        check.classList.remove("darkActive");
        body.classList.remove("body-dark");
    } else {
        check.classList.add("darkActive");
        body.classList.add("body-dark");
    }
}

// Add keyboard support for the theme switch
document.getElementById('switch').addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        darkModeSwitch1();
    }
});

// Check user preference and set initial theme
window.onload = function() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const body = document.body;
    const switchImage = document.getElementById("switch-image");

    if (prefersDarkScheme) {
        body.classList.add("body-dark");
        switchImage.classList.add("darkActive");
    } else {
        body.classList.remove("body-dark");
        switchImage.classList.remove("darkActive");
    }
};