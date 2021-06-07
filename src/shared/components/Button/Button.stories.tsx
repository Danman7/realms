import { Meta, Story } from '@storybook/react/types-6-0'

import { ThemeTypes } from '../../../style/themes'
import { iconNames } from '../../assets/iconNames'
import { Button, ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ThemeTypes.colorNames,
      },
    },
    icon: {
      control: {
        type: 'select',
        options: iconNames,
      },
    },
    handleClick: { action: 'Button clicked' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Primary UI component for user interaction.',
      },
    },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Clean = Template.bind({})
Clean.args = { label: 'A Clean Button' }

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  label: 'A Primary Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  label: 'A Secondary Button',
}

export const CleanWithIcon = Template.bind({})
CleanWithIcon.args = {
  label: 'A Clean Button with an icon',
  icon: 'acorn',
}

export const PrimaryWithIcon = Template.bind({})
PrimaryWithIcon.args = {
  color: 'primary',
  label: 'A Primary Button with an icon',
  icon: 'sword-clash',
}

export const SecondaryWithIcon = Template.bind({})
SecondaryWithIcon.args = {
  color: 'secondary',
  label: 'A Secondary Button with an icon',
  icon: 'tree-branch',
}
