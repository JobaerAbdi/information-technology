import React, { useEffect, useState } from 'react';
import DisplayCards from '../DisplayCards/DisplayCards';


const AllShowDisplay = () => {
    const [blogs,setBlogs] = useState([]);
    console.log(blogs);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data=> setBlogs(data));
    },[])
    return (
        <div>
            <div className='flex lg:px-12'>
                <div className='w-3/4'>
                   {
                     blogs.map(blog=><DisplayCards
                         key={blog.id}
                         blog={blog}
                     ></DisplayCards>)
                    }
                </div>
                <div className='w-1/4 lg:ml-5'>
                    <h1>gfgfbGFBGFBGB</h1>
                </div>
            </div>
        </div>
    );
};

export default AllShowDisplay;