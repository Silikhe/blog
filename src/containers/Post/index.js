import './style.css'
import BlogPost from '../../components/BlogPost'
import Sidebar from '../../components/Sidebar'


import React from 'react'

/**
* @author
* @function Post
**/

const Post = (props) => {
    return (
        <section className='container'>
            <BlogPost {...props}/>
            <Sidebar/>
        </section>
    )

 }

export default Post