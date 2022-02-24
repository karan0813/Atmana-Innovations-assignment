import { useEffect, useState } from 'react';
import './App.css';
import Categories from './com/Categories';

function App() {
  const [categories, setcategories] = useState([])
  const [loding, setloding] = useState(false)



   useEffect(() => {
     let fetchCategories = async () => {
       setloding(true)
       const fetchdata = await fetch("https://api.chucknorris.io/jokes/categories")
       const jsondata = await fetchdata.json()
       setloding(false)
       setcategories(jsondata);
       }   
       fetchCategories()
   }, [])
   
  
  return (<>
    {loding ? <div className="flex flex-col items-center justify-center  mt-10"> <div class="lds-facebook w-full  "><div></div><div></div><div></div></div></div>
      : <div className="  h-fit flex flex-col items-center justify-center">
           <h1 className="m-3 text-4xl text-green-500 animate-bounce font-bold ">Chuck Norries</h1>
      <Categories categories={categories}/>
    </div>}
    </>
  );
}

export default App;
