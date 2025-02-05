import React from 'react';
import { Handle, NodeProps, Position } from '@xyflow/react'; // Import NodeProps from ReactFlow
import { useDispatch, useSelector } from 'react-redux';
import { setActiveNode } from '../redux/nodeStylingSlice';
import { RootState } from '../redux/store';

// Extend NodeProps with custom properties
interface GraphNodeProps extends NodeProps {
  data: {
    label: string;
    color: string;
    fontSize: number;
    bgColor: string;
  };
}

const GraphNode: React.FC<GraphNodeProps> = ({ id, data, positionAbsoluteX, positionAbsoluteY, selected, dragging, type }) => {
  const { label, color, fontSize} = data;

  const activeNodeData = useSelector((state : RootState) => state.nodeStyling.activeNodeData);
  const {color: activeColor, fontSize: activeFontSize, label: activeName} = activeNodeData.data; 

  const dispatch = useDispatch();

const handleNodeClick = () => {
   dispatch(setActiveNode({currentNodeData:{
    id, data, position:{x:positionAbsoluteX, y:positionAbsoluteY}, type
   }}))
} 

  return (
    <div
      style={{
        border: `2px solid ${activeNodeData.id === id ? activeColor : color}`,
        fontSize: activeNodeData.id === id ? Number(activeFontSize) : Number(fontSize),
        padding: '5px 30px',
        borderRadius: '5px',
        opacity: selected ? 1 : 0.7, 
        cursor: dragging ? 'move' : 'pointer',
      }}
      onClick={handleNodeClick}
    >
      <Handle type='source' position={Position.Top}/>  
      <Handle type='target' position={Position.Bottom}/>
      {activeNodeData.id === id ? activeName : label}
    </div>
  );
};

export default GraphNode;
