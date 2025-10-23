"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const PartnersSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const partners = [
    {
      id: 1,
      name: "Auto Garage",
      logo: "/partners/auto garage.png", // Update path as needed
      description: "Automotive Innovation",
    },
    {
      id: 2,
      name: "Zarkon Heights",
      logo: "/partners/zarkonheights.jpg", // Update path as needed
      description: "Real Estate Excellence",
    },
    {
      id: 3,
      name: "FundSync",
      logo: "/partners/Fund Sync.png", // Update path as needed
      description: "Financial Solutions",
    },
  ];

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

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 lg:py-28 relative bg-gradient-to-br from-gray-900 via-blue-900/20 to-cyan-900/20 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-cyan-900/20" />
      
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
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
          opacity: [0.3, 0.1, 0.3],
          x: [0, -40, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-3 px-6 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-full backdrop-blur-xl mb-8"
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(6, 182, 212, 0.6)",
            }}
          >
            <span className="text-cyan-300 text-lg font-semibold">
              Trusted Partnerships
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Proud Clients
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We collaborate with industry leaders and innovative organizations to deliver exceptional results. 
            Together, we're shaping the future of technology and business.
          </motion.p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16 xl:gap-24"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="group cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.div
                className="w-48 h-32 sm:w-56 sm:h-36 lg:w-64 lg:h-40 flex flex-col items-center justify-center   hover:border-cyan-500/30 transition-all duration-300 group-hover:bg-gray-800/50"
                variants={logoVariants}
              >
                {/* Partner Logo */}
                <motion.div
                  className="mb-3 transform group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <img 
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-32 max-h-16 sm:max-w-36 sm:max-h-20 lg:max-w-40 lg:max-h-24 object-contain"
                  />
                </motion.div>

                {/* Partner Name */}
                <motion.p
                  className="text-white text-sm font-semibold text-center mb-1"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {partner.name}
                </motion.p>

                {/* Partner Description */}
                <motion.p
                  className="text-gray-200 text-xs text-center"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {partner.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;