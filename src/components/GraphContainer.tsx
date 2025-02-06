import React, { useEffect } from "react";
import { ReactFlow, Controls, Background, useNodesState, useEdgesState } from "@xyflow/react";
import '@xyflow/react/dist/style.css';
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import GraphNode from "./GraphNode";
import NodeCustomizationPanel from "./NodeCustomizationPanel";
import UndoRedoControls from "./UndoRedoControls";

const GraphContainer = () => {

  const initialNodes = useSelector((state: RootState) => state.graph.nodes);
  const initialEdges = useSelector((state: RootState) => state.graph.edges);

    // UseEffect to sync Redux state with local state
    useEffect(() => {
      setNodes(initialNodes); // Sync Redux state with local state for nodes
      setEdges(initialEdges); // Sync Redux state with local state for edges
    }, [initialNodes, initialEdges]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const NodeTypes = {
    custom: GraphNode
}

  return (
    <div className="flex justify-center gap-14 flex-wrap">
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
    <UndoRedoControls/>
    </div>
  );
};

export default GraphContainer;
