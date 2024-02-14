import React from 'react'

const TextSlider = () => {

    return (
        <div className="slider">
            <div className="slide-track">
                {
                    Array(17).fill(0)?.map((data) => (
                        <div key={data} className='flex gap-4 mx-2 text-[color:var(--primary-yellow)] font-[600] text-[20px]'>
                            <h1>People</h1>
                            <h1>Innovation</h1>
                            <h1>Technology</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TextSlider