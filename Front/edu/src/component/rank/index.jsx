import React from 'react'
import '../rank/style.scss'

const Rank = () => {
    return (
        <div className="rank">
            <h1>We Rank the Best Courses <br /> on the Web</h1>
            <p>In the history of modern astronomy, there is probably no one greater leap forward than <br /> the building and launch of the space telescope.</p>
            <div className='input'>
                <input type="text" placeholder='Search Courses' />
                <button>Search</button>
            </div>
        </div>
    )
}

export default Rank