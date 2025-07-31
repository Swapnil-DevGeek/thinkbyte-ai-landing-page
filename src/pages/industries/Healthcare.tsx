import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TextAnimate } from "@/components/ui/text-animate";
import { FadeIn } from "@/components/magicui/fade-in";
import { SlideIn } from "@/components/magicui/slide-in";
import { AnimatedCard } from "@/components/magicui/animated-card";
import { DotPattern } from "@/components/ui/dot-pattern";
import { GridPattern } from "@/components/ui/grid-pattern";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Ripple } from "@/components/ui/ripple";
import { 
  ArrowRight, 
  Sparkles, 
  Heart, 
  Activity, 
  Shield, 
  Users, 
  FileText, 
  Brain, 
  Microscope,
  Stethoscope,
  Bot,
  BarChart3,
  ChevronDown,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useState } from "react";

const Healthcare = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const healthcareSolutions = [
    {
      id: "ai-agent",
      icon: Bot,
      title: "Healthcare AI Agent",
      description: "We build AI agents that automate patient support, scheduling, and provide real-time clinical assistance, enhancing operational efficiency and improving patient care.",
      features: ["Patient Support Automation", "Intelligent Scheduling", "Clinical Decision Support", "24/7 Availability"],
      badge: "Popular",
      gradient: "from-blue-500/20 to-cyan-500/20",
      hoverGradient: "from-blue-500/30 to-cyan-500/30",
      background: <AnimatedGridPattern 
        numSquares={30} 
        maxOpacity={0.15} 
        duration={3} 
        width={40} 
        height={40} 
        className={cn("text-blue-400/20 stroke-blue-400/10 fill-blue-400/5 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]")} 
      />
    },
    {
      id: "documentation",
      icon: FileText,
      title: "Intelligent Healthcare Documentation",
      description: "We develop AI-powered documentation tools that seamlessly integrate with your existing systems, automating data extraction and entry to streamline workflows and enhance accuracy.",
      features: ["Automated Data Entry", "System Integration", "Workflow Optimization", "HIPAA Compliant"],
      badge: "Integration",
      gradient: "from-green-500/20 to-emerald-500/20",
      hoverGradient: "from-green-500/30 to-emerald-500/30",
      background: <FlickeringGrid className="absolute inset-0 opacity-20" squareSize={8} gridGap={6} color="#10b981" maxOpacity={0.15} flickerChance={0.1} />
    },
    {
      id: "personalized-medicine",
      icon: Heart,
      title: "Personalized Medicine Platform",
      description: "By analyzing genetic and medical data, we create customized AI solutions that generate personalized treatment plans, helping you deliver advanced, patient-centric care.",
      features: ["Genetic Data Analysis", "Treatment Personalization", "Precision Medicine", "Patient-Centric Care"],
      badge: "Advanced",
      gradient: "from-purple-500/20 to-pink-500/20",
      hoverGradient: "from-purple-500/30 to-pink-500/30",
      background: <DotPattern 
        width={25} 
        height={25} 
        cx={1} 
        cy={1} 
        cr={2} 
        className={cn("text-purple-400/20 [mask-image:radial-gradient(350px_circle_at_center,white,transparent)]")} 
      />
    },
    {
      id: "medical-imaging",
      icon: Microscope,
      title: "Medical Imaging Intelligence",
      description: "Utilizing computer vision and deep learning, we assist radiologists in enhancing diagnostics and enabling early detection by identifying abnormalities and subtle signs of disease in scans.",
      features: ["Computer Vision Analysis", "Early Detection", "Diagnostic Enhancement", "Radiology Support"],
      badge: "AI-Powered",
      gradient: "from-cyan-500/20 to-teal-500/20",
      hoverGradient: "from-cyan-500/30 to-teal-500/30",
      background: <Ripple className="absolute inset-0 text-cyan-400/15 opacity-20" mainCircleSize={120} mainCircleOpacity={0.1} numCircles={4} />
    }
  ];

  const complianceFeatures = [
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "All solutions built with healthcare privacy regulations in mind"
    },
    {
      icon: FileText,
      title: "HITECH Compatibility", 
      description: "Advanced security measures for electronic health information"
    },
    {
      icon: CheckCircle2,
      title: "Medicare Regulations",
      description: "Ensuring compliance with federal healthcare standards"
    }
  ];

  const faqs = [
    {
      question: "Will the AI solution result in improved Clinical data analysis and insights?",
      answer: "Yes, our AI solutions are specifically designed to enhance clinical data analysis by processing vast amounts of medical data to identify patterns, predict outcomes, and provide actionable insights that support evidence-based decision making and improve patient outcomes."
    },
    {
      question: "Will patient data be governed and maintained during and after the implementation process?",
      answer: "Absolutely. We implement robust data governance frameworks that ensure patient data is securely managed throughout the entire process. Our solutions are built with HIPAA, HITECH, and other regulatory compliance at their core, including end-to-end encryption, access controls, and comprehensive audit trails."
    },
    {
      question: "How does the implementation process work, and what is the timeline?",
      answer: "Our implementation follows a structured 4-phase approach: Executive Briefing (2 hours), Technology Assessment (2-3 days), Proof of Concept development (8-12 weeks), and full AI Application Deployment (3-4 months). This ensures rapid validation while maintaining healthcare industry standards and compliance requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
        {/* Healthcare Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Healthcare Technology"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="container mx-auto px-6 py-32 pt-40 relative z-10">
          <div className="max-w-7xl mx-auto">
            <FadeIn delay={200}>
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <Stethoscope className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-200">Healthcare AI Solutions</span>
              </div>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <FadeIn delay={400}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    <span className="text-white">Healthcare AI</span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                      Development
                    </span>
                  </h1>
                </FadeIn>

                <FadeIn delay={600}>
                  <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                    We help clients unlock new dimensions in Healthcare with precise diagnostics, 
                    streamlined administration, and personalized care, all seamlessly integrated for 
                    quick data-driven decisions. Contact our experts to learn how we can tailor an 
                    AI solution for your business with Healthcare AI development.
                  </p>
                </FadeIn>

                <FadeIn delay={800}>
                  <Button 
                    className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-2xl px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                  >
                    <Activity className="w-5 h-5 mr-3" />
                    Contact us
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </FadeIn>
              </div>

              <div className="hidden lg:block">
                <FadeIn delay={1000}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
                    <div className="relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                      <div className="grid grid-cols-2 gap-6">
                        {[
                          { icon: Heart, label: "Patient Care", color: "text-red-400" },
                          { icon: Brain, label: "AI Diagnostics", color: "text-blue-400" },
                          { icon: Shield, label: "HIPAA Secure", color: "text-green-400" },
                          { icon: BarChart3, label: "Data Insights", color: "text-purple-400" }
                        ].map((item, index) => (
                          <div key={item.label} className="text-center group">
                            <div className={`w-16 h-16 mx-auto mb-3 bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <item.icon className={`w-8 h-8 ${item.color}`} />
                            </div>
                            <p className="text-sm text-gray-300 font-medium">{item.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 md:py-28 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <FadeIn delay={200}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
                We drive exceptional growth for Healthcare organizations with 
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> strategic consulting and AI-powered solutions</span>
              </h2>
            </FadeIn>

            <FadeIn delay={400}>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-5xl mx-auto leading-relaxed">
                Markovate helps Next-Gen Healthcare companies optimize workflows, enhance patient experiences, and 
                improve ROI with AI-driven solutions. From automating medical coding & billing to enabling intelligent patient 
                support, we tackle complex challenges while ensuring compliance with HIPAA, HITECH, and Medicare regulations.
              </p>
            </FadeIn>

            <FadeIn delay={600}>
              <p className="text-lg md:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
                We specialize in AI strategy, custom model development, and integration—so you can focus on patient care 
                while we handle the technology. With our expertise in Agentic AI, we streamline operations, reduce costs, and 
                drive predictive, proactive Healthcare.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Healthcare AI Solutions Section */}
      <section className="py-20 md:py-28 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <FadeIn delay={200}>
              <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">AI Use Cases for Healthcare</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={400}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
                Our expertise in Healthcare AI solutions
              </h2>
            </FadeIn>
            
            <FadeIn delay={600}>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
                We leverage our proficiency in various AI technologies, such as deep learning, machine learning, 
                computer vision, reinforcement learning, and natural language processing to build custom Healthcare AI solutions.
              </p>
            </FadeIn>

            <FadeIn delay={800}>
              <Button 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              >
                Contact us
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </FadeIn>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {healthcareSolutions.map((solution, index) => (
              <SlideIn key={solution.id} direction="up" delay={index * 200}>
                <AnimatedCard className="group relative overflow-hidden rounded-3xl border bg-black/40 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-500 p-8 cursor-pointer h-full">
                  {solution.background && (
                    <div className="absolute inset-0 -z-10">
                      {solution.background}
                    </div>
                  )}
                  
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-5",
                    solution.hoverGradient
                  )} />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                      <Badge variant="secondary" className="text-xs bg-white/10 text-white border-white/20">
                        {solution.badge}
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                      {solution.title}
                      <ArrowRight className="w-5 h-5 ml-2 inline opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                      {solution.description}
                    </p>

                    <ul className="space-y-3">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0 group-hover:bg-cyan-400 transition-colors duration-300"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6">
                      <Link
                        to={`/industries/healthcare/${solution.id}`}
                        className="inline-flex items-center text-blue-400 hover:text-cyan-400 transition-colors duration-300 font-medium"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </AnimatedCard>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Security Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <FadeIn delay={200}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Healthcare Compliance & Security
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Our solutions are built with healthcare industry standards and regulations at their core
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              {complianceFeatures.map((feature, index) => (
                <FadeIn key={feature.title} delay={400 + index * 200}>
                  <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <FadeIn delay={200}>
              <div className="text-center mb-16">
                <Badge variant="secondary" className="text-xs bg-white/10 text-white border-white/20 mb-4">
                  FAQs
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Healthcare AI development
                </h2>
              </div>
            </FadeIn>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FadeIn key={index} delay={400 + index * 100}>
                  <div className="border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                    <button
                      className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200 rounded-2xl"
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                      <span className="text-white font-medium pr-4">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn delay={200}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
                Experience your Healthcare AI solution in action with a Proof of 
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Concept delivered in weeks.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
                >
                  POC Development
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                
                <Button 
                  variant="outline" 
                  className="group bg-transparent border-2 border-cyan-500/40 text-cyan-300 rounded-2xl px-8 py-4 hover:bg-cyan-500/10 hover:border-cyan-300 transition-all duration-300 text-lg font-medium"
                >
                  Contact us
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Healthcare;