// array kai andar 5 object ahi pacho kai liye button create karna chahta hu
// filterData (props)=> let filterdata= props.filterData
/* filter data par map laga denge har kisi data kai liye button chahiye
    jo bhi data ka title hoga woo button ka text ho jayega */
import React from "react";

const Filter =(props) =>{
  // filterData mai akar recieve kar liya jo props app.js mai
  // beja tha category wala we received it with the help of props 

  let filterData=props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  function filterHandler(title){
    setCategory(title);
  }
  return(  
  <div className="w-11/12 flex flex-wrap justify-center text-center max-w-max space-x-4 gap-y-4 mx-auto py-4">
    
    {filterData.map((data) =>(
     // Add a return statement here
    
     <button 
     className =  {`text-lg rounded-md px-2 py-1 text-white font-medium bg-black hover:bg-opacity-50 border-2 transition-all duration-300 
      ${category===data.title ?
        "bg-opacity-60 border-white" :
        "bg-opacity-40 border-transparent"
      }
      `}
       
     key= {data.id}
         onClick={()=>filterHandler(data.title)}
         >
       {data.title}
        </button>
     ))};
    </div>

  );
};

export default Filter ;