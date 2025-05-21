import React from 'react'

function Cards({ item }) {

    return (
        <>
            <div className='mt-4 my-3 p-3 hover:scale-105 duration-200 bg-white text-black dark:bg-blue-950 dark:text-white'>
                <div className="card w-full h-100 shadow-lg mx-auto border border-gray-300 dark:border-blue-900 dark:shadow-gray-900">
                    <figure>
                        <img
                            src={item.image} alt='Books' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge bg-blue-800 border-none">{item.category}</div>
                        </h2>
                        <p className='font-medium'>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline font-medium ">Rs. {item.price}.00</div>
                            <div className="px-3 py-0.5 rounded-lg border-[1px] border-black cursor-pointer hover:bg-blue-800 hover:text-white text-black hover:border-none  duration-200 dark:border-white dark:text-white font-medium">Buy now</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cards
