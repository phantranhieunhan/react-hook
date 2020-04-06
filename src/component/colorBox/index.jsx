import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './colorBox.scss';

ColorBox.propTypes = {
    
};
function getRandomColor(){
    const COLOR_LIST =['deeppink', 'yellow', 'black', 'blue', 'red', 'green', 'orange', 'white']
    const randomIndex= Math.trunc(Math.random()*7);
    return COLOR_LIST[randomIndex];
}

function ColorBox() {
    const [color, setColor] = useState(()=>{    
    const initColor = localStorage.getItem('box_color') || 'deeppink';
    return initColor;
})
    function handleBoxClick(){
        //get radom color --> set color
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor)
    }
    return (
        <div 
            className="color-box"
            style={{backgroundColor: color}} 
            onClick={handleBoxClick}   
        >
            Helloooo
        </div>
    );
}

export default ColorBox;