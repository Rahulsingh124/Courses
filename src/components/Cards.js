import React,{useState} from "react";

import Card from "./Card";

const Cards = (props) =>{
  let courses=props.courses;
  let category=props.category;
    // jitni bhi values a rahi hai un sabhi kai upar
        // for loop chalaya
        // console.log("printing courses");
        // console.log(courses);
        // getcourses name sai function create kar liya

        // all courses track here so here i defined my liked and unliked state to store 
        // liked inside lc and store unlike inside setlc
        // and in the strating we give an empty array to the likedcourses
        // starting me koi bhi course liked nahi hai 
        const[likedCourses,setLikedCourses]=useState([]);
       
   
     function getCourses(){
      if(category ==="All"){

        let allCourses=[];
      Object.values(courses).forEach(array=>{
        array.forEach(courseData=>{
          allCourses.push(courseData);
      })

     })
      return allCourses;

      }
      else{
        // mai shirf spcefic category ka data array karonga.....
        // courses kai andr char array the 
        return courses[category];
      }
    }
     return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
            getCourses().map((course) =>{
              return( <Card key={course.id} course={course}
              likedCourses={likedCourses} 
              setLikedCourses={setLikedCourses}/>
              // props kai andar sabhi chije pass kar di hai
              )
            })
        }
            </div>
        
     )

     }


export default  Cards 