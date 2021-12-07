import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

// eslint-disable-next-line no-undef
it('should render a header', () => {
  const { container } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  )

  // eslint-disable-next-line no-undef
  expect(container).toMatchSnapshot()
})
