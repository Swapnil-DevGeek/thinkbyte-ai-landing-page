import { Sparkles, ArrowRight, Clock, TrendingUp, Zap } from "lucide-react";
import { TextAnimate } from "@/components/ui/text-animate";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const ProcessSection = () => {
  const processSteps = [
    {
      step: "01",
      title: "Contact Us to Begin",
      description: "Start optimizing your efficiency and significantly reducing operational costs with Purposeful AI in just a few weeks, not years.",
      gradient: "from-blue-500/20 to-cyan-500/20",
      icon: Sparkles,
    },
    {
      step: "02", 
      title: "AI Assessment",
      description: "We analyze your current processes and identify high-impact automation opportunities tailored to your business needs.",
      gradient: "from-purple-500/20 to-pink-500/20",
      icon: TrendingUp,
    },
    {
      step: "03",
      title: "Rapid Development",
      description: "Our expert team builds and deploys your custom AI solutions with measurable ROI delivered in weeks, not months.",
      gradient: "from-green-500/20 to-emerald-500/20", 
      icon: Zap,
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
            <Clock className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">Our Process</span>
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
            Your Path to Tangible AI Results
          </TextAnimate>
          
          <TextAnimate
            animation="fadeIn"
            by="word"
            delay={0.5}
            duration={1.2}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
            as="p"
            once={true}
          >
            Start optimizing your efficiency and significantly reducing operational costs with Purposeful AI in just a few weeks, not years.
          </TextAnimate>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <div
              key={step.step}
              className="group text-center bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {step.step}
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {step.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <TextAnimate
            animation="slideUp"
            delay={1}
            duration={0.8}
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
            as="p"
            once={true}
          >
            Ready to start your AI transformation journey? Contact us today and see results in weeks.
          </TextAnimate>
          
          <div className="flex justify-center items-center">
            <ShimmerButton 
              className="group text-lg px-10 py-5 font-semibold"
              shimmerColor="#3b82f6"
              background="linear-gradient(135deg, #3b82f6, #8b5cf6)"
            >
              <Sparkles className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              Contact Us to Begin Your AI Transformation
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </ShimmerButton>
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default ProcessSection;