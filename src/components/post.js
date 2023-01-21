import { HStack } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import React from 'react';
import LikeButton from './like-count';


const Post = ({ post }) => {
    return (
        
        <HStack key = {post.id} w = '100%' alignItems = 'flex-start'>
            <Box bg = 'blue.50' p = {4} rounded = 'md' w = '100%'>
                <Text>{post.text}</Text>    
            </Box>   
            <LikeButton post={post} />
        </HStack>
    );
        
};

export default Post;