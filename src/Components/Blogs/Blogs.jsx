import { useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
    const [blogs, setblogs] = useState([])

    useEffect(()=>{
        fetch('knowlwdge.json')
        .then(res => res.json())
        .then(data => setblogs(data))
    },[])
    return (
        <div className="md: w-2/3">
            <h1 className="text-3xl">Blogs</h1>
            {
                blogs.map(blog => <Blog blog={blog} key={blog.id} handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blogs;