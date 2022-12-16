import React from 'react'
import { Box , Image, Stack} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import {
     Modal,Text,
     ModalOverlay,
     ModalContent,
     ModalHeader,
     ModalFooter,
     ModalBody,
     ModalCloseButton,
     useDisclosure, Button
   } from '@chakra-ui/react'
import Bag from '../components/Bag'
import searchbag from "./search.png"
import userlogo from "./user.png"
import wishlogo from "./wishlist.png"


const Navbar = () => {
     const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
        {/* //color="white"  background={"#1a1a1a"} */}
        <Box border={"1px solid red"} height="70px"  background={"#1a1a1a"} width="100%">
        <Stack spacing={44} direction='row' paddingTop="15px">
               <Link to="/">
                    <Image marginLeft="4vw" height="27px" width="100px" src='https://cdn.shopify.com/s/files/1/0014/3514/0183/files/logo_37106f0a-2cdf-4ed0-9a97-33ad520b6682_155x.png?v=1613737304' alt='lakme' />
               </Link>
               <Box fontSize="8px"  display="flex" marginLeft="200" color="white" >
                    <Link to="#"  > <p style={{padding:"10px"}}>MAKEUP</p></Link>
                    <Link to="#"  > <p style={{padding:"10px"}}>SKINCARE</p></Link>
                    <Link to="#"  > <p style={{padding:"10px"}}>TRENDING NOW</p></Link>
                    <Link to="#"  > <p style={{padding:"10px"}}>COMBOS</p></Link>
                    <Link to="#"  > <p style={{padding:"10px"}}>SALE</p></Link>
                    <Link to="#"  > <p style={{padding:"10px"}}>HELP</p></Link>
               </Box>
               <Box display="flex"   border="2px solid yellow" align='right' >
              
               <Link to="/" display="inline-block" >
                    <img width={"24px"} style={{filter: "invert(1)", paddingRight:"9px"}} src={wishlogo} alt='wishlist' />
               </Link>
               <Link to="/login">
                    <img width={"24px"} style={{filter: "invert(1)", paddingRight:"9px"}}  src={userlogo} alt='user' />
               </Link>
               <Link to="/">
                    <img width={"24px"} style={{filter: "invert(1)", paddingRight:"9px"}}  src={searchbag} alt='search' />
               </Link>
               <Link >
               <button textDecoration={"none"} onClick={onOpen}>
               <img width={"24px"} style={{filter: "invert(1)", paddingRight:"9px"}}  src='./shopping-bag.png' alt='bag' />
               </button>
                  
               <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
               <ModalOverlay />
               <ModalContent>
               <ModalHeader>CARTS</ModalHeader>
               <ModalCloseButton />
                <ModalBody>
                <Text fontWeight='bold' mb='1rem'>
                     YOUR ITEMS
                 </Text>
                 <Bag/>
               </ModalBody>

               <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                       Close
                       </Button>
                <Button variant='ghost'>Secondary Action</Button>
               </ModalFooter>
               </ModalContent>
              </Modal>
                    
               </Link>
               
               </Box>
            </Stack>
              
         
        
        
        
        </Box>
      
    </div>
  )
}

export default Navbar
