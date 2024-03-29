import Link from 'next/link'
import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <>
      <header className='flex items-center justify-between py-10'>
        <div>
          <Link href='/' aria-label={siteMetadata.headerTitle}>
            <div className='flex items-center justify-between'>
              <div className='h-6 text-2xl font-semibold'>
                {siteMetadata.headerTitle}
              </div>
            </div>
          </Link>
        </div>
        <div className='flex items-center text-base leading-5'>
          <div className='hidden sm:block'>
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className='p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4'
              >
                {link.title}
              </Link>
            ))}
          </div>
          {/* <ThemeSwitch /> */}
          <MobileNav />
        </div>
      </header>
    </>
  )
}
export default Header
