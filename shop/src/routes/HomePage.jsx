import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Flex, Heading, Icon, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function getRandomInt(max,min) {
  return Math.random() * (max - min) + min;
}

const medicalProduct=(page)=>{
  return axios(`https://warm-garden-46246.herokuapp.com/medical_products?_page=${page}&_limit=4`);
}
const MakeupProduct=(page)=>{
return axios(`https://warm-garden-46246.herokuapp.com/Makeup_Products?_page=${page}&_limit=4`)
}

const MixProductApi=()=>{
  return axios(`https://api.escuelajs.co/api/v1/categories?offset=1&limit=5`)
  }

const HomePage = () => {
  const [medicine,setMedicine]=useState([]);
  const [mixproduct,setMixproduct]=useState([]);
  const [makeup,setMakeup]=useState([]);
  
  const [page,setPage]=useState(1);
  const [page1,setPage1]=useState(1);
  useEffect(()=>{
    medicalProduct(page).then(res=>{
      setMedicine(res.data);
      // console.log("ss",medicine)

  }).catch(err=>{
      console.log(err)
  })
  },[page]);
  
  useEffect(()=>{
    MixProductApi().then(res=>{
      setMixproduct(res.data);
    

  }).catch(err=>{
      console.log(err)
  })
  },[])
  
  useEffect(()=>{
    MakeupProduct(page1).then(res=>{
      setMakeup(res.data);
      // console.log("aa",res.data);
      // console.log("make",makeup);

  }).catch(err=>{
      console.log(err)
  })
  },[page1]);
  console.log("mix",mixproduct)
  return (
    <>
        {" "}
      <Box w="100%">
        <Center p={2}>
          <Text fontSize={30} mr={2}>
            $50,074,194{" "}
          </Text>
          awarded in{" "}
          <Image
            ml={2}
            mr={2}
            w={10}
            src="https://img.shop.com/Image/resources/images/cashback-icon.svg"
          />
          <b> Cashback!</b>
          <Button
            _hover={{ background: "#202340", color: "white" }}
            ml={2}
            borderRadius={25}
            colorScheme="black"
            variant="outline"
          >
            Learn More
          </Button>
        </Center>
      </Box>
      <Box>
        <Link to="/">
          <Image
            // mt={3}
            // src="https://www.shop.com/feo-cdn/z/J/mL5ft05xE.webp"
            // alt="https://www.shop.com/feo-cdn/z/J/mL5ft05xE.webp"
          />
        </Link>
      </Box>
      <Box>
        <Link to="/">
          <Image
            mt={3}
            src="https://img.shop.com/Image/homepage/Shop-usa-100082-thanksgiving-lp-banners-uf-hero-min1666623154719.jpg"
            alt="eo-cdn/z/J/mL5ft05xE.webp"
          />
        </Link>
      </Box>
      <Box mt={3} w="100%" bg="#f0f1f7">
        <Flex h="450px" justifyContent="space-evenly" p={3}>
          <Box w="23%" bg="white" p={5}>
            <Text mb={5}>Recently Viewed</Text>
            <Link to="/">
              {" "}
              <Image
                src="https://img.shop.com/Image/240000/247900/247927/products/1943471616.jpg?plain&size=300x300"
                alt="x"
              />
            </Link>{" "}
            <Link to="/">
              <Text
                _hover={{ color: "#0098b8" }}
                textDecoration="underline"
                mt={5}
              >
                Browsing History
              </Text>
            </Link>
          </Box>

          <Box w="23%" bg="white" p={5}>
            <Text mb={5}>Dr. Deedra Mason's Essential 9 </Text>
            <Link to="/">
              {" "}
              <Image
                src="https://img.shop.com/Image/departments/Toys.jpg"
                alt="x"
              />
            </Link>
            <Link to="/">
              <Text
                _hover={{ color: "#0098b8" }}
                textDecoration="underline"
                mt={5}
              >
                View the Essential 9
              </Text>
            </Link>
          </Box>
          <Box w="23%" bg="white" p={5}>
            <Text mb={5}>Featured OneCart Stores </Text>
            <Stack>
              <Box p={2} bg="#f0f1f7">
                <Center>
                  {" "}
                  <Link to="/">
                  
                    {" "}
                    <Image
                      mixBlendMode="multiply"
                      src="https://img.shop.com/Image/topbrands/nmlogos_139741.gif"
                      alt="x"
                    />
                  </Link>
                </Center>
              </Box>
              <Box p={2} bg="#f0f1f7">
                <Center>
                  {" "}
                  <Link to="/">
                    <Image
                      mixBlendMode="multiply"
                      src="https://img.shop.com/Image/topbrands/nmlogos_135927.gif"
                      alt="x"
                    />
                  </Link>
                </Center>
              </Box>
              <Box p={2} bg="#f0f1f7">
                <Center>
                  {" "}
                  <Link to="/">
                    {" "}
                    <Image
                      mixBlendMode="multiply"
                      src="https://img.shop.com/Image/topbrands/nmlogos_101327.gif"
                      alt="x"
                    />
                  </Link>
                </Center>
              </Box>
              <Box p={2} bg="#f0f1f7">
                <Center>
                  {" "}
                  <Link to="/">
                    <Image
                      mixBlendMode="multiply"
                      src="https://img.shop.com/Image/topbrands/nmlogos_135882.gif"
                      alt="x"
                    />
                  </Link>
                </Center>
              </Box>
            </Stack>

            <Link to="/">
              <Text
                _hover={{ color: "#0098b8" }}
                textDecoration="underline"
                mt="85px"
              >
                See More Stores
              </Text>
            </Link>
          </Box>
          <Box w="23%" pt="0px" >
            <Box h="25%" w="100%" mb={2} p={5} bg="white">
              <Center>
                <Text >Sign in for the best experience</Text>
                
              </Center>
              <Center><Button borderRadius={25} mt={2} w="80%" color="white" bg='#202340'>Sign In</Button></Center>
              
              
            </Box>
            <Link to="/">
            <Image h="70%" mixBlendMode="multiply"
                src="https://img.shop.com/Image/homepage/sa-usa-103713-pain-relief-spray-lg-media1664464729834.jpg"
                alt="x"
              /></Link>

          </Box>
        </Flex>
      </Box>
      <Box mt={3} w="100%" bg="white" p={3}>
        <Heading>
          New Prouducts
        </Heading>
        <Flex h="550px"  justifyContent="space-evenly" p={3}>
        <IconButton mt="15%" disabled={page===1} onClick={()=>setPage(page-1)} icon={<ArrowLeftIcon />} colorScheme='teal' variant='outline' />
          
        {
          medicine.map((item)=><>
         <Link  to={`/product/${item.id}`}>
           <Box w="100%" h="100%" cursor="pointer" bg="white"  p={3} key={item.id}>
              <Image w="90%" h="80%" src={item.main_image} alt={item.main_image}/>
             <Center> <Text w="80%">
                {item.title}
              </Text>
             </Center>
             <Heading ml={10} size="sm">
                {item.price}
                </Heading>
                <Text ml={10}><Icon mr={2} as={StarIcon} />{Math.floor(getRandomInt(3,5))}</Text>
              </Box>
              </Link>
              {/* <ProductDetail key={item.id} main_image={item.main_image} title={item.title}
               price={item.price} desc={item.desc} back_side_img={item.back_side_img} side_img={item.side_img} /> */}
              </>
          )
        }
         <IconButton mt="15%" onClick={()=>setPage(page+1)} icon={<ArrowRightIcon />} colorScheme='teal' variant='outline' />
        
        </Flex>
      </Box>
<hr h={5} />

      <Box mt={3} w="100%" bg="white" p={3}>
        <Center>
        <Heading>
        Popular Brands
        </Heading>
        </Center>
        <Flex h="550px"  justifyContent="space-evenly" p={3}>
        <IconButton mt="15%" disabled={page1===1} onClick={()=>setPage1(page1-1)} icon={<ArrowLeftIcon />} colorScheme='teal' variant='outline' />
        
        {
          makeup.map((item)=><>
         <Link  to={`/product/${item.id}`}>
           <Box w="100%" h="100%" cursor="pointer" bg="white"  p={3} key={item.id}>
              <Image w="90%" h="80%" src={item.image_link} alt={item.main_image}/>
             <Center> <Text w="80%">
                {item.name}
              </Text>
             </Center>
             <Heading ml={10} size="sm">
                ${item.price}
                </Heading>
                <Text ml={10}><Icon mr={2} as={StarIcon} />{item.rating}</Text>
              </Box>
              </Link>
              {/* <ProductDetail key={item.id} main_image={item.main_image} title={item.title}
               price={item.price} desc={item.desc} back_side_img={item.back_side_img} side_img={item.side_img} /> */}
              </>
          )
        }
         <IconButton mt="15%" onClick={()=>setPage1(page1+1)} icon={<ArrowRightIcon />} colorScheme='teal' variant='outline' />
        
        </Flex>
      </Box>

      <hr h={5} />
      <Box mt={3} w="100%" bg="white" p={3}>
        <Center>
        <Heading>
        Set your Summer Table
        </Heading>
        </Center>
        <Flex h="400px"  justifyContent="space-evenly" p={3}>
      
        {
          mixproduct.map((item)=><>
         <Link  to={`/product/${item.id}`}>
           <Box w="100%" h="100%" cursor="pointer" bg="white"  p={3} key={item.id}>
              <Image  border="10px solid grey" w="90%" borderRadius="50%" h="70%" src={item.image} alt={item.main_image}/>
             <Center> <Heading size="md" textTransform="uppercase" mt={3}>
                {item.name}
              </Heading>
             </Center>
                </Box>
              </Link>
                </>
          )
        }
      
        </Flex>
      </Box>
    </>
  )
}

export default HomePage