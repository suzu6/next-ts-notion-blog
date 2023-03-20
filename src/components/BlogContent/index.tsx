import React from 'react'
import Post from '@/domains/Post'

interface BlogContentProps {
  post: Post
}

const BlogContent: React.FC<BlogContentProps> = ({ post }) => {
  return (
    <div className='mb-8 bg-white py-6'>
      <h1 className='mb-2 text-2xl font-bold'>{post.title}</h1>
      <p className='mb-4 text-sm text-gray-600'>{post.tags}</p>
      <p className='mb-4 text-sm text-gray-600'>Published: {post.createdAt}</p>
      <div
        className='prose'
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  )
}

export default BlogContent
