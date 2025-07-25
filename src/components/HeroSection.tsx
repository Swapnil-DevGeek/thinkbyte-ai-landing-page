import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TextAnimate } from "@/components/ui/text-animate";
import { NumberTicker } from "@/components/ui/number-ticker";
import { ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";

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
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto px-6 py-32 pt-40 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.02em] leading-[1.1] mb-8">
            <TextAnimate
              animation="blurInUp"
              by="word"
              delay={0}
              duration={1.2}
              once={true}
              className="gradient-text font-bold block mb-4"
              as="span"
              style={{ lineHeight: '1.2', padding: '4px 0' }}
            >
              Reimagining Digital Transformation with Generative AI,
            </TextAnimate>
            <TextAnimate
              animation="slideUp"
              by="word"
              delay={0.5}
              duration={1}
              once={true}
              className="text-white/90 font-light text-3xl md:text-5xl lg:text-6xl block"
              as="span"
            >
              Byte by Byte.
            </TextAnimate>
          </h1>

          {/* Subheadline */}
          <TextAnimate
            animation="fadeIn"
            by="word"
            delay={1}
            duration={1.5}
            once={true}
            className="text-gray-300 text-lg md:text-xl mb-4 max-w-4xl mx-auto font-light leading-relaxed"
            as="p"
          >
            Build only what you need. From lightweight agents to orchestrated platforms — we deliver intelligent solutions built for ROI.
          </TextAnimate>

          {/* Value Proposition */}
          <TextAnimate
            animation="fadeIn"
            by="word"
            delay={1.5}
            duration={1.2}
            once={true}
            className="text-blue-300 text-base md:text-lg mb-12 max-w-3xl mx-auto font-medium"
            as="p"
          >
            ThinkByte.ai combines precision AI with human ingenuity to drive meaningful business growth.
          </TextAnimate>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 w-full max-w-2xl mx-auto">
            <ShimmerButton 
              className="group text-lg px-8 py-4 font-semibold w-full sm:w-auto justify-center"
              shimmerColor="#3b82f6"
              background="linear-gradient(135deg, #3b82f6, #8b5cf6)"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Let's Ignite Your Growth
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </ShimmerButton>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group bg-transparent border-2 border-cyan-500/40 text-cyan-300 rounded-2xl px-8 py-4 hover:bg-cyan-500/10 hover:border-cyan-300 transition-all duration-300 hover:scale-105 backdrop-blur-sm text-lg font-medium w-full sm:w-auto justify-center"
            >
              <TrendingUp className="w-5 h-5 mr-2 group-hover:rotate-6 transition-transform duration-300" />
              View Our Impact
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 mb-8">
            {[
              { number: 250, suffix: "+", label: "AI Solutions Deployed", icon: Zap },
              { number: 75, suffix: "+", label: "AI & Data Experts", icon: TrendingUp },
              { number: 10, suffix: "+", label: "Years Experience", icon: Sparkles },
              { number: 95, suffix: "%+", label: "Client Success Rate", icon: ArrowRight }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="mb-3 flex justify-center">
                  <stat.icon className="w-8 h-8 text-blue-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <NumberTicker
                    value={stat.number}
                    delay={2 + index * 0.1}
                    className="text-white"
                  />
                  <span>{stat.suffix}</span>
                </div>
                <p className="text-gray-400 text-sm font-medium tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/20 via-purple-500/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;