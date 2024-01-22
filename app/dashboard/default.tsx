import { delay } from '@/lib/utils'

export default async function DefaultDashboard() {
  await delay(1000)

  return (
    <div className='h-60 rounded-xl bg-sky-800 p-10 text-white'>
      <h1 className='text-3xl font-bold'>Default Dashboard page</h1>
    </div>
  )
}