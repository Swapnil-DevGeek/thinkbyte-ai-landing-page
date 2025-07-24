import { Users, Wrench, Rocket, TrendingUp, Sparkles, CheckCircle } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Users,
      title: "Expert AI Team",
      description: "Certified AI engineers and strategists with proven track record in delivering successful AI implementations across industries.",
      gradient: "from-blue-500/20 to-cyan-500/20",
      stats: "50+ AI Projects"
    },
    {
      icon: Wrench,
      title: "Tailored Solutions",
      description: "Bespoke AI solutions designed and aligned with your specific business goals, industry requirements, and technical constraints.",
      gradient: "from-purple-500/20 to-pink-500/20",
      stats: "100% Custom Built"
    },
    {
      icon: Rocket,
      title: "Rapid Implementation",
      description: "AI solutions from pilot to production in weeks, not years. Agile development approach with iterative improvements.",
      gradient: "from-orange-500/20 to-red-500/20",
      stats: "2-4 Week Delivery"
    },
    {
      icon: TrendingUp,
      title: "Measurable ROI",
      description: "Data-driven results with clear metrics, performance tracking, and continuous optimization for maximum business impact.",
      gradient: "from-green-500/20 to-emerald-500/20",
      stats: "300% Avg ROI"
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
            <span className="text-sm text-gray-300">Why Choose Us</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-white tracking-tight">
            Building AI solutions for
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 font-medium mt-2">
              modern businesses
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We blend strategic insight, advanced AI technology, and proven results to drive transformative outcomes
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <MagicCard
              key={feature.title}
              className="group bg-black/40 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <span className="text-sm font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                      {feature.stats}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
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