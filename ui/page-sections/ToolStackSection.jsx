"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import {
  Code,
  Database,
  Cpu,
  Globe,
  Zap,
  Shield,
  Layers,
  Terminal,
  Cloud,
  Smartphone,
} from "lucide-react";

const ToolStackSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [carouselRef, carouselInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const tools = [
    {
      name: "Python",
      icon: "/tools/python.svg",

    },
    {
      name: "React",
      icon: "/tools/react.svg",
  
    },
    {
      name: "Node.js",
      icon: "/tools/nodejs.svg",
  
    },
    {
      name: "Ollama",
      icon: "/tools/ollama.svg",
     
    },
     {
      name: "OpenAi API",
      icon: "/tools/openai.svg",
    
    },
     {
      name: "Qdrant",
      icon: "/tools/Qdrant.svg",
    
    },
     {
      name: "Nvidia Jetson",
      icon: "/tools/nvidia.svg",
    
    },
    {
      name: "Next.js",
      icon: "/tools/nextjs.svg",
    
    },
     {
      name: "n8n",
      icon: "/tools/n8n.svg",
   
    },
    {
      name: "JavaScript",
      icon: "/tools/javascript.svg",
   
    },
    {
      name: "Tailwind CSS",
      icon: "/tools/tailwind.svg",
    
    },
    {
      name: "PostgreSQL",
      icon: "/tools/postgresql.svg",
  
    },
    {
      name: "Docker",
      icon: "/tools/docker.svg",

    },
    {
      name: "Ethereum",
      icon: "/tools/ethereum.svg",
    
    },
    {
      name: "Solidity",
      icon: "/tools/solidity.svg",
   
    },
    {
      name: "Web 3",
      icon: "/tools/web3.svg",
     
    },
  ];

  const categories = [
    { name: "Frontend", icon: <Globe className="w-5 h-5" />, count: 3 },
    { name: "Backend", icon: <Terminal className="w-5 h-5" />, count: 2 },
    { name: "Database", icon: <Database className="w-5 h-5" />, count: 1 },
    { name: "DevOps", icon: <Cloud className="w-5 h-5" />, count: 1 },
    { name: "Blockchain", icon: <Shield className="w-5 h-5" />, count: 2 },
    { name: "AI/ML", icon: <Cpu className="w-5 h-5" />, count: 1 },
  ];

  const ToolItem = ({ tool, index, isDuplicate = false }) => {
    return (
      <motion.div
        className="flex-shrink-0 mx-3 sm:mx-4 lg:mx-6 group cursor-pointer"
        initial={{ opacity: 0, y: 30 }}
        animate={carouselInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          delay: index * 0.1,
          duration: 0.6,
          ease: "easeOut",
        }}
        whileHover={{
          scale: 1.1,
          y: -5,
          transition: {
            duration: 0.3,
            ease: "easeOut",
          },
        }}
      >
        <div className="flex flex-col items-center justify-center p-4    hover:border-cyan-500/30 transition-all duration-300 group-hover:bg-gray-800/50">
          {/* Icon */}
          <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
            <img
              src={tool.icon}
              alt={tool.name}
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
            />
          </div>

          {/* Tool Name */}
          <motion.p
            className="text-white text-sm font-semibold text-center mb-1"
            initial={{ opacity: 0 }}
            animate={carouselInView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {tool.name}
          </motion.p>

      
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-20 lg:py-28 relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white overflow-hidden">
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
            <Code className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 text-lg font-semibold">
              Our Tech Stack
            </span>
            <Zap className="w-5 h-5 text-cyan-400" />
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Cutting-Edge Technologies
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Powered by industry-leading tools and frameworks to deliver
            exceptional, scalable solutions
          </motion.p>
        </motion.div>

     

        {/* Infinite Carousel */}
        <motion.div
          ref={carouselRef}
          className="relative w-full mb-12 lg:mb-16"
          initial={{ opacity: 0 }}
          animate={carouselInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex hover:pause"
              animate={{
                x: [0, -1030],
              }}
              transition={{
                x: {
                  duration: 25,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                },
              }}
              whileHover={{
                animationPlayState: "paused",
              }}
            >
              {/* First set */}
              {tools.map((tool, index) => (
                <ToolItem key={`first-${index}`} tool={tool} index={index} />
              ))}

              {/* Second set for seamless loop */}
              {tools.map((tool, index) => (
                <ToolItem
                  key={`second-${index}`}
                  tool={tool}
                  index={index}
                  isDuplicate={true}
                />
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 h-full w-20 sm:w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-20 sm:w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />
        </motion.div>

        {/* Bottom Description */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.p
            className="text-gray-300 max-w-4xl mx-auto leading-relaxed text-base sm:text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.4 }}
          >
            From modern web frameworks and AI technologies to blockchain
            solutions and cloud infrastructure, our comprehensive tech stack
            enables us to build scalable, innovative solutions tailored to your
            business needs.
          </motion.p>

          {/* Tech Highlights */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.6 }}
          >
            {[
              { icon: <Cpu className="w-6 h-6" />, label: "AI/ML Ready" },
              { icon: <Shield className="w-6 h-6" />, label: "Secure" },
              { icon: <Layers className="w-6 h-6" />, label: "Scalable" },
              { icon: <Smartphone className="w-6 h-6" />, label: "Responsive" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="flex flex-col items-center space-y-2 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.8 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(6, 182, 212, 0.3)",
                }}
              >
                <div className="text-cyan-400">{item.icon}</div>
                <span className="text-gray-300 text-sm font-medium">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolStackSection;
