'use client';
// next link
import Link from 'next/link';
// next router
import { useRouter } from 'next/navigation';

// components
/* import {navData} from "@/app/Context/navData" */
import Tooltip from '../ui/tooltip';

import { ModeToggle } from './modetoggle';
// icons
import {
  HiListBullet,
  HiMiniBookOpen,
  HiChartBarSquare,
  HiSquares2X2,
} from 'react-icons/hi2';

// nav data
export const navData = [
  {
    name: 'tasks',
    path: '/tasks',
    icon: <HiListBullet />,
  },
  {
    name: 'habits & wellbeing',
    path: '/habitswellbeing',
    icon: <HiSquares2X2 />,
  },
  {
    name: 'journal',
    path: '/journal',
    icon: <HiMiniBookOpen />,
  },
  {
    name: 'statistics',
    path: '/dashboard',
    icon: <HiChartBarSquare />,
  },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <aside className="flex w-full flex-col justify-between max-w-20">
      <section className="flex w-full items-start justify-center m-auto">
        <nav className="flex w-full flex-col items-center justify-center gap-y-10 px-4 xl:px-0 h-full xl:h-max py-8 text-3xl xl:text-xl">
          {navData.map((link, index) => {
            return (
              <Link
                className={`${
                  link.path === pathname && 'text-accent'
                } relative flex items-center group hover:text-accent transition-all duration-300`}
                href={link.path}
                key={index}>
                {/* tooltip */}
                <Tooltip>{link.name}</Tooltip>

                {/* icon */}
                <div>{link.icon}</div>
              </Link>
            );
          })}
        </nav>
      </section>
      <section className="flex w-full items-end justify-center m-auto">
        <div>
          <ModeToggle />
        </div>
      </section>
    </aside>
  );
}
