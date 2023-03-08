import React from 'react'

const Header = () => {
    return (
        <header>
            <div>
                <p>Liina Dance Studio</p>
                <img src={process.env.PUBLIC_URL + '/images/header_button.png'} alt="" />
            </div>
        </header>
    )
}

export default Header