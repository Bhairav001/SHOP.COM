import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Heading, IconButton, Image, SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const AllProductApi = (page,limit) =>{
  return axios(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=${limit}`)
}
const Exclusive = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(12)
  const [limit,setLimit] = useState(12)
  const [loading,setLoading] = useState(false)
  

  useEffect(()=>{
     setLoading(false)
     AllProductApi(page,limit)
     .then((res) => {
      setLoading(true)
      setData(res.data)
     })
     .catch((err) => {
      setLoading(false)
         console.log(err)
     })
  },[page,limit])

 const handlePlus = () =>{
  setPage(page+12)
 }
  console.log(data)
if(!loading){
  return <Center>
    <Spinner 
       thickness='4px'
       speed='0.65s'
       emptyColor='gray.200'
       color='blue.500'
       size='xl'>
    </Spinner>
  </Center>
}
  return (
    <div>
      <Center>
        <Heading>Exclusive Brands</Heading>
      </Center>
      <SimpleGrid gridTemplateColumns="repeat(4,1fr)" gap="2rem">
           {data.map((res)=>(
            <Box w="100%" h="100%" cursor="pointer" bg="white" border="1px solid black" borderRadius={10} p={3} key="res.id">
              <Center>
               <Image src={res.images}/>
              </Center>
              <Heading size="sm" mt={2} textAlign="center">{res.title}</Heading>
              <Text mt={2} fontSize="13px" textAlign="center">{res.description}</Text>
              <Heading mt={2} size="lg" textAlign="center"> ${res.price}</Heading>
            </Box>
           ))}
      </SimpleGrid>
      <Box>
        <Center>
          <IconButton disabled={page==12} onClick={()=>setPage(page-12)} icon={<ArrowLeftIcon/>} colorScheme='teal' variant='outline'/>
            <Button  ml={3} disabled mr={3} colorScheme='teal' variant='outline'>{page}</Button>
          <IconButton onClick={handlePlus} icon={<ArrowRightIcon />} colorScheme='teal' variant='outline'/>
        </Center>
      </Box>
    </div>
  )
}

export default Exclusive