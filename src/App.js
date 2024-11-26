import React, {useState,useEffect} from "react";
import { toast } from "react-toastify";
import {apiUrl,filterData} from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";

const App = () => {
  // output ko courses name kai variable kai andar store kara liya hai
  const[courses,setCourses]=useState(null);
  const[loading,setLoading]=useState(true);
  const[category,setCategory]=useState(filterData[0].title); // pehle object ki title wali value 
  useEffect(()=>{
    // aync function bana diya async function fetchData 
    const fetchData = async () => {
      setLoading(true);
      try {

        const response = await fetch(apiUrl);
        const output= await response.json();
        // save the data into variable output
       setCourses(output.data);
        
      } catch (error) {
        toast.error("Something went wrong");
      }
      setLoading(false);
    }
    fetchData();
  },[]);


  return (
    <div className="min-h-screen flex flex-col bg-bgDark2 ">

    <div>
    <Navbar/>
    </div>
     
     <div className="">
      <div>
      <Filter filterData={filterData}
      // cards mai wahi show karonga jo category par depend karegi
      // like devlopment ka hai wahi show karonga ya jesa bhi hai mai wahi show karonga
      // and now mene category ko pass kar diya cards kai sath
      category={category}
        setCategory={setCategory}
      />
      {/* // filter data as a props send kar diya */}
      </div>
     
      {/* loading wale variable par depend akrega ki loading ka icon dekhye ya fir card ka
        if loading true show spinner if false than show card */}
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
       
      {loading ? (<Spinner/>) :(<Cards courses={courses} category={category}/>)};
        
      </div>

      </div>

      </div>

  );
};

export default App;
