
import { useState, useRef, useEffect } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CaseStudy {
  title: string;
  category: string;
  description: string;
  results: string[];
  metrics: { label: string; value: string; suffix: string; }[];
  bgColor: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "E-Commerce Revolution",
    category: "Conversational AI",
    description: "We developed an intelligent chatbot for a leading e-commerce company that handles customer inquiries, processes returns, and recommends products based on user preferences.",
    results: [
      "Reduced customer service costs by 40%",
      "Increased conversion rates by 28%",
      "Improved customer satisfaction scores by 35%"
    ],
    metrics: [
      { label: "Cost Reduction", value: "40", suffix: "%" },
      { label: "Response Time", value: "3", suffix: "min" },
      { label: "Customer Satisfaction", value: "92", suffix: "%" }
    ],
    bgColor: "bg-gradient-to-br from-synergy-blue/10 to-synergy-purple/10"
  },
  {
    title: "Marketing Campaign Optimization",
    category: "AI-Powered Advertising",
    description: "Our AI advertising platform helped a retail chain optimize their digital marketing campaigns across multiple channels, predicting customer behavior and adjusting bids in real-time.",
    results: [
      "Increased ad ROI by 65%",
      "Reduced cost per acquisition by 32%",
      "Improved targeting accuracy by 47%"
    ],
    metrics: [
      { label: "ROI Increase", value: "65", suffix: "%" },
      { label: "CPA Reduction", value: "32", suffix: "%" },
      { label: "Conversion Rate", value: "18", suffix: "%" }
    ],
    bgColor: "bg-gradient-to-br from-synergy-purple/10 to-synergy-blue/10"
  },
  {
    title: "Workflow Automation",
    category: "Automation Agents",
    description: "We implemented AI agents for a financial services firm that automated document processing, compliance checks, and client onboarding, reducing manual work and errors.",
    results: [
      "Reduced processing time by 85%",
      "Decreased error rates by 93%",
      "Saved 25,000 work hours annually"
    ],
    metrics: [
      { label: "Time Saved", value: "85", suffix: "%" },
      { label: "Error Reduction", value: "93", suffix: "%" },
      { label: "Productivity Gain", value: "37", suffix: "%" }
    ],
    bgColor: "bg-gradient-to-br from-synergy-blue/10 to-synergy-purple/10"
  }
];

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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

  const nextCase = () => {
    setActiveIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setActiveIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const activeCase = caseStudies[activeIndex];

  return (
    <section 
      id="case-studies" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Case Studies</h2>
          <p className="text-white/70 text-lg">
            Real results delivered through our AI solutions across different industries.
          </p>
        </div>

        <div 
          className={`transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className={`${activeCase.bgColor} rounded-2xl p-6 md:p-10 glass-card`}>
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Case Study Content */}
              <div className="lg:w-2/3">
                <span className="text-synergy-blue text-sm uppercase font-medium tracking-wider">
                  {activeCase.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4 text-white">
                  {activeCase.title}
                </h3>
                <p className="text-white/80 mb-6">
                  {activeCase.description}
                </p>
                
                <h4 className="text-lg font-semibold mb-3 text-white">Key Results:</h4>
                <ul className="space-y-2 mb-6">
                  {activeCase.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={18} className="text-synergy-blue mt-1 mr-2" />
                      <span className="text-white/70">{result}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  className="bg-gradient-to-r from-synergy-blue to-synergy-purple hover:from-synergy-blue-light hover:to-synergy-purple-light group mt-4"
                >
                  <span>View Full Case Study</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              {/* Metrics */}
              <div className="lg:w-1/3 flex flex-col justify-center">
                <div className="grid grid-cols-1 gap-6">
                  {activeCase.metrics.map((metric, index) => (
                    <div key={index} className="text-center p-4 rounded-xl glass-card">
                      <div className="text-4xl font-bold text-white mb-1">
                        {metric.value}
                        <span className="text-synergy-blue">{metric.suffix}</span>
                      </div>
                      <div className="text-white/70">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white/20 hover:bg-synergy-blue/20 hover:border-synergy-blue/50"
              onClick={prevCase}
            >
              <ArrowLeft size={20} />
            </Button>
            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index 
                      ? 'bg-gradient-to-r from-synergy-blue to-synergy-purple w-8' 
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                  onClick={() => setActiveIndex(index)}
                ></button>
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white/20 hover:bg-synergy-blue/20 hover:border-synergy-blue/50"
              onClick={nextCase}
            >
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 neural-grid opacity-5"></div>
    </section>
  );
};

export default CaseStudies;
