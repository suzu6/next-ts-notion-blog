import Link from 'next/link'
import React from 'react'
import Post from '@/domains/Post'

interface AbsoluteProps {
  post: Post
}

const Absolute: React.FC<AbsoluteProps> = ({ post }) => {
  return (
    <>
      <article className='space-y-2 lg:grid lg:grid-cols-4 lg:items-baseline lg:space-y-0'>
        <dl>
          <dt className='sr-only'>Published on</dt>
          <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
            <time dateTime='2019-10-11T00:00:00.000Z'>{post.createdAt}</time>
          </dd>
        </dl>
        <div className='space-y-3 lg:col-span-3'>
          <div>
            <h3 className='text-2xl font-bold leading-8 tracking-tight'>
              <Link
                className='text-gray-900 dark:text-gray-100'
                href={'/posts/' + post.id}
              >
                {post.title}
              </Link>
            </h3>
            <div className='flex flex-wrap'>
              {post.tags.split(',').map((tag, index) => (
                <Link
                  key={index}
                  className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium'
                  href={'/tags/' + tag}
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          <div className='prose max-w-none text-gray-500 dark:text-gray-400'>
            {post.content.substring(0, 100)}
          </div>
        </div>
      </article>
    </>
  )
}

export default Absolute
