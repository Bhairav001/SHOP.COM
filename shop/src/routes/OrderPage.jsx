import { Alert, AlertDescription, AlertIcon, AlertTitle, Avatar, Box, Button, Center, CloseButton, Flex, Heading, Image, Tag, TagLabel, Text, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const GetMedProbyId=(id)=>{
  return axios(`https://warm-garden-46246.herokuapp.com/medical_products/${id}`);

}
const MakeupProduct=(id)=>{
  return axios(`https://warm-garden-46246.herokuapp.com/Makeup_Products/${id}`)
  }
function OrderPage(){
  const [mdata,setMdata]=useState([]);
  const [makeup,setMakeup]=useState("");
  const [err,setErr]=useState("");
  const { id } = useParams();
  useEffect(() => {
        
    GetMedProbyId(id).then(res=>{
       setMdata(res.data)
        console.log("ss",res.data)
  
    }).catch(err=>{
        console.log("amol",err.message);
        setErr(err.message)

    })
     
  }, [id]);
  useEffect(() => {
        
    MakeupProduct(id).then(res=>{
       setMakeup(res.data)
        console.log("ss",res.data)
  
    }).catch(err=>{
        console.log(err)
        setErr(err.message)
    })
     
  }, [id]);
    return(<>
<Center><Heading mt={5}>Orders</Heading></Center>

<Box m="auto" mt={5} w="50%" h="550px">   
{/* <Text>{err}</Text> */}
<Alert status='error'>
{/* <AlertIcon /> */}
{err?<AlertTitle>{err}</AlertTitle>:"Your Wishlist is ready for shopping!"}

</Alert>
<Center><Heading mt={2} mb={2} size="md">Product list</Heading></Center>
<hr />
{
  makeup===""?<Flex>

  <Image w="50%" h="70%" src={mdata.main_image} />
 <Box mt={10}> 
 <Heading size="md">{mdata.title}</Heading>
    <Heading mt={5} size="lg">Total Amount:{mdata.price}</Heading>
        <Link  to={`/cart/${mdata.id}`}>
    <Button w="50%" mt={10} colorScheme='pink' variant='solid'>
    Add to cart
  </Button>
  </Link>

  <Link  to={`/`}>
    <Button ml={1} w="50%" mt={10} colorScheme='green' variant='solid'>
    Go Back!
  </Button>
  </Link>
    
    </Box>
   

  </Flex>:<Flex>

<Image w="50%" mr={5} h="70%" src={makeup.image_link} />
<Box mt={10}> 
<Heading size="md">{makeup.name}</Heading>
  <Heading mt={5} size="lg">Total Amount:{makeup.price}</Heading>
      <Link  to={`/cart/${makeup.id}`}>
  <Button w="50%" mt={10} colorScheme='pink' variant='solid'>
  Add to cart
</Button>
</Link>

<Link  to={`/`}>
  <Button ml={1} w="50%" mt={10} colorScheme='green' variant='solid'>
  Go Back!
</Button>
</Link>
  
  </Box>
 

</Flex>
}
 
    </Box>
    </>

    )
}
export default OrderPage;




        
        
        
           
        
        
        