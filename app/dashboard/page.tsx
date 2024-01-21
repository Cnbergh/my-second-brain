import { getXataClient } from '@/xata';
import { z } from 'zod';
import { revalidatePath } from "next/cache";
import React from 'react';
import TaskForm from '../../components/forms/taskForm';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/dist/server/api-utils';

const schema = z.object({
    name: z.string().min(3)
})

export default async function DashboardPage() {
    const {userId} = auth();
  const xataClient = getXataClient();
  if(!userId){
    redirect('/')
  }
  const tasks = await xataClient.db.Task.filter({userId}).getMany();

  async function createForm(formData:FormData) {
    'use server'
   const parsedForm = schema.parse({
        name: formData.get('name')
    })
    if(!userId) {
        return
    }
    const newRecord = {...parsedForm, userId}

    const xataClient = getXataClient();
    await xataClient.db.Task.create(newRecord)
    revalidatePath('/');
}
  return (
    <main>
      <h1 className='mb-4'>Dashboard page</h1>
      <div className='p-1'>
        <TaskForm handleCreateTask={createForm}/>
      </div>
      <div>
        {tasks.map((Task) => (
          <p key={Task.id}>{Task.name}</p>
        ))}
      </div>
    </main>
  );
}
