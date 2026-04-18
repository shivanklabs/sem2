import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import Projects from './Project'

describe('Projects', () => {
  it('renders all project cards by default', () => {
    render(<Projects />)

    expect(screen.getByRole('heading', { name: /featured projects/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /trading dashboard/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /crypto tracker/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /portfolio website/i })).toBeInTheDocument()
  })

  it('filters projects by search text', async () => {
    const user = userEvent.setup()

    render(<Projects />)

    await user.type(screen.getByPlaceholderText(/search projects/i), 'crypto')

    expect(screen.getByRole('heading', { name: /crypto tracker/i })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: /trading dashboard/i })).not.toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: /portfolio website/i })).not.toBeInTheDocument()
  })
})
