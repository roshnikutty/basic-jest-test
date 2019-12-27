import React from 'react'
import ReactDOM from 'react-dom'
import {render, cleanup} from '@testing-library/react'
import renderer from 'react-test-renderer'

import Button from '../button'

afterEach(cleanup)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button></Button>, div)
})

it('renders Button correctly', () => {
  const {getByTestId} = render(<Button label='click me'></Button>)
  expect(getByTestId('button')).toHaveTextContent('click me')
})

it('matches snapshot', () => {
  const tree = renderer.create(<Button label='save'></Button>).toJSON();
  expect(tree).toMatchSnapshot()
})