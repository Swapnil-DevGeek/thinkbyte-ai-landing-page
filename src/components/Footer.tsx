import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { useEffect, useState, useRef } from "react";

const Footer = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const footerRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  const services = [
    "AI Consulting & Strategy",
    "AI Agent Development", 
    "Process Optimization",
    "AI Integration Services"
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@thinkbyte.ai", label: "Email" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;

      const footerRect = footerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Show parallax text when footer is in view and user scrolls past it
      const footerTop = footerRect.top;
      const footerHeight = footerRect.height;
      
      // Start revealing when footer is mostly in view
      if (footerTop < windowHeight * 0.8) {
        const scrolledPast = (windowHeight * 0.8) - footerTop;
        const progress = Math.min(scrolledPast / (footerHeight * 0.6), 1);
        setScrollProgress(Math.max(0, progress));
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div className="relative">
      {/* Footer Content - Above/Foreground */}
      <footer ref={footerRef} className="bg-black text-white py-20 relative z-[20]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex justify-start items-center">
                <img 
                  src="https://i0.wp.com/thinkbyte.ai/wp-content/uploads/2025/01/ifalgo-1.png?fit=799%2C107&ssl=1" 
                  alt="Thinkbyte AI" 
                  className="mb-4 object-cover w-[70%]" 
                />
              </div>
              
              <p className="text-white/80 mb-6 leading-relaxed text-left">
                Transforming businesses through AI-driven automation solutions. We help companies scale efficiently with intelligent AI agents.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-white/80">Bengaluru, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-white/80">+91 951596-8690</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-white/80">hello@thinkbyte.ai</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-white/80 hover:text-blue-400 transition-colors duration-200"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div>
              <h3 className="text-xl font-bold mb-6">Stay Updated</h3>
              <p className="text-white/80 mb-4">
                Get the latest AI insights and industry updates.
              </p>
              
              <div className="flex space-x-2 mb-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-blue-400 transition-colors duration-200"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200">
                  Subscribe
                </Button>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-white/10 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-200 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-200" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Parallax Text Section - Behind/Below */}
      <div 
        ref={parallaxRef}
        className="fixed bottom-0 left-0 right-0 h-96 overflow-hidden pointer-events-none z-[1]"
        style={{
          display: scrollProgress > 0 ? 'block' : 'none'
        }}
      >
        <div className="absolute inset-0 bg-black"></div>
        <div 
          className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out"
          style={{
            transform: scrollProgress >= 1 
              ? 'translateY(0px)' 
              : `translateY(${(1 - scrollProgress) * 100}px)`,
            opacity: scrollProgress
          }}
        >
          <div className="opacity-20 w-full h-full">
            <TextHoverEffect text="THINKBYTE" duration={0.3} />
          </div>
        </div>
      </div>
      
    </div>
    <div className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">

          <div className="w-full h-32 md:h-40 flex items-center justify-center">
          </div>
        </div>
      </div>
      </>

  );
};

export default Footer;