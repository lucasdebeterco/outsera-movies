import { render, screen } from '@testing-library/react'
import { PaginationArea } from './pagination-area'

const mockPush = jest.fn()
jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
  useSearchParams: () => new URLSearchParams(),
}))

describe('PaginationArea', () => {
  it('renders pagination with pages', () => {
    render(<PaginationArea pagination={{ totalPages: 3, number: 0 }} />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('renders pagination with no pages', () => {
    render(<PaginationArea pagination={{ totalPages: 0, number: 0 }} />)
    expect(screen.queryByText('1')).not.toBeInTheDocument()
  })

  it('renders with totalPages undefined', () => {
    render(<PaginationArea pagination={{ number: 0 }} />)
    expect(screen.getByText('1')).toBeInTheDocument()
  })
})