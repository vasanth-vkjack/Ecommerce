import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
          <div className="descriptionbox-nav-box">Description</div>
          <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quos 
            accusantium nobis sit porro ullam labore nemo necessitatibus nesciunt eius 
            eos debitis culpa, placeat cum similique quisquam consectetur animi! Nostrum 
            similique sed error perspiciatis modi dignissimos quisquam. Facilis temporibus, 
            nihil sit aperiam libero ut odio.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sapiente sunt 
            dignissimos rem laudantium ex suscipit 
            fuga vitae incidunt quod cumque aliquam in ut.
          </p>
        </div>
    </div>
  )
}
