import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Tag } from './Tag'

const meta: ComponentMeta<typeof Tag> = {
  title: 'Components/atoms/Tag',
  component: Tag,
  parameters: {},
  args: {
    label: 'Tag',
  },
}
export default meta

export const Primary: ComponentStoryObj<typeof Tag> = {
  args: {},
}
