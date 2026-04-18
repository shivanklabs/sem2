import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import ContactForm from './ContactForm'

describe('ContactForm', () => {
  it('shows a success message and clears fields after a complete submission', async () => {
    const user = userEvent.setup()

    render(<ContactForm />)

    const nameInput = screen.getByPlaceholderText(/enter your name/i)
    const emailInput = screen.getByPlaceholderText(/enter your email/i)
    const messageInput = screen.getByPlaceholderText(/enter your message/i)

    await user.type(nameInput, 'Shiv')
    await user.type(emailInput, 'shiv@example.com')
    await user.type(messageInput, 'Hello from the test suite')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument()
    expect(nameInput).toHaveValue('')
    expect(emailInput).toHaveValue('')
    expect(messageInput).toHaveValue('')
  })

  it('does not submit when required fields are empty', async () => {
    const user = userEvent.setup()

    render(<ContactForm />)

    await user.click(screen.getByRole('button', { name: /send message/i }))

    expect(screen.queryByText(/message sent successfully/i)).not.toBeInTheDocument()
  })
})
