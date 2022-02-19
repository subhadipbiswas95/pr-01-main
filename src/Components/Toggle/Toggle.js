import React, { useState } from 'react';
import Switch from "react-switch";



const Toggle = () => {
    const [checked, setChecked] = useState(false);
    const handleChange = (nextChecked) => {
        setChecked(nextChecked);
    };
    return (
        <div className="row mt-3 mb-2 toggleSwitchSpcing">
            <label htmlFor="material-switch" className="material-switch">
                <span className="toggleSwitchSpcing-1">Veg</span>
                <Switch
                    checked={checked}
                    onChange={handleChange}
                    onColor="#FADBD8 "
                    onHandleColor="#F5b7B5"
                    offHandleColor="#D5F5E3"
                    offColor="#82E0AA"
                    handleDiameter={15}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={12}
                    width={30}
                    className="react-switch"
                    id="material-switch"
                />
                <span className="toggleSwitchSpcing-2">All</span>
            </label>
        </div>

    )
}

export default Toggle
