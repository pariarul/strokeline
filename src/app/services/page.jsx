"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { 
  FileJson, 
  BarChart3, 
  Globe2, 
  Layout, 
  Presentation, 
  Palette,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Zap,
  Monitor,
  PenTool,
  Image as ImageIcon
} from "lucide-react";

const Services = () => {
  const allServices = [
    {
      title: "Conversion Service",
      icon: FileJson,
      description: "Fast and cost-effective electronic translation of your data into digitally editable text with 99.98% to 99.99% accuracy.",
      features: ["OCR Extraction", "Word Pagination", "Proofreading Quality Check", "Word formatting"],
      benefit: "Digitally editable results."
    },
    {
      title: "Financial Publishing",
      icon: BarChart3,
      description: "Complete SEC-EDGAR conversion and Financial Typesetting services with full document security and single-source systems.",
      features: ["SEC HTML & Word Output", "Mutual Fund Typesetting", "10-K, 10-Q filing", "Proxy statements"],
      benefit: "Secure SEC compliance."
    },
    {
      title: "Language Localization",
      icon: Globe2,
      description: "Specialized foreign language localization typesetting across 30+ languages using advanced pagination software.",
      features: ["Source recreation", "Graphic localization", "Large Print creation", "Multiple pagination software"],
      benefit: "Global cultural resonance."
    },
    {
      title: "Graphic Design",
      icon: PenTool,
      description: "Crafting visual experiences that captivate and inspire. From branding and identity to print and digital media.",
      features: ["Logo Design", "Branding & Identity", "Marketing Materials", "Portfolio Development"],
      benefit: "Lasting brand impressions."
    },
    {
      title: "PowerPoint Presentation",
      icon: Monitor,
      description: "Transforming ordinary content into impactful visual narratives. Compelling designs that empower your message.",
      features: ["Presentation Design", "Custom Templates", "Data Visualization", "Animation & Multimedia"],
      benefit: "Compelling narratives."
    },
    {
      title: "Art and Design",
      icon: ImageIcon,
      description: "End-to-end graphic and image solutions for books and journals, specializing in concept-based scientific and medical illustrations.",
      features: ["Medical Illustrations", "Redrawing & Relabeling", "Maps & Cartoon Art", "Book & Journal Covers"],
      benefit: "Precision visual solutions."
    }
  ];

  return (
    <main className="min-h-screen mesh-gradient">
      <Navbar />
      
      {/* Impact Header */}
      <section className="pt-48 pb-24 bg-brand-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
            <h2 className="text-[40vw] font-black text-brand-orange absolute -top-20 -left-10 select-none uppercase">Service</h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
            >
                <span className="text-[10px] font-black uppercase tracking-[1em] text-brand-orange">Boutique Portfolio</span>
                <h1 className="text-6xl md:text-[100px] font-black leading-[0.8] tracking-tighter uppercase">
                    Our <br /> <span className="text-gradient">Services.</span>
                </h1>
            </motion.div>
        </div>
      </section>

      {/* Services List - Boutique Column Style */}
      <section className="py-32 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="space-y-24">
                {allServices.map((service, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-12 items-start pb-24 border-b border-zinc-100 dark:border-zinc-900 last:border-0"
                    >
                        <div className="lg:col-span-2 text-brand-orange mb-8 lg:mb-0">
                            <service.icon size={64} strokeWidth={1.5} />
                        </div>
                        <div className="lg:col-span-6 space-y-8">
                            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase leading-none tracking-tight">
                                {service.title}
                            </h2>
                            <p className="text-xl text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed max-w-xl">
                                {service.description}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {service.features.map((f, idx) => (
                                    <span key={idx} className="px-5 py-2 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                                        {f}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-4 lg:text-right pt-8 lg:pt-0">
                            <div className="inline-flex flex-col items-end gap-2">
                                <span className="text-[10px] uppercase font-black tracking-widest text-zinc-400">Core Impact</span>
                                <span className="text-2xl font-black text-brand-orange uppercase leading-none">{service.benefit}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
