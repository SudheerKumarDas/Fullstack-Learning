import NoteCard from "./NoteCard.jsx"

export default function NotesList(){
    return (
        <div className="grid grid-cols-3">
            <NoteCard/>
            <NoteCard/>
            <NoteCard/>
            <NoteCard/>
        </div>
    )
}