import { render, screen } from '@testing-library/react';
import { StudiosWithWinCountTable } from './studios-with-win-count-table';
import { StudiosWithWinCount } from '@/src/types/StudiosWithWinCount';

const mockData: StudiosWithWinCount[] = [
  { name: 'Studio A', winCount: 10 },
  { name: 'Studio B', winCount: 8 },
  { name: 'Studio C', winCount: 7 },
  { name: 'Studio D', winCount: 5 },
];

describe('StudiosWithWinCountTable', () => {
  it('renders the table with correct label and only top 3 studios', () => {
    render(<StudiosWithWinCountTable data={mockData} />);
    expect(screen.getByText(/Mostrar em uma tabela os três estúdios/i)).toBeInTheDocument();
    expect(screen.getByText('Studio A')).toBeInTheDocument();
    expect(screen.getByText('Studio B')).toBeInTheDocument();
    expect(screen.getByText('Studio C')).toBeInTheDocument();
    expect(screen.queryByText('Studio D')).not.toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('8')).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument();
  });
});