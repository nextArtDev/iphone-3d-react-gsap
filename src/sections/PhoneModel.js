import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { Model } from '../components/scene'

const PhoneModel = () => {
  return (
    <div
      id="phone-model"
      className="w-screen h-screen fixed top-0 z-10 bg-transparent"
    >
      <Canvas camera={{ fov: 14 }}>
        <ambientLight intensity={1.25} />
        <directionalLight intensity={0.4} />
        {/* <OrbitControls /> */}
        <Suspense fallback="null">
          <Model />
        </Suspense>
        <Environment preset="night" />
      </Canvas>
    </div>
  )
}

export default PhoneModel
