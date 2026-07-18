import { useEffect, useState } from "react";

import Modal from "../common/Modal.jsx";
import Input from "../common/Input.jsx";
import Textarea from "../common/Textarea.jsx";
import Button from "../common/Button.jsx";

export default function NoteModal({
  isOpen,
  onClose,
  note,
  createNote,
  updateNote,
}) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (note) {
      setFormData({
        title: note.title,
        content: note.content,
      });
    } else {
      setFormData({
        title: "",
        content: "",
      });
    }
  }, [note, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.content.trim()) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    let result;

    if (note) {
      result = await updateNote(note._id, formData);
    } else {
      result = await createNote(formData);
    }

    setLoading(false);

    if (result.success) {
      onClose();
    } else {
      alert(result.message);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={note ? "Edit Note" : "Create Note"}
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Title"
          name="title"
          placeholder="Enter note title"
          value={formData.title}
          onChange={handleChange}
        />

        <Textarea
          label="Content"
          name="content"
          rows={8}
          placeholder="Write your note..."
          value={formData.content}
          onChange={handleChange}
        />

        <div className="flex justify-end gap-3">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>

          <Button type="submit" loading={loading}>
            {note ? "Save Changes" : "Create Note"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
