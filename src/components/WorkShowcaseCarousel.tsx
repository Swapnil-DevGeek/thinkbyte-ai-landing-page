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
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % showcaseProjects.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + showcaseProjects.length) % showcaseProjects.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const currentProject = showcaseProjects[currentIndex];

  return (
    <section className="relative h-screen overflow-hidden z-10 flex flex-col">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.12),transparent_60%)]"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col gap-y-6 py-6">
        <div className="flex items-end justify-between pt-6 pb-4">
          {/* Left - Header Content */}
          
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-3 backdrop-blur-sm">
              <CheckCircle2 className="h-3 w-3 text-violet-400" />
              AI Solutions Built for Clients
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              <span className="bg-gradient-to-r from-white via-violet-100 to-white bg-clip-text text-transparent">
                Transforming Industries
              </span>
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ml-2">
                with AI
              </span>
            </h2>
          </div>

          {/* Right - Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className="group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-neutral-800/60 to-neutral-900/60 border border-neutral-700/50 hover:border-violet-500/30 backdrop-blur-sm transition-all duration-300 text-neutral-400 hover:text-white hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <ChevronLeftIcon className="h-4 w-4 md:h-5 md:w-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className="group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 text-white hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-violet-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <ChevronRightIcon className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Main Carousel Container - Fit content */}
        <div className="relative group flex-1 min-h-0 overflow-hidden">
          {/* Main Carousel Content */}
          <div className="relative bg-gradient-to-br from-neutral-900/40 via-neutral-800/30 to-neutral-900/40 rounded-2xl md:rounded-3xl border border-neutral-700/50 backdrop-blur-xl overflow-hidden shadow-2xl h-full">
            <div className={`absolute inset-0 bg-gradient-to-br ${currentProject.gradient} transition-all duration-1000 ease-out`}></div>
            
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent"></div>
            
            <div className="relative w-full h-full overflow-hidden">
              {/* Sliding Container */}
              <div 
                className="flex h-full transition-transform duration-600 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {showcaseProjects.map((project, index) => (
                  <div key={project.id} className="w-full flex-shrink-0 h-full">
                    <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-0 h-full">
                      {/* Left Content - 3 columns */}
                      <div className="lg:col-span-3 flex flex-col justify-center p-4 md:p-6 lg:p-8 space-y-3 md:space-y-4">
                        {/* Category Badge */}
                        <div className="flex items-center gap-3 mb-1">
                          <Badge variant="secondary" className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-300 border-0 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                            {project.category}
                          </Badge>
                          <div className="h-1.5 w-1.5 bg-violet-400/60 rounded-full"></div>
                          <span className="text-sm text-neutral-400 font-medium">Case Study</span>
                        </div>

                        {/* Title & Subtitle */}
                        <div className="space-y-2 text-left">
                          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                            <span className="bg-gradient-to-r from-white via-violet-100 to-white bg-clip-text text-transparent">
                              {project.title}
                            </span>
                          </h3>
                          <p className="text-base md:text-lg lg:text-xl text-violet-200/90 font-medium leading-relaxed">
                            {project.subtitle}
                          </p>
                        </div>

                        {/* Summary */}
                        <p className="text-neutral-300 text-left text-sm md:text-base lg:text-lg leading-relaxed font-light max-w-2xl">
                          {project.summary}
                        </p>

                        {/* Metrics */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                          {project.metrics.map((metric, i) => {
                            const IconComponent = metric.icon;
                            return (
                              <div key={i} className="group/metric flex flex-col items-center p-3 md:p-4 rounded-xl bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700/40 backdrop-blur-sm hover:border-violet-500/30 transition-all duration-300 hover:scale-105">
                                <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-violet-400 mb-2 group-hover/metric:text-violet-300 transition-colors" />
                                <div className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-1">{metric.value}</div>
                                <div className="text-xs text-neutral-400 text-center font-medium">{metric.label}</div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Testimonial */}
                        <div className="bg-gradient-to-br from-neutral-800/60 to-neutral-900/60 rounded-xl p-4 md:p-5 border border-neutral-700/40 backdrop-blur-sm">
                          <blockquote className="text-neutral-200 italic mb-3 leading-relaxed text-sm md:text-base font-light">
                            "{project.testimonial.quote}"
                          </blockquote>
                          <div className="text-sm text-violet-300 font-semibold">
                            — {project.testimonial.author}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                          <Link to={`/work/${project.id}`} className="w-full sm:w-auto">
                            <Button 
                              size="sm" 
                              className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/25 border-0"
                            >
                              View Case Study
                              <ArrowRightIcon className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>

                      {/* Right Content - Image - 2 columns */}
                      <div className="lg:col-span-2 relative flex items-center justify-center p-4 md:p-6 lg:p-8">
                        <div className="relative w-full h-full min-h-[250px] rounded-xl md:rounded-2xl overflow-hidden bg-neutral-800/30 border border-neutral-700/40 shadow-2xl group/image">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-all duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-transparent to-transparent"></div>
                          
                          {/* Enhanced Floating UI Elements */}
                          <div className="absolute top-3 right-3 md:top-4 md:right-4 px-3 py-1.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 text-xs font-semibold rounded-full border border-green-500/30 backdrop-blur-sm">
                            <CheckCircle2 className="h-3 w-3 mr-1 inline" />
                            Live Project
                          </div>
                          
                          {/* Subtle overlay pattern */}
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Center CTA */}
        <div className="flex justify-center py-4 ">
          <Link to="/work">
            <Button 
              variant="ghost" 
              className="group text-violet-400 hover:text-violet-300 font-medium px-6 py-2.5 rounded-full border border-violet-500/20 hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-300 text-sm md:text-base"
            >
              Explore All Projects
              <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}