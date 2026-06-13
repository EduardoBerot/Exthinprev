import { motion } from 'framer-motion'
import { LuFlame, LuTriangleAlert, LuUsers, LuFileCheck, LuLamp, LuArrowRight } from 'react-icons/lu'
import Reveal from './Reveal.jsx'
import { WHATSAPP_URL } from '../constants.js'

const SERVICES = [
  {
    title: 'Extintores novos e manutenções',
    desc: 'Venda de extintores ABC, BC, CO₂ e água pressurizada certificados pelo INMETRO, com recarga, manutenção e teste hidrostático.',
    icon: <LuFlame size={26} />,
  },
  {
    title: 'Placas de sinalização certificadas',
    desc: 'Placas fotoluminescentes, fitas e sinalização de rotas de fuga conforme exigências do Corpo de Bombeiros.',
    icon: <LuTriangleAlert size={26} />,
  },
  {
    title: 'Treinamento TPCI',
    desc: 'Treinamento de Prevenção e Combate a Incêndio para equipes — teoria e prática com uso correto dos equipamentos.',
    icon: <LuUsers size={26} />,
  },
  {
    title: 'Encaminhamento de alvará bombeiros',
    desc: 'Auxílio completo na documentação e processos para obtenção do alvará do Corpo de Bombeiros.',
    icon: <LuFileCheck size={26} />,
  },
  {
    title: 'Iluminação de emergência',
    desc: 'Fornecimento e instalação de luminárias de emergência para garantir visibilidade em situações de falta de energia.',
    icon: <LuLamp size={26} />,
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
                <LuArrowRight size={15} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
