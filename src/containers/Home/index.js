import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
// import Header from '../../components/Header';


const Home = props => {

    const galaryHeight = 450;
    const galaryStyle = {
        height: galaryHeight + "px",
        overflow: "hidden",
        width: "100%"
    }

    return (
        <div style={{boxSizing: "border-box"}} >
            <Card style={{ padding: "0"}}>
                <div style={galaryStyle} className='galaryPost'>
                        <div>
                            <img  src={"https://images.unsplash.com/photo-1512149673953-1e251807ec7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"} alt='sila' />
                        </div>
                </div>
            </Card>
        </div>
    );
}

export default Home;