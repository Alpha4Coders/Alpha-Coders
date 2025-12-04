import TeamSection from "@/components/team-section";
import { Users } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="text-center mb-12">
         <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm mb-4">
          Our Leaders
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Core Team
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
          The driving force behind Alpha Coders, dedicated to fostering a vibrant and collaborative community.
        </p>
      </div>
      <TeamSection />
    </div>
  );
}