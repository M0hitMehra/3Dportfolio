import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Loader from "../Loader";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-x={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      gl={{ preserveDrawingBuffer: true }}
      camera={
        {
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }
      }
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <directionalLight intensity={100} />
        <Earth />
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
