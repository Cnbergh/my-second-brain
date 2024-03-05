import { delay } from '@/lib/utils';
import { getXataClient } from '@/xata';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import React from 'react';
import { TaskForm } from '../../../components/forms/taskForm';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/dist/server/api-utils';
import { toast } from 'sonner';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const schema = z.object({
  name: z.string().min(3),
});

export default async function TasksPage() {
  await delay(1000);
  const { userId } = auth();
  const xataClient = getXataClient();
  if (!userId) {
    redirect('/');
  }
  const tasks = await xataClient.db.Task.filter({ userId }).getMany();

  async function createForm(formData: FormData) {
    'use server';
    const parsedForm = schema.parse({
      name: formData.get('name'),
    });
    if (!userId) {
      toast.error('UserID is required.');
      return;
    }
    const newRecord = { ...parsedForm, userId };

    const xataClient = getXataClient();
    await xataClient.db.Task.create(newRecord);
    revalidatePath('/');
  }
  return (
    <section className='container'>
      <h1 className="mb-4">Tasks</h1>
      <div className="p-1">
        {tasks.map((Task) => (
          <p key={Task.id}>{Task.name}</p>
        ))}
      </div>
      <Accordion type="single" collapsible className="w-full p-1">
        <AccordionItem value="item-1">
          <AccordionTrigger className='min-w-[300px]'>Create new task?</AccordionTrigger>
          <AccordionContent>
            <TaskForm handleCreateTask={createForm} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
