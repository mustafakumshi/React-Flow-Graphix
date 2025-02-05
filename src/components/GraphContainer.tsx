import React from "react";
import { ReactFlow, Controls, Background, useNodesState, useEdgesState } from "@xyflow/react";
import '@xyflow/react/dist/style.css';
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import GraphNode from "./GraphNode";
import NodeCustomizationPanel from "./NodeCustomizationPanel";

const GraphContainer = () => {

  const initialNodes = useSelector((state: RootState) => state.graph.nodes);
  const initialEdges = useSelector((state: RootState) => state.graph.edges);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const NodeTypes = {
    custom: GraphNode
}

  return (
    <div className="flex justify-center gap-14">
    <div className="w-[600px] h-[600px] border border-black">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={NodeTypes}
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
    <NodeCustomizationPanel/>
    </div>
  );
};

export default GraphContainer;
