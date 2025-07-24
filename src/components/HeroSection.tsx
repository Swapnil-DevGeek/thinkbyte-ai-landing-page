import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe 
          src='https://my.spline.design/claritystream-a72K0KUwFoZV82QBzvu52Kai/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="absolute inset-0"
        />
      </div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="container mx-auto px-6 py-32 pt-40 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[-0.02em] leading-[0.9] mb-8 animate-fade-in-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 font-medium">
              AI automation
            </span>
            <span className="block mt-3 text-white font-light">
              that shapes the future
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-3xl mx-auto font-light tracking-[-0.01em] leading-relaxed animate-fade-in-up animate-delay-200">
            We craft intelligent AI agents that transform businesses and elevate operations to new heights of efficiency.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in-up animate-delay-300">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-2xl px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 border-0"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              View our work
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group bg-transparent border-2 border-purple-500/30 text-white rounded-2xl px-8 py-4 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Our process
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent mb-12"></div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { title: "AI Consulting", description: "Strategic AI roadmaps" },
              { title: "Agent Development", description: "Custom AI automation" },
              { title: "Process Optimization", description: "Workflow streamlining" },
              { title: "Integration Services", description: "Seamless AI adoption" }
            ].map((service) => (
              <div key={service.title} className="text-left">
                <h3 className="text-2xl font-light mb-2 tracking-tight text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 font-extralight text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;