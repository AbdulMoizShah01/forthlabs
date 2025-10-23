"use client"
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import ForthLogo from "../../public/heroImage.png"

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      filter: "blur(12px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const logoVariants = {
    hidden: { 
      scale: 0,
      rotate: -180,
      opacity: 0 
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1.2
      }
    }
  };

  const floatingAnimation = {
    y: [-15, 15, -15],
    rotate: [0, 5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseGlow = {
    scale: [1, 1.05, 1],
    boxShadow: [
      "0 0 20px rgba(59, 130, 246, 0.1)",
      "0 0 40px rgba(59, 130, 246, 0.3)",
      "0 0 20px rgba(59, 130, 246, 0.1)"
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/30">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl"
          animate={{
            ...floatingAnimation,
            x: [0, 20, 0],
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"
          animate={{
            ...floatingAnimation,
            y: [15, -15, 15],
            x: [0, -20, 0],
            transition: { ...floatingAnimation.transition, delay: 1.5 }
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        
        {/* Animated Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10 w-full pointer-events-none px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto space-y-8 sm:space-y-12 pt-20 sm:pt-28 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Enhanced Animated Icons */}
    

          {/* Enhanced Main Heading */}
          <motion.div 
            className="space-y-4 sm:space-y-6"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
            >
              <motion.span
                className="flex items-center justify-center gap-4 sm:gap-6"
                variants={itemVariants}
              >
                <motion.span 
                  className="bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Step
                </motion.span>
                
                <motion.div
                  className="relative"
                  variants={logoVariants}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  <div className="absolute inset-0  rounded-2xl blur-lg opacity-75 animate-pulse" />
                  <motion.div
                    className="relative p-2"
                    whileHover={{ 
                      boxShadow: "0 0 50px rgba(59, 130, 246, 0.5)",
                      borderColor: "rgba(103, 232, 249, 0.5)"
                    }}
                  >
                    <Image 
                      src={ForthLogo} 
                      alt="Forth"
                      className="w-30 h-26 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-45 object-contain mt-6"
                      priority
                    />
                  </motion.div>
                </motion.div>

           
              </motion.span>
            </motion.h1>
<motion.h1
className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
         <motion.span 
                  className="bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  With AI
                </motion.span>
</motion.h1>
            <motion.div
              variants={itemVariants}
            >
              <motion.p
                className="relative text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mx-auto font-light"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                We build <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">cutting-edge technology</span> that seamlessly integrates with your world. Custom AI solutions designed around your actual challenges.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Enhanced Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pointer-events-auto pt-8"
            variants={itemVariants}
          >
            <motion.button
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 text-white font-bold rounded-2xl overflow-hidden w-full sm:w-auto shadow-2xl"
              onClick={() => window.open("https://koalendar.com/e/meet-with-hamza-4", "_blank")}
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={pulseGlow}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur opacity-30 group-hover:opacity-70 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center text-lg">
                Book a Meeting
                <motion.div
                  className="ml-3"
                  whileHover={{ x: 5, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
              </span>
            </motion.button>

            <motion.button
              className="group relative px-10 py-5 bg-white/5 text-white font-semibold rounded-2xl backdrop-blur-xl border border-white/20 w-full sm:w-auto shadow-xl"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <span className="relative">View Case Studies</span>
            </motion.button>
          </motion.div>

        
        
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-auto cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        whileHover={{ scale: 1.1 }}
      >

    
      </motion.div>
    </div>
  );
};

export default HeroSection;