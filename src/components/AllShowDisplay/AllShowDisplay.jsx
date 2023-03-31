import React, { useEffect, useState } from 'react';
import DisplayCards from '../DisplayCards/DisplayCards';
import BlogInformations from '../BlogInformations/BlogInformations';
import { toast } from 'react-toastify';


const AllShowDisplay = () => {
    const [blogs,setBlogs] = useState([]);
    const [sites,setSites] = useState([]);
    const [readTimes,setReadTimes] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data=> setBlogs(data));
    },[])

    const handleBookMarked = (singleBlog)=>{
        const newSites = [...sites, singleBlog];
        setSites(newSites);
        const isBookmarked = sites.find(site=> site.id === singleBlog.id);

        if(isBookmarked){
            toast.warn('Oops!! Bookmarked Already Added.', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
        else{
            toast.success('Bookmark Added Successfully!!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    };

    const handleReadTime = (singleBlog)=>{
        const newReadTimes = [...readTimes, singleBlog];
        setReadTimes(newReadTimes);
    };
    return (
        <div>
            <div className='flex flex-col lg:flex-row mb-10 lg:px-12'>
                <div className='sm:w-full lg:w-3/4'>
                   {
                     blogs.map(blog=><DisplayCards
                         key={blog.id}
                         blog={blog}
                         handleBookMarked={handleBookMarked}
                         handleReadTime={handleReadTime}
                     ></DisplayCards>)
                    }
                </div>
                <div className='sm:w-full lg:w-1/4 mt-12 bg-slate-200 rounded-lg'>
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