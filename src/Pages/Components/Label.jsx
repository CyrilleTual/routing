import React from 'react'

function MyLabel({lblFor,lblTxt}) {
  return (

    <label for={lblFor}  >{lblTxt}</label>
  
  )
}

export default MyLabel