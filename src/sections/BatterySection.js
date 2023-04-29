import { gsap } from 'gsap'
import React, { useLayoutEffect, useRef } from 'react'

const BatterySection = () => {
  const battery = useRef(null)
  let elements = gsap.utils.selector(battery)

  useLayoutEffect(() => {
    let tl = gsap.timeline({})

    let liList = elements('li')
    for (let i = liList.length - 1; i >= 0; i--) {
      // start loop from last element and go backwards
      const el = liList[i]
      tl.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top center',
          end: 'top center',
          scrub: true,
        },
        opacity: 1,
      })
    }
  }, [])

  return (
    <section
      id="battery"
      className="w-screen  h-screen relative flex justify-end items-center bg-white"
    >
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl z-10">
        تمام روز را با یکبار شارژ سر کنید...
      </h1>
      <ul
        ref={battery}
        className="absolute left-16 bg-white border-4 border-black rounded-lg p-2 w-[15rem]  "
      >
        <li className="battery-li" />
        <li className="battery-li mt-2 mb-2 " />
        <li className="battery-li mt-2 mb-2 " />
        <li className="battery-li mt-2 mb-2 " />
        <li className="battery-li" />
      </ul>
    </section>
  )
}

export default BatterySection
