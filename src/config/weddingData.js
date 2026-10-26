// Centralized Wedding Configuration for Rahul Kumar & Garima Verma
// Restored with exact original content from E:\card with royal aesthetics

export const BASE_URL = import.meta.env.BASE_URL || '/';
const BASE = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '') + '/';

export const WEDDING_DATA = {
  couple: {
    groom: {
      firstName: 'राहुल',
      fullName: 'चि० राहुल कुमार',
      nameEn: 'Rahul Kumar',
      title: 'वर (दूल्हा)',
      badge: 'वर (दूल्हा)',
      designation: 'साफ्टवेयर इंजीनियर',
      parents: 'स्व० लालसा देवी एवं श्री अशोक कुमार',
      address: 'ग्राम व पोस्ट — मसोन, जनपद — गाजीपुर (उ. प्र.) 233231',
      photo: `${BASE}images/groom.jpg`,
      quote: 'दो दिलों का पावन संगम, प्रेम, विश्वास और मर्यादा का अटूट बंधन।'
    },
    bride: {
      firstName: 'गरिमा',
      fullName: 'आयु० गरिमा वर्मा',
      nameEn: 'Garima Verma',
      title: 'वधू (दुल्हन)',
      badge: 'वधू (दुल्हन)',
      designation: 'ब्रान्च पोस्ट मास्टर',
      parents: 'श्रीमती पूनम वर्मा एवं श्री विनोद कुमार',
      currentAddress: 'शिवगंगा कॉलोनी, रमना, बी.एच.यू., वाराणसी (उ. प्र.) 221011',
      permanentAddress: 'ग्राम — भलवां, पोस्ट — रूपैधा, जनपद — मिर्जापुर (उ. प्र.) 231305',
      address: 'वर्तमान: शिवगंगा कॉलोनी, रमना, बी.एच.यू., वाराणसी (221011) | स्थाई: ग्राम — भलवां, रूपैधा, मिर्जापुर (231305)',
      photo: `${BASE}images/bride-portrait.jpg`,
      quote: 'सात फेरों के संग नई शुरुआत, जीवन भर का अटूट साथ और आशीर्वाद।'
    }
  },

  invitationHeader: {
    mangalAmantran: '॥ मंगल आमंत्रण ॥',
    ganeshMantra: '॥ श्री गणेशाय नमः ॥',
    ganeshDoha: 'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभः।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥',
    ganeshDohaMeaning: 'हे वक्रतुण्ड, महाकाय, करोड़ों सूर्यों के समान तेजस्वी भगवान श्री गणेश! आप हमारे इस वैवाहिक कार्य को सदा निर्विघ्न संपन्न करें।',
    welcomeText: 'हमारे जीवन के इस शुभ अवसर पर आप सपरिवार पधारकर वर-वधू को अपना स्नेह एवं शुभाशीर्वाद प्रदान करें।',
    sadaMangalam: '॥ सदा मंगलम् ॥'
  },

  invitationBody: {
    bondTitle: '॥ परिणय बंधन ॥',
    coupleNames: 'राहुल संग गरिमा',
    coupleSubtitle: 'Rahul Weds Garima',
    opening: 'स्नेही स्वजन...... ईश्वर की असीम कृपा से',
    requestMessage: 'के इस सुमधुर अवसर पर आयोजित सभी मांगलिक कार्यक्रमों में पधारकर वर-वधू को शुभ आशीर्वाद प्रदान कर हमें अनुगृहीत करें। आपकी गरिमामयी उपस्थिति हमारे लिए सौभाग्य की बात होगी।',
    specialNote: 'नोट: बारात हमारे निवास स्थान (मसोन, गाजीपुर) से वाराणसी के लिए सायं 3:00 बजे प्रस्थान करेगी।',
    invitedBy: 'सादर आमंत्रित: श्री अशोक कुमार एवं समस्त परिवार',
    shayariAagrah: {
      title: ':: विशेष आग्रह ::',
      line1: 'भूल न जाना शादी का Date, आना मेरे Gate,',
      line2: 'राहुल की शादी है, हम करेंगे आपका Wait......'
    }
  },

  events: [
    {
      id: 'tilak',
      badge: 'कार्यक्रम 1',
      title: 'शुभ तिलक',
      date: '04 नवम्बर 2026',
      fullDate: '04 नवम्बर 2026, बुधवार',
      day: 'बुधवार',
      time: 'प्रातः 10:00 बजे',
      location: 'निवास स्थान: ग्राम व पोस्ट — मसोन, गाजीपुर',
      description: 'रोली, अक्षत और शुभ तिलक के साथ मांगलिक कार्यों का पावन शुभारंभ। स्थान: निवास स्थान — मसोन, गाजीपुर।',
      symbol: '🪔',
      isHighlight: false,
      calendarEvent: {
        title: 'राहुल संग गरिमा - शुभ तिलक',
        start: '20261104T100000',
        end: '20261104T140000',
        location: 'निवास स्थान: मसोन, गाजीपुर'
      }
    },
    {
      id: 'haldi',
      badge: 'कार्यक्रम 2',
      title: 'शुभ हल्दी',
      date: '09 नवम्बर 2026',
      fullDate: '09 नवम्बर 2026, सोमवार',
      day: 'सोमवार',
      time: 'प्रातः 10:00 बजे',
      location: 'निवास स्थान: ग्राम व पोस्ट — मसोन, गाजीपुर',
      description: 'हल्दी के सुनहरे रंग, मंगल गीतों की गूंज और आत्मीय स्नेह का उत्सव। स्थान: निवास स्थान — मसोन, गाजीपुर।',
      symbol: '🌼',
      isHighlight: false,
      calendarEvent: {
        title: 'राहुल संग गरिमा - शुभ हल्दी',
        start: '20261109T100000',
        end: '20261109T140000',
        location: 'निवास स्थान: मसोन, गाजीपुर'
      }
    },
    {
      id: 'vivah',
      badge: 'कार्यक्रम 3 (मुख्य विवाह)',
      title: 'शुभ विवाह (पाणिग्रहण संस्कार)',
      date: '11 नवम्बर 2026',
      fullDate: '11 नवम्बर 2026, बुधवार (रात्रि लग्नानुसार)',
      day: 'बुधवार',
      time: 'रात्रि लग्नानुसार (बारात प्रस्थान: सायं 3:00 बजे)',
      location: 'ओम् मंगलम् लॉन, रमना (पुलिस चौकी के आगे), वाराणसी',
      description: 'पवित्र अग्नि के समक्ष सात फेरे, जयमाला, पाणिग्रहण संस्कार एवं सिंदूर दान।',
      specialNotice: 'बारात प्रस्थान: सायं 3:00 बजे (निवास स्थान मसोन, गाजीपुर से वाराणसी के लिए)',
      symbol: '💍',
      isHighlight: true,
      calendarEvent: {
        title: 'राहुल संग गरिमा - शुभ विवाह',
        start: '20261111T150000',
        end: '20261112T030000',
        location: 'ओम् मंगलम् लॉन, रमना, वाराणसी'
      }
    },
    {
      id: 'vidaai',
      badge: 'कार्यक्रम 4',
      title: 'विदाई एवं वधू आगमन',
      date: '12 नवम्बर 2026',
      fullDate: '12 नवम्बर 2026, गुरुवार प्रातः काल',
      day: 'गुरुवार',
      time: 'प्रातः काल',
      location: 'विवाह मंडप, वाराणसी / निज निवास: मसोन, गाजीपुर',
      description: 'सजल नयनों और असीम शुभाशीषों के साथ नवदंपति का मंगलमय गृह-प्रवेश एवं आगमन मार्ग।',
      symbol: '🌸',
      isHighlight: false,
      calendarEvent: {
        title: 'राहुल संग गरिमा - विदाई एवं वधू आगमन',
        start: '20261112T080000',
        end: '20261112T120000',
        location: 'विवाह मंडप, वाराणसी / निवास स्थान: मसोन, गाजीपुर'
      }
    }
  ],

  venue: {
    name: 'ओम् मंगलम् लॉन',
    locationDetails: 'रमना (पुलिस चौकी के आगे), वाराणसी, उत्तर प्रदेश',
    shortCity: 'वाराणसी (काशी)',
    mapsQuery: 'Om Mangalam Lawn Ramna Varanasi',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Om+Mangalam+Lawn+Ramna+Varanasi',
    venueNote: 'समस्त वैवाहिक कार्यक्रम ओम् मंगलम् लॉन, रमना (पुलिस चौकी के आगे) वाराणसी से सम्पन्न होगा।',
    directionsNote: 'रमना पुलिस चौकी से आगे, मुख्य मार्ग के समीप। पार्किंग एवं समस्त वैवाहिक सुविधाएं उपलब्ध।'
  },

  family: {
    darshanabhilashiTitle: '॥ दर्शनाभिलाषी ॥',
    darshanabhilashiFamily: 'समस्त परिवार व मित्रगण।',
    darshanabhilashi: [
      'रोहन कुमार',
      'रोहित कुमार',
      'अनिल कुमार',
      'सुनील',
      'विशाल',
      'टुकटुक',
      'विट्टू',
      'प्रिंस',
      'त्यागी',
      'एवं समस्त परिवार व मित्रगण।'
    ],
    vineet: {
      name: 'अशोक कुमार',
      address: 'ग्राम व पोस्ट — मसोन, जनपद — गाजीपुर (उ. प्र.)'
    },
    contacts: [
      {
        name: 'श्री अशोक कुमार (पिताजी)',
        number: '8052797334',
        displayNumber: '+91 80527 97334',
        label: 'मुख्य प्रेषक एवं स्वागतकर्ता'
      },
      {
        name: 'पारिवारिक संपर्क एवं व्यवस्था (रोहन कुमार)',
        number: '8173087391',
        displayNumber: '+91 81730 87391',
        label: 'अतिथि सत्कार एवं सहयोग'
      }
    ]
  },

  scannedCards: [
    {
      id: 'cover',
      name: 'शुभ निमंत्रण आवरण (कवर)',
      description: 'हस्तमुद्रित मूल आवरण — राहुल परिणय गरिमा',
      src: `${BASE}images/invitation-cover.jpg`
    },
    {
      id: 'program',
      name: 'मांगलिक कार्यक्रम पत्रिका',
      description: 'चारों पावन कार्यक्रमों की मूल मुद्रित सूची',
      src: `${BASE}images/mangalik-karyakram.jpg`
    },
    {
      id: 'inner',
      name: 'विस्तृत विवाह पत्रिका (परिणय एवं परिवार)',
      description: 'पारिवारिक विवरण, दर्शनाभिलाषी एवं विनीत सूची',
      src: `${BASE}images/invitation-inner.jpg`
    }
  ],

  musicTracks: [
    {
      id: 'hamari-shaadi',
      title: 'हमारी शादी में... (विवाह स्पेशल)',
      artist: 'Vivah Special Song',
      src: `${BASE}audio/hamari-shaadi-mein.mp3`
    },
    {
      id: 'shehnai',
      title: 'शुभ विवाह मंगल शहनाई',
      artist: 'Royal Wedding Shehnai',
      src: `${BASE}audio/wedding-song.mp3`
    }
  ],

  weddingTimestamp: new Date('2026-11-11T19:00:00+05:30').getTime(),
  websiteUrl: 'https://rahul2003-debug-code.github.io/rahul-garima/'
};
