import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { WHATSAPP_URL } from '../constants.js'

const SERVICES = [
  {
    title: 'Venda de extintores',
    desc: 'Extintores ABC, BC, CO₂ e água pressurizada, novos e certificados pelo INMETRO, para empresas, condomínios e veículos.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 6h6v13a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V6z" />
        <path d="M12 6V4" />
        <path d="M9 4h6" />
        <path d="M15 5l4-2" />
        <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Recarga de extintores',
    desc: 'Recarga rápida com agentes de qualidade e lacre de garantia. Retiramos e devolvemos no seu endereço.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-2.6-6.4" />
        <path d="M21 3v6h-6" />
      </svg>
    ),
  },
  {
    title: 'Manutenção preventiva',
    desc: 'Manutenção de 1º, 2º e 3º níveis conforme as normas ABNT, garantindo o funcionamento na hora da emergência.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a4.5 4.5 0 0 0-6 6L3 18l3 3 5.7-5.7a4.5 4.5 0 0 0 6-6L14 13l-3-3 3.7-3.7z" />
      </svg>
    ),
  },
  {
    title: 'Teste hidrostático',
    desc: 'Ensaio que verifica a resistência do cilindro sob pressão, obrigatório a cada 5 anos para manter a validade.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.5S6 9 6 13.5a6 6 0 0 0 12 0C18 9 12 2.5 12 2.5z" />
        <path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5" />
      </svg>
    ),
  },
  {
    title: 'Sinalização de segurança',
    desc: 'Placas fotoluminescentes, fitas e sinalização de rotas de fuga conforme exigências do Corpo de Bombeiros.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l9 16H3l9-16z" />
        <path d="M12 10v4" />
        <path d="M12 17.5v.01" />
      </svg>
    ),
  },
  {
    title: 'Inspeção e consultoria',
    desc: 'Avaliação técnica do seu PPCI: quantidade, tipo e posicionamento corretos dos equipamentos de combate a incêndio.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
        <path d="M8.5 11l1.8 1.8 3.2-3.6" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section className="services" id="servicos">
      <div className="container">
        <div className="services-head">
          <Reveal>
            <span className="section-tag">Serviços</span>
            <h2 className="section-title">
              Tudo o que você precisa para <em>estar protegido</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="section-sub">
              Da venda à manutenção periódica, cuidamos do ciclo completo dos
              seus equipamentos de combate a incêndio.
            </p>
          </Reveal>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, i) => (
            <motion.article
              className="service-card"
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a className="service-link" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Solicitar orçamento
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
