import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

// FlickeringGrid component for the animated text effect
const FlickeringGrid = ({ className, squareSize = 4, gridGap = 6, color = "#6B7280", maxOpacity = 0.5, flickerChance = 0.1, height = 800, width = 800 }) => {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const cols = Math.floor(width / (squareSize + gridGap));
    const rows = Math.floor(height / (squareSize + gridGap));
    
    const createGrid = () => {
      const newGrid = [];
      for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
          row.push({
            opacity: Math.random() < flickerChance ? Math.random() * maxOpacity : 0,
            id: `${i}-${j}`
          });
        }
        newGrid.push(row);
      }
      return newGrid;
    };

    setGrid(createGrid());
    
    const interval = setInterval(() => {
      setGrid(createGrid());
    }, 200);

    return () => clearInterval(interval);
  }, [squareSize, gridGap, maxOpacity, flickerChance, height, width]);

  return (
    <div className={className}>
      <svg width={width} height={height} className="absolute inset-0">
        {grid.map((row, i) => 
          row.map((cell, j) => (
            <rect
              key={cell.id}
              x={j * (squareSize + gridGap)}
              y={i * (squareSize + gridGap)}
              width={squareSize}
              height={squareSize}
              fill={color}
              opacity={cell.opacity}
            />
          ))
        )}
      </svg>
    </div>
  );
};

// Dot matrix text component
const DotMatrixText = ({ text, className }) => {
  const [textGrid, setTextGrid] = useState([]);
  
  useEffect(() => {
    // Create a simple dot matrix pattern for the text
    const createTextPattern = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // Set canvas size
      canvas.width = 1200;
      canvas.height = 120;
      
      // Set font
      ctx.font = 'bold 80px monospace';
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Draw text
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);
      
      // Get image data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      // Convert to dot matrix
      const dotSize = 8;
      const dots = [];
      
      for (let y = 0; y < canvas.height; y += dotSize) {
        for (let x = 0; x < canvas.width; x += dotSize) {
          const i = (y * canvas.width + x) * 4;
          const alpha = data[i + 3];
          
          if (alpha > 128) { // If pixel is not transparent
            dots.push({
              x: x,
              y: y,
              opacity: Math.random() * 0.8 + 0.2,
              id: `${x}-${y}`
            });
          }
        }
      }
      
      return dots;
    };
    
    const dots = createTextPattern();
    setTextGrid(dots);
    
    // Animate the dots
    const interval = setInterval(() => {
      setTextGrid(prevDots => 
        prevDots.map(dot => ({
          ...dot,
          opacity: Math.random() * 0.6 + 0.4
        }))
      );
    }, 150);
    
    return () => clearInterval(interval);
  }, [text]);
  
  return (
    <div className={`relative ${className}`}>
      <svg width={1200} height={120} className="mx-auto">
        {textGrid.map((dot) => (
          <rect
            key={dot.id}
            x={dot.x}
            y={dot.y}
            width={4}
            height={4}
            fill="#9CA3AF"
            opacity={dot.opacity}
          />
        ))}
      </svg>
    </div>
  );
};

const Footer = () => {
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

  return (
    <>
      <footer className="bg-black text-white px-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              {/* <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <span className="text-2xl font-bold">Thinkbyte AI</span>
              </div> */}
              <div className="flex justify-start items-center">
              <img src="https://i0.wp.com/thinkbyte.ai/wp-content/uploads/2025/01/ifalgo-1.png?fit=799%2C107&ssl=1" alt="Thinkbyte AI" 
                className="mb-4 object-cover w-[70%]" />
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

      {/* Animated Grid Text Section */}
      <div className="relative bg-black overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <FlickeringGrid
            className="absolute inset-0 z-0 size-full"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.3}
            flickerChance={0.08}
            height={400}
            width={2000}
          />
        </div>
        
        <div className="relative z-10 flex items-center justify-center">
          <DotMatrixText 
            text="Future of AI Automation"
            className="mb-0"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;