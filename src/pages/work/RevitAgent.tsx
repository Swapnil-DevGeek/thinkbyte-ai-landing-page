import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, CheckCircle2, ArrowRightIcon, ExternalLinkIcon, Building2Icon, SearchIcon, CloudIcon, LayersIcon, MessageSquareIcon, CpuIcon, DatabaseIcon, ZapIcon } from "lucide-react";
import { FadeIn } from "@/components/magicui/fade-in";
import { SlideIn } from "@/components/magicui/slide-in";
import { AnimatedCard } from "@/components/magicui/animated-card";

const features = [
  {
    icon: <SearchIcon className="h-6 w-6" />,
    title: "Smart Detail Library with AI-Powered Search",
    description: "AEC professionals can now search and filter architectural details using advanced hybrid search with visual similarity ranking, metadata tags, and role-based views — retrieving details 50% faster than traditional folder-based systems."
  },
  {
    icon: <Building2Icon className="h-6 w-6" />,
    title: "Native Revit Plugin for Seamless Placement",
    description: "Our custom Revit plugin integrates into the user's native Revit workflow, allowing placement of cloud-staged details into active projects. Detail downloads, sheet exports, and staging are handled directly inside Revit for maximum efficiency."
  },
  {
    icon: <CpuIcon className="h-6 w-6" />,
    title: "AI-Driven Duplicate Detection & Grouping",
    description: "ThinkByte's AI engine clusters similar details, detects duplicates using vector embeddings, and assists in marking 'typical' details — eliminating manual sorting and repetitive uploads across your project portfolio."
  },
  {
    icon: <CloudIcon className="h-6 w-6" />,
    title: "Centralized Cloud Hub",
    description: "A secure web platform built with Next.js + Supabase gives BIM managers full control: upload, organize, preview, compare, and approve details across sheets and projects, with version tracking and permission controls."
  }
];

const benefits = [
  {
    icon: <ZapIcon className="h-8 w-8" />,
    title: "50% Faster Detail Retrieval",
    description: "With AI-powered search, visual thumbnails, and smart metadata filters, teams can instantly locate the right detail without digging through messy folders. Visual comparisons and staging workflows make reuse effortless, slashing retrieval time in half."
  },
  {
    icon: <LayersIcon className="h-8 w-8" />,
    title: "30% Reduction in Design Redundancy",
    description: "The platform identifies duplicate or similar details using vector embeddings and groups them automatically. This prevents repetitive uploads, encourages reuse, and ensures consistent detailing across projects — saving time and reducing clutter."
  },
  {
    icon: <DatabaseIcon className="h-8 w-8" />,
    title: "Autodesk ACC & BIM 360 Integration",
    description: "Built to work seamlessly with Autodesk tools, the system integrates with Revit and BIM 360 for real-time detail sync, placement, and export. PDF and DWG downloads happen in one click, directly from your design environment."
  }
];

const similarSolutions = [
  {
    title: "AutoCAD & Revit Project Knowledge Base",
    description: "An AI-enhanced, searchable library that centralizes reusable project elements like schedules, sections, and drafting views. Built for mid-to-large AEC firms, it eliminates scattered assets and ensures teams work from a unified source of truth — improving consistency and saving time.",
    icon: <Building2Icon className="h-6 w-6" />
  },
  {
    title: "AI-Based Submittal Management System",
    description: "This system automates the entire submittal process by organizing documents, checking compliance, flagging missing elements, and tagging content using AI. It helps teams reduce errors, accelerate documentation workflows, and gain clarity on submittal readiness at every stage.",
    icon: <CheckCircle2 className="h-6 w-6" />
  },
  {
    title: "Revit + AI Assistant for Detail Suggestions",
    description: "A context-aware AI agent embedded within Revit that intelligently recommends views, families, or sheets based on the current design task. It acts like a smart assistant inside the design environment — boosting productivity, promoting reuse, and guiding teams toward faster, better decisions.",
    icon: <CpuIcon className="h-6 w-6" />
  }
];

export default function RevitAgent() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-yellow-900/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto">
          <FadeIn delay={0} duration={800}>
            <div className="mb-8">
              <Link 
                to="/work" 
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors mb-8"
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm font-medium mb-6">
                  <Building2Icon className="h-4 w-4" />
                  Architecture & Engineering
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl py-2 font-bold mb-6 bg-gradient-to-r from-white via-orange-100 to-yellow-200 bg-clip-text text-transparent leading-tight">
                  Revit Agent
                </h1>
                <h2 className="text-xl md:text-2xl text-orange-300 mb-6">
                  Cloud Details Management Platform
                </h2>
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8">
                  AI-first platform to eliminate redundant design work by 30% and accelerate architectural workflows by 50%. ThinkByte partnered with PKC Consulting to build an AI-powered detail management system for AEC firms that transforms how architectural details are stored, retrieved, and reused across projects.
                </p>
                
                {/* Key Metrics */}
                <div className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-lg font-semibold border border-green-500/30">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  Eliminate redundant design work by 30%
                </div>
              </div>
            </FadeIn>

            {/* Hero Image */}
            <SlideIn direction="up" delay={400} duration={600} className="flex-1">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-orange-600/20 via-yellow-500/10 to-transparent border border-orange-500/20">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop&crop=center"
                  alt="Revit Agent Dashboard"
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
                Advanced AI capabilities that revolutionize architectural detail management
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <FadeIn key={idx} delay={200 + idx * 100} duration={600}>
                <AnimatedCard className="group bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-500 h-full">
                  <div className="flex items-start gap-6 h-full">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-yellow-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:text-orange-300 transition-colors">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-200 transition-colors">
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
                Real results that transform architectural workflows and productivity
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
            <AnimatedCard className="bg-gradient-to-br from-orange-600/10 via-yellow-500/5 to-transparent border border-orange-500/20 rounded-3xl p-8 md:p-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 mx-auto mb-6">
                  <MessageSquareIcon className="h-8 w-8" />
                </div>
                <blockquote className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
                  "With ThinkByte's cloud-Revit integration, our team no longer wastes time hunting for reusable details. The AI-first approach to grouping, metadata tagging, and staging has turned detail management into a strategic advantage."
                </blockquote>
                <div className="text-orange-300 font-semibold">
                  — Partner, PKC Consulting
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
                Similar Solutions We Can Build For You
              </h2>
              <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                Explore other AI-powered AEC solutions that can transform your workflows
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
        <div className="absolute inset-0 bg-gradient-to-r from-orange-700 via-yellow-600 to-orange-700"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <FadeIn delay={0} duration={600}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Want to Modernize Your AEC Workflows?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's build your own cloud-connected, AI-powered plugin for Autodesk and revolutionize your architectural workflows.
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