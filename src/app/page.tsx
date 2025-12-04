import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CodeXml, Github } from 'lucide-react';
import ProjectsSection from '@/components/projects-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-20 md:py-32 lg:py-40 bg-grid">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="mx-auto max-w-3xl space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
              Welcome to Alpha Coders
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              A Community of Passionate Developers
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Collaborate, learn, and build amazing things with a supportive network of coders from around the world.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Button asChild size="lg">
                <Link href="https://github.com/Alpha4Coders" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" />
                  Join on GitHub
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/community">
                  Meet the Community
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section id="projects" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ProjectsSection />
        </div>
      </section>
    </div>
  );
}