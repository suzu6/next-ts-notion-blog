import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'

const Header = () => {
  return (
    <header className='flex items-center justify-between py-10'>
      <div>
        <Link href='/'>
          <div className='flex items-center justify-between'>
            <div className='mr-3'>{siteMetadata.title}</div>
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
      </div>
    </header>
  )
}
export default Header
