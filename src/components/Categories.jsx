import "../index.css"

function Categories({arr,filterCat}) {
  return (
    <div className="catcon">

   {
       arr.map((elem,index)=>{

        return (
            <button className="butt" key={index}
            onClick={()=>{filterCat(elem)}}
            >{elem}
            </button>
        )


       })
   }

    </div>
  )
}

export default Categories