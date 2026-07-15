import Note from "../models/notes.models.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createNotes = asyncHandler(async (req, res) => {
  const { id } = req.user;
  const { title, content } = req.body;

  if (!title || !content) {
    res.status(400);
    throw new Error("Not enough Data");
  }

  const note = await Note.findOne({ title, user: id });
  if (note) {
    res.status(409);
    throw new Error("Note already exists");
  }

  const newNote = await Note.create({
    title,
    content,
    user: id,
  });

  res.status(201).json({
    success: true,
    message: "New Note Created",
    data: newNote,
  });
});

export const getNotes = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const notes = await Note.find({ user: userId });
  res.status(200).json({
    success: true,
    message: "Notes fetched successfully",
    data: notes,
  });
});

export const getANotes = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const id = req.params.id;
  const note = await Note.findById(id);

  if (!note) {
    res.status(404);
    throw new Error("Note not found");
  }

  if (note.user.toString() != userId) {
    res.status(403);
    throw new Error("Forbidden");
  }

  res.status(200).json({
    success: true,
    message: "Note fetched successfully",
    data: note,
  });
});

export const updateNotes = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const id = req.params.id;
  const updateData = req.body;
  const note = await Note.findById(id);

  if (!note) {
    res.status(404);
    throw new Error("Note not found");
  }

  if (note.user.toString() != userId) {
    res.status(401);
    throw new Error("Not Authorized");
  }

  const updatedNote = await Note.findByIdAndUpdate(id, updateData, {
    runValidators: true,
    returnDocument: "after",
  });

  if (!updatedNote) {
    res.status(404);
    throw new Error("Note not found");
  }

  res.status(200).json({
    success: true,
    message: "Note updated successfully",
    data: updatedNote,
  });
});

export const deleteNotes = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const id = req.params.id;
  const note = await Note.findById(id);

  if (!note) {
    res.status(404);
    throw new Error("Note not found");
  }

  if (note.user.toString() != userId) {
    res.status(401);
    throw new Error("User Not Authorized");
  }

  const deletedNote = await Note.findByIdAndDelete(id);

  if (!note) {
    res.status(404);
    throw new Error("Note not found");
  }

  res.status(200).json({
    success: true,
    message: "Note deleted successfully",
    data: deletedNote,
  });
});
