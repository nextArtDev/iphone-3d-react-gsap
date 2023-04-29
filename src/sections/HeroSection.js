import React from 'react'
import backgroundVideo from '../assets/video/Ink - 21536.mp4'
export const HeroSection = () => {
  return (
    <section className="w-screen h-screen relative flex overflow-hidden bg-black text-white">
      <div className="w-screen h-screen absolute top-0 right-0 z-0">
        <video
          src={backgroundVideo}
          type="video/mp4"
          muted
          autoPlay
          loop
          className="w-full h-full object-cover object-bottom"
        />
      </div>
      <h1 className="absolute top-8 right-8 font-isMedium text-xl text-gray-300">
        {' '}
        آیفون 14 پرو مکس{' '}
      </h1>
      <div className=" w-full h-full p-8 font-semibold flex justify-between items-center bg-gradient-to-bl from-blue-400 via-purple-500  to-pink-500 bg-clip-text z-10">
        <span className="text-4xl">بسیار سرد.</span>
        <span className="text-4xl">بسیار مهم.</span>
      </div>
    </section>
  )
}
