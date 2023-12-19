import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
    return (
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-1.jpg' className='img-fluid w-100' alt='blog' />
            </div>
            <div className='blog-content'>
                <p className='date'>1 Dec, 2022</p>
                <h5 className='title'>A beautiful sunday morning renaissance</h5>
                <p className='desc'>You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury – it’s not something people need, but it’s what they want. It really pulls at their heart. I have a fantastic relationship with money.</p>
                <Link to='/blog/:id' className='button'>Read More</Link>
            </div>           
        </div>    
    )  
}

export default BlogCard