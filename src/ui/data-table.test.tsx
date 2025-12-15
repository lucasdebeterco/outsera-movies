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

  it('renders table with grouped columns', () => {
    const groupedColumns: ColumnDef<TestData>[] = [
      {
        header: 'Group',
        columns: [
          {
            id: 'group_id',
            accessorKey: 'id',
            header: 'ID',
          },
          {
            id: 'group_name',
            accessorKey: 'name',
            header: 'Name',
          },
        ]
      },
      {
        id: 'id2',
        accessorKey: 'id',
        header: 'ID2',
      }
    ]
    render(<DataTable columns={groupedColumns} data={data} />)
    expect(screen.getByText('Group')).toBeInTheDocument()
    expect(screen.getByText('ID')).toBeInTheDocument()
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('ID2')).toBeInTheDocument()
    expect(screen.getAllByText('1')).toHaveLength(2)
    expect(screen.getByText('Item 1')).toBeInTheDocument()
  })

  it('renders table with row selection enabled', () => {
    render(<DataTable columns={columns} data={data} tableOptions={{ enableRowSelection: true, initialState: { rowSelection: { '0': true } } }} />)
    expect(screen.getByText('ID')).toBeInTheDocument()
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('Item 1')).toBeInTheDocument()
  })
})