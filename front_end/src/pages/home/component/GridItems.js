import React from 'react'
import style from './Home.module.css'
import Product from '../../../components/product/Product'

class ProductC {
  // constructor(status, image, size, color, title, price) {
  //   this.status = status;
  //   this.image = image;
  //   this.size = size;
  //   this.color = color;
  //   this.title = title;
  //   this.price = price;
  // }
  constructor(id, ptitle, pprice, pimg, rating){
    this.id = id;
    this.ptitle = ptitle;
    this.pprice = pprice;
    this.pimg = pimg;
    this.rating = rating;
  }
}
export default function GridItems() {
  const products = [
    new ProductC(
      1,
      "example 1",
      145000,
      "https://product.hstatic.net/1000230642/product/dsmh05501den__5__a628b22fabf7498f8a83565289fe4d5b_large.jpg",
      4.5
    ),
    new ProductC(
      
      1,
      "example 2",
      333000,
      "https://product.hstatic.net/1000230642/product/sandal-nu-gosto-gfw018688den-den-qgsgz-color-den_44e3580729ab4786b8ffe5090d0ab5d9_large.jpg",
      3.5
    )
  ]
  return (
    <>
      <div className={`flex-column justify-content-center align-items-center`} id="giamGia">
        <h2 className="text-center">SẢN PHẨM GIẢM GIÁ</h2>
        <div className={`${style.gridContainer} my-2 mx-auto`}>
          <div className={`${style.gridItem}`}>
            <Product product={products[0]} />
          </div>
          <div className={`${style.gridItem}`}>
            <Product product={products[1]}/>
          </div>
          <div className={`${style.gridItem}`}>
            <Product product={products[0]} />
          </div>
          <div className={`${style.gridItem}`}>
            <Product product={products[1]}/>
          </div>
          <div className={`${style.gridItem}`}>
            <Product product={products[0]} />
          </div>
          <div className={`${style.gridItem}`}>
            <Product product={products[1]}/>
          </div>
          <div className={`${style.gridItem}`}>
            <Product product={products[0]} />
          </div>
          <div className={`${style.gridItem}`}>
            <Product product={products[1]}/>
          </div>
        </div>
        <h2 className="text-center">CÒN NHIỀU LẮM, XEM THÊM</h2>
      </div>

      <div className={`flex-column justify-content-center align-items-center`} id="giamGia">
        <h2 className="text-center">SẢN PHẨM MỚI</h2>
        <div className={`${style.gridContainer} my-2 mx-auto`}>
          <div className={`${style.gridItem}`}>
            <Product product={products[0]} />
          </div>
          <div className={`${style.gridItem}`}>
            <Product product={products[1]}/>
          </div>
          <div className={`${style.gridItem}`}>
            <Product product={products[0]} />
          </div>
          <div className={`${style.gridItem}`}>
            <Product product={products[1]}/>
          </div>
          <div className={`${style.gridItem}`}>
            <Product product={products[0]} />
          </div>
          <div className={`${style.gridItem}`}>
            <Product product={products[1]}/>
          </div>
          <div className={`${style.gridItem}`}>
            <Product product={products[0]} />
          </div>
          <div className={`${style.gridItem}`}>
            <Product product={products[1]}/>
          </div>
        </div>
        <h2 className="text-center">CÒN NHIỀU LẮM, XEM THÊM</h2>
      </div>

      <div className={`flex-column justify-content-center align-items-center`} id="giamGia">
        <h2 className="text-center">SẢN NỔI BẬT</h2>
        <div className={`${style.gridContainer} my-2 mx-auto`}>
          <div className={`${style.gridItem}`}>
            <Product product={products[0]} />
          </div>
          <div className={`${style.gridItem}`}>
            <Product product={products[1]}/>
          </div>
          <div className={`${style.gridItem}`}>
            <Product product={products[0]} />
          </div>
          <div className={`${style.gridItem}`}>
            <Product product={products[1]}/>
          </div>
          <div className={`${style.gridItem}`}>
            <Product product={products[0]} />
          </div>
          <div className={`${style.gridItem}`}>
            <Product product={products[1]}/>
          </div>
          <div className={`${style.gridItem}`}>
            <Product product={products[0]} />
          </div>
          <div className={`${style.gridItem}`}>
            <Product product={products[1]}/>
          </div>
        </div>
        <h2 className="text-center">CÒN NHIỀU LẮM, XEM THÊM</h2>
      </div>
    </>
    
  )
}
