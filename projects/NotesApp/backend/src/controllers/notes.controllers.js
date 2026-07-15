import Note from "../models/notes.models.js";

export const createNotes = async (req, res) => {
  try {
    const { id } = req.user;
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({
        message: "Not enough Data",
      });
    }
    const note = await Note.findOne({ title });
    if (note) {
      return res.status(409).json({
        message: "Note already exists",
      });
    }
    const newNote = await Note.create({
      title,
      content,
      user: id,
    });
    res.status(201).json({
      message: "New Note Created",
      Note: newNote,
    });
  } catch (error) {
    console.error(`Error in creating notes ${error}`);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getNotes = async (req, res) => {
  try {
    const userId = req.user.id;
    const notes = await Note.find({user:userId});
    res.status(200).json({
      message: "Notes fetched successfully",
      notes: notes,
    });
  } catch (error) {
    console.error(`Error getting notes ${error}`);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getANotes = async (req, res) => {
  try {
    const userId = req.user.id;
    const id = req.params.id;
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }
    if(userId!=note.user.toHexString()){
      return res.status(403).json({
        message:"Forbidden"
      })
    }
    res.status(200).json({
      message: "Note fetched successfully",
      note: note,
    });
  } catch (error) {
    console.error(`Error in getting a note ${error}`);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const updateNotes = async (req,res) => {
    try {
        const userId = req.user.id;
        console.log(userId);
        const id = req.params.id;
        const updateData = req.body;
        const note = await Note.findById(id);
        console.log(note.user.toHexString());
        if(userId!=note.user.toHexString()){
          return res.status(401).json({
            message:"Not Authorized"
          })
        }
        const updatedNote = await Note.findByIdAndUpdate(id,updateData,{
            returnDocument:"after"
        })
        if(!updatedNote){
            return res.status(404).json({
                message:"Note not found"
            })
        }
        res.status(200).json({
            message:"Note updated successfully",
            updatedNote:updatedNote
        })
    } catch (error) {
        console.error(`Error in updating a note ${error}`);
        res.status(500).json({
            message: "Internal server error",        
        });
    }
}

export const deleteNotes = async (req,res) => {
    try {
        const userId = req.user.id;
        const id = req.params.id;
        const note = await Note.findById(id);
        if(userId!=note.user.toHexString()){
          return res.status(401).json({
            message:"User Not Authorized"
          })
        }
        const deletedNote = await Note.findByIdAndDelete(id);
        if(!note){
            return res.status(404).json({
                message:"Note not found"
            })
        }
        res.status(200).json({
            message:"Note deleted successfully",
            deletedNote:deletedNote
        })
        
    } catch (error) {
        console.error(`Error in deleting a note ${error}`);
        res.status(500).json({
            message: "Internal server error",        
        });
    }
}