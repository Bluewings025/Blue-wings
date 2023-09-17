const translations = {
    ar: {
        'greeting': ' مرحبا',
        entrer: ' دخول',
        'lang':'لغة',
        'text':'استكشف عالمًا من الفرص بنقرة زر. نحن نفخر بتقديم مجموعة واسعة من الخدمات والدورات لتلبية احتياجاتك وتطلعاتك',
    'ctn':'تواصل',
    'bac':'دورات وملخصات لجميع المواد للمرشحين لشهادة البكالوريا',
    'hgk':'أسئلة متعددة الاختيار في التاريخ والجغرافيا لطلاب السنة الثالثة ثانوي',
    'ytb':' قائمة بقنوات يوتوب مفيدة للمرشحين لشهادة البكالوريا',
    'code':'دورات برمجة أساسية لطلاب علوم الحاسوب',
    'web':' دورات أساسية لتطوير الويب باستخدام HTML و CSS و JS',
    'art':'خدمات التصميم لبطاقات العمل، والبانرات اللفائفية، والشعارات، وغيرها',

    'bbac':'دخول',
    'bhgk':'دخول',
    'bytb':'دخول',
    'bcode':'غير متوفر',
    'bweb':'غير متوفر',
    'bart':'دخول',

    },
    fr: {
        'greeting': 'Bienvenue',
        entrer: 'Entrer',
        'lang':'langue',
        'text':'Explorez un univers de possibilités à portée de clic. Nous sommes fiers de vous offrir une vaste gamme de services et de cours pour répondre à vos besoins et à vos aspirations',
         'bac':'Cours et résumés de tous les cours pour les candidats au baccalauréat',
         'hgk':'QCM d\'histoire et de géographie pour la 3e année secondaire (3AS)',
         'ytb':'Liste de chaînes YouTube utiles pour les candidats au baccalauréat',
         'code':'Cours de programmation de base pour les étudiants en informatique',
         'web':'Cours de base pour le développement web (HTML, CSS, JS)',
         'art':'Conception de designs pour cartes de visite, roll-up, logos, etc',

         'bbac':'Entrer',
         'bhgk':'Entrer',
         'bytb':'Entrer',
         'bcode':'indisponible',
         'bweb':'indisponible',
         'bart':'Entrer',
    
    },
    en: {
        'greeting': 'Welcome',
        entrer: 'Enter',
        'lang':'language',
        'text':'Explore a world of possibilities at the click of a button. We are proud to offer you a wide range of services and courses to meet your needs and aspirations',
        'bac':'Courses and summaries of all subjects for baccalaureate candidates',
        'hgk':'Multiple-choice questions in history and geography for 3rd year secondary students',
        'ytb':'List of useful YouTube channels for baccalaureate candidates',
        'code':'Basic programming courses for computer science students',
        'web':'Basic courses for web development in HTML, CSS, and JS',
        'art':'Design services for business cards, roll-ups, logos, and more', 

        'bbac':'enter',
        'bhgk':'enter',
        'bytb':'enter',
        'bcode':'unavailable',
        'bweb':'unavailable',
        'bart':'enter',
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