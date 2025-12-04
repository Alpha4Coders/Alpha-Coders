import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CodeXml, Github, Zap, BrainCircuit, Users } from 'lucide-react';
import ProjectsSection from '@/components/projects-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-20 md:py-32 lg:py-40 bg-grid">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
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

      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What We Stand For</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                We believe in the power of collaboration and open-source to drive innovation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-xl border bg-card/50">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Build Together</h3>
                <p className="mt-2 text-muted-foreground">
                  Tackle exciting projects and contribute to open-source software that makes a difference.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-xl border bg-card/50">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <BrainCircuit className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Learn & Grow</h3>
                <p className="mt-2 text-muted-foreground">
                  Expand your skills with the help of experienced mentors and a supportive learning environment.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-xl border bg-card/50">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Connect & Network</h3>
                <p className="mt-2 text-muted-foreground">
                  Join a diverse group of developers, share ideas, and build lasting professional relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="projects" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ProjectsSection />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Join Us?</h2>
          <p className="mx-auto max-w-xl mt-4 text-muted-foreground md:text-lg">
            Whether you're a beginner or a seasoned expert, there's a place for you at Alpha Coders. Start your journey with us today.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="https://github.com/Alpha4Coders" target="_blank" rel="noopener noreferrer">
                Become a Contributor
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
