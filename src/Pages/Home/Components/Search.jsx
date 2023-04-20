import React from 'react'
import style from './search.module.css'

function Search() {
  return (
    <form className={style.search}>
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