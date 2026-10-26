import strings from './encodedStrings.json';

const decode = (s) => {
  if (!s) return '';
  if (Array.isArray(s)) return s.map(decode);
  if (typeof window !== 'undefined' && window.atob) {
    try {
      return decodeURIComponent(escape(window.atob(s)));
    } catch (e) {
      return window.atob(s);
    }
  }
  if (typeof Buffer !== 'undefined') {
    return Buffer.from(s, 'base64').toString('utf8');
  }
  return s;
};

export const H = {};
for (const [k, v] of Object.entries(strings)) {
  H[k] = decode(v);
}

export const BASE_URL = import.meta.env.BASE_URL || '/';

export const WEDDING_DATA = {
  couple: {
    groom: {
      firstName: H.groomFirst,
      fullName: H.groomFull,
      title: H.groomTitle,
      designation: H.groomDesig,
      photo: `${BASE_URL}images/groom.jpg`,
      grandParents: H.groomGrandparents,
      parents: H.groomParents,
      address: H.groomAddress,
      badge: H.groomBadge
    },
    bride: {
      firstName: H.brideFirst,
      fullName: H.brideFull,
      title: H.brideTitle,
      designation: H.brideDesig,
      photo: `${BASE_URL}images/bride-portrait.jpg`,
      grandParents: H.brideGrandparents,
      parents: H.brideParents,
      address: H.brideAddress,
      badge: H.brideBadge
    }
  },

  invitationHeader: {
    ganeshMantra: H.ganeshMantra,
    ganeshDoha: H.ganeshDoha,
    kashiBlessing: H.kashiBlessing,
    vishnuMantra: H.vishnuMantra,
    sadaMangalam: H.sadaMangalam
  },

  invitationBody: {
    bondTitle: H.bondTitle,
    requestMessage: H.invitationRequest,
    sang: H.sang,
    coupleNames: H.coupleNames,
    shayariAagrah: {
      title: H.shayariTitle,
      line1: H.shayariLine1,
      line2: H.shayariLine2
    }
  },

  events: [
    {
      id: 'tilak',
      badge: 'मांगलिक उत्सव',
      title: 'तिलक समारोह',
      date: '04 नवम्बर 2026',
      day: 'बुधवार',
      time: 'प्रातः 10:00 बजे',
      icon: 'tilak',
      description: 'शुभ लग्न, तिलक एवं मिष्ठान्न वितरण समारोह। स्थान: निज निवास मसोन, गाजीपुर।',
      isHighlight: false,
      calendarEvent: {
        title: `${H.coupleNames} - तिलक समारोह`,
        start: '20261104T100000',
        end: '20261104T140000',
        location: 'निज निवास - ग्राम व पोस्ट मसोन, गाजीपुर'
      }
    },
    {
      id: 'haldi',
      badge: 'मांगलिक उत्सव',
      title: 'शुभ हल्दी',
      date: '09 नवम्बर 2026',
      day: 'सोमवार',
      time: 'प्रातः 10:00 बजे',
      icon: 'haldi',
      description: 'हल्दी रस्म एवं संगीत उत्सव। स्थान: निज निवास मसोन, गाजीपुर।',
      isHighlight: false,
      calendarEvent: {
        title: `${H.coupleNames} - शुभ हल्दी`,
        start: '20261109T100000',
        end: '20261109T140000',
        location: 'निज निवास - ग्राम व पोस्ट मसोन, गाजीपुर'
      }
    },
    {
      id: 'shubh-vivah',
      badge: H.vivahBadge,
      title: H.shubhVivahTitle,
      date: H.vivahDate,
      fullDate: H.vivahDateFull,
      day: 'बुधवार',
      time: H.vivahTime,
      icon: 'wedding',
      description: H.vivahDesc,
      isHighlight: true,
      calendarEvent: {
        title: `${H.coupleNames} - शुभ विवाह`,
        start: '20261111T150000',
        end: '20261112T030000',
        location: `${H.venueName}, ${H.venueLocation}`
      }
    },
    {
      id: 'vidaai',
      badge: H.vidaaiBadge,
      title: H.vidaaiTitle,
      date: H.vidaaiDate,
      fullDate: H.vidaaiDateFull,
      day: 'गुरुवार',
      time: H.vidaaiTime,
      icon: 'vidaai',
      description: H.vidaaiDesc,
      isHighlight: false,
      calendarEvent: {
        title: `${H.coupleNames} - विदाई एवं वधू आगमन`,
        start: '20261112T080000',
        end: '20261112T120000',
        location: 'निज निवास - ग्राम व पोस्ट मसोन, गाजीपुर'
      }
    }
  ],

  venue: {
    name: H.venueName,
    locationDetails: H.venueLocation,
    shortCity: H.venueCity,
    mapsQuery: 'Om Mangalam Lawn Ramna Varanasi',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Om+Mangalam+Lawn+Ramna+Varanasi',
    venueNote: H.venueNote,
    directionsNote: H.venueLandmark
  },

  family: {
    darshanabhilashiFamily: H.darshanabhilashiFamily,
    darshanabhilashi: H.darshanabhilashiList,
    vineet: {
      name: H.vineetName,
      address: H.vineetAddress
    },
    contacts: [
      {
        name: 'श्री अशोक कुमार (पिता)',
        number: '8052797334',
        label: 'मुख्य निमंत्रक'
      },
      {
        name: 'रोहन कुमार (भ्राता)',
        number: '8173087391',
        label: 'वैवाहिक व्यवस्था'
      }
    ]
  },

  scannedCards: [
    {
      id: 'cover',
      name: 'मुख्य आवरण पृष्ठ (Front Cover)',
      description: `${H.ganeshMantra} शुभ विवाह - ${H.coupleNames}`,
      src: `${BASE_URL}images/invitation-cover.jpg`
    },
    {
      id: 'schedule',
      name: 'मांगलिक कार्यक्रम (Schedule)',
      description: `${H.shubhVivahTitle} एवं ${H.vidaaiTitle}`,
      src: `${BASE_URL}images/mangalik-karyakram.jpg`
    },
    {
      id: 'inner',
      name: 'परिणय एवं परिवार पृष्ठ (Family Details)',
      description: 'वर-वधू परिचय, दर्शनाभिलाषी एवं विनीत',
      src: `${BASE_URL}images/invitation-inner.jpg`
    }
  ],

  musicTracks: [
    {
      id: 'hamari-shaadi',
      title: H.track1Title,
      artist: 'Vivah Special Song',
      src: `${BASE_URL}audio/hamari-shaadi-mein.mp3`
    },
    {
      id: 'shehnai',
      title: H.track2Title,
      artist: 'Royal Wedding Shehnai',
      src: `${BASE_URL}audio/wedding-song.mp3`
    }
  ],

  weddingTimestamp: new Date('2026-11-11T19:00:00+05:30').getTime(),
  websiteUrl: 'https://rahul2003-debug-code.github.io/rahul-garima/'
};
