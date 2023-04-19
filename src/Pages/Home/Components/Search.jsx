import React from 'react'

function Search() {
  return (
    <form className="search">

    <fieldset>
        <input
            type="search"
            placeholder="Que recherchez-vous ?"
            aria-placeholder="Recherche"
            />
        <input type="submit" value="Ok"/>
    </fieldset>

    </form>
  )
}

export default Search