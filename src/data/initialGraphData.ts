import { Node, Edge } from "../types/graphixtypes";

export const initialNodes: Node[] = [
    {
      id: "1",
      data: { label: "Vrutik", color: "#000000", fontSize: 16},
      position: {x:40, y:140},
      type: "custom"
    },
    {
      id: "2",
      data: { label: "Aakanksha", color: "#000000", fontSize: 16},
      position: {x:220, y:40},
      type: "custom"
    },
    {
      id: "3",
      data: { label: "Mitesh", color: "#000000", fontSize: 16},
      position: {x:400, y:40},
      type: "custom"
    },
    {
      id: "4",
      data: { label: "Pritam", color: "#000000", fontSize: 16},
      position: {x:300, y:110},
      type: "custom"
    },
    {
      id: "5",
      data: { label: "Mustafa", color: "#000435", fontSize: 16},
      position: {x:180, y:260},
      type: "custom"
    },
    {
      id: "6",
      data: { label: "Ismail", color: "#000000", fontSize: 16},
      position: {x:400, y:240},
      type: "custom"
    },
    {
      id: "7",
      data: { label: "Nikita", color: "#000000", fontSize: 16},
      position: {x:90, y:390},
      type: "custom"
    },
    {
      id: "8",
      data: { label: "Shubham", color: "#000000", fontSize: 16},
      position: {x:300, y:390},
      type: "custom"
    },
    {
      id: "9",
      data: { label: "Sahil", color: "#000000", fontSize: 16},
      position: {x:280, y:470},
      type: "custom"
    },
    {
      id: "10",
      data: { label: "Rutuja", color: "#000000", fontSize: 16},
      position: {x:110, y:460},
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