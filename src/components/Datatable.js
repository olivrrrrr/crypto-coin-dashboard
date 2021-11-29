import React from 'react'

function Datatable({cryptoCoin}) {
    return (
        <div>
            <img src={cryptoCoin.image} />
            <h1>{cryptoCoin.name}</h1>
        </div>
    )
}

export default Datatable
