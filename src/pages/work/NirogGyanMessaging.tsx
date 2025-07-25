import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, CheckCircle2, ArrowRightIcon, ExternalLinkIcon, MessageSquareIcon, HeartIcon, UsersIcon, BrainIcon, TrendingUpIcon, ShieldIcon, ZapIcon, BarChart3Icon } from "lucide-react";
import { FadeIn } from "@/components/magicui/fade-in";
import { SlideIn } from "@/components/magicui/slide-in";
import { AnimatedCard } from "@/components/magicui/animated-card";

const features = [
  {
    icon: <BrainIcon className="h-6 w-6" />,
    title: "AI-Driven Message Personalization Engine",
    description: "The system uses a patient's test results, medical history, and risk profile to generate highly personalized messages. Whether it's a low Vitamin D level or elevated cholesterol, each message includes targeted insights, clear context, and practical next steps — making it feel like it was written just for them."
  },
  {
    icon: <MessageSquareIcon className="h-6 w-6" />,
    title: "Dynamic Tone Customization",
    description: "Healthcare providers can customize the tone of each message — choosing between empathetic or professional styles that match their brand voice. This ensures the communication feels human and appropriate, especially when addressing sensitive results or motivating patients to take action."
  },
  {
    icon: <UsersIcon className="h-6 w-6" />,
    title: "Cohort-Based Personalization",
    description: "Messages are crafted based on the patient's test timeline, abnormality levels, and health risk category. Someone who tested recently receives a gentle nudge, while those with older results or higher risk get a more urgent, action-oriented message. This tailored approach ensures that every communication feels timely, relevant, and more likely to prompt a response."
  },
  {
    icon: <ZapIcon className="h-6 w-6" />,
    title: "Scalable and Plug-and-Play",
    description: "Built for scalability, the platform seamlessly integrates with existing healthcare systems to manage thousands of patients without disrupting workflows. By leveraging ChatGPT, it generates personalized messages at scale — enabling deeper engagement without adding to the operational burden of care teams."
  }
];

const benefits = [
  {
    icon: <TrendingUpIcon className="h-8 w-8" />,
    title: "Increased Patient Engagement",
    description: "By addressing both the clinical findings and the emotional context of each patient, the messages felt more human and relatable. This approach encouraged patients to pay attention to their health reports, act on recommendations, and feel supported — leading to higher response rates and better engagement."
  },
  {
    icon: <HeartIcon className="h-8 w-8" />,
    title: "Higher Retention Rates",
    description: "The platform used AI-driven personalization and risk-based segmentation to send meaningful follow-ups. These timely nudges reminded patients to return for follow-up tests or consultations, improving care continuity and significantly boosting repeat visits."
  },
  {
    icon: <BarChart3Icon className="h-8 w-8" />,
    title: "Intelligent Automation at Scale",
    description: "What previously required manual effort from doctors or copywriters is now handled instantly by the AI system. Each message adapts to the patient's profile — with smart tone control, personalized CTAs, and contextual logic — enabling personalized care communication at scale, without extra ops overhead."
  }
];

const similarSolutions = [
  {
    title: "Hospital Discharge Follow-Up Engine",
    description: "An automated messaging system that checks in with recently discharged patients, offers recovery tips, and reminds them of upcoming follow-ups. This helps reduce readmission rates, improves recovery outcomes, and ensures patients feel supported beyond the hospital stay.",
    icon: <ShieldIcon className="h-6 w-6" />
  },
  {
    title: "Lifestyle Change Motivation Bot for Chronic Conditions",
    description: "An AI-powered assistant that nudges patients managing chronic conditions like diabetes, hypertension, or obesity. It sends personalized tips, progress alerts, and motivational content tailored to their health journey — helping them stay consistent and empowered.",
    icon: <HeartIcon className="h-6 w-6" />
  },
  {
    title: "Health Risk Prediction + Action Framework",
    description: "A smart model that analyzes patient data to identify individuals at risk of deterioration or dropout. It proactively triggers targeted messages with embedded CTAs, encouraging preventive action and early intervention before issues escalate.",
    icon: <BrainIcon className="h-6 w-6" />
  }
];

export default function NirogGyanMessaging() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-cyan-900/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto">
          <FadeIn delay={0} duration={800}>
            <div className="mb-8">
              <Link 
                to="/work" 
                className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors mb-8"
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-sm font-medium mb-6">
                  <MessageSquareIcon className="h-4 w-4" />
                  Healthcare & Patient Engagement
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl py-2 font-bold mb-6 bg-gradient-to-r from-white via-teal-100 to-cyan-200 bg-clip-text text-transparent leading-tight">
                  NirogGyan Messaging App
                </h1>
                <h2 className="text-xl md:text-2xl text-teal-300 mb-6">
                  Personalized Messaging App for Healthcare
                </h2>
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8">
                  In the diagnostic healthcare space, retention is a huge challenge — fewer than 25% of patients return after their first test. We built an AI-powered messaging engine that speaks directly to the patient's condition, emotional context, and health data to dramatically improve engagement and retention rates.
                </p>
                
                {/* Key Metrics */}
                <div className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-lg font-semibold border border-green-500/30">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  Boosted repeat visits targeting patient context
                </div>
              </div>
            </FadeIn>

            {/* Hero Image */}
            <SlideIn direction="up" delay={400} duration={600} className="flex-1">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-teal-600/20 via-cyan-500/10 to-transparent border border-teal-500/20">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop&crop=center"
                  alt="NirogGyan Messaging Platform"
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
                Advanced AI capabilities that revolutionize patient communication and engagement
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <FadeIn key={idx} delay={200 + idx * 100} duration={600}>
                <AnimatedCard className="group bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-2xl p-8 hover:border-teal-500/30 transition-all duration-500 h-full">
                  <div className="flex items-start gap-6 h-full">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:text-teal-300 transition-colors">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-200 transition-colors">
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
                Real results that transform patient engagement and healthcare outcomes
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
            <AnimatedCard className="bg-gradient-to-br from-teal-600/10 via-cyan-500/5 to-transparent border border-teal-500/20 rounded-3xl p-8 md:p-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 mx-auto mb-6">
                  <MessageSquareIcon className="h-8 w-8" />
                </div>
                <blockquote className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
                  "This platform changed the way we communicate with patients. Instead of a cold PDF report, we now send a thoughtful, personalized nudge — and the results are showing in our returning patient numbers."
                </blockquote>
                <div className="text-teal-300 font-semibold">
                  — Product Head, Diagnostic Chain
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
                Explore other AI-powered healthcare communication solutions
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
        <div className="absolute inset-0 bg-gradient-to-r from-teal-700 via-cyan-600 to-teal-700"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <FadeIn delay={0} duration={600}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Want to Re-Engage Your Healthcare Customers at Scale?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's build your own intelligent communication engine tailored to your care model and patient needs.
            </p>
            <Button
              size="lg"
              className="px-8 py-6 text-lg rounded-full bg-white text-black hover:bg-gray-100 font-semibold shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105"
            >
              Book a Demo <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}