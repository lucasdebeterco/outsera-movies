import { render, screen, fireEvent, within } from '@testing-library/react'
import { MoviesTable } from './movies-table'
import { Movie } from '@/src/types/Movie'

const mockPush = jest.fn()
let mockUseSearchParams: jest.Mock

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
  useSearchParams: () => mockUseSearchParams(),
}))

const moviesList: Movie[] = [
  { id: 1, title: 'Filme 1', producers: [], studios: [], year: 2020, winner: true },
  { id: 2, title: 'Filme 2', producers: [], studios: [], year: 2021, winner: false },
]

describe('MoviesTable', () => {
  beforeEach(() => {
    mockUseSearchParams = jest.fn(() => new URLSearchParams())
    mockPush.mockClear()
  })

  it('should render form and table', () => {
    render(<MoviesTable moviesList={moviesList} />)
    expect(screen.getByRole('filter-button')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByText('Filme 1')).toBeInTheDocument()
    expect(screen.getByText('Filme 2')).toBeInTheDocument()
  })

  it('should send the filter and call router.push', () => {
    render(<MoviesTable moviesList={moviesList} />)
    fireEvent.change(screen.getByPlaceholderText('Year'), { target: { value: '2021' } })
    fireEvent.click(screen.getByRole('filter-button'))
    expect(mockPush).toHaveBeenCalled()
  })

  it('should send the filter with empty year', () => {
    render(<MoviesTable moviesList={moviesList} />)
    fireEvent.change(screen.getByPlaceholderText('Year'), { target: { value: '' } })
    fireEvent.click(screen.getByRole('filter-button'))
    expect(mockPush).toHaveBeenCalledWith('?page=1')
  })

  it('should send the filter with winner "Yes"', () => {
    render(<MoviesTable moviesList={moviesList} />)
    const select = screen.getByRole('combobox')
    fireEvent.click(select)
    const listbox = screen.getByRole('listbox')
    fireEvent.click(within(listbox).getByText('Yes'))
    fireEvent.click(screen.getByRole('filter-button'))
    expect(mockPush).toHaveBeenCalledWith('?winner=1&page=1')
  })

  it('should send the filter with winner "No"', () => {
    render(<MoviesTable moviesList={moviesList} />)
    const select = screen.getByRole('combobox')
    fireEvent.click(select)
    const listbox = screen.getByRole('listbox')
    fireEvent.click(within(listbox).getByText('No'))
    fireEvent.click(screen.getByRole('filter-button'))
    expect(mockPush).toHaveBeenCalledWith('?winner=0&page=1')
  })

  it('should send the filter with no winner', () => {
    render(<MoviesTable moviesList={moviesList} />)
    fireEvent.click(screen.getByRole('filter-button'))
    expect(mockPush).toHaveBeenCalledWith('?page=1')
  })

  it('initializes filters from URL params', () => {
    mockUseSearchParams = jest.fn(() => new URLSearchParams('winner=1&year=2020'))
    render(<MoviesTable moviesList={moviesList} />)
    expect(screen.getByRole('combobox')).toHaveTextContent('Yes')
    expect(screen.getByPlaceholderText('Year')).toHaveValue('2020')
  })
})