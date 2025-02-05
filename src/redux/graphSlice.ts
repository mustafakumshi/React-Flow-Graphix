// src/store/graphSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Node, GraphState } from '../types/graphixtypes'; 
import { initialNodes, initialEdges } from '../data/initialGraphData';  // Initial nodes and edges

const initialState: GraphState = {
  nodes: initialNodes,
  edges: initialEdges,
};

const graphSlice = createSlice({
    name: 'graph',
    initialState,
    reducers: {
      // Update a node with the new partial data
      updateNode: (state, action: PayloadAction<{ id: string; updatedNode: Partial<Node> }>) => {
        const { id, updatedNode } = action.payload;
      
        // Find the index of the node to update
        const nodeIndex = state.nodes.findIndex((node) => node.id === id);
      
        if (nodeIndex !== -1) {
          // Create a new node object with the updated properties, 
          // preserving other properties within nested objects like `data` and `position`.
          state.nodes[nodeIndex] = {
            ...state.nodes[nodeIndex],
            ...updatedNode, 
            data: {
              ...state.nodes[nodeIndex].data,
              ...updatedNode.data,
            },
            position: {
              ...state.nodes[nodeIndex].position,
              ...updatedNode.position,
            },
          };
        }
      } 
    }
  });
  
  export const { updateNode } = graphSlice.actions;
  export default graphSlice.reducer;
