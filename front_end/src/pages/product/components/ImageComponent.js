import React from 'react'
import style from '../Product.module.css';
export default function ImageComponent() {
  let image = [
    'https://product.hstatic.net/1000230642/product/hsm006300nau__2__49db3ccdb8bc4c82a94402a944931e4d_1024x1024.jpg',
    'https://product.hstatic.net/1000230642/product/hsm006300nau__10__f3fb2850cdd545049a232d62dd50950b_large.jpg',
    'https://product.hstatic.net/1000230642/product/hsm006300nau__5__0796b1ba019443c28887441c3fc58c9e.jpg',
    'https://product.hstatic.net/1000230642/product/hsm006300nau__4__06e23d42a7084abe8248e3477b739c1c_large.jpg'
  ]
  return (
    <div className={style.imageContainer}>
      <div className={style.mainImageContainer}>
        <div className={style.mainImage}>
          <img src={image[0]}/>
        </div>
      </div>
      <div className={style.subImageContainer}>
        <div className={style.subImage}>
          <img src={image[1]}/>
        </div>
        <div className={style.subImage}>
          <img src={image[2]}/>
        </div>
        <div className={style.subImage}>
          <img src={image[3]}/>
        </div>
      </div>
    </div>
  )
}
