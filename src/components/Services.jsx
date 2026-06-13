import { motion } from 'framer-motion'
import { LuFlame, LuRefreshCw, LuWrench, LuDroplets, LuTriangleAlert, LuSearchCheck, LuArrowRight } from 'react-icons/lu'
import Reveal from './Reveal.jsx'
import { WHATSAPP_URL } from '../constants.js'

const SERVICES = [
  {
    title: 'Venda de extintores',
    desc: 'Extintores ABC, BC, CO₂ e água pressurizada, novos e certificados pelo INMETRO, para empresas, condomínios e veículos.',
    icon: <LuFlame size={26} />,
  },
  {
    title: 'Recarga de extintores',
    desc: 'Recarga rápida com agentes de qualidade e lacre de garantia. Retiramos e devolvemos no seu endereço.',
    icon: <LuRefreshCw size={26} />,
  },
  {
    title: 'Manutenção preventiva',
    desc: 'Manutenção de 1º, 2º e 3º níveis conforme as normas ABNT, garantindo o funcionamento na hora da emergência.',
    icon: <LuWrench size={26} />,
  },
  {
    title: 'Teste hidrostático',
    desc: 'Ensaio que verifica a resistência do cilindro sob pressão, obrigatório a cada 5 anos para manter a validade.',
    icon: <LuDroplets size={26} />,
  },
  {
    title: 'Sinalização de segurança',
    desc: 'Placas fotoluminescentes, fitas e sinalização de rotas de fuga conforme exigências do Corpo de Bombeiros.',
    icon: <LuTriangleAlert size={26} />,
  },
  {
    title: 'Inspeção e consultoria',
    desc: 'Avaliação técnica do seu PPCI: quantidade, tipo e posicionamento corretos dos equipamentos de combate a incêndio.',
    icon: <LuSearchCheck size={26} />,
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
