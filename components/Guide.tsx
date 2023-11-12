import Image from 'next/image'
import React from 'react'

export default function Guide() {
  return (
    <section className='flexCenter flex-col padding-container'>
      <div className="  max-conatiner w-full pb-24">
        <Image src='camp.svg' alt='camp' width={50} height={50} />
        <p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur qui minima autem
          amet. Iusto, qui!
        </p>

        <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>
            Guide you to easy Path
          </h2>
          <p className='regular-16 text-gray-30 xl:max-w-[520px]'>Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Quae esse mollitia reprehenderit minima quia laudantium
            atque iste
            sed, quam distinctio, voluptate itaque molestiae corporis sit pariatur maxime deserunt
            perferendis
            deleniti dolorum explicabo nesciunt omnis cupiditate aliquid. Quo cumque odit soluta.
          </p>

        </div>
      </div>

      <div className='flexCenter max-container relative w-full  rounded-md p-6'>
        <Image
          src='/boat.png'
          alt='boat'
          width={1440}
          height={580}
          className='w-full object-cover object-center 2xl:rounded-5xl rounded-md'
        />

        <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20'>
          <Image
            src='/meter.svg'
            alt='meter'
            width={16}
            height={158}
            className='h-full w-auto'
          />
          <div className='flexBetween flex-col '>

            <div className='flex w-full flex-col '>
              <div className='flexBetween w-full'>
                <p className='regular-16 text-gray-20'>Destination</p>
                <p className='bold-16 text-green-50'>48 min</p>
              </div>
              <p className='bold-20 mt-2'>Aguas Calientes</p>
            </div>

            <div className='flex w-full flex-col '>

              <p className='regular-16 text-gray-20'>Start Track</p>


              <p className='bold-20 mt-2 whitespace-nowrap'>Aguas Calientes</p>
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}
