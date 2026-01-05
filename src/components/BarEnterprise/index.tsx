"use client";

import Image from 'next/image';

function BarMarcas() {
  return (
    <>
      <article className="p-4 md:p-10">
        <div className='p-3 md:p-5 flex flex-wrap bg-white items-center justify-around gap-4 md:gap-8 relative shadow-lg'>
          <a href="#JeanPierre" className="w-14 md:w-20 flex justify-center relative h-10">
            <Image src="/img/Logos/JeanPierre.svg" alt="Jean Pierre" fill className='object-contain' />
          </a>
          <a href="#Lavorato" className="w-14 md:w-20 flex items-center justify-center relative h-10">
            <Image src="/img/Logos/Lavorato.svg" alt="Lavorato" fill className='object-contain' />
          </a>
          <a href="#Colcci" className="w-14 md:w-20 flex items-center justify-center relative h-10">
            <Image src="/img/Logos/COLCCI.svg" alt="COLCCI" fill className='object-contain' />
          </a>
          <a href="#Mormaii" className="w-14 md:w-20 flex items-center justify-center relative h-10">
            <Image src="/img/Logos/mormaii.svg" alt="Mormaii" fill className='object-contain' />
          </a>
          <a href="#DusterConcept" className="w-14 md:w-20 flex items-center justify-center relative h-10">
            <Image src="/img/Logos/DC.svg" alt="DC" fill className='object-contain' />
          </a>
          <a href="#CarolCazassa" className="w-14 md:w-20 flex items-center justify-center relative h-10">
            <Image src="/img/Logos/CarolCazassa.svg" alt="Carol Cazassa" fill className='object-contain' />
          </a>
          <a href="#Vilenev" className="w-14 md:w-20 flex items-center justify-center relative h-10">
            <Image src="/img/Logos/Vileney.svg" alt="Vileney" fill className='object-contain' />
          </a>
          <a href="#Nanff" className="w-14 md:w-20 flex items-center justify-center relative h-10">
            <Image src="/img/Logos/Nanff.svg" alt="Nanff" fill className='object-contain' />
          </a>
        </div>
      </article>
    </>
  );
}

export default BarMarcas;