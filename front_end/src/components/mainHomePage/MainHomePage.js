import React from 'react'
import BannerImage from './BannerImage'
import GridItems from './GridItems'
import CategoryHome from './categories/CategoryHome'
export default function MainHomePage() {
  return (
    <>
      <BannerImage />
      <CategoryHome/>
      <GridItems />
    </>
  )
}
  