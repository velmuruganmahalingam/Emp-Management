const pool = require("../config/db");

const UserModel = {

    getAllUsers: async () => {
        try {
            const [rows] = await pool.query("SELECT * FROM users");
            return rows;
        } catch (error) {
            console.error("Error fetching users:", error);
            throw error;
        }
    },

    insertUsers: async (users) => {
        try {
            const values = users.map(user => [
                user.firstName + " " + user.lastName,
                user.company.name,
                user.address.country
            ]);

            const sql = "INSERT INTO users (name, company_name, country) VALUES ?";
            const [result] = await pool.query(sql, [values]);

            return result;
        } catch (error) {
            console.error("Error inserting users:", error);
            throw error;
        }
    }
};

module.exports = UserModel;
