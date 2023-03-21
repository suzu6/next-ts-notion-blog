import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Link } from './Link'

const meta: ComponentMeta<typeof Link> = {
  title: 'Components/atoms/Link',
  component: Link,
  parameters: {
    //  nextRouter: { asPath: '/' },
    //  layout: 'fullscreen',
  },
  args: {
    label: 'test',
    href: '/',
    color: 'default',
  },
}
export default meta

export const Primary: ComponentStoryObj<typeof Link> = {
  args: {
    label: 'primary',
    href: '/',
    color: 'primary',
  },
}

export const Secondary: ComponentStoryObj<typeof Link> = {
  args: {
    label: 'secondary',
    href: '/',
    color: 'secondary',
  },
}

export const Default: ComponentStoryObj<typeof Link> = {
  args: {
    label: 'default',
    href: '/',
  },
}
