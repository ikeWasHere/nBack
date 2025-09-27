function Tile({ onPress, active = false }) {
  const style = {
    width: '170px',
    height: '170px',
    borderRadius: '10px',
    border: active ? 'none' : '2px solid silver',
    backgroundColor: active ? '#ec7a1c' : 'transparent',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease, transform 0.1s ease'
  };

  const handleMouseDown = (e) => {
    e.currentTarget.style.transform = 'scale(0.95)';
  };

  const handleMouseUp = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };
     
  return (
    <button
      style={style}
      onClick={onPress}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
    </button>
  )
}
export default Tile
