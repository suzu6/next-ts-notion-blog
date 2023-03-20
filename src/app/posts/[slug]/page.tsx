'use client'

import { usePathname } from 'next/navigation'
import BlogContent from '@/components/BlogContent'
import samplePosts from '@/data/samplePosts'

function getPostBySlug(slug: string | undefined) {
  if (!slug) return
  return samplePosts.find((post) => post.id === slug)
}

const BlogSlugPage = () => {
  // usePathname() return ex '/post/1'
  const slug = usePathname()?.split('/').pop()
  console.info(slug)
  const post = getPostBySlug(slug)

  if (!post) {
    console.log(`Failed to find post for slug: ${slug}`)
    return <h1>404 - Page Not Found</h1>
  }

  return (
    <>
      <BlogContent post={post}></BlogContent>
    </>
  )
}

export default BlogSlugPage
