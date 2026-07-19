import { useState } from "react"
export default function AddNoteModal(){
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    return (
        <form className="w-full h-screen flex justify-center items-center flex-col">
            <div className="flex flex-col gap-2 mb-3">
                <label htmlFor="title">Title : </label>
                <input 
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    placeholder="Enter the title"
                    className="border border-gray-500 rounded-xl p-2"
                />
            </div>
            <div className="flex flex-col gap-2 mb-3">
                <label htmlFor="content">Content : </label>
                <input 
                    type="text"
                    name="content"
                    value={content}
                    onChange={(e)=>setContent(e.target.value)}
                    placeholder="Enter the Content"
                    className="border border-gray-500 rounded-xl p-2"
                />
            </div>
            <div className="flex gap-4">
                <button className="border border-gray-500 p-2 cursor-pointer rounded-xl">Cancel</button>
                <button className="border-none bg-blue-500 p-2 cursor-pointer rounded-xl hover:bg-blue-700">Create</button>
            </div>
        </form>
    )
}