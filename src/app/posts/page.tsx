import ContentsList from '@/components/ContentsList'
import samplePosts from '@/data/samplePosts'

export default function Posts() {
  const posts = samplePosts

  return (
    <>
      <ContentsList posts={posts} />
    </>
  )
}
