import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon, CheckCircle2, TrendingUp, Clock, Target, Award, Zap } from "lucide-react";

// Enhanced project data for carousel
const showcaseProjects = [
  {
    id: "seo-agent",
    title: "SEO Agent",
    subtitle: "AI-Powered SEO Automation for Businesses",
    summary: "Automated keyword research, content creation, and optimization strategies using advanced machine learning and NLP to boost organic traffic by 300%.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&crop=center",
    gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
    category: "Marketing",
    metrics: [
      { label: "Traffic Increase", value: "300%", icon: TrendingUp },
      { label: "Time Saved", value: "80%", icon: Clock },
      { label: "Keywords Ranked", value: "2.5k+", icon: Target }
    ],
    testimonial: {
      quote: "The automation of SEO processes has significantly improved our online visibility and saved us countless hours of manual work.",
      author: "CTO, HealthTech Company"
    }
  },
  {
    id: "revit-agent",
    title: "Revit Agent",
    subtitle: "Cloud Details Management Platform",
    summary: "AI-first platform that eliminates redundant design work by 30% and accelerates architectural workflows by 50% through intelligent detail management.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop&crop=center",
    gradient: "from-orange-600/20 via-yellow-500/10 to-transparent",
    category: "Architecture & Engineering",
    metrics: [
      { label: "Design Redundancy", value: "-30%", icon: Target },
      { label: "Detail Retrieval", value: "50%", icon: Zap },
      { label: "Workflow Speed", value: "50%", icon: TrendingUp }
    ],
    testimonial: {
      quote: "With ThinkByte's cloud-Revit integration, our team no longer wastes time hunting for reusable details. The AI-first approach has turned detail management into a strategic advantage.",
      author: "Partner, PKC Consulting"
    }
  },
  {
    id: "recruitment-agent",
    title: "Recruitment Agent",
    subtitle: "AI-Powered Talent Acquisition Platform",
    summary: "Intelligent recruitment automation that reduces hiring time by 60% and improves candidate quality through AI-driven screening, matching, and engagement.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop&crop=center",
    gradient: "from-green-600/20 via-emerald-500/10 to-transparent",
    category: "HR & Recruitment",
    metrics: [
      { label: "Hiring Time", value: "-60%", icon: Clock },
      { label: "Candidate Quality", value: "+40%", icon: Award },
      { label: "Cost Reduction", value: "50%", icon: TrendingUp }
    ],
    testimonial: {
      quote: "The AI recruitment platform has revolutionized our hiring process. We're finding better candidates faster while reducing our recruitment costs significantly.",
      author: "HR Director, Tech Startup"
    }
  },
  {
    id: "nirog-gyan-messaging",
    title: "NirogGyan Messaging App",
    subtitle: "Personalized Healthcare Messaging",
    summary: "AI-powered messaging engine that speaks directly to patient's condition and emotional context, dramatically improving engagement and retention rates.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop&crop=center",
    gradient: "from-teal-600/20 via-cyan-500/10 to-transparent",
    category: "Healthcare",
    metrics: [
      { label: "Patient Engagement", value: "85%", icon: TrendingUp },
      { label: "Retention Rate", value: "60%", icon: Award },
      { label: "Message Scale", value: "10k+", icon: Zap }
    ],
    testimonial: {
      quote: "This platform changed the way we communicate with patients. Instead of a cold PDF report, we now send thoughtful, personalized nudges.",
      author: "Product Head, Diagnostic Chain"
    }
  },
  {
    id: "dementia-care",
    title: "Dementia Care Platform",
    subtitle: "AI-Powered Patient Care Solution",
    summary: "Advanced dementia care solution using machine learning, emotion recognition, and personalized algorithms to improve patient outcomes by 85%.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop&crop=center",
    gradient: "from-purple-600/20 via-pink-500/10 to-transparent",
    category: "Healthcare",
    metrics: [
      { label: "Care Quality", value: "85%", icon: Award },
      { label: "Caregiver Stress", value: "-70%", icon: TrendingUp },
      { label: "Engagement", value: "90%", icon: Target }
    ],
    testimonial: {
      quote: "ANVAYAA's AI-powered care coordination has transformed how we manage dementia care for our loved ones. The personalized approach has significantly improved patient engagement.",
      author: "CEO, Anvayaa"
    }
  }
];

export default function WorkShowcaseCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + showcaseProjects.length) % showcaseProjects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentProject = showcaseProjects[currentIndex];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden z-10">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.12),transparent_60%)]"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <CheckCircle2 className="h-4 w-4 text-violet-400" />
            AI Solutions we have built for our clients
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-violet-100 to-violet-200 bg-clip-text text-transparent leading-tight">
              Transforming Industries
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              with AI Innovation
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-4xl mx-auto leading-relaxed font-light">
            Discover how our AI solutions have delivered measurable impact across diverse industries, 
            from healthcare to architecture and beyond.
          </p>
        </div>

        {/* Enhanced Carousel Container */}
        <div className="relative group">
          {/* Main Carousel Content */}
          <div className="relative bg-gradient-to-br from-neutral-900/40 via-neutral-800/30 to-neutral-900/40 rounded-3xl border border-neutral-700/50 backdrop-blur-xl overflow-hidden shadow-2xl">
            <div className={`absolute inset-0 bg-gradient-to-br ${currentProject.gradient} transition-all duration-1000 ease-out`}></div>
            
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent"></div>
            
            <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-0 min-h-[600px] md:min-h-[700px] lg:min-h-[650px]">
              {/* Left Content - 3 columns */}
              <div className="lg:col-span-3 flex flex-col justify-center p-6 md:p-8 lg:p-12 xl:p-16 space-y-6 md:space-y-8">
                {/* Category Badge */}
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-300 border-0 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                    {currentProject.category}
                  </Badge>
                  <div className="h-1.5 w-1.5 bg-violet-400/60 rounded-full"></div>
                  <span className="text-sm text-neutral-400 font-medium">Case Study</span>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-white via-violet-100 to-white bg-clip-text text-transparent">
                      {currentProject.title}
                    </span>
                  </h3>
                  <p className="text-lg md:text-xl lg:text-2xl text-violet-200/90 font-medium leading-relaxed">
                    {currentProject.subtitle}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-neutral-300 text-base md:text-lg lg:text-xl leading-relaxed font-light max-w-2xl">
                  {currentProject.summary}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                  {currentProject.metrics.map((metric, i) => {
                    const IconComponent = metric.icon;
                    return (
                      <div key={i} className="group/metric flex flex-col items-center p-4 md:p-5 lg:p-6 rounded-2xl bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700/40 backdrop-blur-sm hover:border-violet-500/30 transition-all duration-300 hover:scale-105">
                        <IconComponent className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-violet-400 mb-2 md:mb-3 group-hover/metric:text-violet-300 transition-colors" />
                        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">{metric.value}</div>
                        <div className="text-xs md:text-xs lg:text-sm text-neutral-400 text-center font-medium">{metric.label}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-br from-neutral-800/60 to-neutral-900/60 rounded-2xl p-5 md:p-6 lg:p-8 border border-neutral-700/40 backdrop-blur-sm">
                  <blockquote className="text-neutral-200 italic mb-4 leading-relaxed text-base md:text-lg font-light">
                    "{currentProject.testimonial.quote}"
                  </blockquote>
                  <div className="text-sm text-violet-300 font-semibold">
                    — {currentProject.testimonial.author}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4">
                  <Link to={`/work/${currentProject.id}`} className="w-full sm:w-auto">
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold px-8 md:px-10 py-3 md:py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/25 border-0"
                    >
                      View Case Study
                      <ArrowRightIcon className="ml-2 md:ml-3 h-4 md:h-5 w-4 md:w-5" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Content - Image - 2 columns */}
              <div className="lg:col-span-2 relative flex items-center justify-center p-6 md:p-8 lg:p-12">
                <div className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[550px] rounded-2xl md:rounded-3xl overflow-hidden bg-neutral-800/30 border border-neutral-700/40 shadow-2xl group/image">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover/image:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-transparent to-transparent"></div>
                  
                  {/* Enhanced Floating UI Elements */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 text-xs md:text-sm font-semibold rounded-full border border-green-500/30 backdrop-blur-sm">
                    <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2 inline" />
                    Live Project
                  </div>
                  
                  {/* Subtle overlay pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Navigation Controls */}
        <div className="flex flex-col gap-6 mt-8 md:mt-12">
          {/* Mobile Layout - Stacked */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            {/* Navigation Controls */}
            <div className="flex items-center justify-center sm:justify-start gap-4 md:gap-6">
              <div className="flex items-center gap-3 md:gap-4">
                <button
                  onClick={prevSlide}
                  className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-neutral-800/60 to-neutral-900/60 border border-neutral-700/50 hover:border-violet-500/30 backdrop-blur-sm transition-all duration-300 text-neutral-400 hover:text-white hover:scale-105"
                  aria-label="Previous slide"
                >
                  <ChevronLeftIcon className="h-5 w-5 md:h-6 md:w-6 group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={nextSlide}
                  className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 text-white hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-violet-500/25"
                  aria-label="Next slide"
                >
                  <ChevronRightIcon className="h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Side - Know More Link */}
            <Link to="/work" className="self-center sm:self-auto">
              <Button 
                variant="ghost" 
                className="group text-violet-400 hover:text-violet-300 font-medium px-4 md:px-6 py-2 md:py-3 rounded-full border border-violet-500/20 hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-300 text-sm md:text-base"
              >
                <span className="hidden sm:inline">Explore All Projects</span>
                <span className="sm:hidden">View All</span>
                <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Enhanced Dot Indicators - Centered */}
          <div className="flex items-center justify-center gap-2">
            {showcaseProjects.map((project, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="group relative"
                aria-label={`Go to ${project.title}`}
              >
                <div className={`w-10 md:w-12 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-violet-500 to-purple-500 shadow-lg shadow-violet-500/25"
                    : "bg-neutral-600 hover:bg-neutral-500 group-hover:scale-110"
                }`}></div>
                
                {/* Tooltip - Hidden on mobile */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-neutral-900 border border-neutral-700 rounded-lg text-xs text-white opacity-0 md:group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10">
                  {project.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}