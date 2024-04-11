import React from 'react'
import style from './MainHomePage.module.css'

export default function GridItems() {
  return (
    <div className={`d-flex justify-content-center align-items-center`}>
      <div className={`${style.gridContainer} my-2`}>
        <div className={`${style.gridItem} bg-primary`}>
          1
        </div>

        <div className={`${style.gridItem} bg-primary`}>
          2
        </div>
        <div className={`${style.gridItem} bg-primary`}>
          3
        </div>  
        <div className={`${style.gridItem} bg-primary`}>
          4
        </div>
        <div className={`${style.gridItem} bg-primary`}>
          5
        </div>
        <div className={`${style.gridItem} bg-primary`}>
          6
        </div>  
        <div className={`${style.gridItem} bg-primary`}>
          7
        </div>
        <div className={`${style.gridItem} bg-primary`}>
          8
        </div>
        <div className={`${style.gridItem} bg-primary`}>
          9
        </div>  
      </div>
    </div>
  )
}
