import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/magicui/fade-in";
import { SlideIn } from "@/components/magicui/slide-in";
import { AnimatedCard } from "@/components/magicui/animated-card";
import { 
  ArrowRight, 
  Sparkles, 
  Stethoscope, 
  Target, 
  BarChart3, 
  Zap, 
  Users, 
  CheckCircle2,
  Brain,
  Database,
  Activity,
  TrendingUp,
  Clock,
  Shield,
  AlertTriangle,
  FileText,
  Search
} from "lucide-react";

const ClinicalDecisionSupport = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-teal-900/10 to-blue-900/20"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 py-32 pt-40 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <FadeIn delay={200}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="text-white">Clinical Decision</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                  Support Systems
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex items-center justify-center gap-3 mb-8">
                <Stethoscope className="w-6 h-6 text-emerald-400" />
                <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-full px-8 py-3">
                  Contact us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 md:py-28 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-blue-500/5" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <FadeIn delay={200}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
                Empowering Healthcare Professionals with AI-Driven Clinical Insights
              </h2>
            </FadeIn>

            <FadeIn delay={400}>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-5xl mx-auto leading-relaxed">
                Clinical Decision Support Systems (CDSS) leverage artificial intelligence to provide healthcare professionals 
                with evidence-based recommendations at the point of care. By analyzing patient data, medical literature, and 
                clinical guidelines in real-time, these systems enhance diagnostic accuracy, reduce medical errors, and improve 
                patient outcomes while supporting clinicians in making informed treatment decisions.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900/50 to-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Flowchart Side */}
              <div className="order-2 lg:order-1">
                <FadeIn delay={200}>
                  <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                    <div className="space-y-6">
                      {[
                        { 
                          icon: Database, 
                          title: "Patient Data Integration", 
                          description: "Aggregates comprehensive patient information from EHRs, lab results, and medical history.",
                          color: "text-emerald-400"
                        },
                        { 
                          icon: Brain, 
                          title: "AI Analysis Engine", 
                          description: "Advanced algorithms analyze patient data against medical knowledge bases and guidelines.",
                          color: "text-teal-400"
                        },
                        { 
                          icon: Search, 
                          title: "Evidence Matching", 
                          description: "Compares patient symptoms and conditions with medical literature and best practices.",
                          color: "text-blue-400"
                        },
                        { 
                          icon: AlertTriangle, 
                          title: "Risk Assessment", 
                          description: "Identifies potential risks, drug interactions, and contraindications in real-time.",
                          color: "text-orange-400"
                        },
                        { 
                          icon: FileText, 
                          title: "Clinical Recommendations", 
                          description: "Generates evidence-based treatment suggestions and diagnostic insights.",
                          color: "text-purple-400"
                        },
                        { 
                          icon: CheckCircle2, 
                          title: "Decision Support", 
                          description: "Provides actionable insights to support clinical decision-making at point of care.",
                          color: "text-green-400"
                        }
                      ].map((step, index) => (
                        <SlideIn key={step.title} direction="up" delay={index * 100}>
                          <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                            <div className={`w-12 h-12 bg-black/40 rounded-xl flex items-center justify-center flex-shrink-0`}>
                              <step.icon className={`w-6 h-6 ${step.color}`} />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                            </div>
                          </div>
                          {index < 5 && (
                            <div className="flex justify-center my-2">
                              <ArrowRight className="w-4 h-4 text-gray-500 rotate-90" />
                            </div>
                          )}
                        </SlideIn>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Content Side */}
              <div className="order-1 lg:order-2">
                <FadeIn delay={400}>
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20 mb-6">
                    EXAMPLE OF OUR WORK
                  </Badge>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white leading-tight">
                    Transforming Clinical Decision-Making for a Leading Healthcare Network
                  </h2>
                  
                  <div className="space-y-6 text-gray-300 leading-relaxed">
                    <p className="text-lg">
                      A major healthcare network was struggling with diagnostic inconsistencies and treatment variations across 
                      their facilities, leading to suboptimal patient outcomes and increased medical errors. We implemented a 
                      comprehensive Clinical Decision Support System that integrates with their existing EHR infrastructure.
                    </p>
                    
                    <p className="text-lg">
                      Our AI-powered solution analyzes patient data in real-time, providing clinicians with evidence-based 
                      recommendations, drug interaction alerts, and diagnostic assistance at the point of care.
                    </p>
                    
                    <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl p-6 border border-emerald-500/20">
                      <p className="text-lg font-medium text-white mb-4">Results:</p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>35% improvement in diagnostic accuracy across all departments</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>50% reduction in medication errors and adverse drug events</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>25% decrease in average length of stay for patients</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>Improved clinician confidence and decision-making speed</span>
                        </li>
                      </ul>
                    </div>
                    
                    <p className="text-lg">
                      The system has become an integral part of their clinical workflow, helping healthcare professionals 
                      make more informed decisions while maintaining compliance with clinical guidelines and improving 
                      overall patient safety and care quality.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 md:py-28 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <FadeIn delay={200}>
              <div className="text-center mb-16">
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20 mb-6">
                  WHAT WE OFFER
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                  How We Help with Clinical Decision Support Implementation
                </h2>
              </div>
            </FadeIn>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Clinical Assessment & Strategy",
                  description: "We analyze your current clinical workflows and identify opportunities for AI-powered decision support, creating a tailored implementation strategy that aligns with your healthcare objectives."
                },
                {
                  icon: Brain,
                  title: "AI Model Development",
                  description: "We develop sophisticated AI models trained on medical literature, clinical guidelines, and your historical patient data to provide accurate, evidence-based recommendations."
                },
                {
                  icon: Database,
                  title: "EHR Integration",
                  description: "Our team seamlessly integrates the CDSS with your existing Electronic Health Record systems, ensuring real-time data access and minimal workflow disruption."
                },
                {
                  icon: Shield,
                  title: "Compliance & Security",
                  description: "We ensure full HIPAA compliance and implement robust security measures to protect patient data while maintaining system performance and reliability."
                },
                {
                  icon: Users,
                  title: "Training & Support",
                  description: "We provide comprehensive training for clinical staff and ongoing technical support to maximize adoption and effectiveness of the decision support system."
                },
                {
                  icon: Activity,
                  title: "Performance Monitoring",
                  description: "We continuously monitor system performance, clinical outcomes, and user feedback to optimize the AI algorithms and improve decision support accuracy."
                }
              ].map((service, index) => (
                <SlideIn key={service.title} direction="up" delay={index * 150}>
                  <AnimatedCard className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-6">
                      <service.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </AnimatedCard>
                </SlideIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Healthcare Use Cases Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900/50 to-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <FadeIn delay={200}>
              <div className="text-center mb-16">
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20 mb-6">
                  AI USE CASES FOR HEALTHCARE
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                  Other Healthcare Use Cases of AI
                </h2>
              </div>
            </FadeIn>

            <div className="space-y-8">
              {[
                {
                  title: "Healthcare AI Agent",
                  description: "We implement AI-driven agents that provide 24/7 clinical support, automating routine tasks and enhancing clinical workflows to improve efficiency and patient care delivery.",
                  href: "/industries/healthcare/ai-agent",
                  color: "text-blue-400"
                },
                {
                  title: "Intelligent Healthcare Documentation",
                  description: "We build AI solutions that automatically generate clinical notes, streamline documentation processes, and ensure accurate, comprehensive medical records.",
                  href: "/industries/healthcare/documentation",
                  color: "text-green-400"
                },
                {
                  title: "Personalized Medicine Platform",
                  description: "We leverage AI to analyze genetic and clinical data, enabling personalized treatment recommendations and precision medicine approaches for optimal patient outcomes.",
                  href: "/industries/healthcare/personalized-medicine",
                  color: "text-purple-400"
                },
                {
                  title: "Medical Imaging Intelligence",
                  description: "Advanced AI algorithms analyze medical images to assist in diagnosis, detect abnormalities, and provide quantitative insights to support clinical decision-making.",
                  href: "/industries/healthcare/medical-imaging",
                  color: "text-cyan-400"
                },
                {
                  title: "Accelerated Drug Discovery",
                  description: "We utilize AI to accelerate pharmaceutical research, from molecular screening to clinical trial optimization, reducing time-to-market for life-saving treatments.",
                  href: "/healthcare/drug-discovery",
                  color: "text-pink-400"
                },
                {
                  title: "Patient Risk Stratification",
                  description: "AI-powered systems that analyze patient data to identify high-risk individuals, enabling proactive interventions and preventive care strategies."
                }
              ].map((useCase, index) => (
                <SlideIn key={useCase.title} direction="up" delay={index * 100}>
                  <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300">
                    <h3 className={`text-xl font-semibold mb-3 ${useCase.color || 'text-white'}`}>
                      {useCase.href ? (
                        <button 
                          onClick={() => window.location.href = useCase.href}
                          className="hover:underline cursor-pointer"
                        >
                          {useCase.title}
                        </button>
                      ) : (
                        useCase.title
                      )}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                  </div>
                </SlideIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-blue-500/10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <FadeIn delay={200}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
                Transform your clinical practice with AI-powered decision support 
                that enhances patient care and improves outcomes.
              </h2>
            </FadeIn>

            <FadeIn delay={400}>
              <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-full px-10 py-6 text-xl transition-all duration-300 hover:scale-105">
                Contact Us
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA Section 2 */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <FadeIn delay={200}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white leading-tight">
                Contact us to discover how Clinical Decision Support Systems 
                can revolutionize your healthcare delivery and improve patient outcomes 
                through evidence-based AI recommendations.
              </h2>
            </FadeIn>

            <FadeIn delay={400}>
              <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-full px-10 py-6 text-xl transition-all duration-300 hover:scale-105">
                Contact Us
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClinicalDecisionSupport;