import React from 'react'
import HeaderMain from '../Components/HeaderMain'
import Search from '../Components/Search'
import Solutions from '../Components/Solutions'
import Hebergement from '../Components/Hebergement'

function Home() {
  return (
    <React.Fragment>
      <HeaderMain />
      <Search />
      <Solutions />
      <Hebergement />

    </React.Fragment>
  )
}

export default Home