import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className='bg-gray-50 border-t border-gray-200'>
      <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row'>
        <span className='font-semibold text-fuchsia-600'>DingDing</span>

        <nav className='flex gap-6 text-sm text-gray-500'>
          <a href='#' className='hover:text-fuchsia-600'>
            About
          </a>
          <a href='#' className='hover:text-fuchsia-600'>
            Contact
          </a>
          <a href='#' className='hover:text-fuchsia-600'>
            Privacy
          </a>
        </nav>

        <div className='flex gap-4 text-gray-500'>
          <a href='#' aria-label='Website' className='hover:text-fuchsia-600'>
            <GlobeAltIcon className='h-5 w-5' />
          </a>
          <a
            href='mailto:contact@dingding.com'
            aria-label='Email'
            className='hover:text-fuchsia-600'
          >
            <EnvelopeIcon className='h-5 w-5' />
          </a>
        </div>
      </div>

      <div className='border-t border-gray-200 py-3 text-center text-xs text-gray-400'>
        © {new Date().getFullYear()} DingDing. All rights reserved.
      </div>
    </footer>
  );
}
