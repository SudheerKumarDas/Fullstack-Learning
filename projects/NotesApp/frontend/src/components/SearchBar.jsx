export default function SearchBar(){
    return (
        <form className="flex gap-4">
            <input 
                type="text"
                placeholder="search notes" 
                className="flex-1 border border-gray-600 p-2 rounded-xl"   
            />
            <button className="py-2 px-4 border-none bg-blue-500 rounded-lg text-2xl text-white hover:bg-blue-700">
                Search
            </button>
        </form>
    )
}