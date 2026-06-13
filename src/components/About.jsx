import { motion } from 'framer-motion'
import { LuShieldCheck, LuZap, LuUser, LuDollarSign, LuCheck } from 'react-icons/lu'
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
    icon: <LuShieldCheck size={24} />,
  },
  {
    tone: 'yellow',
    title: 'Agilidade real',
    desc: 'Orçamento na hora pelo WhatsApp e prazos curtos de recarga.',
    icon: <LuZap size={24} />,
  },
  {
    tone: 'black',
    title: 'Equipe especializada',
    desc: 'Profissionais treinados em manutenção e inspeção de extintores.',
    icon: <LuUser size={24} />,
  },
  {
    tone: 'red',
    title: 'Preço justo',
    desc: 'Condições especiais para contratos de manutenção periódica.',
    icon: <LuDollarSign size={24} />,
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
                    <LuCheck size={13} strokeWidth={3.5} />
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
