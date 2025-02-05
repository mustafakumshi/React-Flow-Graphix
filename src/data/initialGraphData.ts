import { Node, Edge } from "../types/graphixtypes";

export const initialNodes: Node[] = [
    {
      id: "1",
      data: { label: "Friend 1", color: "#000000", fontSize: 16},
      position: {x:40, y:140},
      type: "custom"
    },
    {
      id: "2",
      data: { label: "Friend 2", color: "#000000", fontSize: 16},
      position: {x:220, y:40},
      type: "custom"
    },
    {
      id: "3",
      data: { label: "Friend 3", color: "#000000", fontSize: 16},
      position: {x:400, y:40},
      type: "custom"
    },
    {
      id: "4",
      data: { label: "Friend 4", color: "#000000", fontSize: 16},
      position: {x:300, y:110},
      type: "custom"
    },
    {
      id: "5",
      data: { label: "Friend 5", color: "#000000", fontSize: 16},
      position: {x:180, y:260},
      type: "custom"
    },
    {
      id: "6",
      data: { label: "Friend 6", color: "#000000", fontSize: 16},
      position: {x:400, y:320},
      type: "custom"
    },
    {
      id: "7",
      data: { label: "Friend 7", color: "#000000", fontSize: 16},
      position: {x:100, y:420},
      type: "custom"
    },
    {
      id: "8",
      data: { label: "Friend 8", color: "#000000", fontSize: 16},
      position: {x:280, y:420},
      type: "custom"
    },
    {
      id: "9",
      data: { label: "Friend 9", color: "#000000", fontSize: 16},
      position: {x:280, y:500},
      type: "custom"
    },
    {
      id: "10",
      data: { label: "Friend 10", color: "#000000", fontSize: 16},
      position: {x:100, y:500},
      type: "custom"
    },
  ]


  export const initialEdges: Edge[] = [
    {
      id: "1-5",
      source: "1",
      target: "5",
      animated: true
    },
    {
      id: "4-5",
      source: "4",
      target: "5",
      animated: true
    },
    {
      id: "6-5",
      source: "6",
      target: "5",
      animated: true
    },
    {
      id: "7-5",
      source: "7",
      target: "5",
      animated: true
    },
    {
      id: "8-5",
      source: "8",
      target: "5",
      animated: true
    },
    {
      id: "2-3",
      source: "2",
      target: "3",
      animated: true
    },
    {
      id: "3-4",
      source: "3",
      target: "4",
      animated: true
    },
    {
      id: "8-9",
      source: "8",
      target: "9",
      animated: true
    },
    {
      id: "7-10",
      source: "7",
      target: "10",
      animated: true
    },
    {
      id: "7-8",
      source: "7",
      target: "8",
      animated: true
    },
    {
      id: "9-10",
      source: "9",
      target: "10",
      animated: true
    }
  ];