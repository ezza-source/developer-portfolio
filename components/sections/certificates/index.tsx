"use client";
import React, { useRef } from "react";
import Image from "next/image";
import useCurSection from "@/hooks/use-cur-section";

const certificates = [
  {
    id: 1,
    title: "Certificate 1",
    image: "/imgs/project-placeholder.jpg",
    link: "/imgs/project-placeholder.jpg",
  },
  {
    id: 2,
    title: "Certificate 2",
    image: "/imgs/project-placeholder.jpg",
    link: "/imgs/project-placeholder.jpg",
  },
  {
    id: 3,
    title: "Certificate 3",
    image: "/imgs/project-placeholder.jpg",
    link: "/imgs/project-placeholder.jpg",
  },
  {
    id: 4,
    title: "Certificate 4",
    image: "/imgs/project-placeholder.jpg",
    link: "/imgs/project-placeholder.jpg",
  },
];

export default function CertificatesSection() {
  const ref = useRef(null);
  useCurSection(ref, 0.1);

  return (
    <div ref={ref} id="certificates" className="w-full py-20 px-4 md:px-12 my-20">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-gradient-primary">{"//"}</span> Certificates
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Professional certifications and achievements
        </p>
      </div>
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-4">
          {certificates.map((cert) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-shrink-0 w-[280px] sm:w-[350px] md:w-[400px] snap-center"
            >
              <div className="relative h-[200px] sm:h-[250px] md:h-[280px] rounded-xl overflow-hidden border bg-muted transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 cursor-pointer">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
