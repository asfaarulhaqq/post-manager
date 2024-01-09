import React from 'react';

export default function Footer(): JSX.Element {
  return (
    <footer className='container mx-auto'>
      <div className="mt-8 flex w-full items-center justify-between px-4 py-4 text-xs md:text-sm lg:px-0">
        <a
          href="mailto:asfaarulhaqq@gmail.com"
          target="_blank"
          className="no-underline"
        >
          <div className="flex items-center space-x-2">
            <span className="text-zinc-700 ">
              Made with Love By <b>Asfaar u.h Siddiqui</b>
            </span>
          </div>
        </a>
        <div className="text-zinc-700 ">
          &copy; {new Date().getFullYear()} Post Manager
        </div>
      </div>
    </footer>
  );
}
