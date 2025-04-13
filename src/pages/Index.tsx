
import { useEffect, useState } from 'react';
import LoadingAnimation from '@/components/LoadingAnimation';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import CaseStudies from '@/components/CaseStudies';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <LoadingAnimation />
      
      {pageLoaded && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Services />
            <Process />
            <CaseStudies />
            <About />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </div>
  );
};

export default Index;
