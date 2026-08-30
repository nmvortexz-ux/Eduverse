import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 6: Hindi Grammar - Chapter 2: वर्ण-विचार (40 Questions)
// -------------------------------------------------------------
const hindiQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "भाषा की वह सबसे छोटी मूल ध्वनि जिसके और टुकड़े (खंड) नहीं किए जा सकते, उसे क्या कहते हैं?",
    options: ["वर्ण या अक्षर (Letter / Phoneme)", "शब्द", "वाक्य", "पद"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "वर्ण (जैसे अ, आ, क, ख) भाषा की अविभाज्य लघुतम इकाई है जिसके खंड नहीं किए जा सकते।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "वर्णों के व्यवस्थित और क्रमबद्ध समूह को क्या कहते हैं?",
    options: ["वर्णमाला (Alphabet)", "शब्दकोश", "वाक्य", "व्याकरण"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "वर्णों का मानक क्रमबद्ध एवं व्यवस्थित समूह 'वर्णमाला' कहलाता है।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "हिंदी वर्णमाला में वर्णों को मुख्य रूप से कितने भागों (भेदों) में बाँटा गया है?",
    options: ["दो भागों में (स्वर और व्यंजन)", "तीन भागों में", "चार भागों में", "पाँच भागों में"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "हिंदी वर्णमाला के मुख्य दो भेद हैं: 1. स्वर (Vowels) तथा 2. व्यंजन (Consonants)।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "जिन वर्णों का उच्चारण स्वतंत्र रूप से बिना किसी अन्य वर्ण की सहायता से होता है, उन्हें क्या कहते हैं?",
    options: ["स्वर (Vowels)", "व्यंजन", "संयुक्त व्यंजन", "अयोगवाह"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "स्वर निर्बाध एवं स्वतंत्र रूप से उच्चरित होने वाली ध्वनियाँ हैं (अ, आ, इ, ई, उ, ऊ, ऋ, ए, ऐ, ओ, औ)।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "मानक हिंदी वर्णमाला में कुल कितने मूल स्वर (Vowels) होते हैं?",
    options: ["11 स्वर", "13 स्वर", "10 स्वर", "12 स्वर"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "हिंदी वर्णमाला में 11 स्वर होते हैं: अ, आ, इ, ई, उ, ऊ, ऋ, ए, ऐ, ओ, औ।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "जिन वर्णों का उच्चारण स्वरों की सहायता से किया जाता है, उन्हें क्या कहते हैं?",
    options: ["व्यंजन (Consonants)", "स्वर", "मात्रा", "अनुस्वार"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "व्यंजनों के पूर्ण उच्चारण हेतु स्वर (मुख्यतः 'अ') का संयोग अनिवार्य होता है।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "उच्चारण में लगने वाले समय (मात्रा) के आधार पर स्वर के कितने भेद होते हैं?",
    options: ["तीन भेद (ह्रस्व स्वर, दीर्घ स्वर, प्लुत स्वर)", "दो भेद", "चार भेद", "पाँच भेद"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "मात्रा काल के आधार पर स्वर तीन प्रकार के होते हैं: ह्रस्व (1 मात्रा), दीर्घ (2 मात्रा), तथा प्लुत (3 मात्रा)।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "हिंदी वर्णमाला में ह्रस्व स्वर (Short Vowels) कुल कितने हैं?",
    options: ["चार (अ, इ, उ, ऋ)", "सात", "तीन", "दो"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "ह्रस्व स्वर (मूल स्वर) जिनके उच्चारण में न्यूनतम एक मात्रा का समय लगता है, संख्या में 4 हैं: अ, इ, उ, ऋ।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "हिंदी वर्णमाला में दीर्घ स्वर (Long Vowels) कुल कितने हैं?",
    options: ["सात (आ, ई, ऊ, ए, ऐ, ओ, औ)", "चार", "आठ", "पाँच"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "दीर्घ स्वर जिनके उच्चारण में ह्रस्व से दोगुना समय लगता है, संख्या में 7 हैं: आ, ई, ऊ, ए, ऐ, ओ, औ।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "अं (ं) और अः (ः) को हिंदी व्याकरण में क्या कहा जाता है?",
    options: ["अयोगवाह (अनुस्वार और विसर्ग)", "मूल स्वर", "स्पर्श व्यंजन", "अन्तःस्थ व्यंजन"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "अं (अनुस्वार) और अः (विसर्ग) न तो पूर्ण स्वर हैं और न पूर्ण व्यंजन; अतः इन्हें 'अयोगवाह' कहते हैं।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "हिंदी में संयुक्त व्यंजन (क्ष, त्र, ज्ञ, श्र) की कुल संख्या कितनी है?",
    options: ["चार (4 संयुक्त व्यंजन)", "तीन", "पाँच", "दो"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "दो भिन्न व्यंजनों के परस्पर मेल से बनने वाले 4 संयुक्त व्यंजन हैं: क्ष (क्+ष), त्र (त्+र), ज्ञ (ज्+ञ), श्र (श्+र)।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "स्वरों के जो निश्चित चिह्न व्यंजनों के साथ जोड़े जाते हैं, उन्हें क्या कहते हैं?",
    options: ["मात्रा (Matra)", "वर्ण", "ध्वनि", "हलंत"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "व्यंजनों के साथ प्रयुक्त होने वाले स्वरों के प्रतीकात्मक लिखित चिह्नों को 'मात्रा' कहते हैं।"
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "संयुक्त व्यंजन 'क्ष' किन दो वर्णों के संयोग से बनता है?",
    options: ["क् + ष् + अ", "क् + छ् + अ", "क् + स् + अ", "ख् + श् + अ"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "क् + ष् = क्ष (जैसे: कक्षा, क्षत्रिय, रक्षा)।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "संयुक्त व्यंजन 'ज्ञ' किन दो वर्णों के संयोग से बनता है?",
    options: ["ज् + ञ् + अ", "ग् + य् + अ", "ग् + न् + अ", "द् + य् + अ"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "ज् + ञ् = ज्ञ (जैसे: ज्ञान, ज्ञानी, अज्ञात)।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "संयुक्त व्यंजन 'त्र' और 'श्र' क्रमशः किन वर्णों के संयोग से बनते हैं?",
    options: [
      "त्र = त् + र् + अ ; श्र = श् + र् + अ",
      "त्र = ट् + र् ; श्र = स् + र्",
      "त्र = थ् + र् ; श्र = ष् + र्",
      "त्र = त् + ऋ ; श्र = श् + ऋ"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "त् + र् = त्र (छात्र, पत्र) तथा श् + र् = श्र (श्रम, विश्राम)।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "स्पर्श व्यंजन (क से म तक) कुल कितने होते हैं और इन्हें कितने वर्गों में बाँटा गया है?",
    options: [
      "25 स्पर्श व्यंजन, 5 वर्गों में (क-वर्ग, च-वर्ग, ट-वर्ग, त-वर्ग, प-वर्ग)",
      "20 स्पर्श व्यंजन, 4 वर्गों में",
      "33 स्पर्श व्यंजन, 6 वर्गों में",
      "15 स्पर्श व्यंजन, 3 वर्गों में"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "क-वर्ग से प-वर्ग तक 5×5 = 25 स्पर्श व्यंजन होते हैं जिनका उच्चारण जिह्वा के मुख-स्थान स्पर्श से होता है।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "अन्तःस्थ व्यंजन (Semivowels) कौन-से चार वर्ण होते हैं?",
    options: ["य, र, ल, व", "श, ष, स, ह", "क, ख, ग, घ", "क्ष, त्र, ज्ञ, श्र"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "य, र, ल, व का उच्चारण स्वर और व्यंजन के मध्यवर्ती (अन्तःस्थ) रूप में होता है।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "ऊष्म व्यंजन (Sibilants) कौन-से चार वर्ण होते हैं जिनके उच्चारण में मुख से ऊष्मा (गर्म हवा) निकलती है?",
    options: ["श, ष, स, ह", "य, र, ल, व", "क, च, ट, त", "ड़, ढ़, अं, अः"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "श (तालव्य), ष (मूर्धन्य), स (दंत्य), ह (कंठ्य/काकल्य) के घर्षण जनित उच्चारण से वायु ऊष्मित होती है।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "जब एक ही व्यंजन ध्वनि अपने ही समान व्यंजन ध्वनि से संयुक्त होती है (जैसे: पक्का, बिल्ली, दिल्ली), तो उसे क्या कहते हैं?",
    options: ["द्वित्व व्यंजन (Geminate Consonants)", "संयुक्त व्यंजन", "संयुक्ताक्षर", "अन्तःस्थ व्यंजन"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "समान व्यंजनों का परस्पर युग्मन 'द्वित्व व्यंजन' कहलाता है (क्+क = क्क, ल्+ल = ल्ल)।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "जब दो अलग-अलग व्यंजन परस्पर जुड़ते हैं (जैसे: विद्या, स्थान, पुस्तक), तो उन्हें क्या कहते हैं?",
    options: ["संयुक्ताक्षर (Conjunct Consonants)", "द्वित्व व्यंजन", "ह्रस्व स्वर", "विसर्ग"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "दो भिन्न व्यंजनों का स्वर-रहित मेल 'संयुक्ताक्षर' कहलाता है (स्+थ = स्थ, स्+त = स्त)।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "हिंदी वर्णमाला में किस स्वर की अपनी कोई लिखित मात्रा नहीं होती?",
    options: ["'अ' स्वर", "'आ' स्वर", "'इ' स्वर", "'ऋ' स्वर"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'अ' स्वर प्रत्येक अ-कारान्त व्यंजन में अंतर्निहित होता है; इसका कोई अलग मात्रा चिह्न नहीं होता।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "अनुनासिक (ँ - चंद्रबिंदु) का उच्चारण मुख और नाक में किस प्रकार होता है?",
    options: [
      "इसका उच्चारण मुख और नासिका दोनों की सहायता से एक साथ होता है (जैसे: आँख, चाँद, गाँव)",
      "केवल नाक से होता है",
      "केवल गले से होता है",
      "केवल होंठों से होता है"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "अनुनासिक स्वरों की वायु उच्चारण के समय मुख और नासिका दोनों से एक साथ निःसृत होती है।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "अनुस्वार (ं - बिंदु) का उच्चारण किसकी सहायता से होता है?",
    options: [
      "इसका उच्चारण केवल नासिका (नाक) से होता है और यह प्रत्येक वर्ग के पंचम वर्ण (ङ, ञ, ण, न, म) के स्थान पर आता है",
      "केवल होंठों से",
      "केवल दाँतों से",
      "केवल जीभ से"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "अनुस्वार नासिक्य व्यंजन ध्वनि है जो पंचमाक्षरों (पंत, गंगा, चंचल) के स्थानापन्न प्रयुक्त होती है।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "विसर्ग (ः) का उच्चारण किस ध्वनि के समान हल्का और फुसफुसाहट भरा होता है?",
    options: ["'ह्' ध्वनि के समान (जैसे: प्रातः, अतः, नमः)", "'म्' ध्वनि के समान", "'न्' ध्वनि के समान", "'स्' ध्वनि के समान"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "संस्कृत मूल के विसर्ग (ः) का उच्चारण अघोष काकल्य ध्वनि /h/ (ह्) के सदृश होता है।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "क-वर्ग (क, ख, ग, घ, ङ) का उच्चारण स्थान मुख का कौन-सा भाग है?",
    options: ["कंठ (गला / Velar)", "तालु", "मूर्धा", "दाँत"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "क-वर्ग के वर्ण कंठ्य (Throat/Velar) ध्वनियाँ कहलाते हैं।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "च-वर्ग (च, छ, ज, झ, ञ) तथा इ, ई, य, श का उच्चारण स्थान क्या है?",
    options: ["तालु (तालव्य / Palatal)", "ओष्ठ", "दंत", "मूर्धा"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "जिह्वा तालु के कठोर भाग को स्पर्श करती है, अतः ये 'तालव्य' वर्ण कहलाते हैं।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "प-वर्ग (प, फ, ब, भ, म) तथा उ, ऊ का उच्चारण स्थान क्या है?",
    options: ["ओष्ठ (ओष्ठ्य / Labial - दोनों होंठ)", "कंठ", "तालु", "दंत"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "दोनों होंठों के परस्पर मिलन से उच्चरित होने के कारण इन्हें 'ओष्ठ्य' वर्ण कहते हैं।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "ड़ और ढ़ को हिंदी में कौन-से व्यंजन कहा जाता है?",
    options: ["उत्क्षिप्त या विकसित अतिरिक्त व्यंजन (Flap Consonants)", "मूल स्वर", "ऊष्म व्यंजन", "संयुक्त व्यंजन"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "ड़ और ढ़ उत्क्षिप्त (ताड़नजात) वर्ण हैं, जिनका उच्चारण जिह्वा को झटके से नीचे गिराकर किया जाता है।"
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "कथन और कारण को ध्यानपूर्वक पढ़ें:\nकथन (A): 'ड़' और 'ढ़' व्यंजनों से हिंदी का कोई भी शब्द कभी आरंभ नहीं होता।\nकारण (R): ये उत्क्षिप्त ध्वनियाँ सदैव शब्द के मध्य में या अंत में ही प्रयुक्त होती हैं (जैसे: पेड़, सड़क, पढ़ना, चढ़ाई)।\nसही विकल्प चुनें:",
    "options": [
      "(A) और (R) दोनों सही हैं तथा (R), (A) की सही व्याख्या करता है।",
      "(A) और (R) दोनों सही हैं, परन्तु (R), (A) की सही व्याख्या नहीं करता।",
      "(A) सही है, परन्तु (R) गलत है।",
      "(A) गलत है, परन्तु (R) सही है।"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "ध्वन्यात्मक नियम के अनुसार उत्क्षिप्त वर्ण ड़ और ढ़ कभी किसी शब्द के प्रथमाक्षर (आरंभिक वर्ण) नहीं बन सकते।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "वर्ण-विच्छेद (Phonetic Decomposition) की दृष्टि से 'विद्यार्थी' शब्द का सही विच्छेद कौन-सा है?",
    options: [
      "व् + इ + द् + य् + आ + र् + थ् + ई",
      "व् + ई + द् + य् + आ + थ् + ई + र्",
      "व् + इ + द् + य् + आ + र् + थ् + इ",
      "व् + इ + द्या + र्थी"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "वि-द्या-र्-थी = (व्+इ) + (द्+य्+आ) + (र्+थ्+ई)। रेफ (र्) थ से पूर्व उच्चरित होता है।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "Spot the IMPOSTER in the following group of वर्ण based on their उच्चारण स्थान:\nGroup: [क, ख, ग, च]",
    options: ["क", "ख", "ग", "च"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "'च' तालव्य (तालु से उच्चरित) वर्ण है, जबकि क, ख, ग कंठ्य (कंठ/गले से उच्चरित) वर्ण हैं।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "सुमेलित कीजिए (Match the Columns):\n(क) क-वर्ग (क, ख, ग, घ) -> (i) मूर्धन्य\n(ख) च-वर्ग (च, छ, ज, झ) -> (ii) ओष्ठ्य\n(ग) ट-वर्ग (ट, ठ, ड, ढ) -> (iii) कंठ्य\n(घ) प-वर्ग (प, फ, ब, भ) -> (iv) तालव्य",
    "options": [
      "क-(iii), ख-(iv), ग-(i), घ-(ii)",
      "क-(i), ख-(ii), ग-(iii), घ-(iv)",
      "क-(iv), ख-(iii), ग-(ii), घ-(i)",
      "क-(ii), ख-(i), ग-(iv), घ-(iii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "क-वर्ग = कंठ्य; च-वर्ग = तालव्य; ट-वर्ग = मूर्धन्य; प-वर्ग = ओष्ठ्य।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "'र' के विभिन्न रूपों के संबंध में सही कथन चुनिए:\n1. स्वर-रहित 'र्' जब व्यंजन से पहले आता है तो उसे 'रेफ' (र्) के रूप में वर्ण के ऊपर लिखा जाता है (जैसे: कर्म, धर्म)।\n2. स्वर-सहित 'र' जब स्वर-रहित व्यंजन के बाद आता है तो उसे 'पदेन' (्र या ्र) के रूप में नीचे लिखा जाता है (जैसे: क्रम, प्रकाश, ट्रक, ड्रम)।\n3. 'र' में 'उ' और 'ऊ' की मात्राएँ उसके पेट (मध्य) में लगाई जाती हैं (जैसे: रु, रू)।\nकौन-से कथन सत्य हैं?",
    "options": ["सभी कथन 1, 2 और 3 सत्य हैं", "कथन 1 और 2 केवल", "कथन 2 और 3 केवल", "कथन 1 और 3 केवल"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "तीनों नियम मानक हिंदी वर्तनी के अनुसार 'र' के रेफ, पदेन तथा मध्य-मात्रा प्रयोग के शत-प्रतिशत शुद्ध नियम हैं।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "शब्द 'श्रृंगार' अथवा 'कृष्ण' में 'ऋ' की मात्रा का सही वर्ण-विच्छेद क्या है?",
    options: [
      "कृष्ण = क् + ऋ + ष् + ण् + अ",
      "कृष्ण = क् + र् + इ + ष् + ण् + अ",
      "कृष्ण = क् + ऋ + ष् + ण्",
      "कृष्ण = क + ऋ + ष + ण"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "'कृ' में व्यंजन 'क्' के साथ 'ऋ' स्वर जुड़ा है: क् + ऋ + ष् + ण् + अ = कृष्ण।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "आगत ध्वनि 'ऑ' (जैसे: डॉक्टर, कॉलेज, बॉल, कॉफी) किस विदेशी भाषा से हिंदी में समाहित हुई है?",
    options: ["अंग्रेज़ी भाषा (English)", "फारसी", "पुर्तगाली", "तुर्की"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "अंग्रेज़ी के 'o' स्वर के शुद्ध उच्चारण (Doctor, College) हेतु अर्ध-चंद्र 'ऑ' आगत स्वर स्वीकृत किया गया है।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "नुक्ता (़) लगे आगत व्यंजन 'फ़' और 'ज़' (जैसे: फ़र्क, ज़माना) मुख्यतः किस भाषा से हिंदी में आए हैं?",
    options: ["अरबी और फारसी (Arabic & Persian)", "अंग्रेज़ी", "संस्कृत", "फ्रेंच"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "अरबी-फारसी की ध्वनियों के शुद्ध उच्चारण हेतु वर्ण के नीचे अधोबिंदु (नुक्ता) लगाया जाता है।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "अल्पप्राण और महाप्राण के वर्गीकरण में 'महाप्राण' ध्वनियों की क्या विशेषता होती है?",
    options: [
      "इनके उच्चारण में अधिक श्वास वायु बाहर निकलती है और 'ह' जैसी ध्वनि सुनाई देती है (प्रत्येक वर्ग का दूसरा और चौथा वर्ण तथा ऊष्म व्यंजन)",
      "इनमें बहुत कम हवा निकलती है",
      "इनमें कोई आवाज़ नहीं होती",
      "ये केवल रात में बोले जाते हैं"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "महाप्राण (ख, घ, छ, झ, ठ, ढ, थ, ध, फ, भ + श, ष, स, ह) के उच्चारण में तीव्र उच्छ्वास प्राणवायु निकलती है।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "अल्पप्राण (Non-aspirated) ध्वनियों के अंतर्गत कौन-से वर्ण आते हैं?",
    options: [
      "प्रत्येक वर्ग का पहला, तीसरा, पाँचवाँ वर्ण (1, 3, 5) तथा अन्तःस्थ व्यंजन (य, र, ल, व) एवं सभी स्वर",
      "दूसरा और चौथा वर्ण",
      "केवल ऊष्म व्यंजन",
      "केवल संयुक्त व्यंजन"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "अल्पप्राण (क, ग, ङ, च, ज, ञ...) के उच्चारण में सीमित एवं सामान्य प्राणवायु प्रयुक्त होती है।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "प्लुत स्वर (जैसे: 'ओ३म्' या किसी को दूर से पुकारने में) के उच्चारण में ह्रस्व स्वर की तुलना में कितना समय लगता है?",
    options: ["तीन गुना समय (तीन मात्राओं का काल)", "दोगुना समय", "बराबर समय", "आधा समय"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "प्लुत स्वर त्रैमात्रिक होते हैं (३ चिह्न द्वारा दर्शाए जाते हैं), जो दीर्घ से भी अधिक समय तक उच्चरित होते हैं।"
  },
  {
    classLevel: 6,
    subject: "Hindi Grammar",
    chapter: "Chapter 2: वर्ण-विचार",
    question: "निम्नलिखित में से मानक वर्तनी के अनुसार पंचमाक्षर के स्थान पर अनुस्वार का शुद्ध प्रयोग कौन-सा है?",
    options: [
      "गङ्गा -> गंगा ; चञ्चल -> चंचल ; कण्ठ -> कंठ ; सम्बन्ध -> संबंध",
      "सभी अशुद्ध हैं",
      "केवल गङ्गा शुद्ध है",
      "केवल चञ्चल शुद्ध है"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "केंद्रीय हिंदी निदेशालय के मानक वर्तनी नियमों के अनुसार पंचमाक्षरों के स्थान पर शिरोरेखा के ऊपर अनुस्वार (ं) का प्रयोग मानक है।"
  }
];

console.log('Generated Hindi Ch2:', hindiQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/hindi_ch2.json', JSON.stringify(hindiQuestions, null, 2), 'utf8');
