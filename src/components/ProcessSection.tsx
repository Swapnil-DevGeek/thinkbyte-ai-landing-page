import { Search, Target, Code, Rocket, Settings, CheckCircle, Brain, Zap, TrendingUp } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const ProcessSection = () => {
  const timelineData = [
    {
      title: "Discovery",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
              <Search className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Discovery & Analysis</h3>
              <p className="text-gray-400">Understanding your business needs and current processes</p>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            {[
              "Comprehensive process mapping and workflow analysis",
              "Technology audit and infrastructure assessment",
              "Goal definition and success metrics alignment",
              "ROI projections and business case development"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-4">
              <Brain className="w-8 h-8 text-blue-400 mb-3" />
              <h4 className="text-white font-medium mb-2">Process Intelligence</h4>
              <p className="text-gray-400 text-sm">Advanced analytics to identify automation opportunities</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-4">
              <TrendingUp className="w-8 h-8 text-purple-400 mb-3" />
              <h4 className="text-white font-medium mb-2">ROI Forecasting</h4>
              <p className="text-gray-400 text-sm">Detailed projections of efficiency gains and cost savings</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Strategy",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Strategy & Architecture</h3>
              <p className="text-gray-400">Designing your AI transformation roadmap</p>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            {[
              "Custom AI strategy aligned with business objectives",
              "Technical architecture and system design",
              "Implementation roadmap with clear milestones",
              "Risk assessment and mitigation strategies"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 border border-purple-500/20 rounded-lg p-6">
            <h4 className="text-white font-medium mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              Strategic Blueprint
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Our comprehensive strategy document serves as your AI transformation blueprint,
              ensuring every step is purposeful and measurable.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-black/30 rounded-lg p-3">
                <div className="text-cyan-400 font-bold text-lg">90%</div>
                <div className="text-gray-400 text-xs">Success Rate</div>
              </div>
              <div className="bg-black/30 rounded-lg p-3">
                <div className="text-green-400 font-bold text-lg">6-12</div>
                <div className="text-gray-400 text-xs">Weeks Timeline</div>
              </div>
              <div className="bg-black/30 rounded-lg p-3">
                <div className="text-purple-400 font-bold text-lg">300%</div>
                <div className="text-gray-400 text-xs">Avg ROI</div>
              </div>
              <div className="bg-black/30 rounded-lg p-3">
                <div className="text-blue-400 font-bold text-lg">24/7</div>
                <div className="text-gray-400 text-xs">Support</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Development",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center">
              <Code className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Development & Testing</h3>
              <p className="text-gray-400">Building and perfecting your AI solutions</p>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            {[
              "Custom AI agent development with cutting-edge technologies",
              "Rigorous testing across multiple environments",
              "Performance optimization and fine-tuning",
              "Quality assurance and security validation"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Uptime Guarantee</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm">Test Scenarios</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">10x</div>
              <div className="text-gray-300 text-sm">Faster Processing</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Deployment",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center">
              <Rocket className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Deployment & Training</h3>
              <p className="text-gray-400">Seamless launch with comprehensive support</p>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            {[
              "Phased deployment with minimal business disruption",
              "Comprehensive team training and documentation",
              "Real-time monitoring and performance tracking",
              "Immediate support and troubleshooting"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-6">
            <h4 className="text-white font-medium mb-4">Deployment Timeline</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">Week 1: Environment setup and configuration</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">Week 2: Pilot deployment and testing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">Week 3: Full deployment and team training</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">Week 4: Optimization and go-live</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Optimization",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
              <Settings className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Optimization & Support</h3>
              <p className="text-gray-400">Continuous improvement and ongoing success</p>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            {[
              "24/7 monitoring and performance optimization",
              "Regular updates and feature enhancements",
              "Proactive maintenance and security updates",
              "Strategic consultation for scaling opportunities"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-6">
            <h4 className="text-white font-medium mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              Continuous Value Delivery
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Our partnership doesn't end at deployment. We ensure your AI solutions continue to evolve
              and deliver increasing value as your business grows.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-cyan-400 font-bold text-lg mb-1">Monthly</div>
                <div className="text-gray-400 text-sm">Performance Reviews</div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-blue-400 font-bold text-lg mb-1">Quarterly</div>
                <div className="text-gray-400 text-sm">Strategy Updates</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];


  const radialTimelineData = [
    {
      id: 1,
      title: "Discovery",
      date: "Jan 2024",
      content: "Project planning and requirements gathering phase.",
      category: "Planning",
      icon: Search,
      relatedIds: [2],
      status: "completed" as const,
      energy: 100,
    },
    {
      id: 2,
      title: "Strategy",
      date: "Feb 2024",
      content: "UI/UX design and system architecture.",
      category: "Design",
      icon: Target,
      relatedIds: [1, 3],
      status: "completed" as const,
      energy: 90,
    },
    {
      id: 3,
      title: "Development",
      date: "Mar 2024",
      content: "Core features implementation and testing.",
      category: "Development",
      icon: Code,
      relatedIds: [2, 4],
      status: "in-progress" as const,
      energy: 60,
    },
    {
      id: 4,
      title: "Deployment",
      date: "Apr 2024",
      content: "User testing and bug fixes.",
      category: "Testing",
      icon: Rocket,
      relatedIds: [3, 5],
      status: "pending" as const,
      energy: 30,
    },
    {
      id: 5,
      title: "Optimization",
      date: "May 2024",
      content: "Final deployment and release.",
      category: "Release",
      icon: Settings,
      relatedIds: [4],
      status: "pending" as const,
      energy: 10,
    },
  ];

  return (
    <div className="bg-black -mb-12">
      <div className="w-full bg-black font-sans flex flex-col lg:flex-row items-start justify-between">
        <div className="flex-1 max-w-2xl mb-12 lg:mb-0 pt-20">
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex lg:ml-20 items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse" />
              <span className="text-sm text-blue-300 font-medium">Proven Process</span>
            </div>

            {/* Main heading */}
            <h2 className="text-4xl lg:ml-20 max-w-4xl bg-gradient-to-br from-white via-neutral-200 to-neutral-400 bg-clip-text md:text-5xl lg:text-6xl font-bold  text-transparent leading-tight">
              Our Proven AI Implementation Process
            </h2>

            {/* Subtitle */}
            <p className="text-lg text-neutral-300 leading-relaxed max-w-xl lg:ml-20">
              From discovery to optimization, we follow a systematic approach to
              <span className="text-blue-400 font-medium"> deliver exceptional</span> AI solutions.
            </p>

            {/* Stats or features */}
            <div className="flex flex-wrap gap-12 pt-4 justify-center items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">5</span>
                </div>
                <span className="text-neutral-400">Proven Steps</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">∞</span>
                </div>
                <span className="text-neutral-400">Continuous Support</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:h-screen">
          <RadialOrbitalTimeline timelineData={radialTimelineData} />
        </div>
      </div>

      <div className="relative w-[100vw] -top-60">
        <Timeline data={timelineData} />
      </div>
    </div>
  );
};
 
export default ProcessSection;