import { delay } from '@/lib/utils'

export default async function DefaultTasks() {
  await delay(1000)

  return (
    <div className='h-40 flex-1 rounded-2xl bg-purple-800 p-10 text-white'>
      <h2 className='text-xl font-semibold'>Default Tasks</h2>
    </div>
  )
}