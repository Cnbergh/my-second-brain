'use client';
import { UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import Logo from './logo';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header>
      <nav
        className="flex items-center justify-between p-6 lg:px-8 h-20 border border-t-0 border-r-0 border-b-grey-600"
        aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className=" -m-1 p-1">
            <Logo />
          </Link>
        </div>
        <SignedIn>
          <div className="z-50">
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <Button size="sm" variant="ghost">
              Sign in
            </Button>
          </SignInButton>
        </SignedOut>
      </nav>
    </header>
  );
}
