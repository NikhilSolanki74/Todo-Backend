const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const todo = await Todo.create({ title, description }); // Use a different variable name (e.g., 'todo')

        res.status(200).json({
            success: true,
            data: todo, // Use the 'todo' variable here
            message: 'Todo created successfully'
        });
    } 
    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success: false,
            data: "Internal server problem",
            message: err.message,
        })
    }
}
