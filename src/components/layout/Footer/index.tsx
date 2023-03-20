import React from 'react'

const Footer: React.FC = () => {
  return (
    <>
      <footer className='mt-12 py-6 text-gray-800'>
        <div className='container mx-auto px-4'>
          <p className='text-center text-sm'>
            &copy; {new Date().getFullYear()} suzu6 blog. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
