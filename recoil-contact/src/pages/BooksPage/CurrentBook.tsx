import React from 'react'
import { useRecoilValue } from 'recoil'
import { currentBookQuery } from '../../recoil/selectors/booksSelectors'
import './BooksPage.scss'

const CurrentBook = () => {
  const currentBook = useRecoilValue(currentBookQuery)
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

export default CurrentBook
