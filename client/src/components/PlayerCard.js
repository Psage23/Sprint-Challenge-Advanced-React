import React from 'react'

//this is where I want to build out the card layout for each player
// I want to use reactstrap, need to install

const PlayerCard = props => {
    return (
        <div className="card">
            {props.players.map(person => {
                return (
                    <div className="player-card">
                    <h1>Name: {person.name}</h1>
                    <p>Country: {person.country}</p>
                    <p>Searches: {person.searches}</p>
                    </div>
                )
            })}
            
        </div>
    )
}

export default PlayerCard;