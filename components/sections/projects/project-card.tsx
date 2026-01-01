"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type props = {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    githubLink: string;
    previewLink: string;
  };
};

export default function ProjectCard({ project }: props) {
  return (
    <div className="group w-full rounded-xl bg-muted border overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
      <div className="relative h-[240px] overflow-hidden">
        <Image
          className="size-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-3 capitalize">{project.title}</h2>
        <p className="text-muted-foreground text-sm mb-6 line-clamp-3">{project.description}</p>
        <div className="flex gap-3">
          <Button asChild variant="secondary" size="sm" className="flex-1">
            <Link href={project.previewLink} target="_blank" className="flex items-center gap-2">
              <ExternalLink size={14} />
              Live Demo
            </Link>
          </Button>
          <Button asChild variant="ghost" size="sm" className="flex-1 bg-muted-foreground/10">
            <Link href={`/projects/${project.id}`}>
              Details
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
