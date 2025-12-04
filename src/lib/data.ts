import type { TeamMember, CommunityMember, Project } from '@/types';

export const coreTeam: TeamMember[] = [
  { id: 1, name: 'Vortex-16', username: 'vortex16', avatar: 'avatar1', role: 'Lead Developer' },
  { id: 2, name: 'Dealer-09', username: 'dealer09', avatar: 'avatar2', role: 'Project Manager' },
  { id: 3, name: 'Rouvik', username: 'rouvik', avatar: 'avatar3', role: 'UI/UX Designer' },
  { id: 4, name: 'PixelPioneer404', username: 'pixelpioneer', avatar: 'avatar4', role: 'Frontend Specialist' },
];

export const communityMembers: CommunityMember[] = [
    { id: 5, name: 'Alice', username: 'alice_c', avatar: 'avatar5' },
    { id: 6, name: 'Bob', username: 'bob_dev', avatar: 'avatar6' },
    { id: 7, name: 'Charlie', username: 'charlie_js', avatar: 'avatar7' },
    { id: 8, name: 'Diana', username: 'diana_py', avatar: 'avatar8' },
    { id: 9, name: 'Ethan', username: 'ethan_ux', avatar: 'avatar9' },
    { id: 10, name: 'Fiona', username: 'fiona_go', avatar: 'avatar10' },
    { id: 11, name: 'George', username: 'george_rs', avatar: 'avatar11' },
    { id: 12, name: 'Hannah', username: 'hannah_ts', avatar: 'avatar12' },
];

export const projects: Project[] = [
  {
    id: 1,
    name: 'QuantumLeap',
    description: 'A cutting-edge machine learning framework for predictive analytics.',
    url: 'https://github.com/Alpha4Coders/QuantumLeap',
    technologies: ['Python', 'TensorFlow', 'scikit-learn'],
  },
  {
    id: 2,
    name: 'Nebula-UI',
    description: 'A sleek, modern component library for building beautiful user interfaces.',
    url: 'https://github.com/Alpha4Coders/Nebula-UI',
    technologies: ['React', 'TypeScript', 'Storybook'],
  },
  {
    id: 3,
    name: 'Chrono-DB',
    description: 'A high-performance time-series database optimized for IoT data.',
    url: 'https://github.com/Alpha4Coders/Chrono-DB',
    technologies: ['Go', 'PostgreSQL', 'Docker'],
  },
  {
    id: 4,
    name: 'Code-Collab',
    description: 'A real-time collaborative coding platform with integrated video chat.',
    url: 'https://github.com/Alpha4Coders/Code-Collab',
    technologies: ['Next.js', 'WebRTC', 'Firebase'],
  },
  {
    id: 5,
    name: 'Game-Engine-X',
    description: 'A lightweight 2D game engine built with web technologies.',
    url: 'https://github.com/Alpha4Coders/Game-Engine-X',
    technologies: ['TypeScript', 'Canvas API'],
  },
  {
    id: 6,
    name: 'Secure-Auth',
    description: 'A plug-and-play authentication service with multi-factor support.',
    url: 'https://github.com/Alpha4Coders/Secure-Auth',
    technologies: ['Go', 'OAuth2', 'JWT'],
  },
   {
    id: 7,
    name: 'Data-Visualizer',
    description: 'Interactive data visualization tool for complex datasets.',
    url: 'https://github.com/Alpha4Coders/Data-Visualizer',
    technologies: ['React', 'D3.js', 'Python'],
  },
  {
    id: 8,
    name: 'Static-Site-Gen',
    description: 'A blazing fast static site generator for personal blogs and portfolios.',
    url: 'https://github.com/Alpha4Coders/Static-Site-Gen',
    technologies: ['Next.js', 'Markdown', 'Tailwind CSS'],
  },
];
