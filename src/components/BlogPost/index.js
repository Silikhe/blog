import React,{useState, useEffect} from 'react'
import './style.css'
import Card from '../UI/Card'
import blogPost from '../../Data/blog.json'
// import blogImage from '../../Data/BlogPostImages'


 /**
 * @author
 * @function BlogPost
 **/

 const BlogPost = (props) => {
     const [post, setPost] = useState({});


    useEffect(()=>{
        const postId = props.match.params.postId;
        const post = blogPost.data.find( post => post.id == postId)
        setPost(post);
         console.log(blogPost.data.find(post => post.id))
         console.log("hereee",post.blogTitle)
    })
    return (
        <div className='blogPostContainer'>
            <Card>
                <div className='blogHeader'>
                    <span className='blogCategory'>Feature</span>
    <h1 className='postTitle'>Silas{post.blogTitle}</h1>
                    <span className='postedBy'>posted on July 21, 2020 by Silas Silikhe Blog</span>
                </div>
                <div className='postImageContainer'>
                    <img src={require("../../Data/BlogPostImages/photofour.jpg")} alt='post image'/>
                </div>
                <div className='postContent'>
                    <h3>Post Title</h3>
                    <p>lorem What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting
                         industry Lorem Ipsum has been the industry's standard dummy text ever since
                         the 1500s when an unknown printer took a galley of type and scrambled it to make a type
                         specimen book it has?</p>
                </div>
            </Card>
        </div>
    )

  }

 export default BlogPost