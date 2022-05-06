import data from './data'

// console.log(data)
import Menu from './components/Menu'
import Categories from './components/Categories'
import { useState } from 'react'


const set=new Set(data.map((elem)=>elem.category))
// console.log(set)
const categoryarr=['all',...set]
// console.log(categoryarr)

function App() {
    const [newdata,setNewdata]=useState(data)

    const filterCat=(categ)=>{
        if(categ=="all")
        {
setNewdata(data)

        }
        else
        {
const updateddata=data.filter((el)=>el.category==categ)
setNewdata(updateddata)

        }
    }

  return (
    <div className='container'>
         <section className='menu'>
             <h1>OUR MENU</h1>
             <div className='underline'>

             </div>
         </section>
         <br/>
         <br/>
         <Categories arr={categoryarr} filterCat={filterCat}/>
         <br/>
         <br/>
         <Menu data={newdata}/>
         
    </div>
  )
}

export default App