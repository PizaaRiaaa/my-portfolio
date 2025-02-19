"use client"

import Link from "next/link"
import { Mail, Phone, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import TechStack from "@/components/TechStack"
import Loading from "@/components/loading"
import { useEffect, useState } from "react"
import { ProjectShowcase } from "@/components/ProjectShowcase"
import { EXPERIENCES } from "@/data/experiences"
import { PERSONAL_PROJECTS } from "@/data/personal-projects"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="min-h-screen bg-[#090F13] text-gray-200 animate-fade-in bg-grain">
      <main className="max-w-full mx-auto flex flex-col lg:flex-row">
        {/* Left Column - Sticky */}
        <div className="lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-[450px] lg:overflow-y-auto bg-[#090F13] flex flex-col">
          <div className="flex-1 p-8 space-y-8">
            {/* Developer Identity Section */}
            <div className="relative">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                {/* Code-like decoration */}
                <div className="text-[#6eb0c6] font-mono text-sm opacity-50">
                  <span>{"{"}</span>
                  <br />
                  &nbsp;&nbsp;"role": "Frontend Developer",
                  <br />
                  &nbsp;&nbsp;"name":
                </div>

                <h1 className="text-4xl font-bold bg-gradient-to-r from-[#3D608E] to-[#286d82] bg-clip-text text-transparent">
                  RIKKI MAE
                  <br />
                  MARTINEZ
                </h1>

                <motion.div
                  className="relative pl-4 border-l-2 border-[#153B47]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-[#30535F] text-sm leading-relaxed">
                    <span className="text-[#3D608E]">const</span> passion =
                    <span className="text-[#30535F]">{' "crafting elegant web experiences"'}</span>;
                  </div>
                </motion.div>

                <div className="text-[#30535F] font-mono text-sm opacity-50">
                  <span>{"}"}</span>
                </div>
              </motion.div>

              {/* Animated cursor */}
              <motion.div
                className="absolute top-0 right-0 w-2 h-4 bg-[#3D608E]"
                animate={{
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </div>

            {/* Tech Stack Section */}
            <TechStack />
          </div>

          {/* Contact Info - Bottom */}
          <div className="p-4 border-t border-[#153B47]/30">
            <div className="flex flex-wrap gap-3 justify-center text-xs text-[#30535F]">
              <a
                href="mailto:mm.rikkimae@gmail.com"
                className="flex items-center gap-1.5 hover:text-[#3D608E] transition-colors"
              >
                <Mail className="w-3 h-3" />
                <span>mm.rikkimae@gmail.com</span>
              </a>
              <a href="tel:+639166992880" className="flex items-center gap-1.5 hover:text-[#3D608E] transition-colors">
                <Phone className="w-3 h-3" />
                <span>+63 9166992880</span>
              </a>
              <Link href="https://github.com/PizaaRiaaa" className="flex items-center gap-1.5 hover:text-[#3D608E] transition-colors">
                <Github className="w-3 h-3" />
                <span>Github</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/rikki-mae-martinez-b09593264"
                className="flex items-center gap-1.5 hover:text-[#3D608E] transition-colors"
              >
                <Linkedin className="w-3 h-3" />
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column - Scrollable */}
        <div className="flex-1 p-8 space-y-12 lg:ml-[450px] w-full">
          {/* Professional Experience Section */}
          <section>
            <h2 className="text-xl font-bold pb-2 mb-8 text-[#3D608E]">
              EXPERIENCE
            </h2>
            <div className="space-y-16">
              {EXPERIENCES.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="border-l-2 border-[#153B47] pl-6">
                    <h3 className="font-semibold text-[#3D608E] text-lg">
                      {exp.title} - {exp.company}
                    </h3>
                    <p className="text-sm text-[#30535F] mt-1">{exp.period}</p>
                    <ul className="list-disc list-inside text-[#30535F] mt-4 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <ProjectShowcase {...exp.project} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Personal Projects Section */}
          <section>
            <h2 className="text-xl font-bold pb-2 mb-8 text-[#3D608E]">PERSONAL PROJECTS</h2>
            <div className="grid gap-8 border-l-2 border-[#153B47] pl-6">
              {PERSONAL_PROJECTS.map((project, index) => (
                <div key={index} className="relative">
                  <ProjectShowcase {...project} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}