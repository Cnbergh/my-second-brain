'use client';

import Container from '@/components/ui/container';
import { UserProfile } from '@clerk/nextjs';

const UserProfilePage = () => (
  <Container>
    <div className="container flex max-w-3xl items-center justify-center">
      <UserProfile path="/user-profile" routing="path" />
    </div>
  </Container>
);

export default UserProfilePage;
