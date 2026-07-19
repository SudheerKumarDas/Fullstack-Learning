export default function NoteCard({note,onDelete}){
    const handleDelete=(note)=>{
        onDelete(note.id)
    }
    return (
        <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
            <h1 className="text-2xl">{note.title}</h1>
            <p>{note.content}</p>
            <p>{note.createdAt}</p>
            <button>📝Edit</button>
            <button onClick={()=>handleDelete(note)}>🗑️Delete</button>
        </div>
    )
}