import { Avatar, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure } from '@chakra-ui/react'
import React from 'react'

const Account = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
        <Avatar src='https://bit.ly/broken-link' onClick={onOpen}/>
        {/* <Button onClick={onOpen}>Trigger modal</Button> */}

<Modal onClose={onClose} isOpen={isOpen} isCentered>
  <Select>
    1
  </Select>
  <Select>
    1
  </Select>
      <Button onClick={onClose}>Close</Button>
   
</Modal>
    </div>
  )
}

export default Account