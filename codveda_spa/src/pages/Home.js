import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Home = () =>{
    const {user} = useContext(AppContext);

    return(
        <div>
        <section className='hero'>
            <div>
                <h1>Welcome to HomeyEats</h1>
                <p>Welcome, {user}! this is home page</p>
                <a href='#' className='btn'>Shop now</a>
            </div>
        </section>

        <section className='features'>
            <div className='card'>
                <h3>Fresh Ingredients</h3>
                <p>We use only farm-fresh, locally-sourced ingredients.</p>
            </div>
            <div className='card'>
                <h3>Expert Chefs</h3>
                <p>Our chefs prepare each meal with love and care.</p>
            </div>
            <div className='card'>
                <h3>Fast Delivery</h3>
                <p>Your meal arrives hot and on time, every time.</p>
            </div>
        </section>

        <footer className="footer">
            <p>&copy; 2025 HomeyEats. All rights reserved.</p>
        </footer>
        </div>
    )
}

export default Home