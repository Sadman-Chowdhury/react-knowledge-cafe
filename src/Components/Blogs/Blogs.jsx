import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setblogs] = useState([])

    useEffect(()=>{
        fetch('knowledge.json')
        .then(res => res.json())
        .then(data => setblogs(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Blogs;