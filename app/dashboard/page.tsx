import React from 'react';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/dist/server/api-utils';


export default async function DashboardPage() {
    const {userId} = auth();
  if(!userId){
    redirect('/')
  }
  return (
    <div className='h-60 flex-1 rounded-xl bg-sky-800 p-10 text-white'>
      <h1 className='text-3xl font-bold'>Dashboard page</h1>
    </div>
  );
}
