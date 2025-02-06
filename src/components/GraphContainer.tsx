import { useEffect } from "react";
import { 
  ReactFlow, 
  Controls, 
  Background, 
  useNodesState, 
  useEdgesState, 
  useReactFlow, 
  ReactFlowProvider 
} from "@xyflow/react";
import '@xyflow/react/dist/style.css';
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import GraphNode from "./GraphNode";
import NodeCustomizationPanel from "./NodeCustomizationPanel";
import UndoRedoControls from "./UndoRedoControls";

const NodeTypes = {
  custom: GraphNode
};

const GraphFlowComponent = () => {
  const initialNodes = useSelector((state: RootState) => state.graph.nodes);
  const initialEdges = useSelector((state: RootState) => state.graph.edges);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const { fitView } = useReactFlow(); 

  useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialNodes, initialEdges]);

  useEffect(() => {
    fitView({ duration: 1000, padding: 0.2 });
  }, [fitView, nodes, edges]); 

  return (
    <div className="w-[600px] h-[70vh] md:h-[600px] border border-black">
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
  );
};

const GraphContainer = () => {
  return (
    <ReactFlowProvider>
      <div className="flex justify-items-start md:gap-14 gap-6 flex-wrap px-4 md:px-12">
        <GraphFlowComponent />
        <NodeCustomizationPanel />
        <UndoRedoControls />
      </div>
    </ReactFlowProvider>
  );
};

export default GraphContainer;
