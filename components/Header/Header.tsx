'use client';

import { UserButton, useUser } from '@clerk/nextjs';
import React from 'react';
import Link from 'next/link';
import Logo from './logo';

export default function Header() {
  const { user, isLoaded } = useUser();
  return (
    <header>
      <nav
        className="flex items-center justify-between p-6 lg:px-8 h-20 border border-t-0 border-r-0 border-b-grey-600"
        aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className=" -m-1 p-1">
            <Logo/>
          </Link>
        </div>
        {isLoaded && user && (
          <>
            <div className="z-50">
              <UserButton afterSignOutUrl="/"/>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
