import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, CheckCircle2, ArrowRightIcon, ExternalLinkIcon, Microscope, Eye, Scan, MessageSquareIcon, CalendarIcon, Shield, BarChart3, Clock, Users, Brain, Activity, Zap } from "lucide-react";
import { FadeIn } from "@/components/magicui/fade-in";
import { SlideIn } from "@/components/magicui/slide-in";
import { AnimatedCard } from "@/components/magicui/animated-card";

const features = [
  {
    icon: <Eye className="h-6 w-6" />,
    title: "Advanced Computer Vision Analysis",
    description: "State-of-the-art deep learning models trained on millions of medical images to detect abnormalities, identify patterns, and analyze complex medical imagery with superhuman accuracy and consistency."
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI-Powered Diagnostic Enhancement",
    description: "Intelligent algorithms that assist radiologists by highlighting potential areas of concern, providing diagnostic suggestions, and offering quantitative measurements to support clinical decision-making."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Real-Time Image Processing",
    description: "Lightning-fast analysis and processing capabilities that provide instant insights during imaging procedures, enabling immediate clinical decisions and improving workflow efficiency."
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Early Disease Detection & Screening",
    description: "Advanced algorithms capable of detecting subtle signs of disease in early stages, identifying patterns invisible to the human eye, and enabling proactive treatment interventions."
  }
];

const benefits = [
  {
    icon: <Eye className="h-8 w-8" />,
    title: "95% Diagnostic Accuracy Improvement",
    description: "Our medical imaging AI achieves exceptional diagnostic accuracy, reducing false positives and negatives while providing consistent, reliable analysis of medical images across various modalities."
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "70% Faster Image Analysis",
    description: "Dramatically reduce time from imaging to diagnosis with AI-powered analysis that processes images in seconds, enabling faster patient care and improved clinical workflow efficiency."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Enhanced Radiologist Productivity",
    description: "AI assistance allows radiologists to focus on complex cases and patient care by automating routine screenings and providing intelligent insights for more challenging diagnoses."
  }
];

const useCases = [
  {
    title: "Radiology & Medical Imaging",
    description: "Comprehensive analysis of X-rays, CT scans, MRIs, and ultrasounds to detect fractures, tumors, infections, and other abnormalities with enhanced accuracy and speed.",
    results: "40% reduction in reporting time, 25% improvement in diagnostic accuracy"
  },
  {
    title: "Pathology & Histopathology",
    description: "Digital pathology analysis for cancer detection, tissue classification, and cellular abnormality identification using AI-powered microscopic image analysis.",
    results: "60% faster pathology reports, 95% cancer detection accuracy"
  },
  {
    title: "Ophthalmology & Retinal Screening",
    description: "Automated screening for diabetic retinopathy, glaucoma, and macular degeneration using advanced fundus image analysis and optical coherence tomography.",
    results: "80% reduction in screening time, early detection of 90%+ cases"
  }
];

const imagingModalities = [
  { name: "X-Ray Analysis", description: "Bone fractures, pneumonia, chest abnormalities", icon: Scan },
  { name: "CT Scan Intelligence", description: "Tumor detection, organ analysis, trauma assessment", icon: Brain },
  { name: "MRI Enhancement", description: "Soft tissue analysis, neurological conditions", icon: Activity },
  { name: "Ultrasound AI", description: "Cardiac analysis, fetal monitoring, organ assessment", icon: Eye },
  { name: "Mammography", description: "Breast cancer screening and detection", icon: Microscope },
  { name: "Pathology Slides", description: "Digital pathology and tissue analysis", icon: Zap }
];

const MedicalImagingIntelligence = () => {
  const [activeUseCase, setActiveUseCase] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-teal-500/5 to-blue-500/10" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <FadeIn delay={100}>
            <Link 
              to="/industries/healthcare" 
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Healthcare Solutions
            </Link>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn delay={200}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <Microscope className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                    AI Imaging
                  </Badge>
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Medical Imaging 
                  <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent"> Intelligence</span>
                </h1>
              </FadeIn>

              <FadeIn delay={400}>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Transform medical imaging with advanced AI-powered analysis that enhances diagnostic accuracy, 
                  enables early disease detection, and supports radiologists in delivering exceptional patient care 
                  through computer vision and deep learning technologies.
                </p>
              </FadeIn>

              <FadeIn delay={500}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="group bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 px-8 py-3 rounded-xl text-lg font-semibold">
                    <Microscope className="w-5 h-5 mr-2" />
                    Enhance Imaging Analysis
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-xl text-lg">
                    View AI Demo
                    <ExternalLinkIcon className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </FadeIn>
            </div>

            <div className="hidden lg:block">
              <FadeIn delay={600}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-3xl blur-3xl"></div>
                  <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { icon: Eye, label: "Accuracy", value: "95%+", color: "text-cyan-400" },
                        { icon: Zap, label: "Speed", value: "<30s", color: "text-teal-400" },
                        { icon: Brain, label: "AI Models", value: "Deep", color: "text-blue-400" },
                        { icon: Shield, label: "Security", value: "HIPAA", color: "text-green-400" }
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
                AI Capabilities
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Advanced Medical Imaging AI Features
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Our medical imaging AI combines cutting-edge computer vision, deep learning, and clinical expertise 
                to revolutionize diagnostic imaging and enhance radiologist capabilities.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <SlideIn key={feature.title} direction="up" delay={index * 150}>
                <AnimatedCard className="p-8 h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="text-cyan-400">
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

      {/* Imaging Modalities Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900/50 to-black relative">
        <div className="container mx-auto max-w-6xl">
          <FadeIn delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Comprehensive Imaging Modality Support
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Our AI platform supports analysis across all major medical imaging modalities with specialized algorithms
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {imagingModalities.map((modality, index) => (
              <FadeIn key={modality.name} delay={400 + index * 100}>
                <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-lg flex items-center justify-center">
                      <modality.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="font-semibold text-white">{modality.name}</h3>
                  </div>
                  <p className="text-sm text-gray-400">{modality.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <FadeIn delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Clinical Applications & Specialties
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Discover how medical imaging AI transforms diagnostic capabilities across various medical specialties
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <SlideIn key={useCase.title} direction="up" delay={index * 200}>
                <div
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeUseCase === index
                      ? 'bg-cyan-500/10 border-cyan-500/50'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                  onClick={() => setActiveUseCase(index)}
                >
                  <h3 className="text-xl font-semibold mb-4 text-white">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm text-cyan-400 font-medium">Clinical Impact:</p>
                    <p className="text-sm text-gray-400 mt-1">{useCase.results}</p>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
        <div className="container mx-auto max-w-6xl">
          <FadeIn delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Transformative Diagnostic Impact
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Experience measurable improvements in diagnostic accuracy, workflow efficiency, and patient outcomes 
                through AI-enhanced medical imaging
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <SlideIn key={benefit.title} direction="up" delay={index * 200}>
                <AnimatedCard className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center">
                    <div className="text-cyan-400">
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

      {/* AI Technology Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <FadeIn delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Advanced AI Technology Stack
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Built on state-of-the-art deep learning architectures and computer vision technologies
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Convolutional Neural Networks", description: "Deep learning for image analysis", icon: Brain },
              { name: "Transfer Learning", description: "Pre-trained medical imaging models", icon: Zap },
              { name: "Ensemble Methods", description: "Multiple AI models for accuracy", icon: Activity },
              { name: "Real-time Processing", description: "Instant analysis and results", icon: Clock }
            ].map((tech, index) => (
              <FadeIn key={tech.name} delay={400 + index * 100}>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-xl flex items-center justify-center">
                    <tech.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-400">{tech.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Validation Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <FadeIn delay={200}>
            <div className="text-center mb-12">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                FDA Compliant & Clinically Validated
              </h2>
              <p className="text-gray-300 text-lg">
                Our medical imaging AI meets the highest regulatory standards and clinical validation requirements
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { title: "FDA Cleared", description: "FDA-approved algorithms for clinical use and diagnostic support" },
                { title: "Clinical Validation", description: "Extensively tested and validated in real-world clinical settings" },
                { title: "Quality Assurance", description: "Continuous monitoring and validation of AI model performance" }
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
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-teal-500/5 to-blue-500/10" />
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <FadeIn delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Revolutionize Medical Imaging?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Transform your diagnostic imaging capabilities with AI-powered solutions designed specifically 
              for your medical specialty and imaging workflow requirements.
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="group bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 px-8 py-3 rounded-xl text-lg font-semibold">
                <Microscope className="w-5 h-5 mr-2" />
                Enhance Your Imaging AI
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-xl text-lg">
                Schedule AI Demo
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

export default MedicalImagingIntelligence;