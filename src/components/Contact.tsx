
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      
      setFormState({
        name: '',
        email: '',
        company: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const contactOptions = [
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      description: 'Get in touch directly at:',
      contact: 'contact@synergyai.com'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Chat Support',
      description: 'Live chat available:',
      contact: 'Mon-Fri, 9am-5pm EST'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Start Your AI Transformation</h2>
          <p className="text-white/70 text-lg">
            Ready to harness the power of AI in your business? Reach out to discuss your needs and discover how we can help.
          </p>
        </div>

        <div 
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-2/3">
              <div className="glass-card rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-bold mb-6 text-white">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm text-white/70 mb-2">Your Name</label>
                      <Input
                        id="name"
                        name="name"
                        className="bg-white/5 border-white/10 focus:border-synergy-blue/50 text-white"
                        value={formState.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-white/70 mb-2">Email Address</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        className="bg-white/5 border-white/10 focus:border-synergy-blue/50 text-white"
                        value={formState.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="company" className="block text-sm text-white/70 mb-2">Company Name</label>
                    <Input
                      id="company"
                      name="company"
                      className="bg-white/5 border-white/10 focus:border-synergy-blue/50 text-white"
                      value={formState.company}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm text-white/70 mb-2">Your Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      className="bg-white/5 border-white/10 focus:border-synergy-blue/50 text-white h-32"
                      value={formState.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-synergy-blue to-synergy-purple hover:from-synergy-blue-light hover:to-synergy-purple-light group w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <span>Send Message</span>
                        <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </Button>
                </form>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="space-y-6">
                {contactOptions.map((option, index) => (
                  <div 
                    key={index} 
                    className="glass-card rounded-xl p-6"
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-synergy-blue/20 to-synergy-purple/20 flex items-center justify-center text-synergy-blue mb-4">
                      {option.icon}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{option.title}</h4>
                    <p className="text-white/70 text-sm mb-1">{option.description}</p>
                    <p className="text-synergy-blue font-medium">{option.contact}</p>
                  </div>
                ))}
                
                <div className="glass-card rounded-xl p-6 bg-gradient-to-br from-synergy-blue/20 to-synergy-purple/20">
                  <h4 className="text-xl font-bold text-white mb-3">Ready for the next step?</h4>
                  <p className="text-white/80 mb-4">
                    Schedule a free 30-minute consultation with our AI experts to discuss your specific needs.
                  </p>
                  <Button
                    className="w-full bg-white hover:bg-white/90 text-background font-medium"
                  >
                    Book a Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Contact;
