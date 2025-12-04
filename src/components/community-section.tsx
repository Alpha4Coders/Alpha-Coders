import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { communityMembers } from "@/lib/data";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { Users } from 'lucide-react';


export default function CommunitySection() {
  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <Users className="w-8 h-8 text-accent" />
        <h2 className="text-3xl font-bold tracking-tight">Community Members</h2>
      </div>
      <div className="rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Avatar</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Username</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {communityMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={getPlaceholderImage(member.avatar)} alt={member.name} data-ai-hint="profile portrait" />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium">{member.name}</TableCell>
                <TableCell className="text-muted-foreground">@{member.username}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
