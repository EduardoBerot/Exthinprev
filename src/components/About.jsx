import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { WHATSAPP_URL } from '../constants.js'

const CHECKS = [
  'Equipamentos certificados pelo INMETRO',
  'Atendimento para empresas, condomínios e veículos',
  'Retirada e entrega na sua porta',
  'Laudos e comprovantes para o Corpo de Bombeiros',
]

const DIFFS = [
  {
    tone: 'red',
    title: 'Certificação e normas',
    desc: 'Serviços executados conforme normas ABNT e exigências do PPCI.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 3v6c0 5.2-3.4 9-8 11-4.6-2-8-5.8-8-11V5l8-3z" />
        <path d="M8.5 12l2.3 2.3L15.5 9.5" />
      </svg>
    ),
  },
  {
    tone: 'yellow',
    title: 'Agilidade real',
    desc: 'Orçamento na hora pelo WhatsApp e prazos curtos de recarga.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
      </svg>
    ),
  },
  {
    tone: 'black',
    title: 'Equipe especializada',
    desc: 'Profissionais treinados em manutenção e inspeção de extintores.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
      </svg>
    ),
  },
  {
    tone: 'red',
    title: 'Preço justo',
    desc: 'Condições especiais para contratos de manutenção periódica.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20" />
        <path d="M16.5 6.5c0-1.7-2-3-4.5-3s-4.5 1.3-4.5 3 1.6 2.6 4.5 3.2c3 .6 4.8 1.7 4.8 3.6 0 1.9-2.1 3.2-4.8 3.2s-4.8-1.4-4.8-3.2" />
      </svg>
    ),
  },
]

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="container">
        <div className="about-inner">
          <div className="about-text">
            <Reveal>
              <span className="section-tag">Sobre a Exthinprev</span>
              <h2 className="section-title">
                Cuidando da segurança de <em>Teutônia e região</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                A Exthinprev nasceu em Teutônia/RS com uma missão simples:
                garantir que nenhuma empresa, condomínio ou família fique
                desprotegida diante de um princípio de incêndio.
              </p>
              <p>
                Hoje somos referência na região em venda, recarga e manutenção
                de extintores, atendendo de pequenos comércios a indústrias —
                sempre com a documentação em dia para suas vistorias.
              </p>
            </Reveal>
            <div className="about-checks">
              {CHECKS.map((check, i) => (
                <motion.div
                  className="about-check"
                  key={check}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.1 * i, ease: 'easeOut' }}
                >
                  <span className="check">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12.5l5 5L20 6.5" />
                    </svg>
                  </span>
                  {check}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="diff-grid">
            {DIFFS.map((diff, i) => (
              <motion.div
                className="diff-card"
                key={diff.title}
                initial={{ opacity: 0, y: 36, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={`diff-icon ${diff.tone}`}>{diff.icon}</div>
                <h4>{diff.title}</h4>
                <p>{diff.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="cta-band">
            <h3>
              Extintor vencido ou sem carga? <span>Resolvemos hoje.</span>
            </h3>
            <a className="btn btn-light" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Falar com a Exthinprev
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
