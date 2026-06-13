import { motion } from 'framer-motion'
import { LuFlame, LuWrench, LuTriangleAlert, LuUsers, LuFileCheck, LuLamp, LuArrowRight } from 'react-icons/lu'
import Reveal from './Reveal.jsx'
import { WHATSAPP_URL } from '../constants.js'

const SERVICES = [
  {
    title: 'Extintores certificados',
    desc: 'Venda de extintores ABC, BC, CO₂ e água pressurizada novos, certificados pelo INMETRO, para empresas, condomínios e veículos.',
    icon: <LuFlame size={26} />,
  },
  {
    title: 'Recarga e manutenção',
    desc: 'Recarga rápida, manutenção de 1º, 2º e 3º níveis conforme normas ABNT e teste hidrostático. Retiramos e devolvemos no seu endereço.',
    icon: <LuWrench size={26} />,
  },
  {
    title: 'Sinalização fotoluminescente',
    desc: 'Placas certificadas, fitas de demarcação e rotas de fuga de acordo com as exigências do Corpo de Bombeiros.',
    icon: <LuTriangleAlert size={26} />,
  },
  {
    title: 'Treinamento contra incêndio',
    desc: 'Capacitação de equipes em prevenção e combate a incêndio — teoria e prática com uso correto dos equipamentos (TPCI).',
    icon: <LuUsers size={26} />,
  },
  {
    title: 'Alvará do Corpo de Bombeiros',
    desc: 'Orientação e encaminhamento completo da documentação para obtenção e renovação do alvará de prevenção.',
    icon: <LuFileCheck size={26} />,
  },
  {
    title: 'Iluminação de emergência',
    desc: 'Fornecimento e instalação de luminárias de emergência para manter a visibilidade em caso de falta de energia.',
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
