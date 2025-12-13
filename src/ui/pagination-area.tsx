'use client'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/src/ui/pagination"
import { useSearchParams } from 'next/navigation'


interface PaginationAreaProps {
  pagination: {
    totalPages?: number
    number: number
  }
}

export function PaginationArea({ pagination }: PaginationAreaProps) {
  const searchParams = useSearchParams()
  const currentPage = pagination.number ? pagination.number + 1 : 1
  const totalPages = pagination.totalPages ?? 1

  function getPageNumbers() {
    const pages = []
    for(let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }

    return pages
  }

  function buildQueryParams(page: number) {
    const params = new URLSearchParams(searchParams.toString())
    params.set('pagina', page.toString())
    return `?${params.toString()}`
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            isActive={currentPage > 1}
            href={buildQueryParams(currentPage - 1)}
          />
        </PaginationItem>
        {getPageNumbers().map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              isActive={currentPage === page}
              href={buildQueryParams(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}


        <PaginationItem>
          <PaginationNext
            isActive={currentPage < totalPages}
            href={buildQueryParams(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
