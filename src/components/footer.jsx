import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className='call'>
                <img src={process.env.PUBLIC_URL + '/images/call.png'} alt="" />
                <p className='title'>Call</p>
            </div>
            <div className='email'>
                <img src={process.env.PUBLIC_URL + '/images/email.png'} alt="" />
                <p className='title'>Email</p>
            </div>
            <div className='instagram'>
                <img src={process.env.PUBLIC_URL + '/images/instagram.png'} alt="" />
                <p className='title'>Instagram</p>
            </div>
        </footer>
    )
}

export default Footer