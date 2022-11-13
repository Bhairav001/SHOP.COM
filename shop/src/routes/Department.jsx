import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
// import ReadMoreReact from "read-more-react";


const MockApi=()=>{
    return axios(`https://fakestoreapi.com/products`)
}

function Department(){
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [readMore,setReadMore]=useState(false);

    useEffect(()=>{
        setLoading(false)
        MockApi().then((res)=>{
            setData(res.data);
            setLoading(true);
console.log(res.data)
        }).catch(err=>{console.log(err)
        setLoading(true)})
    },[])
console.log(data.id)
    return(<>       <Box mb={3}>

        <Image src="https://img.shop.com/Image/homepage/shopping-pq2237-essentials-banner1556313062244.jpg" alt="x" />
       </Box>
       <SimpleGrid  mt={3} p={5} columns={[2, null, 4]} spacing='40px'>
        {
            data.map((item)=>(<>
            <Box key={item.id}>
                <Heading _hover={{color:"blue"}} size="sm">{item.title}</Heading>
               <Text mt={3}  cursor="pointer"> <Text  text={item.description}
                min={15}
                ideal={25}
                max={50}
                readMoreText="...read more" />
                </Text>
                <Image w="40%" h="50%" mt={3} src={item.image} alt="x" />
                    </Box>
            </>))
        }
        </SimpleGrid>
       </>

    )
}
export default Department;