import React from 'react'

const hero = () => {
    return (
        <div className='hero-root'>
            <div className="badge">
                <span>
                    Thinking about incorporating?
                </span>
                <svg width="16" height="16" fill="none" className='badge-icon'>
                    <path stroke="#1E1F25" strokeLinecap="round" strokeLinejoin="round" strokeOpacity=".5" strokeWidth="1.25" d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"></path>
                </svg>
            </div>
            <h1 className='hero-title'>
                Magically simplify accounting and taxes
            </h1>
            <p className='hero-subtitle'>Automated bookkeeping, effortless tax filing, real‑time insights. Set up in 10 mins. Back to building by 9:15am.</p>
            <div className='hero-cta'>
                <button className="btn">Start free trial</button>
                <button className="btn-secondary"><span>Pricing</span>
                    <svg width="16" height="16" fill="none" className='badge-icon'>
                        <path stroke="#1E1F25" strokeLinecap="round" strokeLinejoin="round" strokeOpacity=".5" strokeWidth="1.25" d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default hero