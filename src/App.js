import { useEffect, useState } from 'react';
import './App.css';
import Categories from './com/Categories';

function App() {
  const [categories , setcategories]= useState([])


   useEffect(() => {
     let fetchCategories = async () => {
       const fetchdata = await fetch("https://api.chucknorris.io/jokes/categories")
       const jsondata = await fetchdata.json()
       setcategories(jsondata);
       }   
       fetchCategories()
   }, [])
   
  
  return (
    <div className="  h-fit">
           <h1 className="m-3 text-2xl text-green-500 animate-bounce">Chuck Norries</h1>
      <Categories categories={categories}/>
    </div>
  );
}

export default App;
