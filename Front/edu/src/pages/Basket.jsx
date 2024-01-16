import React, { useContext } from 'react'
import { BasketContext } from '../context/BasketContext'
import '../sass/basket.scss'

const Basket = () => {
  const { increaseCount, decreaseCount, remove, basket } = useContext(BasketContext)
  return (
    <divb className='basket'>
      <table border={1}>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Count</th>
          <th>Delete</th>
        </tr>
        {basket.map(item => (
          <tr>
            <td><i className={item.icon}></i></td>
            <td>{item.name}</td>
            <td>{item.price*item.count}</td>
            <td>
            <i onClick={()=>increaseCount(item)} class="fa-solid fa-caret-up"></i>
            <h2>{item.count}</h2>
            <i  onClick={()=>decreaseCount(item)} class="fa-solid fa-caret-down"></i>

            </td>
            <td onClick={()=>remove(item)}> <button className='remove'>X</button> </td>
          </tr>
        ))}


      </table>
    </divb>
  )
}

export default Basket