import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Center,Tag,TagLabel, Heading, IconButton, Image, SimpleGrid, Spinner, Text, useOutsideClick } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AllProductApi=()=>{
    return axios(`https://api.escuelajs.co/api/v1/products?offset=2&limit=10`)
    }

function OfferPage(){
    const [data,setData]=useState([]);
//   const [page,setPage]=useState(12);
//   const [limit,setLimit]=useState(12);
  const [loading, setLoading] = useState(false);
    useEffect(()=>{
      setLoading(false);
AllProductApi().then((res)=>{
  setLoading(true)
  setData(res.data)
}
// console.log(res.data)


).catch((err)=>
console.log(err))
setLoading(false);
    },[])
    

if (!loading) {
  return <Center> <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/></Center>
}
    return(<>        <Center>
             <Heading as='h5' mt={3}  size='md'> Newly Launched Products! </Heading>
        </Center>
        <SimpleGrid  mt={3} p={5} columns={[2, null, 4]} spacing='40px'>
    
      {data.map(data => (<>
      
        <Box w="100%" h="100%" cursor="pointer" bg="white" border="1px solid black" borderRadius={10} p={3} key={data.id}>
        <Tag size='lg' mb={3} colorScheme='red' borderRadius='full'>
        <TagLabel>New!</TagLabel>
        </Tag>

          <Center> <Image w="90%" h="70%" src={data.images} /></Center>
          <Heading size="sm" mt={2} >
                {data.title}
              </Heading>
       
              <Text mt={2} fontSize="13px">
                {data.description}
              </Text>
              <Heading mt={2} size="lg">
                $
{data.price}
              </Heading>
            </Box>
      {/* <div>{data.title}</div> */}
      
      </>)
      
      )}
      </SimpleGrid >
        </>

       
    )
}
export default OfferPage;