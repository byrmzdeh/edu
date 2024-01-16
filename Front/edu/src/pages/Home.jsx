import React from 'react'
import Rank from '../component/rank'
import Over from '../component/over'
import Card from '../component/card'
import Users from '../component/users'
import Fany from '../component/fanny'

const Home = () => {
  return (
    <div className='home'>
      <Rank />
      <Over />
      <Card/>
      <Users/>
      <Fany/>


    </div>
  )
}

export default Home