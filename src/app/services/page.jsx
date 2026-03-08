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
      title: "Word Conversion Service",
      icon: FileJson,
      description: "From XML, HTML, Word, and PPT to complex databases, we transform documents into clean, usable formats ready for any platform.",
      features: [
        "XML/HTML/Word/PPT Transformation",
        "Translation-Ready Outputs",
        "OCR Expertise (Scanned to Editable)",
        "Tailored DTD Solutions",
        "Web Publication Prep"
      ],
      benefit: "Clarity & Consistency."
    },
    {
      title: "Financial Publishing",
      icon: BarChart3,
      description: "Specialized typesetting for financial documentation, handling recreation projects at scale with precision and efficiency.",
      features: [
        "Versatility at Scale",
        "Streamlined Workflow",
        "Custom Template Development",
        "SEC-EDGAR Compliance",
        "10-K, 10-Q & Proxy Statements"
      ],
      benefit: "Polished & Professional."
    },
    {
      title: "Language Services",
      icon: Globe2,
      description: "Multilingual typesetting and DTP services ensuring cultural and linguistic precision through collaboration with specialists.",
      features: [
        "Multilingual Expertise",
        "30+ Foreign Languages",
        "Collaborative Accuracy",
        "Source Recreation",
        "Graphic Localization"
      ],
      benefit: "Linguistic Precision."
    },
    {
      title: "Graphics Services",
      icon: PenTool,
      description: "Enhancing and optimizing visual content with creativity. End-to-end artwork solutions from retouching to brand identity.",
      features: [
        "Image Retouch & Cut-Outs",
        "Re-labeling & Brand Consistency",
        "Cover Designs (Books/Reports)",
        "Marketing Collateral",
        "Brand Identity (Logos/Cards)"
      ],
      benefit: "Powerful Visual Assets."
    },
    {
      title: "PDF Accessibility",
      icon: CheckCircle2,
      description: "Ensuring your digital documents meet global accessibility standards (WCAG/Section 508) for inclusive communication.",
      features: [
        "Document Tagging",
        "Screen Reader Optimization",
        "Compliance Validation",
        "Accessible Forms",
        "Alt-Text Implementation"
      ],
      benefit: "Universal Accessibility."
    },
    {
      title: "Data Conversion",
      icon: Zap,
      description: "Seamless transformation of content across diverse formats, maintaining integrity and structure for future-proof data.",
      features: [
        "Legacy Data Migration",
        "DTD/Schema Creation",
        "Database Population",
        "Automated Extraction",
        "Quality Assurance"
      ],
      benefit: "Seamless Transformation."
    }
  ];

  const reasons = [
    {
      title: "Versatility",
      desc: "A wide spectrum of services under one roof."
    },
    {
      title: "Quality",
      desc: "Outputs aligned with client requirements and industry standards."
    },
    {
      title: "Efficiency",
      desc: "Streamlined processes for quick, reliable delivery."
    },
    {
      title: "Customization",
      desc: "Tailored designs that match your brand and vision."
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

      {/* Why Choose Us Section */}
      <section className="py-32 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-black text-zinc-900 dark:text-white uppercase leading-tight">Why Clients <br /> Choose <span className="text-brand-orange italic">StrokeLine.</span></h2>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
              {reasons.map((reason, i) => (
                <div key={i} className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-orange">{reason.title}</h4>
                  <p className="text-lg text-zinc-500 font-medium">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
