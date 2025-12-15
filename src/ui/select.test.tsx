import { render, screen } from '@testing-library/react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from './select'

describe('Select', () => {
  it('renders select with label', () => {
    render(
      <Select label="Choose option">
        <SelectTrigger>
          <SelectValue placeholder="Select..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
          <SelectItem value="2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    )
    expect(screen.getByText('Choose option')).toBeInTheDocument()
    expect(screen.getByText('Select...')).toBeInTheDocument()
  })

  it('renders select without label', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    )
    expect(screen.getByText('Select...')).toBeInTheDocument()
    expect(screen.queryByText('Choose option')).not.toBeInTheDocument()
  })

  it('renders select trigger with sm size', () => {
    render(
      <Select>
        <SelectTrigger size="sm">
          <SelectValue placeholder="Select..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    )
    expect(screen.getByText('Select...')).toBeInTheDocument()
  })

  it('renders select content with popper position', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select..." />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectItem value="1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    )
    expect(screen.getByText('Select...')).toBeInTheDocument()
  })

  it('renders SelectLabel', () => {
    render(
      <Select>
        <SelectGroup>
          <SelectLabel>Label Text</SelectLabel>
        </SelectGroup>
      </Select>
    )
    expect(screen.getByText('Label Text')).toBeInTheDocument()
  })

  it('renders SelectSeparator', () => {
    const { container } = render(<SelectSeparator data-testid="separator" />)
    const separator = container.querySelector('[data-slot="select-separator"]')
    expect(separator).toBeInTheDocument()
  })
})