import React, { useState } from 'react';
import { FaFont, FaPalette, FaTextWidth, FaTimes } from 'react-icons/fa'; // Icons for Update Text, Update Color, Update Font, and Close
import { useDispatch, useSelector } from 'react-redux';
import { resetNodeData, updateNodeData } from '../redux/nodeStylingSlice';
import { RootState } from '../redux/store';
import { useEffect } from 'react';


const NodeCustomizationPanel= () => {

  const activeNodeData = useSelector((state : RootState) => state.nodeStyling.activeNodeData);
  const {color: activeColor, fontSize: activeFontSize, label: activeName} = activeNodeData.data;   

  const [color, setColor] = useState(activeColor);
  const [fontSize, setFontSize] = useState(activeFontSize);
  const [name, setName] = useState(activeName);

    // Sync local state with redux state when activeNodeData changes
    useEffect(() => {
        if (activeNodeData.id) {
          setColor(activeNodeData.data.color);
          setFontSize(activeNodeData.data.fontSize);
          setName(activeNodeData.data.label);
        }
      }, [activeNodeData]); // Run whenever activeNodeData changes

  const dispatch = useDispatch();

  const handleNameChange =(e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if(activeNodeData.id){
        dispatch(updateNodeData({
            id: activeNodeData.id,
            updatedNode: {
               data: {
                label: e.target.value,
                color: activeColor,
                fontSize: activeFontSize
               } 
            }
        }))
    }
  }

  // Update font size dynamically as the user interacts
  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontSize(parseInt(e.target.value));
    if(activeNodeData.id){
        dispatch(updateNodeData({
            id: activeNodeData.id,
            updatedNode: {
               data: {
                label: activeName,
                color: activeColor,
                fontSize: parseInt(e.target.value)
               } 
            }
        }))
    }
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value)
    if(activeNodeData.id){
        dispatch(updateNodeData({
            id: activeNodeData.id,
            updatedNode: {
               data: {
                label: activeName,
                color: e.target.value,
                fontSize: activeFontSize
               } 
            }
        }))
    }
  }

  const handleSave = () => {
    dispatch(resetNodeData());
  };

  const onClose = () => {
     dispatch(resetNodeData());
  }

  if(!activeNodeData.id) return;

  return (
    <div className="w-full max-w-lg bg-white px-4 py-12 rounded-lg shadow-md space-y-4 relative">
      {/* Close Button */}
      <div className="absolute top-2 right-2 cursor-pointer" onClick={onClose}>
        <FaTimes size={20} />
      </div>

      {/* Node Name */}
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaTextWidth size={20} className="text-gray-700" />
          <label htmlFor="nodeName" className="text-lg font-medium text-gray-700">Update Name:</label>
        </div>
        <input
          id="nodeName"
          type="text"
          className="w-full sm:w-2/3 p-2 mt-2 sm:mt-0 border border-gray-300 rounded-md"
          value={name ?? ""}
          onChange={(e) => handleNameChange(e)}
        />
      </div>

      {/* Node Color */}
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaPalette size={20} className="text-gray-700" />
          <label htmlFor="nodeColor" className="text-lg font-medium text-gray-700">Update Color:</label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            id="nodeColor"
            type="color"
            value={color ?? ""}
            onChange={(e) => handleColorChange(e)}
            className="w-12 h-12 p-0 border-none cursor-pointer"
          />
        </div>
      </div>

      {/* Font Size Control */}
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaFont size={20} className="text-gray-700" />
          <label htmlFor="fontSize" className="text-lg font-medium text-gray-700">Update Font Size:</label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            id="fontSize"
            type="range"
            min="12"
            max="24"
            step="1"
            value={fontSize ?? ""}
            onChange={handleFontSizeChange}
            className="w-full"
          />
          <span className="text-gray-600 text-sm">{fontSize}px</span>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default NodeCustomizationPanel;
