import { IconButton, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsHandThumbsUp } from "react-icons/bs";
import db from "../lib/firebase";

const LikeButton = ({ post }) => {
  const [isLike, setLike] = useState(false);
  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {

    const likeFromLocalStorage = localStorage.getItem("likes") || [];
    let previousLikes = [];

    try {
      previousLikes = JSON.parse(likeFromLocalStorage);
    } catch (error) {
      console.error(error);
    }

    setLikedPosts(previousLikes);
  }, []);

  const disableLikes = (postId) => {
    const previousLikes = likedPosts;
    previousLikes.push(postId);

    setLikedPosts(previousLikes);

    localStorage.setItem("likes", JSON.stringify(likedPosts));

  };


    
    const handleClick = async () => {
      setLike(true);

      let likeCount = post.likeCount || 0;
  
      const date = new Date();
      
      likeCount = likeCount + 1;      
  
      await db.collection("posts").doc(post.id).set({
        createdAt: post.createdAt,
        updatedAt: date.toUTCString(),
        likeCount,
        text: post.text,     
      });

      disableLikes(post.id);
      setLike(false);
    };

    const isAlreadyLiked = () => {
      if (likedPosts.indexOf(post.id) > -1) {
        return true;
      } else {
        return false;
      }
    };
  
    return (
      <>
        <VStack>
          <IconButton
            size="lg"
            colorScheme='teal'
            aria-label="like"
            icon ={<BsHandThumbsUp />}
            onClick={() => handleClick()}
            isLoading={isLike}
            isDisabled={isAlreadyLiked()}
          />
          <Text bg="purple.100" rounded="md" w="100%" p={1}>
            {post.likeCount}
          </Text>
        </VStack>
        
      </>
    );
  };
  
  export default LikeButton;