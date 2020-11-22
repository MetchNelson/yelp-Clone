import React from 'react';
import './BusinessList.css';
import Businessg from '../BusinessFolder/Business.js';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                <Businessg />
                <Businessg />
                <Businessg />
                <Businessg />
                <Businessg />
                <Businessg />
            </div>
        )
    }
}

export default BusinessList;