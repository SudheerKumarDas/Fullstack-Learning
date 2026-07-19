import NoteCard from "./NoteCard.jsx"

export default function NotesList({notes}){
    return (
        <div className="grid grid-cols-3 gap-4">
            {
                notes.map((note)=>(
                    <NoteCard key={note.id} note={note} />
                ))
            }
        </div>
    )
}