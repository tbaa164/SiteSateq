import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

import Stats from "@/components/Stats";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Add scroll-based animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observe all fade-in-up elements
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <Stats />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;
