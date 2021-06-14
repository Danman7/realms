import { Meta, Story } from '@storybook/react/types-6-0'

import { ThemeTypes } from '../../../style/themes'
import { iconNames } from '../../assets/iconNames'
import { Button, ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
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

export const Error = Template.bind({})
Error.args = {
  color: 'error',
  label: 'An Error Button',
}

export const PrimaryWithIcon = Template.bind({})
PrimaryWithIcon.args = {
  color: 'primary',
  label: 'A Primary Button with an icon',
  icon: 'hooded-figure',
}

export const SecondaryWithIcon = Template.bind({})
SecondaryWithIcon.args = {
  color: 'secondary',
  label: 'A Secondary Button with an icon',
  icon: 'siege-tower',
}
