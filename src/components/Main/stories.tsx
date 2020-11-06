import { Story, Meta } from '@storybook/react/types-6-0'
import Main from './index'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'teste default',
    description: 'test default 2'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />

export const test: Story = (args) => <Main {...args} />
