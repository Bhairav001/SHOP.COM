import { Button, Center, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function Address(){
    const [input, setInput] = useState('')

    const handleInputChange = (e) => setInput(e.target.value)
  
    const isError = input === ''
    return (<>        <Center><Heading mt={3} mb={3} size="md">DELIVERY ADDRESS</Heading></Center>
        <FormControl w="50%" m="auto" isInvalid={isError}>
        <FormLabel>Full name</FormLabel>
        <Input
          type='text'
        //   value={input}
          onChange={handleInputChange}
        />
        <FormLabel>Mobile number</FormLabel>
        <Input
          type='number'
          onChange={handleInputChange}
        />
         <FormLabel>Zip-code</FormLabel>
        <Input
          type='number'
          onChange={handleInputChange}
        />
         <FormLabel>Flat, House no., Building, Company, Apartment</FormLabel>
        <Input
          type='text'
          onChange={handleInputChange}
        />
         <FormLabel>Landmark</FormLabel>
        <Input
          type='text'
          onChange={handleInputChange}
        />
        
        {!isError ? (
          <FormHelperText>
            <Link to={`/payment`}>
           <Button w="100%" colorScheme="orange">CONTINUE</Button>
           </Link>
          </FormHelperText>
        ) : (
          <FormErrorMessage>Fill All Details!</FormErrorMessage>
        )}
      </FormControl>
      </>

       
    )
}

export default Address;