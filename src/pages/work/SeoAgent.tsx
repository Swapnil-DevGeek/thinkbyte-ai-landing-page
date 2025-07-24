import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, CheckCircle2, ArrowRightIcon, ExternalLinkIcon, SearchIcon, TrendingUpIcon, BarChart3Icon, FileTextIcon, UsersIcon, MessageSquareIcon, CalendarIcon } from "lucide-react";
import { FadeIn } from "@/components/magicui/fade-in";
import { SlideIn } from "@/components/magicui/slide-in";
import { AnimatedCard } from "@/components/magicui/animated-card";

const features = [
  {
    icon: <SearchIcon className="h-6 w-6" />,
    title: "Advanced Keyword Research & Clustering",
    description: "Our system employs sophisticated AI algorithms to conduct deep keyword research, organizing results into categories, subcategories, and tightly-knit keyword clusters. This ensures that businesses target the most relevant and high-impact keywords aligned with their specific goals and market positioning."
  },
  {
    icon: <TrendingUpIcon className="h-6 w-6" />,
    title: "Intelligent Competitor Analysis & Monitoring",
    description: "We utilize state-of-the-art web scraping and analysis models to continuously scan competitor websites, identifying keyword rankings, content formats, and high-performing assets. This enables businesses to discover untapped opportunities and stay ahead of the competition with data-driven insights."
  },
  {
    icon: <FileTextIcon className="h-6 w-6" />,
    title: "Automated Content Generation & Optimization",
    description: "Our AI system creates high-quality, SEO-optimized content tailored to your brand's voice and style. By converting outlines, keyword sets, or topics into comprehensive drafts, the system automatically enriches content with SERP-friendly elements like FAQs, internal links, and summaries for maximum search visibility."
  },
  {
    icon: <BarChart3Icon className="h-6 w-6" />,
    title: "Real-Time Performance Tracking & Analytics",
    description: "We provide comprehensive monitoring of domain, category, and page-level performance with AI-powered analytics. The system tracks expected vs. actual outcomes, flags underperforming areas, and provides actionable recommendations to ensure continuous improvement and goal alignment."
  }
];

const benefits = [
  {
    icon: <TrendingUpIcon className="h-8 w-8" />,
    title: "Increased Organic Traffic by up to 300%",
    description: "The solution automated complex SEO processes including keyword research, content creation, and optimization strategies, resulting in significant organic traffic growth and improved search engine rankings for businesses across various industries."
  },
  {
    icon: <CalendarIcon className="h-8 w-8" />,
    title: "Reduced SEO Management Time by 80%",
    description: "Our AI-powered system streamlined content planning, competitor analysis, and performance monitoring, reducing the time spent on manual SEO tasks by up to 80%, allowing businesses to focus on strategic growth initiatives."
  },
  {
    icon: <BarChart3Icon className="h-8 w-8" />,
    title: "Improved Content Performance by 250%",
    description: "By leveraging AI-driven content optimization and SERP analysis, businesses experienced improved content engagement, higher click-through rates, and better search rankings, leading to enhanced overall digital presence and brand visibility."
  }
];

const similarSolutions = [
  {
    title: "AI-Powered Social Media Management",
    description: "We can develop an intelligent social media automation system that creates, schedules, and optimizes content across multiple platforms. The AI analyzes audience engagement patterns, trending topics, and competitor strategies to maximize reach, engagement, and brand awareness while maintaining consistent brand voice.",
    icon: <UsersIcon className="h-6 w-6" />
  },
  {
    title: "Automated Email Marketing Optimization",
    description: "An AI-driven email marketing system that personalizes content, optimizes send times, and segments audiences based on behavior patterns. By automating A/B testing, subject line optimization, and content personalization, businesses can achieve higher open rates, click-through rates, and conversion rates.",
    icon: <MessageSquareIcon className="h-6 w-6" />
  },
  {
    title: "Intelligent Lead Scoring & Conversion",
    description: "We can integrate AI technology that analyzes visitor behavior, demographic data, and engagement patterns to score and prioritize leads automatically. This system helps sales teams focus on high-potential prospects, improves conversion rates, and optimizes the entire sales funnel through predictive analytics.",
    icon: <TrendingUpIcon className="h-6 w-6" />
  }
];

export default function SeoAgent() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto">
          <FadeIn delay={0} duration={800}>
            <div className="mb-8">
              <Link 
                to="/work" 
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-6">
                  <SearchIcon className="h-4 w-4" />
                  SEO & Content Marketing
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl py-2 font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent leading-tight">
                  SEO Agent
                </h1>
                <h2 className="text-xl md:text-2xl text-blue-300 mb-6">
                  AI-Powered SEO Automation for Businesses
                </h2>
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8">
                  We built an AI SEO automation solution using advanced machine learning and natural language processing to automate keyword research, content creation, and optimization strategies, eliminating manual SEO tasks and freeing businesses to focus on core operations.
                </p>
                
                {/* Key Metrics */}
                <div className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-lg font-semibold border border-green-500/30">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  Boost organic traffic up to 300%
                </div>
              </div>
            </FadeIn>

            {/* Hero Image */}
            <SlideIn direction="up" delay={400} duration={600} className="flex-1">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-transparent border border-blue-500/20">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&crop=center"
                  alt="SEO Agent Dashboard"
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
                Advanced AI capabilities that revolutionize your SEO strategy
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <FadeIn key={idx} delay={200 + idx * 100} duration={600}>
                <AnimatedCard className="group bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-500 h-full">
                  <div className="flex items-start gap-6 h-full">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">
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
                Real results that transform your business performance
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
            <AnimatedCard className="bg-gradient-to-br from-blue-600/10 via-cyan-500/5 to-transparent border border-blue-500/20 rounded-3xl p-8 md:p-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mx-auto mb-6">
                  <MessageSquareIcon className="h-8 w-8" />
                </div>
                <blockquote className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
                  "The automation of SEO processes has significantly improved our online visibility and saved us countless hours of manual work. Seobyte's AI agents and ability to customize the solution to our business needs have made them an invaluable partner in our digital growth strategy."
                </blockquote>
                <div className="text-blue-300 font-semibold">
                  - CTO, HealthTech Company
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
                Explore other AI-powered solutions that can transform your business
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-700"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <FadeIn delay={0} duration={600}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Looking to incorporate AI in your SEO strategy?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Talk to our AI consultants now and discover how we can transform your digital presence with cutting-edge AI solutions.
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