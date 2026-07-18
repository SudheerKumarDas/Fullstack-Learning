
export default function Sidebar(){
    const menuItems = [
    "All Notes",
    "Pinned",
    "Archived",
    "Trash",
];
    return(
        <nav className="w-full">
            <ul className="space-y-2">
                {menuItems.map((item) => (
                    <li>
                        <button>{item}</button> 
                    </li>
                ))}
            </ul>
        </nav>
    )
}