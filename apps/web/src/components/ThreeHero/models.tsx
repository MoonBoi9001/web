/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-perf/jsx-no-new-object-as-prop */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-perf/jsx-no-new-function-as-prop */
/* eslint-disable react-perf/jsx-no-new-array-as-prop */
/* eslint-disable react/no-unknown-property */
/* sorry! */

import React from 'react';
import { useGLTF, Center } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { SVGLoader } from 'three-stdlib';

import { PhysicsMesh } from './index';

/* glbs */
import boxModel from './assets/box.glb';
import controlerModel from './assets/controller.glb';
import ethModel from './assets/eth.glb';
import globeModel from './assets/globe.glb';
import phoneModel from './assets/phone.glb';
import headphonesModel from './assets/headphones.glb';
import spikeyModel from './assets/spikey.glb';
import playModel from './assets/play.glb';
import objectModel from './assets/object.glb';
import logoModel from './assets/logo.glb';

/* svgs */
import baseLogo from './assets/base-logo.svg';
import lightningSVG from './assets/lightning.svg';

export const blue = '#105eff';

/*
  Constants
*/
const blackColor = new THREE.Color(0.08, 0.08, 0.08);

export function BlackMaterial() {
  return (
    <meshPhysicalMaterial
      color={blackColor}
      metalness={0.5}
      roughness={0.5}
      side={THREE.DoubleSide}
    />
  );
}

export function MetalMaterial() {
  return (
    <meshPhysicalMaterial color="white" metalness={0.8} roughness={0.3} side={THREE.DoubleSide} />
  );
}

export function Box(props) {
  const { nodes } = useGLTF(boxModel);
  return (
    <mesh {...props} geometry={nodes.Box_01.geometry} scale={0.5} castShadow receiveShadow>
      <BlackMaterial />
    </mesh>
  );
}

export function BaseLogoModel2() {
  const { nodes } = useGLTF(logoModel);
  return (
    <mesh geometry={nodes.Base_Logo.geometry} castShadow receiveShadow scale={3}>
      <meshPhysicalMaterial
        color={blue}
        metalness={0}
        roughness={0.25}
        transmission={0.9}
        thickness={1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export function BaseLogoModel() {
  const svg = useLoader(SVGLoader, baseLogo.src);
  return (
    <mesh castShadow receiveShadow>
      <extrudeGeometry
        args={[
          svg.paths[0].toShapes(),
          {
            curveSegments: 64,
            depth: 5,
            bevelEnabled: true,
            bevelSegments: 64,
            bevelSize: 0.5,
            bevelThickness: 1,
          },
        ]}
      />
      <meshPhysicalMaterial
        color={blue}
        metalness={0}
        roughness={0.29}
        transmission={0.9}
        thickness={1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export function Lightning() {
  const svg = useLoader(SVGLoader, lightningSVG.src);
  return (
    <PhysicsMesh>
      <Center>
        <mesh castShadow receiveShadow scale={0.019}>
          <extrudeGeometry
            args={[
              svg.paths[0].toShapes(),
              {
                curveSegments: 64,
                depth: 5,
                bevelEnabled: true,
                bevelSegments: 64,
                bevelSize: 0.5,
                bevelThickness: 1,
              },
            ]}
          />
          <MetalMaterial />
        </mesh>
      </Center>
    </PhysicsMesh>
  );
}

export function Controller(props) {
  const { nodes } = useGLTF(controlerModel);
  return (
    <PhysicsMesh>
      <mesh {...props} geometry={nodes.Controller.geometry} castShadow receiveShadow scale={0.3}>
        <BlackMaterial />
      </mesh>
    </PhysicsMesh>
  );
}

export function Eth(props) {
  const { nodes } = useGLTF(ethModel);
  return (
    <PhysicsMesh>
      <mesh {...props} geometry={nodes.ETH.geometry} castShadow receiveShadow scale={0.25}>
        <MetalMaterial />
      </mesh>
    </PhysicsMesh>
  );
}

export function Globe(props) {
  const { nodes } = useGLTF(globeModel);

  return (
    <PhysicsMesh>
      <mesh {...props} geometry={nodes.Globe.geometry} castShadow receiveShadow scale={0.25}>
        <MetalMaterial />
      </mesh>
    </PhysicsMesh>
  );
}

export function Phone(props) {
  const { nodes } = useGLTF(phoneModel);
  return (
    <PhysicsMesh>
      <mesh
        {...props}
        geometry={nodes.Cylinder.geometry}
        castShadow
        receiveShadow
        // scale={0.25}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <BlackMaterial />
      </mesh>
      <mesh position={[0, 0, 0.06]}>
        <planeGeometry args={[1.8, 0.86]} />
        <MetalMaterial />
      </mesh>
    </PhysicsMesh>
  );
}

export function Headphones(props) {
  const { nodes } = useGLTF(headphonesModel);
  return (
    <PhysicsMesh>
      <mesh {...props} geometry={nodes.Headphones.geometry} castShadow receiveShadow scale={0.2}>
        <BlackMaterial />
      </mesh>
    </PhysicsMesh>
  );
}

export function Spikey(props) {
  const { nodes } = useGLTF(spikeyModel);
  return (
    <PhysicsMesh>
      <mesh {...props} geometry={nodes.Spikey.geometry} castShadow receiveShadow scale={0.3}>
        <BlackMaterial />
      </mesh>
    </PhysicsMesh>
  );
}

export function Play(props) {
  const { nodes } = useGLTF(playModel);
  return (
    <PhysicsMesh>
      <mesh {...props} geometry={nodes.Play.geometry} castShadow receiveShadow scale={0.4}>
        <BlackMaterial />
      </mesh>
    </PhysicsMesh>
  );
}
export function Blobby(props) {
  const { nodes } = useGLTF(objectModel);
  return (
    <PhysicsMesh>
      <mesh {...props} geometry={nodes.Object_02.geometry} castShadow receiveShadow scale={0.4}>
        <BlackMaterial />
      </mesh>
    </PhysicsMesh>
  );
}