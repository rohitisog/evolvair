
import { useState, useRef, useEffect } from 'react';
import { Search, Code, Sparkles, Rocket, RefreshCw } from 'lucide-react';

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: number;
  isActive: boolean;
  onClick: () => void;
}

const ProcessStep = ({ icon, title, description, stepNumber, isActive, onClick }: ProcessStepProps) => {
  return (
    <div 
      className={`flex flex-col items-center text-center cursor-pointer transition-all duration-300 ${
        isActive ? 'scale-110' : 'opacity-70 hover:opacity-100'
      }`}
      onClick={onClick}
    >
      <div 
        className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
          isActive 
            ? 'bg-gradient-to-r from-synergy-blue to-synergy-purple shadow-lg shadow-synergy-blue/20' 
            : 'bg-white/10'
        }`}
      >
        <div className="text-white">{icon}</div>
      </div>
      <div className={`font-bold text-lg mb-2 ${isActive ? 'text-white' : 'text-white/70'}`}>{title}</div>
      {isActive && (
        <p className="text-white/70 max-w-xs animation-fade-in">{description}</p>
      )}
    </div>
  );
};

const Process = () => {
  const [activeStep, setActiveStep] = useState(1);
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

  const steps = [
    {
      icon: <Search size={28} />,
      title: 'Discovery',
      description: 'We analyze your business needs, challenges, and goals to identify the optimal AI solutions.'
    },
    {
      icon: <Sparkles size={28} />,
      title: 'Design',
      description: 'Our experts design tailored AI solutions that integrate seamlessly with your existing systems.'
    },
    {
      icon: <Code size={28} />,
      title: 'Develop',
      description: 'We build, test, and refine your AI solutions using cutting-edge technologies and methodologies.'
    },
    {
      icon: <Rocket size={28} />,
      title: 'Deploy',
      description: 'Your AI solutions are deployed with minimal disruption to your operations for immediate value.'
    },
    {
      icon: <RefreshCw size={28} />,
      title: 'Optimize',
      description: 'We continuously monitor and improve your AI solutions to ensure peak performance and ROI.'
    }
  ];

  // Auto-advance the steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % steps.length) + 1);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section 
      id="process" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-[#0a0a12]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">How We Work</h2>
          <p className="text-white/70 text-lg">
            Our proven methodology ensures successful AI implementation from concept to continuous optimization.
          </p>
        </div>

        <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-synergy-blue/20 via-synergy-purple/40 to-synergy-blue/20"></div>
            
            {/* Process Steps */}
            <div className="flex flex-wrap justify-between relative z-10">
              {steps.map((step, index) => (
                <ProcessStep
                  key={index}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  stepNumber={index + 1}
                  isActive={activeStep === index + 1}
                  onClick={() => setActiveStep(index + 1)}
                />
              ))}
            </div>
          </div>

          {/* Active Step Description (Mobile) */}
          <div className="md:hidden mt-10 text-center">
            <p className="text-white/70">{steps[activeStep - 1].description}</p>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 neural-grid opacity-5"></div>
    </section>
  );
};

export default Process;
