import { useState } from 'react';
import Tile from './Tile'

function Grid() {
    const tiles = Array.from({ length: 9 }, (_, index) => index);
    const [activeIndex, setActiveIndex] = useState(null);

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 20px)',
        gridTemplateRows: 'repeat(3, 20px)',
        gap: '200px',
        justifyContent: 'center',
        alignContent: 'center',
        margin: '50px auto'
    }

    return (
        <div style={gridStyle}> 
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
