"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px -10px rgba(6, 182, 212, 0.5)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-gradient-to-br from-gray-50 via-white to-cyan-50 text-gray-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-cyan-50" />
      
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.05, 0.15],
          x: [0, -40, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Main Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Ready to Start Something
          </span>
          <br />
          <motion.span
            className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Amazing?
          </motion.span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Let's discuss your project and turn your vision into a digital masterpiece that drives results.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          variants={itemVariants}
        >
          <motion.button
            className="group relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden w-full sm:w-auto"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => {
              window.open("https://koalendar.com/e/meet-with-hamza-4", "_blank");
            }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Button Content */}
            <span className="relative z-10 flex items-center justify-center">
              Start Your Project
              <motion.div
                className="ml-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.div>
            </span>
          </motion.button>

          {/* Secondary Contact Options */}
          <motion.div
            className="flex items-center gap-4 text-gray-600"
            variants={itemVariants}
          >
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            <div className="text-sm sm:text-base">
              Or email us at{" "}
              <a
                href="mailto:hello@example.com"
                className="text-blue-600 hover:text-cyan-500 font-medium transition-colors duration-200"
              >
                habib@forth-labs.com
              </a>
            </div>
          </motion.div>
        </motion.div>

      

       
      </motion.div>
    </section>
  );
};

export default ContactSection;