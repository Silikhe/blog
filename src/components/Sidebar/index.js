import React, { useState, useEffect } from 'react'
import './style.css'
import Card from '../UI/Card'
import Searchbar from '../Searchbar'
import blogPost from '../../Data/blog.json'
import { NavLink } from 'react-router-dom'
/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const posts = blogPost.data
        setPosts(posts);
    }, posts);

    return (
        <div className='sidebarContainer'>
            <Searchbar />
            <Card style={{ marginBottom: '20px' }}>
                <div className='cardHeader'>
                    <span>About-Us</span>
                </div>
                <div className='profileImage'>
                    <img src={require("../../Data/BlogPostImages/phototwo.jpg")} alt='post image' />
                </div>
                <div className='cardBody'>
                    <p className='PersonalBio'>Meh synth Schlitz, tempor duis single-origin coffee ea
                    next level ethnic fingerstache fanny pack nostrud. Photo booth
                         anim 8-bit hella, PBR 3 wolf moon beard Helvetica.</p>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px' }}>
                <div className='cardHeader'>
                    <span>Social Network</span>
                </div>
            </Card>

            <Card>
                <div className='cardHeader'>
                    <span>Recent Posts</span>
                </div>
                <div className='recentPosts'>

                    {
                        posts.map(post => {
                            return (
                                <NavLink to={`/post/${post.id}`}>
                                    <div className='recentPost'>
                                        <h3>{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                            )
                        })
                    }

                </div>
            </Card>
        </div>
    )

}

export default Sidebar