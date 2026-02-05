import { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function HeadModel({ url }) {
  const modelRef = useRef();
  const { scene, animations } = useGLTF(url);
  const { actions, gl } = useThree();
  const { actions: animActions } = useAnimations(animations, modelRef);

  const neckRef = useRef();
  const eyeLRef = useRef();
  const eyeRRef = useRef();

  // -----------------------
  // SETTINGS
  // -----------------------
  const FOLLOW_RADIUS = 2.0; // eyes always follow within this radius
  const HEAD_START_DISTANCE = 0.1; // head moves only if farther than this
  const HEAD_RADIUS_Y_OFFSET = 0.2; // vertical offset for head follow radius
  const VERTICAL_OFFSET = -0.2; // eyes look slightly down at center
  const CROSS_EYE_AMOUNT = 0.08; // subtle cross-eyed neutral
  const EYE_LERP_SPEED = 0.1;
  const HEAD_LERP_SPEED = 0.05;
  const MOUSE_RETURN_LERP = 0.05; // how fast target moves back when leaving canvas

  // Track actual mouse position
  const targetMouse = useRef({ x: 0, y: 0 });
  const smoothMouse = useRef({ x: 0, y: 0 });
  const [mouseInside, setMouseInside] = useState(false);

  // -----------------------
  // BLINKING
  // -----------------------
  useEffect(() => {
    let timeout;
    const blink = () => {
      if (animActions.Blink) {
        animActions.Blink.reset().fadeIn(0.2).play();
        animActions.Blink.clampWhenFinished = true;
        animActions.Blink.setLoop(THREE.LoopOnce, 1);
        timeout = setTimeout(blink, 3000 + Math.random() * 7000);
      }
    };
    blink();
    return () => clearTimeout(timeout);
  }, [animActions]);

  // -----------------------
  // FIND BONES
  // -----------------------
  useEffect(() => {
    if (modelRef.current) {
      neckRef.current = modelRef.current.getObjectByName("Neck_03");
      eyeLRef.current = modelRef.current.getObjectByName("Eye_l");
      eyeRRef.current = modelRef.current.getObjectByName("Eye_r");
    }
  }, [scene]);

  // -----------------------
  // IDLE EYE TARGETS
  // -----------------------
  const eyeTarget = useRef({ x: 1.5, z: 0 });
  useEffect(() => {
    let timeout;
    const setRandomTarget = () => {
      eyeTarget.current = {
        x: 1.3 + Math.random() * (1.7 - 1.3),
        z: -0.4 + Math.random() * 0.8,
      };
      timeout = setTimeout(setRandomTarget, 2000 + Math.random() * 3000);
    };
    setRandomTarget();
    return () => clearTimeout(timeout);
  }, []);

  // -----------------------
  // FOLLOW STRENGTHS
  // -----------------------
  const eyeFollowStrength = useRef(0);
  const headFollowStrength = useRef(0);

  // -----------------------
  // MOUSE LISTENERS
  // -----------------------
  useEffect(() => {
    const canvas = gl.domElement;

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetMouse.current = { x, y };
    };

    const onMouseEnter = () => setMouseInside(true);
    const onMouseLeave = () => setMouseInside(false);

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseenter", onMouseEnter);
    canvas.addEventListener("mouseleave", onMouseLeave);

    return () => {
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseenter", onMouseEnter);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [gl]);

  // -----------------------
  // ANIMATION LOOP
  // -----------------------
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Smooth mouse position
    const desiredX = mouseInside ? targetMouse.current.x : 0;
    const desiredY = mouseInside ? targetMouse.current.y : 0;
    smoothMouse.current.x +=
      (desiredX - smoothMouse.current.x) * MOUSE_RETURN_LERP;
    smoothMouse.current.y +=
      (desiredY - smoothMouse.current.y) * MOUSE_RETURN_LERP;

    const mouseX = smoothMouse.current.x;
    const mouseY = smoothMouse.current.y;

    // -----------------------
    // EYE FOLLOW
    // -----------------------
    const distEye = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
    const eyesHovering = mouseInside && distEye < FOLLOW_RADIUS;
    eyeFollowStrength.current +=
      ((eyesHovering ? 1 : 0) - eyeFollowStrength.current) * EYE_LERP_SPEED;

    // -----------------------
    // HEAD FOLLOW WITH Y OFFSET
    // -----------------------
    const offsetMouseY = mouseY - HEAD_RADIUS_Y_OFFSET; // shift center upwards
    const distHead = Math.sqrt(mouseX * mouseX + offsetMouseY * offsetMouseY);
    const headHovering =
      mouseInside && distHead > HEAD_START_DISTANCE && distHead < FOLLOW_RADIUS;
    headFollowStrength.current +=
      ((headHovering ? 1 : 0) - headFollowStrength.current) * HEAD_LERP_SPEED;

    // -----------------------
    // NECK ROTATION
    // -----------------------
    const idleNeckY = 0;
    const idleNeckX = 0;
    const targetNeckY = mouseX * 0.5;
    const targetNeckX = -mouseY * 0.3;

    const neckY = THREE.MathUtils.lerp(
      idleNeckY,
      targetNeckY,
      headFollowStrength.current,
    );
    const neckX = THREE.MathUtils.lerp(
      idleNeckX,
      targetNeckX,
      headFollowStrength.current,
    );

    if (neckRef.current) {
      neckRef.current.rotation.y = neckY;
      neckRef.current.rotation.x = neckX;
      neckRef.current.rotation.z = Math.sin(t * 0.5) * 0.05;
    }

    // -----------------------
    // EYE ROTATION
    // -----------------------
    const idleEyeX = eyeTarget.current.x;
    const idleEyeZ = eyeTarget.current.z;

    const v = THREE.MathUtils.clamp((mouseY + 1) / 2 + VERTICAL_OFFSET, 0, 1);
    const followEyeX = THREE.MathUtils.lerp(1.7, 1.3, v);

    const h = (mouseX + 1) / 2;
    const baseEyeZ = THREE.MathUtils.lerp(0.4, -0.4, h);
    const leftFollowZ = baseEyeZ - CROSS_EYE_AMOUNT;
    const rightFollowZ = baseEyeZ + CROSS_EYE_AMOUNT;

    const finalEyeX = THREE.MathUtils.lerp(
      idleEyeX,
      followEyeX,
      eyeFollowStrength.current,
    );
    const finalLeftZ = THREE.MathUtils.lerp(
      idleEyeZ,
      leftFollowZ,
      eyeFollowStrength.current,
    );
    const finalRightZ = THREE.MathUtils.lerp(
      idleEyeZ,
      rightFollowZ,
      eyeFollowStrength.current,
    );

    if (eyeLRef.current && eyeRRef.current) {
      eyeLRef.current.rotation.x +=
        (finalEyeX - eyeLRef.current.rotation.x) * EYE_LERP_SPEED;
      eyeRRef.current.rotation.x +=
        (finalEyeX - eyeRRef.current.rotation.x) * EYE_LERP_SPEED;
      eyeLRef.current.rotation.z +=
        (finalLeftZ - eyeLRef.current.rotation.z) * EYE_LERP_SPEED;
      eyeRRef.current.rotation.z +=
        (finalRightZ - eyeRRef.current.rotation.z) * EYE_LERP_SPEED;
    }
  });

  return (
    <primitive ref={modelRef} object={scene} scale={8} position={[0, -2, 0]} />
  );
}

useGLTF.preload("/HeadModel.glb");
