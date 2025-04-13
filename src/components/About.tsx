
import { useRef, useState, useEffect } from 'react';
import { Award, Users, Globe, Code } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const statistics = [
    { icon: <Award size={24} />, value: "5+", label: "Years Experience" },
    { icon: <Users size={24} />, value: "100+", label: "Happy Clients" },
    { icon: <Globe size={24} />, value: "15+", label: "Countries Served" },
    { icon: <Code size={24} />, value: "250+", label: "AI Projects" }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 data-grid opacity-10"
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* About Content */}
            <div className="lg:w-1/2">
              <div 
                className={`transition-all duration-1000 delay-100 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">About Evolvair</h2>
                <p className="text-white/80 text-lg mb-6">
                  At Evolvair, we're more than just AI developers—we're strategic partners in your digital transformation journey. Our team combines deep technical expertise with business acumen to deliver AI solutions that create tangible results.
                </p>
                <p className="text-white/80 text-lg mb-6">
                  Founded by AI pioneers with backgrounds in machine learning, natural language processing, and automation, our mission is to democratize access to advanced AI capabilities for businesses of all sizes.
                </p>
                <p className="text-white/80 text-lg">
                  We believe in responsible AI development that prioritizes transparency, fairness, and ethics while delivering powerful business outcomes. Our solutions are designed to augment human capabilities, not replace them.
                </p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-6">
                {statistics.map((stat, index) => (
                  <div 
                    key={index}
                    className={`glass-card rounded-xl p-6 text-center transition-all duration-1000 transform ${
                      isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-evolvair-blue/20 to-evolvair-purple/20 flex items-center justify-center text-evolvair-blue">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-32 bg-gradient-to-r from-evolvair-blue/5 via-evolvair-purple/10 to-evolvair-blue/5 skew-y-6 -z-1"></div>
    </section>
  );
};

export default About;
