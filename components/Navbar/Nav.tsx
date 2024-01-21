'use client';
//useUser clerk
import { useUser } from '@clerk/nextjs';

// next link
import Link from 'next/link';

// next router
import { useRouter } from 'next/navigation';

// components
/* import {navData} from "@/app/Context/navData" */
import Tooltip from '../ui/tooltip';

// icons
import {
  HiHome,
  HiUser,
  HiChartBarSquare,
  HiSquares2X2,
} from 'react-icons/hi2';

// nav data
export const navData = [
  {
    name: 'home',
    path: '/',
    icon: <HiHome />,
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    icon: <HiSquares2X2 />,
  },
  {
    name: 'profile',
    path: '/profile',
    icon: <HiUser />,
  },
  {
    name: 'statistics',
    path: '/statistics',
    icon: <HiChartBarSquare />,
  },
];

// Nav
const Nav = () => {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <>
    {isLoaded && user && (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[1.2%] z-40 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      {/* inner */}
      <div
        className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10
      backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full border-t-2">
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
      </div>
    </nav>)}
    </>
  );
};

export default Nav;
