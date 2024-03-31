import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

function SpecialOffers() {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-content'>
      <div className="flex-1 ">
        <img src={offer} alt=""  width={773} height={686} className='object-contain w-full'/>
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum a
          excepturi dolores distinctio quod minus sequi adipisci dignissimos
          consectetur culpa. Voluptatem labore iure quos ut numquam incidunt.
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum a
          excepturi dolores distinctio quod minus sequi adipisci dignissimos
          consectetur culpa. Voluptatem labore iure quos ut numquam incidunt.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers
