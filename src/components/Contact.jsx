import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react'

export default function Contact() {
  const recaptchaRef = useRef(null)
  const [status, setStatus] = useState({ message: '', isError: false })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const payload = {
        ...formData,
        "recipientEmail": "",
        "token": token
      }

      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        setStatus({ message: 'Mensagem enviada com sucesso! Entraremos em contacto em breve.', isError: false })
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus({ message: 'Erro ao enviar mensagem. Tente novamente.', isError: true })
      }
    } catch (error) {
      setStatus({ message: 'Erro ao enviar mensagem. Tente novamente.', isError: true })
    }

    recaptchaRef.current.reset()
    
    setTimeout(() => {
      setStatus({ message: '', isError: false })
    }, 5000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(61) 99880-5377",
      link: "tel:(61) 99880-5377",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "Brasília, Águas Claras",
      link: "https://maps.google.com/?q=Brasília,Águas Claras",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg - Sex: 8h às 18h",
      link: null,
      color: "from-purple-500 to-pink-600"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-16 w-40 h-40 bg-accent-500 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-primary-400 rounded-full blur-2xl" />
      </div>

      <motion.div
        className="container-custom relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-primary-50 rounded-full px-6 py-2 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <MessageSquare className="text-primary-600" size={20} />
            <span className="text-primary-600 font-medium">Entre em Contacto</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Vamos{' '}
            <span className="gradient-text">Transformar</span>{' '}
            Seu Negócio Juntos
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para ouvir seus desafios e apresentar soluções 
            tecnológicas personalizadas que irão revolucionar seus resultados.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {info.link ? (
                <motion.a
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="block bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover"
                  whileHover={{ 
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                    borderColor: "rgb(20, 184, 166)"
                  }}
                >
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${info.color} rounded-xl mb-6 group-hover:shadow-2xl transition-all duration-300`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <info.icon className="text-white" size={28} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {info.content}
                  </p>
                </motion.a>
              ) : (
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover">
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${info.color} rounded-xl mb-6 group-hover:shadow-2xl transition-all duration-300`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <info.icon className="text-white" size={28} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {info.content}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10" />
              <div className="relative z-10">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-accent-500 rounded-xl mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Send className="text-black" size={28} />
                </motion.div>
                
                <h3 className="text-3xl font-bold text-white mb-6">
                  Pronto para Começar?
                </h3>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Preencha o formulário ao lado e nossa equipa entrará em contacto 
                  em menos de 24 horas para discutir como podemos transformar 
                  seu negócio através da tecnologia.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="text-accent-500 flex-shrink-0" size={24} />
                    <span className="text-white">Consultoria gratuita inicial</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="text-accent-500 flex-shrink-0" size={24} />
                    <span className="text-white">Análise personalizada do seu negócio</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="text-accent-500 flex-shrink-0" size={24} />
                    <span className="text-white">Proposta customizada sem compromisso</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                      placeholder="Seu nome completo"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                      placeholder="seu@email.com"
                    />
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                      placeholder="(00) 00000-0000"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Assunto *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="transformacao-digital">Transformação Digital</option>
                      <option value="estrategias-crescimento">Estratégias de Crescimento</option>
                      <option value="retencao-base">Retenção de Base</option>
                      <option value="infraestrutura-nuvem">Infraestrutura na Nuvem</option>
                      <option value="seguranca-digital">Segurança Digital</option>
                      <option value="business-intelligence">Business Intelligence</option>
                      <option value="consultoria-geral">Consultoria Geral</option>
                      <option value="outros">Outros</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 resize-none"
                    placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                  />
                </motion.div>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center space-x-2 p-4 rounded-lg ${
                      status.isError ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'
                    }`}
                  >
                    {status.isError ? (
                      <AlertCircle size={20} />
                    ) : (
                      <CheckCircle size={20} />
                    )}
                    <span>{status.message}</span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/25 flex items-center justify-center space-x-2 group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Send className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  <span>Enviar Mensagem</span>
                </motion.button>

                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                  size="invisible"
                />
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}