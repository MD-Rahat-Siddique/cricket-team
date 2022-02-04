import React, { useEffect, useState } from 'react';
import './Teams.css';
import fakeData from '../../fakeData/players.json';
import Players from '../Players/Players';
import Selected from '../Selected/Selected';


const Teams = () => {

    const [members, setMembers] = useState([]);
    useEffect( () => {
        setMembers(fakeData);
    }, [])
    
    const [teammate, setTeammate] = useState([]);
    const handleAddPlayer = (member) => {
        console.log(member.name);
        const newTeammate = [...teammate, member];
        setTeammate(newTeammate);
    }

    
    return (
        <div className="teams-container">
            <div className="players-container">
                {
                    members.map(member => <Players key={member.id} member={member} handleAddPlayer={handleAddPlayer}></Players>)
                }
            </div>
            <div>
                <Selected teammate={teammate}></Selected>
            </div>
        </div>
    );
};

export default Teams;