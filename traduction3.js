const translations = {
    ar: {
        'greeting': ' مرحبا',
       
        'lang':'لغة',
        'text':'نحن ندرك أهمية النجاح في البكالوريا ونحن هنا لمساعدتك في تحقيق أهدافك الأكاديمية. منصتنا تقدم مجموعة واسعة من الدروس والملخصات في جميع مواد البكالوريا، مصممة لمساعدتك طوال رحلتك التعليمية.',
        'ctn':'تواصل',
        'sc':'ملخصات، منهجية الإجابة، منهجية الاجابة',
        'rr1':'ملخصات وقواعد مفيدة تتعلق بجميع الفصول',
        'rr2':'ملخصات وقواعد مفيدة تتعلق بجميع الفصول',
        'rr3':'ملخصات وقواعد مفيدة تتعلق بجميع الفصول',
        'rr4':'ملخصات وقواعد مفيدة تتعلق بجميع الفصول',
        'rr5':'ملخصات وقواعد مفيدة تتعلق بجميع الفصول',
        'hg':'ملخصات، دروس، تواريخ، شخصيات',
        'isl':'دروس كاملة وأمثلة',
        'ph':'ملخصات ومنهجية الإجابة',

        'b1':'دخول',
        'b2':'دخول',
        'b3':'دخول',
        'b4':'دخول',
        'b5':'دخول',
        'b6':'دخول',
        'b7':'دخول',
        'b8':'دخول',
        'b9':'دخول'



    },
    fr: {
        'greeting': 'Bienvenue',
        
        'b1':'Entrer',
        'b2':'Entrer',
        'b3':'Entrer',
        'b4':'Entrer',
        'b5':'Entrer',
        'b6':'Entrer',
        'b7':'Entrer',
        'b8':'Entrer',
        'b9':'Entrer',



        'lang':'langue',
        'text':'Nous comprenons l\'importance de réussir le baccalauréat,et nous sommes là pour vous aider à atteindre vos objectifs académiques. Notre plateforme offre une vaste gamme de cours et de résumés dans toutes les matières du baccalauréat, conçus pour vous accompagner tout au long de votre parcours éducatif',
        'sc':'Résumés, Méthodologie de réponse, textes',
        'rr1':'Résumés et règles utiles concernant tous les chapitres',
        'rr2':'Résumés et règles utiles concernant tous les chapitres',
        'rr3':'Résumés et règles utiles concernant tous les chapitres',
        'rr4':'Résumés et règles utiles concernant tous les chapitres',
        'rr5':'Résumés et règles utiles concernant tous les chapitres',
        'hg':'Résumés, leçons, dates, personnages',
        'isl':'Cours complets et exemples',
        'ph':'Résumés et Méthodologie de réponse'
    },
    en: {
        'greeting': 'Welcome',
        
        'b1':'Enter',
        'b2':'Enter',
        'b3':'Enter',
        'b4':'Enter',
        'b5':'Enter',
        'b6':'Enter',
        'b7':'Enter',
        'b8':'Enter',
        'b9':'Enter',



        'lang':'language',
        'text':'We understand the importance of succeeding in the baccalaureate and we are here to help you achieve your academic goals. Our platform offers a wide range of courses and summaries in all baccalaureate subjects, designed to support you throughout your educational journey.',
        'sc':'Summaries, Answer Methodology, Text',
        'rr1':'Summaries and Useful Rules for All Chapters',
        'rr2':'Summaries and Useful Rules for All Chapters',
        'rr3':'Summaries and Useful Rules for All Chapters',
        'rr4':'Summaries and Useful Rules for All Chapters',
        'rr5':'Summaries and Useful Rules for All Chapters',
        'hg':'Summaries, Lessons, Dates, Personalities',
        'isl':'Complete Courses and Examples',
        'ph':'Summaries and Answer Methodology'
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