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

export const getAllTodos = async(req,res) =>{
  try {
    const todos = await Todo.find({});
    res.status(200).json({
      todos:todos
    })
  } catch (error) {
        console.error("Error getting todos ",error);
        res.status(500).json({
            message:"Internal Server Error"
        })
  }
}

export const updateTodo = async (req,res) => {
  try {
        const todoId = req.params.id;
        console.log(todoId);
        const {title,description,completed}=req.body;
        
        const updateTodo = await Todo.findByIdAndUpdate(todoId,
          {
            title:title,
            description:description,
            completed:completed
          },
          {
            new:true
          }
        )
        res.status(200).json({
          message:"Todo updated successfully",
          updateTodo
        })    
  } catch (error) {
    console.error("Error getting todos ",error);
    res.status(500).json({
        message:"Internal Server Error"
    })
  }
}
