
import { useEffect, useState } from 'react';
const logo = "/logo_dark.PNG";

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="relative w-40 h-40">
        {/* Animated Neural Paths */}
        {/* <svg className="absolute inset-0" viewBox="0 0 100 100">
          <path
            d="M10,50 Q30,30 50,50 T90,50"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="1"
            strokeDasharray="150"
            strokeDashoffset="150"
            className="animate-neural-path"
            style={{ animationDelay: '0.2s' }}
          />
          <path
            d="M10,60 Q40,80 60,40 T90,60"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="1"
            strokeDasharray="150"
            strokeDashoffset="150"
            className="animate-neural-path"
            style={{ animationDelay: '0.4s' }}
          />
          <path
            d="M10,40 Q20,20 40,60 T90,40"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="1"
            strokeDasharray="150"
            strokeDashoffset="150"
            className="animate-neural-path"
            style={{ animationDelay: '0.6s' }}
          />
        </svg> */}
        
        {/* Logo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="text-2xl font-bold">
            {/* <span className="text-evolvair-blue">Evolv</span>
            <span className="text-evolvair-purple">air</span> */}
            <img src={logo} alt="logo"  className="mix-blend-multiply"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
