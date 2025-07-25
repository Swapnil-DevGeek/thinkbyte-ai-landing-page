import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon, CheckCircle2, TrendingUp, Clock, Target, Award, Zap } from "lucide-react";
import { FadeIn } from "@/components/magicui/fade-in";
import { SlideIn } from "@/components/magicui/slide-in";

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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + showcaseProjects.length) % showcaseProjects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentProject = showcaseProjects[currentIndex];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.08),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <FadeIn delay={0} duration={600}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6">
              <CheckCircle2 className="h-4 w-4" />
              AI Solutions we have built for our clients
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Transforming Industries with AI Innovation
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              Discover how our AI solutions have delivered measurable impact across diverse industries, 
              from healthcare to architecture and beyond.
            </p>
          </div>
        </FadeIn>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Carousel Content */}
          <div className="relative bg-neutral-900/30 rounded-3xl border border-neutral-800 backdrop-blur-sm overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${currentProject.gradient} transition-all duration-700`}></div>
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12 min-h-[600px]">
              {/* Left Content */}
              <div className="flex flex-col justify-center space-y-6">
                {/* Category Badge */}
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-violet-500/20 text-violet-300 border-0">
                    {currentProject.category}
                  </Badge>
                  <div className="h-1 w-1 bg-neutral-600 rounded-full"></div>
                  <span className="text-sm text-neutral-400">Case Study</span>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-3">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {currentProject.title}
                  </h3>
                  <p className="text-lg text-violet-200 font-medium">
                    {currentProject.subtitle}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-neutral-300 text-lg leading-relaxed">
                  {currentProject.summary}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {currentProject.metrics.map((metric, i) => {
                    const IconComponent = metric.icon;
                    return (
                      <div key={i} className="flex flex-col items-center p-4 rounded-xl bg-neutral-800/40 border border-neutral-700/50">
                        <IconComponent className="h-6 w-6 text-violet-400 mb-2" />
                        <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                        <div className="text-xs text-neutral-400 text-center">{metric.label}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Testimonial */}
                <div className="bg-neutral-800/50 rounded-2xl p-6 border border-neutral-700/50">
                  <blockquote className="text-neutral-200 italic mb-4 leading-relaxed">
                    "{currentProject.testimonial.quote}"
                  </blockquote>
                  <div className="text-sm text-violet-300 font-medium">
                    — {currentProject.testimonial.author}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to={`/work/${currentProject.id}`}>
                    <Button 
                      size="lg" 
                      className="w-full sm:w-auto bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                    >
                      View Case Study
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  
                </div>
              </div>

              {/* Right Content - Image */}
              <div className="relative flex items-center justify-center">
                <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-neutral-800/50 border border-neutral-700/50">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent"></div>
                  
                  {/* Floating UI Elements */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/20 text-green-300 text-sm font-medium rounded-full border border-green-500/30">
                    <CheckCircle2 className="h-3.5 w-3.5 mr-1 inline" />
                    Live Project
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Navigation Arrows */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800/50 border border-neutral-700 hover:bg-neutral-700/50 transition-all duration-300 text-neutral-400 hover:text-white"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-600 hover:bg-violet-700 transition-all duration-300 text-white"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex items-center gap-3">
              {showcaseProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-violet-500 scale-125"
                      : "bg-neutral-600 hover:bg-neutral-500"
                  }`}
                />
              ))}
            </div>

            {/* Know More Link */}
            <Link to="/work">
              <Button 
                variant="link" 
                className="text-violet-400 hover:text-violet-300 font-medium group"
              >
                Know more about our work
                <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}