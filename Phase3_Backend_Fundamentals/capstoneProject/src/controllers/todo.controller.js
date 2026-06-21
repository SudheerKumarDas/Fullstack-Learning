import Todo from "../models/Todo.js";

export const createTodo = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    if (!title || !description || completed === undefined) {
      return res.status(400).json({
        message: "Provide all the fields",
      });
    }
    const trimmedTitle = title.trim();
    const todo = await Todo.create({
      title:trimmedTitle,
      description,
      completed
    });
    console.log(todo)
    res.status(201).json({
      message: "Todo created successfully",
      todo
    });
  } catch (error) {
        console.error("Error creating todo ",error);
        res.status(500).json({
            message:"Internal Server Error"
        })
  }
};
