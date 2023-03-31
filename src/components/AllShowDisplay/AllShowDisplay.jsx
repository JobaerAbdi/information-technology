import React, { useEffect, useState } from 'react';
import DisplayCards from '../DisplayCards/DisplayCards';
import BlogInformations from '../BlogInformations/BlogInformations';
import { toast } from 'react-toastify';


const AllShowDisplay = () => {
    const [blogs,setBlogs] = useState([]);
    const [sites,setSites] = useState([]);
    const [readTimes,setReadTimes] = useState([]);
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
        toast.info('🦄 All Ready Bookmarked!!!', {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    const handleReadTime = (singleBlog)=>{
        const newReadTimes = [...readTimes, singleBlog];
        setReadTimes(newReadTimes);
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
                         handleReadTime={handleReadTime}
                     ></DisplayCards>)
                    }
                </div>
                <div className='w-1/4 mt-12 bg-slate-200 rounded-lg'>
                    <BlogInformations
                       sites={sites}
                       readTimes={readTimes}
                    ></BlogInformations>
                </div>
            </div>
        </div>
    );
};

export default AllShowDisplay;