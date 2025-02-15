import React from 'react'

const Heading = ({text,classStyle}) => {
  return (
   <h2 className={`md:text-5xl text-3xl text-center mx-auto font-bold text-black ${classStyle}`}>{text}</h2>
  )
}

export default Heading
