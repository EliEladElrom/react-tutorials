/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/SimpleForceGraph/types.ts
*/

export namespace Types {
  export type Node = {
    id: string;
    userId: number;
    fillColor: string;
    nodeType: number;
  };
  export type Link = {
    source: string;
    target: string;
    value: string;
  };
  export type DataObject = {
    author: string;
    nodes: Node[];
    links: Link[];
  };
  export type CameraPosition = {
    cameraPosition: (arg0: { x: number; y: number; z: number }, arg1: object, arg2: number) => void;
  };
}