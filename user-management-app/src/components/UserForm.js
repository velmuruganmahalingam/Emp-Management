import { useState } from "react";
import { Box, Input, FormControl, FormLabel, Button, VStack } from "@chakra-ui/react";
import { User } from "../model/UserModel";

const UserForm = ({ user, handleChange, onSubmit, isEditing }) => {
    const [focusedField, setFocusedField] = useState(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const userInstance = new User(user.name, user.company_name, user.role, user.country);

        if (!userInstance.isValid()) {
            alert("Please fill out required fields!");
            return;
        }

        onSubmit();
    };

    return (
        <VStack as="form" spacing={4} align="stretch" onSubmit={handleFormSubmit}>
            {['name', 'role', 'company_name', 'country'].map((field) => (
                <FormControl key={field} position="relative">
                    <FormLabel
                        position="absolute"
                        top={focusedField === field || user[field] ? "-10px" : "50%"}
                        left="5px"
                        fontSize={focusedField === field || user[field] ? "sm" : "md"}
                        color={focusedField === field ? "blue.500" : "gray.500"}
                        transition="all 0.2s ease-in-out"
                        pointerEvents="none"
                    >
                        {field.replace("_", " ").toUpperCase()}
                    </FormLabel>
                    <Input
                        name={field}
                        value={user[field] || ""}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field)}
                        onBlur={() => setFocusedField(null)}
                        borderBottom="2px solid"
                        borderColor="gray.300"
                        _focus={{ borderColor: "blue.500" }}
                        paddingTop="20px"
                        variant="unstyled"
                    />
                </FormControl>
            ))}
            <Button colorScheme="blue" type="submit">
                {isEditing ? "Save" : "Create"}
            </Button>
        </VStack>
    );
};

export default UserForm;
