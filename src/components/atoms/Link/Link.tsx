import { UrlObject } from 'url'
import * as NextLink from 'next/link'
import React, { FC } from 'react'

declare type Url = string | UrlObject
interface Props {
  label: string
  href: Url
  color?: 'default' | 'primary' | 'secondary'
}

/**
 * Link
 *
 * @param Props
 */
export const Link: FC<Props> = (props: Props) => {
  const color = () => {
    switch (props.color) {
      case 'primary':
        return 'text-primary'
      case 'secondary':
        return 'text-secondary'
      default:
        return 'text-gray-500'
    }
  }

  return (
    <>
      <NextLink.default
        className={color() + ' mx-1 text-sm  font-medium hover:text-gray-600 '}
        href={props.href}
      >
        {props.label}
      </NextLink.default>
    </>
  )
}
