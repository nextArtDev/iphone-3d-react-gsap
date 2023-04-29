import { gsap } from 'gsap'
import React, { useLayoutEffect, useRef } from 'react'

const DesignSEction = () => {
  const container = useRef(null)
  const textOne = useRef(null)
  const textTwo = useRef(null)

  useLayoutEffect(() => {
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top-=500 top',
          end: 'bottom top',
          scrub: true,
        },
      })
      .fromTo(textOne.current, { x: 0 }, { x: '-10%' }, 'key1')
      .fromTo(textTwo.current, { x: 0 }, { x: '10%' }, 'key1')

    return () => {
      if (tl) tl.kill()
    }
  }, [])
  return (
    <section
      ref={container}
      className="h-screen w-screen relative flex flex-col items-center justify-start bg-white overflow-hidden "
    >
      <p
        ref={textOne}
        className="w-full h-[50vh] z-10 flex flex-col justify-center items-center text-black "
      >
        <span className="text-5xl w-11/12 font-semibold ">
          طراحی بی‌نقص با ماندگاری و طول عمر بسیار طولانی.
        </span>
      </p>
      <p
        ref={textTwo}
        className="w-full h-[50vh] z-10 flex flex-col justify-center items-end text-black "
      >
        <span className="text-3xl w-10/12 font-semibold">
          {' '}
          طراحی لبه‌های صاف با محکمترین شیشه.{' '}
        </span>
      </p>
    </section>
  )
}

export default DesignSEction
