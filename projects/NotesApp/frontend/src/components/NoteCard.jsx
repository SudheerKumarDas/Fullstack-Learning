export default function NoteCard({note}){
    return (
        <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
            <h1 className="text-2xl">{note.title}</h1>
            <p>{note.content}</p>
            <p>{note.createdAt}</p>
            <button>📝Edit</button>
            <button>🗑️Delete</button>
        </div>
    )
}