import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from './App'

function renderApp(route = '/') {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  )
}

describe('App', () => {
  it('renders the shared layout and home route by default', () => {
    renderApp()

    expect(screen.getByText('Shiv.dev')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /hi, i'm shiv/i })).toBeInTheDocument()
    expect(screen.getByText('Projects Built')).toBeInTheDocument()
    expect(screen.getByText('Shiv Portfolio')).toBeInTheDocument()
    expect(document.body).toHaveClass('dark-theme')
  })

  it('renders the requested route inside the app shell', () => {
    renderApp('/about')

    expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument()
    expect(screen.getByText('BCA First Year Student')).toBeInTheDocument()
    expect(screen.getByText('Shiv.dev')).toBeInTheDocument()
    expect(screen.getByText('Shiv Portfolio')).toBeInTheDocument()
  })

  it('toggles the document theme from the navbar button', async () => {
    const user = userEvent.setup()

    renderApp()

    expect(document.body).toHaveClass('dark-theme')

    await user.click(screen.getByRole('button', { name: /switch to light theme/i }))

    expect(document.body).toHaveClass('light-theme')
  })
})
