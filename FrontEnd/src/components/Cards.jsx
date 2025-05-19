import React from 'react'

function Cards({ item }) {

    return (
        <>
            <div className='mt-4 my-3 p-3 hover:scale-105 duration-200'>
                <div className="card bg-base-100 w-full shadow-xl mx-auto ">
                    <figure>
                        <img
                            src={item.image} alt='Books' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">Rs. {item.price}.00</div>
                            <div className="px-3 py-0.5 rounded-lg border-[1px] cursor-pointer hover:bg-pink-500 text-white duration-200">Buy now</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cards
