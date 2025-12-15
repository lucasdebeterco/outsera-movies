import { render, screen, fireEvent } from '@testing-library/react';
import { WinnersByYearTable } from './winners-by-year-table';
import { WinnerByYear } from '@/src/types/WinnersByYear';

const pushMock = jest.fn();
let searchParamsValue = '';
jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: pushMock }),
  useSearchParams: () => ({ toString: () => searchParamsValue }),
}));

const mockData: WinnerByYear[] = [
  { id: 1, year: 2000, title: 123, studios: ['Studio A'], producers: ['Producer A'], winner: true },
  { id: 2, year: 2001, title: 456, studios: ['Studio B'], producers: ['Producer B'], winner: true },
];

describe('WinnersByYearTable', () => {
  beforeEach(() => {
    pushMock.mockClear();
    searchParamsValue = '';
  });

  it('renders the table and filter form', () => {
    render(<WinnersByYearTable data={mockData} />);
    expect(screen.getByText(/Exibir em tabela os vencedores/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Year')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search year')).toBeInTheDocument();
    expect(screen.getByText('Filter')).toBeInTheDocument();
    expect(screen.getByText('2000')).toBeInTheDocument();
    expect(screen.getByText('2001')).toBeInTheDocument();
    expect(screen.getByText('123')).toBeInTheDocument();
    expect(screen.getByText('456')).toBeInTheDocument();
  });

  it('updates the filter input value', () => {
    render(<WinnersByYearTable data={mockData} />);
    const input = screen.getByLabelText('Year');
    fireEvent.change(input, { target: { value: '2001' } });
    expect(input).toHaveValue('2001');
  });

  it('submits the form and sets year param', () => {
    searchParamsValue = '';
    render(<WinnersByYearTable data={mockData} />);
    const input = screen.getByLabelText('Year');
    fireEvent.change(input, { target: { value: '2020' } });
    fireEvent.click(screen.getByText('Filter'));
    expect(pushMock).toHaveBeenCalledWith('?year=2020');
  });

  it('submits the form and deletes year param if input is empty', () => {
    searchParamsValue = 'year=2020';
    render(<WinnersByYearTable data={mockData} />);
    const input = screen.getByLabelText('Year');
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(screen.getByText('Filter'));
    expect(pushMock).toHaveBeenCalledWith('?');
  });
});