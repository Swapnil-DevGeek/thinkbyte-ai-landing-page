import React from "react";
import { CheckCircle, X, Zap, Shield, TrendingUp, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

const VisualGridComparison = () => {
  const comparisonFeatures = [
    {
      feature: "Tool-Specific Integration",
      thinkbyte: {
        value: "Native, seamless, industry-tailored",
        icon: CheckCircle,
        status: "excellent"
      },
      rpaTools: {
        value: "Limited",
        status: "poor"
      },
      browserBots: {
        value: "Generic",
        status: "poor"
      },
      internalCopilots: {
        value: "Basic",
        status: "poor"
      }
    },
    {
      feature: "Scalability",
      thinkbyte: {
        value: "Enterprise-grade, cross-org orchestration",
        icon: TrendingUp,
        status: "excellent"
      },
      rpaTools: {
        value: "Moderate",
        status: "medium"
      },
      browserBots: {
        value: "Low",
        status: "poor"
      },
      internalCopilots: {
        value: "Limited",
        status: "poor"
      }
    },
    {
      feature: "Security & Compliance",
      thinkbyte: {
        value: "Ironclad, end-to-end encryption",
        icon: Shield,
        status: "excellent"
      },
      rpaTools: {
        value: "Variable",
        status: "medium"
      },
      browserBots: {
        value: "Minimal",
        status: "poor"
      },
      internalCopilots: {
        value: "Inconsistent",
        status: "poor"
      }
    },
    {
      feature: "ROI Impact",
      thinkbyte: {
        value: "Exponential, measurable growth",
        icon: Award,
        status: "excellent"
      },
      rpaTools: {
        value: "Incremental",
        status: "medium"
      },
      browserBots: {
        value: "Marginal",
        status: "poor"
      },
      internalCopilots: {
        value: "Variable",
        status: "medium"
      }
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "excellent": return CheckCircle;
      case "medium": return Zap;
      case "poor": return X;
      default: return X;
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
      <GridPattern 
        width={32}
        height={32}
        className="absolute inset-0 text-blue-500/10 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]" 
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">Why Leaders Choose ThinkByte</span>
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
            Visual Grid Comparison
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
            See how ThinkByte's comprehensive AI solutions outperform traditional alternatives across all critical metrics.
          </TextAnimate>
        </div>

        {/* Comparison Grid */}
        <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-12">
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            <div className="md:col-span-1">
              <h3 className="text-xl font-semibold text-white mb-2">Feature</h3>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-4 border border-blue-500/30">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                ThinkByte
              </h3>
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                Leader
              </Badge>
            </div>
            <div className="bg-gray-800/40 rounded-2xl p-4 border border-gray-700/40">
              <h3 className="text-lg font-semibold text-gray-300 mb-2">RPA Tools</h3>
            </div>
            <div className="bg-gray-800/40 rounded-2xl p-4 border border-gray-700/40">
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Browser Bots</h3>
            </div>
            <div className="bg-gray-800/40 rounded-2xl p-4 border border-gray-700/40">
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Internal Copilots</h3>
            </div>
          </div>

          {/* Feature Rows */}
          {comparisonFeatures.map((feature, index) => (
            <div key={feature.feature} className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6 last:mb-0">
              <div className="md:col-span-1 flex items-center">
                <h4 className="text-lg font-medium text-white">{feature.feature}</h4>
              </div>
              
              {/* ThinkByte Column */}
              <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl p-4 border border-green-500/20">
                <div className="flex items-start space-x-3">
                  {feature.thinkbyte.icon && (
                    <feature.thinkbyte.icon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  )}
                  <span className="text-green-300 font-medium text-sm leading-relaxed">
                    {feature.thinkbyte.value}
                  </span>
                </div>
              </div>

              {/* Competitor Columns */}
              <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/30">
                <div className="flex items-start space-x-3">
                  {(() => {
                    const StatusIcon = getStatusIcon(feature.rpaTools.status);
                    return <StatusIcon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${feature.rpaTools.status === 'excellent' ? 'text-green-400' : feature.rpaTools.status === 'medium' ? 'text-yellow-400' : 'text-red-400'}`} />;
                  })()}
                  <span className="text-gray-300 text-sm leading-relaxed">
                    {feature.rpaTools.value}
                  </span>
                </div>
              </div>

              <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/30">
                <div className="flex items-start space-x-3">
                  {(() => {
                    const StatusIcon = getStatusIcon(feature.browserBots.status);
                    return <StatusIcon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${feature.browserBots.status === 'excellent' ? 'text-green-400' : feature.browserBots.status === 'medium' ? 'text-yellow-400' : 'text-red-400'}`} />;
                  })()}
                  <span className="text-gray-300 text-sm leading-relaxed">
                    {feature.browserBots.value}
                  </span>
                </div>
              </div>

              <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/30">
                <div className="flex items-start space-x-3">
                  {(() => {
                    const StatusIcon = getStatusIcon(feature.internalCopilots.status);
                    return <StatusIcon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${feature.internalCopilots.status === 'excellent' ? 'text-green-400' : feature.internalCopilots.status === 'medium' ? 'text-yellow-400' : 'text-red-400'}`} />;
                  })()}
                  <span className="text-gray-300 text-sm leading-relaxed">
                    {feature.internalCopilots.value}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <TextAnimate
            animation="slideUp"
            delay={0.8}
            duration={0.8}
            once={true}
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
            as="p"
          >
            Ready to experience the ThinkByte advantage and drive exponential growth for your organization?
          </TextAnimate>
          
          <Button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl px-10 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
            <Award className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
            See Why Leaders Choose ThinkByte
            <Zap className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VisualGridComparison;