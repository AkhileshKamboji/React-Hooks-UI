import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      Article: `Overnight death toll from Israeli airstrikes on Gaza now stands at 'at least 71' people Ministry of health officials in Gaza have told AlJazeera that the overnight death toll now stands at “at least 71people”, and that people are trapped in rubble after a night of Israelibombardments on the Gaza Strip. Al Jazeera reports that the heaviestbombardments occurred in three areas in the south of Gaza: Khan Younis,Rafah and Deir el-Balah, and that many of those killed are families whohad evacuated from Gaza City.`,
      name: "{{name}} is telling hello",
      override: "language override",
      count: "you get {{count,number(minimumFractionDigits:6)}} of cake",
      key_zero: "zero",
      key_one: "one",
      key_other: "other",
      nesting1: "1 $t(nesting2)",
      nesting2: "2 $t(nesting3)",
      nesting3: "3",
      friend: "A friend",
      friend_male: "A boyfriend",
      friend_female: "A girlfriend",
      arrayJoin: ["line1", "line2", "line3"],
    },
  },
  ka: {
    translation: {
      Article: `ಗಾಜಾದ ಮೇಲೆ ಇಸ್ರೇಲಿ ನಡೆಸಿದ ವೈಮಾನಿಕ ದಾಳಿಯಿಂದ ರಾತ್ರಿಯ ಸಾವಿನ ಸಂಖ್ಯೆ ಈಗ 'ಕನಿಷ್ಠ 71' ಆಗಿದೆ ಗಾಜಾದ ಆರೋಗ್ಯ ಸಚಿವಾಲಯದ ಅಧಿಕಾರಿಗಳು ಅಲ್ ಜಜೀರಾಗೆ ರಾತ್ರಿಯ ಸಾವಿನ ಸಂಖ್ಯೆ ಈಗ "ಕನಿಷ್ಠ 71 ಜನರು" ಎಂದು ಹೇಳಿದ್ದಾರೆ ಮತ್ತು ಜನರು ಅವಶೇಷಗಳಲ್ಲಿ ಸಿಕ್ಕಿಬಿದ್ದಿದ್ದಾರೆ. ಗಾಜಾ ಪಟ್ಟಿಯ ಮೇಲೆ ಇಸ್ರೇಲಿ ಬಾಂಬ್ ದಾಳಿಯ ರಾತ್ರಿ. ಗಾಜಾದ ದಕ್ಷಿಣದಲ್ಲಿ ಮೂರು ಪ್ರದೇಶಗಳಲ್ಲಿ ಭಾರಿ ಬಾಂಬ್ ಸ್ಫೋಟಗಳು ಸಂಭವಿಸಿವೆ ಎಂದು ಅಲ್ ಜಜೀರಾ ವರದಿ ಮಾಡಿದೆ: ಖಾನ್ ಯೂನಿಸ್, ರಫಾ ಮತ್ತು ಡೀರ್ ಎಲ್-ಬಲಾಹ್ ಮತ್ತು ಕೊಲ್ಲಲ್ಪಟ್ಟವರಲ್ಲಿ ಹೆಚ್ಚಿನವರು ಗಾಜಾ ನಗರದಿಂದ ಸ್ಥಳಾಂತರಿಸಿದ ಕುಟುಂಬಗಳು.`,
      name: "{{name}} ಹಲೋ ಹೇಳುತ್ತಿದ್ದಾರೆ",
      override: "ಭಾಷೆ ಅತಿಕ್ರಮಣ",
      count: "ನೀವು {{count,number(minimumFractionDigits:6)}} ಕೇಕ್ ಪಡೆಯುತ್ತೀರಿ",
      key_zero: "ಶೂನ್ಯ",
      key_one: "ಒಂದು",
      key_other: "ಇತರೆ",
      nesting1: "1 $t(nesting2)",
      nesting2: "2 $t(nesting3)",
      nesting3: "3",
      friend: "ಒಬ್ಬ ಸ್ನೇಹಿತ",
      friend_male: "ಒಬ್ಬ ಗೆಳೆಯ",
      friend_female: "ಒಬ್ಬ ಗೆಳತಿ",
      arrayJoin: ["ಸಾಲು1", "ಸಾಲು2", "ಸಾಲು3"],
    },
  },
  te: {
    translation: {
      Article: `గాజాపై ఇజ్రాయెల్ వైమానిక దాడుల వల్ల రాత్రిపూట మరణించిన వారి సంఖ్య ఇప్పుడు 'కనీసం 71' మందికి చేరుకుంది, రాత్రిపూట మరణించిన వారి సంఖ్య ఇప్పుడు "కనీసం 71 మంది" అని గాజాలోని ఆరోగ్య మంత్రిత్వ శాఖ అధికారులు అల్ జజీరాతో చెప్పారు మరియు ప్రజలు శిథిలాలలో చిక్కుకున్నారు. గాజా స్ట్రిప్‌పై ఇజ్రాయెల్ బాంబు దాడుల రాత్రి. అల్ జజీరా నివేదించిన ప్రకారం, గాజాకు దక్షిణాన ఉన్న మూడు ప్రాంతాలలో భారీ బాంబు దాడులు జరిగాయి: ఖాన్ యూనిస్, రఫా మరియు డీర్ ఎల్-బలాహ్, మరియు చంపబడిన వారిలో చాలా మంది గాజా నగరం నుండి ఖాళీ చేయబడిన కుటుంబాలు.`,
      name: "{{name}} హలో చెపుతున్నాడు",
      override: "భాష ఓవర్రైడ్",
      count: "మీరు {{count,number(minimumFractionDigits:6)}} కేక్ పొందుతారు",
      key_zero: "సున్నా",
      key_one: "ఒకటి",
      key_other: "ఇతర",
      nesting1: "1 $t(nesting2)",
      nesting2: "2 $t(nesting3)",
      nesting3: "3",
      friend: "ఒక స్నేహితుడు",
      friend_male: "చెలికాడు",
      friend_female: "ఒక స్నేహితురాలు",
      arrayJoin: ["లైన్1", "లైన్2", "లైన్3"],
    },
  },
  hi: {
    translation: {
      Article: `गाजा पर इजरायली हवाई हमलों में रात भर मरने वालों की संख्या अब 'कम से कम 71' लोगों की है, गाजा में स्वास्थ्य मंत्रालय के अधिकारियों ने अल जज़ीरा को बताया है कि रात भर में मरने वालों की संख्या अब 'कम से कम 71' लोग हैं, और लोग मलबे में फंसे हुए हैं गाजा पट्टी पर इजरायली बमबारी की एक रात। अल जज़ीरा की रिपोर्ट है कि सबसे भारी बमबारी गाजा के दक्षिण में तीन क्षेत्रों में हुई: खान यूनिस, राफा और दीर ​​अल-बलाह, और मारे गए लोगों में से कई वे परिवार हैं जो गाजा शहर से निकल गए थे।`,
      name: "{{name}} नमस्ते कह रहा है",
      override: "भाषा ओवरराइड",
      count: "आपको {{count,number(minimumFractionDigits:6)}} केक मिलता है",
      key_zero: "शून्य",
      key_one: "एक",
      key_other: "अन्य",
      nesting1: "1 $t(nesting2)",
      nesting2: "2 $t(nesting3)",
      nesting3: "3",
      friend: "एक मित्र",
      friend_male: "पुरुष मित्र",
      friend_female: "प्रेमिका",
      arrayJoin: ["रेखा1", "रेखा2", "रेखा3"],
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
