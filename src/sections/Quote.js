import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useLayoutEffect, useRef } from 'react'

const Quote = () => {
  const sectionRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useLayoutEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      pin: true,
      pinSpacing: false,
    })

    return () => {
      if (trigger) trigger.kill()
    }
  }, [])
  return (
    <section
      ref={sectionRef}
      className="w-screen h-screen flex relative justify-center items-center  bg-black"
    >
      <div className="  text-white w-screen h-screen flex flex-col gap-2  justify-center items-center  bg-black ">
        <p className="landing-p">
          <span className="landing-span">
            &#8220; لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم چاپ
          </span>
        </p>
        <p className="landing-p">
          <span className="landing-span">
            &nbsp;&nbsp;&nbsp; لورم ایپسوم متن ساختگی ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ{' '}
          </span>
        </p>
        <p className="landing-p">
          <span className="landing-span">
            &nbsp;&nbsp;&nbsp; لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            صنعت چاپ{' '}
          </span>
        </p>
        <p className="landing-p">
          <span className="landing-span">
            &nbsp;&nbsp;&nbsp; لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            صنعت چاپ{' '}
          </span>
        </p>

        <p className="landing-p">
          <span className="landing-span">&#x23AF; ایپسوم</span>
        </p>
      </div>
    </section>
  )
}

export default Quote

// w/h-full === content: 100% , w/h-screen === 100vh/vw
