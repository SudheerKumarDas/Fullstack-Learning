import Note from "../models/Note"


export const getAllNotes = async (req,res) => {
    try {
            const notes = await Note.find();
            res.status(200).json(notes);
        
    } catch (error) {
        console.error("Error in getAllNotes controller :",error);
        res.status(500).json({message:"Internal server error"});
    }
}

export const createNotes = async(req,res) => {
    try {
        const {title,content}=req.body;
        const newNote = new Note({title , content});
        await newNote.save();
        res.status(201).json({message:"New note created successfully!!"});
    } catch (error) {
        console.error("Error in createNotes controller :",error);
        res.status(500).json({message:"Internal server error"});
    }
}

export const updateNotes = (req,res) => {
    res.status(200).json({message:"Note updated successfully!!"})
}

export const deleteNotes = (req,res) => {
    res.status(200).json({message:"Note deleted successfully!!"})
}