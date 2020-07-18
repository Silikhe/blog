import React from 'react'
import './style.css'
import Card from '../UI/Card'

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
    return (
        <div className='sidebarContainer'>
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
                    <div className='recentPost'>
                        <h3>Post Title</h3>
                        <span>July, 03,1999</span>
                    </div>
                    <div className='recentPost'>
                        <h3>Post Title</h3>
                        <span>July, 03,1999</span>
                    </div>
                    <div className='recentPost'>
                        <h3>Post Title</h3>
                        <span>July, 03,1999</span>
                    </div>
                    <div className='recentPost'>
                        <h3>Post Title</h3>
                        <span>July, 03,1999</span>
                    </div>
                </div>
            </Card>
        </div>
    )

}

export default Sidebar