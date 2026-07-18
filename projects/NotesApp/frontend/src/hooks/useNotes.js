import { useEffect, useState } from "react";
import * as noteService from "../services/noteService.js";

export default function useNotes() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Notes
  const fetchNotes = async (params = {}) => {
    try {
      setLoading(true);

      const res = await noteService.getNotes(params);

      setNotes(res.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Create Note
  const createNote = async (noteData) => {
    try {
      const res = await noteService.createNote(noteData);

      setNotes((prevNotes) => [res.data.data, ...prevNotes]);

      return {
        success: true,
        data: res.data.data,
      };
    } catch (error) {
      return {
        success: false,
        message:
          error.response?.data?.message || "Failed to create note",
      };
    }
  };

  // Update Note
  const updateNote = async (id, noteData) => {
    try {
      const res = await noteService.updateNote(id, noteData);

      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note._id === id ? res.data.data : note
        )
      );

      return {
        success: true,
        data: res.data.data,
      };
    } catch (error) {
      return {
        success: false,
        message:
          error.response?.data?.message || "Failed to update note",
      };
    }
  };

  // Delete Note
const deleteNote = async (id) => {
  try {
    await noteService.deleteNote(id);

    setNotes((prevNotes) =>
      prevNotes.filter((note) => note._id !== id)
    );

    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      message:
        error.response?.data?.message || "Failed to delete note",
    };
  }
};

  useEffect(() => {
    fetchNotes();
  }, []);

  return {
    notes,
    loading,
    fetchNotes,
    createNote,
    updateNote,
    deleteNote,
    setNotes,
  };
}

