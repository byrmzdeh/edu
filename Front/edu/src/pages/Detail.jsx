import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../sass/detail.scss'
import Header from '../layouts/Header'

const Detail = () => {
  const { id } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:7000/' + id)
      .then((res) => res.json())
      .then((api) => setData(api))
  }, [])
  return (
    <div className='detail'>
      <i className={data.icon}></i>
      <div className="write">
        <h2>{data.name}</h2>
        <p>{data.desc}</p>
        <p>$ {data.price}</p>
        <Link to={'/'}> <button>Back</button> </Link>
      </div>
    </div>
  )
}

export default Detail