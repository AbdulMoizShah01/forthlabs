"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Calendar, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white overflow-hidden border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-cyan-900/20" />
      
      {/* Floating Orbs */}
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-1"
              variants={footerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/headerlogo.png" 
                  alt="Forth Labs Logo" 
                  className="w-40 h-10 rounded-lg"
                />
              
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Building the future with cutting-edge technology solutions. 
                We transform ideas into digital excellence.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">G-11 Markaz, Islamabad, Pakistan
</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">+123456789</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">habib@forthlabs.com</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              variants={footerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-semibold text-white mb-6 text-lg">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: 'Services', href: '#services' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'About Us', href: '#about' },
                  { name: 'Our Team', href: '#team' },
                  { name: 'Contact', href: '#contact' },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              variants={footerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-semibold text-white mb-6 text-lg">Services</h3>
              <ul className="space-y-3">
                {[
                  'Web Development',
                  'Mobile Apps',
                  'AI Solutions',
                  'Blockchain',
                  'Cloud Services',
                  'UI/UX Design'
                ].map((service, index) => (
                  <li key={index}>
                    <a
                      href="#services"
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA & Social */}
            <motion.div
              variants={footerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-semibold text-white mb-6 text-lg">Start a Project</h3>
              
              {/* CTA Button */}
              <motion.a
                href="https://koalendar.com/e/meet-with-hamza-4"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mb-6"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book a Meeting
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold text-white mb-4 text-sm">Follow Us</h4>
                <div className="flex space-x-4">
                  {[
                    {
                      name: 'LinkedIn',
                      href: 'https://www.linkedin.com/company/forth-labs',
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.029-3.055-1.862-3.055-1.863 0-2.147 1.454-2.147 2.957v5.702h-3v-11h2.879v1.5h.04c.401-.757 1.379-1.557 2.834-1.557 3.031 0 3.589 1.996 3.589 4.592v6.465z"/>
                        </svg>
                      )
                    },
                    {
                      name: 'Instagram',
                      href: 'https://www.instagram.com/forth.labs',
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.664.075-3.252.497-4.487 1.732-1.235 1.235-1.657 2.823-1.732 4.487-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.075 1.664.497 3.252 1.732 4.487 1.235 1.235 2.823 1.657 4.487 1.732 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.664-.075 3.252-.497 4.487-1.732 1.235-1.235 1.657-2.823 1.732-4.487.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.075-1.664-.497-3.252-1.732-4.487-1.235-1.235-2.823-1.657-4.487-1.732-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/>
                        </svg>
                      )
                    }
                  ].map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 bg-gray-800/50 p-2 rounded-lg hover:bg-gray-700/50"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Forth Labs. Crafted with passion for innovation.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;