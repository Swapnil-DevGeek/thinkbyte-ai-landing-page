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
  Beaker, 
  Target, 
  BarChart3, 
  Zap, 
  Users, 
  CheckCircle2,
  Microscope,
  Database,
  Brain,
  Activity,
  TrendingUp,
  Clock,
  Shield
} from "lucide-react";

const AcceleratedDrugDiscovery = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-teal-900/20"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 py-32 pt-40 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <FadeIn delay={200}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="text-white">Accelerated</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Drug Discovery
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex items-center justify-center gap-3 mb-8">
                <Beaker className="w-6 h-6 text-purple-400" />
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full px-8 py-3">
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-teal-500/5" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <FadeIn delay={200}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
                Driving Exceptional Growth in Drug Discovery with AI
              </h2>
            </FadeIn>

            <FadeIn delay={400}>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-5xl mx-auto leading-relaxed">
                AI is transforming the drug discovery process, enabling pharmaceutical companies to innovate at an 
                unprecedented pace. Traditional methods are slow, costly, and prone to errors, hindering the ability to develop 
                life-saving treatments efficiently. An AI-powered accelerated drug discovery solution can automate key stages 
                of research, from molecular screening to predictive analytics, drastically reducing time to market and improving 
                accuracy.
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
                  <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                    <div className="space-y-6">
                      {[
                        { 
                          icon: Database, 
                          title: "Initial Integrated Database", 
                          description: "Combines and organizes data for drug discovery.",
                          color: "text-teal-400"
                        },
                        { 
                          icon: Brain, 
                          title: "AI Model", 
                          description: "Trains AI models to predict drug properties.",
                          color: "text-blue-400"
                        },
                        { 
                          icon: BarChart3, 
                          title: "Design Compounds", 
                          description: "Generates compound structures based on the insights by AI Model.",
                          color: "text-green-400"
                        },
                        { 
                          icon: Beaker, 
                          title: "Synthesize Compounds", 
                          description: "Converts the designed compounds into physical molecules for testing.",
                          color: "text-purple-400"
                        },
                        { 
                          icon: CheckCircle2, 
                          title: "Test Compounds", 
                          description: "Evaluates the synthesized compounds for their efficacy & safety.",
                          color: "text-cyan-400"
                        },
                        { 
                          icon: Target, 
                          title: "Clinical Candidates", 
                          description: "Selects compounds for further development as potential drugs.",
                          color: "text-pink-400"
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
                    Accelerating Drug Discovery for a Global Biopharmaceutical Leader
                  </h2>
                  
                  <div className="space-y-6 text-gray-300 leading-relaxed">
                    <p className="text-lg">
                      A global biopharmaceutical company was facing extended timelines and high costs in its drug discovery process, 
                      which delayed the development of critical treatments. We implemented an accelerated drug discovery solution, 
                      focusing on automating molecular screening and predicting drug efficacy using advanced machine learning models.
                    </p>
                    
                    <p className="text-lg">
                      This included integrating AI to assess compound interactions and run virtual simulations for preclinical testing.
                    </p>
                    
                    <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-6 border border-purple-500/20">
                      <p className="text-lg font-medium text-white mb-4">Results:</p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>40% reduction in lead identification time</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>25% increase in the accuracy of drug efficacy predictions</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>Faster progression to clinical trials</span>
                        </li>
                      </ul>
                    </div>
                    
                    <p className="text-lg">
                      The AI solution streamlined their workflows, significantly reduced manual errors, and ensured regulatory 
                      compliance throughout the discovery process, helping the company bring innovative treatments to market 
                      more quickly and efficiently.
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
                  How We Help with End-to-End Accelerated Drug Discovery
                </h2>
              </div>
            </FadeIn>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Proof of Concept (POC)",
                  description: "We provide a customized Proof of Concept to demonstrate how an AI-driven solution can optimize your drug discovery process, utilizing your existing data and research workflows."
                },
                {
                  icon: Zap,
                  title: "Solution Development",
                  description: "We develop a tailored AI solution designed to accelerate each phase of drug discovery, from molecule identification to lead optimization, ensuring faster results with higher accuracy."
                },
                {
                  icon: Database,
                  title: "System Integration",
                  description: "Our team seamlessly integrates AI tools with your current systems, including laboratory information systems and databases, for streamlined drug development workflows."
                },
                {
                  icon: Activity,
                  title: "Performance Monitoring",
                  description: "We continuously monitor and fine-tune the AI solution, ensuring consistent performance improvements in speed, precision, and regulatory compliance."
                },
                {
                  icon: Users,
                  title: "Ongoing Support",
                  description: "We offer comprehensive training and technical support to equip your team with the skills needed to maximize the benefits of AI in drug discovery."
                }
              ].map((service, index) => (
                <SlideIn key={service.title} direction="up" delay={index * 150}>
                  <AnimatedCard className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                      <service.icon className="w-6 h-6 text-purple-400" />
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
                  description: "We implement AI-driven agents that streamline research workflows, enhancing data collection and analysis to support faster drug discovery.",
                  href: "/industries/healthcare/ai-agent",
                  color: "text-blue-400"
                },
                {
                  title: "Intelligent Healthcare Documentation",
                  description: "We build an AI solution that automates documentation processes, ensuring comprehensive and accurate records that facilitate collaboration among research teams.",
                  href: "/industries/healthcare/documentation",
                  color: "text-green-400"
                },
                {
                  title: "Personalized Medicine Platform",
                  description: "We leverage AI to analyze patient data, enabling tailored treatment strategies and optimizing drug candidate selection for better patient outcomes.",
                  href: "/industries/healthcare/personalized-medicine",
                  color: "text-purple-400"
                },
                {
                  title: "Medical Imaging Intelligence",
                  description: "Advanced AI algorithms analyze medical images, providing insights that aid in identifying potential drug targets and improving the efficacy of drug development.",
                  href: "/industries/healthcare/medical-imaging",
                  color: "text-cyan-400"
                },
                {
                  title: "Patient Data Analytics",
                  description: "We utilize AI to extract meaningful insights from patient data, driving informed decisions in drug discovery and accelerating the identification of viable drug candidates."
                },
                {
                  title: "Clinical Decision Support",
                  description: "An AI-powered systems that delivers real-time insights to assist researchers and clinicians in making informed decisions throughout the drug development process."
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-teal-500/10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <FadeIn delay={200}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
                Discover how we can build an AI-driven drug discovery solution 
                that can bring life-saving treatments to market faster.
              </h2>
            </FadeIn>

            <FadeIn delay={400}>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full px-10 py-6 text-xl transition-all duration-300 hover:scale-105">
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
                Contact us to discover how an AI-driven drug discovery solution 
                can accelerate your research processes and improve the efficiency 
                of bringing innovative treatments to market.
              </h2>
            </FadeIn>

            <FadeIn delay={400}>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full px-10 py-6 text-xl transition-all duration-300 hover:scale-105">
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

export default AcceleratedDrugDiscovery;