export default function NoteCard({title, content, createdAt}){
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>{createdAt}</p>
            <button>📝Edit</button>
            <button>🗑️Delete</button>
        </div>
    )
}