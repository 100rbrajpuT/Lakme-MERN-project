import React, { useEffect, useState } from 'react'
import {useSearchParams} from "react-router-dom"

const FilterSort = () => {
    
    let [searchParams, setSearchParams] = useSearchParams();
    const initialGenreParams = searchParams.getAll("cate");
    const [category , setCategory] = useState( initialGenreParams || []);
    
    const initialSortParams = searchParams.get("sortBy")
    const [sortBy, setSortby] =useState( initialSortParams ||"");

    const handleGenreChange=(e)=>{
        const option = e.target.value;
        //if option is already present in category remove it 
        // else add it in the category array
        let newCatoegory = [...category];
        if(category.includes(option)){
            newCatoegory.splice(newCatoegory.indexOf(option),1)
        }else{
            //add it
            newCatoegory.push(option);
        }
        setCategory(newCatoegory);
    }
    console.log("cat", category)
    const handleSortby=(e)=>{
           setSortby(e.target.value)
    }
  console.log(sortBy)

    useEffect(()=>{
        //if the category changes then reflect it on the url search as well
        if(category || sortBy){
            const params = {};
            category && (params.cate = category);
            sortBy && (params.sortBy = sortBy)
            setSearchParams(params);
        }
    },[category, setSearchParams, sortBy])
    console.log("serach",searchParams.getAll("cate"))

  return (
    <div style={{display:"flex", border:"5px solid black", justifyContent:"space-around", fontFamily:"sans-serif", fontSize:"10px"}}>
        <div>
        <h3>Filter</h3>
        <div >
            <input type="checkbox" defaultChecked={category.includes("Cream")} value="Cream" onChange={handleGenreChange}/>
            <label>Cream</label>
        </div>
        <div>
            <input type="checkbox" defaultChecked={category.includes("Kajal")} value="Kajal" onChange={handleGenreChange}/>
            <label>Kajal</label>
        </div>
        <div>
            <input type="checkbox" defaultChecked={category.includes("Lip-Color")} value="Lip-Color" onChange={handleGenreChange}/>
            <label>Lip-Color</label>
        </div>
        
        <div>
            <input type="checkbox" defaultChecked={category.includes("Green-Kit")} value="Green-Kit" onChange={handleGenreChange}/>
            <label>Green-Kit</label>
        </div>
        {/* <div>
            <input type="checkbox" value="Classical Crossover" onChange={handleGenreChange}/>
            <label>Classical Crossover</label>
        </div>
        <div>
            <input type="checkbox" value="Singer/Songwriter" onChange={handleGenreChange}/>
            <label>Singer/Songwriter</label>
        </div> */}
        <div>
            <input type="checkbox" defaultChecked={category.includes("Matie")} value="Matie" onChange={handleGenreChange}/>
            <label>Matie</label>
        </div>
    </div> 
    <div>
        
      <h3>Sort</h3>
      <div onChange={handleSortby}>
        <div>
            <input type="radio" value="asc" defaultChecked={sortBy === "asc"} name="sortBy" />
           <label>Ascending</label>
        </div>
        <div>
            <input type="radio" value="desc" defaultChecked={sortBy === "desc"} name="sortBy" />
           <label>Descending</label>
        </div>
      </div>
      </div>  
    </div>
  )
}

export default FilterSort
