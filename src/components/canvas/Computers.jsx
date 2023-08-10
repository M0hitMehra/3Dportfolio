import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Computers = () => {
  const mask = useGLTF("./desktop_pc/scene.gltf"); // Make sure the path is correct
  return (
    <group>
      <hemisphereLight intensity={0.15} groundColor={"black"} />
      <pointLight intensity={100} position={[0, 0, -1]} />
      <primitive
        object={mask.scene}
        scale={0.8}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3,5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}> {/* Remove the fallback component for now */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
