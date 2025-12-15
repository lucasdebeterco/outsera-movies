import { render, screen } from '@testing-library/react';
import { IntervalsTable } from './intervals-table';
import { Intervals } from '@/src/types/Intervals';

const mockData: Intervals = {
  max: [
    { producer: 'Producer A', interval: 10, previousWin: 2000, followingWin: 2010 },
  ],
  min: [
    { producer: 'Producer B', interval: 1, previousWin: 2018, followingWin: 2019 },
  ],
};

describe('IntervalsTable', () => {
  it('renders the table with correct labels and data', () => {
    render(<IntervalsTable data={mockData} />);
    expect(screen.getByText(/Producers with longest and shortest interval between wins/i)).toBeInTheDocument();
    expect(screen.getByText(/Maximum/i)).toBeInTheDocument();
    expect(screen.getByText(/Minimum/i)).toBeInTheDocument();
    expect(screen.getByText('Producer A')).toBeInTheDocument();
    expect(screen.getByText('Producer B')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2000')).toBeInTheDocument();
    expect(screen.getByText('2010')).toBeInTheDocument();
    expect(screen.getByText('2018')).toBeInTheDocument();
    expect(screen.getByText('2019')).toBeInTheDocument();
  });
});