import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import Loader from "../Loader";

const Computers = ({ isMobile }) => {
  // const mask = useGLTF("./desktop_pc/scene.gltf");
  // const mask = useGLTF("./adamHead/adamHead.gltf");
  const mask = useGLTF("./iron_man_mark_85/scene.gltf");
  // const mask = useGLTF("./cyberpunk_desk/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor={"black"} />
      <pointLight intensity={1} position={[0, 10, 0]} />
      <spotLight
        position={[-20, 50, 10]}
        angle={Math.PI / 4}
        penumbra={0.1}
        intensity={1}
        castShadow
        shadowMapSize={1024}
      />
      <primitive
        object={mask.scene}
        scale={isMobile ? 2 : 5}
        position={isMobile ? [0, -3, -2.2] : [5, -5.3, -1.0]}
        // rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
const [down, setDown] = useState(false)
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25, up: [0, 1, 0] }}
      gl={{ preserveDrawingBuffer: true }}
      // onScroll={()=>{
      //   setDown(!down);
      //   alert(down)
      // }}
    >
      {/* <directionalLight intensity={50} position={[0, 10, 0]} /> */}
      {/* <ambientLight intensity={1} /> */}
      <Suspense fallback={<Loader />}>
          <OrbitControls
          autoRotate
          autoRotateSpeed={-1.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}  />
        <Environment preset="sunset" background={down ? true : false} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
