import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Zap, Brain, Cog, Puzzle, Building, Heart, Factory, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
 
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      // For anchor links, scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // For route links, navigate
      navigate(href);
    }
    setIsOpen(false);
  };

  const navItems = [
    {
      name: "Services",
      hasDropdown: true,
      items: [
        { name: "AI Consulting", description: "Strategic AI roadmaps", icon: Brain },
        { name: "AI Agent Development", description: "Custom AI automation", icon: Zap },
        { name: "Process Optimization", description: "Workflow streamlining", icon: Cog },
        { name: "AI Integration", description: "Seamless AI adoption", icon: Puzzle }
      ]
    },
    {
      name: "Solutions",
      hasDropdown: true,
      items: [
        { name: "Healthcare", description: "Medical AI solutions", icon: Heart },
        { name: "Finance", description: "Financial automation", icon: Building },
        { name: "Manufacturing", description: "Industrial AI systems", icon: Factory },
        { name: "Retail", description: "Commerce optimization", icon: Store }
      ]
    },
    { name: "Work", href: "/work" },
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    } ${
      isScrolled 
        ? 'glass-card backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 max-w-5xl w-[95%]' 
        : 'w-full max-w-6xl px-6 py-4'
    }`}>
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        {/* <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold gradient-text">Thinkbyte AI</span>
        </div> */}
        <Link to="/" className="inline-flex items-center">
        <img
          src="https://i0.wp.com/thinkbyte.ai/wp-content/uploads/2025/01/ifalgo-1.png?fit=799%2C107&ssl=1"
          alt="Thinkbyte AI"
          className="w-[200px] h-auto object-contain"
        />
      </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.href ? (
                <button 
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center space-x-1 text-white/40 hover:text-primary transition-colors duration-200 font-medium"
                >
                  <span>{item.name}</span>
                </button>
              ) : (
                <button className="flex items-center space-x-1 text-white/40 hover:text-primary transition-colors duration-200 font-medium">
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              )}
              
              {item.hasDropdown && (
                <div className="absolute top-full left-0 mt-2 w-80 glass-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 border border-white/10">
                  <div className="p-4 grid grid-cols-1 gap-3">
                    {item.items?.map((subItem) => (
                      <button
                        key={subItem.name}
                        onClick={() => handleNavClick("#")}
                        className="group/item flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 hover:scale-[1.02] w-full text-left"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-200">
                          <subItem.icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-white group-hover/item:text-blue-400 transition-colors duration-200">
                            {subItem.name}
                          </h4>
                          <p className="text-xs text-gray-400 mt-1">
                            {subItem.description}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button 
            onClick={() => handleNavClick("#contact")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl px-6 py-2.5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-4 glass-card animate-fade-in-up rounded-2xl mx-4">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.href || "#")}
                    className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </button>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.items?.map((subItem) => (
                        <button
                          key={subItem.name}
                          onClick={() => handleNavClick("#")}
                          className="flex items-center space-x-2 px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 w-full text-left"
                        >
                          <subItem.icon className="w-4 h-4" />
                          <span>{subItem.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4">
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium w-full transition-all duration-300" 
                  onClick={() => handleNavClick("#contact")}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
    </nav>
  );
};

export default Navigation;