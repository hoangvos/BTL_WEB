import React from 'react'
import style from './Path.module.css';



export default function Path({ paths }) {
  
  return (
    <div className={`${style.container}`}>
      <div className={`${style.content}`}>
        {paths.map((path, index) => {

          return(
            <div
              key={index}
            >
              {path}
            </div>
          );
        })}
      </div>
      
    </div>
  )
}
