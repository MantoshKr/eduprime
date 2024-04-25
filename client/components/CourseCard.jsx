import React from 'react'
import Rating from './Rating'

const CourseCard = () => {
  return (
    <div className='max-w-sm'>
   

<article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
  <img
    alt=""
    src="/images/javascriptcourse.png"
    className="h-56 w-full object-cover"
  />

  <div className="p-4 sm:p-6">
    <a href="#">
      <h3 className="text-lg font-medium text-gray-900">
      Complete JAVASCRIPT with HTML5,CSS3 from zero to Expert-2024
      </h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
     Rakesh Kumar
    </p>

   
    <div className='flex items-center '>
    <span className='mt-2  mr-2 font-semibold' style={{fontSize: "15px"}}>4.1</span>
        <Rating />
    </div>

    <p className="mt-2 line-clamp-3 text-lg text-gray-500 font-bold">
    ₹ 599
    </p>


  </div>
</article>
    </div>
  )
}

export default CourseCard