import React, { useContext, useEffect, useState } from 'react'
import './card.scss'
import { Link } from 'react-router-dom'
import { BasketContext } from '../../context/BasketContext'

const Card = () => {
    const [data, setData] = useState([])
    const [input,setInput] = useState('')
    const {addBasket}  = useContext(BasketContext)

    useEffect(() => {
        fetch('http://localhost:7000/')
            .then((res) => res.json())
            .then((api) => setData(api))
    }, [])

    return (
        <div className='features '>
            <h1 className='that'>Features That Make Us Hero</h1>
            <p className='if'>If you are looking at blank cassettes on the web, you may be very confused at the difference in price.</p>
            <p className='if'> You may see some for as low as $.17 each.</p>

            <input type="text" placeholder='Search Courses' value={input} onChange={(e)=>setInput(e.target.value)} />


            <div className="cards">
                {data
                .filter((item)=>item.name.toLowerCase().includes(input.toLowerCase()))
                .map(item => (

                    <div className="card">
                        <i className={item.icon}></i>
                        <h1>{item.name}</h1>
                        <p>{item.desc.slice(0, 64)}... <Link to={`${item._id}`}>Learn More</Link></p>
                        <h2>$ {item.price}</h2>
                        <i class="heart fa-regular fa-heart"></i>
                        <button onClick={()=>addBasket(item)}>Add to Card</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card