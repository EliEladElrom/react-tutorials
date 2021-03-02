/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/SimpleCalendarChart/SimpleCalendarChart.tsx
*/

import React from 'react'
import { ResponsiveCalendar } from '@nivo/calendar'

const SimpleCalendarChart = (props: ISimpleCalendarChartProps) => {
  return (
    <div style={{ width: 800, height: 500 }}>
      <ResponsiveCalendar
        data={props.data}
        from="2019-01-01"
        to="2021-12-31"
        emptyColor="#eeeeee"
        colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'row',
            translateY: 36,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: 'right-to-left',
          },
        ]}
      />
    </div>
  )
}

interface ISimpleCalendarChartProps {
  data: { day: string; value: number }[]
}

export default SimpleCalendarChart
