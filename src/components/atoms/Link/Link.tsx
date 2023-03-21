import React, { FC } from 'react'

interface Props {
  label: string
  href: string
  color?: 'default' | 'primary' | 'secondary'
}

/**
 * Link
 *
 * @param {Props} { }
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
      <a
        className={color() + ' mx-1 text-sm  font-medium hover:text-gray-600 '}
        href={props.href}
      >
        {props.label}
      </a>
    </>
  )
}
