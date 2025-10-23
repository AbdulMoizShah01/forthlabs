"use client"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Globe, Sparkles } from 'lucide-react';

const MissionVisionSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [missionRef, missionInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [visionRef, visionInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/90 to-cyan-900/80 z-10" />
        
        {/* Animated Orbs */}
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-300/40 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          ref={ref}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-sm font-medium mb-6 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Our Guiding Principles
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Our Mission & Vision
            </span>
          </motion.h2>

          <motion.p
            className="text-xl lg:text-2xl text-cyan-100 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Building the future of decentralized AI solutions
          </motion.p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Mission Card */}
          <motion.div
            ref={missionRef}
            variants={itemVariants}
            className="relative group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"
              animate={missionInView ? {
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.05, 1]
              } : {}}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="relative bg-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-white/20 group-hover:border-cyan-300/30 transition-all duration-500 overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              animate={missionInView ? "visible" : "hidden"}
              whileHover="hover"
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-400" 
                  style={{
                    maskImage: 'radial-gradient(circle at center, black, transparent 70%)'
                  }}
                />
              </div>

              <motion.div 
                className="flex items-center mb-6 sm:mb-8 justify-center lg:justify-start"
                initial={{ opacity: 0, x: -20 }}
                animate={missionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <motion.div 
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mr-4 shadow-lg"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                >
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </motion.div>
                <motion.h3 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  animate={missionInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  Our Mission
                </motion.h3>
              </motion.div>

              <motion.p 
                className="text-cyan-100 leading-relaxed text-lg sm:text-xl text-center lg:text-left relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
              >
                Forth wants to provide AI solutions that are not bound to the idea of centralizing intelligence or control. In the current era where technology's rate of change is exponential, Forth doesn't want its customers to fall on the uncertain side of the economy when it comes to the aftermath of shifting your business on AI.
              </motion.p>

              {/* Animated underline */}
              <motion.div
                className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-6 mx-auto lg:mx-0"
                initial={{ width: 0 }}
                animate={missionInView ? { width: "100%" } : {}}
                transition={{ delay: 1, duration: 0.8 }}
                style={{ maxWidth: '200px' }}
              />
            </motion.div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            ref={visionRef}
            variants={itemVariants}
            className="relative group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"
              animate={visionInView ? {
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.05, 1]
              } : {}}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            
            <motion.div
              className="relative bg-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-white/20 group-hover:border-blue-300/30 transition-all duration-500 overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              animate={visionInView ? "visible" : "hidden"}
              whileHover="hover"
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400" 
                  style={{
                    maskImage: 'radial-gradient(circle at center, black, transparent 70%)'
                  }}
                />
              </div>

              <motion.div 
                className="flex items-center mb-6 sm:mb-8 justify-center lg:justify-start"
                initial={{ opacity: 0, x: -20 }}
                animate={visionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <motion.div 
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mr-4 shadow-lg"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: -360,
                    transition: { duration: 0.5 }
                  }}
                >
                  <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </motion.div>
                <motion.h3 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  animate={visionInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  Our Vision
                </motion.h3>
              </motion.div>

              <motion.p 
                className="text-cyan-100 leading-relaxed text-lg sm:text-xl text-center lg:text-left relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={visionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
              >
                Forth is an idea of a company that develops and automates smart workflows. What makes us different from the rest is that at Forth we design AIs that are just for you and contribute to your business's overall utility.
              </motion.p>

              {/* Animated underline */}
              <motion.div
                className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-6 mx-auto lg:mx-0"
                initial={{ width: 0 }}
                animate={visionInView ? { width: "100%" } : {}}
                transition={{ delay: 1, duration: 0.8 }}
                style={{ maxWidth: '200px' }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Accent */}
        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="inline-flex items-center space-x-4 px-6 sm:px-8 py-4 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm group hover:bg-white/15 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="text-cyan-100 text-sm sm:text-base font-medium">
              Empowering businesses with decentralized AI solutions
            </span>
            <motion.div
              className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
              animate={{
                scale: [1.5, 1, 1.5],
                opacity: [1, 0.7, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVisionSection;