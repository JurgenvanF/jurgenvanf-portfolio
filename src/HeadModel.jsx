import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function HeadModel({ url }) {
  const { scene } = useGLTF(url);
  const modelRef = useRef();

  return <primitive ref={modelRef} object={scene} scale={1} />;
}

useGLTF.preload("/HeadModel.glb");
