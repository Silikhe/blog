import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
// import Header from '../../components/Header';


const Home = props => {

    const galaryHeight = 450;
    return(
        <div className='galaryPost'>
            <Card>
                <section>
                  <img src={"https://images.unsplash.com/photo-1512149673953-1e251807ec7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"} alt='sila'/>
                </section>
            </Card>
        </div>
    );
}

export default Home;