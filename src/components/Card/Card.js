import React from 'react';

function Card({pokemon}) {
    return(
        <div className="Card">
            <div className="Card_img">
                <img src="" alt=""/>
            </div>
            <div className="Card_Name">
                {pokemon.name}
            </div>
            <div className="Card_Types">
                {pokemon.types.map(type => {
                    return(
                        <div className="Card_type">
                            {type.type.name}
                        </div>
                    )
                })}
            </div>
            <div className="Card_info">
                <div className="Card_data Card_data--weight">
                    {}
                </div>

            </div>
        </div>
    )
}