import { NumberTicker } from "@/components/ui/number-ticker";
import { TextAnimate } from "@/components/ui/text-animate";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Zap, Users, Building, TrendingUp, Award, ArrowRight, Sparkles } from "lucide-react";

const ImpactMetricsSection = () => {
  const metrics = [
    {
      icon: Zap,
      number: 50,
      suffix: "+",
      title: "High-Impact AI Solutions Deployed",
      description: "We've empowered businesses across industries with over 100 tailored AI solutions, driving measurable growth and efficiency with precision.",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Users,
      number: 10,
      suffix: "+",
      title: "AI Innovators on Board",
      description: "Our team of AI engineers, data scientists, and strategists brings cutting-edge expertise to every project.",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Building,
      number: 10,
      suffix: "+",
      title: "Industries Transformed",
      description: "From healthcare to retail, we've delivered transformative AI solutions across 10+ industries, unlocking new revenue streams and operational excellence - industry agnostic",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: TrendingUp,
      number: 95,
      suffix: "%+",
      title: "Client Success Rate",
      description: "Our AI strategies have achieved a 95%+ success rate in delivering measurable ROI, from cost reduction to revenue growth, in weeks.",
      gradient: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300">Our Impact</span>
          </div>
          
          <TextAnimate
            animation="blurInUp"
            by="word"
            delay={0.2}
            duration={1.5}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight"
            as="h2"
            once={true}
          >
            Driving Digital Transformation Since 2023
          </TextAnimate>
          
          <TextAnimate
            animation="fadeIn"
            by="word"
            delay={0.5}
            duration={1.2}
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
            as="p"
            once={true}
          >
            We combine strategic insight, advanced AI technology, and a steadfast commitment to delivering measurable results to drive transformative outcomes for your business. Discover why leading organizations choose ThinkByte for their next-generation digital transformation.
          </TextAnimate>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={metric.title}
              className="group text-center bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${metric.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-center text-4xl md:text-5xl font-bold text-white mb-2">
                  <NumberTicker
                    value={metric.number}
                    className="text-4xl md:text-5xl font-bold text-white"
                    delay={0.5 + index * 0.1}
                  />
                  <span className="text-blue-400">{metric.suffix}</span>
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 mb-3">
                  {metric.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <TextAnimate
            animation="slideUp"
            delay={1.2}
            duration={0.8}
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
            as="p"
            once={true}
          >
            Accelerate your business's AI initiatives with ThinkByte. Secure a Proof of Concept (POC) that demonstrates real value, often within weeks.
          </TextAnimate>
          
          <div className="flex justify-center items-center">
            <ShimmerButton 
              className="group text-lg py-5 font-semibold"
              shimmerColor="#3b82f6"
              background="linear-gradient(135deg, #3b82f6, #8b5cf6)"
            >
              <Sparkles className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              Secure Your AI POC Today
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </ShimmerButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetricsSection;