import Note from "../models/notes.models.js";

export const createNotes = async (req, res) => {
  try {
    const { id } = req.user;
    const {title,content}=req.body;
    if(!title || !content){
        return res.status(400).json({
            message:"Not enough Data"
        })
    }
    const note = await Note.findOne({title});
    if(note){
        return res.status(409).json({
            message:"Note already exists"
        })
    }
    const newNote = await Note.create({
        title,
        content,
        user:id
    })
    res.status(201).json({
        message:"New Note Created",
        Note:newNote
    })
  } catch (error) {
    console.error(`Error registering user ${error}`);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
