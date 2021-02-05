/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/widgets/HistogramWidget/HistogramWidget.tsx
*/

import React, { useEffect } from 'react'
import './HistogramWidget.scss'
import { useRecoilValue } from 'recoil'
import Grid from '@material-ui/core/Grid'
import { getHistoricalPriceData } from '../../recoil/selectors/historicalPriceSelectors'
import { historicalPriceObject } from '../../model'
import Histogram from '../../components/Histogram/Histogram'
import PriceTableList from '../../components/PriceTableList/PriceTableList'

const HistogramWidget = () => {
  const results: historicalPriceObject[] = useRecoilValue(getHistoricalPriceData) as historicalPriceObject[]
  useEffect(() => {
    // results
    // console.log(`Result: ${JSON.stringify(results[0])}`)
  })
  return (
    <>
      {results?.length > 0 ? (
        <>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <Histogram data={results} margin={{ top: 20, right: 45, bottom: 20, left: 50 }} width={400} height={400} fill="tomato" />
            </Grid>
            <Grid item xs={6}>
              <div className="priceTableListDivWrapper">
                <PriceTableList data={results} textColor="white" />
              </div>
            </Grid>
          </Grid>
        </>
      ) : (
        <>Loading!</>
      )}
    </>
  )
}
export default HistogramWidget
