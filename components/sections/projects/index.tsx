"use client";
import React, { useRef } from "react";
import Image from "next/image";

import ProjectCard from "./project-card";
import useCurSection from "@/hooks/use-cur-section";
import data from "@/data";

export default function ProjectsSection() {
  const ref = useRef(null);
  useCurSection(ref, 0.1);
  return (
    <div ref={ref} id="projects" className="w-full py-20 px-4 md:px-12 container my-20">
      <div className="text-center mb-16">
        <Image className="absolute -top-2 left-1/2 -translate-x-1/2 -z-10 text-transparent opacity-20 w-full max-w-4xl h-auto object-cover" src="/svgs/grid.svg" alt="grid image" width={0} height={0} />
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-gradient-primary">{"//"}</span> Recent Projects
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">{data.projects.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.projects.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
