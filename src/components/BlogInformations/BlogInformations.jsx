import React from 'react';

const BlogInformations = ({sites,readTimes}) => {
    //console.log(readTimes);
    let spentTime = 0;
    for(const time of readTimes){
        spentTime = spentTime + time.readTime;
    };
    
    return (
        <div className='sticky top-3'>
            <div className='lg:ml-2'>
                <h1 className='font-bold text-2xl bg-white mr-2 py-5 mt-5 pl-1 rounded-lg'>Spent time on read : {spentTime} Min</h1>
                <h1 className='font-bold text-2xl mt-10 pl-1'>Bookmarked Blogs : {sites.length} </h1>
                <div className='mt-5'>
                    <h1 className='font-bold'>{sites.map(site=><div className='py-3 pl-5 mr-10 mb-3 rounded-lg bg-white'>{site.blogTitle}</div>)}</h1>
                </div>
            </div>
        </div>
    );
};

export default BlogInformations;