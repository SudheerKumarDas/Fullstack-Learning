export default function Navbar(){
    return (
        <div className="flex justify-between items-center">
            <h1>NOTES APP</h1>
            <div className="flex items-center gap-6">
                <h2>Name</h2>
                <button>Logout</button>
            </div>
        </div>
    )
}