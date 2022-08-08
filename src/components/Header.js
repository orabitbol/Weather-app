import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div className='main__header'>
            <h2 style={{color:'white'}}>Or Abitbol</h2>
            <div>
                <button className="button" onClick={() => {
                    window.location.href = '/'
                }} >Home</button>
                <button className="button" onClick={() => {
                    window.location.href = '/favorites'
                }} > Favorites</button>
            </div>
        </div>
    )
}

export default Header;