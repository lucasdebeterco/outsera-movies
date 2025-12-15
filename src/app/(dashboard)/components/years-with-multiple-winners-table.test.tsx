import { render, screen } from '@testing-library/react';
import { YearsWithMultipleWinnersTable } from './years-with-multiple-winners-table';
import { YearWithMultipleWinners } from '@/src/types/YearWithMultipleWinners';

const mockData: YearWithMultipleWinners[] = [
  { year: 2000, winnerCount: 2 },
  { year: 2010, winnerCount: 3 },
];

describe('YearsWithMultipleWinnersTable', () => {
  it('renders the table with correct label and data', () => {
    render(<YearsWithMultipleWinnersTable data={mockData} />);
    expect(screen.getByText(/Mostrar em uma tabela os anos/i)).toBeInTheDocument();
    expect(screen.getByText('2000')).toBeInTheDocument();
    expect(screen.getByText('2010')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});