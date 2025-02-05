import React from 'react';
import { Handle, NodeProps, Position } from '@xyflow/react'; // Import NodeProps from ReactFlow

// Extend NodeProps with custom properties
interface GraphNodeProps extends NodeProps {
  data: {
    label: string;
    color: string;
    fontSize: number;
    bgColor: string;
  };
}

const GraphNode: React.FC<GraphNodeProps> = ({ id, data, positionAbsoluteX, positionAbsoluteY, selected, dragging }) => {
  const { label, color, fontSize, bgColor } = data;

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: color,
        fontSize: fontSize,
        padding: '5px 30px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        opacity: selected ? 1 : 0.7, 
        cursor: dragging ? 'move' : 'pointer',
      }}
    >
      <Handle type='source' position={Position.Top}/>  
      <Handle type='target' position={Position.Bottom}/>
      {label}
    </div>
  );
};

export default GraphNode;
