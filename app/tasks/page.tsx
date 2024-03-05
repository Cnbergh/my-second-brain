import { getXataClient } from '@/xata';
import { z } from 'zod';
import { revalidatePath } from "next/cache";
import React from 'react';
import {TaskForm} from '../../components/forms/taskForm';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/dist/server/api-utils';
import { toast } from 'sonner';

const schema = z.object({
    name: z.string().min(3, "Task name should have at least 3 characters."),
    estimatedTime: z.number().positive()
})

export default async function TasksPage() {
    const {userId} = auth();
  const xataClient = getXataClient();
  if(!userId){
    redirect('/')
  }
  const tasks = await xataClient.db.Task.filter({ userId }).getMany();

  async function createForm(data) {
    'use server';
    const parsedForm = schema.parse(data);
    if (!userId) {
      toast.error('UserID is required.');
      return;
    }
    const newRecord = {...parsedForm, userId}

    const xataClient = getXataClient();
    await xataClient.db.Task.create({
        name: newRecord.name,
        userId: newRecord.userId,
        estimatedTime: newRecord.estimatedTime
      });
    revalidatePath('/');
}
  return (
    <div>
      <h1 className='mb-4'>Dashboard page</h1>
      <div className='p-1'>
        {tasks.map((Task) => (
          <p key={Task.id}>{Task.name}</p>
        ))}
      </div>
      <div className='p-1'>
        <TaskForm handleCreateTask={createForm}/>
      </div>
    </div>
  );
}
