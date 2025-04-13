
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particleOffset = {
    x: (mousePosition.x - 0.5) * 10,
    y: (mousePosition.y - 0.5) * 10
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center py-16 overflow-hidden"
      style={{ paddingTop: '5rem' }}
    >
      {/* Animated Background with Subtle Parallax */}
      <div className="absolute inset-0 neural-grid"></div>
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, rgba(14, 165, 233, 0.1) 25%, rgba(0, 0, 0, 0) 50%)',
          transform: `translate(${particleOffset.x * 2}px, ${particleOffset.y * 2}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      ></div>

      {/* Animated Data Stream Particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-gradient-to-b from-evolvair-blue/30 to-evolvair-purple/30 rounded-full filter blur-2xl"
          style={{
            width: `${Math.random() * 300 + 100}px`,
            height: `${Math.random() * 300 + 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.2 + 0.1,
            transform: `translate(${particleOffset.x * (i + 1) * 1.5}px, ${particleOffset.y * (i + 1) * 1.5}px)`,
            transition: 'transform 0.6s ease-out'
          }}
        ></div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animated-gradient-text">
            Amplify Your Potential: Intelligent AI, Seamlessly Integrated
          </h1>
          <p className="text-xl md:text-2xl text-white/70 mb-10">
            We build the AI tools—agents, chatbots, ad intelligence—that drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              className="bg-gradient-to-r from-evolvair-blue to-evolvair-purple hover:from-evolvair-blue-light hover:to-evolvair-purple-light text-white px-6 py-6 text-lg font-medium group"
              size="lg"
            >
              <a href="#contact">
                Start Your AI Transformation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              className="bg-transparent border border-white/20 hover:border-evolvair-blue/50 text-white hover:text-evolvair-blue px-6 py-6 text-lg font-medium"
              size="lg"
              variant="outline"
            >
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
