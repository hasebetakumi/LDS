import React from 'react'

const Top = () => {
    return (
        <div id='top'>
            <div className='frame'></div>
            <div className='item-list'>
                <img src={process.env.PUBLIC_URL + '/images/top.png'} alt="" />
                <div className='title'>
                    <p>Liina</p>
                    <p className='second'>Dance</p>
                    <p className='third'>Studio</p>
                </div>
            </div>
        </div>
    )
}

export default Top