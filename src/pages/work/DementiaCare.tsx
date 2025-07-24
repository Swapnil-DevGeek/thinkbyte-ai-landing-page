import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, CheckCircle2, ArrowRightIcon, ExternalLinkIcon, HeartIcon, ActivityIcon, BrainIcon, UsersIcon, MessageSquareIcon, ShieldIcon, ActivitySquareIcon, MonitorIcon } from "lucide-react";
import { FadeIn } from "@/components/magicui/fade-in";
import { SlideIn } from "@/components/magicui/slide-in";
import { AnimatedCard } from "@/components/magicui/animated-card";

const features = [
  {
    icon: <MonitorIcon className="h-6 w-6" />,
    title: "Intelligent Health Monitoring & Personalised Care Coordination",
    description: "Our system employs advanced wearable device integration and movement pattern analysis to continuously monitor vital signs, detect falls, and identify changes in activity patterns. This ensures real-time health tracking and immediate alerts to caregivers, preventing emergencies and maintaining patient safety around the clock."
  },
  {
    icon: <BrainIcon className="h-6 w-6" />,
    title: "AI-Powered Emotion Recognition & Communication",
    description: "We utilize state-of-the-art facial expression analysis and voice tone recognition to understand patient emotional states and communication needs. Combined with Natural Language Processing capabilities, the platform facilitates better interaction between caregivers and patients, ensuring emotional well-being and effective care coordination."
  },
  {
    icon: <ActivityIcon className="h-6 w-6" />,
    title: "Personalized Activity Recommendation Engine",
    description: "Our AI system analyzes individual cognitive assessments, interests, hobbies, and dementia stage to generate tailored activity recommendations. The platform creates personalized care plans that adapt to each patient's cognitive, physical, psychological, and social needs, optimizing therapeutic engagement and quality of life."
  },
  {
    icon: <ActivitySquareIcon className="h-6 w-6" />,
    title: "Comprehensive Care Dashboard",
    description: "We provide an integrated platform that combines caregiver community forums, educational resources, task management, and real-time analytics. The system streamlines care coordination through automated scheduling, memory assistance tools, and smart home device integration for seamless daily living support."
  }
];

const benefits = [
  {
    icon: <HeartIcon className="h-8 w-8" />,
    title: "Improved Patient Care Quality by up to 85%",
    description: "The solution automated personalized care planning, continuous health monitoring, and activity recommendations, resulting in significantly better patient outcomes, reduced behavioral issues, and enhanced quality of life for individuals across all stages of dementia progression."
  },
  {
    icon: <ShieldIcon className="h-8 w-8" />,
    title: "Reduced Caregiver Stress by 70%",
    description: "Our AI-powered platform streamlined care coordination, provided educational resources, and automated routine monitoring tasks, reducing caregiver burden by up to 70% while ensuring comprehensive support through community forums and expert guidance."
  },
  {
    icon: <BrainIcon className="h-8 w-8" />,
    title: "Enhanced Cognitive Engagement by 90%",
    description: "By leveraging AI-driven activity matching and cognitive assessment tools, patients experienced improved engagement in therapeutic activities, better cognitive function maintenance, and more meaningful social interactions, leading to slower cognitive decline progression."
  }
];

const similarSolutions = [
  {
    title: "AI-Powered Elderly Care Management",
    description: "We can develop a comprehensive elderly care platform that monitors daily activities, medication adherence, and health vitals through smart sensors and wearable devices. The system provides family members and healthcare providers with real-time insights, emergency alerts, and personalized care recommendations for aging adults living independently.",
    icon: <UsersIcon className="h-6 w-6" />
  },
  {
    title: "Mental Health Monitoring & Support Platform",
    description: "An AI-driven mental health solution that analyzes behavioral patterns, mood changes, and communication patterns to identify early signs of depression, anxiety, or other mental health conditions. The platform provides personalized therapy recommendations, connects users with mental health professionals, and offers continuous support through AI-powered chatbots.",
    icon: <BrainIcon className="h-6 w-6" />
  },
  {
    title: "Chronic Disease Management System",
    description: "We can integrate AI technology that monitors patients with chronic conditions like diabetes, hypertension, or heart disease through connected medical devices and health apps. The system tracks vital signs, medication compliance, and lifestyle factors to provide predictive health insights and automated care plan adjustments.",
    icon: <ActivityIcon className="h-6 w-6" />
  }
];

export default function DementiaCare() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto">
          <FadeIn delay={0} duration={800}>
            <div className="mb-8">
              <Link 
                to="/work" 
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8"
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
                  <HeartIcon className="h-4 w-4" />
                  Healthcare & Patient Care
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl py-2 font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent leading-tight">
                  Dementia Care Platform
                </h1>
                <h2 className="text-xl md:text-2xl text-purple-300 mb-6">
                  AI-Powered Dementia Care Platform
                </h2>
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8">
                  We built an AI-driven dementia care solution using machine learning, emotion recognition, and personalized care algorithms to automate patient monitoring, caregiver support, and activity recommendations, enabling families and healthcare providers to deliver comprehensive, individualized care for people with dementia.
                </p>
                
                {/* Key Metrics */}
                <div className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-lg font-semibold border border-green-500/30">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  Improve patient outcomes by up to 85%
                </div>
              </div>
            </FadeIn>

            {/* Hero Image */}
            <SlideIn direction="up" delay={400} duration={600} className="flex-1">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600/20 via-pink-500/10 to-transparent border border-purple-500/20">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop&crop=center"
                  alt="Dementia Care Platform"
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
                Advanced AI capabilities that revolutionize dementia care
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <FadeIn key={idx} delay={200 + idx * 100} duration={600}>
                <AnimatedCard className="group bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-500 h-full">
                  <div className="flex items-start gap-6 h-full">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:text-purple-300 transition-colors">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">
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
                Real results that transform patient care and caregiver experience
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
            <AnimatedCard className="bg-gradient-to-br from-purple-600/10 via-pink-500/5 to-transparent border border-purple-500/20 rounded-3xl p-8 md:p-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mx-auto mb-6">
                  <MessageSquareIcon className="h-8 w-8" />
                </div>
                <blockquote className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
                  "ANVAYAA's AI-powered care coordination has transformed how we manage dementia care for our loved ones. The personalized activity recommendations and real-time monitoring have significantly improved patient engagement while reducing our stress as caregivers. The platform's ability to adapt to different stages of dementia has made it an invaluable tool in our care journey."
                </blockquote>
                <div className="text-purple-300 font-semibold">
                  - CEO Anvayaa
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
                Explore other AI-powered healthcare solutions that can transform patient care
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
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <FadeIn delay={0} duration={600}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Looking to incorporate AI in your healthcare platform?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Talk to our AI consultants now and discover how we can transform patient care with cutting-edge AI solutions.
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