import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setblogs] = useState([])

    useEffect(()=>{
        fetch('knowlwdge.json')
        .then(res => res.json())
        .then(data => setblogs(data))
    },[])
    return (
        <div className="md: w-2/3">
            <h1>Blogs</h1>
            {
                blogs.map(blog => <Blog blog={blog} key={blog.id}></Blog>)
            }
        </div>
    );
};

export default Blogs;