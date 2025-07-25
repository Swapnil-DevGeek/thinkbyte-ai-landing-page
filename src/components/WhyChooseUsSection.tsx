import { Users, Target, Zap, HandHeart, Sparkles, CheckCircle, Award, TrendingUp, Shield } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { TextAnimate } from "@/components/ui/text-animate";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Award,
      title: "Unmatched AI Specialization",
      description: "Our team of certified AI engineers and data scientists brings deep expertise in Generative AI, machine learning, and MLOps, crafting solutions that drive transformative results tailored to your business.",
      gradient: "from-blue-500/20 to-cyan-500/20",
      hoverGradient: "from-blue-500/30 via-cyan-500/20 to-transparent",
      cornerBg: "from-blue-500/10 to-transparent",
      hoverTitleColor: "group-hover:text-cyan-400",
      hoverDotColor: "group-hover:bg-cyan-400",
      stats: "75+ AI Experts",
      benefits: ["Certified AI Engineers", "Deep ML Expertise", "Generative AI Specialists", "MLOps Professionals"]
    },
    {
      icon: Target,
      title: "Results-Driven Precision",
      description: "We focus on delivering measurable outcomes—fast. From boosting revenue to slashing operational costs, our AI strategies are designed to align with your goals and deliver impact in weeks.",
      gradient: "from-purple-500/20 to-pink-500/20",
      hoverGradient: "from-purple-500/30 via-pink-500/20 to-transparent",
      cornerBg: "from-purple-500/10 to-transparent",
      hoverTitleColor: "group-hover:text-pink-400",
      hoverDotColor: "group-hover:bg-pink-400",
      stats: "95% Success Rate",
      benefits: ["Revenue Growth", "Cost Reduction", "Goal Alignment", "Fast Implementation"]
    },
    {
      icon: Zap,
      title: "Cutting-Edge Innovation",
      description: "ThinkByte leverages the latest advancements in AI to keep you ahead of the curve. Our solutions harness Generative AI, predictive analytics, and intelligent automation to fuel your competitive advantage.",
      gradient: "from-orange-500/20 to-red-500/20",
      hoverGradient: "from-orange-500/30 via-red-500/20 to-transparent",
      cornerBg: "from-orange-500/10 to-transparent",
      hoverTitleColor: "group-hover:text-orange-400",
      hoverDotColor: "group-hover:bg-orange-400",
      stats: "Latest AI Tech",
      benefits: ["Generative AI", "Predictive Analytics", "Intelligent Automation", "Competitive Edge"]
    },
    {
      icon: HandHeart,
      title: "Trusted Strategic Partnership",
      description: "We're more than a vendor—we're your partner in success. From strategy to optimization, we provide end-to-end support to ensure your AI investments yield maximum value.",
      gradient: "from-green-500/20 to-emerald-500/20",
      hoverGradient: "from-green-500/30 via-emerald-500/20 to-transparent",
      cornerBg: "from-green-500/10 to-transparent",
      hoverTitleColor: "group-hover:text-emerald-400",
      hoverDotColor: "group-hover:bg-emerald-400",
      stats: "End-to-End Support",
      benefits: ["Strategic Partnership", "Full Support", "Maximum ROI", "Long-term Success"]
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-blue-500/5 to-cyan-500/5" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span className="text-sm text-gray-300">Why Partner with ThinkByte?</span>
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
            Your Catalyst for AI-Driven Transformation
          </TextAnimate>
          
          <TextAnimate
            animation="fadeIn"
            by="word"
            delay={0.5}
            duration={1.2}
            once={true}
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            as="p"
          >
            ThinkByte.ai empowers data-driven businesses with precision AI solutions that deliver measurable ROI and sustainable growth. Partner with us to unlock innovation, streamline operations, and lead your industry with confidence.
          </TextAnimate>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <MagicCard
              key={feature.title}
              className="group relative overflow-hidden bg-black/40 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-500 animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Subtle corner background */}
              <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${feature.cornerBg} rounded-tl-full opacity-40`} />
              <div className={`absolute top-0 left-0 w-20 h-20 bg-gradient-to-br ${feature.cornerBg} rounded-br-full opacity-20`} />
              
              {/* Corner-emerging hover gradient */}
              <div className={`absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl ${feature.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-current/20 transition-all duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className={`text-xl font-semibold text-white ${feature.hoverTitleColor} transition-colors duration-300`}>
                        {feature.title}
                      </h3>
                      <span className="text-sm font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                        {feature.stats}
                      </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6">{feature.description}</p>
                  </div>
                </div>
                
                {/* Benefits List */}
                <div className="pl-22">
                  <div className="grid grid-cols-2 gap-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefit} className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 bg-blue-400 ${feature.hoverDotColor} rounded-full flex-shrink-0 transition-colors duration-300`}></div>
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;