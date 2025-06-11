import React, { useEffect, useState } from 'react'
import './Popular.css'
import { Item } from '../Items/Item'

export const Popular = () => {

  const [popularProducts,setPopularProducts] = useState([])


  useEffect(()=>{
    fetch('https://ecommerce-gocg.onrender.com/popularinmen')
    .then((response)=>response.json())
    .then((data)=>setPopularProducts(data));
  },[])

  return (
    <div className='popular'>
        <h1>POPULAR IN MEN</h1>
        <hr />
        <div className="popular-item">
            {popularProducts.map((item,i)=>{
                return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}