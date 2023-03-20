import Post from '@/domains/Post'

const samplePosts: Post[] = [
  {
    id: '1',
    title: 'Title1',
    createdAt: '2023/01/01',
    updatedAt: '2023/01/01',
    isDraft: false,
    tags: 'simulation,アルゴリズム,JavaScript,p5js',
    content:
      '私は書いたコードのログが流れてるところをぼーっと眺めるのが好きです。シミュレーション途中のグラフや画像が変わっていくのも大好きです。',
  },
  {
    id: '2',
    title: 'Title1',
    createdAt: '2023/01/01',
    updatedAt: '2023/01/01',
    isDraft: false,
    tags: 'simulation,アルゴリズム,JavaScript,p5js',
    content:
      '私は書いたコードのログが流れてるところをぼーっと眺めるのが好きです。シミュレーション途中のグラフや画像が変わっていくのも大好きです。',
  },
]

export default samplePosts
