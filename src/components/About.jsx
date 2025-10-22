import React from 'react'
import { motion } from 'framer-motion'
import { Target, Award, Users, Lightbulb, TrendingUp, Shield, Globe, Zap, Rocket, Star } from 'lucide-react'

export default function About() {
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

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const stats = [
    { number: "500+", label: "Projetos Realizados", icon: Rocket },
    { number: "98%", label: "Taxa de Sucesso", icon: Target },
    { number: "15+", label: "Anos de Experiência", icon: Award },
    { number: "50+", label: "Especialistas", icon: Users }
  ]

  const values = [
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Sempre à frente das tendências tecnológicas, desenvolvemos soluções que antecipam o futuro."
    },
    {
      icon: Shield,
      title: "Confiabilidade",
      description: "Segurança e transparência em cada projeto, construindo relacionamentos duradouros."
    },
    {
      icon: TrendingUp,
      title: "Crescimento",
      description: "Focamos em resultados mensuráveis que geram impacto real no seu negócio."
    },
    {
      icon: Star,
      title: "Excelência",
      description: "Padrão de qualidade excepcional em cada entrega, superando expectativas."
    }
  ]

  return (
    <section id="about" className="section-padding bg-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary-500 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent-500 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-400 rounded-full blur-lg" />
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
            <Globe className="text-primary-600" size={20} />
            <span className="text-primary-600 font-medium">Sobre a Blue Ocean</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transformando o{' '}
            <span className="text-primary-500">Brasil</span>{' '}
            através da Tecnologia
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Somos a maior assessoria da América Latina especializada em transformar negócios 
            através de soluções tecnológicas inovadoras. Nossa missão é impulsionar sistemas 
            através de estratégias avançadas para aumento e retenção da base.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa História de <span className="text-primary-600">Sucesso</span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Fundada com a visão de revolucionar o cenário tecnológico brasileiro, 
                a Blue Ocean nasceu da necessidade de oferecer soluções que realmente 
                transformam negócios. Ao longo dos anos, desenvolvemos metodologias 
                únicas que combinam tecnologia de ponta com estratégias personalizadas.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Hoje, somos reconhecidos como líderes em inovação tecnológica, 
                ajudando empresas de todos os portes a alcançar resultados extraordinários 
                através da transformação digital e otimização de processos.
              </p>
            </div>

            <motion.div
              className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#003266' }}>
                  <Zap className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Nossa Missão</h4>
                  <p className="text-primary-600 font-medium">Transformar o Brasil através da tecnologia</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Democratizar o acesso à tecnologia de ponta, capacitando empresas brasileiras 
                a competir globalmente através de soluções inovadoras e sustentáveis.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 card-hover"
                variants={statsVariants}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                  borderColor: "rgb(20, 184, 166)"
                }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="text-white" size={28} />
                </motion.div>
                <motion.div
                  className="text-3xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Nossos <span className="text-primary-600">Valores</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Princípios que norteiam cada decisão e projeto que desenvolvemos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl mb-6 group-hover:shadow-2xl transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 20px 40px -12px rgba(20, 184, 166, 0.4)"
                  }}
                >
                  <value.icon className="text-white" size={32} />
                </motion.div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10" />
          <div className="relative z-10">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-accent-500 rounded-2xl mb-6"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Rocket className="text-black" size={32} />
            </motion.div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Pronto para Transformar Seu Negócio?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Junte-se a centenas de empresas que já transformaram seus resultados 
              com nossas soluções tecnológicas inovadoras.
            </p>
            <motion.button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-400 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-500/25" style={{ backgroundColor: '#003266' }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Começar Agora
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}