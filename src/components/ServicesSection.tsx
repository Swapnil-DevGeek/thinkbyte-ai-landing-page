import { Brain, Bot, Cog, Zap, Sparkles, ArrowRight, Rocket, Target, MessageSquare, Settings, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TextAnimate } from "@/components/ui/text-animate";
import { DotPattern } from "@/components/ui/dot-pattern";
import { GridPattern } from "@/components/ui/grid-pattern";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { RetroGrid } from "@/components/ui/retro-grid";
import { Ripple } from "@/components/ui/ripple";
import { cn } from "@/lib/utils";

const ServicesSection = () => {
  const services = [
    {
      icon: Target,
      title: "Strategic AI Consulting",
      description: "We architect AI roadmaps aligned with your core business objectives. From opportunity assessment to enterprise integration, we ensure measurable ROI and competitive advantage.",
      features: ["Opportunity Assessment", "Enterprise Integration", "ROI Optimization", "Competitive Strategy"],
      badge: "Strategic",
      gradient: "from-purple-500/20 to-pink-500/20",
      hoverGradient: "from-purple-500/30 to-pink-500/30",
      size: "large",
      background: <DotPattern 
        width={20} 
        height={20} 
        cx={1} 
        cy={1} 
        cr={2} 
        className={cn("text-purple-400/60 [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]")} 
        glow={true} 
      />
    },
    {
      icon: Settings,
      title: "Managed AI Platforms (MCPs)",
      description: "End-to-end AI ecosystems tailored to your stack. Deploy our pre-built or custom platforms (Marketing OS, SEOBYTE, etc.) to unify data, tools, and workflows.",
      features: ["Marketing OS", "Custom Platforms", "Data Unification", "Workflow Integration"],
      badge: "Popular",
      gradient: "from-blue-500/20 to-cyan-500/20",
      hoverGradient: "from-blue-500/30 to-cyan-500/30",
      size: "large",
      background: <AnimatedGridPattern 
        numSquares={35} 
        maxOpacity={0.3} 
        duration={4} 
        width={32} 
        height={32} 
        className={cn("text-blue-400/50 stroke-blue-400/30 fill-blue-400/20 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]")} 
      />
    },
    {
      icon: Bot,
      title: "Custom AI Agents",
      description: "Purpose-built AI solving specific operational challenges. Process-Specific Agents and Generative AI Solutions.",
      features: ["Process Automation", "Generative Solutions", "Custom Development"],
      badge: "Custom",
      gradient: "from-green-500/20 to-emerald-500/20",
      hoverGradient: "from-green-500/30 to-emerald-500/30",
      size: "medium",
      background: <FlickeringGrid className="absolute inset-0" squareSize={6} gridGap={8} color="#34d399" maxOpacity={0.4} flickerChance={0.15} />
    },
    {
      icon: MessageSquare,
      title: "Customer Engagement",
      description: "AI-powered chatbots and virtual assistants tailored to your business processes.",
      features: ["AI Chatbots", "Virtual Assistants", "Process Integration"],
      badge: "Engagement",
      gradient: "from-cyan-500/20 to-blue-500/20",
      hoverGradient: "from-cyan-500/30 to-blue-500/30",
      size: "medium",
      background: <Ripple className="absolute inset-0 text-cyan-400/40" mainCircleSize={100} mainCircleOpacity={0.3} numCircles={5} />
    },
    {
      icon: Cog,
      title: "MLOps Operations",
      description: "Efficient AI implementation with measurable impact through development, deployment, and optimization.",
      features: ["MLOps Implementation", "System Optimization", "Performance Monitoring"],
      badge: "Operations",
      gradient: "from-orange-500/20 to-red-500/20",
      hoverGradient: "from-orange-500/30 to-red-500/30",
      size: "medium",
      background: <RetroGrid className="absolute inset-0" angle={45} cellSize={40} opacity={0.6} lightLineColor="rgba(249, 115, 22, 0.3)" darkLineColor="rgba(249, 115, 22, 0.3)" />
    },
    {
      icon: Brain,
      title: "Enterprise AI Agents",
      description: "Intelligent, purpose-driven AI agents designed to revolutionize business operations with quantifiable efficiency gains.",
      features: ["Enterprise Solutions", "Complex Automation", "Scalable Architecture"],
      badge: "Enterprise",
      gradient: "from-indigo-500/20 to-purple-500/20",
      hoverGradient: "from-indigo-500/30 to-purple-500/30",
      size: "medium",
      background: <GridPattern 
        width={30} 
        height={30} 
        x={-1} 
        y={-1} 
        className={cn("text-indigo-400/40 stroke-indigo-400/40 fill-indigo-400/20 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]")} 
        squares={[[2, 2], [5, 1], [8, 3], [3, 6], [7, 5], [1, 4], [6, 2], [4, 7]]} 
      />
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
            <span className="text-sm text-gray-300">What ThinkByte Offers</span>
          </div>
          
          <TextAnimate
            animation="blurInUp"
            by="word"
            delay={0.2}
            duration={1.5}
            once={true}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight"
            as="h2"
          >
            Strategic Pathways to AI-Driven Success
          </TextAnimate>
          
          <TextAnimate
            animation="fadeIn"
            by="word"
            delay={0.5}
            duration={1.2}
            once={true}
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4"
            as="p"
          >
            ThinkByte integrates strategic acumen, deep industry knowledge, and advanced AI technology to drive data-driven success and scale tangible value for your organization.
          </TextAnimate>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                "group relative overflow-hidden rounded-2xl border bg-black/40 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-500 animate-fade-in-up p-6 cursor-pointer",
                service.size === "large" ? "lg:col-span-2 lg:row-span-2 min-h-[400px]" : "min-h-[280px]",
                index < 2 ? "md:col-span-2 lg:col-span-2" : ""
              )}
              style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
            >
              {service.background && (
                <div className="absolute inset-0 -z-10">
                  {service.background}
                </div>
              )}
              
              {/* Hover gradient overlay */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-5",
                service.hoverGradient
              )} />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-current/20 transition-all duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs bg-white/10 text-white border-white/20 hover:bg-white/20">
                    {service.badge}
                  </Badge>
                </div>
                
                <h3 className={cn(
                  "font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300",
                  service.size === "large" ? "text-2xl" : "text-xl"
                )}>
                  {service.title}
                </h3>
                
                <p className={cn(
                  "text-gray-400 leading-relaxed mb-6 flex-grow",
                  service.size === "large" ? "text-base" : "text-sm"
                )}>
                  {service.description}
                </p>

                <ul className={cn(
                  "space-y-3",
                  service.size === "large" ? "grid grid-cols-2 gap-3 space-y-0" : ""
                )}>
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0 group-hover:bg-purple-400 transition-colors duration-300"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <TextAnimate
            animation="slideUp"
            delay={1}
            duration={0.8}
            once={true}
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
            as="p"
          >
            Ready to transform your business with purpose-built AI solutions?
          </TextAnimate>
          
          <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl px-10 py-5 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
            <Rocket className="w-6 h-6 mr-3 inline group-hover:rotate-12 transition-transform duration-300" />
            Start Your AI Transformation
            <ArrowRight className="w-6 h-6 ml-3 inline group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;