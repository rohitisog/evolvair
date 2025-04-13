
import { useRef } from 'react';
import ServiceCard from './ServiceCard';
import { Bot, Cpu, BarChart, Cog, Lightbulb, Zap } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="services" className="py-24 relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Services</h2>
          <p className="text-white/70 text-lg">
            Cutting-edge AI solutions tailored to transform your business operations and customer experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Bot size={24} />}
            title="Automation Agents"
            description="Unlock 24/7 productivity with AI agents that handle repetitive tasks, streamline workflows, and make decisions based on your business rules."
            delay={100}
          />
          
          <ServiceCard
            icon={<Cpu size={24} />}
            title="Conversational AI"
            description="Engage customers instantly with smart chatbots that understand context, provide meaningful responses, and learn from each interaction."
            color="from-synergy-purple to-synergy-blue"
            delay={200}
          />
          
          <ServiceCard
            icon={<BarChart size={24} />}
            title="AI-Powered Advertising"
            description="Maximize ROI with predictive AI advertising that targets the right audience, optimizes spend, and continuously improves campaign performance."
            delay={300}
          />
          
          <ServiceCard
            icon={<Lightbulb size={24} />}
            title="Custom AI Development"
            description="Tailored intelligence solutions built to address your specific business challenges with cutting-edge machine learning and deep learning technologies."
            color="from-synergy-purple to-synergy-blue"
            delay={400}
          />
          
          <ServiceCard
            icon={<Zap size={24} />}
            title="Process Optimization"
            description="Identify inefficiencies and implement AI-driven solutions that reduce costs, minimize errors, and accelerate operations."
            delay={500}
          />
          
          <ServiceCard
            icon={<Cog size={24} />}
            title="AI Integration"
            description="Seamlessly connect our AI solutions with your existing systems, ensuring data flows smoothly between platforms for maximum impact."
            color="from-synergy-purple to-synergy-blue"
            delay={600}
          />
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-synergy-blue/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-synergy-purple/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Services;
