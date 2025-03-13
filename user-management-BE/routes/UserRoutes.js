const express = require("express");
const { getUsers, fetchAndStoreUsers, updateUser, deleteUser, createUser } = require("../controllers/UserController");

const router = express.Router();

router.get("/fetch-and-store-users", fetchAndStoreUsers);
router.get("/users", getUsers);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
