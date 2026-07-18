export default function SearchBar(){
    return (
        <div className="flex justify-center items-center gap-4">
            <input 
                type="text"
                placeholder="search notes" 
                className="border border-gray-600 p-2 rounded-xl"   
            />
            <button>
                Search
            </button>
        </div>
    )
}