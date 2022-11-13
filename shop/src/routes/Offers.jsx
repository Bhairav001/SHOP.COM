import { Box, Center, Heading,Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Offers(){
    return(
        <Box bg="#202340" p={2} color="white">
<Link to="/offer" ><Center size='lg'> <Text>Discover our Newly Launched Products: From Health & Nutrition to Beauty, Skin Care and more!</Text> <Text ml={3} textDecoration="underline" >See what’s new!</Text> </Center>     </Link>
        </Box>
           )
}
export default Offers;