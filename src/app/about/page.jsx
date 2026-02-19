"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { Users, Target, Rocket, Award, CheckCircle2 } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovative Hallmark",
      description: "Being innovative and adaptive in our services is our hallmark, ensuring we persistently exceed customer expectations."
    },
    {
      icon: Users,
      title: "Assortment of Experts",
      description: "Equipped with an exceptional assortment of experts from several fields specializing in typesetting and language services."
    },
    {
      icon: Rocket,
      title: "Automation Tech",
      description: "Our server-based automation technology platforms and deep workflow understanding are key to our global success."
    }
  ];

  return (
    <main className="min-h-screen mesh-gradient">
      <Navbar />
      
      {/* Editorial Header */}
      <section className="pt-48 pb-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
                <div className="lg:col-span-8 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-orange">Est. 2021</span>
                        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
                            Fastest <br /> <span className="text-gradient italic">Developing.</span>
                        </h1>
                    </motion.div>
                </div>
                <div className="lg:col-span-4 lg:pl-10">
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-zinc-500 font-medium"
                    >
                        Strokeline Design Services Private Limited was founded in 2021 and is one of India&apos;s fastest developing service delivery companies.
                    </motion.p>
                </div>
            </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-10"
                >
                    <div className="space-y-4">
                        <h2 className="text-4xl font-black text-zinc-900 dark:text-white uppercase leading-tight">Adaptive <br /> & <span className="text-brand-orange italic">Innovative.</span></h2>
                        <div className="w-20 h-[1px] bg-brand-orange"></div>
                    </div>
                    <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium italic border-l-2 border-zinc-200 dark:border-zinc-800 pl-8">
                        "In our 2 years of industry experience, we have never failed to exceed our customer expectations, owing to our in-depth knowledge of state-of-the-art technology and affordable solutions."
                    </p>
                    <div className="space-y-6 text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                        <p>
                            We have been persistently equipped with an exceptional assortment of experts from several fields. Our specialty lies in typesetting, Language services, data conversion, and financial typesetting services.
                        </p>
                        <p>
                            Our registered office is located in Vankayalapadu, Andhra Pradesh, India, with delivery centers strategically positioned in Coimbatore and Erode, India.
                        </p>
                    </div>
                </motion.div>
                
                <div className="relative aspect-square rounded-[4rem] bg-zinc-900 overflow-hidden shadow-2xl flex items-center justify-center p-20 text-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-transparent"></div>
                    <div className="relative space-y-8">
                        <Award size={100} className="text-brand-orange mx-auto opacity-50" />
                        <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-none">Hallmark of <br /> Quality</h3>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <SectionTitle 
                subtitle="Why Us"
                title="Boutique Excellence"
                description="Persistent quality and quick turnaround time appreciated by global clients."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-zinc-50 dark:bg-zinc-900 p-12 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 space-y-8 group hover:border-brand-orange/50 transition-colors"
                    >
                        <div className="w-14 h-14 bg-white dark:bg-black rounded-2xl flex items-center justify-center text-brand-orange shadow-lg transition-transform group-hover:-rotate-6">
                            <value.icon size={28} />
                        </div>
                        <h3 className="text-xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">{value.title}</h3>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-medium">
                            {value.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
