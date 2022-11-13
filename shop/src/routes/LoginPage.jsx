import {
  Heading,
  Box,
  Flex,
  Input,
  InputRightAddon,
  InputRightElement,
  Button,
  InputGroup,
  Stack,
  Text,
  Spacer
  
} from "@chakra-ui/react";
import {Link, Navigate} from "react-router-dom"
import { useContext, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import React from "react";
import axios from "axios"
import { AuthContext } from "../context/AppContext";

const userLogin=(data={})=>{
  return axios.post("https://reqres.in/api/login",data)
}

const intial={
  email:"",
  password:""
}


function LoginPage() {
  // const [user,setUser]=useState(intial);
const {loginUser,isAuth}=useContext(AuthContext);
const [input, setInput] = useState([]);
const [show, setShow] = useState(false);

const handleInputChange = (e) => {
  const {id,value}=e.target;
  setInput({...input,[id]:value})
  console.log(input)

}
const handleLogin=(e)=>{
  e.preventDefault();
      userLogin(input).then(res=>{
          console.log(res.data.token);
  
          loginUser(input.password,res.data.token)
  
      }).catch(err=>{
          console.log(err.response.data)
          alert(err.response.data.error)

      })
  }
  if(isAuth){
    return <Navigate to="/" />
}
const Tosignup=()=>{
  alert("ndj")
  return 
  
} 

  const handleClick = () => setShow(!show);

  const isError = input === "";
  return (
    <>
      <Box m="auto" mt={3} mb={5} w="50%">
        <Flex justifyContent="space-around">
          <Box w="50%">
            
            <Heading>Sign in</Heading>
            <FormControl mt={3} isInvalid={isError}>
            
              <InputGroup size="md">
              <Stack>
                <FormLabel>Email Address:</FormLabel>
                <Input
                  type="email"
                  placeholder="yourname@example.com"
                  onChange={handleInputChange}
                  id="email"
                />

                <FormLabel>Password:</FormLabel>
                <Flex>
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  id="password"
                  onChange={handleInputChange}
                />
                <InputRightAddon children={ <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button> }/>
                {/* <InputRightElement width="4.5rem">
                  
                </InputRightElement> */}
                </Flex>
                </Stack>
              </InputGroup>
              {!isError ? (
                <FormHelperText>
                 <Link to="/"><Text textDecoration="underline">Forget Your Password</Text></Link>
                 <Button onClick={handleLogin} w="40%" borderRadius={25} _hover={{background:"grey"}} bg="#414467" mt={2} color="white">Sign in</Button>
                </FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
             {/* <Button w="40%" borderRadius={25} _hover={{background:"grey"}} bg="#414467" mt={2} color="white">Sign in</Button> */}
            </FormControl>
          </Box><Spacer />
          <Box w="50%" ><Stack>
            <Text fontSize="25px">Don't have an account?
              </Text>
              <Text fontSize="14px" >
              With a SHOP.COM account, you can enjoy the following benefits: up to 50% Cashback on eligible purchases, redeem discount coupons, order status and history, saved payment options and addresses, exclusive emails and more. <Link to="/" ><Text textDecoration="underline">Learn more</Text></Link> 
              </Text>
            <Link to="/signup">  <Button  colorScheme='teal' variant='outline'>
    Create New Account
  </Button></Link>
            </Stack></Box>
        </Flex>
      </Box>
    </>
  );
}
export default LoginPage;
