import { LuMapPin, LuPhone } from 'react-icons/lu'
import { IoLogoWhatsapp } from 'react-icons/io5'
import {
  ADDRESS,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from '../constants.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <p className="footer-desc">
              Venda, recarga e manutenção de extintores em Teutônia/RS.
              Proteção certificada para sua empresa, condomínio e veículo.
            </p>
          </div>

          <div>
            <h5>Navegação</h5>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#localizacao">Localização</a></li>
            </ul>
          </div>

          <div>
            <h5>Contato</h5>
            <ul className="footer-contact">
              <li>
                <LuMapPin size={16} />
                {ADDRESS}
              </li>
              <li>
                <LuPhone size={16} />
                <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
              </li>
              <li>
                <IoLogoWhatsapp size={16} />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} <em>Exthinprev</em> Comércio de Extintores — Teutônia/RS.
            Todos os direitos reservados.
          </span>
          <span>Prevenir é o melhor combate.</span>
        </div>
      </div>
    </footer>
  )
}
