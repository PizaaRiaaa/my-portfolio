"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaBootstrap, FaCloud, FaDatabase } from "react-icons/fa"
import { SiTypescript, SiNextdotjs, SiShadcnui, SiTailwindcss, SiChakraui } from "react-icons/si"
import { Database, Framer } from "lucide-react"

export default function TechStack() {
  const skills = [
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "ReactJS", icon: FaReact },
    { name: "NextJS", icon: SiNextdotjs },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Shadcn/UI", icon: SiShadcnui },
    { name: "Chakra UI", icon: SiChakraui },
    { name: "Zustand", icon: FaDatabase },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "TanStack Query", icon: Database },
    { name: "Framer Motion", icon: Framer },
    { name: "Azure", icon: FaCloud },
    { name: "Git", icon: FaGithub },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section>
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-4">
        <div className="text-[#6eb0c6] font-mono text-sm opacity-50">
          <span>{"{"}</span>
          <br />
          &nbsp;&nbsp;"skills": [
        </div>
      </motion.div>

      <motion.div className="flex flex-wrap gap-2 pl-4" variants={container} initial="hidden" animate="show">
        {skills.map((skill) => (
          <motion.div key={skill.name} variants={item}>
            <Badge className="bg-[#153B47] text-gray-100 hover:bg-[#30535F] transition-all duration-300 hover:shadow-glow flex items-center gap-1.5 transform hover:scale-105">
              <skill.icon className="w-4 h-4" />
              {skill.name}
            </Badge>
          </motion.div>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <div className="text-[#30535F] font-mono text-sm opacity-50 mt-4">
          &nbsp;&nbsp;]
          <br />
          <span>{"}"}</span>
        </div>
      </motion.div>
    </section>
  )
}

