export interface Node {
  id: string;
  position: { x: number; y: number };
  data: {
    label: string;
    color: string;
    fontSize: number;
  };
}

export interface Edge {
  id: string;
  source: string;
  target: string;
}

export interface GraphState {
  nodes: Node[];
  edges: Edge[];
}

export interface HistoryState {
  past: { nodes: Node[]; edges: Edge[] }[];
  present: { nodes: Node[]; edges: Edge[] };
  future: { nodes: Node[]; edges: Edge[] }[];
}
