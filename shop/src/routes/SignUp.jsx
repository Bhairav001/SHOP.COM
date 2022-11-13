import React, { useState } from "react";
import {Box, Button, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, Spacer} from "@chakra-ui/react"
import axios from "axios";
import { Navigate } from "react-router-dom";


const UserSignup=(data={})=>{
    return axios.post("https://masai-api-mocker.herokuapp.com/auth/registe",data)
  }

function SignUp(){
    const [input, setInput] = useState('')
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const handleInputChange = (e) => {
        const {id,value}=e.target;
        setInput({...input,[id]:value})
        console.log(input)
      
      }

      const HandlesignUp=(e)=>{
        e.preventDefault();
        alert(`Welcome ! ${input.name}`)
            UserSignup(input).then(res=>{
                console.log(res.data.token);
               
        
                // loginUser(input.password,res.data.token)
        
            }).catch(err=>{
                console.log(err)
            })
        }

  
    const isError = input === ''
    return(
    <>
    <Box m="auto" mt={5} mb={5} w="50%">
        <Flex>
        <Box  w="40%">
        <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input type='text' id="name" onChange={handleInputChange} placeholder='Name' />
        <FormLabel>Email address</FormLabel>
        <Input  type='email' id="email" onChange={handleInputChange} placeholder='yourname@example.com' />
       
        <FormLabel>Password</FormLabel>
        <InputGroup size='md'>
        <Input
        pr='4.5rem'
       id="password" onChange={handleInputChange}
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    
      </FormControl>
      <Button bg="#414467" onClick={HandlesignUp} borderRadius={25} color="white" w="90%" m={3}>Create Your New Account</Button>
      </Box>
      <Spacer />
      <Box w="40%">
      <FormControl isRequired>
        <FormLabel>User Name</FormLabel>
        <Input type='text' id="username" onChange={handleInputChange} placeholder='User Name' />
        <FormLabel>Mobile</FormLabel>
        <Input type='number' id="mobile" onChange={handleInputChange} placeholder='Mobile' />
        <FormLabel>Description</FormLabel>
        <Input type='text' id="description" onChange={handleInputChange} placeholder='Description' />
        </FormControl>
      </Box>
        </Flex>
        
    </Box>
   
      </>

    )
}

export default SignUp;

