import React from 'react'

function Card() {
  return (
     <div className="bg-teal-200 w-80 h-100">
        <img src="https://picsum.photos/id/1/300" alt="" />
        <div className="p-4">
            <h2 className="font-bold text-2xl">Name</h2>
            <p>desc</p>
            <p className="text-gray-600 font-bold">price</p>
        </div>
      </div>
  )
}

export default Card
