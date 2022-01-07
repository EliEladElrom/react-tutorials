/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/widgets/Simple3DForceGraph/Simple3DForceGraph.tsx
*/

import React, { useCallback, useRef } from 'react'
import ForceGraph3d from "react-force-graph-3d";
import { Types } from './types'

const Simple3DForceGraph = (props: ISimple3DForceGraphProps) => {
  const dt = JSON.parse(JSON.stringify(props.data))
  const ref = useRef();
  const handleClick = useCallback(
    (node) => {
      // Camera points to node from outside
      const distance = 50;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
      if (ref.current && (ref.current as object).hasOwnProperty('cameraPosition')) {
        (ref.current as Types.CameraPosition).cameraPosition(
          { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
          node, // ({ x, y, z })
          3000 // transition ms
        );
      }
    },
    [ref]
  );
  return (
    <ForceGraph3d
      ref={ref}
      nodeLabel={d => `<span style="color: grey">${d.id}</span>`}
      backgroundColor="rgba(0,0,0,0)"
      nodeColor={(obj) => {
        return (obj as { fillColor: string; }).fillColor
      }}
      linkColor={() => "blue"}
      graphData={dt}
      onNodeClick={handleClick}
    />
  );
}

interface ISimple3DForceGraphProps {
  data: Types.DataObject
}

export default Simple3DForceGraph

