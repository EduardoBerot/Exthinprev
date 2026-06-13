import Reveal from './Reveal.jsx'
import {
  ADDRESS,
  MAPS_EMBED_URL,
  MAPS_LINK,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from '../constants.js'

export default function MapSection() {
  return (
    <section className="map-section" id="localizacao">
      <div className="container map-head">
        <Reveal>
          <span className="section-tag">Localização</span>
          <h2 className="section-title">
            Venha nos <em>visitar</em>
          </h2>
          <p className="section-sub">
            Estamos no centro de Teutônia, prontos para atender você. Traga seu
            extintor para avaliação sem compromisso.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <div className="container">
          <div className="map-wrap">
            <div className="map-card">
              <h4>Exthinprev Extintores</h4>
              <div className="map-card-row">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <span>{ADDRESS}</span>
              </div>
              <div className="map-card-row">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
                </svg>
                <span>
                  <a href={PHONE_TEL}>
                    <strong>{PHONE_DISPLAY}</strong>
                  </a>
                  {' · WhatsApp '}
                  <strong>{WHATSAPP_DISPLAY}</strong>
                </span>
              </div>
              <div className="map-card-row">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                <span>Seg. a sex., 8h às 12h e 13h30 às 18h</span>
              </div>
              <a className="btn btn-primary" href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
                Traçar rota no Google Maps
              </a>
              <a
                className="btn btn-outline"
                style={{ width: '100%', marginTop: 10, padding: '13px 20px', fontSize: '0.92rem' }}
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chamar no WhatsApp
              </a>
            </div>
            <iframe
              src={MAPS_EMBED_URL}
              title="Mapa — Exthinprev Comércio de Extintores, Teutônia/RS"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>
        </div>
      </Reveal>
    </section>
  )
}
