// adds handy assertions we'll use
import '@testing-library/jest-dom/extend-expect'

// framework imports
import React from 'react'
import ReactDOM from 'react-dom'

// DOM Testing Library utilities
// note: if your framework does not apply updates to the DOM synchronously
// then you can use the fireEventAsync export in ./fire-event-async.js
// see hyperapp.test.js for an example of this.
import {getQueriesForElement, fireEvent} from '@testing-library/dom'

// the component in your framework
function Counter() {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount(c => c + 1)
  return (
    <div>
      <button onClick={increment}>{count}</button>
    </div>
  )
}

// a generic "render" method that you could use for any component for
// your framework
function render(ui) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  ReactDOM.render(ui, container)
  return {
    container,
    ...getQueriesForElement(container),
  }
}

// the test.
// This test _should_ look almost identical between each framework
// that's the idea that I'm trying to get across in this repo!
test('renders a counter', () => {
  const {getByText} = render(<Counter />)
  const counter = getByText('0')
  fireEvent.click(counter)
  expect(counter).toHaveTextContent('1')

  fireEvent.click(counter)
  expect(counter).toHaveTextContent('2')
})