import React, { useState } from 'react';
import { useEffect } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("./knowledge.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    console.log(blogs);

    return (
        <div >
            <div className='bg-slate-400 p-2 rounded-sm'>
                <h2>Total Blogs available : {blogs.length}</h2>
            </div>
            <div className="all-blogs">
                {
                    blogs.map((blog) => <Blog blog={blog} key={blog.id}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;