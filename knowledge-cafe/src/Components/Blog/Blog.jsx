import React from 'react';
import { FaBookmark } from "react-icons/fa6";

const Blog = ({ blog , handleBookMark }) => {
    return (
        <div>
            <div className="border-b-2">
                <figure className="px-10 pt-10">
                    <img
                        src={blog.cover}
                        alt=""
                        className="rounded-xl" />
                </figure>
                <div className='mt-3 flex items-center justify-center gap-3'>
                    <img className='w-[50px]' src={blog.author_img} alt="" />
                    <h1>{blog.author}</h1>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{blog.title}</h2>
                    <div className='flex gap-3'>
                        {
                            blog.hashtags.map((hash) => <p>#{hash}</p>)
                        }
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary">Mark As Read</button>
                        <button onClick={()=>handleBookMark(blog)} className="btn btn-primary"><FaBookmark />Book mark</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;