import { gsap } from 'gsap'
import React, { useLayoutEffect, useRef } from 'react'

const DisplaySection = () => {
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
      .fromTo(textOne.current, { x: 0 }, { x: '-20%' }, 'key1')
      .fromTo(textTwo.current, { x: 0 }, { x: '20%' }, 'key1')

    return () => {
      if (tl) tl.kill()
    }
  }, [])
  return (
    <section className="w-screen h-[200vh] relative flex justify-around flex-col bg-black text-white">
      <h1 className="text-5xl font-isLight bg-gradient-to-bl from-blue-400 via-purple-500  to-pink-500 bg-clip-text">
        صفحه <br /> شناور
      </h1>
      <div className="flex flex-col items-start w-1/2 self-start mr-16">
        <div className="text-xl mb-4">Super Ratine XDR Display</div>
        <div className="text-base text-gray-400 w-1/2">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از متن.
        </div>
      </div>
      <div
        ref={container}
        className="flex flex-col items-end w-1/2 self-end text-left ml-16"
      >
        <div className="text-xl mb-4 ">Big is Better</div>
        <div className="text-base text-gray-400 w-1/2">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از متن.
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center rotate-[-45deg] z-10 mb-16">
        <span
          ref={textOne}
          className="text-4xl md:text-6xl font-isLight bg-gradient-to-bl from-blue-400 via-purple-500  to-pink-500 bg-clip-text "
        >
          مطمئن‌تر از همیشه
        </span>
        <span
          ref={textTwo}
          className="text-4xl md:text-6xl font-isLight bg-gradient-to-bl from-blue-400 via-purple-500  to-pink-500 bg-clip-text "
        >
          هر لمسی مهم است
        </span>
      </div>
    </section>
  )
}

export default DisplaySection
