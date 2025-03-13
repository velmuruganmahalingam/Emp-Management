import { Box, Heading } from "@chakra-ui/react";
import UserList from "../components/UserList";

const Home = () => {
    return (
        <Box p={4}>
            <Heading mb={4}>User Management</Heading>
            <UserList />
        </Box>
    );
};

export default Home;
