// Centralized Wedding Configuration for Rahul Kumar & Garima Verma
// All details verified from the official printed wedding invitation & user instructions

const BASE = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '') + '/';

export const WEDDING_DATA = {
  couple: {
    groom: {
      nameHi: "चि० राहुल कुमार",
      nameEn: "Rahul Kumar",
      titleHi: "वर (दूल्हा)",
      titleEn: "The Groom",
      parentsHi: "स्व० लालसा देवी एवं श्री अशोक कुमार",
      parentsEn: "Late Lalsa Devi & Shri Ashok Kumar",
      addressHi: "ग्राम व पोस्ट — मसोन, जनपद — गाजीपुर (उ. प्र.) 233231",
      image: `${BASE}images/groom.jpg`,
      quote: "दो दिलों का पावन संगम, प्रेम, विश्वास और मर्यादा का अटूट बंधन।"
    },
    bride: {
      nameHi: "आयु० गरिमा वर्मा",
      nameEn: "Garima Verma",
      titleHi: "वधू (दुल्हन)",
      titleEn: "The Bride",
      parentsHi: "श्रीमती पूनम वर्मा एवं श्री विनोद कुमार",
      parentsEn: "Smt. Poonam Verma & Shri Vinod Kumar",
      currentAddressHi: "शिवगंगा कॉलोनी, रमना, बी.एच.यू., वाराणसी (उ. प्र.) 221011",
      permanentAddressHi: "ग्राम — भलवां, पोस्ट — रूपैधा, जनपद — मिर्जापुर (उ. प्र.) 231305",
      image: `${BASE}images/bride.jpg`,
      quote: "सात फेरों के संग नई शुरुआत, जीवन भर का अटूट साथ और आशीर्वाद।"
    }
  },

  invitationHeader: {
    mangalAmantran: "॥ मंगल आमंत्रण ॥",
    shlokaSanskrit: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभः।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    shlokaMeaning: "हे वक्रतुण्ड, महाकाय, करोड़ों सूर्यों के समान तेजस्वी भगवान श्री गणेश! आप हमारे इस वैवाहिक कार्य को सदा निर्विघ्न संपन्न करें।",
    welcomeText: "हमारे जीवन के इस शुभ अवसर पर आप सपरिवार पधारकर वर-वधू को अपना स्नेह एवं शुभाशीर्वाद प्रदान करें।"
  },

  invitationBody: {
    bondTitle: "॥ परिणय बंधन ॥",
    opening: "स्नेही स्वजन...... ईश्वर की असीम कृपा से",
    requestMessage: "के इस सुमधुर अवसर पर आयोजित सभी मांगलिक कार्यक्रमों में पधारकर वर-वधू को शुभ आशीर्वाद प्रदान कर हमें अनुगृहीत करें। आपकी गरिमामयी उपस्थिति हमारे लिए सौभाग्य की बात होगी।",
    specialNote: "नोट: बारात हमारे निवास स्थान से वाराणसी के लिए सायं 3 बजे प्रस्थान करेगी।",
    invitedBy: "सादर आमंत्रित: श्री अशोक कुमार एवं समस्त परिवार"
  },

  familyDetails: {
    darshanabhilashiTitle: "॥ दर्शनाभिलाषी ॥",
    darshanabhilashiList: [
      "रोहन कुमार",
      "रोहित कुमार",
      "अनिल कुमार",
      "सुनील",
      "विशाल",
      "टुकटुक",
      "विट्टू",
      "प्रिंस",
      "त्यागी",
      "एवं समस्त परिवार व मित्रगण।"
    ],
    vineetTitle: "॥ विनीत ॥",
    vineetName: "अशोक कुमार",
    vineetAddress: "ग्राम व पोस्ट — मसोन, जनपद — गाजीपुर (उ. प्र.)"
  },

  events: [
    {
      id: "tilak",
      number: "कार्यक्रम 1",
      title: "शुभ तिलक",
      date: "04 नवम्बर 2026",
      day: "बुधवार",
      isoDateTime: "2026-11-04T10:00:00+05:30",
      symbol: "🪔",
      description: "रोली, अक्षत और शुभ तिलक के साथ मांगलिक कार्यों का पावन शुभारंभ।",
      timeNote: "प्रातः 10:00 बजे",
      venueNote: "निवास स्थान: मसोन, गाजीपुर"
    },
    {
      id: "haldi",
      number: "कार्यक्रम 2",
      title: "शुभ हल्दी",
      date: "09 नवम्बर 2026",
      day: "सोमवार",
      isoDateTime: "2026-11-09T10:00:00+05:30",
      symbol: "🌼",
      description: "हल्दी के सुनहरे रंग, मंगल गीतों की गूंज और आत्मीय स्नेह का उत्सव।",
      timeNote: "प्रातः 10:00 बजे",
      venueNote: "निवास स्थान: मसोन, गाजीपुर"
    },
    {
      id: "vivah",
      number: "कार्यक्रम 3",
      title: "शुभ विवाह",
      date: "11 नवम्बर 2026",
      day: "बुधवार",
      isoDateTime: "2026-11-11T19:00:00+05:30",
      symbol: "💍",
      isMainWedding: true,
      description: "पवित्र अग्नि के समक्ष सात फेरे, जयमाला, पाणिग्रहण संस्कार एवं सिंदूर दान।",
      specialNotice: "बारात प्रस्थान: सायं 3:00 बजे (निवास स्थान से वाराणसी के लिए)",
      venueNote: "वाराणसी (Varanasi)"
    },
    {
      id: "vidaai",
      number: "कार्यक्रम 4",
      title: "विदाई",
      date: "12 नवम्बर 2026",
      day: "गुरुवार",
      isoDateTime: "2026-11-12T09:00:00+05:30",
      symbol: "🌸",
      description: "सजल नयनों और असीम शुभाशीषों के साथ नवदंपति का मंगलमय गृह-प्रवेश मार्ग।",
      timeNote: "प्रातः काल",
      venueNote: "विवाह मंडप, वाराणसी"
    }
  ],

  contacts: [
    {
      name: "श्री अशोक कुमार (पिताजी)",
      number: "8052797334",
      displayNumber: "+91 80527 97334",
      role: "मुख्य प्रेषक एवं स्वागतकर्ता"
    },
    {
      name: "पारिवारिक संपर्क एवं व्यवस्था",
      number: "8173087391",
      displayNumber: "+91 81730 87391",
      role: "अतिथि सत्कार एवं सहयोग"
    }
  ],

  printedScans: [
    {
      id: "cover",
      title: "शुभ निमंत्रण आवरण (कवर)",
      description: "हस्तमुद्रित मूल आवरण — राहुल परिणय गरिमा",
      src: `${BASE}images/invitation-cover.jpg`
    },
    {
      id: "program",
      title: "मांगलिक कार्यक्रम पत्रिका",
      description: "चारों पावन कार्यक्रमों की मूल मुद्रित सूची",
      src: `${BASE}images/mangalik-karyakram.jpg`
    },
    {
      id: "inner",
      title: "विस्तृत विवाह पत्रिका",
      description: "पारिवारिक विवरण, दर्शनाभिलाषी एवं विनीत सूची",
      src: `${BASE}images/invitation-inner.jpg`
    }
  ],

  weddingTimestamp: new Date("2026-11-11T19:00:00+05:30").getTime(),
  timezone: "Asia/Kolkata"
};
