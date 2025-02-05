import React from "react";
import { useCallback } from "react";
import { ReactFlow, Controls, Background, useNodesState, useEdgesState, Connection, addEdge } from "@xyflow/react";
import '@xyflow/react/dist/style.css';
import { Edge } from "../types/graphixtypes";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import GraphNode from "./GraphNode";

const GraphContainer = () => {

  const initialNodes = useSelector((state: RootState) => state.graph.nodes);
  const initialEdges = useSelector((state: RootState) => state.graph.edges);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((connection: Connection) => {
    const edge: Edge = {
      ...connection,
      animated: true,
      id: `${edges.length + 1}`,
    };
    setEdges((prevEdges) => addEdge(edge, prevEdges));
  }, []);

  const NodeTypes = {
    custom: GraphNode
}

  return (
    <div className="w-[600px] h-[600px] border border-black">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={NodeTypes}
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default GraphContainer;
