import React from 'react'
import Post from '@/domains/Post'

interface BlogContentProps {
  post: Post
}

const BlogContent: React.FC<BlogContentProps> = ({ post }) => {
  return (
    <div className='mb-8 rounded bg-white p-6 shadow-md'>
      <h1 className='mb-2 text-2xl font-bold'>{post.title}</h1>
      <p className='mb-4 text-sm text-gray-600'>By {post.author}</p>
      <p className='mb-4 text-sm text-gray-600'>
        Published: {post.publishedDate}
      </p>
      <div
        className='prose'
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  )
}

export default BlogContent
