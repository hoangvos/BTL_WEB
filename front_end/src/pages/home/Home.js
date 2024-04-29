import React from 'react'
import BannerImage from './component/BannerImage'
import GridItems from './component/GridItems'

import CategoryComponent from '../../components/category/Category'
export default function Home() {
  return (
    <>
      <BannerImage />
      <CategoryComponent name="all"/>
      <GridItems />
    </>
  )
}
