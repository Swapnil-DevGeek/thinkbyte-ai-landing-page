import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, CheckCircle2, ArrowRightIcon, ExternalLinkIcon, Bot, Heart, Users, MessageSquareIcon, CalendarIcon, Shield, Activity, Clock, Stethoscope } from "lucide-react";
import { FadeIn } from "@/components/magicui/fade-in";
import { SlideIn } from "@/components/magicui/slide-in";
import { AnimatedCard } from "@/components/magicui/animated-card";

const features = [
  {
    icon: <Bot className="h-6 w-6" />,
    title: "Intelligent Patient Support & Triage",
    description: "Our AI agents provide 24/7 patient support, conducting preliminary assessments, answering medical queries, and routing patients to appropriate care levels. The system integrates with existing EHR systems to provide personalized responses based on patient history and current symptoms."
  },
  {
    icon: <CalendarIcon className="h-6 w-6" />,
    title: "Automated Scheduling & Resource Management",
    description: "Advanced scheduling algorithms optimize appointment booking, considering provider availability, patient preferences, urgency levels, and resource constraints. The system automatically handles cancellations, rescheduling, and waitlist management while ensuring optimal resource utilization."
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Real-Time Clinical Decision Support",
    description: "AI-powered clinical assistance provides healthcare professionals with evidence-based recommendations, drug interaction warnings, treatment protocols, and diagnostic support. The system continuously learns from medical literature and clinical outcomes to improve accuracy."
  },
  {
    icon: <MessageSquareIcon className="h-6 w-6" />,
    title: "Multi-Channel Patient Communication",
    description: "Seamless communication across phone, SMS, email, and patient portals with natural language processing capabilities. The AI maintains context across all interactions, ensuring consistent and personalized patient experiences while maintaining HIPAA compliance."
  }
];

const benefits = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Improved Patient Satisfaction by 85%",
    description: "Our Healthcare AI Agent provides instant responses to patient queries, reduces wait times, and ensures 24/7 availability, significantly enhancing the overall patient experience and satisfaction scores."
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Reduced Administrative Workload by 70%",
    description: "Automated patient triage, appointment scheduling, and routine inquiries handling allows healthcare staff to focus on direct patient care rather than administrative tasks, improving overall operational efficiency."
  },
  {
    icon: <Activity className="h-8 w-8" />,
    title: "Enhanced Clinical Outcomes by 60%",
    description: "Real-time clinical decision support and early intervention recommendations lead to better patient outcomes, reduced readmission rates, and more accurate diagnoses through AI-assisted healthcare delivery."
  }
];

const useCases = [
  {
    title: "Emergency Triage & Assessment",
    description: "AI-powered triage system evaluates patient symptoms, determines urgency levels, and routes patients to appropriate care settings, reducing ER wait times and improving patient flow.",
    results: "40% reduction in triage time, 25% improvement in patient flow efficiency"
  },
  {
    title: "Chronic Disease Management",
    description: "Continuous monitoring and management of chronic conditions through AI-driven insights, medication reminders, and proactive health interventions.",
    results: "30% improvement in medication adherence, 45% reduction in complications"
  },
  {
    title: "Preventive Care Coordination",
    description: "Automated identification of patients due for screenings, vaccinations, and preventive care measures, with personalized outreach and scheduling.",
    results: "50% increase in preventive care compliance, 35% reduction in missed appointments"
  }
];

const HealthcareAIAgent = () => {
  const [activeUseCase, setActiveUseCase] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <FadeIn delay={100}>
            <Link 
              to="/industries/healthcare" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8 group"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Healthcare Solutions
            </Link>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn delay={200}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                    AI-Powered Healthcare
                  </Badge>
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Healthcare AI Agent
                </h1>
              </FadeIn>

              <FadeIn delay={400}>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Transform your healthcare operations with intelligent AI agents that automate patient support, 
                  enhance clinical decision-making, and provide 24/7 assistance while maintaining the highest 
                  standards of medical care and compliance.
                </p>
              </FadeIn>

              <FadeIn delay={500}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-3 rounded-xl text-lg font-semibold">
                    <Stethoscope className="w-5 h-5 mr-2" />
                    Schedule Consultation
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-xl text-lg">
                    View Demo
                    <ExternalLinkIcon className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </FadeIn>
            </div>

            <div className="hidden lg:block">
              <FadeIn delay={600}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
                  <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { icon: Heart, label: "Patient Care", value: "24/7", color: "text-red-400" },
                        { icon: Bot, label: "AI Responses", value: "<3sec", color: "text-blue-400" },
                        { icon: Shield, label: "HIPAA Secure", value: "100%", color: "text-green-400" },
                        { icon: Users, label: "Satisfaction", value: "85%+", color: "text-purple-400" }
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
                Core Capabilities
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Advanced Healthcare AI Agent Features
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Our Healthcare AI Agent combines cutting-edge artificial intelligence with deep healthcare domain expertise 
                to deliver comprehensive patient support and clinical assistance.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <SlideIn key={feature.title} direction="up" delay={index * 150}>
                <AnimatedCard className="p-8 h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="text-blue-400">
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
                Real-World Healthcare Applications
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                See how our Healthcare AI Agent transforms different aspects of healthcare delivery
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <SlideIn key={useCase.title} direction="up" delay={index * 200}>
                <div
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeUseCase === index
                      ? 'bg-blue-500/10 border-blue-500/50'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                  onClick={() => setActiveUseCase(index)}
                >
                  <h3 className="text-xl font-semibold mb-4 text-white">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm text-blue-400 font-medium">Results:</p>
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
                Measurable Healthcare Impact
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Our Healthcare AI Agent delivers quantifiable improvements across key healthcare metrics
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <SlideIn key={benefit.title} direction="up" delay={index * 200}>
                <AnimatedCard className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center">
                    <div className="text-blue-400">
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

      {/* Compliance Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-500/5 to-emerald-500/5">
        <div className="container mx-auto max-w-4xl">
          <FadeIn delay={200}>
            <div className="text-center mb-12">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Healthcare Compliance & Security
              </h2>
              <p className="text-gray-300 text-lg">
                Built with healthcare regulations and patient privacy at the core
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { title: "HIPAA Compliant", description: "Full compliance with healthcare privacy regulations" },
                { title: "HITECH Secure", description: "Advanced security for electronic health information" },
                { title: "SOC 2 Certified", description: "Enterprise-grade security and availability standards" }
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10" />
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <FadeIn delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Healthcare Operations?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Experience the power of Healthcare AI Agent with a custom proof of concept 
              tailored to your specific healthcare needs and patient population.
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-3 rounded-xl text-lg font-semibold">
                <Bot className="w-5 h-5 mr-2" />
                Start Your Healthcare AI Journey
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-xl text-lg">
                Schedule Demo
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

export default HealthcareAIAgent;