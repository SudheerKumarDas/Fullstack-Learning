
// import { useState } from 'react'
// import './App.css'

// function App() {

//   return (
//     <>
//       <LightBulb/>
//     </>
//   )
// }

// function LightBulb(){
//     const [bulbOn, setBulbOn]=useState(false);
//   return ( 
//     <div>
//       <LightState bulbOn={bulbOn}/>
//       <ToggleSwitch setBulbOn={setBulbOn}/>
//     </div>
//    )
// }

// function LightState({bulbOn}){
//   return (  
//     <div>
//       {bulbOn ? "Bulb On": "Bulb Off"}
//     </div> 
//   )
// }

// function ToggleSwitch({setBulbOn}){
//   function toggle(){
//       setBulbOn(currentState => !currentState);
//   }
//   return (
//       <>
//         <button onClick={toggle}>Toggle</button>
//       </>
//     )
// }

//props drilling example
// function App(){
//   const name = "samrat";
//   return (
//     <>
//       <Parent name={name}/>
//     </>
//   )
// }

// function Parent(props){
//   return ( 
//     <div>
//       <Child name={props.name}/>
//     </div>
//    )
// }

// function Child(props){
//   return (
//     <div>
//       <GrandChild name={props.name}/>
//     </div>
//   )
// }

// function GrandChild(props){
//   return ( 
//   <div>
//       <h1>Hello, {props.name} </h1>
//   </div> 
//   )
// }

//solution to prop drilling
// import { createContext, useContext } from "react";

// const UserContext = createContext();

// function App(){
//   const name = "samrat";
//   return (
//     <>
//       <UserContext.Provider value={name}>
//         <Parent />
//       </UserContext.Provider>
//     </>
//   )
// }

// function Parent(){
//   return ( 
//     <div>
//       <Child/>
//     </div>
//    )
// }

// function Child(){
//   return (
//     <div>
//       <GrandChild />
//     </div>
//   )
// }

// function GrandChild(){
//   const name = useContext(UserContext);
//   return ( 
//   <div>
//       <h1>Hello,{name}</h1>
//   </div> 
//   )
// }

function App() {
  const user = {
    name: "Samrat",
    isAdmin: true,
  };

  return <Dashboard user={user} />;
}

function Dashboard({ user }) {
  return <Layout user={user} />;
}

function Layout({ user }) {
  return <Navbar user={user} />;
}

function Navbar({ user }) {
  return <UserProfile user={user} />;
}

function UserProfile({ user }) {
  return (
    <div>
      <h2>Welcome {user.name}</h2>
    </div>
  );
}

 export default App

