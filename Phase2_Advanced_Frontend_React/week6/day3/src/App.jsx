import { useState } from 'react'
import ProductCard from './components/ProductCard';
import Button from './components/Button';
import UserCard from './components/UserCard';
import Form from './components/Form';
import './App.css'

function App() {
  const [name, setName]=useState("Developer");
  console.log("BUtton rendered!");
  return (
    <>
      <div>
          <h1>Hello, {name}</h1>
          <button onClick={()=>name === "Developer" ? setName("React PRo") : setName("Developer")} style={{padding:"10px"}}> 
            Change Name
          </button>
      </div>
      <ProductCard title={"Book"} price={2000}></ProductCard>
      <h2>we can render multiple components</h2>
      <ProductCard title="t-shirt" price={500}></ProductCard>
      <ProductCard title="Burger" price={100}></ProductCard>
      <ProductCard title="Slippers" price={550}></ProductCard>
      <h2>here only one argument or props is passed</h2>
      <ProductCard title="NOthing Phone"></ProductCard>

      <Button onClick={()=>console.log("clicked")} label="Push"></Button>

      <h2>Practice UserCard</h2>
      <div style={{
        backgroundColor:"gray",
        padding:"10px",
        display:"flex"
      }}>
          <UserCard name="Samrat" role="Frontend Developer"></UserCard>
          <UserCard name="Samar" role="Backend Developer"></UserCard>
          <UserCard name="Sudheer" role="Mobile Apps Developer"></UserCard>
      </div>
      <h2>Practice Form</h2>
      <Form></Form>      
    </>
  )
}

export default App
