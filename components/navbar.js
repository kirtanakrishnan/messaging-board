import { Box, Container, Flex, Center} from '@chakra-ui/react';
import React from "react";
import AddNewPost from "./add-post";

const NavBar = () => {
    return (
        <Center bg='blue.50' w='100%' >
            <Box position='sticky' top={0} p={4} bg='blue.50' zIndex={1}>
            <Container maxW='md' centerContent>
                <Flex justifyContent='flex-end' w='100%' position='sticky' top={0}>
                    <AddNewPost />
                </Flex>
            </Container>
        </Box>
        </Center>
        
    );
}



export default NavBar;
