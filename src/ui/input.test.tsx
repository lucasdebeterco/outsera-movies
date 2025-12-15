import { render, screen } from '@testing-library/react'
import { Input } from './input'

describe('Input', () => {
  it('renders input with label', () => {
    render(<Input id="username" label="Username" placeholder="Enter username" />)
    expect(screen.getByLabelText('Username')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument()
  })
})