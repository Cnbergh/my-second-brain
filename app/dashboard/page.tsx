import React from 'react';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/dist/server/api-utils';


export default async function DashboardPage() {
    const {userId} = auth();
  if(!userId){
    redirect('/')
  }
  return (
    <div className='w-full max-h-20 flex justify-center items-center text-start rounded-xl bg-sky-800 p-10 text-white'>
      <h1 className='text-3xl'>Dashboard</h1>
    </div>
  );
}
