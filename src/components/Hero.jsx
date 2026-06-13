import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { WHATSAPP_URL } from '../constants.js'

const REVEAL_AT = 3.2 // segundos do vídeo em que o conteúdo começa a entrar

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero({ revealed, onReveal }) {
  const videoRef = useRef(null)
  const fired = useRef(false)

  const fire = () => {
    if (fired.current) return
    fired.current = true
    onReveal()
  }

  useEffect(() => {
    // fallback caso o autoplay seja bloqueado ou o vídeo não dispare os eventos
    const t = setTimeout(fire, 5000)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleTimeUpdate = (e) => {
    if (e.target.currentTime >= REVEAL_AT) fire()
  }

  const handleEnded = (e) => {
    e.target.pause() // congela no último frame (espuma cheia)
    fire()
  }

  const skip = () => {
    const v = videoRef.current
    if (v) {
      try {
        v.currentTime = (v.duration || 4) - 0.05
      } catch {
        /* ignore */
      }
      v.pause()
    }
    fire()
  }

  return (
    <section className="hero" id="inicio">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      >
        <source src="/hero-extinguisher.mp4" type="video/mp4" />
      </video>

      <div className={`hero-scrim${revealed ? ' is-visible' : ''}`} aria-hidden="true" />

      {!revealed && (
        <button className="hero-skip" onClick={skip} type="button">
          Pular intro
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 4l8 8-8 8" />
            <path d="M14 4l6 8-6 8" />
          </svg>
        </button>
      )}

      <div className="container">
        <motion.div
          className="hero-content"
          variants={container}
          initial="hidden"
          animate={revealed ? 'show' : 'hidden'}
        >
          <motion.span className="hero-badge" variants={fadeUp}>
            <span className="dot" />
            Extintores e prevenção em Teutônia/RS
          </motion.span>

          <motion.h1 variants={fadeUp}>
            Proteção que <span className="nobreak"><em>salva vidas</em>,</span>
            <br className="hero-br" /> quando cada segundo conta.
          </motion.h1>

          <motion.p className="hero-sub" variants={fadeUp}>
            Venda de extintores novos e manutenções com certificação INMETRO.
            A Exthinprev mantém sua empresa, condomínio ou veículo dentro das normas.
          </motion.p>

          <motion.div className="hero-actions" variants={fadeUp}>
            <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.3-.5 0-1 .2-3.4-.7-2.9-1.1-4.7-4-4.9-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.8 1.4 1.8 2.2 1.2 1.1 2.3 1.4 2.6 1.6.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2.1 1c.3.1.5.2.6.4 0 .1 0 .8-.2 1.4z" />
              </svg>
              Pedir orçamento no WhatsApp
            </a>
            <a className="btn btn-outline" href="#servicos">
              Conhecer serviços
            </a>
          </motion.div>

          <motion.div className="hero-stats" variants={fadeUp}>
            <div className="hero-stat">
              <strong>15<span>+</span></strong>
              <small>anos de experiência</small>
            </div>
            <div className="hero-stat">
              <strong>5.000<span>+</span></strong>
              <small>extintores atendidos</small>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
