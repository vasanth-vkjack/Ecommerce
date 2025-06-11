import React, { useEffect, useState } from 'react'
import './NewCollection.css'
import { Item } from '../Items/Item'

export const NewCollections = () => {

  const [new_collection,setNew_collection] = useState([])

  useEffect(()=>{
    fetch('https://ecommerce-gocg.onrender.com/newcollections')
    .then((response)=>response.json())
    .then((data)=>setNew_collection(data));
  },[])

  return (
    <div className='new-collection'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
                
            })}
        </div>
    </div>
  )
}
