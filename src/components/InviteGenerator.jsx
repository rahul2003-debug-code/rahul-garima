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
देवाधिदेव बाबा श्री काशी विश्वनाथ जी एवं माँ अन्नपूर्णा जी की असीम अनुकम्पा से हमारी सुपुत्री *गरिमा* एवं *राहुल* का शुभ विवाह 11 नवम्बर 2026, बुधवार को ओम् मंगलम् लॉन, रमना, वाराणसी में संपन्न होने जा रहा है।

प्रतिष्ठा में : *श्रीयुत् ${currentGuestName} सपरिवार*

इस मांगलिक अवसर पर आप सपरिवार पधारकर वर-वधू को अपना स्नेहाशीर्वाद प्रदान करें।

🔗 *डिजिटल निमंत्रण पत्र एवं संगीत सुनने के लिए लिंक खोलें:*
${personalizedUrl}

दर्शनाभिलाषी : समस्त वर्मा परिवार
विनीत : विनोद कुमार (मो. 9956281258)`;

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
                color: 'var(--cream-ivory)',
                maxWidth: '560px',
                margin: '0 auto'
              }}
            >
              यहाँ अतिथि का नाम दर्ज करें। उनके नाम से स्पेशल इनविटेशन लिंक तैयार हो जाएगा जिसे आप एक क्लिक में व्हाट्सएप पर भेज सकते हैं!
            </p>
          </div>

          {/* Input field */}
          <div style={{ maxWidth: '480px', margin: '0 auto 20px auto' }}>
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <UserCheck
                size={18}
                color="var(--gold-primary)"
                style={{ position: 'absolute', left: '16px' }}
              />
              <input
                type="text"
                value={guestInput}
                onChange={(e) => setGuestInput(e.target.value)}
                placeholder="उदा. श्री राजेश शर्मा जी / चाचा जी / अमित भईया"
                style={{
                  width: '100%',
                  padding: '14px 16px 14px 46px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1.5px solid var(--gold-border)',
                  borderRadius: '999px',
                  color: '#FFF',
                  fontSize: '1rem',
                  fontFamily: 'var(--font-hindi-body)',
                  outline: 'none',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--gold-primary)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--gold-border)')}
              />
            </div>
          </div>

          {/* Generated Link Preview */}
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px dashed rgba(212, 175, 55, 0.4)',
              borderRadius: '14px',
              padding: '12px 16px',
              maxWidth: '560px',
              margin: '0 auto 24px auto',
              wordBreak: 'break-all',
              fontSize: '0.85rem',
              color: 'var(--gold-light)',
              fontFamily: 'var(--font-modern)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '10px'
            }}
          >
            <span>{personalizedUrl}</span>
            <button
              onClick={handleCopyLink}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--gold-primary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                flexShrink: 0,
                fontSize: '0.82rem',
                fontWeight: 600
              }}
            >
              {copied ? <Check size={16} color="#4ade80" /> : <Copy size={16} />}
              <span>{copied ? 'कॉपी!' : 'कॉपी'}</span>
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
              style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', color: '#FFF' }}
            >
              <MessageCircle size={18} />
              <span>व्हाट्सएप पर इनविटेशन भेजें</span>
            </button>

            <button onClick={handleCopyLink} className="btn-royal-outline">
              {copied ? <Check size={18} color="#4ade80" /> : <Share2 size={18} />}
              <span>{copied ? 'लिंक कॉपी हो गया!' : 'लिंक कॉपी करें'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
