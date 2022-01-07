/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/widgets/NetworkWidget/NetworkWidget.tsx
*/

import React from 'react'
import './NetworkWidget.scss'
import { useRecoilValue } from 'recoil'
import { Types } from '../../components/Simple3DForceGraph/types'
import { getPowerChartData } from '../../recoil/selectors/forceGraphSelectors'
import Simple3DForceGraph from '../../components/Simple3DForceGraph/Simple3DForceGraph'

const NetworkWidget = () => {
  const forceData: Types.DataObject = useRecoilValue(getPowerChartData) as Types.DataObject
  return (
    <>
      {forceData ? (
        <>
          <div className="wrapperDiv">
            <Simple3DForceGraph data={forceData} />
          </div>
        </>
      ) : (
        <>Loading</>
      )}
    </>
  )
}
export default NetworkWidget
