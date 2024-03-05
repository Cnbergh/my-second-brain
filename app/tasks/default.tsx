import { delay } from '@/lib/utils'
import { getXataClient } from '@/xata';
import { z } from 'zod';
import { revalidatePath } from "next/cache";
import {TaskForm} from '../../components/forms/taskForm';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/dist/server/api-utils';
import { toast } from 'sonner';

const schema = z.object({
    name: z.string().min(3)
})


export default async function DefaultTasksPage() {
  await delay(1000)
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
      toast.error('UserID is required.')
        return
    }
    const newRecord = {...parsedForm, userId}

    const xataClient = getXataClient();
    await xataClient.db.Task.create(newRecord)
    revalidatePath('/');
}
  return (
    <div>
      <h1 className='mb-4'>Default Tasks</h1>
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