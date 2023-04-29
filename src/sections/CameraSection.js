import React, { useLayoutEffect, useRef } from 'react'
import scubaVid from '../assets/video/Scuba Diving - 699.mp4'
import skateVid from '../assets/video/Skate - 49791.mp4'
import { gsap } from 'gsap'
const CameraSection = () => {
  const sectionRef = useRef(null)
  const scubaRef = useRef(null)
  const skateRef = useRef(null)
  const titleRef = useRef(null)

  let elements = gsap.utils.selector(titleRef)

  useLayoutEffect(() => {
    const Ele = sectionRef.current

    //pin the section
    gsap.to(Ele, {
      scrollTrigger: {
        trigger: Ele,
        start: 'top top',
        end: `bottom+=500 bottom`,
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
          end: 'bottom+=500 bottom',
          scrab: true,
        },
      })
      .to(scubaRef.current, { scale: 0.3 }, 'key1')
      .to(skateRef.current, { scale: 0.6 }, 'key1')

    elements('h2').forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: 'bottom bottom',
            scrab: true,
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        }
      )
    )
  }, [])
  return (
    <section
      ref={sectionRef}
      className="w-screen min-h-screen relative z-10 bg-white overflow-hidden"
    >
      <video
        ref={scubaRef}
        className="absolute top-0 left-0 w-full h-screen object-cover object-bottom z-20"
        src={scubaVid}
        type="video/mp4"
        autoPlay
        muted
        loop
      />
      <video
        ref={skateRef}
        className="absolute top-0 right-[40%] w-[60%] h-auto z-10"
        src={skateVid}
        type="video/mp4"
        autoPlay
        muted
        loop
      />
      <div
        ref={titleRef}
        className="w-1/2 h-full flex flex-col items-center absolute top-0 right-0 "
      >
        <h2 className="text-6xl z-50 ">آماده.</h2>
        <h2 className="text-6xl z-50 mr-24">پایدار.</h2>
        <h2 className="text-6xl z-50 mr-48 ">عملگرا.</h2>
      </div>
    </section>
  )
}

export default CameraSection
