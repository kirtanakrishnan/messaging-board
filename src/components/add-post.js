import {
    Button,
    FormControl,
    FormLabel,
    Textarea,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    HStack,
    useDisclosure,
   
  } from '@chakra-ui/react';
import React, { useState, useEffect } from "react";
import db from "../lib/firebase";

const AddNewPost = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [text, setText] = useState("");
    const [isSaving, setSaving] = useState(false);

    const handleSubmit = async () => {
        const date = new Date();

        await db.collection("posts").add({
            text,
            createdAt: date.toUTCString(),
            updatedAt: date.toUTCString(),
        });

        onClose();
        setText("");
    };

    return (
        <>
       
        <Button onClick={onOpen} colorScheme="purple" centerContent>
            Add A Message
        </Button>

        
       
        

        <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay>
                <ModalContent>
                    <ModalHeader>Add Your Message Here!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl id="post-text">
                            <FormLabel>Message</FormLabel>
                            <Textarea
                            type="post-text"
                            value={text}
                            onChange={(e) => 
                                {
                                    if (e.target.value.length > 128) {
                                        window.alert("Message must not exceed 128 characters")
                                    } else {
                                        setText(e.target.value)}
                                    }
                                     
                                }
                                
                            />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <HStack spacing={4}>
                            <Button onClick={onClose}>Close</Button>
                            <Button
                            onClick={handleSubmit}
                            colorScheme="purple"
                            isDisabled={!text || text.length === 0 || text.length > 128 || text === ""}
                            isLoading={isSaving}
                        >
                            Submit
                        </Button>
                        </HStack>
                    </ModalFooter>
                </ModalContent>
            </ModalOverlay>
        </Modal>  
        </>
    );

};

export default AddNewPost;