import type { GithubProject } from "@/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Star } from "lucide-react";
import Link from 'next/link';
import { MotionDiv } from "./motion-div";

interface ProjectCardProps {
  project: GithubProject;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <MotionDiv
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="flex flex-col h-full bg-card/50 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-primary/50">
        <CardHeader>
          <CardTitle>{project.name}</CardTitle>
          <CardDescription className="h-10 overflow-hidden">{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow space-y-4">
          {project.language && (
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{project.language}</Badge>
            </div>
          )}
          <div className="flex items-center text-sm text-muted-foreground">
            <Star className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400" />
            <span>{project.stargazers_count} stars</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link href={project.html_url} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </MotionDiv>
  );
}