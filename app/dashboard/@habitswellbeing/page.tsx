import { delay } from '@/lib/utils'

export default async function HabitsWellbeing() {
  await delay(1300)

  return (
    <div className='h-40 flex-1 rounded-2xl bg-pink-800 p-10 text-white'>
      <h2 className='text-xl font-semibold'>Habits & Wellbeing</h2>
    </div>
  )
}