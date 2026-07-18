import { useEffect, useState } from "react";
import * as noteService from "../services/noteService.js";

export default function useNotes() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetchNotes();
  }, []);

  return {
    notes,
    setNotes,
    loading,
    fetchNotes,
  };
}