"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import data from "@/data";

export default function ProjectDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = Number(params.id);

  const project = data.projects.projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl mb-4">Project not found</h1>
        <Button onClick={() => router.push("/#projects")}>
          <ArrowLeft size={16} className="mr-2" />
          Back to Projects
        </Button>
      </div>
    );
  }

  const features = [
    "User authentication and authorization",
    "Responsive design for all devices",
    "Real-time data synchronization",
    "Modern UI with smooth animations",
    "Optimized performance and SEO",
  ];

  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
  ];

  return (
    <div className="w-full min-h-screen">
      <div className="container py-12 px-4 md:px-12">
        <div className="mb-8">
          <button
            onClick={() => router.push("/#projects")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            Back
          </button>
          <div className="text-sm text-muted-foreground">
            Projects <span className="mx-2">&gt;</span> {project.title}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild variant="default" size="lg">
                <Link
                  href={project.previewLink}
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <Github size={18} />
                  View Code
                </Link>
              </Button>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-muted border rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-8 h-fit">
            <div className="relative aspect-video rounded-xl overflow-hidden border bg-muted shadow-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary-foreground flex items-center justify-center text-sm mt-1">
                  {index + 1}
                </span>
                <span className="text-muted-foreground text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
