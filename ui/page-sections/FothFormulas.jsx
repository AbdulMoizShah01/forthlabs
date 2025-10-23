"use client"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useRef } from 'react';
import { 
  Target, 
  Compass, 
  Rocket, 
  BarChart3,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const RoadmapSection = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const progressBarRef = useRef(null);
  const phaseRefs = useRef([]);
  const iconsRef = useRef([]);

  const phases = [
    {
      title: "SCOPE",
      subtitle: "Choose the right fight",
      description: "We clarify goals, users, budget, and success metrics so we're solving the real problem, not adding noise.",
      icon: Target,
      gradient: "from-cyan-400 to-blue-500",
      details: [
        "Project brief & alignment",
        "Success metrics definition",
        "Technical feasibility"
      ]
    },
    {
      title: "SHAPE",
      subtitle: "Design the shortest path",
      description: "We sketch the solution, pick only must-have features for the first release, and set a clear, low-friction roadmap.",
      icon: Compass,
      gradient: "from-blue-500 to-indigo-500",
      details: [
        "Wireframes & user flows",
        "Tech stack selection",
        "MVP scope refinement"
      ]
    },
    {
      title: "SHIP",
      subtitle: "Release value on repeat",
      description: "We build in short sprints, demo often, test hard, and integrate with your tools so progress is visible and useful fast.",
      icon: Rocket,
      gradient: "from-indigo-500 to-purple-500",
      details: [
        "Weekly sprint demos",
        "Beta testing cycles",
        "Production deployment"
      ]
    },
    {
      title: "SCALE",
      subtitle: "Turn wins into systems",
      description: "We measure what works, automate the busywork, train your team, and add SLAs/support so the product grows smoothly.",
      icon: BarChart3,
      gradient: "from-purple-500 to-cyan-400",
      details: [
        "Analytics & monitoring",
        "Team training sessions",
        "Support system setup"
      ]
    }
  ];

  // GSAP Scroll Animation
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the progress bar fill
      gsap.to(progressBarRef.current, {
        height: '100%',
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        }
      });

      // Animate timeline line
      gsap.fromTo(timelineRef.current, 
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate each phase with scroll
      phases.forEach((_, index) => {
        if (phaseRefs.current[index] && iconsRef.current[index]) {
          gsap.fromTo(phaseRefs.current[index],
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: phaseRefs.current[index],
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          );

          // Icon animation
          gsap.fromTo(iconsRef.current[index],
            { scale: 0, rotation: -180 },
            {
              scale: 1,
              rotation: 0,
              duration: 1,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: phaseRefs.current[index],
                start: "top 80%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });

      // Phase activation with scroll
      phases.forEach((_, index) => {
        if (phaseRefs.current[index]) {
          ScrollTrigger.create({
            trigger: phaseRefs.current[index],
            start: "top center",
            end: "bottom center",
            onEnter: () => setActivePhase(index),
            onEnterBack: () => setActivePhase(index),
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const PhaseContent = ({ phase, index, side }) => {
    const IconComponent = phase.icon;
    const [contentRef, contentInView] = useInView({
      threshold: 0.3,
      triggerOnce: true
    });

    return (
      <motion.div
        ref={el => {
          phaseRefs.current[index] = el;
          contentRef(el);
        }}
        className={`relative ${side === 'left' ? 'lg:pr-16 xl:pr-24' : 'lg:pl-16 xl:pl-24'} py-16 lg:py-24`}
      >
        {/* Content Container */}
        <div
          className={`relative ${side === 'left' ? 'text-right lg:mr-auto' : 'text-left lg:ml-auto'} max-w-lg`}
        >
          {/* Phase Badge */}
          <motion.div 
            className={`inline-flex items-center gap-3 mb-6 ${side === 'left' ? 'flex-row-reverse' : 'flex-row'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${phase.gradient} flex items-center justify-center shadow-lg`}>
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-sm font-semibold text-cyan-400 tracking-wider">PHASE {index + 1}</span>
              <h3 className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r ${phase.gradient} bg-clip-text text-transparent`}>
                {phase.title}
              </h3>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.h4 
            className="text-xl lg:text-2xl font-semibold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {phase.subtitle}
          </motion.h4>

          {/* Description */}
          <motion.p 
            className="text-gray-300 text-lg leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            {phase.description}
          </motion.p>

          {/* Details List */}
          <motion.div 
            className="space-y-4 mb-8"
            initial={{ opacity: 0 }}
            animate={contentInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            {phase.details.map((detail, idx) => (
              <motion.div
                key={idx}
                className={`flex items-center gap-4 ${side === 'left' ? 'justify-end' : 'justify-start'}`}
                initial={{ opacity: 0, x: side === 'left' ? 30 : -30 }}
                animate={contentInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + (idx * 0.1) }}
                whileHover={{ x: side === 'left' ? -8 : 8 }}
              >
                {side === 'right' && (
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex-shrink-0"></div>
                )}
                <span className="text-gray-300 font-medium">{detail}</span>
                {side === 'left' && (
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex-shrink-0"></div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
     
        </div>
      </motion.div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 relative text-white overflow-hidden"
      style={{ backgroundColor: '#111827', minHeight: '100vh' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900"></div>
      
      {/* Animated Background Orbs */}
      <motion.div 
        className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20 lg:mb-28"
          ref={ref}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Our Proven Process
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
              Strategic Roadmap
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A structured approach to transform your vision into measurable success
          </motion.p>
        </motion.div>

        {/* Timeline Section */}
        <div className="relative">
          {/* Static Background Timeline */}
          <div
            ref={timelineRef}
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/30 via-blue-500/30 to-purple-500/30 transform -translate-x-1/2 z-0"
            style={{ transformOrigin: "top" }}
          />

          {/* Animated Progress Fill */}
          <div
            ref={progressBarRef}
            className="absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 transform -translate-x-1/2 z-10"
            style={{ height: '0%', transformOrigin: "top" }}
          />

          {/* Timeline Content */}
          <div className="relative z-20">
            {phases.map((phase, index) => {
              const side = index % 2 === 0 ? 'left' : 'right';
              
              return (
                <div key={index} className="relative">
                  {/* Central Icon Node */}
                  <div
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 ${
                      activePhase >= index ? 'scale-100' : 'scale-90 opacity-50'
                    } transition-all duration-500`}
                  >
                    {/* Icon Container */}
                    <motion.div
                      ref={el => iconsRef.current[index] = el}
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${phase.gradient} shadow-2xl flex items-center justify-center border-4 border-gray-900 relative ${
                        activePhase === index ? 'ring-4 ring-cyan-400/50' : ''
                      }`}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300 
                      }}
                      animate={{
                        scale: activePhase === index ? [1, 1.1, 1] : 1,
                        transition: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                  
                    >
                      <phase.icon className="w-10 h-10 text-white" />
                      
                      {/* Active Pulse Effect */}
                      {activePhase === index && (
                        <motion.div
                          className="absolute inset-0 rounded-2xl border-2 border-cyan-300"
                          animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [0.8, 0, 0.8]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}

                      {/* Phase Number */}
                      <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg border-2 border-gray-900 transition-all duration-300 ${
                        activePhase >= index 
                          ? `bg-gradient-to-r ${phase.gradient}` 
                          : 'bg-gray-600'
                      }`}>
                        {index + 1}
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <PhaseContent 
                    phase={phase} 
                    index={index} 
                    side={side}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress Navigation */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-flex flex-wrap items-center gap-8 px-8 py-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl">
            {phases.map((phase, index) => (
              <motion.button 
                key={index}
                className="flex items-center gap-3 cursor-pointer group"
                whileHover={{ scale: 1.05, y: -2 }}
                onClick={() => {
                  phaseRefs.current[index]?.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                  });
                }}
              >
                <motion.div 
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    activePhase >= index 
                      ? `bg-gradient-to-r ${phase.gradient} shadow-lg` 
                      : 'bg-gray-600'
                  }`}
                  animate={activePhase === index ? {
                    scale: [1, 1.3, 1],
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className={`text-sm font-semibold transition-colors duration-300 ${
                  activePhase >= index ? 'text-cyan-300' : 'text-gray-500'
                } group-hover:text-white`}>
                  {phase.title}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapSection;