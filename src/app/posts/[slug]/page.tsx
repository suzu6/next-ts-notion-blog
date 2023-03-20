import BlogContent from '@/components/BlogContent'
import samplePosts from '@/data/samplePosts'

export default function Home() {
  const post = samplePosts[0]

  return (
    <>
      <BlogContent post={post}></BlogContent>
    </>
  )
}
