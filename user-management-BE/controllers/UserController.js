const pool = require("../config/db");
const axios = require("axios");

const fetchAndStoreUsers = async (req, res) => {
    try {
        const response = await axios.get("https://dummyjson.com/users");
        const users = response.data.users;

        console.log("Fetched Users:", users);

        const values = users.map(user => [
            user.firstName + " " + user.lastName,
            user.company.name,
            user.address.country
        ]);

        const sql = "INSERT INTO users (name, company_name, country) VALUES ?";
        const [result] = await pool.query(sql, [values]);

        res.json({ message: "Users fetched and stored successfully!", result });
    } catch (error) {
        console.error("Error fetching/storing users:", error);
        res.status(500).json({ error: error.message });
    }
};

const getUsers = async (req, res) => {
    try {
        let { filterBy, search, page = 1, limit = 10, sortBy = "name", sortOrder = "asc" } = req.query;

        page = parseInt(page);
        limit = parseInt(limit);
        const offset = (page - 1) * limit;

        const validSortColumns = ["name", "email", "country", "company_name"];
        if (!validSortColumns.includes(sortBy)) {
            sortBy = "name";
        }
        sortOrder = sortOrder.toLowerCase() === "desc" ? "DESC" : "ASC";

        let query = `SELECT * FROM users WHERE 1=1`;
        let values = [];

        if (search && filterBy) {
            if (["name", "company_name", "role", "country"].includes(filterBy)) {
                query += ` AND LOWER(${filterBy}) LIKE LOWER(?)`;
                values.push(`%${search}%`);
            }
        }

        query += ` ORDER BY ${sortBy} ${sortOrder} LIMIT ? OFFSET ?`;
        values.push(limit, offset);

        const [users] = await pool.query(query, values);
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Failed to fetch users" });
    }
};




const createUser = async (req, res) => {
    const { name, company_name, role, country } = req.body;
    if (!name || !company_name || !role || !country) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const sql = "INSERT INTO users (name, company_name, role, country) VALUES (?, ?, ?, ?)";
        const [result] = await pool.query(sql, [name, company_name, role, country]);

        res.status(201).json({ message: "User created", userId: result.insertId });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Error creating user" });
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, company_name, country } = req.body;

    try {
        const sql = "UPDATE users SET name = ?, company_name = ?, country = ? WHERE id = ?";
        const [result] = await pool.query(sql, [name, company_name, country, id]);

        if (result.affectedRows > 0) {
            res.json({ message: "User updated successfully!" });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query("DELETE FROM users WHERE id = ?", [id]);

        if (result.affectedRows > 0) {
            res.json({ message: "User deleted successfully" });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { fetchAndStoreUsers, getUsers, updateUser, deleteUser, createUser };
