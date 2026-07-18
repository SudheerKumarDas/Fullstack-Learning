import api from "./api";

// Get all notes
export const getNotes = (params = {}) => {
  return api.get("/notes", { params });
};

// Get single note
export const getNote = (id) => {
  return api.get(`/notes/${id}`);
};

// Create note
export const createNote = (noteData) => {
  return api.post("/notes", noteData);
};

// Update note
export const updateNote = (id, noteData) => {
  return api.patch(`/notes/${id}`, noteData);
};

// Soft delete
export const deleteNote = (id) => {
  return api.delete(`/notes/${id}`);
};

// Restore
export const restoreNote = (id) => {
  return api.patch(`/notes/${id}/restore`);
};

// Permanent delete
export const permanentDeleteNote = (id) => {
  return api.delete(`/notes/${id}/permanent-delete`);
};

// Pin
export const pinNote = (id) => {
  return api.patch(`/notes/${id}/pin`);
};

// Archive
export const archiveNote = (id) => {
  return api.patch(`/notes/${id}/archive`);
};