import React from 'react'
import BannerImage from './BannerImage'
import GridItems from './GridItems'

import CategoryComponent from '../../../components/category/Category'
export default function MainHomePage() {
  return (
    <>
      <BannerImage />
      <CategoryComponent name="all"/>
      <GridItems />
    </>
  )
}
  