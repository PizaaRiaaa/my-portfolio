"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

interface ProjectShowcaseProps {
  title: string
  description: string
  image: string
  demoUrl?: string
  githubUrl?: string
  technologies: string[]
}

export function ProjectShowcase({ title, description, image, demoUrl, githubUrl, technologies }: Readonly<ProjectShowcaseProps>) {
  return (
    <motion.div
      className="relative mt-4 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row items-start gap-4">
        {/* Project Image */}
        <motion.div
          className="relative w-full md:w-48 h-32 rounded-lg overflow-hidden flex-shrink-0 border border-[#153B47] transform transition-transform duration-300 group-hover:scale-105"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Image src={image || "/placeholder.svg"} priority alt={title} fill className="object-cover" />
        </motion.div>

        {/* Project Info */}
        <div className="space-y-3 flex-grow">
          <div className="flex items-center gap-2">
            <h4 className="text-white text-lg font-medium">{title}</h4>
            <div className="flex items-center gap-2">
              {demoUrl && (
                <Link
                  href={demoUrl}
                  target="_blank"
                  className="text-[#3D608E] hover:text-[#30535F] transition-colors"
                  title="View Live Demo"
                >
                  <ExternalLink className="w-5 h-5" />
                </Link>
              )}
              {githubUrl && (
                <Link
                  href={githubUrl}
                  target="_blank"
                  className="text-[#3D608E] hover:text-[#30535F] transition-colors"
                  title="View Source Code"
                >
                  <Github className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>
          <p className="text-sm text-gray-300 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="bg-[#153B47]/30 text-[#3D608E] text-xs border-[#153B47] hover:bg-[#153B47]/50"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

