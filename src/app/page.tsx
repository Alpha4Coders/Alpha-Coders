import Header from '@/components/header';
import TeamSection from '@/components/team-section';
import ProjectsSection from '@/components/projects-section';
import CommunitySection from '@/components/community-section';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="space-y-16">
          <TeamSection />
          <ProjectsSection />
          <CommunitySection />
        </div>
      </main>
    </div>
  );
}
