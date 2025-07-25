// "use client";
// import {
//   useMotionValueEvent,
//   useScroll,
//   useTransform,
//   motion,
// } from "motion/react";
// import React, { useEffect, useRef, useState } from "react";

// interface TimelineEntry {
//   title: string;
//   content: React.ReactNode;
// }

// export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [height, setHeight] = useState(0);
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     if (ref.current) {
//       const rect = ref.current.getBoundingClientRect();
//       setHeight(rect.height);
//     }
//   }, [ref]);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 10%", "end 50%"],
//   });

//   const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
//   const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

//   // Track which step is currently in view
//   useMotionValueEvent(scrollYProgress, "change", (latest) => {
//     const stepProgress = latest * data.length;
//     const currentStep = Math.floor(stepProgress);
//     setActiveIndex(Math.min(currentStep, data.length - 1));
//   });

//   return (
//     <div
//       className="w-full bg-black font-sans overflow-x-hidden timeline-container"
//       ref={containerRef}
//     >
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.6, 0.3],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         <motion.div
//           className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
//           animate={{
//             scale: [1.2, 1, 1.2],
//             opacity: [0.6, 0.3, 0.6],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 4,
//           }}
//         />
//       </div>

//       <div ref={ref} className="relative max-w-7xl mx-auto px-4 pb-20">
//         {data.map((item, index) => {
//           const isActive = index === activeIndex;
//           const isPassed = index < activeIndex;
          
//           return (
//             <motion.div
//               key={index}
//               className="relative overflow-visible"
//               style={{ minHeight: '600px' }}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true, margin: "-100px" }}
//             >
              
//               {/* Content wrapper */}
//               <div className="flex gap-32">
//                 {/* Sticky title section with enhanced active state */}
//                 <motion.div 
//                   className="w-96 flex-shrink-0"
//                   style={{
//                     position: 'sticky',
//                     top: '100px',
//                     alignSelf: 'flex-start',
//                     zIndex: 30,
//                     height: 'fit-content'
//                   }}
//                   animate={{
//                     scale: isActive ? 1.02 : 1,
//                   }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {/* Title card with enhanced active/inactive states */}
//                   <div className="relative group">
//                     {/* Dynamic background glow - always visible when active */}
//                     <motion.div
//                       className={`absolute -inset-2 rounded-3xl blur-xl transition-all duration-700 ${
//                         isActive 
//                           ? 'bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30' 
//                           : isPassed
//                           ? 'bg-gradient-to-r from-green-500/20 to-blue-500/20'
//                           : 'bg-gradient-to-r from-neutral-600/10 to-neutral-500/10'
//                       }`}
//                       animate={{
//                         opacity: isActive ? 1 : isPassed ? 0.6 : 0.3,
//                         scale: isActive ? 1 : 0.95,
//                       }}
//                       transition={{ duration: 0.5 }}
//                     />
                    
//                     {/* Main card */}
//                     <motion.div
//                       className={`relative backdrop-blur-xl rounded-2xl p-6 border shadow-2xl transition-all duration-500 ${
//                         isActive
//                           ? 'bg-neutral-900/80 border-blue-500/50 shadow-blue-500/20'
//                           : isPassed
//                           ? 'bg-neutral-900/60 border-green-500/30 shadow-green-500/10'
//                           : 'bg-neutral-900/40 border-neutral-800/50 shadow-neutral-900/20'
//                       }`}
//                       animate={{
//                         y: isActive ? -4 : 0,
//                       }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       {/* Step indicator with enhanced states */}
//                       <div className="flex items-center gap-3 mb-4">
//                         <motion.div
//                           className={`h-8 w-1 rounded-full transition-all duration-500 ${
//                             isActive
//                               ? 'bg-gradient-to-b from-blue-400 to-purple-500'
//                               : isPassed
//                               ? 'bg-gradient-to-b from-green-400 to-blue-400'
//                               : 'bg-gradient-to-b from-neutral-600 to-neutral-700'
//                           }`}
//                           animate={{
//                             scaleY: isActive ? 1.2 : 1,
//                             opacity: isActive ? 1 : isPassed ? 0.8 : 0.5,
//                           }}
//                           transition={{ duration: 0.3 }}
//                         />
                        
//                         {/* Step number with pulse animation when active */}
//                         <div className="flex items-center gap-2">
//                           <motion.div
//                             className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
//                               isActive
//                                 ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg'
//                                 : isPassed
//                                 ? 'bg-gradient-to-br from-green-500 to-blue-500 text-white'
//                                 : 'bg-neutral-800 text-neutral-400'
//                             }`}
//                             animate={{
//                               scale: isActive ? [1, 1.1, 1] : 1,
//                             }}
//                             transition={{
//                               duration: 2,
//                               repeat: isActive ? Infinity : 0,
//                               ease: "easeInOut",
//                             }}
//                           >
//                             {isPassed ? "✓" : index + 1}
//                           </motion.div>
                          
//                           <span className={`text-sm font-medium uppercase tracking-wider transition-all duration-500 ${
//                             isActive
//                               ? 'text-blue-300'
//                               : isPassed
//                               ? 'text-green-300'
//                               : 'text-neutral-500'
//                           }`}>
//                             Step {index + 1}
//                           </span>
//                         </div>
//                       </div>
                      
//                       {/* Title with enhanced gradient and animation */}
//                       <motion.h3
//                         className="text-3xl lg:text-4xl font-bold leading-tight"
//                         animate={{
//                           scale: isActive ? 1.02 : 1,
//                         }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <span className={`bg-clip-text text-transparent transition-all duration-700 ${
//                           isActive
//                             ? 'bg-gradient-to-br from-white via-blue-100 to-purple-200'
//                             : isPassed
//                             ? 'bg-gradient-to-br from-white via-green-100 to-blue-200'
//                             : 'bg-gradient-to-br from-neutral-300 via-neutral-400 to-neutral-500'
//                         }`}>
//                           {item.title}
//                         </span>
//                       </motion.h3>
                      
//                       {/* Static subtitle based on step content */}
//                       <motion.p
//                         className={`mt-3 text-sm leading-relaxed transition-all duration-500 ${
//                           isActive
//                             ? 'text-blue-300'
//                             : 'text-neutral-400'
//                         }`}
//                         animate={{
//                           opacity: isActive ? 1 : 0.7,
//                         }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         {index === 0 && "Understanding your business needs and current processes"}
//                         {index === 1 && "Designing your AI transformation roadmap"}
//                         {index === 2 && "Building and perfecting your AI solutions"}
//                         {index === 3 && "Seamless launch with comprehensive support"}
//                         {index === 4 && "Continuous improvement and ongoing success"}
//                       </motion.p>
//                     </motion.div>
//                   </div>
//                 </motion.div>

//                 {/* Content section with enhanced styling and animations */}
//                 <motion.div
//                   className="flex-1 pb-32"
//                   initial={{ opacity: 0, x: 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: 0.2 }}
//                   viewport={{ once: true }}
//                 >
//                   <div className="relative">
//                     {/* Content background card with enhanced active state */}
//                     <motion.div
//                       className={`relative backdrop-blur-sm rounded-3xl p-8 border shadow-xl transition-all duration-500 ${
//                         isActive
//                           ? 'bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 border-blue-500/30 shadow-blue-500/10'
//                           : 'bg-gradient-to-br from-neutral-900/30 to-neutral-900/10 border-neutral-800/30'
//                       }`}
//                       animate={{
//                         scale: isActive ? 1.01 : 1,
//                         y: isActive ? -2 : 0,
//                       }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       {/* Enhanced decorative gradient orbs */}
//                       <motion.div
//                         className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl transition-all duration-700 ${
//                           isActive
//                             ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'
//                             : 'bg-gradient-to-br from-blue-500/5 to-purple-500/5'
//                         }`}
//                         animate={{
//                           scale: isActive ? [1, 1.1, 1] : 1,
//                           opacity: isActive ? [0.8, 1, 0.8] : 0.3,
//                         }}
//                         transition={{
//                           duration: 3,
//                           repeat: isActive ? Infinity : 0,
//                           ease: "easeInOut",
//                         }}
//                       />
                      
//                       <motion.div
//                         className={`absolute -bottom-10 -left-10 w-32 h-32 rounded-full blur-2xl transition-all duration-700 ${
//                           isActive
//                             ? 'bg-gradient-to-tr from-purple-500/15 to-pink-500/15'
//                             : 'bg-gradient-to-tr from-purple-500/5 to-pink-500/5'
//                         }`}
//                         animate={{
//                           scale: isActive ? [1.1, 1, 1.1] : 1,
//                           opacity: isActive ? [1, 0.6, 1] : 0.2,
//                         }}
//                         transition={{
//                           duration: 4,
//                           repeat: isActive ? Infinity : 0,
//                           ease: "easeInOut",
//                           delay: 1,
//                         }}
//                       />
                      
//                       {/* Content with fade-in animation */}
//                       <motion.div
//                         className="relative z-10"
//                         animate={{
//                           opacity: isActive ? 1 : 0.8,
//                         }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         {item.content}
//                       </motion.div>
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           );
//         })}
        
//       </div>
//     </div>
//   );
// };

"use client";
import { motion, useInView } from "motion/react";
import React, { useRef, useState } from "react";
import {
  Search,
  Target,
  Code,
  Rocket,
  Settings,
  CheckCircle,
  Brain,
  TrendingUp,
  Zap,
} from "lucide-react";

interface ProcessStep {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  content: React.ReactNode;
}

const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    title: "Discovery",
    subtitle: "Understanding your business needs and current processes",
    icon: <Search className="w-6 h-6" />,
    color: "blue",
    content: (
      <div className="space-y-6">
        <div className="space-y-3">
          {[
            "Comprehensive process mapping and workflow analysis",
            "Technology audit and infrastructure assessment",
            "Goal definition and success metrics alignment",
            "ROI projections and business case development"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">{item}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
            <Brain className="w-8 h-8 text-blue-400 mb-3" />
            <h4 className="text-white font-medium mb-2">Process Intelligence</h4>
            <p className="text-gray-400 text-sm">Advanced analytics to identify automation opportunities</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
            <TrendingUp className="w-8 h-8 text-purple-400 mb-3" />
            <h4 className="text-white font-medium mb-2">ROI Forecasting</h4>
            <p className="text-gray-400 text-sm">Detailed projections of efficiency gains and cost savings</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "strategy",
    title: "Strategy",
    subtitle: "Designing your AI transformation roadmap",
    icon: <Target className="w-6 h-6" />,
    color: "purple",
    content: (
      <div className="space-y-6">
        <div className="space-y-3">
          {[
            "Custom AI strategy aligned with business objectives",
            "Technical architecture and system design",
            "Implementation roadmap with clear milestones",
            "Risk assessment and mitigation strategies"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6">
          <h4 className="text-white font-medium mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Strategic Blueprint
          </h4>
          <p className="text-gray-300 text-sm mb-4">
            Our comprehensive strategy document serves as your AI transformation blueprint,
            ensuring every step is purposeful and measurable.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { value: "90%", label: "Success Rate", color: "cyan" },
              { value: "6-12", label: "Weeks Timeline", color: "green" },
              { value: "300%", label: "Avg ROI", color: "purple" },
              { value: "24/7", label: "Support", color: "blue" },
            ].map((stat, index) => (
              <div key={index} className="bg-black/30 rounded-lg p-3 text-center">
                <div className={`text-${stat.color}-400 font-bold text-lg`}>{stat.value}</div>
                <div className="text-gray-400 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "development",
    title: "Development",
    subtitle: "Building and perfecting your AI solutions",
    icon: <Code className="w-6 h-6" />,
    color: "green",
    content: (
      <div className="space-y-6">
        <div className="space-y-3">
          {[
            "Custom AI agent development with cutting-edge technologies",
            "Rigorous testing across multiple environments",
            "Performance optimization and fine-tuning",
            "Quality assurance and security validation"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">{item}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { value: "99.9%", label: "Uptime Guarantee", color: "green" },
            { value: "50+", label: "Test Scenarios", color: "blue" },
            { value: "10x", label: "Faster Processing", color: "purple" },
          ].map((stat, index) => (
            <div key={index} className={`bg-${stat.color}-500/10 border border-${stat.color}-500/20 rounded-lg p-4 text-center`}>
              <div className={`text-2xl font-bold text-${stat.color}-400 mb-2`}>{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "deployment",
    title: "Deployment",
    subtitle: "Seamless launch with comprehensive support",
    icon: <Rocket className="w-6 h-6" />,
    color: "orange",
    content: (
      <div className="space-y-6">
        <div className="space-y-3">
          {[
            "Phased deployment with minimal business disruption",
            "Comprehensive team training and documentation",
            "Real-time monitoring and performance tracking",
            "Immediate support and troubleshooting"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6">
          <h4 className="text-white font-medium mb-4">Deployment Timeline</h4>
          <div className="space-y-3">
            {[
              { week: "Week 1", task: "Environment setup and configuration", color: "green" },
              { week: "Week 2", task: "Pilot deployment and testing", color: "blue" },
              { week: "Week 3", task: "Full deployment and team training", color: "purple" },
              { week: "Week 4", task: "Optimization and go-live", color: "orange" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={`w-2 h-2 bg-${item.color}-400 rounded-full`}></div>
                <span className="text-gray-300 text-sm">{item.week}: {item.task}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "optimization",
    title: "Optimization",
    subtitle: "Continuous improvement and ongoing success",
    icon: <Settings className="w-6 h-6" />,
    color: "cyan",
    content: (
      <div className="space-y-6">
        <div className="space-y-3">
          {[
            "24/7 monitoring and performance optimization",
            "Regular updates and feature enhancements",
            "Proactive maintenance and security updates",
            "Strategic consultation for scaling opportunities"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">
          <h4 className="text-white font-medium mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-cyan-400" />
            Continuous Value Delivery
          </h4>
          <p className="text-gray-300 text-sm mb-4">
            Our partnership doesn't end at deployment. We ensure your AI solutions continue to evolve
            and deliver increasing value as your business grows.
          </p>
          <div className="grid grid-cols-2 gap-4">
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

export const WorkProcess = () => {
  const [activeStep, setActiveStep] = useState<string>("discovery");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const getColorClasses = (color: string, isActive: boolean) => {
    const colors = {
      blue: {
        bg: isActive ? "bg-blue-500" : "bg-blue-500/20",
        border: isActive ? "border-blue-500" : "border-blue-500/30",
        text: "text-blue-400",
        glow: "shadow-blue-500/50",
      },
      purple: {
        bg: isActive ? "bg-purple-500" : "bg-purple-500/20",
        border: isActive ? "border-purple-500" : "border-purple-500/30",
        text: "text-purple-400",
        glow: "shadow-purple-500/50",
      },
      green: {
        bg: isActive ? "bg-green-500" : "bg-green-500/20",
        border: isActive ? "border-green-500" : "border-green-500/30",
        text: "text-green-400",
        glow: "shadow-green-500/50",
      },
      orange: {
        bg: isActive ? "bg-orange-500" : "bg-orange-500/20",
        border: isActive ? "border-orange-500" : "border-orange-500/30",
        text: "text-orange-400",
        glow: "shadow-orange-500/50",
      },
      cyan: {
        bg: isActive ? "bg-cyan-500" : "bg-cyan-500/20",
        border: isActive ? "border-cyan-500" : "border-cyan-500/30",
        text: "text-cyan-400",
        glow: "shadow-cyan-500/50",
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div ref={containerRef} className="w-full bg-black py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Our Process
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A proven methodology that transforms your business with AI, from discovery to continuous optimization
          </p>
        </motion.div>

        {/* Process Steps Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {processSteps.map((step, index) => {
            const isActive = activeStep === step.id;
            const colors = getColorClasses(step.color, isActive);

            return (
              <motion.button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`
                  relative group flex items-center gap-3 px-6 py-3 rounded-full
                  border transition-all duration-300
                  ${isActive ? 'bg-white/10' : 'bg-white/5 hover:bg-white/10'}
                  ${colors.border}
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Step number */}
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                  transition-all duration-300
                  ${isActive ? 'bg-white text-black' : colors.bg + ' text-white'}
                `}>
                  {index + 1}
                </div>

                {/* Icon and Title */}
                <div className="flex items-center gap-2">
                  <div className={colors.text}>{step.icon}</div>
                  <span className={`font-medium ${isActive ? 'text-white' : 'text-gray-300'}`}>
                    {step.title}
                  </span>
                </div>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={`absolute inset-0 rounded-full ${colors.border} ${colors.glow} shadow-lg`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Content Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          {processSteps.map((step) => {
            const isActive = activeStep === step.id;
            const colors = getColorClasses(step.color, isActive);

            return (
              <motion.div
                key={step.id}
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : 20,
                  display: isActive ? 'block' : 'none',
                }}
                transition={{ duration: 0.3 }}
              >
                <div className={`
                  relative bg-gradient-to-br from-gray-900/50 to-gray-900/30
                  border ${colors.border} rounded-2xl p-8 md:p-12
                  backdrop-blur-xl overflow-hidden
                `}>
                  {/* Background decoration */}
                  <div className={`
                    absolute top-0 right-0 w-64 h-64 ${colors.bg}
                    opacity-10 blur-3xl rounded-full transform translate-x-32 -translate-y-32
                  `} />

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-8">
                    <div className={`
                      w-16 h-16 rounded-xl ${colors.bg} ${colors.glow}
                      flex items-center justify-center shadow-lg
                    `}>
                      <div className="text-white">{step.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400 text-lg">{step.subtitle}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {step.content}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};