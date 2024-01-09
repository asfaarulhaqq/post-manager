import Link from 'next/link';
import Login from '../../app/login/page';
// import { GlobalData } from '../../lib/types';

export default function SiteLogo(): JSX.Element {
  return (
    <div className='container mx-auto'>
      <div className="mx-auto flex flex-col items-center justify-between px-4 py-4 md:flex-row lg:px-0">
        <h1 className="flex space-x-2">
          <Link
            href="/"
            className="bg-gradient-to-r from-cyan-700 to-teal-600 bg-clip-text text-4xl font-bold tracking-tighter text-transparent dark:from-cyan-300 dark:to-teal-200"
          >
            Post Manager
          </Link>
        </h1>
        <div className='menu'>
          <ul>
            <li><Link href="/login">Login</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}