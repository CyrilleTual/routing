import React from 'react'
import HeaderMain from './Components/HeaderMain.jsx'
import Search from './Components/Search.jsx'
import Solutions from './Components/Solutions.jsx'
import Hebergement from './Components/Hebergement.jsx'

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