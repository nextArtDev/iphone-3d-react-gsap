import { Environment, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { gsap } from 'gsap'
import React, {
  Suspense,
  useContext,
  useLayoutEffect,
  useRef,
  useEffect,
} from 'react'
import { Model2 } from '../components/scene2'
import { ColorContext } from '../context/ColorContext'

const ColorSection = () => {
  const sectionRef = useRef(null)
  const rightRef = useRef(null)
  const textRef = useRef(null)
  const leftRef = useRef(null)

  const { currentColor, changeColorContext } = useContext(ColorContext)

  useEffect(() => {
    let rightEl = rightRef.current
    let leftEl = leftRef.current
    let textEl = textRef.current
    textEl.innerText = currentColor.text
    textEl.style.color = currentColor.color
    rightEl.style.backgroundColor = `rgba(${currentColor.rgbColor},0.4)`
    leftEl.style.backgroundColor = `rgba(${currentColor.rgbColor},0.8)`
  }, [currentColor])
  useLayoutEffect(() => {
    let Ele = sectionRef.current

    let updateColor = (color, text, rgbColor) => {
      const colorObj = { color, text, rgbColor }
      changeColorContext(colorObj)
    }

    gsap.to(Ele, {
      scrollTrigger: {
        trigger: Ele,
        start: 'top top',
        end: `+=${Ele.offsetWidth + 1000}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    })

    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: Ele,
          start: 'top top',
          end: `+=${Ele.offsetWidth + 1000}`,
          scrub: true,
        },
      })
      .to(Ele, {
        onStart: updateColor,
        onStartParams: ['#9BB5CE', 'Sierra Blue', '155,181,206'],
        onReverseComplete: updateColor,
        onRepeatParams: ['#9BB5CE', 'Sierra Blue', '155,181,206'],
      })
      .to(Ele, {
        onStart: updateColor,
        onStartParams: ['#F9E5C9', 'Gold', '249, 229, 201'],
        onReverseComplete: updateColor,
        onRepeatParams: ['#F9E5C9', 'Gold', '249, 229, 201'],
      })
      .to(Ele, {
        onStart: updateColor,
        onStartParams: ['#505F4E', 'Alpine Green', '80, 95, 78'],
        onReverseComplete: updateColor,
        onRepeatParams: ['#505F4E', 'Alpine Green', '80, 95, 78'],
      })
      .to(Ele, {
        onStart: updateColor,
        onStartParams: ['#574f6f', 'Deep Purple', '87, 79, 111'],
        onReverseComplete: updateColor,
        onRepeatParams: ['#574f6f', 'Deep Purple', '87, 79, 111'],
      })
      .to(Ele, {
        onStart: updateColor,
        onStartParams: ['#A50011', 'Red', '165, 0, 17'],
        onReverseComplete: updateColor,
        onRepeatParams: ['#A50011', 'Red', '165, 0, 17'],
      })
      .to(Ele, {
        onStart: updateColor,
        onStartParams: ['#215E7C', 'Blue', '33, 94, 124'],
        onReverseComplete: updateColor,
        onRepeatParams: ['#215E7C', 'Blue', '33, 94, 124'],
      })
  }, [])
  return (
    <section
      ref={sectionRef}
      className="w-screen h-screen relative flex justify-between items-center"
    >
      <div ref={rightRef} className="w-1/2 h-full flex relative bg-blue-300">
        <Canvas camera={{ fov: 5 }}>
          <ambientLight intensity={1.25} />
          <directionalLight intensity={0.4} />
          {/* <OrbitControls /> */}
          <Suspense fallback="null">
            <Model2 />
          </Suspense>
          <Environment preset="night" />
        </Canvas>
      </div>
      <div
        ref={textRef}
        className=" absolute z-10 w-full text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 text-5xl uppercase brightness-75"
      />
      <div
        ref={leftRef}
        className="w-1/2 h-full flex relative bg-blue-400"
      ></div>
    </section>
  )
}

export default ColorSection
