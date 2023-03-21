import React, { FC } from 'react'
import { Link } from '@/components/atoms/Link'

interface Props {
  label: string
}

/**
 * Tag
 *
 * @param {Props} { }
 */
export const Tag: FC<Props> = (props: Props) => {
  return (
    <span className=''>
      <Link href={'/tags/' + props.label}>{props.label}</Link>
    </span>
  )
}
