import BlogContent from '@/components/BlogContent'
import samplePosts from '@/data/samplePosts'
import styles from './page.module.css'

export default function Home() {
  const post = samplePosts[0]

  return (
    <main className={styles.main}>
      <BlogContent post={post}></BlogContent>
    </main>
  )
}
