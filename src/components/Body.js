import React from "react";
import useFetch from "../useFetch";
import BlogList from "./BlogList";

const  Body= () => {
    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    
    return (
        <div className="home">
            { isPending && <div>Loading...</div>}
            { error && <div> {error} </div>}
            { blogs && <BlogList blogs={blogs}/>}
        </div>
    );
}
 
export default Body;