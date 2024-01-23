'use client'
import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
      <section className="container py-12">
        <div className="container flex max-w-3xl items-center justify-center">
          <SignIn />
        </div>
      </section>
  );
}
