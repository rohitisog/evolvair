
import { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
  delay?: number;
}

const ServiceCard = ({ icon, title, description, color = 'from-synergy-blue to-synergy-purple', delay = 0 }: ServiceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = (y - centerY) / 20;
    const tiltY = (centerX - x) / 20;
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`relative gradient-border glass-card rounded-xl p-6 h-full ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-all duration-700 ease-out hover-scale`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.3s ease, opacity 0.7s ease',
        transitionDelay: `${delay}ms`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-gradient-to-br ${color} text-white`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-white/70 mb-4">{description}</p>
      <div className="flex items-center text-synergy-blue hover:text-synergy-purple transition-colors cursor-pointer group">
        <span>Learn more</span>
        <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  );
};

export default ServiceCard;
