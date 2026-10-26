import { useState } from 'react';
import { Share2, Copy, Check, MessageCircle, Sparkles, UserCheck } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

export default function InviteGenerator() {
  const [guestInput, setGuestInput] = useState('');
  const [copied, setCopied] = useState(false);

  const baseUrl = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : WEDDING_DATA.websiteUrl;
  const currentGuestName = guestInput.trim() || 'आदरणीय अतिथि';
  const personalizedUrl = `${baseUrl}?to=${encodeURIComponent(currentGuestName)}`;

  const whatsappMessage = `🙏 सादर प्रणाम!

॥ श्री गणेशाय नमः ॥
भगवान श्री गणेश जी की असीम अनुकम्पा से हमारे सुपुत्र *चि० राहुल कुमार* एवं *आयु० गरिमा वर्मा* का शुभ विवाह 11 नवम्बर 2026, बुधवार को ओम् मंगलम् लॉन, रमना, वाराणसी में संपन्न होने जा रहा है।

प्रतिष्ठा में : *श्रीयुत् ${currentGuestName} सपरिवार*

इस मांगलिक अवसर पर आप सपरिवार पधारकर वर-वधू को अपना स्नेहाशीर्वाद प्रदान करें।
(नोट: बारात हमारे निवास स्थान मसोन, गाजीपुर से वाराणसी के लिए सायं 3:00 बजे प्रस्थान करेगी।)

🔗 *डिजिटल निमंत्रण पत्र एवं विवाह गीत सुनने के लिए लिंक खोलें:*
${personalizedUrl}

दर्शनाभिलाषी : रोहन कुमार, रोहित कुमार, अनिल कुमार एवं समस्त परिवार व मित्रगण
विनीत : अशोक कुमार (मो. 8052797334, 8173087391)`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(personalizedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareWhatsApp = () => {
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section
      id="invite-generator"
      style={{
        position: 'relative',
        padding: 'clamp(30px, 5vw, 60px) 0',
        zIndex: 10
      }}
    >
      <div className="container">
        <div
          className="royal-card"
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            border: '2px solid var(--gold-primary)',
            background: 'linear-gradient(145deg, rgba(56, 4, 15, 0.95) 0%, rgba(25, 1, 6, 0.95) 100%)'
          }}
        >
          <div className="corner-ornament-tr" />
          <div className="corner-ornament-bl" />

          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div className="royal-badge" style={{ marginBottom: '12px' }}>
              <Sparkles size={14} color="var(--gold-light)" />
              <span>डिजिटल निमंत्रण शेयरिंग टूल</span>
              <Sparkles size={14} color="var(--gold-light)" />
            </div>

            <h3
              className="gold-text-gradient"
              style={{
                fontFamily: 'var(--font-hindi-display)',
                fontSize: 'clamp(1.7rem, 4.2vw, 2.4rem)',
                margin: '0 0 8px 0'
              }}
            >
              रिश्तेदारों एवं मित्रों के लिए स्पेशल लिंक बनाएं
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-hindi-body)',
                fontSize: '0.95rem',
                color: 'var(--text-muted)',
                maxWidth: '560px',
                margin: '0 auto'
              }}
            >
              अतिथि का नाम लिखें, उनके नाम से 3D लिफाफा खुलेगा और पर्सनलाइज्ड निमंत्रण व्हाट्सएप पर भेजा जा सकेगा।
            </p>
          </div>

          {/* Name Input Box */}
          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                display: 'block',
                fontFamily: 'var(--font-hindi-body)',
                color: 'var(--gold-light)',
                fontSize: '0.95rem',
                marginBottom: '8px',
                fontWeight: 600
              }}
            >
              अतिथि का नाम (जैसे: मामा जी, अंकल, राहुल मिश्रा, आदि) :
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                value={guestInput}
                onChange={(e) => setGuestInput(e.target.value)}
                placeholder="उदा. श्री राजेश कुमार सिंह सपरिवार"
                className="royal-input"
                style={{ paddingLeft: '44px' }}
              />
              <UserCheck
                size={20}
                color="var(--gold-primary)"
                style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}
              />
            </div>
          </div>

          {/* Generated URL Display */}
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px dashed var(--gold-border)',
              borderRadius: '14px',
              padding: '12px 16px',
              marginBottom: '24px',
              wordBreak: 'break-all',
              fontFamily: 'monospace',
              fontSize: '0.85rem',
              color: 'var(--gold-super-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px'
            }}
          >
            <span>{personalizedUrl}</span>
            <button
              onClick={handleCopyLink}
              style={{
                background: copied ? '#28a745' : 'rgba(212, 175, 55, 0.2)',
                border: '1px solid var(--gold-border)',
                borderRadius: '8px',
                padding: '6px 12px',
                color: '#FFF',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '0.8rem',
                flexShrink: 0
              }}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? 'कॉपी हुआ!' : 'कॉपी'}</span>
            </button>
          </div>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'center'
            }}
          >
            <button
              onClick={handleShareWhatsApp}
              className="btn-royal-gold"
              style={{
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                borderColor: '#25D366',
                color: '#FFF'
              }}
            >
              <MessageCircle size={18} />
              <span>व्हाट्सएप पर निमंत्रण भेजें</span>
            </button>

            <button onClick={handleCopyLink} className="btn-royal-outline">
              <Share2 size={16} />
              <span>लिंक कॉपी करें</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
