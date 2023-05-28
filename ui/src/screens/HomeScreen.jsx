/* eslint-disable no-unused-vars */
import React from 'react'
import { Grid, Typography } from '@mui/material'
import Product from '../components/Product'
import products from '../assets/data/products'

const HomeScreen = () => {
  return (
    <Grid container xs={12} lg={12} spacing={2} gap={2} p={2}>
      <Grid item xs={12} sm={6} md={4} lg={12} xl={3}>
        <Typography variant='h3' sx={12} sm={12} lg={12}>
          Latest Products
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={12} xl={3}>
        <Grid container lg={12} xl={12} spacing={2}>
          {products.map((product) => {
            return (
              <Grid item key={product._id} xs={12} md={2} lg={3} xl={3}>
                <Product product={product} />
                {/* <Typography variant='h5'>{product.name}</Typography> */}
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomeScreen