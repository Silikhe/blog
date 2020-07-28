import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Sidebar from '../../components/Sidebar';
import RecentPosts from './RecentPost';
import Layout from '../../components/Layout';
// import Header from '../../components/Header';


const Home = props => {

    const galaryHeight = 450;
    const galaryStyle = {
        height: galaryHeight + "px",
        overflow: "hidden",
        width: "100%"
    }

    return (
        <div style={{ boxSizing: "border-box" }} >
            <Card style={{ boxSizing: "border-box", objectFit: "cover", padding: "0" }}>
                <div style={galaryStyle} className='galaryPost'>
                    <div style={{overflow: "Hidden"}}>
                        <img src={"https://images.unsplash.com/photo-1512149673953-1e251807ec7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"} alt='sila' />
                    </div>
                </div>
            </Card>
            <section className="HomeContainer">
                <Layout>
                <RecentPosts style={{width: "70%"}}/>
                </Layout>
            </section>

        </div>
    );
}

export default Home;