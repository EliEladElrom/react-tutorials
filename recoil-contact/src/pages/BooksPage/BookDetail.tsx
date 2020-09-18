// src/pages/BooksPage/BookDetail.tsx

import React from 'react'
import { useRecoilValue } from 'recoil'
import { getBookDetail } from '../../recoil/selectors/booksSelectors'
import './BooksPage.scss'

const BookDetail = () => {
  const currentBook = useRecoilValue(getBookDetail)
  return currentBook ? (
    <>
      <h2>View Book on Amazon:</h2>
      <p>
        URL:
        <a href={currentBook.url} target="_blank" rel="noopener noreferrer">
          {currentBook.url}
        </a>
      </p>
    </>
  ) : null
}

export default BookDetail
