"use client"
import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Users, Star, Briefcase, Globe } from 'lucide-react';

export const Card = forwardRef(({ customClass, className, children, ...rest }, ref) => (
  <div ref={ref} className={`card ${customClass ?? ''} ${className ?? ''}`.trim()} {...rest}>
    {children}
  </div>
));
Card.displayName = 'Card';

const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i
});

const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true
  });

const CardSwap = ({
  width = 400,
  height = 300,
  cardDistance = 40,
  verticalDistance = 50,
  delay = 3000,
  pauseOnHover = true,
  onCardClick,
  skewAmount = 4,
  easing = 'elastic',
  children
}) => {

  const config =
    easing === 'elastic'
      ? {
          ease: 'elastic.out(0.6,0.9)',
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05
        }
      : {
          ease: 'power1.inOut',
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2
        };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef()),
    [childArr.length]
  );

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));

  const tlRef = useRef(null);
  const intervalRef = useRef(undefined);
  const container = useRef(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) => {
      const element = r.current;
      if (element) {
        placeNow(element, makeSlot(i, cardDistance, verticalDistance, total), skewAmount);
      }
    });

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      if (!elFront) return;

      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: '+=500',
        duration: config.durDrop,
        ease: config.ease
      });

      tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        if (!el) return;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, 'promote');
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease
          },
          `promote+=${i * 0.15}`
        );
      });

      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
      tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        [],
        'return'
      );
      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease
        },
        'return'
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    swap();
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current;
      if (!node) return () => {};

      const pause = () => {
        tlRef.current?.pause();
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener('mouseenter', pause);
      node.addEventListener('mouseleave', resume);
      return () => {
        node.removeEventListener('mouseenter', pause);
        node.removeEventListener('mouseleave', resume);
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing, refs, config]);

  const rendered = childArr.map((child, i) => {
    if (!isValidElement(child)) return child;
    
    return cloneElement(child, {
      key: i,
      ref: refs[i],
      style: { width, height, ...(child.props.style ?? {}) },
      onClick: (e) => {
        child.props.onClick?.(e);
        onCardClick?.(i);
      }
    });
  });

  return (
    <div ref={container} className="card-swap-container relative" style={{ width, height }}>
      {rendered}
    </div>
  );
};

// CSS Styles for CardSwap
const CardSwapStyles = () => (
  <style jsx global>{`
    .card-swap-container {
      position: relative;
      margin: 0 auto;
      perspective: 1000px;
    }

    .card {
      position: absolute;
      top: 50%;
      left: 50%;
      background: linear-gradient(135deg, rgba(17, 24, 39, 0.9), rgba(55, 65, 81, 0.7));
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 1.5rem;
      padding: 1.5rem;
      box-shadow: 
        0 25px 50px -12px rgba(0, 0, 0, 0.5),
        0 0 0 1px rgba(255, 255, 255, 0.05);
      transition: all 0.3s ease;
    }

    .card:hover {
      border-color: rgba(59, 130, 246, 0.3);
      box-shadow: 
        0 25px 50px -12px rgba(59, 130, 246, 0.2),
        0 0 0 1px rgba(59, 130, 246, 0.1);
    }

    @media (max-width: 768px) {
      .card-swap-container {
        transform: scale(0.9);
      }
      
      .card {
        padding: 1rem;
        border-radius: 1rem;
      }
    }

    @media (max-width: 640px) {
      .card-swap-container {
        transform: scale(0.8);
      }
    }
  `}</style>
);

// About Section Component
const AboutSection = () => {
  const cardData = [
    {
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: 'Expert Team',
      description: 'Seasoned professionals with 10+ years experience'
    },
    {
      icon: <Star className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: 'Top Rated',
      description: '5-star rated by 100+ satisfied clients'
    },
    {
      icon: <Briefcase className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: 'Projects',
      description: 'Successfully delivered projects worldwide'
    },
    {
      icon: <Globe className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: 'Global Reach',
      description: 'Serving clients across 20+ countries'
    }
  ];

  const handleCardClick = (index) => {
    console.log(`Card ${index} clicked`);
  };

  return (
    <>
      <CardSwapStyles />
      <section id="about" className="py-16 sm:py-24 lg:py-32 relative bg-gray-900 text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-cyan-900/20" />
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-center lg:text-left">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Innovation Meets Excellence
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed text-center lg:text-left">
                We're not just developers — we're digital architects, crafting tomorrow's solutions today. 
                Our team combines years of expertise with cutting-edge technology to deliver results that exceed expectations.
              </p>
              <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                {[
                  'Agile methodology & rapid deployment',
                  'End-to-end project management',
                  '24/7 support & maintenance',
                  'Cutting-edge technology stack'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 justify-center lg:justify-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-center lg:text-left">
                <button 
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => {
                    window.open("https://www.linkedin.com/company/forth-labs", "_blank");
                  }}
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
            
            {/* CardSwap Animation */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-3xl blur-3xl animate-pulse" />
                <CardSwap
                  width={400}
                  height={280}
                  cardDistance={30}
                  verticalDistance={40}
                  delay={4000}
                  pauseOnHover={true}
                  onCardClick={handleCardClick}
                  skewAmount={3}
                  easing="elastic"
                >
                  {cardData.map((card, index) => (
                    <Card
                      key={index}
                      customClass="flex flex-col items-center justify-center text-white p-6 cursor-pointer"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                        {card.icon}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center">
                        {card.title}
                      </h3>
                   
                    </Card>
                  ))}
                </CardSwap>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;