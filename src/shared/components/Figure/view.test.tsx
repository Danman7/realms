import renderer from 'react-test-renderer'

import { Figure } from './view'

describe('<Figure />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Figure icon="castle" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
