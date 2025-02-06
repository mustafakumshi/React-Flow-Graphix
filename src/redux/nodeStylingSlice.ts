import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the node data (color, font size, name)
interface ActiveNodeData {
  id: string | null;
  position: { x: number | null; y: number | null };
  data: {
    label: string | null;
    color: string | null;
    fontSize: number | null;
  };
  type?: string | null;
}

// Define the initial state for the node styling
interface NodeStylingState {
  activeNodeData: ActiveNodeData; // Data of the active node
  initialData: ActiveNodeData;
}

// Initial state with a default node
const initialState: NodeStylingState = {
  activeNodeData: {
    id: null,
    position: { x: null, y: null },
    data: {
      label: null,
      color: null,
      fontSize: null,
    },
    type: null,
  },
  initialData: {
    id: null,
    position: { x: null, y: null },
    data: {
      label: null,
      color: null,
      fontSize: null,
    },
    type: null,
  },
};

// Create the slice
const nodeStylingSlice = createSlice({
  name: "nodeStyling",
  initialState,
  reducers: {
    // Set the active node with its data (when a node is clicked/focused)
    setActiveNode: (
      state,
      action: PayloadAction<{ currentNodeData: ActiveNodeData }>
    ) => {
      state.activeNodeData = action.payload.currentNodeData;
      state.initialData = action.payload.currentNodeData;
    },

    // Update the active node data (for updating name, color, font size)
    updateNodeData: (
      state,
      action: PayloadAction<{
        id: string;
        updatedNode: Partial<ActiveNodeData>;
      }>
    ) => {
      const { id, updatedNode } = action.payload;
      if (state.activeNodeData.id && state.activeNodeData.id === id) {
        state.activeNodeData = {
          ...state.activeNodeData,
          ...updatedNode,
          data: {
            ...state.activeNodeData.data,
            ...updatedNode.data,
          },
          position: {
            ...state.activeNodeData.position,
            ...updatedNode.position,
          },
        };
      }
    },

    // Reset Active Node
    resetNodeData: (state) => {
      state.activeNodeData = initialState.activeNodeData;
      state.initialData = initialState.initialData;
    },
  },
});

// Export actions
export const { setActiveNode, updateNodeData, resetNodeData } = nodeStylingSlice.actions;

// Export the reducer
export default nodeStylingSlice.reducer;
