import React from "react";
import { useDispatch } from "react-redux";
import { redo, undo } from "../redux/historyDataSlice";

const UndoRedoControls: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div className="p-4 bg-gray-200 flex gap-4 w-full justify-center">
      <button className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer" onClick={() => dispatch(undo())}>Undo</button>
      <button className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer" onClick={() => dispatch(redo())}>Redo</button>
    </div>
  );
};

export default UndoRedoControls;