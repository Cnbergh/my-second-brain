'use client';
import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <section className="container py-12">
        <div className="container flex max-w-3xl items-center justify-center">
        <SignUp />
      </div>
    </section>
  );
}
