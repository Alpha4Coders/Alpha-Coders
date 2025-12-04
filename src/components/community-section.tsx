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
import { Github } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function CommunitySection() {
  return (
    <div className="rounded-xl border bg-card/50">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]"></TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Username</TableHead>
            <TableHead className="text-right">Profile</TableHead>
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
              <TableCell className="text-right">
                <Button asChild variant="ghost" size="icon">
                  <Link href={`https://github.com/${member.username}`} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}