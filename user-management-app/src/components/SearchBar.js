import { useState } from "react";
import { Box, Input, Select, IconButton, Flex } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = ({ onSearch }) => {
    const [filterBy, setFilterBy] = useState("name");
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        onSearch(filterBy, searchTerm);
    };

    return (
        <Flex
            bg="white"
            border="1px solid gray"
            borderRadius="md"
            p={1}
            align="center"
            w="100%"
            maxW="400px"
            h="36px"
            boxShadow="sm"
        >
            <Select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
                border="none"
                w="150px"
                _focus={{ boxShadow: "none" }}
            >
                <option value="name">Name</option>
                <option value="company_name">Company</option>
                <option value="role">Role</option>
                <option value="country">Country</option>
            </Select>

            <Input
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                border="none"
                flex="1"
                h="32px"
                _focus={{ boxShadow: "none" }}
            />

            <IconButton
                icon={<SearchIcon />}
                colorScheme="blue"
                onClick={handleSearch}
                aria-label="Search"
                variant="ghost"
                h="32px"
                w="32px"
            />
        </Flex>
    );
};

export default SearchBar;
