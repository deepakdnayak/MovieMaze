import React from 'react'

const RecomendedMovieCard = (props) => {
    return (
        <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg text-white max-w-md">
            <img
                src={props.poster}
                alt={props.title}
                className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-grow">
                <h3 className="text-lg font-bold">{props.title}</h3>
                <div className="flex items-center space-x-2">
                <div className="flex flex-wrap">
                    {props.genres.map((genre, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-gray-500 rounded-full m-1">
                        {genre}
                    </span>
                    ))}
                </div>
                </div>
            </div>
        </div>
    )
}

export default RecomendedMovieCard