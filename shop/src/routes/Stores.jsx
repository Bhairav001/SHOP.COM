import { Box, Center, Heading, Image, SimpleGrid, Spinner, Text, } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const getStoreData = () =>{
   return axios(`https://makeup-api.herokuapp.com/api/v1/products.json?product_category=powder`)
}
const Stores = () => {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(1)

  useEffect(()=>{
    setLoading(false)
     getStoreData()
     .then((res) => {
          setLoading(true)
          setData(res.data)
     })
     .catch((err) => {
      setLoading(false)
      console.log(err)
     })
  },[])
  if(!loading){
    return <Center>
      <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
     />
   </Center>
  }
  console.log(data)
  return (
    <div>
      <Box mt={3} mb={3} w="100%" bg="white" p={3}>
        <Center>
          <Heading>All Products</Heading>
        </Center>
        <SimpleGrid  mt={3} columns={[2,null,4]} spacing='40px'>
          {
            data.map((res)=>(
              <div>
                <Link to={`/product/${res.id}`}>
                  <Box key={res.id} w="100%" h="100%" cursor="pointer" bg="white" border="1px solid black" borderRadius={10} p={3}>
                   <Image src={res.api_featured_image}/>
                   {/* <Center> */}
                   <Text textAlign="center">{res.brand}</Text>
                   <Heading textAlign="center" size="sm">Brand: {res.brand}</Heading>
                   <Heading size="md" textAlign="center">${res.price}</Heading>
                   <Text textAlign="center">Category {res.category}</Text>
                   {/* </Center> */}
                  </Box>
                </Link>
              </div>
            ))
          }
        </SimpleGrid>
      </Box>
    </div>
  )
}

export default Stores