import React, { useState } from 'react';
import '../../styles/collapse.css'
import Arrow from '../../assets/chevron-down.svg'


function Collapse({ title, text }) {
    const [isCollapsed, setCollapsed] = useState(true);

    const handleToggle = () => {
        setCollapsed(!isCollapsed);
    };

    return (
        <div className="collapse">
            <div className="header" onClick={handleToggle}>
                <div className="title">{title}</div>
                <div className={`arrow ${isCollapsed ? '' : 'rotate'}`}>
                    <img src={Arrow} alt="Arrow" />
                </div>
            </div>

            <div className={`text ${isCollapsed ? '' : 'show'}`}>
                <div>{text}</div>
            </div>
        </div>
    )
}

export default Collapse