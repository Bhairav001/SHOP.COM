import { AddIcon, HamburgerIcon, PhoneIcon, SearchIcon, WarningIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Grid, Heading, HStack, IconButton, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Account from './Account'
import SignUp from './SignUp'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen1, onOpen1, onClose1 } = useDisclosure()
  return (
    <div>
      <Heading size="md" textAlign="center" bg="blue" color="white">1st time customers save 25% on SHOP.COM exclusive brands using code FIRST25OFF. Max $25 discount. Terms Apply. Click Here
      </Heading>
      <Grid gridTemplateColumns="repeat(6,1fr)">
     
       <Image width="200px" src='https://img.shop.com/Image/resources/logos/shop-logo-us-thanksgiving.svg'></Image>
       {/* <Select placeholder='Select option' onClick={isOpen}> */}
       <Button onClick={onOpen}>Open Modal</Button>
       <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={2} /> */}
            <Select>1</Select>
            <Select>1</Select>
            <Select>1</Select>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
     {/* </Select> */}
      <Input placeholder='Enter Something'></Input>
      <IconButton aria-label='Search database' icon={<SearchIcon />} />
      <Button colorScheme='blue'>Button</Button>
      <Image src='https://img.shop.com/Image/header2013/usa-shopping-annuity-biotin-gummies-head-banner1664295986848.png'></Image>
      </Grid>
      <Grid gridTemplateColumns="repeat(2,1fr)">
      <Box>
        <HamburgerIcon w={8} h={8} color="red.500" />
      </Box>
        <Account/>
      </Grid>
      <SignUp/>
    </div>
  )
}

export default Navbar