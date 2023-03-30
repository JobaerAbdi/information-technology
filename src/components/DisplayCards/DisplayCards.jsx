import React from 'react';

const DisplayCards = ({blog}) => {
    console.log(blog);
    const {id,authorName,blogTitle,coverImage,authorImage,readTime,publishDate} = blog;
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl mt-8">
            <figure><img src={coverImage} /></figure>
            <div>
                <img className="w-14 h-14 rounded-full" src={authorImage} />
            </div>
            <div className="card-body">
                <h2 className="card-title">{authorName}</h2>
                <h2 className="card-title">{readTime}</h2>
                <h2 className="card-title">{publishDate}</h2>
                <p>{blogTitle}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default DisplayCards;