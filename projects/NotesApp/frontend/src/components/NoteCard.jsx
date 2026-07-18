export default function NoteCard(note){
    return (
        <div className="border rounded-xl p-4 shadow hover:shadow-lg">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <p>{note.createdAt}</p>
            <button>📝Edit</button>
            <button>🗑️Delete</button>
        </div>
    )
}