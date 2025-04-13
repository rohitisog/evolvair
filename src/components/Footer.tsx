
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Logo & Info */}
          <div className="md:col-span-2">
            <a href="#" className="inline-block mb-4">
              <span className="text-xl font-bold">
                <span className="text-evolvair-blue">Evolv</span>
                <span className="text-evolvair-purple">air</span>
              </span>
            </a>
            <p className="text-white/70 mb-6 max-w-md">
              Transforming businesses with intelligent AI solutions that automate, optimize, and innovate across your entire organization.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-evolvair-blue transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white/70 hover:text-evolvair-blue transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-white/70 hover:text-evolvair-blue transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-white/70 hover:text-evolvair-blue transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/70 hover:text-evolvair-blue transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="text-white/70 hover:text-evolvair-blue transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-white/70 hover:text-evolvair-blue transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-evolvair-blue transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-evolvair-blue transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-evolvair-blue transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-evolvair-blue transition-colors">
                  Automation Agents
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-evolvair-blue transition-colors">
                  Conversational AI
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-evolvair-blue transition-colors">
                  AI-Powered Advertising
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-evolvair-blue transition-colors">
                  Custom AI Development
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-evolvair-blue transition-colors">
                  Process Optimization
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Evolvair. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
