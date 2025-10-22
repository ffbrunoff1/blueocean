import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ExternalLink, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const links = {
    services: [
      { name: "Transformação Digital", href: "#services" },
      { name: "Estratégias de Crescimento", href: "#services" },
      { name: "Retenção de Base", href: "#services" },
      { name: "Business Intelligence", href: "#services" }
    ],
    company: [
      { name: "Sobre Nós", href: "#about" },
      { name: "Nossa História", href: "#about" },
      { name: "Missão e Valores", href: "#about" },
      { name: "Contacto", href: "#contact" }
    ],
    contact: [
      { 
        icon: Phone, 
        text: "(61) 99880-5377", 
        href: "tel:(61) 99880-5377",
        type: "link"
      },
      { 
        icon: MapPin, 
        text: "Brasília, Águas Claras", 
        href: "https://maps.google.com/?q=Brasília,Águas Claras",
        type: "external"
      }
    ]
  }

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden pb-20">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 container-custom pt-16 pb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <motion.div
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/505b78e5-9952-45c6-bbaf-113ea128d5ea/logo_1761164179100_0.webp"
                alt="Blue Ocean Logo"
                className="h-12 w-auto"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <div>
                <h3 className="text-2xl font-bold text-white">Blue Ocean</h3>
                <p className="text-gray-400 text-sm">Transformando através da tecnologia</p>
              </div>
            </motion.div>

            <p className="text-gray-300 leading-relaxed mb-6 max-w-lg">
              Somos a maior assessoria da América Latina que busca transformar o Brasil 
              por meio da tecnologia, impulsionando sistemas através de estratégias 
              para aumento e retenção da base.
            </p>

            <motion.div
              className="flex items-center space-x-2 text-accent-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Heart size={16} />
              <span className="text-sm">Transformando negócios desde 2008</span>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold text-white mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              {links.services.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-accent-500 transition-colors duration-300 hover:translate-x-1 transform block"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold text-white mb-6">Empresa</h4>
            <ul className="space-y-3 mb-8">
              {links.company.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-accent-500 transition-colors duration-300 hover:translate-x-1 transform block"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>

            <h4 className="text-xl font-bold text-white mb-6">Contacto</h4>
            <div className="space-y-4">
              {links.contact.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={contact.href}
                    target={contact.type === 'external' ? '_blank' : '_self'}
                    rel={contact.type === 'external' ? 'noopener noreferrer' : ''}
                    className="flex items-center space-x-3 text-gray-300 hover:text-accent-500 transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <contact.icon size={16} className="group-hover:scale-110 transition-transform duration-300" />
                    <span>{contact.text}</span>
                    {contact.type === 'external' && (
                      <ExternalLink size={12} className="opacity-50" />
                    )}
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-700 pt-8"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p>© {currentYear} Blue Ocean. Todos os direitos reservados.</p>
            </motion.div>

            <motion.div
              className="flex items-center space-x-2 text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span>Criado com</span>
              <motion.a
                href="https://papum.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-500 hover:text-accent-400 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <em>Papum</em>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}