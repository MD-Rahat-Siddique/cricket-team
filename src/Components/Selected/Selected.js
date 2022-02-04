import React from 'react';
import './Selected.css';

const Selected = (props) => {

    const teammate = props.teammate;

    const totalBudget = teammate.reduce((total, teammate) => total + parseFloat(teammate.salary) , 0);

    const divStyle = {
        border: '1px solid lightgray',
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '10px'
    }

    return (
        <div className="selected-container">
            <div className="headline">
                <h3>Selected Players</h3>
            </div>
            <div className="body">
                <p><b>Total Players : </b> {teammate.length}</p>
                <p><b>Total Budget : </b> {totalBudget.toFixed(2)}</p>
                <div>
                    {
                        teammate.map(member => <div style={divStyle}> <h3>{member.name}</h3> <p><b>Salary : </b> {member.salary}</p></div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Selected;