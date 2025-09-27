import Grid from './Grid'
//import { useState } from 'react'

function Main() {

    const handleClick = () => {
        console.log('Start')
    }

    const handleMouseDown = (e) => {
        e.currentTarget.style.transform = 'scale(0.95)';
      };
    
    const handleMouseUp = (e) => {
        e.currentTarget.style.transform = 'scale(1)';
      };

    return (
        <>
            <div className='topBar'>
                
                <div className='nBackSelector'>
                    <label>N-Back:</label>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
               
                <div className='startButtonContainer'>
                    <button 
                        className='startButton' 
                        onClick={handleClick}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                    >
                        Start
                    </button>
                </div>            
            </div>
            <Grid />
        </>
    )
}
export default Main