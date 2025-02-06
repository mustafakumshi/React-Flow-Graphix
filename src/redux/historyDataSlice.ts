import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the state structure more explicitly
export interface NodeState {
  nodeId: string; // The ID of the node
  type: string;
  nodeData: any;  // The data associated with the node (e.g., label, color, etc.)
}

export interface NodeDraggedState {
  nodeId: string; // The ID of the node
  type: string;
  position: { x: number; y: number };  // Position change of the node (x, y)
}

export interface HistoryState {
  past: (NodeState | NodeDraggedState)[];  // Array of past node states or position changes
  present: NodeState | NodeDraggedState | null;  // Current node state or position
  future: (NodeState | NodeDraggedState)[];  // Array of future node states or position changes
}

const initialState: HistoryState = {
  past: [],
  present: null, // Could be either NodeState or NodeDraggedState
  future: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    // Save a Node Modified State (e.g., label, color, fontSize)
    nodeModified: (state, action: PayloadAction<NodeState>) => {
      if (state.present) {
        state.past.push(state.present); // Push the current state to past history
      }
      state.present = action.payload; // Set the new state as the present state
      state.future = []; // Clear the future stack since a new change was made
    },
    
    // Save a Node Dragged State (e.g., position changes)
    nodeDragged: (state, action: PayloadAction<NodeDraggedState>) => {
      if (state.present) {
        state.past.push(state.present); // Push the current state to past history
      }
      state.present = action.payload; // Set the new position as the present state
      state.future = []; // Clear the future stack since a new change was made
    },

    // Undo the state to the previous one (either modification or dragging)
    undo: (state) => {
      if (state.past.length > 0) {
        state.future.unshift(state.present!); // Push the current state into the future stack
        state.present = state.past.pop()!; // Pop the last state from past and set it as present
      }
    },

    // Redo the state to the next one (either modification or dragging)
    redo: (state) => {
      if (state.future.length > 0) {
        state.past.push(state.present!); // Push the current state into the past stack
        state.present = state.future.shift()!; // Shift the first state from the future stack to present
      }
    },
  },
});

export const { nodeModified, nodeDragged, undo, redo } = historySlice.actions;
export default historySlice.reducer;
