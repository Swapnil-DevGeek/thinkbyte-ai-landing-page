import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, CheckCircle2, ArrowRightIcon, ExternalLinkIcon, FileText, Database, Zap, MessageSquareIcon, CalendarIcon, Shield, BarChart3, Clock, Users, Brain } from "lucide-react";
import { FadeIn } from "@/components/magicui/fade-in";
import { SlideIn } from "@/components/magicui/slide-in";
import { AnimatedCard } from "@/components/magicui/animated-card";

const features = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI-Powered Data Extraction & Processing",
    description: "Advanced natural language processing and machine learning algorithms automatically extract, interpret, and structure data from various medical documents, forms, and patient interactions, reducing manual data entry by up to 90%."
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Seamless EHR & System Integration",
    description: "Our solution integrates seamlessly with existing Electronic Health Record systems, Practice Management Software, and other healthcare platforms through secure APIs, ensuring data consistency and workflow continuity."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Automated Workflow Optimization",
    description: "Intelligent workflow automation streamlines documentation processes, automates routine tasks, and ensures compliance with healthcare standards while reducing administrative burden on medical staff."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "HIPAA-Compliant Security & Audit Trails",
    description: "Built-in security measures ensure full HIPAA compliance with end-to-end encryption, role-based access controls, and comprehensive audit trails for all documentation activities and system interactions."
  }
];

const benefits = [
  {
    icon: <Clock className="h-8 w-8" />,
    title: "80% Reduction in Documentation Time",
    description: "Our intelligent documentation system dramatically reduces the time healthcare professionals spend on paperwork, allowing them to focus more on direct patient care and clinical decision-making."
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "99.5% Data Accuracy Improvement",
    description: "AI-powered validation and cross-referencing ensure exceptional data accuracy, reducing medical errors and improving the quality of patient records and clinical documentation."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Enhanced Staff Productivity by 65%",
    description: "Automated documentation processes and intelligent workflow optimization free up valuable staff time, leading to improved productivity and job satisfaction among healthcare professionals."
  }
];

const useCases = [
  {
    title: "Clinical Note Generation",
    description: "Automatically generate comprehensive clinical notes from patient visits, voice recordings, and structured data inputs while maintaining medical accuracy and completeness.",
    results: "75% faster note completion, 90% accuracy in medical terminology"
  },
  {
    title: "Insurance & Billing Documentation",
    description: "Streamline insurance claims and billing processes through automated code assignment, documentation validation, and compliance checking.",
    results: "60% reduction in claim rejections, 40% faster reimbursement processing"
  },
  {
    title: "Regulatory Compliance Reporting",
    description: "Automated generation of regulatory reports and compliance documentation, ensuring adherence to healthcare standards and requirements.",
    results: "100% compliance accuracy, 70% reduction in reporting time"
  }
];

const IntelligentHealthcareDocumentation = () => {
  const [activeUseCase, setActiveUseCase] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-teal-500/10" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <FadeIn delay={100}>
            <Link 
              to="/industries/healthcare" 
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-8 group"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Healthcare Solutions
            </Link>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn delay={200}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                    AI Documentation
                  </Badge>
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Intelligent Healthcare 
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Documentation</span>
                </h1>
              </FadeIn>

              <FadeIn delay={400}>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Transform your healthcare documentation workflow with AI-powered tools that seamlessly integrate 
                  with existing systems, automating data extraction and entry to streamline operations while 
                  ensuring HIPAA compliance and accuracy.
                </p>
              </FadeIn>

              <FadeIn delay={500}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-8 py-3 rounded-xl text-lg font-semibold">
                    <FileText className="w-5 h-5 mr-2" />
                    Start Documentation AI
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-xl text-lg">
                    View Integration Demo
                    <ExternalLinkIcon className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </FadeIn>
            </div>

            <div className="hidden lg:block">
              <FadeIn delay={600}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-3xl"></div>
                  <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { icon: FileText, label: "Documents", value: "Auto", color: "text-green-400" },
                        { icon: Database, label: "Data Entry", value: "90%↓", color: "text-blue-400" },
                        { icon: Shield, label: "HIPAA Secure", value: "100%", color: "text-purple-400" },
                        { icon: Zap, label: "Processing", value: "<1min", color: "text-yellow-400" }
                      ].map((stat, index) => (
                        <div key={stat.label} className="text-center group">
                          <div className={`w-16 h-16 mx-auto mb-3 bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <stat.icon className={`w-8 h-8 ${stat.color}`} />
                          </div>
                          <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                          <p className="text-xs text-gray-400 font-medium">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <FadeIn delay={200}>
            <div className="text-center mb-16">
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 mb-4">
                Advanced Capabilities
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                AI-Powered Documentation Features
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Our intelligent documentation system leverages cutting-edge AI to transform how healthcare 
                organizations manage, process, and maintain medical records and documentation.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <SlideIn key={feature.title} direction="up" delay={index * 150}>
                <AnimatedCard className="p-8 h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="text-green-400">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </AnimatedCard>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900/50 to-black relative">
        <div className="container mx-auto max-w-6xl">
          <FadeIn delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Documentation Automation Solutions
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Discover how our intelligent documentation system addresses key healthcare documentation challenges
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <SlideIn key={useCase.title} direction="up" delay={index * 200}>
                <div
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeUseCase === index
                      ? 'bg-green-500/10 border-green-500/50'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                  onClick={() => setActiveUseCase(index)}
                >
                  <h3 className="text-xl font-semibold mb-4 text-white">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm text-green-400 font-medium">Results:</p>
                    <p className="text-sm text-gray-400 mt-1">{useCase.results}</p>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <FadeIn delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Transformative Documentation Impact
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Experience measurable improvements in documentation efficiency, accuracy, and staff productivity
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <SlideIn key={benefit.title} direction="up" delay={index * 200}>
                <AnimatedCard className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center">
                    <div className="text-green-400">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </AnimatedCard>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
        <div className="container mx-auto max-w-6xl">
          <FadeIn delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Seamless Healthcare System Integration
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Our documentation AI integrates with leading healthcare platforms and systems
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Epic EHR", description: "Native Epic integration" },
              { name: "Cerner", description: "Seamless Cerner connectivity" },
              { name: "AllScripts", description: "Complete AllScripts support" },
              { name: "Custom APIs", description: "Flexible API integration" }
            ].map((integration, index) => (
              <FadeIn key={integration.name} delay={400 + index * 100}>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                    <Database className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{integration.name}</h3>
                  <p className="text-sm text-gray-400">{integration.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <FadeIn delay={200}>
            <div className="text-center mb-12">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Enterprise Security & Compliance
              </h2>
              <p className="text-gray-300 text-lg">
                Built with healthcare industry security standards and regulatory compliance requirements
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { title: "HIPAA Compliant", description: "Full compliance with healthcare privacy regulations and patient data protection" },
                { title: "SOC 2 Type II", description: "Certified security controls for availability, confidentiality, and privacy" },
                { title: "End-to-End Encryption", description: "Advanced encryption for data in transit and at rest with secure key management" }
              ].map((item, index) => (
                <div key={item.title} className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <CheckCircle2 className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-teal-500/10" />
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <FadeIn delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Revolutionize Your Healthcare Documentation?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Experience the power of intelligent documentation with a custom solution 
              designed specifically for your healthcare organization and workflow requirements.
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-8 py-3 rounded-xl text-lg font-semibold">
                <FileText className="w-5 h-5 mr-2" />
                Transform Your Documentation
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-xl text-lg">
                Schedule Integration Demo
                <CalendarIcon className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IntelligentHealthcareDocumentation;