import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Home = () =>{
    const {user} = useContext(AppContext);

    return(
        <div className='container'>
            <h1>Home page</h1>
            <p>Welcome, {user}! this is home page</p>
        </div>
    )
}

export default Home