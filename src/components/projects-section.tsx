"use client";

import { useState, useMemo } from 'react';
import { projects } from '@/lib/data';
import { ProjectCard } from '@/components/project-card';
import { Button } from '@/components/ui/button';
import { FolderKanban } from 'lucide-react';

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All');
  
  const technologies = useMemo(() => {
    const allTechs = projects.flatMap(p => p.technologies);
    return ['All', ...Array.from(new Set(allTechs))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (filter === 'All') {
      return projects;
    }
    return projects.filter(p => p.technologies.includes(filter));
  }, [filter]);

  return (
    <section>
      <div className="flex items-center gap-4 mb-4">
        <FolderKanban className="w-8 h-8 text-accent" />
        <h2 className="text-3xl font-bold tracking-tight">Community Projects</h2>
      </div>
      <div className="flex flex-wrap gap-2 mb-8">
        {technologies.map(tech => (
          <Button
            key={tech}
            variant={filter === tech ? 'default' : 'outline'}
            onClick={() => setFilter(tech)}
            size="sm"
            className={filter === tech ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''}
          >
            {tech}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
