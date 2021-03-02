/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/SimplePie/SimplePie.tsx
*/

import React from 'react'
import { VictoryPie } from 'victory'

const SimplePie = () => {
  return (
    <div className="SimplePie">
      <VictoryPie
        data={[
          { x: 'Cats', y: 35 },
          { x: 'Dogs', y: 40 },
          { x: 'Birds', y: 55 },
        ]}
      />
    </div>
  )
}

export default SimplePie
