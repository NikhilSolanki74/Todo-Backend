
const express = require("express");
const router = express.Router();

const { createTodo } = require("../controller/createTodo");
const { getTodo ,getTodoById} = require("../controller/getTodos");

router.post("/createTodo", createTodo);
router.get("/getTodo" , getTodo)
router.get("/getTodoById/:id" , getTodoById)


module.exports = router;