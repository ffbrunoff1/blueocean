import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, TrendingUp, Shield, Globe, Rocket, Sparkles } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const TechIcon = ({ Icon, delay = 0, className = "" }) => (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      variants={floatingVariants}
      animate="float"
    >
      <Icon size={40} className="text-primary-500" />
    </motion.div>
  )

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      <div className="absolute inset-0 tech-pattern" />
      
      <TechIcon Icon={Zap} delay={0.5} className="top-20 left-10" />
      <TechIcon Icon={TrendingUp} delay={0.7} className="top-32 right-16" />
      <TechIcon Icon={Shield} delay={0.9} className="bottom-32 left-20" />
      <TechIcon Icon={Globe} delay={1.1} className="bottom-20 right-12" />
      <TechIcon Icon={Rocket} delay={1.3} className="top-40 left-1/3" />
      <TechIcon Icon={Sparkles} delay={1.5} className="bottom-40 right-1/3" />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-400/5 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <motion.div
        className="relative z-10 container-custom section-padding text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="max-w-5xl mx-auto"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 mb-8 border border-white/20"
            variants={itemVariants}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
          >
            <Sparkles className="text-accent-500" size={20} />
            <span className="text-white font-medium">A Maior Assessoria da América Latina</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            Transformando o
            <motion.span
              className="block text-primary-500"
              variants={pulseVariants}
              animate="pulse"
            >
              Brasil através da
            </motion.span>
            <motion.span
              className="block text-primary-500"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Tecnologia
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Somos especialistas em{' '}
            <motion.span
              className="text-primary-500 font-semibold"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              impulsionar sistemas
            </motion.span>
            {' '}através de estratégias inovadoras para aumento e retenção da base, 
            revolucionando o cenário tecnológico brasileiro.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            variants={itemVariants}
          >
            <motion.button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-accent-500 to-primary-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-accent-500/25 flex items-center space-x-2" style={{ backgroundColor: '#003266' }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Transforme Seu Negócio</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </motion.button>

            <motion.button
              onClick={scrollToAbout}
              className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-white hover:text-gray-900 hover:shadow-xl flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Conheça Nossa História</span>
              <Zap className="group-hover:rotate-12 transition-transform duration-300" size={20} />
            </motion.button>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            {[
              { icon: TrendingUp, title: "Crescimento Exponencial", desc: "Estratégias que multiplicam resultados" },
              { icon: Shield, title: "Segurança Total", desc: "Proteção e confiabilidade garantidas" },
              { icon: Rocket, title: "Inovação Contínua", desc: "Tecnologia de ponta para o futuro" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-xl p-6 text-center border border-white/10"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderColor: 'rgba(0, 255, 200, 0.3)'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 + index * 0.2 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 bg-accent-500/20 rounded-lg mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="text-accent-500" size={24} />
                </motion.div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}