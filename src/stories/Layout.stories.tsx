import { Meta, Story } from '@storybook/react/types-6-0'

import { Box, Grid } from '../style/global'

export default {
  title: 'Design System/Layout',
  component: Grid,
  parameters: {
    docs: {
      description: {
        component: 'CSS Grid',
      },
    },
  },
} as Meta

const Template: Story = (args) => <Grid {...args} />

export const FluidGrid = Template.bind({})
FluidGrid.args = {
  children: (
    <>
      <Box height="10rem">This is a box.</Box>
      <Box height="10rem">This is a box.</Box>
      <Box height="10rem">This is a box.</Box>
      <Box height="10rem">This is a box.</Box>
      <Box height="10rem">This is a box.</Box>
      <Box height="10rem">This is a box.</Box>
      <Box height="10rem">This is a box.</Box>
      <Box height="10rem">This is a box.</Box>
      <Box height="10rem">This is a box.</Box>
      <Box height="10rem">This is a box.</Box>
      <Box height="10rem">This is a box.</Box>
      <Box height="10rem">This is a box.</Box>
    </>
  ),
}
