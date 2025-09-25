import { useState } from 'react';
import Tile from './Tile'

function Grid() {
    const tiles = Array.from({ length: 9 }, (_, index) => index);
    const [activeIndex, setActiveIndex] = useState(null);

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 170px)',
        gridTemplateRows: 'repeat(3, 170px)',
        gap: '30px',
        justifyContent: 'center',
        alignContent: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        marginTop: '70px'
    }

    return (
        <div className='grid' style={gridStyle}> 
            {tiles.map((tileIndex) => (
                <Tile 
                key={tileIndex}
                active={tileIndex === activeIndex}
                onPress={() => setActiveIndex(tileIndex)}
                />
            ))}
        </div>
    )
    
}
export default Grid
