import { Box, Button, Center, Flex, Grid, GridItem, Heading, Image, Img, Square, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'

const recentalyViwed = [
  {title:"Shopping Annuity® Brand Premium Biotin Gummies",
   img:"",
   price:230
  }
]
const HomPage = () => {
  return (
    <>
    <Navbar/>
     <div id='image'>
      <Image src='gibbresh.png' fallbackSrc='https://img.shop.com/Image/homepage/Shop-usa-100082-thanksgiving-lp-banners-uf-hero-min1666623154719.jpg' />
     </div>
     <div>
      <Stack margin="100px">
       <Grid templateColumns='repeat(4, 1fr)' gap={6}  direction={['column', 'row']}>
          <GridItem boxShadow='dark-lg'>
            <Text fontSize='2xl' textAlign="center">Recently Viewed</Text>
            <Image width="500px" src='https://img.shop.com/Image/240000/247900/247927/products/1943471616.jpg?plain&size=300x300'></Image>
            <Text fontSize='xl' textAlign="center">Browsing History</Text>
          </GridItem>
          <GridItem boxShadow='dark-lg'>
            <Text fontSize='2xl' textAlign="center">Your Favorite Departments</Text>
            <Image src='https://img.shop.com/Image/departments/Toys.jpg'></Image>
            <Text fontSize='xl' textAlign="center">Toys</Text>
          </GridItem>
          <GridItem boxShadow='dark-lg' >
            <Text fontSize='2xl' textAlign="center">Featured OneCart Stores</Text>
            {/* <Grid templateRows='repeat(5, 1fr)'> */} <br />
              <Image  w="400px" src='https://img.shop.com/Image/topbrands/nmlogos_139741.gif'></Image><br />
              <Image  w="400px" src='https://img.shop.com/Image/topbrands/nmlogos_135927.gif'></Image><br />
              <Image  w="400px" src='https://img.shop.com/Image/topbrands/nmlogos_101327.gif'></Image><br />
              <Image  w="400px" src='https://img.shop.com/Image/topbrands/nmlogos_135882.gif'></Image><br />
              <Text fontSize='xl' textAlign="center">See More Stores</Text>
            {/* </Grid> */}
          </GridItem>
          <GridItem boxShadow='dark-lg'>
            <Box>
              <Text fontSize='2xl' textAlign="center">Sign in for the best experience</Text>
              <Button bg="blue.500" p={5} m={15} width="300px" >Sign In</Button>
            </Box>
            <GridItem>
              <Image src='https://img.shop.com/Image/homepage/sa-usa-103713-pain-relief-spray-lg-media1664464729834.jpg'></Image>
            </GridItem>
          </GridItem>
       </Grid>
      </Stack>
     </div>  
     <div id='2'>
       <Grid
         h='200px'
         templateRows='repeat(2, 1fr)'
         templateColumns='repeat(6, 1fr)'
         gap={4}
        >
          <GridItem  rowSpan={2} colSpan={1} >
             <Image src='https://img.shop.com/Image/homepage/SHOP_100044_USA_CAN_UK_AUS_2022_Holiday_Hot_Deals_Banners_Social_Media_and_Landing_Page_sq1666623189351.jpg'></Image>
          </GridItem>
          <GridItem colSpan={1}>
              <Image src='https://img.shop.com/Image/homepage/nike_140x110-img.gif'></Image>
          </GridItem>
          <GridItem colSpan={1} >
             <Image src='https://img.shop.com/Image/homepage/michaelkors_140x110-img.gif'></Image>
          </GridItem>
          <GridItem colSpan={1}>
                 <Image src='https://img.shop.com/Image/homepage/coach_brand7.jpg'></Image>
          </GridItem>
          <GridItem colSpan={1} >
                  <Image src='https://img.shop.com/Image/homepage/adidaslogo_140_1100.jpg'></Image>
          </GridItem>
          <GridItem colSpan={1} >
                   <Image src='https://img.shop.com/Image/homepage/shark-ninja-logo1660227901172.jpg'></Image>
          </GridItem>
          <GridItem  colSpan={1}  >
                  <Image src='https://img.shop.com/Image/homepage/us-eng-macys-earlyblackfriday-media-hp-nov221666972238596.jpeg'></Image>
          </GridItem>
          <GridItem  colSpan={1} >
                    <Image src='https://img.shop.com/Image/homepage/us-eng-bbb-memorialday-media-may211667235976479.jpg'></Image>
          </GridItem>
          <GridItem colSpan={1}>
                  <Image src='https://img.shop.com/Image/homepage/shop_us_QVC_BlackFriday_300x250-img1667602142655.jpg'></Image>
          </GridItem>
          <GridItem colSpan={1}>
                   <Image src='https://img.shop.com/Image/homepage/us-hp-hubee1666108828447.jpg'></Image>
          </GridItem>
          <GridItem colSpan={1} >
                 <Image src='https://img.shop.com/Image/homepage/us-eng-bbb-memorialday-media-may211667235976479.jpg'></Image>
          </GridItem>
      </Grid>
     </div>
     {/* <div id='3'>
         <Center width="200px" margin="auto">
            <Image src='https://img.shop.com/Image/resources/homepage/shop-homepage-icon.svg'></Image>
         </Center>
     </div> */}
     <br />
     <div id='4'>
      <Grid color='white'>
        {/* <Image src='https://img.shop.com/Image/homepage/shp-US-en-BoxDog-300_2501667944394398.png'></Image> */}
         <Image src=''></Image>
      </Grid>
     </div>
    </>

  )
}

export default HomPage