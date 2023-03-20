import Link from 'next/link'
import ContentsList from '@/components/ContentsList'
import samplePosts from '@/data/samplePosts'

export default function Home() {
  const posts = samplePosts
  return (
    <>
      <ContentsList posts={posts}></ContentsList>
      <Link href='/posts'>All Posts →</Link>
    </>
  )
}
