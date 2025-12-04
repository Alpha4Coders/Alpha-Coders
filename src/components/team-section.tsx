import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { coreTeam } from "@/lib/data";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { Users } from 'lucide-react';

export default function TeamSection() {
  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <Users className="w-8 h-8 text-accent" />
        <h2 className="text-3xl font-bold tracking-tight">Core Team</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {coreTeam.map((member) => (
          <Card key={member.id} className="text-center transition-all hover:shadow-accent/20 hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              <Avatar className="mx-auto h-24 w-24 mb-4 border-2 border-accent">
                <AvatarImage src={getPlaceholderImage(member.avatar)} alt={member.name} data-ai-hint="profile portrait" />
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <CardTitle>{member.name}</CardTitle>
              <CardDescription>@{member.username}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-medium text-accent">{member.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
