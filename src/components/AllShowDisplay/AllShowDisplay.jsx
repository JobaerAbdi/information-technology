import React, { useEffect, useState } from 'react';
import DisplayCards from '../DisplayCards/DisplayCards';
import BlogInformations from '../BlogInformations/BlogInformations';


const AllShowDisplay = () => {
    const [blogs,setBlogs] = useState([]);
    const [sites,setSites] = useState([]);
    // console.log(blogs);
    // console.log(sites);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data=> setBlogs(data));
    },[])

    const handleBookMarked = (singleBlog)=>{
        const newSites = [...sites, singleBlog];
        setSites(newSites);
    }
    return (
        <div>
            <div className='flex lg:px-12'>
                <div className='w-3/4'>
                   {
                     blogs.map(blog=><DisplayCards
                         key={blog.id}
                         blog={blog}
                         handleBookMarked={handleBookMarked}
                     ></DisplayCards>)
                    }
                </div>
                <div className='w-1/4 mt-12 bg-slate-200 rounded-lg'>
                    <BlogInformations
                       sites={sites}
                    ></BlogInformations>
                </div>
            </div>
        </div>
    );
};

export default AllShowDisplay;