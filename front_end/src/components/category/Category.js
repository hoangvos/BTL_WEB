import React, { useState } from 'react'
import style from './Category.module.css'

class CategoryChildren{
  constructor(name, image, link) {
    this.name = name;
    this.image = image;
    this.link = link;
  }
}

class Category{
  constructor(name, categoryChildrens, link) {
    this.name = name;
    this.categoryChildrens = categoryChildrens;
    this.link = link;
  }
}

export default function CategoryComponent({name}) {
  const [indexActive, setIndexActive] = useState(0);

  const handleClickParent = (index) => {
    setIndexActive(index);
  }
  const menCategory = new Category(
    "NAM",
    [
      new CategoryChildren(
        "Hunter",
        "https://theme.hstatic.net/1000230642/1001205219/14/hunter-nam.svg?v=612",
        "http://localhost:3000/"),
      new CategoryChildren(
        "Sandal",
        "https://theme.hstatic.net/1000230642/1001205219/14/sandal-nam.svg?v=612",
        "http://localhost:3000/"),
      new CategoryChildren(
        "Giày Thể Thao",
        "https://theme.hstatic.net/1000230642/1001205219/14/giay-the-thao-nam.svg?v=612",
        "http://localhost:3000/"),
      new CategoryChildren(
        "Giày Chạy Bộ",
        "https://theme.hstatic.net/1000230642/1001205219/14/hunter-running-nam.svg?v=612",
        "http://localhost:3000/"),
      new CategoryChildren(
        "Giày Đá Banh",
        "https://theme.hstatic.net/1000230642/1001205219/14/giay-da-banh.svg?v=612",
        "http://localhost:3000/"),
      new CategoryChildren(
        "Giày Tây",
        "https://theme.hstatic.net/1000230642/1001205219/14/giay-tay-nam.svg?v=612",
        "http://localhost:3000/"),
      new CategoryChildren(
        "Dép",
        "https://theme.hstatic.net/1000230642/1001205219/14/dep-nam.svg?v=612",
        "http://localhost:3000/"),
    ],
    "http://localhost:3000/"
  )

  const womenCategory = new Category(
    "NỮ",
    [
      new CategoryChildren(
        "Hunter",
        "https://theme.hstatic.net/1000230642/1001205219/14/hunter-nu.svg?v=612",
        "http://localhost:3000/"),
      new CategoryChildren(
        "GOSTO",
        "https://theme.hstatic.net/1000230642/1001205219/14/gosto.svg?v=612",
        "http://localhost:3000/"),
      new CategoryChildren(
        "Sandal",
        "https://theme.hstatic.net/1000230642/1001205219/14/sandal-nu-1.svg?v=612",
        "http://localhost:3000/"),
      new CategoryChildren(
        "Giày Búp Bê",
        "https://theme.hstatic.net/1000230642/1001205219/14/giay-bup-be-nu.svg?v=612",
        "http://localhost:3000/"),
      new CategoryChildren(
        "Giày Thời Trang",
        "https://theme.hstatic.net/1000230642/1001205219/14/giay-thoi-trang-nu-1.svg?v=612",
        "http://localhost:3000/"),
      
      new CategoryChildren(
        "Giày Chạy Bộ - Đi Bộ",
        "https://theme.hstatic.net/1000230642/1001205219/14/hunter-running-jogging.svg?v=612",
        "http://localhost:3000/"),
      new CategoryChildren(
        "Giày Thể Thao",
        "https://theme.hstatic.net/1000230642/1001205219/14/giay-the-thao-nu.svg?v=612",
        "http://localhost:3000/"),
      new CategoryChildren(
        "Dép",
        "https://theme.hstatic.net/1000230642/1001205219/14/dep-nu.svg?v=612",
        "http://localhost:3000/"),
    ],
    "http://localhost:3000/"
  )

  const boyCategory = new Category(
    "BÉ TRAI",
    [
      new CategoryChildren(
        "Giày Thể Thao",
        "https://theme.hstatic.net/1000230642/1001205219/14/giay-the-thao-be-trai.svg?v=612",
        "http://localhost:3000/"),
      new CategoryChildren(
        "Sandal",
        "https://theme.hstatic.net/1000230642/1001205219/14/sandal-be-trai.svg?v=612",
        "http://localhost:3000/"),
      new CategoryChildren(
        "Dép",
        "https://theme.hstatic.net/1000230642/1001205219/14/dep-be-trai.svg?v=612",
        "http://localhost:3000/"),
    ],
    "http://localhost:3000/"
  )
  
  const girlCategory = new Category(
    "BÉ GÁI",
    [
      new CategoryChildren(
        "Giày Búp Bê",
        "https://theme.hstatic.net/1000230642/1001205219/14/giay-bup-be-be-gai.svg?v=612",
        "http://localhost:3000/"),
      new CategoryChildren(
        "Giày Thể Thao",
        "https://theme.hstatic.net/1000230642/1001205219/14/giay-the-thao-be-gai.svg?v=612",
        "http://localhost:3000/"),
      new CategoryChildren(
        "Sandal",
        "https://theme.hstatic.net/1000230642/1001205219/14/sandal-be-gai.svg?v=612",
        "http://localhost:3000/"),
      new CategoryChildren(
        "Dép Bé Gái",
        "https://theme.hstatic.net/1000230642/1001205219/14/dep-be-gai.svg?v=612",
        "http://localhost:3000/"),
      new CategoryChildren(
        "Giày Tập Đi",
        "https://theme.hstatic.net/1000230642/1001205219/14/giay-tap-di.svg?v=612",
        "http://localhost:3000/"),
    ],
    "http://localhost:3000/"
  )

  let categories = []
  if (name === "men") {
    categories.push(menCategory);
  } else if (name === "woman") {
    categories.push(womenCategory);
  } else if (name === "boy") {
    categories.push(boyCategory);
  } else if (name === "girl") {
    categories.push(girlCategory);
  } else if (name === "all") {
    categories.push(menCategory);
    categories.push(womenCategory);
    categories.push(boyCategory);
    categories.push(girlCategory);
  }

  return (
    categories.length === 0 ? <></> :
      <div className={`${style.container}`}>
        <div className={`${style.parent}`}>
          {categories.map((category, index) => {
            return (
              <div
                className={indexActive === index && style.parentActive}
                onClick={() => { handleClickParent(index) }}
              >
                <a href={category.link}>{category.name}</a>
              </div>
            );
          })}
        </div>

        <div className={`${style.children}`}>
          <div className={`${style.childrenContent} `}>
            {
              categories[indexActive].categoryChildrens.map((categoryChildren, index) => {
                return (
                  <div>
                    <a href={categoryChildren.link}>
                      <img alt="anh" src={categoryChildren.image} />
                    </a>
                    <a href={categoryChildren.link}>{categoryChildren.name}</a>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    
  )
}
