// src/pages/BooksPage/BooksPage.tsx

import React, { Suspense } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import { getAllBooks } from '../../recoil/selectors/booksSelectors'
import { currentBookIDState } from '../../recoil/atoms/booksAtoms'
import BookDetail from './BookDetail'

const BooksPage = () => {
  const books: any = useRecoilValue(getAllBooks)
  const [currentBookID, setCurrentBookID] = useRecoilState(currentBookIDState)
  return (
    <div className="BooksPageMain">
      <h2>Eli Elad Elrom Technology Books</h2>
      {books.map((book: { id: string; title: string }) => (
        <div key={book.id}>
          <button onClick={() => setCurrentBookID(book.id)}>
            {book.id === currentBookID && '- '}
            {book.title}
          </button>
        </div>
      ))}
      {currentBookID && (
        <Suspense fallback={<span>Loading</span>}>
          <BookDetail />
        </Suspense>
      )}
    </div>
  )
}

export default BooksPage
