import { render, screen } from '@testing-library/react'
import { DataTable } from './data-table'
import { ColumnDef } from '@tanstack/react-table'

type TestData = {
  id: number
  name: string
}

const columns: ColumnDef<TestData>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
]

const data: TestData[] = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
]

describe('DataTable', () => {
  it('renders table with data', () => {
    render(<DataTable columns={columns} data={data} />)
    expect(screen.getByText('ID')).toBeInTheDocument()
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })

  it('renders no results when data is empty', () => {
    render(<DataTable columns={columns} data={[]} />)
    expect(screen.getByText('No results.')).toBeInTheDocument()
  })

})