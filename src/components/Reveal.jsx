import { motion } from 'framer-motion'

// Wrapper de animação de scroll: anima quando o elemento entra na viewport
export default function Reveal({ children, delay = 0, y = 36, className, as = 'div', once = true }) {
  const Tag = motion[as] ?? motion.div
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}
