import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon, CheckCircle2, ArrowRightIcon, StarIcon, ExternalLinkIcon, SearchIcon, BrainIcon, UsersIcon, FileTextIcon } from "lucide-react";
import { FadeIn } from "@/components/magicui/fade-in";
import { SlideIn } from "@/components/magicui/slide-in";
import { AnimatedCard } from "@/components/magicui/animated-card";

// Updated project data with new content
const projects = [
  {
    id: "seo-agent",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
    title: "SEO Agent",
    subtitle: "AI-Powered SEO Automation for Businesses",
    outcome: "Boost organic traffic up to 300%",
    summary: "We built an AI SEO automation solution using advanced machine learning and natural language processing to automate keyword research, content creation, and optimization strategies, eliminating manual SEO tasks and freeing businesses to focus on core operations.",
    tags: ["SEO", "AI Automation", "Content Marketing"],
    gradient: "from-blue-600/20 via-cyan-500/10 to-transparent"
  },
  {
    id: "dementia-care",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center",
    title: "Dementia Care Platform",
    subtitle: "AI-Powered Dementia Care Platform",
    outcome: "Improve patient outcomes by up to 85%",
    summary: "We built an AI-driven dementia care solution using machine learning, emotion recognition, and personalized care algorithms to automate patient monitoring, caregiver support, and activity recommendations, enabling families and healthcare providers to deliver comprehensive, individualized care for people with dementia.",
    tags: ["Healthcare", "AI", "Patient Care"],
    gradient: "from-purple-600/20 via-pink-500/10 to-transparent"
  },
  {
    id: "recruitment-agent",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center",
    title: "Recruitment Agent",
    subtitle: "AI-Powered Recruitment Management System",
    outcome: "Reduce hiring time by up to 75%",
    summary: "We built an intelligent recruitment automation solution using multi-agent AI architecture and natural language processing to automate job posting, candidate screening, and interview management, eliminating manual recruitment tasks and enabling hiring managers to focus on strategic decision-making and candidate evaluation.",
    tags: ["HR", "Recruitment", "AI Automation"],
    gradient: "from-green-600/20 via-emerald-500/10 to-transparent"
  }
];

// Client logos from the provided data
const clientLogos = [
  { src: 'https://i0.wp.com/thinkbyte.ai/wp-content/uploads/2025/01/SuperK-New-Logo-red-1.png?w=780&ssl=1', alt: 'SuperK' },
  { src: 'https://i0.wp.com/thinkbyte.ai/wp-content/uploads/2025/01/3-1-6.png?w=3000&ssl=1', alt: 'Iira' },
  { src: 'https://thinkbyte.ai/wp-content/uploads/2025/01/4-1-2.png', alt: 'Samaro' },
  { src: 'https://thinkbyte.ai/wp-content/uploads/2025/01/10-4.png', alt: 'Lustral Water' },
  { src: 'https://thinkbyte.ai/wp-content/uploads/2025/01/2-2-1.png', alt: 'Millet Maagic' },
  { src: 'https://thinkbyte.ai/wp-content/uploads/2025/01/6-1-3.png', alt: 'ISTTM Business School' },
  { src: 'https://thinkbyte.ai/wp-content/uploads/2025/01/8-1.png', alt: 'ZigRidez' },
  { src: 'https://thinkbyte.ai/wp-content/uploads/2025/01/5-1-1.png', alt: 'Good Deeds' },
  { src: 'https://thinkbyte.ai/wp-content/uploads/2025/01/7-1-6.png', alt: 'Anvayaa' },
];

// Simplified FAQ data
const faqs = [
  {
    question: "How fast can you launch a POC?",
    answer: "Most proofs-of-concept ship in 4 weeks, including data ingestion, model fine-tuning, and a clickable UI. We follow an agile sprint methodology to ensure rapid delivery without compromising quality.",
    icon: "⚡️"
  },
  {
    question: "What industries do you specialize in?",
    answer: "We focus on retail, mobility, manufacturing, healthcare, and BFSI, with dedicated solution blueprints for each domain. Our team has deep expertise in sector-specific regulations and workflows.",
    icon: "🏭"
  },
  {
    question: "How do you ensure AI model accuracy?",
    answer: "We implement rigorous testing protocols, continuous monitoring, and human-in-the-loop validation. Every model goes through extensive A/B testing before production deployment.",
    icon: "🎯"
  },
  {
    question: "What's your approach to data security?",
    answer: "Enterprise-grade security with SOC 2 compliance, end-to-end encryption, and zero-trust architecture. Your data never leaves your infrastructure without explicit permission.",
    icon: "🔒"
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive support packages including model retraining, performance monitoring, feature updates, and 24/7 technical support.",
    icon: "🛠️"
  },
  {
    question: "What's the typical ROI timeline?",
    answer: "Most clients see measurable ROI within 3-6 months of deployment, with full payback typically achieved in 12-18 months depending on the use case complexity.",
    icon: "📈"
  }
];

export default function Work() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-blue-900/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto">
          <FadeIn delay={0} duration={800}>
            <div className="text-center mb-16 md:mb-24">
              <h1 className="text-4xl md:text-5xl lg:text-6xl py-2 font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
                AI Solutions We've Engineered
              </h1>
              <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                Transforming ambitious ideas into production-ready AI systems that deliver measurable business impact across industries
              </p>
            </div>
          </FadeIn>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <FadeIn key={idx} delay={200 + idx * 100} duration={600}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        {/* Background with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <FadeIn delay={0} duration={600}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6">
                <StarIcon className="h-4 w-4" />
                Trusted by Industry Leaders
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Trusted by Growth-Minded Brands
              </h2>
              <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                We've delivered impactful AI solutions for innovative companies worldwide, 
                helping them achieve breakthrough results and competitive advantages
              </p>
            </div>
          </FadeIn>

          {/* Stats Section */}
          <FadeIn delay={200} duration={600}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-neutral-400">Projects Delivered</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">95%</div>
                <div className="text-neutral-400">Client Satisfaction</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">12+</div>
                <div className="text-neutral-400">Industries Served</div>
              </div>
            </div>
          </FadeIn>

          {/* Client Logos Grid */}
          <SlideIn direction="up" delay={400} duration={800}>
            <div className="relative">
              {/* Grid background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-800/20 to-transparent rounded-3xl"></div>
              
              <div className="relative p-6 rounded-3xl bg-neutral-900/30 border border-neutral-800 backdrop-blur-sm">
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8 md:gap-12 items-center justify-items-center">
                  {clientLogos.map((logo, idx) => (
                    <div
                      key={idx}
                      className="group relative w-full h-24 md:h-28 flex items-center justify-center transition-all duration-500"
                    >
                      {/* Hover effect background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="relative max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 filter brightness-0 invert group-hover:filter-none"
                      />
                      
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SlideIn>

          {/* Additional trust indicators */}
          <FadeIn delay={600} duration={400}>
            <div className="text-center mt-12 space-y-4">
              <div className="flex items-center justify-center gap-8 text-sm text-neutral-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span>SOC 2 Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span>24/7 Support</span>
                </div>
              </div>
              <span className="inline-block px-6 py-3 rounded-full bg-neutral-900/50 border border-neutral-800 text-sm text-neutral-400 backdrop-blur-sm">
                +20 more trusted partners worldwide
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Enhanced gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 via-transparent to-cyan-500/30"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-pink-500/20 via-transparent to-violet-500/20"></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-30"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-cyan-400/20 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-400/15 rounded-full blur-md animate-ping"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <FadeIn delay={0} duration={600}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to 10× your AI velocity?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our engineers plug in where your roadmap stalls—delivering production-ready AI in{" "}
              <span className="font-semibold text-yellow-300">90 days or less</span>.
            </p>
            <Button
              size="lg"
              className="px-8 py-6 text-lg rounded-full bg-white text-black hover:bg-gray-100 font-semibold shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105"
            >
              Book a discovery call <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0} duration={600}>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-neutral-400 text-lg">
                Everything you need to know about working with us
              </p>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <FadeIn key={idx} delay={100 + idx * 100} duration={600}>
                <AnimatedCard className="group bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:border-neutral-700">
                  <button
                    className="w-full text-left px-8 py-6 flex items-center justify-between hover:bg-neutral-800/30 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-neutral-800/30 group-hover:to-neutral-700/20"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <div className="flex items-center gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-violet-500/30 flex items-center justify-center text-2xl">
                        {faq.icon}
                      </div>
                      <span className="font-semibold text-lg text-white group-hover:text-violet-200 transition-colors duration-300">
                        {faq.question}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ChevronDownIcon
                        className={`w-6 h-6 text-neutral-400 transition-all duration-300 ${
                          openFaq === idx ? 'rotate-180 text-violet-400' : 'group-hover:text-violet-300'
                        }`}
                      />
                    </div>
                  </button>

                  {openFaq === idx && (
                    <SlideIn direction="down" duration={400}>
                      <div className="px-8 pb-8">
                        <div className="pl-18">
                          <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-6"></div>
                          <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                            {faq.answer}
                          </p>
                          <Button
                            variant="link"
                            size="sm"
                            className="text-violet-400 hover:text-violet-300 p-0 h-auto font-medium text-base group"
                          >
                            Talk to an expert 
                            <ExternalLinkIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                          </Button>
                        </div>
                      </div>
                    </SlideIn>
                  )}
                </AnimatedCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
}

// Project Card Component
interface ProjectCardProps {
  project: typeof projects[0];
  featured?: boolean;
}

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Link to={`/work/${project.id}`}>
      <AnimatedCard className="group relative overflow-hidden bg-neutral-900/50 backdrop-blur border border-neutral-800 hover:border-neutral-600 transition-all duration-500 rounded-xl shadow-lg hover:shadow-xl cursor-pointer h-[600px]">
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

        {/* Image */}
        <div className="relative h-72 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent"></div>
          
          {/* Hover overlay with external link icon */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex items-center gap-2 text-white font-medium">
              <span>View Case Study</span>
              <ExternalLinkIcon className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6 flex flex-col h-full">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50 border-0"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h3 className="font-bold mb-2 text-white group-hover:text-violet-200 transition-colors text-xl">
            {project.title}
          </h3>

          {/* Subtitle */}
          <p className="text-sm text-neutral-400 mb-3">
            {project.subtitle}
          </p>

          {/* Outcome Badge */}
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm font-medium mb-3 border border-green-500/30">
            <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
            {project.outcome}
          </div>

          {/* Summary */}
          <p className="text-neutral-400 leading-relaxed mb-6 flex-grow text-sm">
            {project.summary}
          </p>

          {/* Spacer to push content to top */}
          <div className="mt-auto"></div>
        </div>

        {/* Hover Effect Shadow */}
        <div className="absolute inset-0 shadow-[0_20px_60px_-20px_rgba(137,101,255,0.35)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </AnimatedCard>
    </Link>
  );
}
