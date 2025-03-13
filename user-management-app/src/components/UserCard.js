import { forwardRef } from "react";
import { useState } from "react";
import {
    Box, Card, CardBody, Text, Heading, IconButton, Flex,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton,
    ModalBody, ModalFooter, Button
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import UserForm from "./UserForm";
import { updateUser, deleteUser } from "../services/UserServices";

const MotionCard = motion(Card);

const UserCard = forwardRef(({ user, onUpdate }, ref) => {
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [updatedUser, setUpdatedUser] = useState(user);

    const openEditModal = () => setIsEditOpen(true);
    const closeEditModal = () => setIsEditOpen(false);

    const handleChange = (e) => {
        setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        if (!updatedUser.role) {
            alert("Role is required");
            return;
        }
        const success = await updateUser(user.id, updatedUser);
        if (success) {
            onUpdate();
            closeEditModal();
        }
    };

    const handleDelete = async () => {
        if (window.confirm(`Delete ${user.name}?`)) {
            const success = await deleteUser(user.id);
            if (success) onUpdate();
        }
    };

    return (
        <>
            <MotionCard ref={ref}
                borderRadius="lg"
                boxShadow="xl"
                p={6}
                bg="white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                position="relative"
                role="group"
            >
                <CardBody>
                    <Heading size="md" color="blue.800">{user.name}</Heading>
                    <Text mt={2}><strong>Company:</strong> {user.company_name}</Text>
                    <Text><strong>Role:</strong> {user.role || "Not specified"}</Text>
                    <Text><strong>Country:</strong> {user.country}</Text>

                    <Flex
                        position="absolute"
                        top={2}
                        right={2}
                        gap={2}
                        opacity={0}
                        transition="opacity 0.3s ease-in-out"
                        _groupHover={{ opacity: 1 }}
                    >
                        <IconButton size="sm" aria-label="Edit" icon={<EditIcon />} onClick={openEditModal} />
                        <IconButton size="sm" aria-label="Delete" icon={<DeleteIcon />} onClick={handleDelete} />
                    </Flex>
                </CardBody>
            </MotionCard>

            <Modal isOpen={isEditOpen} onClose={closeEditModal}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit User</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <UserForm user={updatedUser} handleChange={handleChange} onSubmit={handleSave} isEditing={true} />
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );

});

export default UserCard;
