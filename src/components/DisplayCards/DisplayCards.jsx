import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const DisplayCards = ({blog}) => {
    console.log(blog);
    const {id,authorName,blogTitle,coverImage,authorImage,readTime,publishDate} = blog;
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl mt-8">
            <figure><img src={coverImage} /></figure>

            <div className="card-body">
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <div className=''>
                           <img className="w-14 h-14 rounded-full" src={authorImage} />
                        </div>
                        <div className='ml-4'>
                            <h2 className="font-bold text-1xl">{authorName}</h2>
                            <h2>{publishDate}</h2>
                        </div>
                    </div>
                    <div>
                        <h2>0{readTime} Minute Red</h2>
                    </div>
                </div>
                <div className="mt-4">
                    <h1 className='font-bold text-2xl'>{blogTitle}</h1>
                    <a href="/">
                      <FontAwesomeIcon icon={faCoffee} />
                    </a>
                </div>
            </div>
            </div>
        </div>
    );
};

export default DisplayCards;