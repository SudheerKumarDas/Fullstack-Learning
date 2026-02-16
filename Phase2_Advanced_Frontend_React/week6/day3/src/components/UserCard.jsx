function UserCard({name, role}){
    return(
        <div style={{
            border:"1px solid black",
            padding:"20px",
            marginBottom:"10px",
            backgroundColor:"gray"
        }}>
            <h2>{name}</h2>
            <p>{role}</p>
        </div>
    )
}

export default UserCard;