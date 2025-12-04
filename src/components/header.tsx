"use client";
import Link from 'next/link';
import { CodeXml } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/team', label: 'Core Team' },
  { href: '/community', label: 'Community' },
  { href: '/#projects', label: 'Projects' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-auto flex items-center">
          <Link href="/" className="flex items-center gap-2 mr-6">
            <CodeXml className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg hidden sm:inline-block">Alpha Coders</span>
          </Link>
          <nav className="items-center space-x-4 lg:space-x-6 hidden md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}