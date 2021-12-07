import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

// eslint-disable-next-line no-undef
it('renders a welcome message when signed out', async () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )

  const texto = screen.getAllByText(/library catalog/i)

  // eslint-disable-next-line no-undef
  // expect(texto).toBeInTheDocument()

  // eslint-disable-next-line no-undef
  expect(container).toMatchSnapshot()
})
