import { motion } from 'framer-motion'
import { IoLogoWhatsapp } from 'react-icons/io5'
import { WHATSAPP_URL } from '../constants.js'

export default function WhatsAppButton() {
  return (
    <motion.a
      className="wa-float"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 18 }}
    >
      <IoLogoWhatsapp size={30} />
    </motion.a>
  )
}
