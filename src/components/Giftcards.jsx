import React from 'react'
import CardList from "./cardlist"
import Head from "./Nav"

const Giftcards = () => {
  return (
    <div className='bg-heroBlue'>
      <Head/>
      <div className='mt-[50px] px-[50px]'>
        <h1 className='font-[600] text-[48px] leading-[62px] text-[white] mt-[50px] ml-[10px]'>
          Trending Giftcards
        </h1>
      <CardList/>
      </div>
      
    </div>
  )
}

export default Giftcards;
