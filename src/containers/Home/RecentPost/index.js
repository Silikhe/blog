import React from 'react'
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
    return (
        <section style={ props.style}>
            <Card style={{ marginBottom: "20px" }}>
                <div className="postImageWrapper">
                    <img src={"https://images.unsplash.com/photo-1555586134-7c18af2c7854?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"} alt="postImage" />
                </div>
                <div style={{ textAlign: "center" }}>
                    <span>Featured</span>
                    <h2>Fitness spared to live fit</h2>
                    <span>posted on july 21st by blogging tips</span>
                    <p> posted on july 21st by blogging tipsposted on july 21st by blogging tipsposted on july 21st by blogging tipsposted on july 21st by blogging tipsposted on july 21st by blogging tips</p>
                    <button>Read More</button>
                </div>
            </Card>
        </section>
    )

}

export default RecentPosts