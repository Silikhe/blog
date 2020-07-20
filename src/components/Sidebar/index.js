import React from 'react'
import './style.css'
import Card from '../UI/Card'
import Searchbar from '../Searchbar'
import blogPost from '../../Data/blog.json'
/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const posts = blogPost.data
        setPost(posts);
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
                    {
                        posts.map(post => {
                            <div className='recentPost'>
                                <h3>post</h3>
                                <span>July, 03,1999</span>
                            </div>
                        })
                    }
                </div>
            </Card>
        </div>
    )

}

export default Sidebar