"use client"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Zap, 
  Shield, 
  Cpu, 
  Globe, 
  Network, 
  Briefcase, 
  TrendingUp, 
  Smartphone,
  ArrowRight,
  Sparkles,
  Rocket
} from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
    title: "Data Analytics",
    description: "See what's working and what isn't. Dashboards, KPIs, and forecasting that turn raw data into decisions measured in weeks, not months",
    gradient: "from-purple-500 via-blue-500 to-cyan-500"
  },
  {
    icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
    title: "AI Automation",
    description: "Cut repetitive work. Event-driven bots connect to your tools and execute end-to-end tasks so your team can focus on higher-value work",
    gradient: "from-cyan-500 via-blue-500 to-purple-500"
  },
  {
    icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
    title: "Custom SLM Chatbots",
    description: "Chatbots tuned to your domain, trained on your docs, and integrated where your people already work (web, Slack, ops tools). Private by design",
    gradient: "from-blue-500 via-purple-500 to-cyan-500"
  },
  {
    icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
    title: "Edge AI",
    description: "Run models close to where data is created on cameras, kiosks, or mobile for low latency, offline resilience, and better privacy.",
    gradient: "from-purple-500 via-cyan-500 to-blue-500"
  },
  {
    icon: <Network className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
    title: "Web Development",
    description: "Modern, accessible web apps and sites that ship quickly and scale cleanly",
    gradient: "from-purple-500 via-blue-500 to-cyan-500"
  },
  {
    icon: <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
    title: "Business Development",
    description: "From idea to offer: landing pages, GTM experiments, CRM automation, and the feedback loops that prove traction.",
    gradient: "from-cyan-500 via-blue-500 to-purple-500"
  },
  {
    icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
    title: "Smart Contracts",
    description: "From testnet to mainnet with confidence audited contracts, thorough testing, and dashboards to monitor what matters",
    gradient: "from-blue-500 via-purple-500 to-cyan-500"
  },
  {
    icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
    title: "Mobile App Development",
    description: "We build fast, user-friendly, and scalable mobile apps tailored to your business needs.",
    gradient: "from-purple-500 via-cyan-500 to-blue-500"
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      duration: 0.8
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 1
    }
  }
};

const ServiceCard = ({ feature, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        transition: { 
          type: "spring", 
          stiffness: 400, 
          damping: 25 
        }
      }}
      className="group relative touch-manipulation h-full cursor-pointer"
    >
      {/* Animated background glow */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700`}
        whileHover={{ 
          opacity: 0.25,
          scale: 1.05
        }}
      />
      
      {/* Main card container */}
      <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-400/30 transition-all duration-500 h-full flex flex-col overflow-hidden">
        
        {/* Animated border overlay */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-10`}
          whileHover={{ opacity: 0.15 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Animated corner accents */}
        <motion.div 
          className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-cyan-400/40 rounded-tl-3xl"
          whileHover={{ 
            width: 12,
            height: 12,
            borderColor: "rgba(34, 211, 238, 0.8)"
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-cyan-400/40 rounded-br-3xl"
          whileHover={{ 
            width: 12,
            height: 12,
            borderColor: "rgba(34, 211, 238, 0.8)"
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Icon container with floating animation */}
        <motion.div
          className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]`}
          whileHover={{ 
            scale: 1.15,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.5 }
          }}
          animate={{
            y: [0, -8, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          {feature.icon}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-30"
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Content section */}
        <div className="relative z-10 flex-1 flex flex-col">
          {/* Title with gradient hover effect */}
          <motion.h3 
            className="text-xl sm:text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-500"
            whileHover={{ x: 5 }}
          >
            {feature.title}
          </motion.h3>
          
          {/* Description with smooth text transition */}
          <motion.p 
            className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 flex-1"
            whileHover={{ color: "#f3f4f6" }}
            transition={{ duration: 0.3 }}
          >
            {feature.description}
          </motion.p>

    
        
        </div>

        {/* Subtle pulse effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cyan-400/20"
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.5 }
          }}
        />
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.section
      id="services"
      className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.3, 0.1, 0.3],
          x: [0, -40, 0],
          y: [0, 20, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
        >
          <motion.div
            variants={titleVariants}
            className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-gray-900/80 via-blue-900/60 to-gray-900/80 border border-cyan-500/40 rounded-full backdrop-blur-xl mb-8 shadow-2xl shadow-cyan-500/20"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(6, 182, 212, 0.4)"
            }}
          >
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 text-lg font-semibold">Our Expertise</span>
            <Rocket className="w-5 h-5 text-cyan-400" />
          </motion.div>

          <motion.h2
            variants={titleVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Advanced Services
            </span>
          </motion.h2>

          <motion.p
            variants={titleVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Transformative solutions leveraging cutting-edge AI and modern technology stack
          </motion.p>
        </motion.div>

        {/* Services Grid - 2x4 layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <ServiceCard key={index} feature={feature} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
         
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;