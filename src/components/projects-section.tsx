"use client";

import { useState, useMemo, useEffect } from 'react';
import type { GithubProject } from '@/types';
import { ProjectCard } from '@/components/project-card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { MotionDiv } from './motion-div';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ProjectsSection() {
  const [projects, setProjects] = useState<GithubProject[]>([]);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/orgs/Alpha4Coders/repos?sort=updated&direction=desc');
        if (response.ok) {
          const data = await response.json();
          // Filter out forks
          const nonForkProjects = data.filter((project: { fork: any; }) => !project.fork);
          setProjects(nonForkProjects);
        } else {
          console.error('Failed to fetch projects from GitHub');
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const technologies = useMemo(() => {
    if (projects.length === 0) return ['All'];
    const allTechs = projects.map(p => p.language).filter(Boolean);
    return ['All', ...Array.from(new Set(allTechs as string[]))];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (filter === 'All') {
      return projects;
    }
    return projects.filter(p => p.language === filter);
  }, [filter, projects]);

  return (
    <section>
      <div className="text-center mb-12">
        <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm mb-4">
          Our Projects
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What We're Building</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
          Check out some of the latest open-source projects from the Alpha Coders community.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-2 mb-8">
        {loading ? (
          Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} className="h-9 w-20" />)
        ) : (
          technologies.map(tech => (
            <Button
              key={tech}
              variant={filter === tech ? 'default' : 'outline'}
              onClick={() => setFilter(tech)}
              size="sm"
            >
              {tech}
            </Button>
          ))
        )}
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
             <ProjectCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <MotionDiv 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </MotionDiv>
      )}
    </section>
  );
}

function ProjectCardSkeleton() {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full mt-2" />
        <Skeleton className="h-4 w-1/2 mt-1" />
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
          <Skeleton className="h-6 w-1/4" />
          <Skeleton className="h-5 w-1/3" />
      </CardContent>
      <CardFooter>
          <Skeleton className="h-10 w-full" />
      </CardFooter>
    </Card>
  )
}