import React from 'react'

const Card = ({dog}) => {
    return (
        <div className="card">
            <img src={dog} alt="Dog" />
        </div>
    )
}

export default Card
