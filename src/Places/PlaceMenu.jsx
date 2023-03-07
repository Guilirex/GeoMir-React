import React from 'react'
import { Link } from 'react-router-dom'

const PlaceMenu = () => {
  return (
    <div className='menu'>
    <Link className='click' to="/places/add">Afegir + </Link>
    <Link className='click orange' to="/places/grid">Grid </Link>
    <Link className='click blue' to="/places/list">Llista </Link>
    <Link className='click blue' to="/places/marks">Marks </Link>


</div>
  )
}

export default PlaceMenu