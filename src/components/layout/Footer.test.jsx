import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Footer from './Footer'

// eslint-disable-next-line no-undef
it('should render a footer', () => {
  const { container } = render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  )

  // eslint-disable-next-line no-undef
  expect(container).toMatchSnapshot()
})
