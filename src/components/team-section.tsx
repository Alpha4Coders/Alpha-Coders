import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { coreTeam } from "@/lib/data";
import { getPlaceholderImage } from "@/lib/placeholder-images";

export default function TeamSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {coreTeam.map((member) => (
        <Card key={member.id} className="text-center border-0 shadow-none bg-transparent">
          <CardHeader className="p-0">
            <Avatar className="mx-auto h-28 w-28 mb-4">
              <AvatarImage src={getPlaceholderImage(member.avatar)} alt={member.name} data-ai-hint="profile portrait" />
              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <CardTitle>{member.name}</CardTitle>
            <CardDescription>@{member.username}</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <p className="text-sm font-medium text-primary">{member.role}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}