import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Players.css';

const Players = (props) => {
    const {image, name, salary, email} = props.member;
    return (
        <div className="profile-container">
                <div className="profile-img">
                    <img src={image} alt="" ></img>
                </div>
                <div className="profile-body">
                    <h3>Name : {name}</h3>
                    <p><b>Salary :</b> {salary}</p>
                    <p><b>Email :</b> {email}</p>
                    <button onClick={ () => props.handleAddPlayer(props.member)}><FontAwesomeIcon icon={faUserPlus} />Add Player</button>
                </div>
        </div>
    );
};

export default Players;