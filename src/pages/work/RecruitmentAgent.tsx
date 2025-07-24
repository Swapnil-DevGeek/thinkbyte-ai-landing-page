import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, CheckCircle2, ArrowRightIcon, ExternalLinkIcon, UsersIcon, MessageSquareIcon, CalendarIcon, MicIcon, FileTextIcon, BarChart3Icon, UserCheckIcon, BriefcaseIcon } from "lucide-react";
import { FadeIn } from "@/components/magicui/fade-in";
import { SlideIn } from "@/components/magicui/slide-in";
import { AnimatedCard } from "@/components/magicui/animated-card";

const features = [
  {
    icon: <MicIcon className="h-6 w-6" />,
    title: "Intelligent Job Creation & Voice-Powered Setup",
    description: "Our system employs a sophisticated New Job Agent that offers flexible job requisition creation through chat or voice interfaces. The voice agent conducts structured interviews with hiring managers to gather job requirements (title, location, type, etc.), generates optimized job descriptions, and automatically creates pre-screening questions tailored to each role's specific requirements."
  },
  {
    icon: <UsersIcon className="h-6 w-6" />,
    title: "Automated Candidate Pipeline & Interview Management",
    description: "We utilize an advanced Candidate Pipeline Agent that continuously monitors job postings and proactively engages hiring managers with candidate updates. The system provides stage-wise candidate tracking (pre-screening, multiple interview rounds) with detailed candidate profiles including resumes, AI evaluation summaries, and complete interview transcripts for informed decision-making."
  },
  {
    icon: <BriefcaseIcon className="h-6 w-6" />,
    title: "Smart VMS Integration & Multi-Round Interview Orchestration",
    description: "Our AI system seamlessly integrates with Vendor Management Software to automatically post jobs and synchronize candidate data. The platform manages complex interview workflows with customizable round setups (technical, coding, cultural fit) and automated scheduling, ensuring streamlined recruitment processes from application to final selection."
  },
  {
    icon: <UserCheckIcon className="h-6 w-6" />,
    title: "AI-Powered Pre-Screening & Candidate Evaluation",
    description: "We provide intelligent pre-screening capabilities where AI agents conduct standardized interviews using job-specific questions generated during job creation. The system evaluates candidates consistently, generates comprehensive assessment summaries, and maintains detailed interaction records to support hiring manager decisions throughout the selection process."
  }
];

const benefits = [
  {
    icon: <CalendarIcon className="h-8 w-8" />,
    title: "Reduced Hiring Time by up to 75%",
    description: "The solution automated job posting, candidate screening, and interview coordination processes, significantly accelerating time-to-hire while maintaining quality standards. Hiring managers can make faster, data-driven decisions with comprehensive candidate insights and automated workflow management."
  },
  {
    icon: <UserCheckIcon className="h-8 w-8" />,
    title: "Improved Candidate Quality by 85%",
    description: "Our AI-powered pre-screening and evaluation system ensures consistent candidate assessment using standardized criteria and job-specific questioning. This results in higher-quality candidate pipelines, better role-fit matching, and reduced interviewer bias in the selection process."
  },
  {
    icon: <BarChart3Icon className="h-8 w-8" />,
    title: "Enhanced Recruitment Efficiency by 90%",
    description: "By leveraging multi-agent coordination and automated task management, the platform streamlined recruitment operations, reduced manual administrative work, and optimized resource allocation, allowing hiring teams to focus on strategic candidate engagement and company culture assessment."
  }
];

const similarSolutions = [
  {
    title: "AI-Powered Employee Onboarding Platform",
    description: "We can develop an intelligent onboarding system that automates new hire documentation, training scheduling, and integration processes. The platform uses AI agents to guide new employees through company policies, assign role-specific training modules, and monitor progress while providing managers with real-time onboarding analytics and completion tracking.",
    icon: <UsersIcon className="h-6 w-6" />
  },
  {
    title: "Intelligent Performance Management System",
    description: "An AI-driven performance evaluation platform that continuously monitors employee productivity, goal achievement, and skill development. The system provides automated feedback collection, generates personalized development recommendations, and assists managers in conducting fair, data-driven performance reviews with predictive insights for career planning.",
    icon: <BarChart3Icon className="h-6 w-6" />
  },
  {
    title: "Smart Workforce Planning & Analytics",
    description: "We can integrate AI technology that analyzes workforce data, predicts hiring needs, and optimizes team composition based on project requirements and skill gaps. The platform provides strategic insights for talent acquisition, succession planning, and resource allocation while maintaining compliance with employment regulations and diversity goals.",
    icon: <BriefcaseIcon className="h-6 w-6" />
  }
];

export default function RecruitmentAgent() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-emerald-900/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto">
          <FadeIn delay={0} duration={800}>
            <div className="mb-8">
              <Link 
                to="/work" 
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors mb-8"
              >
                <ArrowLeftIcon className="h-4 w-4" />
                Back to Projects
              </Link>
            </div>
          </FadeIn>

          {/* Hero Content with Flex Layout */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <FadeIn delay={200} duration={600} className="flex-1">
              <div className="text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-sm font-medium mb-6">
                  <UsersIcon className="h-4 w-4" />
                  HR & Recruitment
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl py-2 font-bold mb-6 bg-gradient-to-r from-white via-green-100 to-emerald-200 bg-clip-text text-transparent leading-tight">
                  Recruitment Agent
                </h1>
                <h2 className="text-xl md:text-2xl text-green-300 mb-6">
                  AI-Powered Recruitment Management System
                </h2>
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8">
                  We built an intelligent recruitment automation solution using multi-agent AI architecture and natural language processing to automate job posting, candidate screening, and interview management, eliminating manual recruitment tasks and enabling hiring managers to focus on strategic decision-making and candidate evaluation.
                </p>
                
                {/* Key Metrics */}
                <div className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-lg font-semibold border border-green-500/30">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  Reduce hiring time by up to 75%
                </div>
              </div>
            </FadeIn>

            {/* Hero Image */}
            <SlideIn direction="up" delay={400} duration={600} className="flex-1">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-green-600/20 via-emerald-500/10 to-transparent border border-green-500/20">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop&crop=center"
                  alt="Recruitment Agent Dashboard"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn delay={0} duration={600}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Key Features
              </h2>
              <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                Advanced AI capabilities that revolutionize your recruitment process
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <FadeIn key={idx} delay={200 + idx * 100} duration={600}>
                <AnimatedCard className="group bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-2xl p-8 hover:border-green-500/30 transition-all duration-500 h-full">
                  <div className="flex items-start gap-6 h-full">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center text-green-400 group-hover:text-green-300 transition-colors">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-200 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </AnimatedCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black"></div>
        <div className="relative max-w-7xl mx-auto">
          <FadeIn delay={0} duration={600}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Measurable Benefits
              </h2>
              <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                Real results that transform your recruitment efficiency
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <FadeIn key={idx} delay={200 + idx * 100} duration={600}>
                <AnimatedCard className="group bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-2xl p-8 text-center hover:border-green-500/30 transition-all duration-500 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center text-green-400 mx-auto mb-6 group-hover:text-green-300 transition-colors">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-200 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </AnimatedCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0} duration={600}>
            <AnimatedCard className="bg-gradient-to-br from-green-600/10 via-emerald-500/5 to-transparent border border-green-500/20 rounded-3xl p-8 md:p-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 mx-auto mb-6">
                  <MessageSquareIcon className="h-8 w-8" />
                </div>
                <blockquote className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
                  "The AI recruitment agents have revolutionized our hiring process by automating time-consuming tasks while providing deeper candidate insights. The voice-powered job creation and intelligent pre-screening have significantly reduced our time-to-hire while improving candidate quality. The platform's ability to manage complex interview workflows has made our recruitment process more efficient and data-driven."
                </blockquote>
                <div className="text-green-300 font-semibold">
                  - CEO Recruitment Agency
                </div>
              </div>
            </AnimatedCard>
          </FadeIn>
        </div>
      </section>

      {/* Similar Solutions Section */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn delay={0} duration={600}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Similar Solutions We Can Build
              </h2>
              <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                Explore other AI-powered HR solutions that can transform your business
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {similarSolutions.map((solution, idx) => (
              <FadeIn key={idx} delay={200 + idx * 100} duration={600}>
                <AnimatedCard className="group bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-2xl p-8 hover:border-violet-500/30 transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-6 group-hover:text-violet-300 transition-colors">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-violet-200 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed mb-6 flex-grow">
                    {solution.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-violet-500/30 text-violet-400 hover:bg-violet-500/10 hover:border-violet-500/50"
                  >
                    Get Started
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </AnimatedCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden mb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-emerald-600 to-green-700"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <FadeIn delay={0} duration={600}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Looking to incorporate AI in your recruitment process?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Talk to our AI consultants now and discover how we can transform your hiring process with cutting-edge AI solutions.
            </p>
            <Button
              size="lg"
              className="px-8 py-6 text-lg rounded-full bg-white text-black hover:bg-gray-100 font-semibold shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105"
            >
              Schedule a Demo <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
} 