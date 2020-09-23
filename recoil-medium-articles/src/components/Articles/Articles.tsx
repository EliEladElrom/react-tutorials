// src/components/Articles/Articles.tsx

import React from 'react'
import { useRecoilValue } from 'recoil'
import { getArticlesFromMediumByUser } from '../../recoil/selectors/articlesSelectors'
import ArticleListItem from './ArticleListItem'

const Articles = () => {
  const articles: any = useRecoilValue(getArticlesFromMediumByUser)
  return (
    <div>
      <h1 className="header">Eli Elad Elrom Latest Articles</h1>
      {articles.map(
        (article: any) => (
          <ArticleListItem article={article} />
        )
      )}
    </div>
  )
}

export default Articles
