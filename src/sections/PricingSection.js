import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import React, { Suspense, useContext, useEffect, useRef } from 'react'
import { Model3 } from '../components/scene3'
import { Canvas } from '@react-three/fiber'
import { ColorContext } from '../context/ColorContext'

const PricingSection = () => {
  const sectionRef = useRef(null)
  const { currentColor, changeColorContext } = useContext(ColorContext)

  useEffect(() => {
    sectionRef.current.style.backgroundColor = `rgba(${currentColor.rgbColor}, 0.4)`
  }, [currentColor])
  let updateColor = (color, text, rgbColor) => {
    const colorObj = { color, text, rgbColor }
    changeColorContext(colorObj)
  }
  return (
    <section
      className="w-screen h-screen relative
  z-10 bg-white overflow-hidden "
    >
      <div
        ref={sectionRef}
        className="w-screen h-screen relative 
  z-10 bg-[#9bb5ce]  "
      >
        <div className="w-full h-4/6 flex flex-col justify-center items-center relative cursor-grab ">
          <i className="absolute top-4 left-1/2 ">360&deg; &#x27f2;</i>
          <Canvas camera={{ fov: 16 }}>
            <ambientLight intensity={1} />
            <directionalLight intensity={0.4} />
            <OrbitControls enableZoom={false} />
            <Suspense fallback="null">
              <Model3 />
            </Suspense>
            <Environment preset="night" />
          </Canvas>
          <ul className="flex md:flex-col gap-2 md:gap-1 justify-center items-center md:absolute md:left-1/3 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 ">
            <li
              onClick={() =>
                updateColor('#9BB5CE', 'Sierra Blue', '155, 181, 206')
              }
              className="bg-[#9BB5CE]  list-none w-6 h-6 cursor-pointer rounded-full mt-2 mb-2 border-2 border-black "
            />
            <li
              onClick={() => updateColor('#F9E5C9', 'Gold', '249, 229, 201')}
              className="bg-[#F9E5C9] list-none w-6 h-6 cursor-pointer rounded-full mt-2 mb-2 border-2 border-black "
            />
            <li
              onClick={() =>
                updateColor('#505F4E', 'Alpine Green', '80, 95, 78')
              }
              className="bg-[#505F4E] list-none w-6 h-6 cursor-pointer rounded-full mt-2 mb-2 border-2 border-black "
            />
            <li
              onClick={() =>
                updateColor('#574f6f', 'Deep Purple', '87, 79, 111')
              }
              className="bg-[#574f6f] list-none w-6 h-6 cursor-pointer rounded-full mt-2 mb-2 border-2 border-black "
            />
            <li
              onClick={() => updateColor('#A50011', 'Red', '165, 0, 17')}
              className="bg-[#A50011] list-none w-6 h-6 cursor-pointer rounded-full mt-2 mb-2 border-2 border-black "
            />
            <li
              onClick={() => updateColor('#215E7C', 'Blue', '33, 94, 124')}
              className="bg-[#215E7C] list-none w-6 h-6 cursor-pointer rounded-full mt-2 mb-2 border-2 border-black "
            />
          </ul>
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-12 ">
          <h2 className="text-xl font-isLight">آیفون</h2>
          <h2 className="text-3xl p-1"> 14 پرو مکس </h2>
          <h2 className="text-xl font-isNumeric ">از 1099 دلار</h2>
        </div>
        <div className="flex  justify-center items-center pt-8">
          <button className="flex  justify-center items-center pt-2 pb-2 pl-4 pr-4 rounded-3xl border-none outline-none bg-blue-500 text-white cursor-pointer hover:opacity-70 ">
            خرید
          </button>
          <a
            href="#"
            className="text-blue-500 no-underline mr-6 hover:underline"
          >
            بیشتر &#x2190;
          </a>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
