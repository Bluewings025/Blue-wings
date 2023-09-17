const translations = {
    ar: {
        'greeting': ' مرحبا',
        entrer: ' دخول',
        'lang':'لغة',
        'text':'مرحبًا في موقعنا. اكتشف عالمًا من الفرص لتطوير مهاراتك وتوسيع آفاقك. في موقعنا، نحن مصممون على تقديم أفضل الخدمات والدورات لمساعدتك في تحقيق أهدافك الشخصية والمهنية.',
    'ctn':'تواصل'
    },
    fr: {
        'greeting': 'Bienvenue',
        entrer: 'Entrer',
        'lang':'langue',
        'text':'Bienvenue sur BLUE WINGS. Découvrez un monde d\'opportunités pour vous développer. Chez Blue Wings, nous sommes déterminés à vous offrir les meilleurs services et cours pour vous aider à atteindre vos objectifs personnels et professionnels'
    },
    en: {
        'greeting': 'Welcome',
        entrer: 'Enter',
        'lang':'language',
        'text':'Welcome to BLUE WINGS. Discover a world of opportunities to develop your skills and broaden your horizons. At Blue Wings, we are committed to providing you with the best services and courses to help you achieve your personal and professional goals.'
    }
};

function changeLang() {
    const langSelect = document.getElementById('lang-select');
    const selectedLang = langSelect.value;

    for (const key in translations[selectedLang]) {
        if (translations[selectedLang].hasOwnProperty(key)) {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = translations[selectedLang][key];
            }
        }
    }
}

// Exécutez la fonction une fois au chargement pour afficher les éléments initiaux.
changeLang();

