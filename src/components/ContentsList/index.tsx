import React from 'react'
import Post from '@/domains/Post'
import Absolute from './Absolute'

interface ContentsListProps {
  posts: Post[]
}

const ContentsList: React.FC<ContentsListProps> = ({ posts }) => {
  const offset = 0
  const limit = 10
  return (
    <>
      <ul>
        {posts.slice(offset, limit).map((post, index) => {
          return (
            <li className='py-4' key={index}>
              <Absolute post={post} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ContentsList
