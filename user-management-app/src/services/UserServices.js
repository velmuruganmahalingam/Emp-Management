import { apiClient } from "./apiConfig";

export const fetchUsers = async (page = 1, limit = 10, sortBy = "name", sortOrder = "asc") => {
    try {
        const response = await apiClient.get("/users", {
            params: { page, limit, sortBy, sortOrder },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
};

export const fetchFilteredUsers = async (filterBy, search, page = 1, limit = 10, sortBy = "name", sortOrder = "asc") => {
    try {
        const response = await apiClient.get("/users", {
            params: { filterBy, search, page, limit, sortBy, sortOrder },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching filtered users:", error);
        return [];
    }
};

export const updateUser = async (id, userData) => {
    try {
        const response = await apiClient.put(`/users/${id}`, userData);
        return response.status === 200;
    } catch (error) {
        console.error("Error updating user:", error);
        return false;
    }
};

export const deleteUser = async (id) => {
    try {
        const response = await apiClient.delete(`/users/${id}`);
        return response.status === 200;
    } catch (error) {
        console.error("Error deleting user:", error);
        return false;
    }
};

export const createUser = async (userData) => {
    try {
        const response = await apiClient.post("/users", userData);
        return response.status === 201;
    } catch (error) {
        console.error("Error creating user:", error);
        return false;
    }
};
