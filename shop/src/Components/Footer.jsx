import { CopyIcon, EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Image,
  Center,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <Box mt={3} w="100%" color="white" p={3} bg="#545871">
        <Flex alignItems="center" justifyContent="space-between">
          <Box w="50%">
            <Flex alignItems="center">
              <Text fontSize="13px" fontWeight="bold">
                Get Email Deals & Earn Cashback
              </Text>
              <InputGroup borderRadius={5} bg="white" ml={5} w="50%" size="sm">
                <Input
                  border="none"
                  borderRadius={5}
                  fontWeight="bold"
                  color="black"
                  placeholder="enter email address..."
                />
                <Center>
                  <Link to="/login">
                    <InputRightAddon
                      borderRadius={5}
                      h={7}
                      _hover={{ background: "#2e2c38", color: "white" }}
                      color="black"
                      bg="#f0f1f7"
                      children="Sign Up"
                    />
                  </Link>
                </Center>
              </InputGroup>
            </Flex>
          </Box>
          <Box>
            <Flex alignItems="center">
              <Text fontSize="13px" fontWeight="bold">
                Link To This Page & Tell All Your Friends!
              </Text>
              <Button
                borderBottom="1px solid white"
                h={7}
                borderRadius={25}
                ml={2}
                fontSize="13px"
                rightIcon={<CopyIcon />}
                bg="white"
                color="black"
                variant="solid"
              >
                Copy Link
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box mt="1px" w="100%" color="white" p={3} bg="#545871">
        <Flex justifyContent="space-between">
          <Box w="55%">
            <Flex
              fontSize="13px"
              fontWeight="bold"
              justifyContent="space-evenly"
            >
              <Box borderRight="1px solid white" pr={1}>
                {" "}
                About Us
              </Box>
              <Box borderRight="1px solid white" pr={1}>
                Help
              </Box>
              <Box borderRight="1px solid white" pr={1}>
                Accessibility
              </Box>
              <Box borderRight="1px solid white" pr={1}>
                Statement
              </Box>
              <Box borderRight="1px solid white" pr={1}>
                Contact Us
              </Box>
              <Box borderRight="1px solid white" pr={1}>
                Partner With Us
              </Box>
              <Box borderRight="1px solid white" pr={1}>
                Services
              </Box>
              <Box borderRight="1px solid white" pr={1}>
                Country/Region
              </Box>
              <Box borderRight="1px solid white" pr={1}>
                Connect
              </Box>
              <Box>Own Your Own SHOP Site</Box>
            </Flex>
          </Box>
          <Box w="20%">
            <Flex alignItems="center" justifyContent="space-between">
              <Box>
                <Icon fontSize={30} as={EmailIcon} />
              </Box>
              <Box>
                <Image
                  bg="white"
                  w={7}
                  src="https://img.icons8.com/ios/344/facebook-circled--v1.png"
                  alt="Image"
                />
              </Box>
              <Box>
                <Image
                  bg="white"
                  w={7}
                  src="https://img.icons8.com/ios/344/twitter--v1.png"
                  alt="z"
                />
              </Box>
              <Box>
                <Image
                  bg="white"
                  w={7}
                  src="https://img.icons8.com/material-rounded/344/pinterest--v1.png"
                  alt="55"
                />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box fontSize="13px" borderBottom="1px solid black"  p={2}>
        <Box  w="70%">
        © 1997-2022 Market America, Inc. or its affiliates. All other designated
        trademarks, copyrights, and brands are the property of their respective
        owners.
        <br />
        Only Customers will receive cashback on qualifying purchases.
        UnFranchise Owners/Shop Consultants will receive increased IBV instead
        of cashback on qualifying purchases.
        </Box>
        <br />
        <Box w="35%">
          <Flex fontSize="13px" justifyContent="space-evenly">
            <u   _hover={{ color: "blue" }} borderRight="1px solid black" pr={1}>
              {" "}
              About Us
            </u>
            <u  _hover={{ color: "blue" }} borderRight="1px solid black" pr={1}>
             
            Terms of Use
            </u>
            <u  _hover={{ color: "blue" }} borderRight="1px solid black" pr={1}>
             
            Advertising Disclosure
            </u>
            <u  _hover={{ color: "blue" }} borderRight="1px solid black" pr={1}>
             
            Return Policy
            </u>
            <u  _hover={{ color: "blue" }}  pr={1}>
             
            Shipping
            Information
            </u>
            
            
          </Flex>
        </Box>
      </Box>
      <Box mt={3} mb={10}>
      <Center>
        <Flex w="80%" justifyContent="space-evenly">
            <Image w="100px" src="https://img.shop.com/Image/images/ir/Shop-ranks-19-in-newsweek-circle.png" alt="5" />
            <Image w="100px" src="https://img.shop.com/Image/images/ir/DC360_2022_rank_10_top_500_primary_merch_category.png" alt="5" />
            <Image w="100px" src="https://img.shop.com/Image/images/ir/DC360_2022_rank_55_top_100.png" alt="5" />
            <Image w="100px" src="https://img.shop.com/Image/images/ir/DC360_2022_rank_80_top_500_and_1000.png" alt="5" />

            <Image w="100px" src="https://img.shop.com/Image/images/ir/Shop-ranks-15-in-NC-circle.png" alt="5" />
            <Image w="100px" src="https://img.shop.com/Image/images/ir/commonwealth_2022_rank_22_top_2000_tw_english.png" alt="5" />
            <Image w="100px" src="https://img.shop.com/Image/resources/images/torch-tafe2018-badge.png" alt="5" />
            <Image w="100px" src="https://seal-greensboro.bbb.org/seals/blue-seal-153-100-marketamericashopcom-4002355.png" alt="5" />
        
                </Flex>
                </Center>
      </Box>
      {/* <Box w="100%" mixBlendMode="multiply" h={10}><Image w="100%" src="htts://seal.digicert.com/seals/cascade/?tag=mcRGO2B9&referer=www.shop.com&format=png&lang=en&seal_number=3&seal_size=m&an=min" alt="ll"/></Box> */}
      <Box>
        <Center>
          <Image width="200px" src="https://www.sslmarket.com/images/seal/dc_seal_page-02.png"/>
        </Center>
      </Box>
    </>
  );
}

export default Footer;
