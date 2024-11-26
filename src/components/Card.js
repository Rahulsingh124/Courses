import React from "react";
import { toast } from "react-toastify";
import {FcLike,FcLikePlaceholder } from "react-icons/fc";

const Card = (props) =>{
   // to find out the props
   let course= props.course;
   let likedCourses=props.likedCourses;
   let setLikedCourses=props.setLikedCourses;
    function clickhandler(){
   // if liked course kai andr current course ki id padi hai tho already pehle sai like hai
   // than remove course id from likedcourse
   if(likedCourses.includes(course.id)){
    // prev mai sare course filter remove kardo jinki id !== course.id
    setLikedCourses((prev)=> prev.filter((cid=>cid!==course.id)) );
    toast.warning("liked removed")
   }

   else{
    // pehle se like nahi hai tho mujhe insert karna hai yai course liked courses mai
    if(likedCourses === 0){
        // if lenght 0
        setLikedCourses([course.id]);
    }
    else{
        //non empty
        setLikedCourses((prev) => [...prev,course.id]);
    }
    toast.success("Liked successfully")
   }
    }
    return(
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md  overflow-hidden">
        <div className="relative">
        <img src={course.image.url} alt={course.title} onError={(e) => console.error('Image loading error:', e)} />
            </div>
            <div className="w-[40px] h-[40px] bg-white rounded-full absolute ml-64 -mt-5
               grid place-items-center">
                <button onClick={clickhandler} >
                    {
                        // depend karega ki likedcoursed kai andr current id hai ki nahi hai
                        likedCourses.includes(course.id) ? <FcLike fontSize="1.75rem"/> :<FcLikePlaceholder fontSize="1.75rem"/> 
                    }
                    
                </button>
            </div> 

            <div className="p-4">
                <p className="text-white text-lg font-semibold leading-6">{course.title}</p>
                <p className="mt-2 text-white">
                    {
                    course.description.length > 100 ?(course.description.substr(0,100)) + "..." :
                    (course.description)
                    
                    }

                </p>
            </div> 
            </div>

    )
}

export default Card;