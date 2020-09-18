// https://recoiljs.org/docs/guides/asynchronous-data-queries
// dispatch - https://stackoverflow.com/questions/62601155/recoil-js-getting-rid-of-the-suspense-re-rendering-my-app

import React, { Suspense } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import { myBooksQuery } from '../../recoil/selectors/booksSelectors'
import { currentBookIDState } from '../../recoil/atoms/booksAtoms'
import CurrentBook from './CurrentBook'

const BooksPage = () => {
  const songs: any = useRecoilValue(myBooksQuery)
  const [currentBookID, setCurrentBookID] = useRecoilState(currentBookIDState)
  return (
    <div className="BooksPageMain">
      <h2>Eli Elad Elrom Technology Books</h2>
      {songs.map((book: { id: string; title: string }) => (
        <div key={book.id}>
          <button onClick={() => setCurrentBookID(book.id)}>
            {book.id === currentBookID && '- '}
            {book.title}
          </button>
        </div>
      ))}
      {currentBookID && (
        <Suspense fallback={<span>Loading</span>}>
          <CurrentBook />
        </Suspense>
      )}
    </div>
  )
}

export default BooksPage
