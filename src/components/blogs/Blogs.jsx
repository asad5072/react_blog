import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/blog";
import PropTypes from 'prop-types';


const Blogs = ({handleAddtoBookmark})=> {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h2>Blog: {blogs.length}</h2>

            {
                blogs.map(blog => <Blog 
                    blog={blog} 
                    key={blog.id}
                    handleAddtoBookmark= {handleAddtoBookmark}
                    >
                    </Blog>)
            }
        </div>
    );
}

Blogs.propTypes = {
    handleAddtoBookmark: PropTypes.func
}

export default Blogs ;