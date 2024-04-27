import React from 'react'
import CustomImage from './CustomImage'

const Gallery = () => {
  return (
    <section className='py-6' id='Gallery'>
      <h2 className='text-white text-center text-3xl font-bold font-sans tracking-wider'>گالری تصاویر</h2>
      <div className='grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 gap-6 place-items-center place-content-center m-10'>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((image) => {
            return <CustomImage key={image} src={`/images/cafe/Gallery/Photo${image}.jpg`} />
          })
        }
      </div>
    </section>
  )
}

export default Gallery
