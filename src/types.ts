export interface TeamMember {
  id: number;
  name: string;
  username: string;
  avatar: string;
  role: string;
}

export interface CommunityMember {
  id: number;
  name: string;
  username: string;
  avatar: string;
}

export interface Project {
  id: number;
  name:string;
  description: string;
  url: string;
  technologies: string[];
}
