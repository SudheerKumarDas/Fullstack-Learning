import Todo from "../models/Todo.js";

export const createTodo = async (req, res) => {
  try {
    const { title, description, completed, userId } = req.body;
    if (!title || !description || completed === undefined) {
      return res.status(400).json({
        message: "Provide all the fields",
      });
    }
    const trimmedTitle = title.trim();
    const todo = await Todo.create({
      title: trimmedTitle,
      description,
      completed,
      userId
    });
    console.log(todo);
    res.status(201).json({
      message: "Todo created successfully",
      todo,
    });
  } catch (error) {
    console.error("Error creating todo ", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({
      todos: todos,
    });
  } catch (error) {
    console.error("Error getting todos ", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const updateTodo = await Todo.findByIdAndUpdate(
      todoId,
      req.body, //this ensures that only the given fields are updated
      {
        returnDocument: "after",
      },
    );
    if (!updateTodo) {
      return res.status(404).json({
        message: "todo not found",
      });
    }
    res.status(200).json({
      message: "Todo updated successfully",
      updateTodo,
    });
  } catch (error) {
    console.error("Error updating todos ", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const deleteTodo = await Todo.findByIdAndDelete(todoId);
    if (!deleteTodo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }
    res.status(200).json({
      message: "Todo deleted successfully",
      deletedTodo: deleteTodo,
    });
  } catch (error) {
    console.error("Error getting todos ", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const getSingleTodo = async (req,res) => {
  try {
    const todoId = req.params.id;
    const todo = await Todo.findById(todoId);
    if(!todo){
      return res.status(404).json({
        message:"Todo not found"
      })
    }
    res.status(200).json({
      message:"Todo fetched successfully",
      todo:todo
    })
  } catch (error) {
    console.error("Error getting todos ", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

export const markTodoAsComplete = async (req,res) => {
  try {
    const todoId = req.params.id;
    const todo = await Todo.findByIdAndUpdate(todoId,
        {
          completed:true
        }
      ,{returnDocument:"after"});
    if(!todo){
      return res.status(400).json({
        message:"Todo not found"
      })
    }
    res.status(200).json({
      message:"Todo marked as completed",
      todo:todo
    })
  } catch (error) {
    console.error("Error marking todo as completed ", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

export const markTodoAsNotComplete = async (req,res) => {
  try {
    const todoId = req.params.id;
    const todo = await Todo.findByIdAndUpdate(todoId,
      {
        completed:false
      }
      ,{returnDocument:"after"});
    if(!todo){
      return res.status(400).json({
        message:"Todo not found"
      })
    }
    res.status(200).json({
      message:"Todo marked as Not completed",
      todo:todo
    })
  } catch (error) {
    console.error("Error marking todo as completed ", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}