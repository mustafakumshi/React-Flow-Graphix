import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { redo, undo } from "../redux/historyDataSlice";
import { RootState } from "../redux/store";
import { updateNode } from "../redux/graphSlice";
import { NodeState, NodeDraggedState } from "../redux/historyDataSlice";

// Type guard to check if present is of type NodeState
const isNodeState = (state: any): state is NodeState => {
  return state && 'nodeData' in state; // Check if the object has `nodeData` property
};

// Type guard to check if present is of type NodeDraggedState
const isNodeDraggedState = (state: any): state is NodeDraggedState => {
  return state && 'position' in state; // Check if the object has `position` property (specific to NodeDraggedState)
};

const UndoRedoControls: React.FC = () => {
  const history = useSelector((state: RootState) => state.history);
  const { present, future } = history;
  const dispatch = useDispatch();

  const handleUndo = () => {
    if (present) {
      // Check if present is a NodeState
      if (isNodeState(present)) {
        const { nodeId: id, nodeData: { old } } = present; // Destructure 'old' directly
        if (id && old) {
          // Pass the full node data to updatedNode 
          dispatch(updateNode({ 
            id, 
            updatedNode: { data: old } 
          }));
        }
      }
      dispatch(undo());
    }
  };
  
  const handleRedo = () => {
    if (future.length !== 0) {
      // Check if the first future item is a NodeState
      if (isNodeState(future[0])) {
        const { nodeId: id, nodeData: { new : newData} } = future[0]; // Destructure 'new' directly
        if (id && newData) {
          // Pass the full node data to updatedNode (using new.data)
          dispatch(updateNode({ 
            id, 
            updatedNode: { data: newData } 
          }));
        }
      }
      dispatch(redo());
    }
  };
  

  return (
    <div className="p-4 bg-gray-200 flex gap-4 w-full justify-center">
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer disabled:bg-blue-300 disabled:cursor-not-allowed" 
        onClick={handleUndo} 
        disabled={!present}
      >
        Undo
      </button>
      <button 
        className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer disabled:bg-green-300 disabled:cursor-not-allowed" 
        onClick={handleRedo} 
        disabled={!future.length}
      >
        Redo
      </button>
    </div>
  );
};

export default UndoRedoControls;