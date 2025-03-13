import { useState, useEffect, useRef } from "react";
import {
    Box, Button, SimpleGrid, Heading, IconButton, Modal, ModalOverlay, ModalContent,
    ModalHeader, ModalCloseButton, ModalBody, Select, Text, Flex, Skeleton, Stack
} from "@chakra-ui/react";
import { AddIcon, RepeatIcon, ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";
import UserCard from "./UserCard";
import UserForm from "./UserForm";
import SearchBar from "./SearchBar";
import { fetchUsers, fetchFilteredUsers, createUser } from "../services/UserServices";
import { User } from "../model/UserModel";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [newUser, setNewUser] = useState(new User());
    const [isLoading, setIsLoading] = useState(true);

    const [sortBy, setSortBy] = useState("name");
    const [sortOrder, setSortOrder] = useState("asc");
    const [page, setPage] = useState(1);
    const pageSize = 10;

    const newUserRef = useRef(null);

    const loadUsers = async () => {
        setIsLoading(true);
        try {
            const data = await fetchUsers(page, pageSize, sortBy, sortOrder);
            setUsers(data);
            setFilteredUsers(data)
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearch = async (filterBy, searchTerm) => {
        setIsLoading(true);
        const result = await fetchFilteredUsers(filterBy, searchTerm.toLowerCase(), page, pageSize, sortBy, sortOrder);
        setUsers(result);
        setFilteredUsers(result);
        setIsLoading(false);
    };

    const handleSort = (column) => {
        setSortBy(column);
        setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    };

    useEffect(() => {
        loadUsers();
    }, [page, sortBy, sortOrder]);

    const handleCreateUser = async () => {
        const success = await createUser(newUser);
        if (success) {
            loadUsers();
            setTimeout(() => {
                newUserRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 200);
            setIsAddOpen(false);
            setNewUser({ name: "", company_name: "", role: "", country: "" });
        }
    };

    const printUsers = () => {
        const dataToPrint = filteredUsers.length > 0 ? filteredUsers : users;

        const printWindow = window.open("", "_blank");
        printWindow.document.write(`
            <html>
            <head>
                <title>User List</title>
                <style>
                    table { width: 100%; border-collapse: collapse; }
                    th, td { border: 1px solid black; padding: 8px; text-align: left; }
                    th { background-color: #f2f2f2; }
                </style>
            </head>
            <body>
                <h2>User List</h2>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Company</th>
                        <th>Country</th>
                    </tr>
                    ${dataToPrint.map(user => `
                        <tr>
                            <td>${user.name}</td>
                            <td>${user.role}</td>
                            <td>${user.company_name}</td>
                            <td>${user.country}</td>
                        </tr>
                    `).join('')}
                </table>
                <script>window.print();</script>
            </body>
            </html>
        `);
        printWindow.document.close();
    };

    return (
        <Box p={6} minH="100vh" bgGradient="linear(to-br, blue.900, purple.700)">
            <Flex justify="space-between" align="center" mb={6} wrap="wrap">
                <Heading size="lg" color="white">User Management</Heading>

                <Box flex="1" display="flex" justifyContent="center" minW="300px">
                    <SearchBar onSearch={handleSearch} />
                </Box>

                <Flex gap={2} align="center">
                    <Select onChange={(e) => handleSort(e.target.value)} value={sortBy} color="white">
                        <option style={{ color: "black" }} value="name">Sort by Name</option>
                        <option style={{ color: "black" }} value="role">Sort by Role</option>
                        <option style={{ color: "black" }} value="country">Sort by Country</option>
                    </Select>
                    <IconButton icon={<ArrowUpIcon />} colorScheme="blue" onClick={() => handleSort(sortBy)} />
                    <IconButton icon={<ArrowDownIcon />} colorScheme="blue" onClick={() => handleSort(sortBy)} />
                    <Button onClick={printUsers} colorScheme="green">Print</Button>
                    <IconButton icon={<RepeatIcon />} colorScheme="teal" onClick={loadUsers} aria-label="Refresh" />
                    <IconButton icon={<AddIcon />} colorScheme="green" onClick={() => setIsAddOpen(true)} aria-label="Add User" />
                </Flex>
            </Flex>

            {isLoading ? (
                <Stack spacing={4}>
                    {[...Array(3)].map((_, i) => <Skeleton key={i} height="100px" />)}
                </Stack>
            ) : users.length === 0 ? (
                <Text color="white">No users found</Text>
            ) : (
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                    {users.map((user, index) => (
                        <UserCard key={user.id} user={user} onUpdate={loadUsers} ref={index === users.length - 1 ? newUserRef : null} />
                    ))}
                </SimpleGrid>
            )}

            <Flex justify="center" mt={4}>
                <Button onClick={() => setPage(page - 1)} isDisabled={page === 1} colorScheme="blue" mr={2}>
                    Previous
                </Button>
                <Button onClick={() => setPage(page + 1)} colorScheme="blue">
                    Next
                </Button>
            </Flex>

            <Modal isOpen={isAddOpen} onClose={() => setIsAddOpen(false)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add New User</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <UserForm user={newUser}
                            handleChange={(e) => setNewUser({ ...newUser, [e.target.name]: e.target.value })}
                            onSubmit={handleCreateUser}
                            isEditing={false} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default UserList;
