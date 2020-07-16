import React from 'react'
import './style.css'
import Card from '../UI/Card'

export default function BlogPost() {
    return (
        <div className='blogPostContainer'>
            <Card>
                <div className='blogHeader'>
                    <span className='blogCategory'>Feature</span>
                    <h1 className='postTitle'>Beutiful Is Always Beautiful</h1>
                    <span className='postedBy'>posted on July 21, 2020 by Silas Silikhe Blog</span>
                </div>

            </Card>
        </div>
    )
}
