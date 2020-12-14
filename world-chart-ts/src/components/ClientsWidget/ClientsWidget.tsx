/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/ClientsWidget/ClientsWidget.tsx
*/

import React, { useEffect } from 'react'
import './ClientsWidget.scss'
import { useRecoilValue } from 'recoil'
import { getPreviousClientListData } from '../../recoil/selectors/clientsSelectors'
import { clientsObject, mapObject } from '../../model'
import WorldwideChart from '../WorldwideChart/WorldwideChart'
import { getMapData } from '../../recoil/selectors/mapSelectors'

const ClientsWidget = () => {
  const clientsResults: clientsObject[] = useRecoilValue(getPreviousClientListData) as clientsObject[]
  const mapResults: mapObject = useRecoilValue(getMapData) as mapObject

  useEffect(() => {
    // results
    // console.log(`Result: ${JSON.stringify(clientsResults[0])}`)
    // console.log(`Result: ${JSON.stringify(mapResults.mapFeatures[0])}`)
  })
  return (
    <>
      {clientsResults?.length > 0 && mapResults.mapFeatures.length > 0 ? (
        <>
          <WorldwideChart clientsData={clientsResults} mapData={mapResults} scale={200} cx={0} cy={100} initRotation={100} rotationSpeed={0.3} />
        </>
      ) : (
        <>Loading!</>
      )}
    </>
  )
}
export default ClientsWidget
