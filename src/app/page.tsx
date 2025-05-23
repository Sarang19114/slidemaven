"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Presentation,
  Sparkles,
  Wand2,
  Zap,
  ArrowUpRight,
  Play,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { Cover } from "@/components/ui/cover";
import { Spotlight } from "@/components/ui/spotlight-new";

export default function LandingPage() {
  const words = ["Rewired", "Turbocharged", "Reimagined", "Revolutionized"];
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white selection:bg-white selection:text-black"
    >
      {/* Background Patterns */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.03] to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/[0.08]">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute inset-0 rotate-45 scale-0 bg-white transition-transform duration-300 group-hover:scale-100" />
              <Presentation className="h-6 w-6 text-white relative transition-transform duration-300 group-hover:scale-110" />
            </div>
            <span className="font-bold text-xl tracking-tight">SlideMaven</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="hover:text-gray-300 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="hover:text-gray-300 transition-colors"
            >
              How it Works
            </Link>
            <Link
              href="#pricing"
              className="hover:text-gray-300 transition-colors"
            >
              Pricing
            </Link>
            <Button
              asChild
              variant="outline"
              className="border-white/25 text-white hover:border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <Link href={"/dashboard"}>Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <Spotlight />
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] mt-4">
              Your Presentations
              <br />
              <FlipWords words={words} />
              <span className="block mt-2 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                with AI-Driven Design at <Cover>Lightning Speed</Cover>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Fast-track your presentations with AI—polished, professional, and
              ready to impress!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg border-white/25 text-white hover:border-white hover:bg-white hover:text-black transition-all duration-300 group"
              >
                <Link href={"/dashboard"}>Start Creating</Link>
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="h-14 px-8 text-lg text-white hover:bg-white/10 group"
              >
                <Play className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                Watch Demo
              </Button>
            </div>
          </motion.div>

          {/* Floating Mockup */}
          <motion.div
            style={{ y }}
            className="mt-16 relative max-w-4xl mx-auto"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/30 via-yellow-500/30 to-yellow-300/30 rounded-lg blur-md" />
<Image
  src="/Hero.png"
  width={1200}
  height={200}
  alt="SlideMaven Interface"
  className="relative rounded-lg border border-yellow-400 shadow-[0_0_15px_rgba(255,215,0,0.6)]"
/>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.03] to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to create professional presentations
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="group relative rounded-xl border-2 border-yellow-400/60 shadow-2xl transition-all duration-300 ease-out hover:shadow-yellow-400/50"
              >
                <Card className="p-8 bg-white/[0.05] border border-white/10 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-lg relative overflow-hidden rounded-xl">
                  {/* Glowing gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                  {/* Icon with hover scale effect */}
                  <feature.icon className="h-12 w-12 text-yellow-300 mb-6 transition-transform duration-300 group-hover:scale-110" />

                  {/* Title & Description */}
                  <h3 className="text-xl font-semibold mb-3 text-yellow-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Create presentations in three simple steps
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative group"
              >
                <div className="mb-8">
                  <div className="relative inline-block">
                    {/* Glowing background effect */}
                    <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />

                    {/* Number container with golden border */}
                    <div className="w-20 h-20 bg-white/[0.03] rounded-full flex items-center justify-center border-2 border-yellow-400/60 shadow-lg relative transition-all duration-300 ease-out group-hover:scale-105 group-hover:rotate-2 group-hover:shadow-yellow-400/50">
                      <span className="text-3xl font-bold bg-gradient-to-b from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card content with hover tilt effect */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="border-2 border-yellow-400/60 p-6 rounded-lg bg-black/30 shadow-lg transition-all duration-300 ease-out group-hover:shadow-yellow-400/50"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-yellow-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 relative">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] to-transparent" />

        <div className="container mx-auto px-4 relative">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Flexible Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits you best.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Yearly Plan (Golden) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-12 bg-yellow-900/[0.1] border-2 border-yellow-400/70 relative overflow-hidden group rounded-xl shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative text-center mb-8">
                  <h3 className="text-2xl font-bold text-yellow-300 mb-4">
                    Yearly
                  </h3>
                  <div className="mb-6">
                    <span className="text-6xl font-bold bg-gradient-to-b from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                      ₹999
                    </span>
                    <span className="text-gray-400 ml-2">/year</span>
                  </div>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full h-14 text-lg border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black transition-all duration-300"
                  >
                    Get Started <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <div className="space-y-5">
                  {premiumFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-300 group/item"
                    >
                      <CheckCircle className="h-5 w-5 text-yellow-300 mr-3 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Monthly Plan (Silver) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-12 bg-gray-900/[0.1] border-2 border-gray-400/70 relative overflow-hidden group rounded-xl shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-300 mb-4">
                    Monthly
                  </h3>
                  <div className="mb-6">
                    <span className="text-6xl font-bold bg-gradient-to-b from-gray-300 to-gray-500 bg-clip-text text-transparent">
                      ₹99
                    </span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full h-14 text-lg border-gray-400 text-gray-300 hover:bg-gray-400 hover:text-black transition-all duration-300"
                  >
                    Get Started <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <div className="space-y-5">
                  {premiumFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className={`flex items-center group/item ${
                        index >= 2
                          ? "text-gray-500 line-through opacity-50"
                          : "text-gray-300"
                      }`}
                    >
                      <CheckCircle
                        className={`h-5 w-5 mr-3 flex-shrink-0 transition-transform duration-300 ${
                          index >= 2
                            ? "text-gray-500 opacity-50"
                            : "text-gray-300 group-hover/item:scale-110"
                        }`}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 relative">
        {/* Soft Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

        <div className="container mx-auto px-4 relative">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join thousands of satisfied users
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 bg-white/[0.05] border border-white/10 rounded-xl shadow-lg backdrop-blur-lg transition-all duration-300 hover:shadow-2xl hover:border-white/20 hover:scale-[1.02] relative group">
                  {/* Subtle Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/[0.3] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    {/* Testimonial Content */}
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed transition-colors duration-300 group-hover:text-white">
                      {testimonial.content}
                    </p>

                    {/* User Info */}
                    <div className="flex items-center">
                      <div className="relative">
                        {/* Hover Effect on Image */}
                        <div className="absolute inset-0 bg-white/20 rounded-full blur transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={100}
                          height={100}
                          className="rounded-full relative transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
                        />
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.05] to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Create Turbocharged Presentations?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join thousands of users who are already creating W
              presentations with AI
            </p>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg border-white/25 text-white hover:border-white hover:bg-white hover:text-black transition-all duration-300 group"
            >
              Get Started Now
              <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/10 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <Link href="/" className="flex items-center space-x-2 group mb-6">
                <div className="relative">
                  <div className="absolute inset-0 rotate-45 scale-0 bg-white transition-transform duration-300 group-hover:scale-100" />
                  <Presentation className="h-6 w-6 text-white relative transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="font-bold text-xl tracking-tight">
                  SlideMaven
                </span>
              </Link>
              <p className="text-gray-400">
                Create turbocharged presentations with the power of AI
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Templates
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} SlideMaven. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    title: "AI Content Generation",
    description:
      "Generate professional content and layouts automatically with our advanced AI",
    icon: Sparkles,
  },
  {
    title: "Smart Templates",
    description:
      "Choose from hundreds of AI-optimized templates for any presentation need",
    icon: Presentation,
  },
  {
    title: "Real-time Collaboration",
    description:
      "Work together with your team in real-time with smart collaboration features",
    icon: Wand2,
  },
  {
    title: "Instant Design",
    description: "Transform your ideas into visually stunning slides instantly",
    icon: Zap,
  },
  {
    title: "Custom Branding",
    description:
      "Maintain brand consistency with custom colors, fonts, and logos",
    icon: Presentation,
  },
  {
    title: "Export Anywhere",
    description:
      "Export your presentations in multiple formats for any platform",
    icon: ArrowRight,
  },
];

const steps = [
  {
    title: "Input Your Content",
    description:
      "Simply enter your topic or upload your content, and let our AI understand your needs",
  },
  {
    title: "AI Generation",
    description:
      "Our AI automatically creates professional slides with optimal layout and design",
  },
  {
    title: "Customize & Export",
    description:
      "Fine-tune your presentation and export it in your preferred format",
  },
];

const premiumFeatures = [
  "Unlimited AI-generated presentations",
  "Access to all premium templates",
  "Advanced AI content generation",
  "Custom branding and themes",
  "Real-time collaboration",
  "Priority support",
  "Export in all formats",
  "Analytics and insights",
  "API access",
  "99.9% uptime SLA",
];

const testimonials = [
  {
    content:
      "SlideMaven has revolutionized how we create presentations. What used to take hours now takes minutes!",
    name: "Tejas Chauhan",
    role: "CTO",
    avatar: "/Tejas.png",
  },
  {
    content:
      "SlideMaven's AI is a game-changer. I can now focus on my core business and let the AI handle the presentation.",
    name: "Ruqayya Shah",
    role: "CMO",
    avatar: "/Ruqayya1.png",
  },
  {
    content:
      "As a startup founder, SlideMaven has saved me countless hours in creating investor presentations.",
    name: "Sarang Rastogi",
    role: "CEO",
    avatar: "/Sarang.png",
  },
  {
    content:
      "SlideMaven's templates are a game-changer. I can now focus on the content and let the AI handle the design.",
    name: "Akshat Jain",
    role: "Business Owner", 
    avatar: "/Akshat.png",
  },
  {
    content:
      "SlideMaven has been a lifesaver. I can now focus on my core business and let the AI handle the presentation.",
    name: "Samyak Jain",
    role: "Video Editor",
    avatar: "/Samyak.png",
  },
  {
    content:
      "The AI-powered features are incredible. The quality of the presentations is consistently impressive.",
    name: "Yash Chaturvedi",
    role: "Financer",
    avatar: "/Yash.png",
  },
];
