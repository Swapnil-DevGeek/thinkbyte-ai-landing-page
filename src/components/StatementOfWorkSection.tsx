import { TextAnimate } from "@/components/ui/text-animate";
import { Sparkles } from "lucide-react";

const StatementOfWorkSection = () => {
  return (
    <section className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl transform -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl transform -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          {/* Main Headline */}
          <div className="space-y-6">
            <TextAnimate
              animation="blurInUp"
              by="word"
              delay={0.1}
              duration={1.2}
              once={true}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight"
              as="h2"
            >
              We empower clients with Generative AI models and agents that drive impactful growth and enhance ROI.
            </TextAnimate>
          </div>

          {/* Divider with sparkle */}
          <div className="flex items-center justify-center space-x-4 py-8">
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1 max-w-32" />
            <div className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              <Sparkles className="w-4 h-4 text-blue-400" />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1 max-w-32" />
          </div>

          {/* Supporting Content */}
          <div className="space-y-8 max-w-5xl mx-auto">
            <TextAnimate
              animation="fadeIn"
              by="word"
              delay={0.3}
              duration={1}
              once={true}
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              as="p"
            >
              We assist data-driven companies in enhancing operational efficiency, reducing costs, and creating new revenue streams through the implementation of Generative AI solutions.
            </TextAnimate>

            <TextAnimate
              animation="fadeIn"
              by="word"
              delay={0.5}
              duration={1}
              once={true}
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              as="p"
            >
              Our AI experts can develop AI solutions from pilot to production within weeks, not years. Our development approach merges clear strategies, deep industry knowledge, and technical expertise to accelerate progress.
            </TextAnimate>
          </div>

          {/* Bottom accent */}
          <div className="pt-8">
            <TextAnimate
              animation="slideUp"
              delay={0.7}
              duration={0.8}
              once={true}
              className="text-base md:text-lg font-medium text-blue-400 tracking-wide"
              as="p"
            >
              Build only what you need. From lightweight agents to orchestrated platforms — we deliver intelligent solutions built for ROI.
            </TextAnimate>
          </div>

          {/* Tagline */}
          <div className="pt-4">
            <TextAnimate
              animation="fadeIn"
              delay={0.9}
              duration={0.8}
              once={true}
              className="text-sm md:text-base text-gray-400 italic"
              as="p"
            >
              ThinkByte.ai combines precision AI with human ingenuity to drive meaningful business growth.
            </TextAnimate>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatementOfWorkSection;