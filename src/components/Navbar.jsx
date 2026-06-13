import { useState } from 'react'
import { motion } from 'framer-motion'
import { IoLogoWhatsapp } from 'react-icons/io5'
import { WHATSAPP_URL } from '../constants.js'

const LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#localizacao', label: 'Localização' },
]

export default function Navbar({ show = true }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      className="navbar"
      initial={{ y: -110, opacity: 0 }}
      animate={{ y: show ? 0 : -110, opacity: show ? 1 : 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container navbar-inner">
        <a href="#inicio" className="logo" aria-label="Exthinprev — início">
          <img
            src="/logo.png"
            alt="Exthinprev"
            className="logo-image"
          />
        </a>

        <nav>
          <ul className={`nav-links ${open ? 'open' : ''}`}>
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className="nav-cta"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoWhatsapp size={16} />
          Orçamento
        </a>

        <button
          className="nav-toggle"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </motion.header>
  )
}