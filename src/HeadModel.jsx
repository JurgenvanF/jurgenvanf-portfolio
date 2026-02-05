import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function HeadModel({ url }) {
  const { scene } = useGLTF(url);
  const modelRef = useRef();

  return (
    <primitive ref={modelRef} object={scene} scale={8} position={[0, -13, 0]} />
  );
}

useGLTF.preload("/HeadModel.glb");
