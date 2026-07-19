export default function FloatingButton({onClick}){
    return (
        <button className="w-12 h-12 rounded-full bg-blue-500 flex justify-center items-center text-2xl text-white shadow-lg hover:bg-blue-700" onClick={onClick}>
            +
        </button>
    )
}