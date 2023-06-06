import React from 'react'

const Skeleton = () => {
    return (
        <div className="bg-white overflow-hidden border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
            <div className="recipe-card-shimmer w-64 h-48 bg-gray-200 mx-auto transform transition duration-300 hover:scale-105"> </div>
            <div className="recipe-card-shimmer flex flex-col items-center my-3 space-y-2">
                <div className="recipe-card-shimmer w-36 bg-gray-300 py-3"></div>
                <p className="recipe-card-shimmer w-72 bg-gray-200 py-1"></p>
            </div>
        </div>
    )
}

export default Skeleton
