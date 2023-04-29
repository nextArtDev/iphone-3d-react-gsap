import React from 'react'
import a15 from '../assets/Images/A15-Bionic.jpg'
const ProcessorSection = () => {
  return (
    <section className="w-screen h-screen relative flex justify-start items-center overflow-hidden bg-black text-white">
      <h1 className="w-full text-center absolute bottom-8 left-1/2 -translate-x-1/2 text-5xl z-10 bg-gradient-to-t from-blue-400 via-purple-500  to-pink-500 bg-clip-text ">
        سریعترین پردازنده
      </h1>
      <div className=" animate-glow w-1/4 absolute p-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
        <img src={a15} alt="a15" className="w-full h-auto" />
      </div>
      <div className="text-sm text-gray-400 w-1/3 h-[40vh] flex flex-col justify-center">
        <span className="mt-1 mb-1 ml-0 mr-0 pr-8 ">
          کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
          متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان
          رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد
          کرد. در این.
        </span>
        <span className="mt-1 mb-1 ml-0 mr-0 pr-8 ">
          کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
          متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان
          رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد
          کرد. در این.
        </span>
      </div>
    </section>
  )
}

export default ProcessorSection
