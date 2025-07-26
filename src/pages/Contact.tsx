import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/magicui/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { 
  Calendar, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Send,
  Clock,
  Users,
  Zap,
  CheckCircle
} from "lucide-react";
import { useState, useEffect } from "react";

// Calendly widget integration
declare global {
  interface Window {
    Calendly: any;
  }
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load Calendly widget
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const clientLogos = [
    { src: 'https://i0.wp.com/thinkbyte.ai/wp-content/uploads/2025/01/SuperK-New-Logo-red-1.png?w=780&ssl=1', alt: 'SuperK' },
    { src: 'https://i0.wp.com/thinkbyte.ai/wp-content/uploads/2025/01/3-1-6.png?w=3000&ssl=1', alt: 'Iira' },
    { src: 'https://thinkbyte.ai/wp-content/uploads/2025/01/5-1-1.png', alt: 'Good Deeds' },
    { src: 'https://thinkbyte.ai/wp-content/uploads/2025/01/7-1-6.png', alt: 'Anvayaa' },
    { src: 'https://thinkbyte.ai/wp-content/uploads/2025/01/2-2-1.png', alt: 'Millet Maagic' },
    { src: 'https://thinkbyte.ai/wp-content/uploads/2025/01/10-4.png', alt: 'Lustral Water' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl"></div>
        <div className="container mx-auto px-6 text-center relative">
          <FadeIn delay={0} duration={800}>
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-8">
              <Zap className="w-4 h-4 mr-2" />
              Available for new projects
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
              Let's Build Something
              <span className="block text-blue-400">Amazing Together</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your business with AI? Choose your preferred way to connect.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            
            {/* Left - Calendly (3 columns) */}
            <div className="lg:col-span-3">
              <FadeIn delay={0} duration={600}>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-3 text-white">
                    Schedule a Call
                  </h2>
                  <p className="text-gray-400">
                    Book a 30-minute consultation with our AI experts
                  </p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-2 shadow-2xl">
                  {/* Calendly Inline Widget */}
                  <div 
                    className="calendly-inline-widget rounded-2xl overflow-hidden" 
                    data-url="https://calendly.com/harsha-seobuddy/30min"
                    style={{ minWidth: '100%', height: '700px' }}
                  ></div>
                </div>
              </FadeIn>
            </div>

            {/* Right - Info & Form (2 columns) */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Quick Contact */}
              <FadeIn delay={200} duration={600}>
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Quick Contact</h3>
                  
                  <div className="space-y-4 mb-8">
                    <a href="tel:+919515968690" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                        <Phone className="w-5 h-5 text-blue-400" />
                      </div>
                      <span>+91 951596-8690</span>
                    </a>
                    
                    <a href="mailto:hello@thinkbyte.ai" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                        <Mail className="w-5 h-5 text-purple-400" />
                      </div>
                      <span>hello@thinkbyte.ai</span>
                    </a>
                    
                    <div className="flex items-center space-x-3 text-gray-300">
                      <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-green-400" />
                      </div>
                      <span>Bengaluru, India</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-3 text-center">
                      <Clock className="w-5 h-5 text-green-400 mx-auto mb-1" />
                      <p className="text-xs font-medium text-white">24h Response</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-3 text-center">
                      <Users className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                      <p className="text-xs font-medium text-white">AI Experts</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Message Form */}
              <FadeIn delay={400} duration={600}>
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Send a Message</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Prefer to write? We'll respond within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-white/5 border-white/20 text-white placeholder-gray-500 focus:border-blue-400 focus:ring-blue-400/20 h-11 rounded-xl"
                        required
                      />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white/5 border-white/20 text-white placeholder-gray-500 focus:border-blue-400 focus:ring-blue-400/20 h-11 rounded-xl"
                        required
                      />
                    </div>
                    
                    <Textarea
                      name="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-white/5 border-white/20 text-white placeholder-gray-500 focus:border-blue-400 focus:ring-blue-400/20 min-h-[100px] resize-none rounded-xl"
                      required
                    />
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:scale-100"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      ) : (
                        <Send className="w-4 h-4 mr-2" />
                      )}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <FadeIn delay={0} duration={600}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose ThinkByte AI?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We deliver AI solutions that create measurable business impact
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <CheckCircle className="w-6 h-6" />,
                title: "Strategic Consulting",
                description: "AI roadmaps aligned with business goals",
                color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30"
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Custom AI Agents",
                description: "Purpose-built solutions for your challenges",
                color: "from-purple-500/20 to-pink-500/20 border-purple-500/30"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Seamless Integration",
                description: "Works with your existing systems",
                color: "from-green-500/20 to-emerald-500/20 border-green-500/30"
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Ongoing Support",
                description: "Enterprise deployment & optimization",
                color: "from-orange-500/20 to-red-500/20 border-orange-500/30"
              }
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 100} duration={600}>
                <div className={`bg-gradient-to-br ${item.color} backdrop-blur-sm border rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300`}>
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <FadeIn delay={0} duration={600}>
            <h2 className="text-2xl font-bold text-center mb-12 text-white">
              Trusted by Growing Companies
            </h2>
          </FadeIn>
          
          <div className="overflow-hidden">
            <InfiniteMovingCards items={clientLogos} speed="slow" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;