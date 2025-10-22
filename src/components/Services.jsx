import React from 'react'
import { motion } from 'framer-motion'
import { 
  Cpu, Database, Cloud, Shield, BarChart3, Settings, 
  Zap, TrendingUp, Users, Smartphone, Globe, Rocket,
  ArrowRight, CheckCircle, Star
} from 'lucide-react'

export default function Services() {
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

  const services = [
    {
      icon: Cpu,
      title: "Transformação Digital",
      description: "Modernização completa de sistemas e processos através de tecnologias avançadas de inteligência artificial e automação.",
      features: ["Automação de Processos", "IA e Machine Learning", "Integração de Sistemas", "Analytics Avançado"],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Estratégias de Crescimento",
      description: "Desenvolvimento de estratégias personalizadas para aumento da base de clientes e otimização de conversões.",
      features: ["Growth Hacking", "Análise de Dados", "Otimização de Conversão", "Marketing Digital"],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Database,
      title: "Retenção de Base",
      description: "Sistemas inteligentes para aumentar o engajamento e reduzir a taxa de churn através de análises preditivas.",
      features: ["CRM Avançado", "Análise Preditiva", "Segmentação Inteligente", "Automação de Marketing"],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Cloud,
      title: "Infraestrutura na Nuvem",
      description: "Migração e otimização de infraestrutura para nuvem com foco em escalabilidade e performance.",
      features: ["Cloud Migration", "Microserviços", "DevOps", "Monitoramento 24/7"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Segurança Digital",
      description: "Implementação de protocolos de segurança robustos para proteger dados e sistemas críticos.",
      features: ["Auditoria de Segurança", "Compliance", "Proteção de Dados", "Backup Automatizado"],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Soluções de BI para transformar dados em insights estratégicos e decisões mais assertivas.",
      features: ["Dashboards Personalizados", "Relatórios Automatizados", "KPIs Estratégicos", "Análise de Tendências"],
      color: "from-emerald-500 to-green-600"
    }
  ]

  const benefits = [
    { icon: Zap, title: "Implementação Rápida", desc: "Resultados visíveis em até 30 dias" },
    { icon: Users, title: "Equipe Especializada", desc: "Mais de 50 especialistas certificados" },
    { icon: Star, title: "Suporte 24/7", desc: "Atendimento contínuo e personalizado" },
    { icon: Rocket, title: "Tecnologia de Ponta", desc: "Sempre utilizamos as mais recentes inovações" }
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-accent-500 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary-400 rounded-full blur-2xl" />
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
            <Settings className="text-primary-600" size={20} />
            <span className="text-primary-600 font-medium">Nossos Serviços</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Soluções que{' '}
            <span className="text-primary-500">Transformam</span>{' '}
            Negócios
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Oferecemos um ecossistema completo de soluções tecnológicas para impulsionar 
            o crescimento e otimizar a performance do seu negócio através de estratégias 
            inovadoras e tecnologia de ponta.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover group"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                borderColor: "rgb(20, 184, 166)"
              }}
            >
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6 group-hover:shadow-2xl transition-all duration-300`}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360
                }}
                transition={{ duration: 0.6 }}
              >
                <service.icon className="text-white" size={32} />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="text-primary-500 flex-shrink-0" size={16} />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg group flex items-center justify-center space-x-2" style={{ backgroundColor: '#003266' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Saber Mais</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={16} />
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100"
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Por que Escolher a <span className="text-primary-600">Blue Ocean?</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos mais que uma empresa de tecnologia. Somos seus parceiros estratégicos 
              na jornada de transformação digital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl mb-4 group-hover:shadow-2xl transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 20px 40px -12px rgba(20, 184, 166, 0.4)"
                  }}
                >
                  <benefit.icon className="text-white" size={24} />
                </motion.div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10" />
          <div className="relative z-10">
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-accent-500 rounded-2xl mb-6"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Globe className="text-black" size={36} />
            </motion.div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Pronto para Revolucionar Seu Negócio?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Entre em contacto connosco e descubra como podemos transformar 
              os desafios do seu negócio em oportunidades de crescimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-accent-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-400 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-500/25" style={{ backgroundColor: '#003266' }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Iniciar Projeto
              </motion.button>
              <motion.a
                href="tel:(61) 99880-5377"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Ligar Agora
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}