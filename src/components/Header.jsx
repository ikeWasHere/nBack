import brainLogo from '../assets/brain.png'

function Header() {
    return (
         <header>
            <h1>NBack</h1>
            <img src={brainLogo} alt="brain-logo" />
        </header>
        
    )
}
export default Header