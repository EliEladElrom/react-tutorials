/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/QuestionsWidget/QuestionsWidget
*/

import React, { useState } from 'react'
import './NetworksWidget.scss'
import { useRecoilValue } from 'recoil'
import SimpleForceGraph from '../../components/SimpleForceGraph/SimpleForceGraph'
import { Types } from '../../components/SimpleForceGraph/types'
import { getPowerChartData } from '../../recoil/selectors/powerChartSelectors'

const NetworksWidget = () => {
  const forceData: Types.dataObject = useRecoilValue(getPowerChartData) as Types.dataObject
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <>
      {forceData ? (
        <>
          <div className="selectedText">Selected Index: {selectedIndex}</div>
          <div className="wrapperDiv">
            <SimpleForceGraph
              width={800}
              height={350}
              data={forceData}
              onNodeSelected={setSelectedIndex}
              linkDistance={80}
              linkStrength={1}
              chargeStrength={-20}
              centerWidth={350}
              centerHeight={170}
            />
          </div>
        </>
      ) : (
        <>Loading</>
      )}
    </>
  )
}
export default NetworksWidget
