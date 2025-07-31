import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, CheckCircle2, ArrowRightIcon, ExternalLinkIcon, Heart, Dna, Target, MessageSquareIcon, CalendarIcon, Shield, BarChart3, Clock, Users, Brain, Activity } from "lucide-react";
import { FadeIn } from "@/components/magicui/fade-in";
import { SlideIn } from "@/components/magicui/slide-in";
import { AnimatedCard } from "@/components/magicui/animated-card";

const features = [
  {
    icon: <Dna className="h-6 w-6" />,
    title: "Advanced Genetic Data Analysis",
    description: "Our platform utilizes cutting-edge genomic analysis algorithms to interpret genetic variations, identify disease predispositions, and understand individual genetic profiles for personalized treatment recommendations."
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI-Powered Treatment Personalization",
    description: "Machine learning models analyze patient genetic data, medical history, lifestyle factors, and treatment responses to generate highly personalized treatment plans and medication recommendations."
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Precision Therapy Matching",
    description: "Advanced algorithms match patients with the most effective therapies based on their unique genetic makeup, biomarkers, and clinical characteristics, optimizing treatment outcomes."
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Real-Time Treatment Monitoring",
    description: "Continuous monitoring and adjustment of personalized treatment plans based on patient response, genetic factors, and emerging medical research to ensure optimal therapeutic outcomes."
  }
];

const benefits = [
  {
    icon: <Target className="h-8 w-8" />,
    title: "90% Improvement in Treatment Efficacy",
    description: "Personalized medicine approaches based on genetic analysis and AI-driven insights result in significantly higher treatment success rates and better patient outcomes across various conditions."
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "75% Reduction in Adverse Drug Reactions",
    description: "Genetic-based medication selection and dosing recommendations dramatically reduce harmful side effects and improve patient safety through personalized pharmacogenomics."
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "60% Faster Treatment Optimization",
    description: "AI-powered analysis accelerates the process of finding the right treatment approach, reducing trial-and-error periods and helping patients achieve therapeutic goals more quickly."
  }
];

const useCases = [
  {
    title: "Cancer Treatment Personalization",
    description: "Analyze tumor genetics and patient genomics to identify the most effective cancer therapies, immunotherapies, and targeted treatments for individual patients.",
    results: "85% improvement in treatment response, 40% reduction in treatment-related toxicity"
  },
  {
    title: "Pharmacogenomic Optimization",
    description: "Personalize medication selection and dosing based on individual genetic variations in drug metabolism, reducing adverse effects and improving efficacy.",
    results: "70% reduction in adverse drug reactions, 50% improvement in medication adherence"
  },
  {
    title: "Rare Disease Management",
    description: "Leverage genetic analysis and AI to identify optimal treatment strategies for rare genetic conditions and personalize care for ultra-rare diseases.",
    results: "3x faster diagnosis, 60% improvement in rare disease treatment outcomes"
  }
];

const PersonalizedMedicinePlatform = () => {
  const [activeUseCase, setActiveUseCase] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-red-500/10" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <FadeIn delay={100}>
            <Link 
              to="/industries/healthcare" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8 group"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Healthcare Solutions
            </Link>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn delay={200}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                    Precision Medicine
                  </Badge>
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Personalized Medicine 
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Platform</span>
                </h1>
              </FadeIn>

              <FadeIn delay={400}>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Transform patient care with AI-powered personalized medicine solutions that analyze genetic 
                  and medical data to create customized treatment plans, enabling precision healthcare delivery 
                  and improved patient outcomes.
                </p>
              </FadeIn>

              <FadeIn delay={500}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-xl text-lg font-semibold">
                    <Dna className="w-5 h-5 mr-2" />
                    Explore Precision Medicine
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-xl text-lg">
                    View Clinical Demo
                    <ExternalLinkIcon className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </FadeIn>
            </div>

            <div className="hidden lg:block">
              <FadeIn delay={600}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
                  <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { icon: Dna, label: "Genomics", value: "AI-Driven", color: "text-purple-400" },
                        { icon: Target, label: "Precision", value: "90%+", color: "text-pink-400" },
                        { icon: Heart, label: "Outcomes", value: "Better", color: "text-red-400" },
                        { icon: Shield, label: "Secure", value: "HIPAA", color: "text-green-400" }
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
                Platform Capabilities
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Advanced Personalized Medicine Features
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Our platform combines genomic analysis, artificial intelligence, and clinical expertise to deliver 
                truly personalized healthcare solutions that improve patient outcomes and treatment effectiveness.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <SlideIn key={feature.title} direction="up" delay={index * 150}>
                <AnimatedCard className="p-8 h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="text-purple-400">
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
                Clinical Applications & Specialties
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Discover how personalized medicine transforms treatment across various medical specialties and conditions
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <SlideIn key={useCase.title} direction="up" delay={index * 200}>
                <div
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeUseCase === index
                      ? 'bg-purple-500/10 border-purple-500/50'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                  onClick={() => setActiveUseCase(index)}
                >
                  <h3 className="text-xl font-semibold mb-4 text-white">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm text-purple-400 font-medium">Clinical Results:</p>
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
                Transformative Patient Outcomes
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Experience measurable improvements in treatment effectiveness, patient safety, and clinical outcomes 
                through personalized medicine approaches
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <SlideIn key={benefit.title} direction="up" delay={index * 200}>
                <AnimatedCard className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
                    <div className="text-purple-400">
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

      {/* Genomic Analysis Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
        <div className="container mx-auto max-w-6xl">
          <FadeIn delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Advanced Genomic Analysis Capabilities
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Our platform analyzes comprehensive genomic data to unlock personalized treatment insights
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Whole Genome Sequencing", description: "Complete genetic profile analysis", icon: Dna },
              { name: "Pharmacogenomics", description: "Drug-gene interaction analysis", icon: Target },
              { name: "Disease Risk Assessment", description: "Genetic predisposition evaluation", icon: BarChart3 },
              { name: "Treatment Response Prediction", description: "Therapy outcome forecasting", icon: Activity }
            ].map((capability, index) => (
              <FadeIn key={capability.name} delay={400 + index * 100}>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                    <capability.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{capability.name}</h3>
                  <p className="text-sm text-gray-400">{capability.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy & Ethics Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <FadeIn delay={200}>
            <div className="text-center mb-12">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Genetic Privacy & Ethical Standards
              </h2>
              <p className="text-gray-300 text-lg">
                Protecting patient genetic information with the highest standards of privacy, security, and ethical practice
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { title: "GINA Compliant", description: "Full compliance with Genetic Information Nondiscrimination Act" },
                { title: "Encrypted Genomic Data", description: "Advanced encryption for genetic information and analysis results" },
                { title: "Ethical AI Standards", description: "Responsible AI development following bioethics principles" }
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-red-500/10" />
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <FadeIn delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Pioneer Personalized Medicine?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Transform patient care with precision medicine solutions tailored to your organization's 
              clinical needs and patient populations.
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-xl text-lg font-semibold">
                <Heart className="w-5 h-5 mr-2" />
                Launch Precision Medicine
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-xl text-lg">
                Schedule Clinical Consultation
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

export default PersonalizedMedicinePlatform;