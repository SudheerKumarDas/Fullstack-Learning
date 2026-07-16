import { Error } from "mongoose";
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

  const filter = {
    user: userId,
    isDeleted: false,
  };

  // archived notes
  if (req.query.archived === "true") {
    filter.isArchived = true;
  }

  //deleted notes which is not deleted from database
  if (req.query.deleted === "true") {
    filter.isDeleted = true;
  }

  //pinned notes
  if (req.query.pinned === "true") {
    filter.isPinned = true;
  }

  //searching
  if (req.query.search) {
    filter.$or = [
      {
        title: {
          $regex: req.query.search,
          $options: "i",
        },
      },
      {
        content: {
          $regex: req.query.search,
          $options: "i",
        },
      },
    ];
  }

  //sorting notes
  let sort = { createdAt: -1 };

  switch (req.query.sort) {
    case "oldest":
      sort = { createdAt: 1 };
      break;

    case "title":
      sort = { title: 1 };
      break;

    case "newest":
    default:
      sort = { createdAt: -1 };
  }

  //pagination
  
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  // Total notes (for pagination info)
  const totalNotes = await Note.countDocuments(filter);

  // Fetch notes
  const notes = await Note.find(filter)
  .sort(sort)
  .skip(skip)
  .limit(limit);

  res.status(200).json({
    success: true,
    message: "Notes fetched successfully",

    pagination: {
      totalNotes,
      currentPage: page,
      totalPages: Math.ceil(totalNotes / limit),
      limit,
    },

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
  note.isDeleted = true;
  await note.save();
  if (!note) {
    res.status(404);
    throw new Error("Note not found");
  }

  res.status(200).json({
    success: true,
    message: "Note deleted successfully",
    data: note,
  });
});

export const restoreNotes = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const userId = req.user.id;
  const note = await Note.findById(id);
  if (!note) {
    res.status(404);
    throw new Error("Note not found");
  }
  if (note.user.toString() != userId) {
    res.status(403);
    throw new Error("Forbidden");
  }
  note.isDeleted = false;
  await note.save();

  res.status(200).json({
    success: true,
    message: "Note restored successfully",
    data: note,
  });
});

export const permanentDeleteNotes = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const userId = req.user.id;

  const note = await Note.findById(id);
  if (!note) {
    res.status(404);
    throw new Error("Note not found");
  }
  if (note.user.id != userId) {
    res.status(403);
    throw new Error("Not Authorized");
  }
  note.deleteOne();

  res.status(200).json({
    success: true,
    message: "Note deleted successfully",
    data: note,
  });
});

export const pinnedNotes = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const userId = req.user.id;

  const note = await Note.findById(id);

  if (!note) {
    res.status(404);
    throw new Error("Note not found");
  }

  if (note.user.toString != userId) {
    res.status(403);
    throw new Error("Not Authorized");
  }

  note.isPinned = !note.isPinned;

  await note.save();

  res.status(200).json({
    success: true,
    message: "Note pinned successfully",
    data: note,
  });
});

export const archivedNotes = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const userId = req.user.id;

  const note = await Note.findById(id);

  if (!note) {
    res.status(404);
    throw new Error("Note not found");
  }

  if (note.user.toString != userId) {
    res.status(403);
    throw new Error("Not Authorized");
  }

  note.isArchived = !note.isArchived;

  await note.save();

  res.status(200).json({
    success: true,
    message: "Note Archieved successfully",
    data: note,
  });
});



// export const searchNotes = asyncHandler(async (req, res) => {
//   const keyword = req.query.q || "";
//   const userId = req.user.id;

//   const notes = await Note.find({
//     user: userId,
//     isDeleted: false,
//     $or: [
//       {
//         title: {
//           $regex: keyword,
//           $options: "i",
//         },
//       },
//       {
//         content: {
//           $regex: keyword,
//           $options: "i",
//         },
//       },
//     ],
//   });
//   res.status(200).json({
//     success: true,
//     message: "Note search completed",
//     data: notes,
//   });
// });

// export const notesPagination = asyncHandler(async (req, res) => {
//   const userId = req.user.id;

//   const page = Number(req.query.page) || 1;
//   const limit = Number(req.query.limit) || 10;

//   const skip = (page - 1) * limit;

//   const notes = await Note.find({
//     isDeleted: false,
//     user: userId,
//   })
//     .skip(skip)
//     .limit(limit);

//   res.status(200).json({
//     success: true,
//     message: "Notes pagination works",
//     page,
//     limit,
//     data: notes,
//   });
// });

// export const sortingNotes = asyncHandler(async (req, res) => {
//   const userId = req.user.id;

//   let sort = {};

//   switch (req.query.sort) {
//     case "oldest":
//       sort = { createdAt: 1 };
//       break;

//     case "title":
//       sort = { title: 1 };
//       break;

//     default:
//       sort = { createdAt: -1 };
//   }

//   const notes = await Note.find({
//     user: userId,
//     isDeleted: false,
//   }).sort(sort);

//   res.status(200).json({
//     success: true,
//     message: "Notes sorting successful",
//     data: notes,
//   });
// });

// export const filterNotes = asyncHandler(async (req, res) => {
//   const userId = req.user.id;
//   const filter = {
//     user: userId,
//   };
//   if (req.query.archived === "true") {
//     filter.isArchived = true;
//   }

//   if (req.query.deleted === "true") {
//     filter.isDeleted = true;
//   }

//   const notes = await Note.find(filter);

//   res.status(200).json({
//     success: true,
//     message: "Notes filtered successfully",
//     data: notes,
//   });
// });
