/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/widgets/ClientsWidget/ClientsWidget.tsx
*/

import React, { useEffect, useState } from 'react'
import './ClientsWidget.scss'
import { useRecoilValue } from 'recoil'
import { Grid } from '@material-ui/core'
import { getPreviousClientListData } from '../../recoil/selectors/clientsSelectors'
import { clientsObject, mapObject } from '../../model'
import { getMapData } from '../../recoil/selectors/mapSelectors'
import WorldMap from '../../components/WorldMap/WorldMap'
import ClientListDetail from '../../components/ClientListDetail/ClientListDetail'
import ClientList from '../../components/ClientList/ClientList'

const ClientsWidget = () => {
  const clientsData: clientsObject[] = useRecoilValue(getPreviousClientListData) as clientsObject[]
  const mapData: mapObject = useRecoilValue(getMapData) as mapObject

  const [selectedItem, setSelectedItem] = useState<clientsObject>(clientsData[0])

  useEffect(() => {
    // results
    // console.log(`Result: ${JSON.stringify(clientsResults[0])}`)
    // console.log(`Result: ${JSON.stringify(mapResults.mapFeatures[0])}`)
  })
  return (
    <>
      {clientsData?.length > 0 && mapData.mapFeatures.length > 0 ? (
        <>
          <Grid container>
            <Grid item xs={3}>
              <ClientList data={clientsData} setSelectedItem={setSelectedItem} />
            </Grid>
            <Grid item xs={8}>
              <WorldMap mapData={mapData} clientsData={clientsData} selectedItem={selectedItem} setSelectedItem={setSelectedItem} scale={200} cx={0} cy={100} initRotation={100} rotationSpeed={0.3} />
            </Grid>
          </Grid>
          <ClientListDetail selectedItem={selectedItem} data={clientsData} setSelectedItem={setSelectedItem} paddingTop={400} />
        </>
      ) : (
        <>Loading!</>
      )}
    </>
  )
}
export default ClientsWidget
