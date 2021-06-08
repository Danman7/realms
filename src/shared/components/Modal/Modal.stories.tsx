import { Meta, Story } from '@storybook/react/types-6-0'

import { FlexColumn } from '../../../style/global'
import { Modal, ModalProps } from './Modal'

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: 'Modal component',
      },
    },
  },
} as Meta

const Template: Story<ModalProps> = (args) => <Modal {...args} />

export const Default = Template.bind({})
Default.args = {
  isOpen: true,
  children: (
    <FlexColumn>
      <h1>This is a modal.</h1>
      <p>And this is its content.</p>
    </FlexColumn>
  ),
}
