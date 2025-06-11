import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
// import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import { Item } from '../Components/Items/Item'
import { Link } from 'react-router'

export const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
        <img className='shopcategory-banner' src={props.banner} alt="" />
        <div className="shopcategory-intexsort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          {/* <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div> */}
        </div>
        <div className="shopcategory-products">
          {all_product.map((item,i)=>{
              if(props.category===item.category){
                return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
              }
              else{
                return null;
              }
          })}
        </div>
        <div className="shopcategory-loadmore">
          <Link to='/' style={{textDecoration : "none", color: '#626262'}}>Explore More</Link>
        </div>
    </div>
  )
}

