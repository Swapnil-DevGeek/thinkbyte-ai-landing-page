import { Brain, Bot, Cog, Zap, Sparkles, ArrowRight, Rocket } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { Badge } from "@/components/ui/badge";

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Consulting & Strategy",
      description: "Strategic AI roadmaps and implementation guidance tailored to your business objectives and market requirements.",
      features: ["AI Strategy Development", "Technology Assessment", "ROI Analysis", "Implementation Planning"],
      badge: "Strategic",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Bot,
      title: "AI Agent Development",
      description: "Custom AI agents designed to automate complex workflows and enhance operational efficiency across your organization.",
      features: ["Custom AI Agents", "Workflow Automation", "Natural Language Processing", "Machine Learning Models"],
      badge: "Most Popular",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Cog,
      title: "Process Optimization",
      description: "Streamline operations with intelligent automation that adapts to your existing processes and scales with growth.",
      features: ["Process Analysis", "Automation Design", "Performance Optimization", "Continuous Improvement"],
      badge: "Efficiency",
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: Zap,
      title: "AI Integration Services",
      description: "Seamless AI integration into existing systems with minimal disruption and maximum compatibility.",
      features: ["System Integration", "API Development", "Data Pipeline Setup", "Legacy System Updates"],
      badge: "Integration",
      gradient: "from-green-500/20 to-emerald-500/20"
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">Our AI Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-white tracking-tight">
            Helping businesses transform through
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 font-medium mt-2">
              AI automation
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Thinkbyte combines strategic AI consulting with cutting-edge automation to drive measurable business growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <MagicCard
              key={service.title}
              className="group h-full bg-black/40 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <Badge variant="secondary" className="text-xs bg-white/10 text-white border-white/20 hover:bg-white/20">
                  {service.badge}
                </Badge>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0 group-hover:bg-purple-400 transition-colors duration-300"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </MagicCard>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-2xl px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
            <Rocket className="w-5 h-5 mr-2 inline group-hover:rotate-12 transition-transform duration-300" />
            Get Custom AI Solution
            <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;