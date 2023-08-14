import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Loader from "../Loader";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

const Earth = () => {
  // const earth = useGLTF("./planet/scene.gltf");
  // const earth = useGLTF("./free_cyberpunk_hovercar/scene.gltf");
  // const earth = useGLTF("./futuristic_sci-fi_car/scene.gltf");
  // const earth = useGLTF("./astronaut_animation_walking/scene.gltf");
  const earth = useGLTF("./free_sci-fi_vehicle_002_-_public_domain_cc0/scene.gltf");
  // const earth = useGLTF("./2.3k_followers_celebration_-_spaceship/scene.gltf");
  
  

  return (
    <primitive object={earth.scene} scale={0.5} position-y={0} rotation-x={0} />
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
          rotation:[2,5,10]
        }
      }
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          autoRotate
          rotation={[2,5,10]}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* <directionalLight intensity={100} /> */}
        <Earth />
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
