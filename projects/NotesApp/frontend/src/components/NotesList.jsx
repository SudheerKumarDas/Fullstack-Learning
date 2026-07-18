import NoteCard from "./NoteCard.jsx"

export default function NotesList(){
    const notes = [
  {
    id: 1,
    title: "Learn React",
    content: "Practice layout",
    createdAt:"date"
  },
  {
    id: 2,
    title: "Read Clean Code",
    content: "Chapter 1",
    createdAt:"date"
  },
  {
    id: 3,
    title: "Workout",
    content: "Push Day",
    createdAt:"date"
  },
  {
    id: 4,
    title: "Workout",
    content: "Push Day",
    createdAt:"date"
  },
  {
    id: 5,
    title: "Workout",
    content: "Push Day",
    createdAt:"date"
  }
];
    return (
        <div className="grid grid-cols-3 gap-4">
            {
                notes.map((note)=>(
                    <NoteCard key={note.id} title={note.title} content={note.content} createdAt={note.createdAt} />
                ))
            }
        </div>
    )
}